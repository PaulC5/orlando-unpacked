import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HotelsPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mb-12">
        <h1 className="text-4xl font-bold mb-4">Where to Stay</h1>
        <p className="text-lg text-muted-foreground">
          From Disney resorts to Kissimmee vacation homes, find the right accommodation for your family and budget.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Disney Value Resorts</CardTitle>
            <CardDescription>$150-250/night</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Pop Century, All-Star Resorts. Great for the Disney experience on a budget. 
              Expect themed rooms but smaller spaces.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Disney Moderate Resorts</CardTitle>
            <CardDescription>$250-400/night</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Caribbean Beach, Coronado Springs. Bigger rooms, better pools, more dining options. 
              The sweet spot for many families.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Disney Deluxe Resorts</CardTitle>
            <CardDescription>$400-800/night</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Grand Floridian, Polynesian, Contemporary. Walking distance to parks, top-tier theming, 
              signature dining. A splurge worth considering.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Universal Hotels</CardTitle>
            <CardDescription>$200-600/night</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Premier hotels include Express Pass. Cabana Bay is excellent value. 
              All offer early park admission.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Off-Site Hotels</CardTitle>
            <CardDescription>$100-300/night</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Marriott, Hilton, and more along I-Drive and in Lake Buena Vista. 
              Great value, but you'll need a car.
            </p>
          </CardContent>
        </Card>

        <Card className="border-primary">
          <CardHeader>
            <CardTitle>Kissimmee Vacation Homes</CardTitle>
            <CardDescription>$200-500/night</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              <strong>Best value for families of 5+.</strong> Private pools, full kitchens, multiple bedrooms. 
              15-20 min from parks.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 bg-muted/50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
        <p className="text-muted-foreground">
          Detailed hotel reviews and comparison tools are in development. 
          For now, use our trip planner to get personalized accommodation recommendations.
        </p>
      </div>
    </div>
  )
}
