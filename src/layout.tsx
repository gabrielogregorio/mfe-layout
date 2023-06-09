import { useEffect, useRef, useState } from "react";

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
      <div className="min-h-[100vh] min-w-[100vw] max-h-[100vh] max-w-[100vw] flex items-center justify-center bg-black overflow-hidden absolute top-0 left-0 z-[999]">
        <button
          type="button"
          className="text-white text-[32px] uppercase w-full h-screen"
          onClick={() => {
            setAcceptAudio(true);
          }}
        >
          Clique para continuar
        </button>
      </div>
    );
  }

  return <div></div>;
};
