/**
 * CONFIGURACIÓN GLOBAL
 */
const SPREADSHEET_ID = '1Sp1UJAXQOykQ3EpHzrwWcrhq0xXdh6kIAK0zm-4wxNE';
const SHEET_LEADS = 'Leads';
const SHEET_CONFIG = 'Configuracion';
const EMAIL_DESTINO = 'tu-correo@gmail.com'; // <-- CAMBIA ESTO POR EL EMAIL DE LA INSTRUCTORA
const YOUTUBE_VIDEO_ID = 'dQw4w9WgXcQ'; // <-- COLOQUEN AQUÍ EL ID DEL VIDEO (lo que va después de v=)


/**
 * 1. INICIALIZADOR: Crea la estructura de la base de datos
 */
function inicializarBBDD() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  
  // Configurar Hoja de Leads (donde caen los prospectos)
  let sheetLeads = ss.getSheetByName(SHEET_LEADS) || ss.insertSheet(SHEET_LEADS);
  const headersLeads = ['Fecha', 'Nombre', 'Apellido', 'Email', 'Teléfono', 'Interés', 'Comentarios', 'Origen'];
  sheetLeads.getRange(1, 1, 1, headersLeads.length).setValues([headersLeads]);
  sheetLeads.setFrozenRows(1);

  // Configurar Hoja de Configuración (donde ella edita las clases)
  let sheetConfig = ss.getSheetByName(SHEET_CONFIG) || ss.insertSheet(SHEET_CONFIG);
  const headersConfig = ['Servicios Disponibles'];
  const serviciosIniciales = [['Hatha Yoga'], ['Vinyasa Flow'], ['Yoga Prenatal'], ['Meditación']];
  
  sheetConfig.getRange(1, 1).setValue(headersConfig[0]);
  // Solo insertamos si está vacío para no borrar lo que ella ya haya escrito
  if (sheetConfig.getLastRow() < 2) {
    sheetConfig.getRange(2, 1, serviciosIniciales.length, 1).setValues(serviciosIniciales);
  }
  
  console.log("¡Sistema Listo!");
}

/**
 * 2. LECTURA (GET): React pide las opciones para el selector
 */
function doGet(e) {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName(SHEET_CONFIG);
  const lastRow = sheet.getLastRow();
  
  const servicios = lastRow > 1 
    ? sheet.getRange(2, 1, lastRow - 1, 1).getValues().flat() 
    : [];

  return ContentService.createTextOutput(JSON.stringify({
    'status': 'success',
    'servicios': servicios
  })).setMimeType(ContentService.MimeType.JSON);
}

/**
 * 3. ESCRITURA (POST): Recibe el formulario, guarda y avisa por mail
 */
/**
 * 3. ESCRITURA (POST) - VERSIÓN CON VALIDACIÓN
 */
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    
    // 🔥 EL GUARDIA DE SEGURIDAD: Validamos campos obligatorios
    if (!data.nombre || !data.apellido || !data.email || !data.telefono) {
      // Si falta alguno, rechazamos la petición y devolvemos un error
      return ContentService.createTextOutput(JSON.stringify({
        'result': 'error', 
        'error': 'Faltan campos obligatorios (Nombre, Apellido, Email, Teléfono)'
      })).setMimeType(ContentService.MimeType.JSON);
    }

    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = ss.getSheetByName(SHEET_LEADS);
    
    // Si pasaron la validación, guardamos en Sheets
    sheet.appendRow([
      new Date(),
      data.nombre,
      data.apellido,
      data.email,
      data.telefono,
      data.interes || 'No especificado', // Si es opcional, le ponemos un valor por defecto
      data.comentarios || '',            // Opcional
      data.origen || 'Web Directa'       // Opcional
    ]);

    enviarNotificacion(data);
    
    // Si el origen es 'Clase Gratis', enviamos el mail con el video al usuario
    if (data.origen === 'Clase Gratis') {
      enviarClaseGratis(data);
    }


    return ContentService.createTextOutput(JSON.stringify({'result': 'success'}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({'result': 'error', 'error': error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * 4. NOTIFICACIÓN: El motor de aviso por email
 */
function enviarNotificacion(data) {
  try {
    const template = HtmlService.createTemplateFromFile('email_notificacion_admin');
    
    // Pasamos todas las variables al template
    template.nombre = data.nombre;
    template.apellido = data.apellido;
    template.email = data.email;
    template.telefono = data.telefono;
    template.interes = data.interes || 'No especificado';
    template.comentarios = data.comentarios || '';
    template.origen = data.origen || 'Web Directa';
    
    const htmlBody = template.evaluate().getContent();
    const asunto = `🧘 Nuevo Lead: ${data.nombre} ${data.apellido} (${data.interes})`;
    
    MailApp.sendEmail({
      to: EMAIL_DESTINO,
      subject: asunto,
      htmlBody: htmlBody
    });
    
  } catch (error) {
    console.error("Error enviando notificación admin:", error);
  }
}


/**
 * 5. ENVÍO DE CLASE GRATIS AL LEAD
 */
function enviarClaseGratis(data) {
  try {
    const template = HtmlService.createTemplateFromFile('email_clase_gratis');
    
    // Pasamos las variables al template
    template.nombre = data.nombre;
    template.apellido = data.apellido;
    template.videoId = YOUTUBE_VIDEO_ID;
    template.videoUrl = `https://www.youtube.com/watch?v=${YOUTUBE_VIDEO_ID}`;
    template.instructorEmail = EMAIL_DESTINO;
    
    const htmlBody = template.evaluate().getContent();
    
    MailApp.sendEmail({
      to: data.email,
      subject: `🎁 Aquí tienes tu clase gratis - Despertar Corporal`,
      htmlBody: htmlBody
    });
    
  } catch (error) {
    console.error("Error enviando clase gratis:", error);
  }
}