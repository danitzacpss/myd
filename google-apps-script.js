/**
 * Google Apps Script para recibir confirmaciones de asistencia
 *
 * INSTRUCCIONES DE CONFIGURACIÓN:
 *
 * 1. Crea una nueva hoja de cálculo en Google Sheets
 * 2. Ve a Extensiones > Apps Script
 * 3. Copia y pega este código
 * 4. Haz clic en "Implementar" > "Nueva implementación"
 * 5. Selecciona tipo: "Aplicación web"
 * 6. Configuración:
 *    - Ejecutar como: Tu cuenta
 *    - Quién tiene acceso: Cualquier persona
 * 7. Copia la URL de la aplicación web
 * 8. Pega esa URL en src/components/RSVPModal.tsx en la constante GOOGLE_SCRIPT_URL
 *
 * Este script recibirá los datos del formulario y los guardará automáticamente
 * en tu hoja de cálculo.
 */

function doPost(e) {
  try {
    // Obtener la hoja activa
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Si es la primera vez, crear encabezados
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Fecha', 'Nombre', 'Email', 'Teléfono', 'Menú Especial', 'Consideraciones']);
      sheet.getRange(1, 1, 1, 6).setFontWeight('bold');
      sheet.setFrozenRows(1);
    }

    // Parsear los datos del formulario
    const data = JSON.parse(e.postData.contents);

    // Agregar fila con los datos
    sheet.appendRow([
      new Date(data.timestamp),
      data.nombre,
      data.email,
      data.telefono,
      data.menuEspecial || 'Sin restricciones',
      data.consideraciones || 'Ninguna'
    ]);

    // Ajustar ancho de columnas automáticamente
    sheet.autoResizeColumns(1, 6);

    // Retornar respuesta exitosa
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'message': 'Datos guardados correctamente' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Retornar error
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'message': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Función de prueba (opcional)
function testPost() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        timestamp: new Date().toISOString(),
        nombre: 'Test Usuario',
        email: 'test@ejemplo.com',
        telefono: '+56912345678',
        menuEspecial: 'Vegetariano',
        consideraciones: 'Ninguna'
      })
    }
  };

  const result = doPost(testData);
  Logger.log(result.getContent());
}
