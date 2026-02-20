import Link from "next/link"
import Image from "next/image"
import { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Backpack, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "The Orlando Packing List Every Family Needs | Orlando Unpacked",
  description: "What to bring to Disney World and Universal. Portable chargers, rain ponchos, broken-in shoes, and everything else that actually matters.",
}

export default function PackingListPage() {
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
              <Backpack className="h-8 w-8 text-white" />
            </div>
            <div>
              <p className="text-white/80 text-sm">Orlando Unpacked Guide</p>
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                The Orlando Packing List Every Family Needs
              </h1>
            </div>
          </div>
          <p className="text-white/90 text-lg italic">What to bring, what to skip, and the one thing you&apos;ll regret forgetting.</p>
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
                  We&apos;ve done this trip enough times to know: overpacking makes you miserable and underpacking makes you broke 
                  (because you&apos;ll buy everything at Disney prices). This list is what actually matters.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <article className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-h2:text-pink-600 prose-h2:border-b prose-h2:pb-2 prose-h3:text-gray-700">

          <h2>Park Day Bag (What Goes With You Every Day)</h2>
          
          <ul className="space-y-3">
            <li><strong>Two portable chargers (10,000mAh minimum)</strong> — The Disney and Universal apps drain batteries by 2pm. You need them for mobile ordering, wait times, Lightning Lane, and photos. Bring two so you always have a backup charging.</li>
            <li><strong>Refillable water bottles (one per person)</strong> — Free ice water refills at any quick-service restaurant. Saves $30+/day vs buying bottles.</li>
            <li><strong>Snack bag</strong> — Granola bars, fruit pouches, goldfish crackers, dried fruit. Disney allows outside food. A hangry kid in a 40-minute food line is nobody&apos;s vacation.</li>
            <li><strong>Rain ponchos (disposable, one per person)</strong> — It WILL rain. Every afternoon in summer, randomly the rest of the year. Disney charges $10+ for a poncho in the parks. Buy a 10-pack on Amazon for $12.</li>
            <li><strong>Portable fan/misting fan</strong> — The handheld ones with a water mist tank. Sounds silly. Feels lifesaving by noon in July.</li>
            <li><strong>Sunscreen (SPF 50+, sport formula)</strong> — Reapply every 2 hours. You&apos;re in the sun more than you think, even on &quot;cloudy&quot; days.</li>
            <li><strong>Small first aid kit</strong> — Band-aids (especially blister-specific ones like Moleskin), children&apos;s pain reliever, anti-chafing stick, Benadryl if your kid has allergies.</li>
            <li><strong>Extra pair of socks per person</strong> — Sounds weird. Changes everything at 3pm when feet are sore and damp from rain or water rides.</li>
            <li><strong>Ziplock bags (gallon size, 3-4)</strong> — Wet clothes, phone protection on water rides, snack organization. The most versatile item in your bag.</li>
            <li><strong>Autograph book + thick Sharpie</strong> — If your kids are into character meets, thin pens are hard for characters in gloves to hold.</li>
            <li><strong>Ear protection for young kids</strong> — Fireworks, parades, and some shows are LOUD. For kids with sensory sensitivities, noise-reducing headphones make a huge difference.</li>
          </ul>

          <h2>What to Wear (This Is Where Most Families Go Wrong)</h2>
          
          <ul className="space-y-3">
            <li><strong>Two pairs of broken-in walking shoes</strong> — You&apos;ll walk 6-9 miles per park day. NEVER bring new shoes. Break them in for at least 2 weeks before your trip. Bring a second pair so you can rotate (and so wet shoes from day one can dry).</li>
            <li><strong>Moisture-wicking socks</strong> — Cotton socks + Florida heat + 20,000 steps = blisters. Athletic/hiking socks make a real difference.</li>
            <li><strong>Light, breathable clothing</strong> — Athletic fabric &gt; cotton in Orlando humidity. Dress in layers only if visiting November-February.</li>
            <li><strong>One outfit change per person per day</strong> — Plan to change after your mid-day break. A fresh shirt and dry socks resets your whole mood.</li>
            <li><strong>Hat or visor for everyone</strong> — Sun protection that doesn&apos;t require reapplying. Baseball caps work fine.</li>
          </ul>

          <h2>For Babies & Toddlers</h2>
          
          <ul className="space-y-3">
            <li><strong>Stroller (must be under 31&quot; wide x 52&quot; long)</strong> — Even if your kid &quot;doesn&apos;t use a stroller anymore,&quot; bring one. Parks are massive. Disney rents single strollers for $15/day, doubles for $31/day — your own is cheaper and more familiar.</li>
            <li><strong>Stroller rain cover</strong> — Protects the stroller (and everything stored in it) during afternoon downpours.</li>
            <li><strong>Clip-on stroller fan</strong> — Battery-powered, aimed at child. Essential in summer months.</li>
            <li><strong>Diapers, wipes, swim diapers</strong> — Pack more than you think. Baby Care Centers in every park have supplies for emergencies, but at premium prices.</li>
            <li><strong>Familiar comfort item</strong> — Their blanket, stuffed animal, whatever calms them down. You&apos;ll need it.</li>
            <li><strong>Baby food pouches / formula / bottles</strong> — Don&apos;t count on park food working for babies. Bring what they actually eat.</li>
          </ul>

          <h2>For the Hotel / Vacation Home</h2>
          
          <ul className="space-y-3">
            <li><strong>Grocery delivery (schedule before arrival)</strong> — Instacart or Amazon Fresh delivered to your hotel or rental. Stock up on breakfast foods, lunch supplies, snacks, and drinks. A family of four can save $200+ over a week by eating breakfast and some lunches &quot;at home.&quot;</li>
            <li><strong>Laundry pods (travel size, 5-6)</strong> — Most vacation homes have washers. Even resort hotels have laundromats. Doing one load mid-trip means you can pack half the clothes.</li>
            <li><strong>Nightlight</strong> — Unfamiliar hotel rooms + kids who wake up = someone walking into furniture.</li>
            <li><strong>White noise machine or app</strong> — Hotels are noisy. Thin walls, hallway foot traffic, fireworks at 9pm. A white noise machine helps everyone sleep.</li>
            <li><strong>Waterproof phone pouch</strong> — For water park days and water rides. $8 on Amazon vs $20+ in the parks.</li>
          </ul>

          <div className="bg-gradient-to-r from-orange-100 to-pink-100 p-6 rounded-xl my-8 not-prose">
            <p className="font-medium text-gray-800 mb-2">📸 Skip the Phone, Get Memory Maker</p>
            <p className="text-gray-600 mb-4">
              If you&apos;re tired of being the family photographer (and never being IN the photos), consider Disney&apos;s Memory Maker package. 
              It gives you unlimited downloads of all PhotoPass photos taken during your trip — ride photos, character meets, Magic Shots, and photos taken by Disney photographers around the parks.
            </p>
            <Button asChild className="bg-pink-500 hover:bg-pink-600">
              <a href="https://disneyworld.disney.go.com/memory-maker/" target="_blank" rel="noopener noreferrer">
                Learn About Memory Maker <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <h2>What NOT to Pack</h2>
          
          <ul className="space-y-3">
            <li><strong>Full-size toiletries</strong> — Hotels and rentals provide basics. Buy anything else at a nearby Walmart/Target after arrival.</li>
            <li><strong>Dress-up clothes</strong> — Unless you have a specific reservation at a signature restaurant, you won&apos;t need them. Orlando is casual.</li>
            <li><strong>Bulky toys or tablets for the parks</strong> — They&apos;ll get lost, broken, or create one more thing to carry. Save screens for the hotel at night.</li>
            <li><strong>Coolers larger than a soft lunchbox</strong> — Disney allows soft-sided coolers only, no larger than 24&quot; x 15&quot; x 18&quot;. A small insulated lunch bag is all you need.</li>
            <li><strong>Selfie sticks or tripods</strong> — Banned at Disney and Universal parks.</li>
          </ul>

          <h2>The One Thing You&apos;ll Regret Forgetting</h2>
          
          <p>
            <strong>Comfortable, broken-in shoes.</strong> Everything else on this list can be bought at a Florida Target or Walmart in a pinch. 
            But there&apos;s no fixing blistered, aching feet on day two of a five-day trip. Break them in before you go. 
            Your whole family will thank you by 3pm on day one.
          </p>
        </article>

        {/* Related Guides */}
        <div className="mt-12 pt-8 border-t">
          <h3 className="text-xl font-bold mb-4">Related Guides</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/guides/dining">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-4">
                  <p className="font-medium">Top 5 Things to Know About Disney Dining</p>
                  <p className="text-sm text-muted-foreground">Mobile ordering, meal hacks, and more</p>
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
