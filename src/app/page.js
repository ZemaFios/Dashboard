import styles from './page.module.css';
import Header from '@/components/header/header';
import Sidebar from '@/components/sidebar/sidebar';
import Gallery from '@/components/gallery/gallery';
import { fetchGalleries, fetchAuthorsByGalleryName, fetchImagesForAuthor } from '@/lib/data.service';

export default async function Page({ searchParams }) {
  const galleries = await fetchGalleries();
  const authorsFromGallery = await fetchAuthorsByGalleryName(searchParams.gallery);
  const imagesForAuthor = await fetchImagesForAuthor(searchParams.author);

  console.log('Galleries', galleries);
  console.log('AuthorsFromGallery', authorsFromGallery);
  console.log('imagesForAuthor', imagesForAuthor);

  return (
    <main className={styles.page}>
      <Header galleries={galleries} />
      <div className={styles.contentWrapper}>
        <Sidebar authors={authorsFromGallery} />
        <Gallery images={imagesForAuthor} />
      </div>
    </main>
  );
}
