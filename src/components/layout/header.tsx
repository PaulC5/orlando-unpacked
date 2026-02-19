import Link from "next/link"
import { MapPin, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <MapPin className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">Orlando Unpacked</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/plan" className="text-sm font-medium hover:text-primary transition-colors">
            Plan Your Trip
          </Link>
          <Link href="/parks" className="text-sm font-medium hover:text-primary transition-colors">
            Parks
          </Link>
          <Link href="/hotels" className="text-sm font-medium hover:text-primary transition-colors">
            Hotels
          </Link>
          <Link href="/kissimmee" className="text-sm font-medium hover:text-primary transition-colors">
            Kissimmee
          </Link>
          <Link href="/guides" className="text-sm font-medium hover:text-primary transition-colors">
            Guides
          </Link>
          <Link href="/blog" className="text-sm font-medium hover:text-primary transition-colors">
            Blog
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button asChild className="hidden md:inline-flex">
            <Link href="/plan">Start Planning</Link>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
