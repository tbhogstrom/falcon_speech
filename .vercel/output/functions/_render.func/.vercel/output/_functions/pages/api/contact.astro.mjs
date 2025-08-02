export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  try {
    const formData = await request.formData();
    const parentFirstName = formData.get("parent-first-name");
    const parentLastName = formData.get("parent-last-name");
    const childFirstName = formData.get("child-first-name");
    const childLastName = formData.get("child-last-name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const areaOfConcern = formData.get("area-of-concern");
    const otherConcern = formData.get("other-concern");
    if (!parentFirstName || !parentLastName || !childFirstName || !childLastName || !email || !phone || !areaOfConcern) {
      return new Response(JSON.stringify({
        success: false,
        error: "Missing required fields"
      }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    let finalAreaOfConcern = areaOfConcern;
    if (areaOfConcern === "other" && otherConcern) {
      finalAreaOfConcern = `Other: ${otherConcern}`;
    }
    const timestamp = (/* @__PURE__ */ new Date()).toISOString();
    const rowData = [
      timestamp,
      parentFirstName,
      parentLastName,
      childFirstName,
      childLastName,
      email,
      phone,
      finalAreaOfConcern
    ];
    const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbwDfD6AYiENJVsTEJyWXobSQFR3rzEOwP9y_QZYWXzTDtqiTwb1oUJHqYRQsGAet4xy/exec";
    console.log("Sending to Google Sheets:", rowData);
    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        data: rowData
      })
    });
    console.log("Google Sheets response status:", response.status);
    const responseText = await response.text();
    console.log("Google Sheets response:", responseText);
    if (!response.ok) {
      throw new Error(`Failed to submit to Google Sheets: ${response.status} - ${responseText}`);
    }
    return new Response(JSON.stringify({
      success: true,
      message: "Form submitted successfully"
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return new Response(JSON.stringify({
      success: false,
      error: "Failed to submit form"
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
