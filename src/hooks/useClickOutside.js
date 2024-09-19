import { useEffect, useRef } from "react";

export function useClickOutside(handler, listenCapturing = true) {
  const ref = useRef();

  // click outside the modal to close it
  useEffect(
    function () {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          console.log(ref.current);
          handler();
        }
      }
      // listenCapturing is used to listen to the event in the capturing phase
      document.addEventListener("click", handleClickOutside, listenCapturing);
      // return will be called when the component is unmounted
      return () =>
        document.removeEventListener(
          "click",
          handleClickOutside,
          listenCapturing
        );
    },
    [handler, listenCapturing]
  );
  return ref;
}
