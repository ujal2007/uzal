import { EditorHeader } from "@/components/editor-header"
import { PreviewPanel } from "@/components/preview-panel"
import { TimelinePanel } from "@/components/timeline-panel"
import { ControlBar } from "@/components/control-bar"

export default function Home() {
  return (
    <main className="flex h-screen flex-col bg-background">
      <EditorHeader />

      <div className="flex flex-1 overflow-hidden">
        <PreviewPanel />
      </div>

      <TimelinePanel />
      <ControlBar />
    </main>
  )
}
