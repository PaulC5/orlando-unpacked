"use client"

import { WizardProvider } from "@/lib/wizard-context"
import { TripWizard } from "@/components/wizard"
import { Card, CardContent } from "@/components/ui/card"

export default function PlanPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Plan Your Trip</h1>
          <p className="text-muted-foreground">
            Answer a few questions and we'll create a personalized day-by-day itinerary for your family.
          </p>
        </div>

        <Card>
          <CardContent className="p-6 md:p-8">
            <WizardProvider>
              <TripWizard />
            </WizardProvider>
          </CardContent>
        </Card>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Takes about 3-5 minutes. Your answers help us tailor recommendations specifically for your group.
        </p>
      </div>
    </div>
  )
}
