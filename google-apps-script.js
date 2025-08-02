/**
 * Google Apps Script for handling Falcon Speech Services contact form submissions
 * 
 * Setup Instructions:
 * 1. Open Google Apps Script (script.google.com)
 * 2. Create a new project
 * 3. Replace the default code with this script
 * 4. Set up the spreadsheet ID (line 15)
 * 5. Deploy as a web app with execute permissions for "Anyone"
 * 6. Copy the web app URL and update the contact.ts file
 */

function doPost(e) {
  try {
    // Your Google Spreadsheet ID (extract from the URL)
    const SPREADSHEET_ID = '13tPCqCeWhaHnbJr7-5wkpcLjiGfsQfxnHqhd2jdsxVU';
    
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    const rowData = data.data;
    
    // Open the spreadsheet
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = spreadsheet.getActiveSheet();
    
    // Add headers if this is the first row
    if (sheet.getLastRow() === 0) {
      const headers = [
        'Timestamp',
        'Parent First Name',
        'Parent Last Name', 
        'Child First Name',
        'Child Last Name',
        'Email',
        'Phone',
        'Area of Concern'
      ];
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    }
    
    // Add the new row
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error processing form submission:', error);
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        error: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle GET requests (for testing)
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ 
      message: 'Falcon Speech Services Contact Form Handler',
      status: 'Ready to receive POST requests'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}