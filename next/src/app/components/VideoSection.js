"use client";

import React from 'react';
import { useIntersectionObserver } from '../hooks/useScrollEffects';

const VideoSection = () => {
  const [videoRef, _] = useIntersectionObserver();

  return (
    <section 
      id="video-section"
      ref={videoRef}
      className="w-full py-16 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-2xl"
              src="https://www.youtube.com/embed/ScMzIvxBSi4"
              title="Logical Spirituality Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;