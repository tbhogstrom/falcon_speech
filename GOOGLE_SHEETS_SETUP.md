# Google Sheets Contact Form Integration Setup

This guide will help you connect your contact form to the Google Spreadsheet at:
https://docs.google.com/spreadsheets/d/13tPCqCeWhaHnbJr7-5wkpcLjiGfsQfxnHqhd2jdsxVU/edit

## Step 1: Set up Google Apps Script

1. **Open Google Apps Script**
   - Go to [script.google.com](https://script.google.com)
   - Click "New Project"

2. **Replace Default Code**
   - Delete all the default code in the editor
   - Copy and paste the code from `google-apps-script.js` in this repository
   - The spreadsheet ID is already configured: `13tPCqCeWhaHnbJr7-5wkpcLjiGfsQfxnHqhd2jdsxVU`

3. **Save the Project**
   - Click "Save" (Ctrl+S)
   - Give it a name like "Falcon Speech Contact Form Handler"

4. **Deploy as Web App**
   - Click "Deploy" → "New deployment"
   - Choose type: "Web app"
   - Description: "Contact form handler"
   - Execute as: "Me" (your email)
   - Who has access: "Anyone" (this is necessary for the form to work)
   - Click "Deploy"
   - **Copy the Web App URL** - you'll need this for Step 2

5. **Authorize the Script**
   - Google will ask for permissions
   - Click "Review permissions"
   - Choose your Google account
   - Click "Advanced" → "Go to [project name] (unsafe)" if shown
   - Click "Allow"

## Step 2: Update the Website Code

1. **Update the API endpoint**
   - Open `src/pages/api/contact.ts`
   - Find line 26: `const GOOGLE_SHEETS_URL = '...'`
   - Replace the URL with your Web App URL from Step 1
   - Save the file

## Step 3: Test the Integration

1. **Deploy your website** (if not already deployed)
2. **Go to your contact page**
3. **Fill out and submit the form**
4. **Check your Google Spreadsheet** - you should see:
   - Headers in row 1: Timestamp, Name, Email, Phone, Location, Service, Message
   - Your test submission in row 2

## Expected Spreadsheet Format

The form will create the following columns:

| Timestamp | Name | Email | Phone | Location | Service | Message |
|-----------|------|-------|-------|----------|---------|---------|
| 2024-08-02T10:30:00Z | John Doe | john@example.com | 555-1234 | portland | speech | Need help with... |

## Troubleshooting

### Form not submitting
- Check browser console for errors (F12 → Console tab)
- Verify the Web App URL is correct in `contact.ts`
- Make sure the Google Apps Script is deployed with "Anyone" access

### Data not appearing in spreadsheet
- Check if the Google Apps Script has proper permissions
- Verify the spreadsheet ID matches: `13tPCqCeWhaHnbJr7-5wkpcLjiGfsQfxnHqhd2jdsxVU`
- Try re-deploying the Google Apps Script

### Getting "Unauthorized" errors
- Re-deploy the Google Apps Script
- Make sure "Execute as: Me" and "Who has access: Anyone" are selected
- Check that you've authorized all permissions

## Security Notes

- The form data is sent directly to Google Sheets via Google Apps Script
- No sensitive data is stored on your website
- Google handles all the security and authentication
- The Web App URL can be public - it only accepts form submissions

## Need Help?

If you encounter issues:
1. Check the browser console for error messages
2. Verify all URLs and IDs are correct
3. Ensure the Google Apps Script is properly deployed
4. Test with a simple form submission first

The integration should work immediately once the Google Apps Script is deployed and the Web App URL is updated in your code!