"use client"

import { createContext, useContext, useState, ReactNode } from 'react'
import { TripData, initialTripData } from './wizard-types'

interface WizardContextType {
  currentStep: number
  setCurrentStep: (step: number) => void
  tripData: TripData
  updateTripData: (data: Partial<TripData>) => void
  nextStep: () => void
  prevStep: () => void
  canProceed: boolean
  resetWizard: () => void
}

const WizardContext = createContext<WizardContextType | undefined>(undefined)

export function WizardProvider({ children }: { children: ReactNode }) {
  const [currentStep, setCurrentStep] = useState(1)
  const [tripData, setTripData] = useState<TripData>(initialTripData)

  const updateTripData = (data: Partial<TripData>) => {
    setTripData(prev => ({ ...prev, ...data }))
  }

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(prev => prev + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const resetWizard = () => {
    setCurrentStep(1)
    setTripData(initialTripData)
  }

  // Validation for each step
  const canProceed = (() => {
    switch (currentStep) {
      case 1: // When
        return !!(tripData.arrivalDate && tripData.departureDate)
      case 2: // Who
        return tripData.adults > 0
      case 3: // Where
        return tripData.selectedParks.length > 0
      case 4: // Budget
        return tripData.budgetTier !== ''
      case 5: // Preferences
        return tripData.tripStyle !== ''
      default:
        return false
    }
  })()

  return (
    <WizardContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        tripData,
        updateTripData,
        nextStep,
        prevStep,
        canProceed,
        resetWizard,
      }}
    >
      {children}
    </WizardContext.Provider>
  )
}

export function useWizard() {
  const context = useContext(WizardContext)
  if (!context) {
    throw new Error('useWizard must be used within a WizardProvider')
  }
  return context
}
