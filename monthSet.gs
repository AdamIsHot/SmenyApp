function makingNewList() {
var date = new Date();
var mt = date.getMonth();
var yr = date.getFullYear();

  if  (mt === 0) {
    nameOfNewList('leden', yr);
  }if (mt === 1) {
    nameOfNewList('únor', yr);
  }if (mt === 2) {
    nameOfNewList('březen', yr);
  }if (mt === 3) {
    nameOfNewList('duben', yr);
  }if (mt === 4) {
    nameOfNewList('květen', yr);
  }if (mt === 5) {
    nameOfNewList('červen', yr);
  }if (mt === 6) {
    nameOfNewList('červenec', yr);
  }if (mt === 7) {
    nameOfNewList('srpen', yr);
  }if (mt === 8) {
    nameOfNewList('září', yr);
  }if (mt === 9) {
    nameOfNewList('říjen', yr);
  }if (mt === 10){
     nameOfNewList('listopad', yr);
  }else if (mt === 11){
    nameOfNewList('prosinec', yr);
  }
}

function nameOfNewList(month, yr) {
  var activeSpreadsheet = SpreadsheetApp.   getActiveSpreadsheet();
  var yourNewSheet = activeSpreadsheet.getSheetByName(month + " " + yr);
  if (yourNewSheet != null) {
    activeSpreadsheet.deleteSheet(yourNewSheet);
  }
  yourNewSheet = activeSpreadsheet.insertSheet();
  yourNewSheet.setName(month + " " + yr)
 
  String = [month + " " + yr];
  var sheet = SpreadsheetApp.getActive().getSheetByName(String);
  sheet.activate();

  sheet.setRowHeight(1, 42);
  sheet.setColumnWidth(1, 200);
  sheet.setColumnWidth(2, 60);
  sheet.setColumnWidth(3, 90);
  sheet.setColumnWidth(4, 90);
  sheet.setColumnWidth(5, 90);
  sheet.setColumnWidth(6, 90);

  //fialova
  creatingCells("B2", "#9900ff", "", String);

  //modry
  creatingCells("C2", "#3c78d8", "datum směny", String);
  creatingCells("D2", "#3c78d8", "čas směny", String);
  creatingCells("E2", "#3c78d8", "počet hodin", String);
  creatingCells("F2", "#3c78d8", "výplata", String);

  //cervena
  creatingCells("B3", "#cc0000", "celkově:", String);

  //dolni radek
  creatingCells("C3", "#b4a7d6", "0", String);
  creatingCells("D3", "#8e7cc3", "0", String);
  creatingCells("E3", "#b4a7d6", "0", String);
  creatingCells("F3", "#8e7cc3", "0", String);
}

  

function creatingCells(name, color, text, String) {
  var sheet = SpreadsheetApp.getActive().getSheetByName(String);
  sheet.activate();
  var cell = sheet.getRange(name);
  cell.setBackground(color);
  var textInCell = cell.setFontWeight("bold");
  cell.setValue(text);
  cell.setBorder(true, true, true, true, false, false, "black", SpreadsheetApp.SOLID_THICK);
}
