import { Music2, Instagram, Twitter, Youtube, Facebook, Twitch, Mail, Globe } from "lucide-react"

const socialTracks = [
  {
    name: "TikTok",
    username: "@UZAL.im",
    url: "https://tiktok.com/@UZAL.im",
    icon: Music2,
    color: "bg-primary",
    duration: "100%",
  },
  {
    name: "Instagram",
    username: "@UZAL.im",
    url: "https://instagram.com/UZAL.im",
    icon: Instagram,
    color: "bg-pink-500",
    duration: "85%",
  },
  {
    name: "Twitter",
    username: "@UZAL_fx",
    url: "https://twitter.com/UZAL_fx",
    icon: Twitter,
    color: "bg-blue-400",
    duration: "75%",
  },
  {
    name: "YouTube",
    username: "UZAL",
    url: "https://youtube.com/@UZAL",
    icon: Youtube,
    color: "bg-red-500",
    duration: "90%",
  },
  {
    name: "Facebook",
    username: "UZAL.fx",
    url: "https://facebook.com/UZAL.fx",
    icon: Facebook,
    color: "bg-blue-600",
    duration: "65%",
  },
  {
    name: "Twitch",
    username: "UZAL_fx",
    url: "https://twitch.tv/UZAL_fx",
    icon: Twitch,
    color: "bg-purple-500",
    duration: "70%",
  },
  {
    name: "Website",
    username: "uzal.fx",
    url: "https://uzal.fx",
    icon: Globe,
    color: "bg-green-500",
    duration: "80%",
  },
  {
    name: "Email",
    username: "Contact Me",
    url: "mailto:contact@uzal.fx",
    icon: Mail,
    color: "bg-orange-500",
    duration: "60%",
  },
]

export function TimelinePanel() {
  return (
    <div className="animate-slide-in-bottom relative h-64 border-t border-border bg-card">
      <div className="flex h-10 items-center border-b border-border bg-secondary/50 px-3">
        <span className="font-mono text-xs font-medium text-muted-foreground">SOCIAL TRACKS</span>
      </div>

      <div className="absolute left-0 top-10 z-10 h-[calc(100%-2.5rem)] w-0.5">
        <div className="animate-playhead absolute h-full w-full bg-primary shadow-[0_0_10px_rgba(59,130,246,0.5)]">
          <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
        </div>
      </div>

      <div className="h-[calc(100%-2.5rem)] overflow-y-auto">
        {socialTracks.map((track, index) => {
          const Icon = track.icon
          return (
            <a
              key={track.name}
              href={track.url}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-slide-in-left group relative flex h-12 items-center border-b border-border/50 transition-all duration-200 hover:bg-secondary/50 hover:pl-2"
              style={{
                animationDelay: `${index * 0.05}s`,
                animationFillMode: "backwards",
              }}
            >
              <div className="flex w-40 items-center gap-2 border-r border-border px-3">
                <Icon className="h-3.5 w-3.5 text-muted-foreground transition-all duration-200 group-hover:scale-110 group-hover:text-foreground group-hover:drop-shadow-[0_0_8px_currentColor]" />
                <div className="flex-1 overflow-hidden">
                  <div className="truncate font-mono text-xs font-medium transition-all duration-200 group-hover:translate-x-1">
                    {track.name}
                  </div>
                  <div className="truncate font-mono text-[10px] text-muted-foreground">{track.username}</div>
                </div>
              </div>

              <div className="relative flex-1 px-4">
                <div className="relative h-6 overflow-hidden rounded-sm bg-secondary">
                  <div
                    className={`h-full ${track.color} relative overflow-hidden transition-all duration-500 group-hover:opacity-90`}
                    style={{ width: track.duration }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:animate-[shimmer_1.5s_ease-in-out_infinite] group-hover:opacity-100" />
                  </div>
                  <div className="absolute inset-0 flex items-center px-2">
                    <span className="font-mono text-[10px] font-medium text-white mix-blend-difference transition-transform duration-200 group-hover:translate-x-1">
                      {track.name}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 scale-0 rounded-full bg-primary/20 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
              </div>
            </a>
          )
        })}
      </div>
    </div>
  )
}
