import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Star, MapPin, Utensils, Clock } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Katie Introduction */}
      <section className="relative bg-gradient-to-b from-orange-400 via-pink-500 to-purple-600 py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* Katie Avatar */}
            <div className="flex justify-center mb-6">
              <Image
                src="/katie-avatar.png"
                alt="Katie, your Orlando AI travel concierge"
                width={120}
                height={120}
                className="rounded-full shadow-xl border-4 border-white"
              />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
              Hi! I&apos;m Katie, Your Orlando AI Concierge 🌴
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              I&apos;ve planned 500+ Orlando vacations for families just like yours. Tell me what 
              you&apos;re looking for and I&apos;ll build you a personalized itinerary—no stress, 
              no endless Google tabs, just a plan that actually works.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-lg px-8" asChild>
                <Link href="/plan">
                  Chat with Katie
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20" asChild>
                <Link href="/guides/first-timers">First Timer? Start Here</Link>
              </Button>
            </div>
            <p className="text-white/70 text-sm">
              Takes 5 minutes. No signup. Just you, me, and a great vacation plan.
            </p>
          </div>
        </div>
      </section>

      {/* Why Families Trust Katie */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Families Trust Katie</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center border-2 hover:border-pink-300 transition-colors">
              <CardHeader>
                <div className="text-4xl mb-2">🏰</div>
                <CardTitle>Parks & Crowds</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  I know exactly which parks to hit on which days—and how to skip the worst lines. 
                  Disney? Universal? LEGOLAND? I&apos;ve got you.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-pink-300 transition-colors">
              <CardHeader>
                <div className="text-4xl mb-2">👨‍👩‍👧‍👦</div>
                <CardTitle>Family-First Plans</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Got toddlers? Teenagers? Both? I&apos;ll plan around nap times, meltdowns, 
                  and keeping everyone from murdering each other.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-pink-300 transition-colors">
              <CardHeader>
                <div className="text-4xl mb-2">🤖</div>
                <CardTitle>AI That Actually Gets It</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  I&apos;m trained on real vacation rental host data—the stuff TripAdvisor doesn&apos;t 
                  tell you. Think of me as your friend who lives in Orlando.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 bg-gradient-to-r from-orange-50 to-pink-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl font-medium text-gray-700 italic mb-4">
              &ldquo;Katie saved our butts. We followed her plan and actually had FUN instead 
              of arguing in the Magic Kingdom parking lot at 2pm.&rdquo;
            </blockquote>
            <p className="text-gray-500">— Sarah M., family of 5 from Ohio</p>
          </div>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Katie Gives You</h2>
            <p className="text-muted-foreground">A complete day-by-day plan, not generic tips</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center p-6">
              <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Day-by-Day Itinerary</h3>
              <p className="text-sm text-muted-foreground">Tailored to your kids&apos; ages and energy levels</p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="h-12 w-12 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                <Utensils className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="font-semibold mb-2">Where to Eat</h3>
              <p className="text-sm text-muted-foreground">And what to skip (trust me on this)</p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold mb-2">When to Arrive & Leave</h3>
              <p className="text-sm text-muted-foreground">Beat the crowds, maximize fun</p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <span className="text-xl">💰</span>
              </div>
              <h3 className="font-semibold mb-2">Money-Saving Moves</h3>
              <p className="text-sm text-muted-foreground">Customized to your budget level</p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold" asChild>
              <Link href="/plan">Build My Itinerary with Katie ✨</Link>
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
              { name: "Magic Kingdom", slug: "magic-kingdom", desc: "Classic Disney magic", emoji: "🏰" },
              { name: "EPCOT", slug: "epcot", desc: "Food! Future! Booze!", emoji: "🌍" },
              { name: "Hollywood Studios", slug: "hollywood-studios", desc: "Star Wars, baby", emoji: "🎬" },
              { name: "Animal Kingdom", slug: "animal-kingdom", desc: "Animals + rides", emoji: "🦁" },
            ].map((park) => (
              <Link key={park.slug} href={`/parks/${park.slug}`}>
                <Card className="h-full hover:shadow-lg hover:border-pink-300 transition-all cursor-pointer">
                  <CardHeader>
                    <div className="text-3xl mb-2">{park.emoji}</div>
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
          <Card className="bg-gradient-to-r from-purple-500 to-pink-500 border-0">
            <CardContent className="p-8 md:p-12">
              <div className="max-w-2xl text-white">
                <h2 className="text-3xl font-bold mb-4">Why Smart Families Stay in Kissimmee</h2>
                <p className="text-white/90 mb-6">
                  Disney Value Resort: $200/night for 1 cramped room. Kissimmee vacation home: $250/night for 4 bedrooms, 
                  private pool, and full kitchen. For families of 5+, it&apos;s not even close.
                </p>
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold" asChild>
                  <Link href="/kissimmee">Learn More</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="container text-center">
          <p className="text-white/60 text-sm">
            Katie is powered by AI and trained on Orlando vacation data. She&apos;s not perfect, but she&apos;s pretty damn good. And free!
          </p>
        </div>
      </section>
    </div>
  )
}
