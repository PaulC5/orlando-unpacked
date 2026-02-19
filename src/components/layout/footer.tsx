import Link from "next/link"
import { MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="font-bold">Orlando Unpacked</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Honest, practical trip planning for families visiting Orlando. Built by people who&apos;ve actually survived a week at Disney with kids.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Plan</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/plan" className="hover:text-primary transition-colors">Trip Wizard</Link></li>
              <li><Link href="/guides/first-timers" className="hover:text-primary transition-colors">First Timer Guide</Link></li>
              <li><Link href="/guides/on-a-budget" className="hover:text-primary transition-colors">Budget Planning</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Parks</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/parks/magic-kingdom" className="hover:text-primary transition-colors">Magic Kingdom</Link></li>
              <li><Link href="/parks/epcot" className="hover:text-primary transition-colors">EPCOT</Link></li>
              <li><Link href="/parks/hollywood-studios" className="hover:text-primary transition-colors">Hollywood Studios</Link></li>
              <li><Link href="/parks/animal-kingdom" className="hover:text-primary transition-colors">Animal Kingdom</Link></li>
              <li><Link href="/parks/universal-studios" className="hover:text-primary transition-colors">Universal Studios</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Stay</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/hotels" className="hover:text-primary transition-colors">All Hotels</Link></li>
              <li><Link href="/kissimmee" className="hover:text-primary transition-colors">Kissimmee Rentals</Link></li>
              <li><Link href="/kissimmee/why-kissimmee" className="hover:text-primary transition-colors">Why Stay Off-Site?</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Orlando Unpacked. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Not affiliated with Walt Disney World, Universal Orlando, or any theme park.
          </p>
        </div>
      </div>
    </footer>
  )
}
