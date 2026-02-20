import Link from "next/link"
import Image from "next/image"
import { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Utensils, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Top 5 Things to Know About Eating at Disney World | Orlando Unpacked",
  description: "Disney dining tips from families who've been there. Mobile ordering secrets, the afternoon meal hack, character dining worth it, and how to save money on food.",
}

export default function DiningGuidePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 py-12">
        <div className="container">
          <Link href="/guides" className="text-white/80 hover:text-white text-sm flex items-center gap-1 mb-4">
            <ArrowLeft className="h-4 w-4" />
            Back to Guides
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-white/20 p-3 rounded-full">
              <Utensils className="h-8 w-8 text-white" />
            </div>
            <div>
              <p className="text-white/80 text-sm">Orlando Unpacked Guide</p>
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                Top 5 Things to Know About Eating at Disney World
              </h1>
            </div>
          </div>
          <p className="text-white/90 text-lg italic">Before you spend $4 on a banana.</p>
          <p className="text-white/60 text-sm mt-2">Last updated: February 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="container py-12 max-w-4xl">
        <Card className="mb-8 border-pink-200 bg-pink-50">
          <CardContent className="p-6">
            <div className="flex gap-4 items-start">
              <Image
                src="/katie-avatar.png"
                alt="Katie"
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <p className="font-medium text-gray-900">Katie&apos;s take:</p>
                <p className="text-gray-700">
                  Orlando Unpacked is built by families who&apos;ve done the Disney dining thing wrong so you don&apos;t have to. 
                  Here&apos;s what we wish someone had told us before our first trip.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <article className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-h2:text-pink-600 prose-h2:border-b prose-h2:pb-2">
          
          <h2>1. You Can (and Should) Bring Your Own Food</h2>
          
          <p>
            Disney allows outside food and drinks in every park. No alcohol, no glass containers, no loose ice — but everything else is fair game. 
            Pack granola bars, fruit pouches, PB&Js, crackers, and refillable water bottles. A family of four can easily save $50-80 per park day just on snacks.
          </p>
          
          <p>
            <strong>Pro tip:</strong> Order grocery delivery to your hotel or vacation home the night before your first park day. 
            Services like Instacart and Amazon Fresh deliver to most Orlando-area accommodations. You&apos;ll want ziplock bags, 
            a small soft cooler, and more goldfish crackers than you think is reasonable.
          </p>
          
          <p>
            <strong>The bottom line:</strong> Every experienced Disney family we&apos;ve talked to packs snacks. The ones who don&apos;t always regret it — 
            not just because of cost, but because a hungry toddler at 2pm with a 40-minute food line is nobody&apos;s idea of magic.
          </p>

          <h2>2. Mobile Order Is Not Optional — It&apos;s Your Secret Weapon</h2>
          
          <p>
            The My Disney Experience app lets you order food at most quick-service restaurants before you&apos;re even hungry. 
            You pick your items, pick a time window, and hit &quot;I&apos;m here&quot; when you&apos;re ready. Your food is prepared and waiting.
          </p>
          
          <p>
            This matters because walk-up lines at quick-service spots routinely hit 30-45 minutes during peak meal times. 
            With mobile ordering, you can eat in 10-15 minutes and get back to riding rides.
          </p>
          
          <p>
            <strong>Dietary restrictions & allergies:</strong> Disney is exceptionally accommodating here — better than almost any restaurant chain we&apos;ve encountered. 
            In the mobile order app, you can flag common allergies and see allergy-friendly menu items. At sit-down restaurants, chefs will come out to your table to discuss options. 
            If your family has food allergies, Disney is actually one of the safest places to eat out. Don&apos;t stress this one.
          </p>
          
          <p><strong>The restaurants that matter most:</strong></p>
          <ul>
            <li><strong>Magic Kingdom:</strong> Columbia Harbour House (quieter upstairs seating that most visitors miss), Pecos Bill (customize your own toppings bar)</li>
            <li><strong>EPCOT:</strong> Sunshine Seasons in The Land (huge variety, something for every picky eater)</li>
            <li><strong>Hollywood Studios:</strong> Backlot Express or Woody&apos;s Lunch Box (order at Backlot, then sit at the shaded tables near BaseLine Tap House)</li>
            <li><strong>Animal Kingdom:</strong> Satu&apos;li Canteen (genuinely good food — the bowls are a standout)</li>
          </ul>
          
          <p>
            <strong>The bottom line:</strong> Set up mobile ordering in the app before your trip. Practice the flow at home so it&apos;s second nature on day one.
          </p>

          <h2>3. The Afternoon Meal Hack That Saves Your Day</h2>
          
          <p>
            Book one sit-down restaurant per park day, between 1:00pm and 3:00pm. This is when wait times for rides tend to peak, 
            the sun is at its worst, and kids are hitting their wall.
          </p>
          
          <p>
            A sit-down lunch gives your family 60-90 minutes of air conditioning, actual chairs, and real plates of food. 
            It resets everyone&apos;s mood. And because you&apos;re eating during peak ride times, you&apos;re not wasting prime low-wait-time hours in a restaurant.
          </p>
          
          <p><strong>Best family table-service picks:</strong></p>
          <ul>
            <li><strong>Magic Kingdom:</strong> The Crystal Palace (Winnie the Pooh characters, buffet, great for families)</li>
            <li><strong>EPCOT:</strong> Garden Grill (small restaurant = characters visit multiple times; family-style all-you-can-eat; legitimately good food)</li>
            <li><strong>Hollywood Studios:</strong> Sci-Fi Dine-In Theater (you eat in a &quot;car&quot; watching old movies — the theming entertains kids more than the food)</li>
            <li><strong>Animal Kingdom:</strong> Tusker House (character buffet with both adventurous AND kid-safe options)</li>
          </ul>
          
          <p>
            <strong>The bottom line:</strong> This isn&apos;t a splurge — it&apos;s a survival strategy. The families who plan their afternoon break around a meal come back to the parks refreshed. 
            The ones who push through regret it by 4pm.
          </p>

          <div className="bg-gradient-to-r from-orange-100 to-pink-100 p-6 rounded-xl my-8 not-prose">
            <p className="font-medium text-gray-800 mb-2">💡 Check current promotions</p>
            <p className="text-gray-600 mb-4">Disney frequently runs seasonal deals like kids-eat-free with dining plans. Worth checking before you book.</p>
            <Button asChild className="bg-pink-500 hover:bg-pink-600">
              <a href="https://disneyworld.disney.go.com/special-offers/" target="_blank" rel="noopener noreferrer">
                See Disney Offers <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <h2>4. Character Dining Is Great — But Not Every Meal Is Worth $200+</h2>
          
          <p>
            Character meals cost roughly $35-75 per person depending on the restaurant. For a family of four, that&apos;s $140-300 for one meal. 
            Some are magical. Some are a waste of money.
          </p>
          
          <p><strong>Worth it:</strong></p>
          <ul>
            <li><strong>Garden Grill (EPCOT):</strong> Family-style, all-you-can-eat, and the restaurant is small enough that Chip, Dale, Mickey, and Pluto visit your table multiple times. The food is also genuinely good — not just &quot;good for Disney.&quot;</li>
            <li><strong>Akershus Royal Banquet Hall (EPCOT):</strong> More affordable than Cinderella&apos;s Royal Table with 5+ rotating princesses. If your kid is in a princess phase, this is the one.</li>
          </ul>
          
          <p><strong>Skip (unless it&apos;s a special occasion):</strong></p>
          <ul>
            <li><strong>Cinderella&apos;s Royal Table:</strong> Beautiful setting inside the castle, but the price-to-value ratio is the worst of any character meal. You&apos;re paying for the location, not the food or character interaction.</li>
            <li><strong>Most character dinners in general:</strong> Character breakfasts consistently get better reviews than dinners. The food is simpler (Mickey waffles, eggs, fruit), the cost is lower, and kids are more energized in the morning for character interactions.</li>
          </ul>
          
          <p>
            <strong>The bottom line:</strong> If you do one character meal per trip, make it a breakfast and choose Garden Grill or Akershus. 
            Save the dinner budget for a meal your whole family will actually enjoy eating.
          </p>

          <h2>5. Free Water Exists (and Other Money-Saving Moves)</h2>
          
          <p>
            Disney charges $3.50+ for a bottle of water. In 90-degree Florida heat with kids, a family of four can blow through $30-40 in water alone per day.
          </p>
          
          <p>
            Instead: walk up to any quick-service restaurant and ask for a cup of ice water. It&apos;s free. Every restaurant. Every park. No purchase required. 
            Bring refillable bottles and top them off at the bottle-filler stations located near most restrooms throughout the parks.
          </p>
          
          <p><strong>Other money moves:</strong></p>
          <ul>
            <li><strong>Share adult portions:</strong> Disney portions are large. One adult entree can feed an adult and a young child, especially at quick-service.</li>
            <li><strong>Eat a big breakfast before the park:</strong> Whether at your hotel or vacation home, a real breakfast means you can push lunch to that strategic 1-3pm window.</li>
            <li><strong>Skip the popcorn bucket (the first time):</strong> The refillable popcorn bucket is $13+. Refills are $2.50. Only worth it if your family will refill it 3+ times across the trip.</li>
          </ul>
          
          <p>
            <strong>The bottom line:</strong> Disney dining doesn&apos;t have to break the bank. The families who plan ahead spend hundreds less than the ones who wing it — and they eat just as well.
          </p>
        </article>

        {/* Related Guides */}
        <div className="mt-12 pt-8 border-t">
          <h3 className="text-xl font-bold mb-4">Related Guides</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/guides/packing-list">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-4">
                  <p className="font-medium">The Orlando Packing List Every Family Needs</p>
                  <p className="text-sm text-muted-foreground">What to bring, what to skip</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/guides/rest-days">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-4">
                  <p className="font-medium">Top 5 Rest Day Activities</p>
                  <p className="text-sm text-muted-foreground">Because you need a break</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Ready to plan your trip?</h2>
          <p className="text-white/80 mb-6">Let Katie build you a personalized day-by-day itinerary.</p>
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold" asChild>
            <Link href="/plan">Plan with Katie ✨</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
