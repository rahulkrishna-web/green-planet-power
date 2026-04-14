/**
 * GOOGLE APPS SCRIPT FOR GPP CONTACT FORM
 * 
 * 1. Open a Google Sheet.
 * 2. Go to Extensions > Apps Script.
 * 3. Paste this code and Save.
 * 4. Click 'Deploy' > 'New Deployment'.
 * 5. Select 'Web App'.
 * 6. Execute as: 'Me'.
 * 7. Who has access: 'Anyone'.
 * 8. Copy the Web App URL and paste it in 'components/ContactModal.tsx'.
 */

function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheets()[0]; // Use the first sheet
    var data = JSON.parse(e.postData.contents);
    
    // Add headers if the sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Timestamp", "Name", "Email", "Phone", "Company", "Requirements", "IP Address", "Browser", "OS"]);
    }
    
    // Append the form data
    sheet.appendRow([
      Utilities.formatDate(new Date(), ss.getSpreadsheetTimeZone(), "yyyy-MM-dd HH:mm:ss"), 
      data.name, 
      data.email, 
      data.phone || "N/A", 
      data.company || "N/A", 
      data.requirements,
      data.ip || "Unknown",
      data.browser || "Unknown",
      data.os || "Unknown"
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ "result": "success" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ "result": "error", "message": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
