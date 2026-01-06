'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface VideoPreviewProps {
    videoUrl: string;
    posterUrl: string;
    alt: string;
}

export function VideoPreview({ videoUrl, posterUrl, alt }: VideoPreviewProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isInView, setIsInView] = useState(false);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                    } else {
                        setIsInView(false);
                        if (videoRef.current) {
                            videoRef.current.pause();
                        }
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isInView && isVideoLoaded && videoRef.current) {
            videoRef.current.play().catch((error) => {
                console.error('Video autoplay failed:', error);
            });
        }
    }, [isInView, isVideoLoaded]);

    return (
        <div className="relative w-full h-full">
            {/* Poster Image - shown while video is loading or out of view */}
            <Image
                src={posterUrl}
                alt={alt}
                fill
                className={`object-cover transition-opacity duration-700 ${isVideoLoaded ? 'opacity-0' : 'opacity-100'
                    }`}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
            />

            {/* Video Element */}
            <video
                ref={videoRef}
                src={`${videoUrl}#t=0.1`}
                muted
                loop
                playsInline
                onLoadedData={() => setIsVideoLoaded(true)}
                className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-700 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
            />
        </div>
    );
}
