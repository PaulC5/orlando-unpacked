"use client"

import { useWizard } from "@/lib/wizard-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Minus, X } from "lucide-react"
import { Child } from "@/lib/wizard-types"

export function StepWho() {
  const { tripData, updateTripData } = useWizard()

  const addChild = () => {
    const newChild: Child = {
      id: Date.now().toString(),
      age: 5,
    }
    updateTripData({
      children: [...tripData.children, newChild],
    })
  }

  const removeChild = (id: string) => {
    updateTripData({
      children: tripData.children.filter(c => c.id !== id),
    })
  }

  const updateChildAge = (id: string, age: number) => {
    updateTripData({
      children: tripData.children.map(c =>
        c.id === id ? { ...c, age } : c
      ),
    })
  }

  const updateSpecialConsideration = (key: keyof typeof tripData.specialConsiderations, value: boolean | string) => {
    updateTripData({
      specialConsiderations: {
        ...tripData.specialConsiderations,
        [key]: value,
      },
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Who's going?</h2>
        <p className="text-muted-foreground">
          Tell us about your group so we can recommend age-appropriate experiences.
        </p>
      </div>

      {/* Adults */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Adults</CardTitle>
          <CardDescription>Ages 18+</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => updateTripData({ adults: Math.max(1, tripData.adults - 1) })}
              disabled={tripData.adults <= 1}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="text-2xl font-bold w-12 text-center">{tripData.adults}</span>
            <Button
              variant="outline"
              size="icon"
              onClick={() => updateTripData({ adults: tripData.adults + 1 })}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Children */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Children</CardTitle>
          <CardDescription>Ages matter for ride requirements and recommendations</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {tripData.children.map((child, index) => (
            <div key={child.id} className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground w-16">Child {index + 1}</span>
              <Select
                value={child.age.toString()}
                onValueChange={(value) => updateChildAge(child.id, parseInt(value))}
              >
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Age" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 18 }, (_, i) => (
                    <SelectItem key={i} value={i.toString()}>
                      {i === 0 ? 'Under 1' : `${i} years`}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeChild(child.id)}
                className="text-muted-foreground hover:text-destructive"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
          
          <Button variant="outline" onClick={addChild} className="w-full">
            <Plus className="h-4 w-4 mr-2" />
            Add Child
          </Button>
        </CardContent>
      </Card>

      {/* Special Considerations */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Special Considerations</CardTitle>
          <CardDescription>Help us tailor recommendations to your needs</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="pregnant"
              checked={tripData.specialConsiderations.pregnant}
              onCheckedChange={(checked) => 
                updateSpecialConsideration('pregnant', checked as boolean)
              }
            />
            <Label htmlFor="pregnant">Pregnant traveler</Label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="mobility"
              checked={tripData.specialConsiderations.mobility}
              onCheckedChange={(checked) =>
                updateSpecialConsideration('mobility', checked as boolean)
              }
            />
            <Label htmlFor="mobility">Mobility limitations (wheelchair/ECV)</Label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="sensory"
              checked={tripData.specialConsiderations.sensory}
              onCheckedChange={(checked) =>
                updateSpecialConsideration('sensory', checked as boolean)
              }
            />
            <Label htmlFor="sensory">Sensory sensitivities (autism-friendly planning)</Label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="firstTrip"
              checked={tripData.specialConsiderations.firstDisneyTrip}
              onCheckedChange={(checked) =>
                updateSpecialConsideration('firstDisneyTrip', checked as boolean)
              }
            />
            <Label htmlFor="firstTrip">First Disney trip for kids</Label>
          </div>

          <div className="space-y-2">
            <Label htmlFor="allergies">Food allergies (if any)</Label>
            <Input
              id="allergies"
              placeholder="e.g., peanuts, gluten, dairy"
              value={tripData.specialConsiderations.foodAllergies}
              onChange={(e) => updateSpecialConsideration('foodAllergies', e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Summary */}
      <div className="bg-muted/50 rounded-lg p-4">
        <p className="text-sm text-muted-foreground">
          <strong>Your group:</strong> {tripData.adults} adult{tripData.adults !== 1 ? 's' : ''}
          {tripData.children.length > 0 && (
            <>, {tripData.children.length} child{tripData.children.length !== 1 ? 'ren' : ''} (ages{' '}
            {tripData.children.map(c => c.age).join(', ')})</>
          )}
        </p>
      </div>
    </div>
  )
}
