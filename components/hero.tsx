import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center gap-8 py-16">
      <div className="flex-1 space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Cosmas Beri Knowen</h1>
        <p className="text-xl text-muted-foreground">IT Consultant & Academic Professional</p>
        <p className="max-w-[600px] text-muted-foreground">
          Accomplished IT professional with expertise in software development, AI, and computational ethics. 
          Passionate about leveraging technology for societal transformation.
        </p>
        <div className="flex gap-4">
          <Button asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="/path-to-your-cv.pdf" download>Download CV</a>
          </Button>
        </div>
      </div>
      <Avatar className="w-48 h-48 border-4 border-background shadow-xl">
        <AvatarImage src="/website_logo.png" alt="Cosmas Beri Knowen" />
        <AvatarFallback>CK</AvatarFallback>
      </Avatar>
    </section>
  )
}

