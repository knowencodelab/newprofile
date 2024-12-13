import { Button } from "@/components/ui/button"
import { Github, Linkedin } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="font-bold text-xl">Cosmas Beri Knowen</div>
        <nav className="flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild>
            <a href="#about">About</a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a href="#experience">Experience</a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a href="#skills">Skills</a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a href="#publications">Publications</a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a href="#contact">Contact</a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="https://www.linkedin.com/in/cosmas-knowen-916640171/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4" />
            </a>
          </Button>
        </nav>
      </div>
    </header>
  )
}

