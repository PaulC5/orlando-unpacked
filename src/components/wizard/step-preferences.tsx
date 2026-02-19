"use client"

import { useWizard } from "@/lib/wizard-context"
import { TRIP_STYLES, MUST_DO_EXPERIENCES, SKIP_OPTIONS } from "@/lib/wizard-types"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { cn } from "@/lib/utils"

export function StepPreferences() {
  const { tripData, updateTripData } = useWizard()

  const toggleMustDo = (id: string) => {
    const isSelected = tripData.mustDos.includes(id)
    if (isSelected) {
      updateTripData({
        mustDos: tripData.mustDos.filter(item => item !== id),
      })
    } else {
      updateTripData({
        mustDos: [...tripData.mustDos, id],
      })
    }
  }

  const toggleSkip = (id: string) => {
    const isSelected = tripData.skipList.includes(id)
    if (isSelected) {
      updateTripData({
        skipList: tripData.skipList.filter(item => item !== id),
      })
    } else {
      updateTripData({
        skipList: [...tripData.skipList, id],
      })
    }
  }

  // Filter must-dos based on selected parks
  const relevantMustDos = MUST_DO_EXPERIENCES.filter(exp => 
    exp.parks.includes('any') || 
    exp.parks.some(park => tripData.selectedParks.includes(park))
  )

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">How do you like to vacation?</h2>
        <p className="text-muted-foreground">
          Tell us your style and must-do experiences. We&apos;ll build your perfect itinerary.
        </p>
      </div>

      {/* Trip Style */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Trip Style</CardTitle>
          <CardDescription>How intense do you want your park days?</CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={tripData.tripStyle}
            onValueChange={(value) => updateTripData({ tripStyle: value as typeof tripData.tripStyle })}
            className="space-y-3"
          >
            {TRIP_STYLES.map((style) => (
              <div
                key={style.id}
                onClick={() => updateTripData({ tripStyle: style.id as typeof tripData.tripStyle })}
                className={cn(
                  "flex items-start gap-4 p-4 rounded-lg border cursor-pointer transition-colors",
                  tripData.tripStyle === style.id
                    ? "bg-primary/10 border-primary"
                    : "hover:bg-muted/50"
                )}
              >
                <RadioGroupItem value={style.id} id={style.id} className="mt-1" />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{style.icon}</span>
                    <Label htmlFor={style.id} className="text-lg font-semibold cursor-pointer">
                      {style.name}
                    </Label>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{style.desc}</p>
                </div>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
      </Card>

      {/* Must-Dos */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Must-Do Experiences</CardTitle>
          <CardDescription>
            What can&apos;t you miss? We&apos;ll prioritize these in your itinerary.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 gap-2">
            {relevantMustDos.map((exp) => {
              const isSelected = tripData.mustDos.includes(exp.id)
              return (
                <div
                  key={exp.id}
                  onClick={() => toggleMustDo(exp.id)}
                  className={cn(
                    "flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors",
                    isSelected
                      ? "bg-primary/10 border-primary"
                      : "hover:bg-muted/50"
                  )}
                >
                  <Checkbox checked={isSelected} />
                  <Label className="cursor-pointer text-sm">{exp.name}</Label>
                </div>
              )
            })}
          </div>
          {tripData.mustDos.length > 0 && (
            <p className="text-sm text-muted-foreground mt-3">
              {tripData.mustDos.length} must-do{tripData.mustDos.length !== 1 ? 's' : ''} selected
            </p>
          )}
        </CardContent>
      </Card>

      {/* Skip List */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Skip List</CardTitle>
          <CardDescription>
            Anything you want to avoid? We&apos;ll keep these out of your plan.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 gap-2">
            {SKIP_OPTIONS.map((option) => {
              const isSelected = tripData.skipList.includes(option.id)
              return (
                <div
                  key={option.id}
                  onClick={() => toggleSkip(option.id)}
                  className={cn(
                    "flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors",
                    isSelected
                      ? "bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800"
                      : "hover:bg-muted/50"
                  )}
                >
                  <Checkbox checked={isSelected} />
                  <Label className="cursor-pointer text-sm">{option.name}</Label>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Trip Style Tips */}
      {tripData.tripStyle === 'intense' && (
        <div className="bg-orange-50 dark:bg-orange-950 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
          <p className="text-sm text-orange-800 dark:text-orange-200">
            <strong>Go-Hard Mode:</strong> We&apos;ll schedule rope drop arrivals, strategic Lightning Lane times, 
            and optimize your route for maximum rides. Pack comfortable shoes and energy bars!
          </p>
        </div>
      )}

      {tripData.tripStyle === 'balanced' && tripData.children.some(c => c.age < 8) && (
        <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Smart Choice:</strong> With young kids, the afternoon break back at the hotel 
            is essential. They&apos;ll be happier, you&apos;ll be saner, and evenings at the park are magical.
          </p>
        </div>
      )}

      {tripData.tripStyle === 'relaxed' && (
        <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-4">
          <p className="text-sm text-green-800 dark:text-green-200">
            <strong>Relaxed Mode:</strong> We&apos;ll focus on quality over quantity. Longer meals, 
            more shows, time to explore details. This is a vacation, not a marathon.
          </p>
        </div>
      )}
    </div>
  )
}
