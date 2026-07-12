export async function GET() {
  const API_KEY = process.env.GOOGLE_API_KEY;
  const PLACE_ID = "ChIJJQtVr_eG_CgRV4tBtCrtTws"; // Maxx waste removals Place ID

  try {
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${PLACE_ID}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": API_KEY,
          "X-Goog-FieldMask": "id,name,displayName,formattedAddress,rating,userRatingCount"
        }
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      return Response.json({ error: errorData }, { status: response.status });
    }

    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
