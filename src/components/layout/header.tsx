import Link from "next/link"
import Image from "next/image"
import { Menu, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🌴</span>
          <span className="font-bold text-xl">Orlando Unpacked</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/plan" className="text-sm font-medium text-pink-600 hover:text-pink-700 transition-colors flex items-center gap-1">
            <Sparkles className="h-4 w-4" />
            Plan with Katie
          </Link>
          <Link href="/parks" className="text-sm font-medium hover:text-pink-600 transition-colors">
            Parks
          </Link>
          <Link href="/hotels" className="text-sm font-medium hover:text-pink-600 transition-colors">
            Hotels
          </Link>
          <Link href="/kissimmee" className="text-sm font-medium hover:text-pink-600 transition-colors">
            Kissimmee
          </Link>
          <Link href="/guides" className="text-sm font-medium hover:text-pink-600 transition-colors">
            Guides
          </Link>
          <Link href="/blog" className="text-sm font-medium hover:text-pink-600 transition-colors">
            Blog
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button asChild className="hidden md:inline-flex bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white border-0">
            <Link href="/plan" className="flex items-center gap-2">
              <Image
                src="/katie-avatar.png"
                alt="Katie"
                width={24}
                height={24}
                className="rounded-full"
              />
              Start Planning
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
