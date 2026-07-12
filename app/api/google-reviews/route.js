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
          "X-Goog-FieldMask": "reviews,rating,userRatingCount,googleMapsUri"
        }
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      return Response.json({ error: errorData }, { status: response.status });
    }

    const data = await response.json();

    // Format the reviews to include names, photos, and direct links
    const enhancedReviews = (data.reviews || []).map(review => ({
      ...review,
      text: review.text?.text || "", 
      authorName: review.authorAttribution?.displayName || "Google User",
      authorPhoto: review.authorAttribution?.photoUri || null,
      authorUrl: review.authorAttribution?.uri || null,
      // Google doesn't provide a direct link per review in this API, 
      // so we use the business URI as the fallback for clicking
      reviewUrl: data.googleMapsUri + "#reviews" 
    }));

    return Response.json({
      reviews: enhancedReviews,
      rating: data.rating || null,
      total: data.userRatingCount || 0,
      googleMapsUri: data.googleMapsUri,
      reviewPageUrl: `https://search.google.com/local/reviews?placeid=${PLACE_ID}`,
      message: enhancedReviews.length > 0 ? "Success" : "No reviews found.",
    });
  } catch (error) {
    return Response.json({ 
      reviews: [],
      rating: null,
      total: 0,
      message: `Error: ${error.message}` 
    }, { status: 500 });
  }
}
