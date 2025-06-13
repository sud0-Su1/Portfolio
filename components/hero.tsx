'use client'
import React from 'react'
import GooeyNav from './ui/Components/GooeyNav/GooeyNav'
import Aurora from './ui/Backgrounds/Aurora/Aurora';
import { usePathname } from 'next/navigation'

function Hero() {
    const pathname = usePathname();
    const items = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
    ];

    // Find the index of the current route
    const currentIndex = items.findIndex(item => item.href === pathname);
    
    return (
        <div className="relative w-full h-40 flex items-center justify-center">
            <div className="absolute inset-0 h-full w-full bg-black">
                <Aurora
                    colorStops={["#3A0519", "#A53860", "#670D2F"]}
                    blend={0.5}
                    amplitude={1.0}
                    speed={0.5}
                />
            </div>
            <div className="relative z-10 flex items-center justify-center w-full">
                <GooeyNav
                    items={items}
                    particleCount={20}
                    particleDistances={[100, 15]}
                    particleR={120}
                    initialActiveIndex={currentIndex}
                    animationTime={1000}
                    timeVariance={200}
                    colors={[1, 2, 3, 1, 2, 3, 1, 4]}
                />
            </div>
        </div>
    )
}

export default Hero
