'use client';
import Image from 'next/image';
import styles from './gallery.module.css';
import GallerySwiper from '../swiper/swiper';
import React, { useState } from 'react';

const Gallery = ({ images }) => {
  const [isSwiper, setIsSwiper] = useState(false);

  return (
    <div className={styles.gallery}>
      <button className={styles.button} onClick={() => setIsSwiper(!isSwiper)}>Switch to {isSwiper ? 'Gallery' : 'Swiper'}</button>
      <div className={styles.galleryContainer} style={isSwiper ? {} : { display: 'grid' }}>
        {isSwiper ? (
          <GallerySwiper images={images} />
        ) : images ? (
          images.map((image, index) => (
            <div className={styles.galleryItem} key={index}>
              <Image
                src={image.path}
                alt={image.name}
                width={image.width}
                height={image.height}
                className={styles.image}
              />
            </div>
          ))
        ) : null}
      </div>
    </div>
  );
};

export default Gallery;
