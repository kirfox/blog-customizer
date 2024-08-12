import React, { useEffect } from "react";

export default function useOverlayClose(ref: React.RefObject<HTMLDivElement>, isOpen: (arg:boolean) => void) {
  useEffect(() => {

    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) isOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

  }, [ref]);
}