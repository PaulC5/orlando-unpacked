import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X } from "lucide-react"

export default function KissimmeePage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mb-12">
        <h1 className="text-4xl font-bold mb-4">Why Smart Families Stay in Kissimmee</h1>
        <p className="text-lg text-muted-foreground">
          The honest math on staying off-site — and why it's often the better choice for families.
        </p>
      </div>

      <div className="max-w-4xl">
        {/* The Math */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>The Honest Math</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Disney Value Resort</h4>
                <p className="text-2xl font-bold text-primary">$200/night</p>
                <p className="text-sm text-muted-foreground">1 room, sleeps 4 awkwardly</p>
              </div>
              <div className="bg-primary/10 rounded-lg p-4 border-2 border-primary">
                <h4 className="font-semibold mb-2">Kissimmee Vacation Home</h4>
                <p className="text-2xl font-bold text-primary">$250/night</p>
                <p className="text-sm text-muted-foreground">4 bedrooms, private pool, full kitchen</p>
              </div>
            </div>
            <p className="text-center text-muted-foreground">
              For families of 5+, it's not even close.
            </p>
          </CardContent>
        </Card>

        {/* What You Get */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-500" />
                What You Get Off-Site
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <span><strong>Space</strong> — Kids in their own rooms = everyone sleeps</span>
                </li>
                <li className="flex gap-3">
                  <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <span><strong>Private pool</strong> — No fighting for pool chairs at 7am</span>
                </li>
                <li className="flex gap-3">
                  <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <span><strong>Full kitchen</strong> — Breakfast at home saves $50/day easily</span>
                </li>
                <li className="flex gap-3">
                  <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <span><strong>Laundry</strong> — Pack half as much, stay twice as long</span>
                </li>
                <li className="flex gap-3">
                  <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <span><strong>Extras</strong> — Game rooms, themed bedrooms, multiple TVs</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <X className="h-5 w-5 text-red-500" />
                What You Give Up (Honestly)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <X className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                  <span><strong>Disney "magic"</strong> of staying on property</span>
                </li>
                <li className="flex gap-3">
                  <X className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                  <span><strong>Free airport transport</strong> — Magical Express ended anyway</span>
                </li>
                <li className="flex gap-3">
                  <X className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                  <span><strong>Early park entry</strong> — 30 min, nice but not essential</span>
                </li>
                <li className="flex gap-3">
                  <X className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                  <span><strong>Walking distance</strong> — You're driving either way at most Disney resorts</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* The Verdict */}
        <Card className="mb-8 bg-muted/50">
          <CardHeader>
            <CardTitle>The Verdict</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              <strong>Stay on-site if:</strong> You're a family of 4 doing a short trip and want the full Disney immersion.
            </p>
            <p>
              <strong>Stay in Kissimmee if:</strong> You're 5+ people, staying a week, or want actual space and a pool to yourself.
            </p>
          </CardContent>
        </Card>

        {/* Neighborhoods */}
        <h2 className="text-2xl font-bold mb-6">Popular Kissimmee Neighborhoods</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Champions Gate</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Closest to Disney, golf community vibes. 10-15 min to Magic Kingdom.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Reunion</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Upscale, resort amenities, water park access. A bit further out.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Windsor Hills</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Affordable, family-focused, community pool. Great for budget stays.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Storey Lake</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                New construction, modern homes. Closer to Universal.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center bg-primary/10 rounded-lg p-8">
          <h3 className="text-xl font-bold mb-4">Ready to Plan Your Stay?</h3>
          <p className="text-muted-foreground mb-6">
            Our trip planner will recommend accommodations based on your group size and budget.
          </p>
          <Button asChild>
            <Link href="/plan">Start Planning</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
