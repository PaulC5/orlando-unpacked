"use client"

import { useEffect, useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Loader2, ArrowLeft, Download, Mail } from "lucide-react"
import ReactMarkdown from "react-markdown"

function ResultsContent() {
  const searchParams = useSearchParams()
  const [itinerary, setItinerary] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const tripDataParam = searchParams.get("data")
    if (!tripDataParam) {
      setError("No trip data found. Please start over.")
      setLoading(false)
      return
    }

    const generateItinerary = async () => {
      try {
        const tripData = JSON.parse(decodeURIComponent(tripDataParam))
        
        const response = await fetch("/api/generate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(tripData),
        })

        if (!response.ok) {
          throw new Error("Failed to generate itinerary")
        }

        const data = await response.json()
        setItinerary(data.itinerary)
      } catch (err) {
        console.error("Error:", err)
        setError("Something went wrong generating your itinerary. Please try again.")
      } finally {
        setLoading(false)
      }
    }

    generateItinerary()
  }, [searchParams])

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8">
        <div className="text-center space-y-6 max-w-md">
          <Image
            src="/katie-avatar.png"
            alt="Katie"
            width={120}
            height={120}
            className="mx-auto rounded-full"
          />
          <h1 className="text-2xl font-bold">Katie is planning your trip...</h1>
          <p className="text-muted-foreground">
            I'm analyzing your preferences and building a personalized day-by-day itinerary. 
            This usually takes about 15-30 seconds.
          </p>
          <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary" />
          <div className="text-sm text-muted-foreground space-y-1">
            <p>✓ Checking crowd calendars</p>
            <p>✓ Optimizing park days</p>
            <p>✓ Finding the best dining spots</p>
            <p>✓ Adding insider tips</p>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8">
        <Card className="max-w-md">
          <CardContent className="p-8 text-center space-y-4">
            <h1 className="text-2xl font-bold text-destructive">Oops!</h1>
            <p className="text-muted-foreground">{error}</p>
            <Button asChild>
              <Link href="/plan">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Start Over
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background">
      {/* Header */}
      <div className="border-b bg-background/95 backdrop-blur sticky top-16 z-40">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/katie-avatar.png"
              alt="Katie"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="font-medium">Your Itinerary from Katie</p>
              <p className="text-sm text-muted-foreground">AI-powered trip planning</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
            <Button variant="outline" size="sm">
              <Mail className="mr-2 h-4 w-4" />
              Email Me
            </Button>
          </div>
        </div>
      </div>

      {/* Itinerary Content */}
      <div className="container py-8 max-w-4xl">
        <Card>
          <CardContent className="p-8 prose prose-slate max-w-none">
            <ReactMarkdown>{itinerary || ""}</ReactMarkdown>
          </CardContent>
        </Card>

        {/* Bottom CTA */}
        <div className="mt-8 text-center space-y-4">
          <p className="text-muted-foreground">
            Want to tweak something? Start a new plan or ask Katie directly.
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="outline" asChild>
              <Link href="/plan">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Plan Another Trip
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function LoadingFallback() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="text-center space-y-6 max-w-md">
        <Loader2 className="h-12 w-12 animate-spin mx-auto text-primary" />
        <p className="text-muted-foreground">Loading...</p>
      </div>
    </div>
  )
}

export default function ResultsPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <ResultsContent />
    </Suspense>
  )
}
