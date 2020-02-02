import React, { FC, useMemo, useRef, useEffect } from 'react';

interface IProps {
  onObserve: () => void;
}

export const IntersectionObserverComponent: FC<IProps> = ({ onObserve }) => {
  const rootRef = useRef<HTMLDivElement>(null);

  const io = useMemo(() => {
    if (IS_CLIENT) {
      // eslint-disable-next-line no-undef
      return new IntersectionObserver(
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
      );
    }
    return null;
  }, [onObserve]);

  useEffect(() => {
    if (rootRef.current && io) {
      io.observe(rootRef.current);
    }

    return () => {
      if (io) io.disconnect();
    };
  }, [onObserve, io]);

  return <div ref={rootRef} />;
};
