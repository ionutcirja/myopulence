import React from 'react';
import localFont from 'next/font/local';

import './globals.css';
import styles from './layout.module.css';

const graphikFont = localFont({ src: '../../fonts/graphik-regular.woff2' });

type Props = Readonly<{
  children: React.ReactNode;
}>

export const Layout: React.FC<Props> = ({
  children,
}: Props) => {
  return (
    <html lang="en">
      <body className={graphikFont.className}>
        <main className={styles.main}>
          {children}
        </main>
      </body>
    </html>
  );
};
