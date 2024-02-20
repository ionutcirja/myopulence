'use client';

import React from 'react';
import clsx from 'clsx';
import localFont from 'next/font/local';
import { useThrottledCallback } from '@react-hookz/web';
import { isElementLoaded } from '@utils/dom';

import styles from './title.module.css';

const souvenirFont = localFont({ src: '../../fonts/souvenir-light.woff2' });

type Props = {
  as: keyof JSX.IntrinsicElements;
};

export const Title: React.FC<Props> = ({ as: Tag }: Props) => {
  const [isTitleVisible, setIsTitleVisible] = React.useState<boolean>(true);
  const [scrollableContent, setScrollableContent] = React.useState<Element | null>(null);

  const onScroll = useThrottledCallback((evt: Event) => {
    if ((evt.target as HTMLElement).scrollTop >= 200) {
      setIsTitleVisible(false);
    } else {
      setIsTitleVisible(true);
    }
  }, [], 100);

  React.useEffect(() => {
    isElementLoaded('#scrollable-content').then((element) => {
      setScrollableContent(element);
    });
  }, []);

  React.useEffect(() => {
    if (scrollableContent) {
      scrollableContent.addEventListener('scroll', onScroll);
    }

    return () => {
      if (scrollableContent) {
        scrollableContent.removeEventListener('scroll', onScroll);
      }
    };
  }, [scrollableContent, onScroll])

  return (
    <Tag className={clsx(souvenirFont.className, styles.title, !isTitleVisible && styles.hidden)}>
      My Opulence
    </Tag>
  );
};
