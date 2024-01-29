import styles from './sidebar.module.css';
import Link from 'next/link';

const Sidebar = ({ authors }) => {
  return (
    <div className={styles.sideBar}>
      <div className={styles.sidebarContainer}>
        <div className={styles.portFolios}>
          {authors.map((author) => (
            <Link
              key={author._id}
              href={`?gallery=${author.gallery}&author=${author.author}`}
              className={styles.sidebarLink}
            >
              {author.author}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
