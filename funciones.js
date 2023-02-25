function doGet() {
  return HtmlService.createTemplateFromFile("web")
    .evaluate()
    .setTitle("Adegna Google Apps Script");
}
function obtenerDatosHtml(archivo) {
  return HtmlService.createHtmlOutputFromFile(archivo).getContent();
}
