"use client"

import { useWizard } from "@/lib/wizard-context"
import { BUDGET_TIERS } from "@/lib/wizard-types"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { cn } from "@/lib/utils"
import { DollarSign } from "lucide-react"

export function StepBudget() {
  const { tripData, updateTripData } = useWizard()

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">What's your budget?</h2>
        <p className="text-muted-foreground">
          This helps us recommend the right hotels, dining, and extras for your trip.
        </p>
      </div>

      {/* Budget Tiers */}
      <RadioGroup
        value={tripData.budgetTier}
        onValueChange={(value) => updateTripData({ budgetTier: value as typeof tripData.budgetTier })}
        className="space-y-3"
      >
        {BUDGET_TIERS.map((tier) => (
          <div
            key={tier.id}
            onClick={() => updateTripData({ budgetTier: tier.id as typeof tripData.budgetTier })}
            className={cn(
              "flex items-start gap-4 p-4 rounded-lg border cursor-pointer transition-colors",
              tripData.budgetTier === tier.id
                ? "bg-primary/10 border-primary"
                : "hover:bg-muted/50"
            )}
          >
            <RadioGroupItem value={tier.id} id={tier.id} className="mt-1" />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <Label htmlFor={tier.id} className="text-lg font-semibold cursor-pointer">
                  {tier.name}
                </Label>
                <span className="text-sm font-medium text-primary">{tier.price}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">{tier.desc}</p>
            </div>
          </div>
        ))}
      </RadioGroup>

      {/* What's Already Covered */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">What do you already have?</CardTitle>
          <CardDescription>Check what's already booked or purchased</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div
            onClick={() => updateTripData({ hasTickets: !tripData.hasTickets })}
            className={cn(
              "flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors",
              tripData.hasTickets ? "bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800" : "hover:bg-muted/50"
            )}
          >
            <Checkbox checked={tripData.hasTickets} />
            <div>
              <Label className="cursor-pointer font-medium">Already have park tickets</Label>
              <p className="text-sm text-muted-foreground">We won&apos;t include ticket costs in estimates</p>
            </div>
          </div>

          <div
            onClick={() => updateTripData({ hasHotel: !tripData.hasHotel })}
            className={cn(
              "flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors",
              tripData.hasHotel ? "bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800" : "hover:bg-muted/50"
            )}
          >
            <Checkbox checked={tripData.hasHotel} />
            <div>
              <Label className="cursor-pointer font-medium">Already have hotel/accommodation</Label>
              <p className="text-sm text-muted-foreground">We won&apos;t include lodging in estimates</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Budget Tips */}
      {tripData.budgetTier === 'budget' && (
        <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
          <div className="flex gap-3">
            <DollarSign className="h-5 w-5 text-amber-600 shrink-0" />
            <div>
              <p className="text-sm font-medium text-amber-800 dark:text-amber-200">Budget Tips</p>
              <p className="text-sm text-amber-700 dark:text-amber-300 mt-1">
                Consider a Kissimmee vacation rental — you&apos;ll get more space for less money, 
                plus a kitchen to save on breakfast costs.
              </p>
            </div>
          </div>
        </div>
      )}

      {tripData.budgetTier === 'unlimited' && (
        <div className="bg-purple-50 dark:bg-purple-950 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
          <div className="flex gap-3">
            <DollarSign className="h-5 w-5 text-purple-600 shrink-0" />
            <div>
              <p className="text-sm font-medium text-purple-800 dark:text-purple-200">VIP Experience</p>
              <p className="text-sm text-purple-700 dark:text-purple-300 mt-1">
                With this budget, we'll include premium experiences like VIP tours, 
                fireworks dessert parties, and the best dining reservations.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
