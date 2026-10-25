'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useIntlayer } from 'react-intlayer';

interface VideoModalPlayerProps {
  /**
   * Video URL supports:
   * YouTube Shorts: https://youtube.com/shorts/VIDEO_ID
   * Standard Watch: https://www.youtube.com/watch?v=VIDEO_ID
   * Short Links: https://youtu.be/VIDEO_ID
   */
  videoSrc: string;
  thumbnailSrc?: string;
  title?: string;
  /** Whether to play the video inside a modal overlay (default: true) */
  isModal?: boolean;
  /** Whether the video should autoplay on load or modal open (default: true) */
  autoPlay?: boolean;
}

function extractYouTubeId(url: string): string {
  if (!url) return '';
  const regExp = /^.*(?:youtu\.be\/|v\/|u\/\w\/|embed\/|shorts\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[1].length === 11 ? match[1] : url;
}

function isYouTubeShort(url: string): boolean {
  return url.includes('/shorts/');
}

function getYouTubeEmbedUrl(url: string, autoPlay: boolean = true): string {
  const videoId = extractYouTubeId(url);
  // Browsers require `mute=1` for reliable autoplay across devices
  const autoplayParam = autoPlay ? 'autoplay=1&mute=1' : 'autoplay=0&mute=0';
  return `https://www.youtube-nocookie.com/embed/${videoId}?${autoplayParam}&playsinline=1&enablejsapi=1&rel=0&cc_load_policy=0&cc_lang_pref=ignore`;
}

function getYouTubeThumbnail(url: string): string {
  const videoId = extractYouTubeId(url);
  return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : '';
}

export default function VideoModalPlayer({
  videoSrc,
  thumbnailSrc,
  title = 'Video Player',
  isModal = true,
  autoPlay = true,
}: VideoModalPlayerProps) {
  const content = useIntlayer('VideoModalPlayer');
  const [isOpen, setIsOpen] = useState(false);
  const [isPlayingInline, setIsPlayingInline] = useState(autoPlay);
  const containerRef = useRef<HTMLDivElement>(null);

  const isShort = isYouTubeShort(videoSrc);

  const requestFullscreen = () => {
    if (!containerRef.current) return;
    const elem = containerRef.current as any;

    if (elem.requestFullscreen) {
      elem.requestFullscreen().catch(() => {});
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    }
  };

  const handleOpen = () => {
    if (isModal) {
      setIsOpen(true);
    } else {
      setIsPlayingInline(true);
    }
  };

  useEffect(() => {
    if (isOpen && isModal) {
      requestFullscreen();
    }
  }, [isOpen, isModal]);

  const handleClose = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
    setIsOpen(false);
  };

  const displayThumbnail = thumbnailSrc || getYouTubeThumbnail(videoSrc);

  // --------------------------------------------------------------------------
  // INLINE (NON-MODAL) VIEW
  // --------------------------------------------------------------------------
  if (!isModal) {
    const embedUrl = getYouTubeEmbedUrl(videoSrc, autoPlay || isPlayingInline);

    return (
      <div
        className={`relative overflow-hidden rounded-xl shadow-lg ${
          isShort ? 'aspect-[9/16] max-w-lg mx-auto' : 'aspect-video w-full'
        }`}
      >
        {!isPlayingInline ? (
          /* Thumbnail trigger for inline player when autoPlay={false} */
          <div onClick={handleOpen} className='group relative h-full w-full cursor-pointer'>
            <img src={displayThumbnail} alt={title} className='h-full w-full object-cover' />
            <div className='absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/40'>
              <div className='flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-black shadow-xl transition-transform duration-500 group-hover:scale-[1.25]'>
                <span className='ml-1 text-xl'>▶</span>
              </div>
            </div>
          </div>
        ) : (
          /* Embedded iframe running inline */
          <iframe
            src={embedUrl}
            title={title}
            className='h-full w-full border-0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen'
            allowFullScreen
          />
        )}
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // MODAL VIEW
  // --------------------------------------------------------------------------
  const embedUrl = getYouTubeEmbedUrl(videoSrc, autoPlay);

  return (
    <div className='relative'>
      {/* Thumbnail Trigger */}
      <div
        onClick={handleOpen}
        className={`group relative cursor-pointer overflow-hidden rounded-xl shadow-lg ${
          isShort ? 'aspect-[9/16] max-w-lg mx-auto' : 'aspect-video w-full'
        }`}
      >
        <img src={displayThumbnail} alt={title} className='h-full w-full object-cover' />
        <div className='absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/40'>
          <div className='flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-black shadow-xl transition-transform duration-500 group-hover:scale-[1.5]'>
            <span className='ml-1 text-xl'>▶</span>
          </div>
        </div>
      </div>

      {/* Modal Popup */}
      {isOpen && (
        <div
          className='fixed inset-0 z-50 flex h-screen w-screen flex-col items-center justify-center bg-black/95 backdrop-blur-md pb-safe pt-safe'
          onClick={handleClose}
        >
          {/* Controls Header */}
          <div className='absolute top-6 right-6 z-10 flex items-center gap-3'>
            <button
              onClick={(e) => {
                e.stopPropagation();
                requestFullscreen();
              }}
              className='hidden md:flex h-12 px-4 items-center justify-center rounded-full bg-white/10 text-sm font-medium text-white transition-colors hover:bg-white/20 focus:outline-none'
            >
              ⛶ {content.fullscreen}
            </button>

            <button
              onClick={handleClose}
              className='flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-xl text-white transition-colors hover:bg-white/20 focus:outline-none'
              aria-label='Close modal'
            >
              ✕
            </button>
          </div>

          {/* Container (Adapts dynamically to Shorts vs Standard) */}
          <div
            ref={containerRef}
            className={`relative flex h-full w-full items-center justify-center p-4 bg-black ${
              isShort ? 'max-w-md' : 'max-w-5xl'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`w-full overflow-hidden rounded-lg shadow-2xl ${
                isShort ? 'aspect-[9/16] max-h-[85vh]' : 'aspect-video'
              }`}
            >
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
