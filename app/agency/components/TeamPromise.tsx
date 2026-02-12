'use client';

import { TextReveal } from '@/components/ui/text-reveal';

export default function TeamPromise() {
    return (
        <section className="py-24 px-6 md:px-[120px] bg-white">
            <div className="max-w-5xl mx-auto">
                <TextReveal
                    startEarly
                    className="py-0 text-[18px] md:text-[26px] leading-[1.4] md:leading-[1.5] font-medium tracking-tight text-center justify-center"
                >
                    {`**We are a team of strategists, creators, and tech-enthusiasts**\nwho believe in real talk, late-night breakthroughs, and the power of a shared vision.\n**Our promise is simple:** We bring the high-end technology and the sharp strategic direction, but we keep our feet on the ground. We’re here to simplify your complexity, share in your challenges, and celebrate your wins as if they were our own.\n**No ego. No fluff. Just good people making great things happen.**`}
                </TextReveal>
            </div>
        </section>
    );
}
