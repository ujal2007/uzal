import { Menu, Save, Share2, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function EditorHeader() {
  return (
    <header className="animate-slide-in-top flex h-14 items-center justify-between border-b border-border bg-card px-4">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Menu className="h-4 w-4" />
        </Button>
        <div className="flex items-center gap-2">
          <div className="relative h-8 w-8 overflow-hidden rounded-full border border-primary/50 transition-all duration-300 hover:scale-110 hover:border-primary">
            <Image src="/uzal-logo.png" alt="UZAL.fx Logo" width={32} height={32} className="object-cover" />
          </div>
          <span className="font-mono text-sm font-semibold">UZAL.fx</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" className="h-8 gap-2 text-xs">
          <Save className="h-3.5 w-3.5" />
          Save
        </Button>
        <Button variant="ghost" size="sm" className="h-8 gap-2 text-xs">
          <Share2 className="h-3.5 w-3.5" />
          Export
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Settings className="h-4 w-4" />
        </Button>
      </div>
    </header>
  )
}
