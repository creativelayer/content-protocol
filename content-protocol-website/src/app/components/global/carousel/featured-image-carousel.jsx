import Image from 'next/image';

import carouselImage1 from '@/app/assets/carousel/featured-images/Featured_1.png';
import carouselImage2 from '@/app/assets/carousel/featured-images/Featured_2.png';
import carouselImage3 from '@/app/assets/carousel/featured-images/Featured_3.png';
import carouselImage4 from '@/app/assets/carousel/featured-images/Featured_4.png';
import carouselImage5 from '@/app/assets/carousel/featured-images/Featured_5.png';
import carouselImage6 from '@/app/assets/carousel/featured-images/Featured_6.png';
import carouselImage7 from '@/app/assets/carousel/featured-images/Featured_7.png';
import carouselImage8 from '@/app/assets/carousel/featured-images/Featured_8.png';
import carouselImage9 from '@/app/assets/carousel/featured-images/Featured_9.png';
import carouselImage10 from '@/app/assets/carousel/featured-images/Featured_10.png';

import styles from './carousel.module.css';

export default function FeaturedImageCarousel() {
  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carousel}>
        {/* First set of images */}
        <Image
          src={carouselImage1}
          alt="Carousel image"
          width={312}
          height={416}
          className="rounded-4xl flex-shrink-0 w-[187px] h-[250px] md:w-[312px] md:h-[416px]"
        />

        <Image
          src={carouselImage2}
          alt="Carousel image"
          width={312}
          height={416}
          className="rounded-4xl flex-shrink-0 w-[187px] h-[250px] md:w-[312px] md:h-[416px]"
        />

        <Image
          src={carouselImage3}
          alt="Carousel image"
          width={312}
          height={416}
          className="rounded-4xl flex-shrink-0 w-[187px] h-[250px] md:w-[312px] md:h-[416px]"
        />

        <Image
          src={carouselImage4}
          alt="Carousel image"
          width={312}
          height={416}
          className="rounded-4xl flex-shrink-0 w-[187px] h-[250px] md:w-[312px] md:h-[416px]"
        />

        <Image
          src={carouselImage5}
          alt="Carousel image"
          width={312}
          height={416}
          className="rounded-4xl flex-shrink-0 w-[187px] h-[250px] md:w-[312px] md:h-[416px]"
        />

        <Image
          src={carouselImage6}
          alt="Carousel image"
          width={312}
          height={416}
          className="rounded-4xl flex-shrink-0 w-[187px] h-[250px] md:w-[312px] md:h-[416px]"
        />

        <Image
          src={carouselImage7}
          alt="Carousel image"
          width={312}
          height={416}
          className="rounded-4xl flex-shrink-0 w-[187px] h-[250px] md:w-[312px] md:h-[416px]"
        />

        <Image
          src={carouselImage8}
          alt="Carousel image"
          width={312}
          height={416}
          className="rounded-4xl flex-shrink-0 w-[187px] h-[250px] md:w-[312px] md:h-[416px]"
        />

        <Image
          src={carouselImage9}
          alt="Carousel image"
          width={312}
          height={416}
          className="rounded-4xl flex-shrink-0 w-[187px] h-[250px] md:w-[312px] md:h-[416px]"
        />

        <Image
          src={carouselImage10}
          alt="Carousel image"
          width={312}
          height={416}
          className="rounded-4xl flex-shrink-0 w-[187px] h-[250px] md:w-[312px] md:h-[416px]"
        />

        {/* Duplicate set of images */}
        <Image
          src={carouselImage1}
          alt="Carousel image"
          width={312}
          height={416}
          className="rounded-4xl flex-shrink-0 w-[187px] h-[250px] md:w-[312px] md:h-[416px]"
        />

        <Image
          src={carouselImage2}
          alt="Carousel image"
          width={312}
          height={416}
          className="rounded-4xl flex-shrink-0 w-[187px] h-[250px] md:w-[312px] md:h-[416px]"
        />

        <Image
          src={carouselImage3}
          alt="Carousel image"
          width={312}
          height={416}
          className="rounded-4xl flex-shrink-0 w-[187px] h-[250px] md:w-[312px] md:h-[416px]"
        />

        <Image
          src={carouselImage4}
          alt="Carousel image"
          width={312}
          height={416}
          className="rounded-4xl flex-shrink-0 w-[187px] h-[250px] md:w-[312px] md:h-[416px]"
        />

        <Image
          src={carouselImage5}
          alt="Carousel image"
          width={312}
          height={416}
          className="rounded-4xl flex-shrink-0 w-[187px] h-[250px] md:w-[312px] md:h-[416px]"
        />

        <Image
          src={carouselImage6}
          alt="Carousel image"
          width={312}
          height={416}
          className="rounded-4xl flex-shrink-0 w-[187px] h-[250px] md:w-[312px] md:h-[416px]"
        />

        <Image
          src={carouselImage7}
          alt="Carousel image"
          width={312}
          height={416}
          className="rounded-4xl flex-shrink-0 w-[187px] h-[250px] md:w-[312px] md:h-[416px]"
        />

        <Image
          src={carouselImage8}
          alt="Carousel image"
          width={312}
          height={416}
          className="rounded-4xl flex-shrink-0 w-[187px] h-[250px] md:w-[312px] md:h-[416px]"
        />

        <Image
          src={carouselImage9}
          alt="Carousel image"
          width={312}
          height={416}
          className="rounded-4xl flex-shrink-0 w-[187px] h-[250px] md:w-[312px] md:h-[416px]"
        />

        <Image
          src={carouselImage10}
          alt="Carousel image"
          width={312}
          height={416}
          className="rounded-4xl flex-shrink-0 w-[187px] h-[250px] md:w-[312px] md:h-[416px]"
        />
      </div>
    </div>
  );
}
