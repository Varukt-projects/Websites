import { type NextRequest, NextResponse } from "next/server"

interface Submission {
  id: string
  name: string
  email: string
  phone: string
  numberOfTravelers: string
  destination: string
  travelStyle: string[]
  interests: string[]
  tripDuration: string
  budget: string
  message: string
  date: string
}

// In-memory storage for submissions (in production, use a database)
const submissions: Submission[] = []

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      name,
      email,
      phone,
      numberOfTravelers,
      destination,
      travelStyle,
      interests,
      tripDuration,
      budget,
      message,
    } = body

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const submission: Submission = {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      name,
      email,
      phone,
      numberOfTravelers: numberOfTravelers || "Not specified",
      destination: destination || "Not specified",
      travelStyle: travelStyle || [],
      interests: interests || [],
      tripDuration: tripDuration || "Not specified",
      budget: budget || "Not specified",
      message,
      date: new Date().toISOString(),
    }

    // Store submission
    submissions.push(submission)

    // Log to console (in production, send email or save to database)
    console.log("[v0] New contact form submission:", submission)

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for your submission. We'll get back to you within 24 hours with personalized recommendations.",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("[v0] Error processing contact form:", error)
    return NextResponse.json({ error: "Failed to process submission" }, { status: 500 })
  }
}

// GET endpoint to retrieve submissions (for admin purposes)
export async function GET() {
  return NextResponse.json({
    submissions,
    count: submissions.length,
  })
}
