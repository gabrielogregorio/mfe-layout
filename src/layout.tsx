import { useEffect, useRef, useState } from 'react';
import { Button } from '@/base/button';
import { ID_PROJECT_TO_TAILWIND_CONFIG } from '../config';

export const Layout = () => {
  const [acceptAudio, setAcceptAudio] = useState<boolean>(false);
  const isFirstLoading = useRef(true);

  useEffect(() => {
    if (acceptAudio) {
      if (isFirstLoading.current) {
        isFirstLoading.current = false;
      }
    }
  }, [acceptAudio]);

  if (!acceptAudio) {
    return (
      <div
        id={ID_PROJECT_TO_TAILWIND_CONFIG}
        data-mfe-version={process.env.PACKAGE_VERSION}
        className="min-h-[100vh] min-w-[100vw] max-h-[100vh] max-w-[100vw] flex items-center justify-center bg-black overflow-hidden absolute top-0 left-0 z-[999]">
        <Button
          onClick={() => {
            setAcceptAudio(true);
          }}>
          Clique para continuar
        </Button>
      </div>
    );
  }

  return <div></div>;
};
