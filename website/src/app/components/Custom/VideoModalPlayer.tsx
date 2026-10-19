'use client';

import React, { useState } from 'react';

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

  // Matches watch?v=, shorts/, embed/, v/, and youtu.be/
  const regExp = /^.*(?:youtu\.be\/|v\/|u\/\w\/|embed\/|shorts\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);

  return match && match[1].length === 11 ? match[1] : url;
}

/** Helper to format YouTube embed URL with autoplay and captions disabled */
function getYouTubeEmbedUrl(url: string): string {
  const videoId = extractYouTubeId(url);
  return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&cc_load_policy=0`;
}

/** Helper to generate standard YouTube thumbnail URL if custom thumbnail is omitted */
function getYouTubeThumbnail(url: string): string {
  const videoId = extractYouTubeId(url);
  return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : '';
}

export default function VideoModalPlayer({ videoSrc, thumbnailSrc, title = 'Video Player' }: VideoModalPlayerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
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

      {/* Full Height Popup Modal */}
      {isOpen && (
        <div
          className='fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 backdrop-blur-md'
          onClick={handleClose}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className='absolute right-6 top-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-xl text-white transition-colors hover:bg-white/20 focus:outline-none'
            aria-label='Close modal'
          >
            ✕
          </button>

          {/* Video Container */}
          <div
            className='relative flex h-full w-full max-w-5xl items-center justify-center p-4 md:p-8'
            onClick={(e) => e.stopPropagation()}
          >
            <div className='aspect-video w-full overflow-hidden rounded-lg shadow-2xl'>
              <iframe
                src={embedUrl}
                title={title}
                className='h-full w-full border-0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
