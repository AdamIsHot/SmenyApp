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

var cell = sheet.getRange("B2");
cell.setBackground("#9900ff");
var cell = sheet.getRange("C2");
cell.setBackground("#3c78d8");
var cell = sheet.getRange("D2");
cell.setBackground("#3c78d8");
var cell = sheet.getRange("E2");
cell.setBackground("#3c78d8");
var cell = sheet.getRange("F2");
cell.setBackground("#3c78d8");

var cell = sheet.getRange("B3");
cell.setBackground("#cc0000");
} 
