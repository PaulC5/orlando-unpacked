"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Loader2, ArrowLeft, Download, Mail, Sparkles } from "lucide-react"
import ReactMarkdown from "react-markdown"

export default function ResultsPage() {
  const [itinerary, setItinerary] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [loadingStep, setLoadingStep] = useState(0)

  const loadingSteps = [
    "Checking crowd calendars...",
    "Optimizing your park days...",
    "Finding the best dining spots...",
    "Adding insider tips...",
    "Putting the finishing touches...",
  ]

  useEffect(() => {
    // Animate through loading steps
    const stepInterval = setInterval(() => {
      setLoadingStep((prev) => (prev < loadingSteps.length - 1 ? prev + 1 : prev))
    }, 3000)

    return () => clearInterval(stepInterval)
  }, [])

  useEffect(() => {
    // Get trip data from localStorage (set by the wizard)
    const savedAnswers = localStorage.getItem("orlandoPlanAnswers")
    
    if (!savedAnswers) {
      setError("No trip data found. Let's start from the beginning!")
      setLoading(false)
      return
    }

    const generateItinerary = async () => {
      try {
        const tripData = JSON.parse(savedAnswers)
        
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
        setError("Hmm, something went wrong on my end. Mind trying again?")
      } finally {
        setLoading(false)
      }
    }

    generateItinerary()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-orange-400 via-pink-500 to-purple-600 flex flex-col items-center justify-center p-8">
        <div className="text-center space-y-6 max-w-md">
          <Image
            src="/katie-avatar.png"
            alt="Katie"
            width={120}
            height={120}
            className="mx-auto rounded-full border-4 border-white shadow-xl"
          />
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Katie&apos;s building your perfect trip... ✨
          </h1>
          <p className="text-white/80">
            Give me a moment—I&apos;m putting together something special for your family.
          </p>
          
          {/* Animated loading spinner */}
          <div className="flex justify-center">
            <Loader2 className="h-10 w-10 animate-spin text-yellow-400" />
          </div>
          
          {/* Loading steps */}
          <div className="bg-white/10 rounded-xl p-4 backdrop-blur">
            <div className="text-white/90 space-y-2">
              {loadingSteps.map((step, index) => (
                <p 
                  key={index} 
                  className={`flex items-center gap-2 transition-opacity ${
                    index <= loadingStep ? "opacity-100" : "opacity-40"
                  }`}
                >
                  {index < loadingStep ? (
                    <span className="text-green-400">✓</span>
                  ) : index === loadingStep ? (
                    <Loader2 className="h-4 w-4 animate-spin text-yellow-400" />
                  ) : (
                    <span className="w-4 h-4" />
                  )}
                  {step}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-orange-400 via-pink-500 to-purple-600 flex flex-col items-center justify-center p-8">
        <Card className="max-w-md">
          <CardContent className="p-8 text-center space-y-4">
            <Image
              src="/katie-avatar.png"
              alt="Katie"
              width={80}
              height={80}
              className="mx-auto rounded-full"
            />
            <h1 className="text-2xl font-bold">Oops! 😅</h1>
            <p className="text-muted-foreground">{error}</p>
            <Button className="bg-pink-500 hover:bg-pink-600" asChild>
              <Link href="/plan">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Let&apos;s Try Again
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 py-8">
        <div className="container">
          <div className="flex items-center gap-4">
            <Image
              src="/katie-avatar.png"
              alt="Katie"
              width={60}
              height={60}
              className="rounded-full border-2 border-white shadow-lg"
            />
            <div className="text-white">
              <h1 className="text-2xl font-bold flex items-center gap-2">
                Your Itinerary is Ready! <Sparkles className="h-5 w-5" />
              </h1>
              <p className="text-white/80">Personalized just for your family by Katie</p>
            </div>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="border-b bg-white sticky top-0 z-40 shadow-sm">
        <div className="container py-3 flex items-center justify-between">
          <Link href="/plan" className="text-pink-600 hover:text-pink-700 font-medium flex items-center gap-1">
            <ArrowLeft className="h-4 w-4" />
            Plan Another Trip
          </Link>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="border-pink-200 text-pink-600 hover:bg-pink-50">
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
            <Button variant="outline" size="sm" className="border-pink-200 text-pink-600 hover:bg-pink-50">
              <Mail className="mr-2 h-4 w-4" />
              Email Me
            </Button>
          </div>
        </div>
      </div>

      {/* Itinerary Content */}
      <div className="container py-8 max-w-4xl">
        <Card className="shadow-lg border-pink-100">
          <CardContent className="p-6 md:p-10 prose prose-slate max-w-none prose-headings:text-gray-800 prose-h2:text-pink-600 prose-a:text-pink-600">
            <ReactMarkdown>{itinerary || ""}</ReactMarkdown>
          </CardContent>
        </Card>

        {/* Katie sign-off */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-100 to-pink-100 rounded-full px-6 py-3">
            <Image
              src="/katie-avatar.png"
              alt="Katie"
              width={40}
              height={40}
              className="rounded-full"
            />
            <p className="text-gray-700 font-medium">
              Have a magical trip! — Katie 🏰
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Need to adjust something?</h2>
          <p className="text-white/80 mb-6">
            No worries! You can always run through the planner again with different preferences.
          </p>
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold" asChild>
            <Link href="/plan">
              Plan Another Trip
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
