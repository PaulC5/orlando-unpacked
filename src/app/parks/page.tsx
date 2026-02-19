import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const parks = [
  {
    category: "Walt Disney World",
    parks: [
      { name: "Magic Kingdom", slug: "magic-kingdom", desc: "The classic Disney experience with Cinderella Castle, Space Mountain, and beloved characters." },
      { name: "EPCOT", slug: "epcot", desc: "Explore world cultures, cutting-edge tech, and thrilling attractions like Guardians of the Galaxy." },
      { name: "Hollywood Studios", slug: "hollywood-studios", desc: "Star Wars, Toy Story, and movie magic. Home to Rise of the Resistance." },
      { name: "Animal Kingdom", slug: "animal-kingdom", desc: "Safari adventures, Avatar's Pandora, and incredible theming throughout." },
    ]
  },
  {
    category: "Universal Orlando",
    parks: [
      { name: "Universal Studios", slug: "universal-studios", desc: "Movie-themed thrills, Diagon Alley, and attractions for all ages." },
      { name: "Islands of Adventure", slug: "islands-of-adventure", desc: "Hogsmeade, Jurassic World, and the best thrill rides in Orlando." },
      { name: "Volcano Bay", slug: "volcano-bay", desc: "Universal's water theme park with virtual queue technology." },
    ]
  }
]

export default function ParksPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mb-12">
        <h1 className="text-4xl font-bold mb-4">Theme Park Guides</h1>
        <p className="text-lg text-muted-foreground">
          Honest, practical guides to every major Orlando theme park. What to ride, what to skip, 
          and how to make the most of your day.
        </p>
      </div>

      {parks.map((category) => (
        <div key={category.category} className="mb-12">
          <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {category.parks.map((park) => (
              <Link key={park.slug} href={`/parks/${park.slug}`}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-lg">{park.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="line-clamp-3">{park.desc}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
