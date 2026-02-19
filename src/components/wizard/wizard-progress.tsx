"use client"

import { useWizard } from "@/lib/wizard-context"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import { Calendar, Users, MapPin, DollarSign, Sparkles, Check } from "lucide-react"

const steps = [
  { number: 1, label: "When", icon: Calendar },
  { number: 2, label: "Who", icon: Users },
  { number: 3, label: "Where", icon: MapPin },
  { number: 4, label: "Budget", icon: DollarSign },
  { number: 5, label: "Style", icon: Sparkles },
]

export function WizardProgress() {
  const { currentStep } = useWizard()
  const progressValue = ((currentStep - 1) / (steps.length - 1)) * 100

  return (
    <div className="space-y-4">
      {/* Progress Bar */}
      <Progress value={progressValue} className="h-2" />

      {/* Step Indicators */}
      <div className="flex justify-between">
        {steps.map((step) => {
          const Icon = step.icon
          const isCompleted = currentStep > step.number
          const isCurrent = currentStep === step.number

          return (
            <div
              key={step.number}
              className={cn(
                "flex flex-col items-center gap-1",
                isCurrent ? "text-primary" : isCompleted ? "text-primary" : "text-muted-foreground"
              )}
            >
              <div
                className={cn(
                  "flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors",
                  isCurrent
                    ? "border-primary bg-primary text-primary-foreground"
                    : isCompleted
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-muted-foreground/30"
                )}
              >
                {isCompleted ? (
                  <Check className="h-5 w-5" />
                ) : (
                  <Icon className="h-5 w-5" />
                )}
              </div>
              <span className="text-xs font-medium hidden sm:block">{step.label}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
