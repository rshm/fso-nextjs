import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { Transition } from "@headlessui/react";
import Image from "next/image";

const images = [
    "/images/hero/hero-carousel-1.jpg",
    "/images/hero/hero-carousel-2.jpg",
    "/images/hero/hero-carousel-3.jpg",
    "/images/hero/hero-carousel-4.jpg",
    "/images/hero/hero-carousel-5.jpg",
];

export function Hero() {
    const INTERVAL_LENGTH = 2000;
    const AUTOPLAY = false;
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        if (!AUTOPLAY) return;
        const interval = setInterval(nextSlide, INTERVAL_LENGTH);
        return () => clearInterval(interval);
    }, [AUTOPLAY]);

    return (
        <section className="relative h-96 w-full overflow-hidden text-center mt-16">
            {images.map((item, index) => (
                <Transition
                    key={index}
                    show={currentIndex === index}
                    enter="transition-opacity duration-1000"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-1000"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="absolute w-full h-full brightness-50">
                        <Image src={item} alt={`Slide ${index}`} fill objectFit="cover" />
                    </div>
                </Transition>
            ))}
            {/* Controls */}
            <div className="absolute w-full h-full flex justify-between items-center">
                <button className="m-4 h-8 w-8 rounded-full bg-slate-200" onClick={prevSlide}>
                    {"<"}
                </button>
                <button className="m-4 h-8 w-8 rounded-full bg-slate-200" onClick={nextSlide}>
                    {">"}
                </button>
            </div>
            {/* Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center gap-4">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={classNames("h-2 w-2 rounded-full duration-1000", {
                            "bg-slate-300": index !== currentIndex,
                            "bg-slate-800": index === currentIndex
                        })}
                    />
                ))}
            </div>
        </section>
    );
}
