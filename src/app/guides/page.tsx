import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Utensils, Backpack, Palmtree, Baby, DollarSign, GraduationCap, Sparkles } from "lucide-react"

const guides = [
  {
    title: "Top 5 Things to Know About Disney Dining",
    slug: "dining",
    desc: "Mobile ordering secrets, the afternoon meal hack, character dining worth it, and how to save money on food.",
    icon: Utensils,
    featured: true,
  },
  {
    title: "The Orlando Packing List Every Family Needs",
    slug: "packing-list",
    desc: "What to bring, what to skip, and the one thing you'll regret forgetting. Includes gear recommendations.",
    icon: Backpack,
    featured: true,
  },
  {
    title: "Top 5 Rest Day Activities",
    slug: "rest-days",
    desc: "Because you need a break. Disney Springs, Gatorland, pool days, state parks, and more ways to recharge.",
    icon: Palmtree,
    featured: true,
  },
  {
    title: "First-Timer's Guide",
    slug: "first-timers",
    desc: "Everything you need to know for your first Orlando trip. We'll help you avoid the common mistakes.",
    icon: Sparkles,
    comingSoon: true,
  },
  {
    title: "Orlando with Toddlers",
    slug: "with-toddlers",
    desc: "Yes, it's possible to do Disney with a 2-year-old without losing your mind. Here's how.",
    icon: Baby,
    comingSoon: true,
  },
  {
    title: "Orlando with Teens",
    slug: "with-teens",
    desc: "Keep your teenagers engaged (and off their phones) with the right park choices and thrill rides.",
    icon: GraduationCap,
    comingSoon: true,
  },
  {
    title: "Orlando on a Budget",
    slug: "on-a-budget",
    desc: "How we did Disney for $2,000 (family of 4, 5 days). Real strategies that work.",
    icon: DollarSign,
    comingSoon: true,
  },
]

export default function GuidesPage() {
  const featuredGuides = guides.filter((g) => g.featured)
  const upcomingGuides = guides.filter((g) => g.comingSoon)

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 py-12">
        <div className="container">
          <div className="flex items-center gap-4 mb-4">
            <Image
              src="/katie-avatar.png"
              alt="Katie"
              width={60}
              height={60}
              className="rounded-full border-2 border-white"
            />
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">Planning Guides</h1>
              <p className="text-white/80">In-depth guides for your Orlando trip</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <div className="max-w-3xl mb-8">
          <p className="text-lg text-muted-foreground">
            Because planning for a trip with toddlers is completely different from planning with teenagers. 
            These guides go deep on specific topics so you know exactly what to expect.
          </p>
        </div>

        {/* Featured Guides */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-pink-500" />
            Featured Guides
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredGuides.map((guide) => (
              <Link key={guide.slug} href={`/guides/${guide.slug}`}>
                <Card className="h-full hover:shadow-lg hover:border-pink-300 transition-all cursor-pointer">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-orange-100 to-pink-100 flex items-center justify-center mb-2">
                      <guide.icon className="h-6 w-6 text-pink-600" />
                    </div>
                    <CardTitle className="text-lg">{guide.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="line-clamp-3">{guide.desc}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Coming Soon */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Coming Soon</h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl">
            {upcomingGuides.map((guide) => (
              <Card key={guide.slug} className="h-full opacity-75">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <guide.icon className="h-6 w-6 text-muted-foreground" />
                    <div>
                      <CardTitle className="text-base">{guide.title}</CardTitle>
                      <span className="text-xs text-pink-500 font-medium">Coming Soon</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="line-clamp-2">{guide.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-center text-white max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">Want a personalized plan?</h2>
          <p className="text-white/80 mb-6">
            These guides are great for research. But if you want a complete day-by-day itinerary tailored to your family, let Katie help.
          </p>
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold" asChild>
            <Link href="/plan">Plan with Katie ✨</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
