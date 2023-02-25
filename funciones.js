function doGet() {
  return HtmlService.createTemplateFromFile("web")
    .evaluate()
    .setTitle("Adegna Google Apps Script");
}
function obtenerDatosHtml(archivo) {
  return HtmlService.createHtmlOutputFromFile(archivo).getContent();
}

function obtenerDatos() {
  const idSheet = "1mRN1QamZSyagMdANkrb-fc_WQDh9v79_P97PxTOfdPI";
  let hoja = SpreadsheetApp.openById(idSheet).getSheetByName("nombres");
  let datos = hoja.getDataRange().getValues();
  //datos = datos.filter((d) => d[0] > 0);
  datos = datos.filter((d) => d[0] != "");
  return datos;
}
