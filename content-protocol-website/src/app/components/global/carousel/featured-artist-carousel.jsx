import carouselImage1 from '@/app/assets/carousel/featured-artists-v2/Dan_Woo.png';
import carouselImage2 from '@/app/assets/carousel/featured-artists-v2/Erik_X.png';
import carouselImage3 from '@/app/assets/carousel/featured-artists-v2/juujuumama.png';
import carouselImage4 from '@/app/assets/carousel/featured-artists-v2/Leslie_Spurlock.png';
import carouselImage5 from '@/app/assets/carousel/featured-artists-v2/Nikalaus.png';
import carouselImage6 from '@/app/assets/carousel/featured-artists-v2/Rich_Armstrong.png';
import carouselImage7 from '@/app/assets/carousel/featured-artists-v2/Roger_Haus.png';
import carouselImage8 from '@/app/assets/carousel/featured-artists-v2/Tylersjourney.png';

import styles from './carousel.module.css';

export default function FeaturedImageCarousel() {
  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carousel}>
        {/* First set of images, if changing or adding more images, make sure also change in the duplicate set of images under these */}
        <div className="relative">
          <div
            style={{
              backgroundImage: `url(${carouselImage1.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            className="rounded-4xl flex-shrink-0 w-[187px] h-[250px] md:w-[312px] md:h-[416px]"
          />

          <p className="text-white text-center text-4xl font-medium absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Anna Dart</p>
        </div>

        <div className="relative">
          <div
            style={{
              backgroundImage: `url(${carouselImage2.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            className="rounded-4xl flex-shrink-0 w-[187px] h-[250px] md:w-[312px] md:h-[416px]"
          />
          <p className="text-white text-center text-4xl font-medium absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Aoife O'Dwyer</p>
        </div>

        <div className="relative">
          <div
            style={{
              backgroundImage: `url(${carouselImage3.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            className="rounded-4xl flex-shrink-0 w-[187px] h-[250px] md:w-[312px] md:h-[416px]"
          />
          <p className="text-white text-center text-4xl font-medium absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Delsol</p>
        </div>

        <div className="relative">
          <div
            style={{
              backgroundImage: `url(${carouselImage4.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            className="rounded-4xl flex-shrink-0 w-[187px] h-[250px] md:w-[312px] md:h-[416px]"
          />
          <p className="text-white text-center text-4xl font-medium absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">ErikX</p>
        </div>

        <div className="relative">
          <div
            style={{
              backgroundImage: `url(${carouselImage5.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            className="rounded-4xl flex-shrink-0 w-[187px] h-[250px] md:w-[312px] md:h-[416px]"
          />
          <p className="text-white text-center text-4xl font-medium absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Leslie A Spurlock</p>
        </div>

        <div className="relative">
          <div
            style={{
              backgroundImage: `url(${carouselImage6.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            className="rounded-4xl flex-shrink-0 w-[187px] h-[250px] md:w-[312px] md:h-[416px]"
          />
          <p className="text-white text-center text-4xl font-medium absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Mike Fogg</p>
        </div>

        <div className="relative">
          <div
            style={{
              backgroundImage: `url(${carouselImage7.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            className="rounded-4xl flex-shrink-0 w-[187px] h-[250px] md:w-[312px] md:h-[416px]"
          />
          <p className="text-white text-center text-4xl font-medium absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Nathan A Bauman</p>
        </div>

        <div className="relative">
          <div
            style={{
              backgroundImage: `url(${carouselImage8.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            className="rounded-4xl flex-shrink-0 w-[187px] h-[250px] md:w-[312px] md:h-[416px]"
          />
          <p className="text-white text-center text-4xl font-medium absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Rich Armstrong</p>
        </div>

        {/* Duplicate set of images, to keep the carousel infinite */}
        <div className="relative">
          <div
            style={{
              backgroundImage: `url(${carouselImage1.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            className="rounded-4xl flex-shrink-0 w-[187px] h-[250px] md:w-[312px] md:h-[416px]"
          />
          <p className="text-white text-center text-4xl font-medium absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Anna Dart</p>
        </div>

        <div className="relative">
          <div
            style={{
              backgroundImage: `url(${carouselImage2.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            className="rounded-4xl flex-shrink-0 w-[187px] h-[250px] md:w-[312px] md:h-[416px]"
          />
          <p className="text-white text-center text-4xl font-medium absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Aoife O'Dwyer</p>
        </div>

        <div className="relative">
          <div
            style={{
              backgroundImage: `url(${carouselImage3.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            className="rounded-4xl flex-shrink-0 w-[187px] h-[250px] md:w-[312px] md:h-[416px]"
          />
          <p className="text-white text-center text-4xl font-medium absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Delsol</p>
        </div>

        <div className="relative">
          <div
            style={{
              backgroundImage: `url(${carouselImage4.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            className="rounded-4xl flex-shrink-0 w-[187px] h-[250px] md:w-[312px] md:h-[416px]"
          />
          <p className="text-white text-center text-4xl font-medium absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">ErikX</p>
        </div>

        <div className="relative">
          <div
            style={{
              backgroundImage: `url(${carouselImage5.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            className="rounded-4xl flex-shrink-0 w-[187px] h-[250px] md:w-[312px] md:h-[416px]"
          />
          <p className="text-white text-center text-4xl font-medium absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Leslie A Spurlock</p>
        </div>

        <div className="relative">
          <div
            style={{
              backgroundImage: `url(${carouselImage6.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            className="rounded-4xl flex-shrink-0 w-[187px] h-[250px] md:w-[312px] md:h-[416px]"
          />
          <p className="text-white text-center text-4xl font-medium absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Mike Fogg</p>
        </div>

        <div className="relative">
          <div
            style={{
              backgroundImage: `url(${carouselImage7.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            className="rounded-4xl flex-shrink-0 w-[187px] h-[250px] md:w-[312px] md:h-[416px]"
          />
          <p className="text-white text-center text-4xl font-medium absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Nathan A Bauman</p>
        </div>

        <div className="relative">
          <div
            style={{
              backgroundImage: `url(${carouselImage8.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            className="rounded-4xl flex-shrink-0 w-[187px] h-[250px] md:w-[312px] md:h-[416px]"
          />
          <p className="text-white text-center text-4xl font-medium absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Rich Armstrong</p>
        </div>
      </div>
    </div>
  );
}
