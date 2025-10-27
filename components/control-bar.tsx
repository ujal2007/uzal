"use client"

import type React from "react"

import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Maximize, Music } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"

const playlist = [
  { title: "SHAA", artist: "@ETSU. & Alien", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SHAA%20by%20%20%40ETSU.%20%26%20Alien%20%28Official%20Music%20Video%29-UmPR0Z3lHm3bPbuuapmAbzxBcrt2y9.mp3" },
  { title: "PASSO BEM SOLTO", artist: "ATLXS (SLOWED)", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ATLXS%20-%20PASSO%20BEM%20SOLTO%20%28SLOWED%29-v83CU1a6MHBjTnOCvytYb1w9hN0V13.mp3" },
  { title: "Mata Mae", artist: "Zimba & Alien", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mata%20Mae%20-%20Zimba%20%26%20Alien-HVUWJpeqjU6P4FeiFf13PNlo1bqbLf.mp3" },
]

export function ControlBar() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(0.5)
  const [isMuted, setIsMuted] = useState(false)
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => setCurrentTime(audio.currentTime)
    const updateDuration = () => setDuration(audio.duration)
    const handleEnded = () => {
      setIsPlaying(false)
      playNextTrack()
    }

    audio.addEventListener("timeupdate", updateTime)
    audio.addEventListener("loadedmetadata", updateDuration)
    audio.addEventListener("ended", handleEnded)

    return () => {
      audio.removeEventListener("timeupdate", updateTime)
      audio.removeEventListener("loadedmetadata", updateDuration)
      audio.removeEventListener("ended", handleEnded)
    }
  }, [currentTrackIndex])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const skipBackward = () => {
    if (audioRef.current && audioRef.current.currentTime > 3) {
      audioRef.current.currentTime = 0
    } else {
      playPreviousTrack()
    }
  }

  const skipForward = () => {
    playNextTrack()
  }

  const playNextTrack = () => {
    const nextIndex = (currentTrackIndex + 1) % playlist.length
    setCurrentTrackIndex(nextIndex)
    setCurrentTime(0)
    if (isPlaying && audioRef.current) {
      setTimeout(() => {
        audioRef.current?.play()
      }, 100)
    }
  }

  const playPreviousTrack = () => {
    const prevIndex = currentTrackIndex === 0 ? playlist.length - 1 : currentTrackIndex - 1
    setCurrentTrackIndex(prevIndex)
    setCurrentTime(0)
    if (isPlaying && audioRef.current) {
      setTimeout(() => {
        audioRef.current?.play()
      }, 100)
    }
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current) {
      const rect = e.currentTarget.getBoundingClientRect()
      const x = e.clientX - rect.left
      const percentage = x / rect.width
      audioRef.current.currentTime = percentage * duration
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const formatTime = (time: number) => {
    if (isNaN(time)) return "00:00"
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  }

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0
  const currentTrack = playlist[currentTrackIndex]

  return (
    <div
      className="animate-slide-in-bottom flex h-16 items-center justify-between border-t border-border bg-card px-4"
      style={{ animationDelay: "0.2s", animationFillMode: "backwards" }}
    >
      <audio ref={audioRef} src={currentTrack.src} volume={volume} />

      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 transition-all duration-200 hover:scale-110 hover:-rotate-12"
          onClick={skipBackward}
        >
          <SkipBack className="h-4 w-4" />
        </Button>
        <Button
          size="icon"
          className="h-10 w-10 rounded-full bg-primary transition-all duration-200 hover:scale-110 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/50 active:scale-95"
          onClick={togglePlay}
        >
          {isPlaying ? (
            <Pause className="h-5 w-5 fill-current" />
          ) : (
            <Play className="h-5 w-5 fill-current animate-pulse-slow" />
          )}
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 transition-all duration-200 hover:scale-110 hover:rotate-12"
          onClick={skipForward}
        >
          <SkipForward className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex flex-1 items-center gap-3 px-8">
        <div className="flex items-center gap-2 min-w-[200px]">
          <Music className="h-4 w-4 text-primary animate-pulse-slow" />
          <div className="flex flex-col">
            <span className="text-xs font-medium text-foreground truncate">{currentTrack.title}</span>
            <span className="text-[10px] text-muted-foreground truncate">{currentTrack.artist}</span>
          </div>
        </div>

        <span className="font-mono text-xs text-muted-foreground animate-blink">{formatTime(currentTime)}</span>
        <div
          className="group relative h-1 flex-1 cursor-pointer overflow-hidden rounded-full bg-secondary transition-all duration-200 hover:h-1.5"
          onClick={handleProgressClick}
        >
          <div
            className="h-full bg-primary transition-all duration-300 group-hover:bg-primary/90 group-hover:shadow-[0_0_10px_currentColor]"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2s_ease-in-out_infinite]" />
          </div>
          <div
            className="absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary opacity-0 shadow-[0_0_8px_currentColor] transition-opacity duration-200 group-hover:opacity-100"
            style={{ left: `${progress}%` }}
          />
        </div>
        <span className="font-mono text-xs text-muted-foreground">{formatTime(duration)}</span>
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 transition-all duration-200 hover:scale-110 hover:text-primary"
          onClick={toggleMute}
        >
          {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 transition-all duration-200 hover:scale-110 hover:rotate-45 hover:text-primary"
        >
          <Maximize className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
