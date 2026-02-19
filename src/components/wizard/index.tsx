"use client"

import { useWizard } from "@/lib/wizard-context"
import { WizardProgress } from "./wizard-progress"
import { StepWhen } from "./step-when"
import { StepWho } from "./step-who"
import { StepWhere } from "./step-where"
import { StepBudget } from "./step-budget"
import { StepPreferences } from "./step-preferences"
import { WizardSummary } from "./wizard-summary"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"

export function TripWizard() {
  const { currentStep, nextStep, prevStep, canProceed } = useWizard()

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <StepWhen />
      case 2:
        return <StepWho />
      case 3:
        return <StepWhere />
      case 4:
        return <StepBudget />
      case 5:
        return <StepPreferences />
      default:
        return <StepWhen />
    }
  }

  // Show summary after step 5 is complete
  const showSummary = currentStep === 5 && canProceed

  return (
    <div className="space-y-8">
      <WizardProgress />

      <div className="min-h-[400px]">
        {showSummary ? <WizardSummary /> : renderStep()}
      </div>

      {!showSummary && (
        <div className="flex justify-between pt-4 border-t">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>

          <Button
            onClick={nextStep}
            disabled={!canProceed}
          >
            {currentStep === 5 ? 'Review Trip' : 'Next'}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  )
}
