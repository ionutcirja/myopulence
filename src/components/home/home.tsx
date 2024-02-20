import React from 'react';
import localFont from 'next/font/local';
import { Title } from '@components/title';

import styles from './home.module.css';

const souvenirFont = localFont({ src: '../../fonts/souvenir-light.woff2' });
const graphikFont = localFont({ src: '../../fonts/graphik-medium.woff2' });

const Home: React.FC = () => {
  return (
    <>
      <Title as="h1" />
      <article className={styles.article}>
        <section className={styles.intro}>
          <div>
            <h2 className={souvenirFont.className}>
              Are you a successful gentleman?
            </h2>
            <p>
              Don&apos;t conceal yourself, let everyone see you through.
            </p>
          </div>
          <div>
            <p className={graphikFont.className}>
              Stay tuned. We are launching soon. We are working hard.
            </p>
          </div>
        </section>
      </article>
    </>
  );
};

export const HomePage = Home;
