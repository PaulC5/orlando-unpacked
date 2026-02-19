import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Users, MapPin, DollarSign, Sparkles, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 to-background py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Plan Your Perfect Orlando Family Vacation
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Turn overwhelming Orlando trip planning into a simple, personalized itinerary. 
              Honest advice from people who&apos;ve actually survived a week at Disney with kids.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/plan">
                  Start Planning
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/guides/first-timers">First Timer? Start Here</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Answer 5 simple questions and get a personalized day-by-day itinerary for your family.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Calendar className="h-10 w-10 mx-auto text-primary" />
                <CardTitle className="text-lg">When</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Pick your travel dates</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-10 w-10 mx-auto text-primary" />
                <CardTitle className="text-lg">Who</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Tell us about your group</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <MapPin className="h-10 w-10 mx-auto text-primary" />
                <CardTitle className="text-lg">Where</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Choose your parks</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <DollarSign className="h-10 w-10 mx-auto text-primary" />
                <CardTitle className="text-lg">Budget</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Set your spending level</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Sparkles className="h-10 w-10 mx-auto text-primary" />
                <CardTitle className="text-lg">Style</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Customize your preferences</CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-10">
            <Button size="lg" asChild>
              <Link href="/plan">Build My Itinerary</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Parks */}
      <section className="py-16 md:py-24 bg-muted/40">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore the Parks</h2>
            <p className="text-muted-foreground">Honest guides to help you plan smarter</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Magic Kingdom", slug: "magic-kingdom", desc: "Classic Disney magic" },
              { name: "EPCOT", slug: "epcot", desc: "World showcase & innovation" },
              { name: "Hollywood Studios", slug: "hollywood-studios", desc: "Movies come to life" },
              { name: "Animal Kingdom", slug: "animal-kingdom", desc: "Nature meets adventure" },
            ].map((park) => (
              <Link key={park.slug} href={`/parks/${park.slug}`}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <CardTitle>{park.name}</CardTitle>
                    <CardDescription>{park.desc}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/parks">View All Parks</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Kissimmee CTA */}
      <section className="py-16 md:py-24">
        <div className="container">
          <Card className="bg-gradient-to-r from-primary/10 to-primary/5">
            <CardContent className="p-8 md:p-12">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold mb-4">Why Smart Families Stay in Kissimmee</h2>
                <p className="text-muted-foreground mb-6">
                  Disney Value Resort: $200/night for 1 cramped room. Kissimmee vacation home: $250/night for 4 bedrooms, 
                  private pool, and full kitchen. For families of 5+, it&apos;s not even close.
                </p>
                <Button asChild>
                  <Link href="/kissimmee">Learn More</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
