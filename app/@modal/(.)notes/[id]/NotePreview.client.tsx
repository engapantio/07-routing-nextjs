// components/ModalClient/ModalClient.tsx
'use client';

import css from './NotePreview.client.module.css';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface NotePreviewClientProps {
  children: React.ReactNode;
}

const NotePreviewClient = ({ children }: NotePreviewClientProps) => {
  const router = useRouter();

  const close = () => router.back();

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        {children}
        <button onClick={close} className={css.backBtn}>
          Back
        </button>
      </div>
    </div>
  );
};

export default NotePreviewClient;
