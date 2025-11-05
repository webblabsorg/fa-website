import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2 } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-cream-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8 mb-16">
          <Badge variant="success" className="text-sm px-4 py-2">
            Phase 1.2 Complete
          </Badge>
          <h1 className="text-6xl font-bold text-primary-600">
            Welcome to Fare
          </h1>
          <p className="text-2xl text-slate-600 max-w-2xl mx-auto">
            Professional Livestock Management Software
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="text-lg">
              Get Started for $99
            </Button>
            <Button size="lg" variant="outline" className="text-lg" asChild>
              <a href="https://lsk.fare2u.com/" target="_blank" rel="noopener noreferrer">
                Check Demo
              </a>
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CheckCircle2 className="h-8 w-8 text-primary-600 mb-2" />
              <CardTitle>Components Ready</CardTitle>
              <CardDescription>
                All shadcn/ui components installed and configured
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>✓ Button with variants</li>
                <li>✓ Card components</li>
                <li>✓ Badge with colors</li>
                <li>✓ Accordion</li>
                <li>✓ Dialog</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CheckCircle2 className="h-8 w-8 text-sage-500 mb-2" />
              <CardTitle>Dependencies</CardTitle>
              <CardDescription>
                All required packages successfully installed
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>✓ Radix UI Primitives</li>
                <li>✓ Framer Motion</li>
                <li>✓ Lucide React Icons</li>
                <li>✓ Animation Library</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CheckCircle2 className="h-8 w-8 text-secondary mb-2" />
              <CardTitle>Next Steps</CardTitle>
              <CardDescription>
                Ready for Phase 2 - Design System
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>→ Custom components</li>
                <li>→ Hero section</li>
                <li>→ Feature sections</li>
                <li>→ Animation setup</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-500 text-sm">
            426 packages installed • 0 vulnerabilities • TypeScript configured
          </p>
        </div>
      </div>
    </main>
  )
}
