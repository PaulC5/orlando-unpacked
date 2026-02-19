import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function BlogPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mb-12">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-lg text-muted-foreground">
          Tips, news, and updates about Orlando theme parks. Practical advice, not fluff.
        </p>
      </div>

      <div className="max-w-2xl space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Coming Soon</CardTitle>
            <CardDescription>Blog content is in development</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We're working on our first batch of articles covering topics like:
            </p>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>• Spring Break 2026: Crowd Predictions + Survival Guide</li>
              <li>• 10 First-Timer Mistakes (and How to Avoid Them)</li>
              <li>• Genie+ Explained: Is It Worth $25/Person?</li>
              <li>• Disney vs. Universal: Which One First?</li>
              <li>• The Best Disney Snacks Under $10</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
