import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    
    // Extract form data
    const parentFirstName = formData.get('parent-first-name') as string;
    const parentLastName = formData.get('parent-last-name') as string;
    const childFirstName = formData.get('child-first-name') as string;
    const childLastName = formData.get('child-last-name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const requestType = formData.get('request-type') as string;
    const childAge = formData.get('child-age') as string;
    const areaOfConcern = formData.get('area-of-concern') as string;
    const otherConcern = formData.get('other-concern') as string;
    
    // Validate required fields
    if (!parentFirstName || !parentLastName || !childFirstName || !childLastName || !email || !phone || !requestType || !areaOfConcern) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'Missing required fields' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Prepare area of concern value (include "other" text if applicable)
    let finalAreaOfConcern = areaOfConcern;
    if (areaOfConcern === 'other' && otherConcern) {
      finalAreaOfConcern = `Other: ${otherConcern}`;
    }

    // Prepare data for Google Sheets
    const timestamp = new Date().toISOString();
    const rowData = [
      timestamp,
      parentFirstName,
      parentLastName,
      childFirstName,
      childLastName,
      email,
      phone,
      requestType,
      childAge || '',
      finalAreaOfConcern
    ];

    // Google Sheets Web App URL
    const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbwDfD6AYiENJVsTEJyWXobSQFR3rzEOwP9y_QZYWXzTDtqiTwb1oUJHqYRQsGAet4xy/exec';
    
    // Send to Google Sheets
    console.log('Sending to Google Sheets:', rowData);
    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: rowData
      })
    });

    console.log('Google Sheets response status:', response.status);
    const responseText = await response.text();
    console.log('Google Sheets response:', responseText);

    if (!response.ok) {
      throw new Error(`Failed to submit to Google Sheets: ${response.status} - ${responseText}`);
    }

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Form submitted successfully' 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: 'Failed to submit form' 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};