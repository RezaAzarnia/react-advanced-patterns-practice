import React, { useEffect, useRef } from "react";

type FunctioResult = {
  ref: React.MutableRefObject<null>;
};
export default function useCloseModal(
  closeFunction: () => void
): FunctioResult {
  const ref = useRef(null);
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      //if the target that is the overlay contains the overlay close else the modal contains the modal body don't close it
      if ((e.target as Element).contains(ref.current)) {
        closeFunction();
      }
    }
    document.addEventListener("click", handleClickOutside, true);

    return () =>
      document.removeEventListener("click", handleClickOutside, true);
  }, []);

  return { ref };
}
