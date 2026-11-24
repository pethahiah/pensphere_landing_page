interface ImageCarouselProps {
    images: string[];
}

const BrowserFrame = ({ src, alt, eager, className }: { src: string; alt: string; eager?: boolean; className?: string }) => (
    <div className={`bg-white rounded-lg overflow-hidden shadow-md ${className || ''}`}>
        <div className="h-7 flex flex-row items-center gap-1.5 px-3 bg-[#EEF4F4] border-b border-[#0898A01A]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E11C1C]/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#F2C94C]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27AE60]/70" />
        </div>
        <img
            src={src}
            alt={alt}
            loading={eager ? 'eager' : 'lazy'}
            className="w-full h-[250px] lg:h-[300px] object-cover object-top"
        />
    </div>
);

const ImageCarousel = ({ images }: ImageCarouselProps) => {
    // Duplicating images array to create a seamless continuous marquee loop for mobile & tablets
    const marqueeImages = [...images, ...images];

    return (
        <div className="w-full py-6 overflow-hidden">
            {/* LAPTOP & DESKTOP VIEW (1024px / lg screens and up): Straight line layout */}
            <div className="hidden lg:flex lg:flex-row lg:justify-center lg:items-center gap-6 px-4 flex-nowrap">
                {images.map((img, index) => (
                    <BrowserFrame
                        key={index}
                        src={img}
                        alt={`PenSphere app preview ${index + 1}`}
                        eager={index === 0}
                        className="w-[280px] hover:scale-105 transition-transform duration-300"
                    />
                ))}
            </div>

            {/* MOBILE & TABLET VIEW (screens smaller than 1024px, including iPad Air): Infinite Marquee */}
            <div className="block lg:hidden w-full overflow-hidden">
                <div className="flex w-max animate-marquee gap-4">
                    {marqueeImages.map((img, index) => (
                        <BrowserFrame
                            key={index}
                            src={img}
                            alt={`PenSphere app preview ${index + 1}`}
                            eager={index === 0}
                            className="w-[240px] flex-shrink-0"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageCarousel;
