import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Clock, DollarSign, Users } from "lucide-react"

const parkData: Record<string, { name: string; desc: string; bestFor: string[]; tips: string[] }> = {
  "magic-kingdom": {
    name: "Magic Kingdom",
    desc: "The most iconic Disney park, featuring Cinderella Castle, classic rides like Space Mountain and Pirates of the Caribbean, and beloved character meet-and-greets.",
    bestFor: ["Families with kids under 10", "First-time Disney visitors", "Character meet fans"],
    tips: [
      "Rope drop Seven Dwarfs Mine Train — wait times hit 90+ minutes by mid-morning",
      "Do Fantasyland rides early before stroller traffic clogs the walkways",
      "The Starbucks on Main Street has the shortest line around 9am",
      "Watch fireworks from the hub grass — arrive 45 minutes early for good spots",
    ]
  },
  "epcot": {
    name: "EPCOT",
    desc: "A unique blend of thrilling attractions, world cultures, and innovative experiences. The World Showcase features 11 countries with authentic food and entertainment.",
    bestFor: ["Families with kids 8+", "Foodies", "Thrill seekers (Guardians, Test Track)"],
    tips: [
      "Guardians of the Galaxy is the hottest ride — book Lightning Lane early",
      "World Showcase opens at 11am, so hit Future World attractions first",
      "Festival seasons (Food & Wine, Flower & Garden) add tons of extra value",
      "Frozen Ever After in Norway has some of the longest waits — rope drop it",
    ]
  },
  "hollywood-studios": {
    name: "Hollywood Studios",
    desc: "Home to Star Wars: Galaxy's Edge and Toy Story Land. Features some of Disney's most immersive experiences including Rise of the Resistance.",
    bestFor: ["Star Wars fans", "Families with kids 6+", "Thrill seekers"],
    tips: [
      "Rise of the Resistance is a must-do — try for Individual Lightning Lane at 7am",
      "Slinky Dog Dash lines get long fast — rope drop or end of night",
      "Tower of Terror is a classic but terrifies some kids — know before you go",
      "Build a lightsaber at Savi's Workshop (reservation required, $250)",
    ]
  },
  "animal-kingdom": {
    name: "Animal Kingdom",
    desc: "The largest Disney park by acreage, featuring incredible theming, the Avatar Flight of Passage experience, and real animal encounters.",
    bestFor: ["Nature lovers", "Avatar fans", "Families wanting a more relaxed pace"],
    tips: [
      "Flight of Passage is worth the hype — rope drop or Individual Lightning Lane",
      "Kilimanjaro Safaris is best first thing when animals are most active",
      "This park closes earlier than others — check the schedule",
      "Expedition Everest is a great coaster but check if the Yeti is working",
    ]
  },
  "universal-studios": {
    name: "Universal Studios Florida",
    desc: "Movie-themed attractions including Diagon Alley from Harry Potter, the Simpsons, and Minion Land. Great mix of thrills and family rides.",
    bestFor: ["Harry Potter fans", "Movie buffs", "Families with mixed ages"],
    tips: [
      "Hagrid's (at Islands of Adventure) is the top ride — do the Hogwarts Express between parks",
      "Express Pass is worth it here more than Disney's Genie+",
      "Diagon Alley is more detailed than Hogsmeade — take time to explore",
      "MEN IN BLACK is an underrated gem with low waits",
    ]
  },
  "islands-of-adventure": {
    name: "Islands of Adventure",
    desc: "Orlando's best thrill rides including Hagrid's Motorbike Adventure and VelociCoaster. Also home to Hogsmeade and the Wizarding World.",
    bestFor: ["Thrill seekers", "Harry Potter fans", "Teens and tweens"],
    tips: [
      "VelociCoaster is the best coaster in Florida — rope drop it",
      "Hagrid's has the longest waits — consider early entry or Express",
      "The Incredible Hulk is a classic but very intense",
      "Jurassic World VelociCoaster has a height requirement of 51 inches",
    ]
  },
  "volcano-bay": {
    name: "Volcano Bay",
    desc: "Universal's water theme park with a virtual queue system (TapuTapu) that lets you wait in comfort. Features everything from lazy rivers to extreme slides.",
    bestFor: ["Families wanting a water park day", "Those with Universal tickets"],
    tips: [
      "Get there early — capacity limits mean they close entry when full",
      "The volcano drop (Ko'okiri) is extreme but Krakatau Aqua Coaster is fun for everyone",
      "Cabanas sell out fast — book online in advance if you want one",
      "Some slides have height requirements — check before promising kids",
    ]
  }
}

export default function ParkPage({ params }: { params: { slug: string } }) {
  const park = parkData[params.slug]
  
  if (!park) {
    notFound()
  }

  return (
    <div className="container py-12">
      <Link href="/parks" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Parks
      </Link>

      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">{park.name}</h1>
        <p className="text-lg text-muted-foreground mb-8">{park.desc}</p>

        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardContent className="flex items-center gap-3 p-4">
              <Clock className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Typical Day</p>
                <p className="font-medium">8-10 hours</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-3 p-4">
              <DollarSign className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Ticket</p>
                <p className="font-medium">$109-189/day</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-3 p-4">
              <Users className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Crowd Level</p>
                <p className="font-medium">Moderate</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Best For</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {park.bestFor.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Insider Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {park.tips.map((tip, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-primary font-bold">{i + 1}.</span>
                  {tip}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div className="bg-muted/50 rounded-lg p-6 text-center">
          <p className="text-muted-foreground mb-4">Ready to include {park.name} in your trip?</p>
          <Button asChild>
            <Link href="/plan">Plan Your Visit</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
