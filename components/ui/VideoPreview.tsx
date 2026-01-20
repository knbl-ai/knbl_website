'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface VideoPreviewProps {
    videoUrl: string;
    posterUrl: string;
    alt: string;
    trimEnd?: number; // seconds to cut from the end
}

export function VideoPreview({ videoUrl, posterUrl, alt, trimEnd }: VideoPreviewProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    useEffect(() => {
        const video = videoRef.current;
        if (!video || !trimEnd) return;

        const handleTimeUpdate = () => {
            if (video.duration && video.currentTime >= video.duration - trimEnd) {
                video.currentTime = 0;
                video.play().catch(() => { });
            }
        };

        video.addEventListener('timeupdate', handleTimeUpdate);
        return () => video.removeEventListener('timeupdate', handleTimeUpdate);
    }, [trimEnd]);

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
                loop
                playsInline
                autoPlay
                onLoadedData={() => setIsVideoLoaded(true)}
                className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-700 ${!posterUrl || isVideoLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
            />
        </div>
    );
}
