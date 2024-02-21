import React from 'react';
import localFont from 'next/font/local';
import { Title } from '@components/title';

import styles from './not-founds.module.css';

const souvenirFont = localFont({ src: '../../fonts/souvenir-light.woff2' });

export const NotFoundPage: React.FC = () => (
  <>
    <Title as="h1" />
    <article className={styles.article}>
      <h2 className={souvenirFont.className}>Whoops, nothing to see here.</h2>
      <p>Sorry, but we couldn&apos;t find what you were looking for or the page no longer exists.</p>
    </article>
  </>
);
