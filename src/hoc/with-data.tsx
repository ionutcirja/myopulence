import React from 'react';
import useSWR from 'swr';
import { useParams } from 'next/navigation';
import fetch from '@utils/fetcher';

const withData = <P extends object>(WrappedComponent: React.ComponentType<P>, apiEndpoint: string, param: string = '') => {
  const Component: React.FC = () => {
    const params = useParams();
    const { data, error, isLoading } = useSWR<P>(`${apiEndpoint}${param ? `/${params[param]}` : ''}`, fetch);

    if (isLoading) {
      return null;
    }

    if (error) {
      return null;
    }

    return <WrappedComponent {...(data as P)} />;
  };

  return Component;
};

export default withData;
