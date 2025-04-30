import carouselImage1 from '@/app/assets/carousel/featured-artists-v2/Dan_Woo.png';
import carouselImage2 from '@/app/assets/carousel/featured-artists-v2/Erik_X.png';
import carouselImage3 from '@/app/assets/carousel/featured-artists-v2/juujuumama.png';
import carouselImage4 from '@/app/assets/carousel/featured-artists-v2/Leslie_Spurlock.png';
import carouselImage5 from '@/app/assets/carousel/featured-artists-v2/Nikalaus.png';
import carouselImage6 from '@/app/assets/carousel/featured-artists-v2/Rich_Armstrong.png';
import carouselImage7 from '@/app/assets/carousel/featured-artists-v2/Roger_Haus.png';
import carouselImage8 from '@/app/assets/carousel/featured-artists-v2/Tylersjourney.png';

import styles from './carousel.module.css';

const CarouselItem = ({ image, name, price }) => (
  <div className="relative">
    <div
      style={{
        backgroundImage: `url(${image.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
      className="rounded-4xl flex-shrink-0 w-[187px] h-[250px] md:w-[312px] md:h-[416px]"
    />
    <div className="absolute bottom-10 md:bottom-20 left-1/2 transform -translate-x-1/2 w-full">
      <p className="text-white text-center text-2xl font-medium">{name}</p>
      <p className="text-white text-center text-xl">${price}</p>
    </div>
  </div>
);

export default function FeaturedImageCarousel() {
  const items = [
    { image: carouselImage1, name: 'Dan Woo', price: '2700' },
    { image: carouselImage2, name: 'Erik X', price: '974' },
    { image: carouselImage3, name: 'juujuumama', price: '1276' },
    { image: carouselImage4, name: 'Leslie A Spurlock', price: '6336' },
    { image: carouselImage5, name: 'Nikalaus', price: '650' },
    { image: carouselImage6, name: 'Rich Armstrong', price: '866' },
    { image: carouselImage7, name: 'Roger Haus', price: '1659' },
    { image: carouselImage8, name: 'Tylersjourney', price: '1996' },
  ];

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carousel}>
        {/* Original set */}
        {items.map((item, index) => (
          <CarouselItem key={`original-${index}`} {...item} />
        ))}
        {/* First duplicate set */}
        {items.map((item, index) => (
          <CarouselItem key={`duplicate1-${index}`} {...item} />
        ))}
        {/* Second duplicate set */}
        {items.map((item, index) => (
          <CarouselItem key={`duplicate2-${index}`} {...item} />
        ))}
      </div>
    </div>
  );
}
