import React from 'react';
import { ChevronDownIcon } from '@components/icons';

import styles from './scroll-btn.module.css';

type Props = Readonly<{
  inViewSectionIndex: number;
  sectionsNum: number;
}>;

export const ScrollBtn: React.FC<Props> = ({ inViewSectionIndex, sectionsNum }: Props) => {
  const [sections, setSections] = React.useState<HTMLElement[]>([]);

  React.useEffect(() => {
    setSections(Array.from(document.querySelectorAll('section')));
  }, []);

  const onClick = () => {
    const nextSection = sections[inViewSectionIndex < sectionsNum - 1 ? inViewSectionIndex + 1 : sectionsNum - 1];
    nextSection.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={styles.scrollBtn}
      type="button"
      disabled={inViewSectionIndex === sectionsNum - 1}
      title="Scroll to next section"
      onClick={onClick}
    >
      <ChevronDownIcon />
    </button>
  );
};
