import Image from 'next/image';

import carouselImage1 from '@/app/assets/carousel/featured-artists/Anna_Dart.png';
import carouselImage2 from '@/app/assets/carousel/featured-artists/Aoife_O’Dwyer.png';
import carouselImage3 from '@/app/assets/carousel/featured-artists/Delsol.png';
import carouselImage4 from '@/app/assets/carousel/featured-artists/ErikX.png';
import carouselImage5 from '@/app/assets/carousel/featured-artists/Leslie_A_Spurlock.png';
import carouselImage6 from '@/app/assets/carousel/featured-artists/Mike_Fogg.png';
import carouselImage7 from '@/app/assets/carousel/featured-artists/Nathan_A_Bauman.png';
import carouselImage8 from '@/app/assets/carousel/featured-artists/Rich_Armstrong.png';
import carouselImage9 from '@/app/assets/carousel/featured-artists/Roger_Haus.png';
import carouselImage10 from '@/app/assets/carousel/featured-artists/uyo66.png';

import styles from './carousel.module.css';

export default function FeaturedImageCarousel() {
  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carousel}>
        {/* First set of images, if changing or adding more images, make sure also change in the duplicate set of images under these */}
        <Image
          src={carouselImage1}
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
          src={carouselImage3}
          alt="Carousel image"
          width={312}
          height={416}
          className="rounded-4xl flex-shrink-0"
        />

        <Image
          src={carouselImage4}
          alt="Carousel image"
          width={312}
          height={416}
          className="rounded-4xl flex-shrink-0"
        />

        <Image
          src={carouselImage5}
          alt="Carousel image"
          width={312}
          height={416}
          className="rounded-4xl flex-shrink-0"
        />

        <Image
          src={carouselImage6}
          alt="Carousel image"
          width={312}
          height={416}
          className="rounded-4xl flex-shrink-0"
        />

        <Image
          src={carouselImage7}
          alt="Carousel image"
          width={312}
          height={416}
          className="rounded-4xl flex-shrink-0"
        />

        <Image
          src={carouselImage8}
          alt="Carousel image"
          width={312}
          height={416}
          className="rounded-4xl flex-shrink-0"
        />

        <Image
          src={carouselImage9}
          alt="Carousel image"
          width={312}
          height={416}
          className="rounded-4xl flex-shrink-0"
        />

        <Image
          src={carouselImage10}
          alt="Carousel image"
          width={312}
          height={416}
          className="rounded-4xl flex-shrink-0"
        />

        {/* Duplicate set of images, to keep the carousel infinite */}
        <Image
          src={carouselImage1}
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
          src={carouselImage3}
          alt="Carousel image"
          width={312}
          height={416}
          className="rounded-4xl flex-shrink-0"
        />

        <Image
          src={carouselImage4}
          alt="Carousel image"
          width={312}
          height={416}
          className="rounded-4xl flex-shrink-0"
        />

        <Image
          src={carouselImage5}
          alt="Carousel image"
          width={312}
          height={416}
          className="rounded-4xl flex-shrink-0"
        />

        <Image
          src={carouselImage6}
          alt="Carousel image"
          width={312}
          height={416}
          className="rounded-4xl flex-shrink-0"
        />

        <Image
          src={carouselImage7}
          alt="Carousel image"
          width={312}
          height={416}
          className="rounded-4xl flex-shrink-0"
        />

        <Image
          src={carouselImage8}
          alt="Carousel image"
          width={312}
          height={416}
          className="rounded-4xl flex-shrink-0"
        />

        <Image
          src={carouselImage9}
          alt="Carousel image"
          width={312}
          height={416}
          className="rounded-4xl flex-shrink-0"
        />

        <Image
          src={carouselImage10}
          alt="Carousel image"
          width={312}
          height={416}
          className="rounded-4xl flex-shrink-0"
        />
      </div>
    </div>
  );
}
