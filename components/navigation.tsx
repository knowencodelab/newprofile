import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  return (
    <nav className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold font-outfit text-slate-800 dark:text-slate-100">Cosmas Knowen</Link>
        <div className="flex gap-4">
          <Button variant="ghost" asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/profile">Profile</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/skills">Skills</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/experience">Experience</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/publications">Publications</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/education">Education</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}

