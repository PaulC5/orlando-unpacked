"use client"

import { useWizard } from "@/lib/wizard-context"
import { PARKS } from "@/lib/wizard-types"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

export function StepWhere() {
  const { tripData, updateTripData } = useWizard()

  const togglePark = (parkId: string) => {
    const isSelected = tripData.selectedParks.includes(parkId)
    if (isSelected) {
      updateTripData({
        selectedParks: tripData.selectedParks.filter(id => id !== parkId),
      })
    } else {
      updateTripData({
        selectedParks: [...tripData.selectedParks, parkId],
      })
    }
  }

  // Get recommendations based on children's ages
  const getRecommendation = (parkId: string): string | null => {
    const childAges = tripData.children.map(c => c.age)
    const hasToddlers = childAges.some(age => age < 4)
    const hasYoungKids = childAges.some(age => age >= 4 && age < 8)
    const hasOlderKids = childAges.some(age => age >= 8 && age < 13)
    const hasTeens = childAges.some(age => age >= 13)

    const recommendations: Record<string, string | null> = {
      'magic-kingdom': hasToddlers || hasYoungKids ? '⭐ Great for your group!' : null,
      'epcot': hasOlderKids || hasTeens ? '⭐ Good for older kids' : null,
      'hollywood-studios': hasOlderKids || hasTeens ? '⭐ Star Wars & thrills!' : null,
      'animal-kingdom': hasYoungKids || hasToddlers ? '⭐ Safari is kid-friendly' : null,
      'universal-studios': hasOlderKids ? '⭐ Harry Potter awaits' : null,
      'islands-of-adventure': hasTeens ? '⭐ Best thrill rides' : null,
      'volcano-bay': hasYoungKids || hasOlderKids ? '⭐ Great water park day' : null,
      'pool-day': tripData.children.length > 0 ? '⭐ Kids need breaks!' : null,
    }

    return recommendations[parkId]
  }

  const disneyParks = PARKS.filter(p => p.resort === 'disney')
  const universalParks = PARKS.filter(p => p.resort === 'universal')
  const otherOptions = PARKS.filter(p => p.resort === 'none')

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Where do you want to go?</h2>
        <p className="text-muted-foreground">
          Select the parks you want to visit. We&apos;ll help you figure out how many days for each.
        </p>
      </div>

      {/* Disney Parks */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Walt Disney World</CardTitle>
          <CardDescription>The classic Orlando experience</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-3">
          {disneyParks.map((park) => {
            const isSelected = tripData.selectedParks.includes(park.id)
            const recommendation = getRecommendation(park.id)
            
            return (
              <div
                key={park.id}
                onClick={() => togglePark(park.id)}
                className={cn(
                  "flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-colors",
                  isSelected 
                    ? "bg-primary/10 border-primary" 
                    : "hover:bg-muted/50"
                )}
              >
                <div className="flex items-center gap-3">
                  <Checkbox checked={isSelected} />
                  <span className="text-xl">{park.icon}</span>
                  <Label className="cursor-pointer font-medium">{park.name}</Label>
                </div>
                {recommendation && (
                  <span className="text-sm text-primary">{recommendation}</span>
                )}
              </div>
            )
          })}
        </CardContent>
      </Card>

      {/* Universal Parks */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Universal Orlando</CardTitle>
          <CardDescription>Thrills and Harry Potter magic</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-3">
          {universalParks.map((park) => {
            const isSelected = tripData.selectedParks.includes(park.id)
            const recommendation = getRecommendation(park.id)
            
            return (
              <div
                key={park.id}
                onClick={() => togglePark(park.id)}
                className={cn(
                  "flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-colors",
                  isSelected 
                    ? "bg-primary/10 border-primary" 
                    : "hover:bg-muted/50"
                )}
              >
                <div className="flex items-center gap-3">
                  <Checkbox checked={isSelected} />
                  <span className="text-xl">{park.icon}</span>
                  <Label className="cursor-pointer font-medium">{park.name}</Label>
                </div>
                {recommendation && (
                  <span className="text-sm text-primary">{recommendation}</span>
                )}
              </div>
            )
          })}
        </CardContent>
      </Card>

      {/* Other Options */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Rest Days</CardTitle>
          <CardDescription>Trust us, you&apos;ll want these</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-3">
          {otherOptions.map((park) => {
            const isSelected = tripData.selectedParks.includes(park.id)
            const recommendation = getRecommendation(park.id)
            
            return (
              <div
                key={park.id}
                onClick={() => togglePark(park.id)}
                className={cn(
                  "flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-colors",
                  isSelected 
                    ? "bg-primary/10 border-primary" 
                    : "hover:bg-muted/50"
                )}
              >
                <div className="flex items-center gap-3">
                  <Checkbox checked={isSelected} />
                  <span className="text-xl">{park.icon}</span>
                  <Label className="cursor-pointer font-medium">{park.name}</Label>
                </div>
                {recommendation && (
                  <span className="text-sm text-primary">{recommendation}</span>
                )}
              </div>
            )
          })}
        </CardContent>
      </Card>

      {/* Selection Summary */}
      {tripData.selectedParks.length > 0 && (
        <div className="bg-muted/50 rounded-lg p-4">
          <p className="text-sm">
            <strong>Selected:</strong>{' '}
            {tripData.selectedParks
              .map(id => PARKS.find(p => p.id === id)?.name)
              .join(', ')}
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            {tripData.selectedParks.length} day{tripData.selectedParks.length !== 1 ? 's' : ''} of activities planned
          </p>
        </div>
      )}
    </div>
  )
}
