import React from 'react';
import type { Metadata } from 'next';
import { HomePage as Home } from '@components/home';

export const metadata: Metadata = {
  metadataBase: new URL('https://myopulence.club/'),
  alternates: {
    canonical: '/',
  },
  title: 'My Opulence',
  description: 'Are you a successful gentleman? Don\'t conceal yourself, let everyone see you through.',
  keywords: 'opulence, success, successful, man, gentleman, club, rich, richness, wealth, wealthy, wealthiness',
  creator: '07 happy days',
  authors: [{ name: 'Ionuț Cîrjă'}, { name: 'Andrei Cîrjă'} ],
};

const HomePage: React.FC = () => (
  <Home />
);

export default HomePage;
