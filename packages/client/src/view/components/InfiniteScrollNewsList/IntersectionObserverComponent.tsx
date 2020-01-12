import React, { FC, useMemo, useRef, useEffect } from 'react';

interface IProps {
  onObserve: () => void;
}

export const IntersectionObserverComponent: FC<IProps> = ({ onObserve }) => {
  const rootRef = useRef<HTMLDivElement>(null);

  const io = useMemo(
    () =>
      new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            onObserve();
          });
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 1,
        }
      ),
    [onObserve]
  );

  useEffect(() => {
    if (rootRef.current) {
      io.observe(rootRef.current);
    }

    return () => io.disconnect();
  }, [onObserve, io]);

  return <div ref={rootRef} />;
};
