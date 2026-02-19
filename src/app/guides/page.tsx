import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Baby, DollarSign, GraduationCap, Sparkles } from "lucide-react"

const guides = [
  {
    title: "First-Timer's Guide",
    slug: "first-timers",
    desc: "Everything you need to know for your first Orlando trip. We'll help you avoid the common mistakes and make the most of your visit.",
    icon: Sparkles,
  },
  {
    title: "Orlando with Toddlers",
    slug: "with-toddlers",
    desc: "Yes, it's possible to do Disney with a 2-year-old without losing your mind. Here's how to plan for naps, meltdowns, and actually enjoying yourself.",
    icon: Baby,
  },
  {
    title: "Orlando with Teens",
    slug: "with-teens",
    desc: "Keep your teenagers engaged (and off their phones) with the right park choices, thrill rides, and experiences they'll actually think are cool.",
    icon: GraduationCap,
  },
  {
    title: "Orlando on a Budget",
    slug: "on-a-budget",
    desc: "How we did Disney for $2,000 (family of 4, 5 days). Real strategies that work, not just 'bring your own snacks.'",
    icon: DollarSign,
  },
]

export default function GuidesPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mb-12">
        <h1 className="text-4xl font-bold mb-4">Planning Guides</h1>
        <p className="text-lg text-muted-foreground">
          In-depth guides for specific situations. Because planning for a trip with toddlers 
          is completely different from planning with teenagers.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl">
        {guides.map((guide) => (
          <Link key={guide.slug} href={`/guides/${guide.slug}`}>
            <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <guide.icon className="h-8 w-8 text-primary mb-2" />
                <CardTitle>{guide.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="line-clamp-3">{guide.desc}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-12 bg-muted/50 rounded-lg p-8 text-center max-w-2xl mx-auto">
        <h2 className="text-xl font-bold mb-4">More Guides Coming Soon</h2>
        <p className="text-muted-foreground">
          We're working on guides for specific holidays, special needs planning, 
          and more. Subscribe to get notified when new content drops.
        </p>
      </div>
    </div>
  )
}
