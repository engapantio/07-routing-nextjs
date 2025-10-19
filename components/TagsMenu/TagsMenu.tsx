'use client';

import Link from 'next/link';
import { useState } from 'react';
import css from './TagsMenu.module.css';
const tagsList = ['All', 'Work', 'Personal', 'Meeting', 'Shopping', 'Todo'];

const TagsMenu = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div className={css.menuContainer}>
      <button
        className={css.menuButton}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        Notes ▾
      </button>
      {!isCollapsed && (
        <ul className={css.menuList}>
          {tagsList.map((tag, i) => (
            <li
              key={i}
              className={css.menuItem}
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              <Link href={`/notes/filter/${tag}`} className={css.menuLink}>
                {tag}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TagsMenu;
