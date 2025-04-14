import Image from 'next/image';
import carouselImage2 from '@/app/assets/carousel/carousel-image-2.png';

export default function Carousel() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex gap-x-5 min-w-max">
        <Image
          src={carouselImage2}
          alt="Carousel image"
          width={312}
          height={416}
          className="rounded-4xl flex-shrink-0"
        />

        <Image
          src={carouselImage2}
          alt="Carousel image"
          width={312}
          height={416}
          className="rounded-4xl flex-shrink-0"
        />

        <Image
          src={carouselImage2}
          alt="Carousel image"
          width={312}
          height={416}
          className="rounded-4xl flex-shrink-0"
        />

        <Image
          src={carouselImage2}
          alt="Carousel image"
          width={312}
          height={416}
          className="rounded-4xl flex-shrink-0"
        />

        <Image
          src={carouselImage2}
          alt="Carousel image"
          width={312}
          height={416}
          className="rounded-4xl flex-shrink-0"
        />

        <Image
          src={carouselImage2}
          alt="Carousel image"
          width={312}
          height={416}
          className="rounded-4xl flex-shrink-0"
        />

        <Image
          src={carouselImage2}
          alt="Carousel image"
          width={312}
          height={416}
          className="rounded-4xl flex-shrink-0"
        />

        <Image
          src={carouselImage2}
          alt="Carousel image"
          width={312}
          height={416}
          className="rounded-4xl flex-shrink-0"
        />

        <Image
          src={carouselImage2}
          alt="Carousel image"
          width={312}
          height={416}
          className="rounded-4xl flex-shrink-0"
        />
      </div>
    </div>
  );
}
