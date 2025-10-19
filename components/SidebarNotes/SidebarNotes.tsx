import Link from 'next/link';
import css from './SidebarNotes.module.css';

const tagsList = ['All', 'Work', 'Personal', 'Meeting', 'Shopping', 'Todo'];

const SidebarNotes = async () => {
  return (
    <ul className={css.menuList}>
      {tagsList.map((tag, i) => (
        <li key={i} className={css.menuItem}>
          <Link className={css.menuLink} href={`/notes/filter/${tag}`}>
            {tag}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SidebarNotes;
