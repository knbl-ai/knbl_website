'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface VideoPreviewProps {
    videoUrl: string;
    posterUrl: string;
    alt: string;
    trimEnd?: number; // seconds to cut from the end
    maxDuration?: number; // max seconds to play
    startTime?: number; // seconds to start from
    isPlaying?: boolean; // controlled playback
    objectFit?: 'cover' | 'contain';
    objectPosition?: string;
    priority?: boolean; // default false — only pass true for first visible video
}

export function VideoPreview({
    videoUrl,
    posterUrl,
    alt,
    trimEnd,
    maxDuration,
    startTime = 0,
    isPlaying = true,
    objectFit = 'cover',
    objectPosition = 'center',
    priority = false,
}: VideoPreviewProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const [isInView, setIsInView] = useState(priority);

    useEffect(() => {
        if (priority) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '200px 0px' }
        );
        if (containerRef.current) observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, [priority]);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        if (isPlaying) {
            video.play().catch(() => { });
        } else {
            video.pause();
        }
    }, [isPlaying, isInView]);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        if (startTime > 0 && !isVideoLoaded) {
            video.currentTime = startTime;
        }

        const handleTimeUpdate = () => {
            if (maxDuration && video.currentTime >= startTime + maxDuration) {
                video.currentTime = startTime;
                if (isPlaying) video.play().catch(() => { });
            } else if (trimEnd && video.duration && video.currentTime >= video.duration - trimEnd) {
                video.currentTime = startTime;
                if (isPlaying) video.play().catch(() => { });
            }
        };

        video.addEventListener('timeupdate', handleTimeUpdate);
        return () => video.removeEventListener('timeupdate', handleTimeUpdate);
    }, [trimEnd, maxDuration, startTime, isPlaying, isVideoLoaded]);

    return (
        <div ref={containerRef} className="relative w-full h-full bg-neutral-900">
            {/* Poster Image - shown while video is loading or out of view */}
            {posterUrl && (
                <Image
                    src={posterUrl}
                    alt={alt}
                    fill
                    className={`object-${objectFit} transition-opacity duration-700 ${isVideoLoaded ? 'opacity-0' : 'opacity-100'
                        }`}
                    style={{ objectPosition }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={priority}
                />
            )}

            {/* Video Element */}
            <video
                ref={videoRef}
                src={isInView ? videoUrl : undefined}
                muted
                loop
                playsInline
                onLoadedData={() => setIsVideoLoaded(true)}
                style={{ objectPosition }}
                className={`w-full h-full object-${objectFit} absolute inset-0 transition-opacity duration-700 ${!posterUrl || isVideoLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
            />
        </div>
    );
}
