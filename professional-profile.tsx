import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Linkedin, BookOpen, Mail } from 'lucide-react'

export default function ProfessionalProfile() {
  return (
    <Card className="w-full max-w-3xl mx-auto bg-gradient-to-b from-background to-muted/20">
      <CardHeader className="flex flex-col sm:flex-row items-center gap-6 pb-2">
        <Avatar className="w-32 h-32 border-4 border-background shadow-xl">
          <AvatarImage src="website_logo.png" alt="Cosmas Beri Knowen" />
          <AvatarFallback>CK</AvatarFallback>
        </Avatar>
        <div className="text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl font-bold">Cosmas Beri Knowen</h1>
          <p className="text-muted-foreground">IT Tutorial Fellow at Lukenya University</p>
          <div className="flex flex-wrap gap-2 mt-3 justify-center sm:justify-start">
            <Badge variant="secondary">AI & Machine Learning</Badge>
            <Badge variant="secondary">Software Development</Badge>
            <Badge variant="secondary">Computational Ethics</Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="prose prose-sm max-w-none">
          <p className="text-muted-foreground">
            An accomplished IT professional, academic, and aspiring researcher with a Master's degree in Information Technology. 
            Passionate about Software Development, AI for societal transformation, and ethical computing.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <h3 className="font-semibold">Education</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>MSc. Information Technology - Rongo University</li>
              <li>BSc. Information Science (IT Option) - Rongo University</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Contact</h3>
            <div className="flex flex-col gap-2">
              <Button variant="outline" className="justify-start" asChild>
                <a href="mailto:cosmasknowen@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  cosmasknowen@gmail.com
                </a>
              </Button>
              <Button variant="outline" className="justify-start" asChild>
                <a href="https://www.linkedin.com/in/cosmas-knowen-916640171/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn Profile
                </a>
              </Button>
              <Button variant="outline" className="justify-start" asChild>
                <a href="https://scholar.google.com/citations?user=eUvRQ_kAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Google Scholar
                </a>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

