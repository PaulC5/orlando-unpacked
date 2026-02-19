"use client"

import { useWizard } from "@/lib/wizard-context"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { CalendarIcon } from "lucide-react"
import { format, differenceInDays } from "date-fns"
import { cn } from "@/lib/utils"

export function StepWhen() {
  const { tripData, updateTripData } = useWizard()

  const tripLength = tripData.arrivalDate && tripData.departureDate
    ? differenceInDays(tripData.departureDate, tripData.arrivalDate)
    : 0

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">When are you going?</h2>
        <p className="text-muted-foreground">
          Select your arrival and departure dates. We&apos;ll help you plan each day.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Arrival Date</CardTitle>
            <CardDescription>When do you arrive in Orlando?</CardDescription>
          </CardHeader>
          <CardContent>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !tripData.arrivalDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {tripData.arrivalDate ? (
                    format(tripData.arrivalDate, "PPP")
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={tripData.arrivalDate}
                  onSelect={(date) => updateTripData({ arrivalDate: date })}
                  disabled={(date) => date < new Date()}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Departure Date</CardTitle>
            <CardDescription>When do you head home?</CardDescription>
          </CardHeader>
          <CardContent>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !tripData.departureDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {tripData.departureDate ? (
                    format(tripData.departureDate, "PPP")
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={tripData.departureDate}
                  onSelect={(date) => updateTripData({ departureDate: date })}
                  disabled={(date) => 
                    date < new Date() || 
                    (tripData.arrivalDate ? date <= tripData.arrivalDate : false)
                  }
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </CardContent>
        </Card>
      </div>

      {tripLength > 0 && (
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Trip Length</p>
                <p className="text-2xl font-bold">{tripLength} nights</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Park Days Available</p>
                <p className="text-2xl font-bold">{Math.max(0, tripLength - 1)}</p>
                <p className="text-xs text-muted-foreground">
                  (accounting for arrival/departure)
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {tripLength >= 7 && (
        <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-4">
          <p className="text-sm text-green-800 dark:text-green-200">
            <strong>Great choice!</strong> A week gives you time to enjoy the parks without rushing, 
            plus rest days to recover. You'll need them.
          </p>
        </div>
      )}

      {tripLength > 0 && tripLength < 4 && (
        <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
          <p className="text-sm text-amber-800 dark:text-amber-200">
            <strong>Short but doable!</strong> We&apos;ll help you prioritize the must-dos 
            and skip what can wait for next time.
          </p>
        </div>
      )}
    </div>
  )
}
