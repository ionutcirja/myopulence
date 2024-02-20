import React from 'react';
import { Layout } from '@components/layout';

type Props = Readonly<{
  children: React.ReactNode;
}>

const RootLayout: React.FC<Props> = ({
  children,
}: Props) => {
  return (
    <Layout>
      {children}
    </Layout>
  );
};

export default RootLayout;
