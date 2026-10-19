'use client';

import React, { useState, useRef } from 'react';

interface VideoModalPlayerProps {
  /**
   * Video URL supports:
   * - YouTube Shorts: https://youtube.com/shorts/VIDEO_ID
   * - Standard Watch: https://www.youtube.com/watch?v=VIDEO_ID
   * - Short Links: https://youtu.be/VIDEO_ID
   */
  videoSrc: string;
  /** Optional custom thumbnail. If omitted, uses standard YouTube thumbnail */
  thumbnailSrc?: string;
  title?: string;
}

/** Helper to extract YouTube Video ID across all URL formats */
function extractYouTubeId(url: string): string {
  if (!url) return '';
  const regExp = /^.*(?:youtu\.be\/|v\/|u\/\w\/|embed\/|shorts\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);

  return match && match[1].length === 11 ? match[1] : url;
}

/**
 * Helper to format YouTube embed URL for mobile autoplay & fullscreen support.
 * - mute=1: Required for mobile browsers to allow autoplay.
 * - enablejsapi=1: Enables browser controls & API integration.
 * - playsinline=0: Allows iOS devices to transition into native full screen.
 */
function getYouTubeEmbedUrl(url: string): string {
  const videoId = extractYouTubeId(url);
  return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&playsinline=0&enablejsapi=1&rel=0&cc_load_policy=0&cc_lang_pref=ignore`;
}

/** Helper to generate standard YouTube thumbnail URL */
function getYouTubeThumbnail(url: string): string {
  const videoId = extractYouTubeId(url);
  return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : '';
}

export default function VideoModalPlayer({ videoSrc, thumbnailSrc, title = 'Video Player' }: VideoModalPlayerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  /** Request Fullscreen mode */
  const enterFullscreen = () => {
    if (containerRef.current) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      } else if ((containerRef.current as any).webkitRequestFullscreen) {
        /* Safari / iOS support */
        (containerRef.current as any).webkitRequestFullscreen();
      }
    }
  };

  const handleOpen = () => {
    setIsOpen(true);
    // Attempt fullscreen directly within user click call stack
    setTimeout(() => {
      enterFullscreen();
    }, 100);
  };

  const handleClose = () => setIsOpen(false);

  const embedUrl = getYouTubeEmbedUrl(videoSrc);
  const displayThumbnail = thumbnailSrc || getYouTubeThumbnail(videoSrc);

  return (
    <div className='relative'>
      {/* Thumbnail Trigger */}
      <div
        onClick={handleOpen}
        className='group relative cursor-pointer overflow-hidden rounded-xl shadow-lg transition-transform hover:scale-[1.02]'
      >
        <img src={displayThumbnail} alt={title} className='aspect-video h-auto w-full object-cover' />
        {/* Play Button Overlay */}
        <div className='absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/40'>
          <div className='flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-black shadow-xl transition-transform group-hover:scale-110'>
            <span className='ml-1 text-xl'>▶</span>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {isOpen && (
        <div
          className='fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 backdrop-blur-md'
          onClick={handleClose}
        >
          {/* Controls Header */}
          <div className='absolute top-6 right-6 z-10 flex items-center gap-3'>
            {/* Manual Fullscreen Trigger */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                enterFullscreen();
              }}
              className='flex h-12 px-4 items-center justify-center rounded-full bg-white/10 text-sm font-medium text-white transition-colors hover:bg-white/20 focus:outline-none'
              aria-label='Enter Fullscreen'
            >
              ⛶ Fullscreen
            </button>

            {/* Close Button */}
            <button
              onClick={handleClose}
              className='flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-xl text-white transition-colors hover:bg-white/20 focus:outline-none'
              aria-label='Close modal'
            >
              ✕
            </button>
          </div>

          {/* Video Container (Target for Fullscreen) */}
          <div
            ref={containerRef}
            className='relative flex h-full w-full max-w-5xl items-center justify-center p-4 md:p-8 bg-black'
            onClick={(e) => e.stopPropagation()}
          >
            <div className='aspect-video w-full overflow-hidden rounded-lg shadow-2xl'>
              <iframe
                src={embedUrl}
                title={title}
                className='h-full w-full border-0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen'
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
