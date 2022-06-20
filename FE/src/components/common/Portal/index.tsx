import { useEffect } from "react";

import { createPortal } from "react-dom";

const Portal = ({ children }: React.PropsWithChildren) => {
  const portal = document.getElementById("portal");
  const el = document.createElement("div");

  useEffect((): (() => void) => {
    portal?.appendChild(el);
    return () => {
      portal?.removeChild(el);
    };
  }, [el, portal]);

  return createPortal(children, el);
};

export default Portal;
