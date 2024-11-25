import { NextResponse } from "next/server";

const EXTERNAL_API_URL = "https://jsonplaceholder.typicode.com/posts";

export async function GET() {
  try {
    // Fetch data from external API
    const response = await fetch(EXTERNAL_API_URL);

    // Check if response is not OK
    if (!response.ok) {
      return NextResponse.json({
        success: false,
        message: "Failed to fetch data from the API",
        status: response.status,
      });
    }

    // Parse JSON response
    const data = await response.json();

    // Return successful response
    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error: any) {
    // Handle errors
    return NextResponse.json({
      success: false,
      message: "An error occurred while fetching data",
      error: error.message,
    });
  }
}
