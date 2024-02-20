import React from 'react';

const usePreviousPropValue = <T extends unknown>(value: T): T => {
  const ref = React.useRef<T>(value);

  React.useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};

export default usePreviousPropValue;
