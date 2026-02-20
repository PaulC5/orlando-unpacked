import Link from "next/link"
import Image from "next/image"
import { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Palmtree, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Top 5 Rest Day Activities in Orlando | Orlando Unpacked",
  description: "What to do on your non-park day in Orlando. Disney Springs, Gatorland, pool days, state parks, and more ways to recharge without spending $600.",
}

export default function RestDaysPage() {
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
              <Palmtree className="h-8 w-8 text-white" />
            </div>
            <div>
              <p className="text-white/80 text-sm">Orlando Unpacked Guide</p>
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                Top 5 Rest Day Activities in Orlando
              </h1>
            </div>
          </div>
          <p className="text-white/90 text-lg italic">Because no family — especially yours — should do theme parks every single day.</p>
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
                  Here&apos;s the truth nobody tells you in the planning stage: by day three of a Disney trip, your kids will hit a wall. You will too. 
                  The families who plan a rest day come back to the parks refreshed. The ones who power through? Meltdown at Cinderella Castle at 2pm.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <article className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-h2:text-pink-600 prose-h2:border-b prose-h2:pb-2 prose-h3:text-gray-700">

          <p>
            A rest day doesn&apos;t mean doing nothing. It means doing something that doesn&apos;t cost $600 and require walking 8 miles in 95-degree heat.
          </p>

          <h2>1. Disney Springs — The Free Day Out You Already Have Access To</h2>
          
          <p><strong>Cost:</strong> Free admission. Budget $30-80 for food/activities.</p>
          <p><strong>Best for:</strong> All ages. Especially good for stroller-age kids and exhausted parents.</p>
          <p><strong>Time needed:</strong> 2-5 hours depending on your pace.</p>
          
          <p>
            Disney Springs is a massive outdoor shopping, dining, and entertainment complex with no admission fee, no park ticket required, and no lines to get in. 
            It doesn&apos;t feel like a consolation prize — it feels like a genuinely fun afternoon.
          </p>
          
          <p>
            Kids gravitate toward the LEGO Store (free building tables inside), the World of Disney store (biggest Disney shop on Earth), and the Void-style experiences. 
            Parents appreciate the real restaurants, actual cocktails, and the fact that nobody is rushing to the next FastPass.
          </p>
          
          <p>
            <strong>The move:</strong> Go in the late afternoon. Have an early dinner at a place you&apos;d never afford inside the parks 
            (Morimoto Asia, The Boathouse, Wine Bar George), then walk the waterfront at sunset. It&apos;s one of the nicest evenings you&apos;ll have on your trip.
          </p>

          <h2>2. Gatorland — Thrilling, Affordable, and Completely Different</h2>
          
          <p><strong>Cost:</strong> ~$30/adult, ~$20/child (ages 3-12). Zip line packages extra.</p>
          <p><strong>Best for:</strong> Ages 3-12 especially, but genuinely entertaining for adults.</p>
          <p><strong>Time needed:</strong> 3-4 hours.</p>
          
          <p>
            Gatorland calls itself the &quot;Alligator Capital of the World&quot; and it&apos;s earned the name. Thousands of alligators and crocodiles, a petting zoo, bird rookery, 
            free-roaming animals, and — if your kids are old enough — a zip line that runs directly over the gator breeding marsh.
          </p>
          
          <p>
            This is a completely different energy from Disney or Universal. It&apos;s smaller, less polished, more real. 
            Kids who&apos;ve been surrounded by screens and queues for three days lose their minds watching a gator feeding show from ten feet away.
          </p>
          
          <p>
            <strong>The move:</strong> Go in the morning when animals are most active. Plan 3 hours. Pick up lunch on the way back to the hotel and spend the afternoon at the pool.
          </p>

          <h2>3. A Pool Day (Seriously — Don&apos;t Underestimate This)</h2>
          
          <p><strong>Cost:</strong> Free (you already paid for the hotel/rental).</p>
          <p><strong>Best for:</strong> Every age. Especially toddlers and overstimulated kids.</p>
          <p><strong>Time needed:</strong> As long as you want.</p>
          
          <p>
            If you&apos;re staying at a Disney resort, a Universal hotel, or a Kissimmee vacation home with a private pool, a pool day is not &quot;wasting&quot; a vacation day. 
            It&apos;s one of the best days of the trip.
          </p>
          
          <p>
            Kids don&apos;t need another ride. They need unstructured time, water, snacks, and parents who aren&apos;t checking an app every four minutes. 
            Disney resort pools have waterslides, splash zones, and poolside activities. Kissimmee vacation homes have private pools you don&apos;t have to share with anyone.
          </p>
          
          <p>
            <strong>The move:</strong> Sleep in. Make breakfast at your rental (or hit the hotel buffet). Be at the pool by 10am. 
            Alternate between pool and lazy lunch. By 4pm, everyone is rested, tan, and actually excited about going back to the parks tomorrow.
          </p>

          <h2>4. Dezerland Park — The Indoor Backup Nobody Knows About</h2>
          
          <p><strong>Cost:</strong> Varies by activity ($15-40 range for most combos).</p>
          <p><strong>Best for:</strong> Ages 5-14. Strong option for rainy days or extreme heat.</p>
          <p><strong>Time needed:</strong> 2-4 hours.</p>
          
          <p>
            Dezerland Park is a 250,000-square-foot indoor entertainment complex on International Drive. It has go-karts, a massive arcade, VR experiences, bowling, trampolines, 
            an auto museum, and more — all under one air-conditioned roof.
          </p>
          
          <p>
            Most Orlando visitors have never heard of it, and that&apos;s the point. It&apos;s significantly less crowded and less expensive than any theme park. 
            Kids get to run around, play games, and compete with each other in an environment that feels completely different from the structured theme park experience.
          </p>
          
          <p>
            <strong>The move:</strong> Perfect for an afternoon when the morning was spent at the pool. Drive over around 1pm, let kids burn off energy for 2-3 hours, head home for dinner prep.
          </p>

          <h2>5. Blue Spring State Park — The Nature Reset</h2>
          
          <p><strong>Cost:</strong> $6 per vehicle (up to 8 people).</p>
          <p><strong>Best for:</strong> Ages 4+. Exceptional November-March for manatee viewing.</p>
          <p><strong>Time needed:</strong> 3-5 hours including drive (about 45 minutes from Disney).</p>
          
          <p>
            This is the wildcard, and it&apos;s the one families remember most. Blue Spring State Park is a natural spring where the water stays 72 degrees year-round. 
            From November through March, hundreds of manatees gather here — you&apos;ll see them from the boardwalk just feet below you. 
            The rest of the year, the spring run is open for swimming and kayaking in crystal-clear water.
          </p>
          
          <p>
            It&apos;s a 45-minute drive from Disney, which sounds far until you realize that your kids will spend the car ride actually looking out the window at Florida 
            instead of waiting in a queue.
          </p>
          
          <p>
            <strong>The move:</strong> Pack a cooler with sandwiches and fruit. Leave by 9am to beat crowds. If visiting in winter, the manatees are most active in the morning. 
            If visiting in summer, bring swimsuits and water shoes. Stop for ice cream in the nearby town of DeLand on the way back.
          </p>

          <div className="bg-gradient-to-r from-orange-100 to-pink-100 p-6 rounded-xl my-8 not-prose">
            <p className="font-medium text-gray-800 mb-2">🛶 Book a Guided Experience</p>
            <p className="text-gray-600 mb-4">Want a guided kayak tour at Blue Spring? You&apos;ll paddle through crystal-clear water and likely spot manatees, turtles, and birds.</p>
            <Button asChild className="bg-pink-500 hover:bg-pink-600">
              <a href="https://www.viator.com/Orlando-tours/Kayaking/d663-g1-c82" target="_blank" rel="noopener noreferrer">
                See Kayak Tours <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <h2>Honorable Mentions</h2>
          
          <ul className="space-y-3">
            <li><strong>ICON Park (I-Drive):</strong> The big observation wheel, SeaLife Aquarium, and Madame Tussauds. Good for a 2-3 hour outing. Overpriced individually but combo tickets bring the cost down.</li>
            <li><strong>Kelly Park / Rock Springs:</strong> A less-crowded alternative to Blue Spring with a natural lazy river through the forest. Tubing is the main draw. $5/vehicle. Arrive early — it fills to capacity by 10am on weekends.</li>
            <li><strong>Celebration, FL:</strong> The original Disney-built town, about 10 minutes from the parks. Walkable downtown with restaurants, a lakefront path, and quirky planned-community history. Free to explore.</li>
            <li><strong>Orlando Science Center:</strong> Perfect for ages 3-10, especially the Kids Town interactive zone for under-7s. About 2-3 hours.</li>
            <li><strong>Old Town (Kissimmee):</strong> Free outdoor entertainment area with arcades, rides, live music, and weekly classic car shows on Saturday nights.</li>
            <li><strong>Mini golf:</strong> There are at least a dozen themed mini-golf courses along I-Drive and 192. Congo River and Hollywood Drive-In Golf are family favorites. Budget $10-15/person.</li>
          </ul>
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
            <Link href="/guides/packing-list">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-4">
                  <p className="font-medium">The Orlando Packing List Every Family Needs</p>
                  <p className="text-sm text-muted-foreground">What to bring, what to skip</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Need help planning your rest day?</h2>
          <p className="text-white/80 mb-6">Katie builds rest days right into your personalized itinerary based on your trip length.</p>
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold" asChild>
            <Link href="/plan">Plan with Katie ✨</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
