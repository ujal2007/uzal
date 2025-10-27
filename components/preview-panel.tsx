import Image from "next/image"
import { Maximize2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PreviewPanel() {
  return (
    <div className="flex flex-1 flex-col border-r border-border bg-secondary/30">
      <div className="flex h-10 items-center justify-between border-b border-border bg-card px-3">
        <span className="font-mono text-xs font-medium text-muted-foreground">PREVIEW</span>
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6 transition-all duration-200 hover:rotate-90 hover:scale-110"
        >
          <Maximize2 className="h-3 w-3" />
        </Button>
      </div>

      <div className="flex flex-1 items-center justify-center p-8">
        <div className="w-full max-w-md space-y-6">
          <div className="flex flex-col items-center text-center">
            <div className="animate-scale-in animate-float relative mb-6 h-24 w-24 overflow-hidden rounded-full border-2 border-primary/50 shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-110 hover:border-primary hover:shadow-2xl hover:shadow-primary/40">
              <Image
                src="/uzal-logo.png"
                alt="UZAL.fx Profile"
                width={96}
                height={96}
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-[ping_2s_ease-in-out_infinite]" />
            </div>

            <h1
              className="animate-fade-in animate-bounce-subtle mb-2 font-mono text-2xl font-bold tracking-tight"
              style={{ animationDelay: "0.2s", animationFillMode: "backwards" }}
            >
              UZAL.fx
            </h1>
            <p
              className="animate-fade-in mb-4 font-mono text-sm text-primary transition-all duration-300 hover:drop-shadow-[0_0_10px_currentColor]"
              style={{ animationDelay: "0.3s", animationFillMode: "backwards" }}
            >
              @UZAL.im
            </p>
            <p
              className="animate-fade-in text-pretty text-sm leading-relaxed text-muted-foreground"
              style={{ animationDelay: "0.4s", animationFillMode: "backwards" }}
            >
              Content Creator • Digital Artist • Follow me everywhere
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
