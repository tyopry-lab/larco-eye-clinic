<?php
/* ==========================================================================
   Larco Eye Clinic — envío de formularios por correo desde el propio hosting.

   Lo usan Contáctanos (_form=contacto → citas@) y el consentimiento de datos
   (_form=consentimiento → protecciondatos@). El destinatario NO viene del
   formulario: se elige aquí según _form, así que el script no sirve para
   mandar correo a terceros. Solo se aceptan los campos de la lista de cada
   formulario; cualquier otro se ignora.

   Respuesta: si la página envió con JavaScript (cabecera Accept JSON), JSON
   {ok:true} o {ok:false,error}. Sin JavaScript, redirige a gracias.html o
   muestra una página corta con el error.
   ========================================================================== */

declare(strict_types=1);
date_default_timezone_set('America/Guayaquil');
mb_internal_encoding('UTF-8');

const REMITENTE = 'info@larcoeyeclinic.com';

$FORMULARIOS = [
    'contacto' => [
        'para'   => 'citas@larcoeyeclinic.com',
        'asunto' => 'Mensaje desde el sitio — Larco Eye Clinic',
        'titulo' => 'Nuevo mensaje desde Contáctanos',
        // campo => [etiqueta en el correo, obligatorio, largo máximo]
        'campos' => [
            'nombre'   => ['Nombre', true, 100],
            'apellido' => ['Apellido', true, 100],
            'motivo'   => ['Motivo de contacto', true, 100],
            'email'    => ['Correo electrónico', true, 160],
            'telefono' => ['Teléfono', false, 40],
            'mensaje'  => ['Mensaje', false, 4000],
        ],
    ],
    'consentimiento' => [
        'para'   => 'protecciondatos@larcoeyeclinic.com',
        'asunto' => 'Consentimiento de datos — Larco Eye Clinic',
        'titulo' => 'Aceptación de la política de tratamiento de datos',
        'campos' => [
            'Nombres'            => ['Nombres', true, 100],
            'Apellidos'          => ['Apellidos', true, 100],
            'Cédula'             => ['Cédula o pasaporte', true, 20],
            'Teléfono'           => ['Teléfono', true, 40],
            'email'              => ['Correo electrónico', true, 160],
            'Acepta la política' => ['Acepta la política', true, 40],
            'Documento aceptado' => ['Documento aceptado', true, 300],
        ],
    ],
];

$quiereJson = stripos($_SERVER['HTTP_ACCEPT'] ?? '', 'application/json') !== false;

function responder(bool $ok, string $error = ''): void
{
    global $quiereJson;
    if ($quiereJson) {
        header('Content-Type: application/json; charset=utf-8');
        if (!$ok) http_response_code(400);
        echo json_encode($ok ? ['ok' => true] : ['ok' => false, 'error' => $error], JSON_UNESCAPED_UNICODE);
        exit;
    }
    if ($ok) {
        header('Location: gracias.html', true, 303);
        exit;
    }
    http_response_code(400);
    header('Content-Type: text/html; charset=utf-8');
    $e = htmlspecialchars($error, ENT_QUOTES, 'UTF-8');
    echo "<!DOCTYPE html><html lang=\"es\"><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width\">"
       . "<title>No se pudo enviar — Larco Eye Clinic</title>"
       . "<body style=\"font-family:system-ui,sans-serif;max-width:560px;margin:15vh auto;padding:0 20px\">"
       . "<h1>No se pudo enviar</h1><p>{$e}</p><p><a href=\"javascript:history.back()\">Volver al formulario</a></p></body></html>";
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    http_response_code(405);
    exit('Método no permitido.');
}

// Trampa para robots: un campo oculto que una persona nunca llena.
if (trim((string)($_POST['_honey'] ?? '')) !== '') {
    responder(true); // se finge éxito y no se envía nada
}

$clave = (string)($_POST['_form'] ?? '');
if (!isset($FORMULARIOS[$clave])) {
    responder(false, 'Formulario no reconocido.');
}
$form = $FORMULARIOS[$clave];

// PHP cambia espacios y puntos de los nombres de campo por "_": se buscan así.
$datos = [];
foreach ($form['campos'] as $campo => [$etiqueta, $obligatorio, $max]) {
    $valor = $_POST[str_replace([' ', '.'], '_', $campo)] ?? '';
    $valor = is_string($valor) ? trim(str_replace("\0", '', $valor)) : '';
    if ($obligatorio && $valor === '') {
        responder(false, "Falta completar: {$etiqueta}.");
    }
    if (mb_strlen($valor) > $max) {
        responder(false, "El campo {$etiqueta} es demasiado largo.");
    }
    $datos[$campo] = [$etiqueta, $valor];
}

$correo = $datos['email'][1];
if (!filter_var($correo, FILTER_VALIDATE_EMAIL) || preg_match('/[\r\n]/', $correo)) {
    responder(false, 'El correo electrónico no es válido.');
}

$fecha = date('d/m/Y H:i:s') . ' (hora de Ecuador)';
$ip    = $_SERVER['REMOTE_ADDR'] ?? '';
$h     = fn(string $s): string => nl2br(htmlspecialchars($s, ENT_QUOTES, 'UTF-8'));

// ---- Cuerpo del correo: tabla HTML + versión de texto ----------------------
$filas = '';
$texto = $form['titulo'] . "\n\n";
foreach ($datos as [$etiqueta, $valor]) {
    $filas .= '<tr><th style="text-align:left;vertical-align:top;padding:8px 12px;background:#f3f4f6;border:1px solid #e5e7eb;white-space:nowrap">'
            . $h($etiqueta) . '</th><td style="padding:8px 12px;border:1px solid #e5e7eb">'
            . ($valor === '' ? '—' : $h($valor)) . '</td></tr>';
    $texto .= "{$etiqueta}: " . ($valor === '' ? '—' : $valor) . "\n";
}
foreach ([['Fecha y hora de envío', $fecha], ['Dirección IP', $ip]] as [$etiqueta, $valor]) {
    $filas .= '<tr><th style="text-align:left;padding:8px 12px;background:#f3f4f6;border:1px solid #e5e7eb;white-space:nowrap">'
            . $h($etiqueta) . '</th><td style="padding:8px 12px;border:1px solid #e5e7eb">' . $h($valor) . '</td></tr>';
    $texto .= "{$etiqueta}: {$valor}\n";
}
$html = '<!DOCTYPE html><html><body style="font-family:Arial,sans-serif;color:#111">'
      . '<h2 style="font-size:18px">' . $h($form['titulo']) . '</h2>'
      . '<table style="border-collapse:collapse;font-size:14px">' . $filas . '</table>'
      . '<p style="font-size:12px;color:#6b7280">Enviado desde el formulario de larcoeyeclinic.com</p>'
      . '</body></html>';

$limite  = 'lec' . bin2hex(random_bytes(12));
$cuerpo  = "--{$limite}\r\nContent-Type: text/plain; charset=UTF-8\r\nContent-Transfer-Encoding: base64\r\n\r\n"
         . chunk_split(base64_encode($texto))
         . "--{$limite}\r\nContent-Type: text/html; charset=UTF-8\r\nContent-Transfer-Encoding: base64\r\n\r\n"
         . chunk_split(base64_encode($html))
         . "--{$limite}--\r\n";

$nombre  = trim(($datos['nombre'][1] ?? $datos['Nombres'][1] ?? '') . ' ' . ($datos['apellido'][1] ?? $datos['Apellidos'][1] ?? ''));
$asunto  = $form['asunto'] . ($nombre !== '' ? " — {$nombre}" : '');
$cabeceras = implode("\r\n", [
    'From: =?UTF-8?B?' . base64_encode('Sitio web Larco Eye Clinic') . '?= <' . REMITENTE . '>',
    'Reply-To: ' . $correo,
    'MIME-Version: 1.0',
    "Content-Type: multipart/alternative; boundary=\"{$limite}\"",
    'X-Mailer: larcoeyeclinic.com',
]);

$enviado = mail(
    $form['para'],
    '=?UTF-8?B?' . base64_encode($asunto) . '?=',
    $cuerpo,
    $cabeceras,
    '-f' . REMITENTE
);

$enviado
    ? responder(true)
    : responder(false, 'No se pudo enviar el mensaje en este momento. Inténtalo de nuevo o escríbenos por WhatsApp.');
