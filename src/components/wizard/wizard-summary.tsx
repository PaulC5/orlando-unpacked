"use client"

import { useWizard } from "@/lib/wizard-context"
import { PARKS, BUDGET_TIERS, TRIP_STYLES, MUST_DO_EXPERIENCES } from "@/lib/wizard-types"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { format, differenceInDays } from "date-fns"
import { Calendar, Users, MapPin, DollarSign, Sparkles, Loader2 } from "lucide-react"
import { useState } from "react"

export function WizardSummary() {
  const { tripData, resetWizard } = useWizard()
  const [isGenerating, setIsGenerating] = useState(false)

  const tripLength = tripData.arrivalDate && tripData.departureDate
    ? differenceInDays(tripData.departureDate, tripData.arrivalDate)
    : 0

  const selectedParkNames = tripData.selectedParks
    .map(id => PARKS.find(p => p.id === id)?.name)
    .filter(Boolean)

  const budgetTier = BUDGET_TIERS.find(t => t.id === tripData.budgetTier)
  const tripStyle = TRIP_STYLES.find(s => s.id === tripData.tripStyle)
  const mustDoNames = tripData.mustDos
    .map(id => MUST_DO_EXPERIENCES.find(e => e.id === id)?.name)
    .filter(Boolean)

  const handleGenerateItinerary = () => {
    setIsGenerating(true)
    // TODO: Implement itinerary generation
    setTimeout(() => {
      setIsGenerating(false)
      alert('Itinerary generation coming soon! Your trip data has been captured.')
    }, 2000)
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Your Trip Summary</h2>
        <p className="text-muted-foreground">
          Review your selections below. Ready to build your personalized itinerary?
        </p>
      </div>

      <div className="grid gap-4">
        {/* When */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              When
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-medium">
              {tripData.arrivalDate && format(tripData.arrivalDate, "MMM d")} 
              {" → "}
              {tripData.departureDate && format(tripData.departureDate, "MMM d, yyyy")}
            </p>
            <p className="text-sm text-muted-foreground">{tripLength} nights</p>
          </CardContent>
        </Card>

        {/* Who */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              Who
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-medium">
              {tripData.adults} adult{tripData.adults !== 1 ? 's' : ''}
              {tripData.children.length > 0 && (
                <>, {tripData.children.length} child{tripData.children.length !== 1 ? 'ren' : ''}</>
              )}
            </p>
            {tripData.children.length > 0 && (
              <p className="text-sm text-muted-foreground">
                Kids ages: {tripData.children.map(c => c.age).join(', ')}
              </p>
            )}
          </CardContent>
        </Card>

        {/* Where */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              Parks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-medium">{selectedParkNames.join(', ')}</p>
            <p className="text-sm text-muted-foreground">
              {tripData.selectedParks.length} park day{tripData.selectedParks.length !== 1 ? 's' : ''}
            </p>
          </CardContent>
        </Card>

        {/* Budget */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-primary" />
              Budget
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-medium">{budgetTier?.name} — {budgetTier?.price}</p>
            <p className="text-sm text-muted-foreground">
              {tripData.hasTickets && tripData.hasHotel ? 'Tickets & hotel already booked' :
               tripData.hasTickets ? 'Tickets already purchased' :
               tripData.hasHotel ? 'Hotel already booked' :
               'Need tickets & accommodation'}
            </p>
          </CardContent>
        </Card>

        {/* Style */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" />
              Trip Style
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-medium">{tripStyle?.icon} {tripStyle?.name}</p>
            {mustDoNames.length > 0 && (
              <p className="text-sm text-muted-foreground">
                Must-dos: {mustDoNames.slice(0, 3).join(', ')}
                {mustDoNames.length > 3 && ` +${mustDoNames.length - 3} more`}
              </p>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          size="lg" 
          className="flex-1"
          onClick={handleGenerateItinerary}
          disabled={isGenerating}
        >
          {isGenerating ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            'Generate My Itinerary'
          )}
        </Button>
        <Button 
          size="lg" 
          variant="outline"
          onClick={resetWizard}
        >
          Start Over
        </Button>
      </div>

      <p className="text-xs text-center text-muted-foreground">
        Itinerary generation is coming soon. Your preferences have been saved.
      </p>
    </div>
  )
}
