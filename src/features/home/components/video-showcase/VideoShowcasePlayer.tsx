"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, Phone, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { videoShowcaseData } from "./video-showcase.data";

export function VideoShowcasePlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const { video } = videoShowcaseData;

  return (
    <div className="relative w-full">
      {/* Video Card Container */}
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl bg-slate-900 group border border-slate-100">
        {/* Background Thumbnail Image */}
        <Image
          src={video.thumbnail}
          alt={video.channelTitle}
          fill
          sizes="(max-width: 1024px) 100vw, 600px"
          className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
        />

        {/* Dark Top Gradient Overlay with Channel Info */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/80 via-black/40 to-transparent p-4 sm:p-5 flex items-center gap-3 z-10">
          <div className="size-9 sm:size-10 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-xs shrink-0 shadow-md border border-white/20">
            CH
          </div>
          <div className="flex flex-col text-left">
            <span className="text-white text-xs sm:text-sm font-semibold tracking-wide drop-shadow-sm line-clamp-1">
              {video.channelTitle}
            </span>
            <span className="text-white/80 text-[10px] sm:text-xs font-normal drop-shadow-sm line-clamp-1">
              {video.channelSubtitle}
            </span>
          </div>
        </div>

        {/* Center Red Play Button */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <Button
            type="button"
            onClick={() => setIsPlaying(true)}
            aria-label="Play video"
            variant="ghost"
            size="icon"
            className="size-16 sm:size-20 rounded-2xl bg-[#FF0000] text-white hover:bg-[#FF0000]/90 hover:text-white shadow-2xl transition-all hover:scale-110 flex items-center justify-center p-0 cursor-pointer"
          >
            <Play className="size-8 sm:size-9 fill-white translate-x-0.5" />
          </Button>
        </div>

        {/* Bottom Bar Overlay */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 sm:p-5 flex items-end justify-between z-10">
          {/* Phone Badge */}
          <a
            href={`tel:${video.phone.replace(/[^0-9]/g, "")}`}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/90 hover:bg-red-600 text-white text-xs font-semibold backdrop-blur-xs transition-colors shadow-sm"
          >
            <Phone className="size-3" />
            <span>{video.phone}</span>
          </a>

          {/* Watch on YouTube Button */}
          <a
            href={video.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-black/60 hover:bg-black/80 text-white text-xs font-medium backdrop-blur-xs transition-colors border border-white/10"
          >
            <span>Watch on YouTube</span>
            <ExternalLink className="size-3" />
          </a>
        </div>
      </div>

      {/* Video Modal Dialog */}
      <Dialog open={isPlaying} onOpenChange={setIsPlaying}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black border-0">
          <DialogHeader className="sr-only">
            <DialogTitle>{video.channelTitle}</DialogTitle>
          </DialogHeader>
          <div className="relative aspect-video w-full">
            {isPlaying && (
              <iframe
                src={video.embedUrl}
                title={video.channelTitle}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
