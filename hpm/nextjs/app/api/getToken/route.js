export async function GET() {
  const response = await fetch(
    "https://login.microsoftonline.com/1a407a2d-7675-4d17-8692-b3ac285306e4/oauth2/v2.0/token",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "client_credentials",
        scope: "api://philips-software-entitlement-api-nonprod/.default",
        client_id: "3cd13e11-f1ac-454e-8157-13dc4211aaf2",
        client_secret: "hkx8Q~HhDNxPlndvUIFcM0TBQXPggzQwTu5gtaae",
      }),
    }
  );
  const data = await response.json();
  return Response.json({ data });
}
