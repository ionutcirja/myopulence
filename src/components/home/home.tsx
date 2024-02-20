import React from 'react';
import localFont from 'next/font/local';
import { Title } from '@components/title';
import { Copyright } from '@components/copyright';

import styles from './home.module.css';

const souvenirFont = localFont({ src: '../../fonts/souvenir-light.woff2' });

const Home: React.FC = () => {
  return (
    <>
      <Title as="h1" />
      <article className={styles.article}>
        <section className={styles.intro}>
          <h2 className={souvenirFont.className}>
            Are you a successful gentleman?
          </h2>
          <p>
            Don&apos;t conceal yourself, let everyone see you through.
          </p>
        </section>
      </article>
      <Copyright />
    </>
  );
};

export const HomePage = Home;
