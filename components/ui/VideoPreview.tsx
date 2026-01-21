'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface VideoPreviewProps {
    videoUrl: string;
    posterUrl: string;
    alt: string;
    trimEnd?: number; // seconds to cut from the end
    maxDuration?: number; // max seconds to play
    startTime?: number; // start time in seconds
}

export function VideoPreview({ videoUrl, posterUrl, alt, trimEnd, maxDuration, startTime = 0 }: VideoPreviewProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Set initial start time
        if (startTime > 0) {
            video.currentTime = startTime;
        }

        const handleTimeUpdate = () => {
            const currentEffectiveTime = video.currentTime - startTime;

            if (maxDuration && currentEffectiveTime >= maxDuration) {
                video.currentTime = startTime;
                video.play().catch(() => { });
            } else if (trimEnd && video.duration && video.currentTime >= video.duration - trimEnd) {
                video.currentTime = startTime;
                video.play().catch(() => { });
            }
        };

        video.addEventListener('timeupdate', handleTimeUpdate);
        return () => video.removeEventListener('timeupdate', handleTimeUpdate);
    }, [trimEnd, maxDuration, startTime]);

    return (
        <div className="relative w-full h-full bg-neutral-100">
            {/* Poster Image - shown while video is loading or out of view */}
            {posterUrl && (
                <Image
                    src={posterUrl}
                    alt={alt}
                    fill
                    className={`object-cover transition-opacity duration-700 ${isVideoLoaded ? 'opacity-0' : 'opacity-100'
                        }`}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                />
            )}

            {/* Video Element */}
            <video
                ref={videoRef}
                src={videoUrl}
                muted
                loop={!maxDuration && !trimEnd} // Use native loop if no custom logic
                playsInline
                autoPlay
                onLoadedData={() => setIsVideoLoaded(true)}
                className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-700 ${!posterUrl || isVideoLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
            />
        </div>
    );
}
