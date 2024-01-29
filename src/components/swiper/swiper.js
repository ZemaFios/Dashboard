'use client';
import styles from './swiper.module.css';
import { register } from 'swiper/element/bundle';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

const SwiperControlPanel = ({ nextSlide, prevSlide }) => {
  return (
    <div>
      <button className={styles.buttonNext} onClick={nextSlide}>Next</button>
      <button className={styles.buttonPrev} onClick={prevSlide}>Prev</button>
    </div>
  );
};

const GallerySwiper = ({ images }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    console.log('Swiper Registred');
    register();
  }, []);

  const nextSlide = () => {
    swiperRef.current.swiper.slideNext();
  };

  const prevSlide = () => {
    swiperRef.current.swiper.slidePrev();
  };

  return (
    <div className={styles.slider}>
      <SwiperControlPanel nextSlide={nextSlide} prevSlide={prevSlide} />
      <swiper-container slides-per-view="1" navigation="true" pagination="true" keyboard="true" ref={swiperRef} >
        {images ? images.map((image) => {
          return (
            <swiper-slide key={image._id} className={styles.slide} >
                  <Image className={styles.image} src={image.path} alt={image.name} width={image.width} height={image.height}/>
                </swiper-slide>
              );
            }): null}
      </swiper-container>
    </div>
  );
};

export default GallerySwiper;
