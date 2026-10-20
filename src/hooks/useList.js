import { useEffect, useState } from "react";

export function useList() {
  const [prikazi, setPrikazi] = useState(false);

  useEffect(() => {
    function zatvori(event) {
      if (event.key === "Escape") setPrikazi(false);
    }

    window.addEventListener("keydown", zatvori);
    return () => window.removeEventListener("keydown", zatvori);
  }, []);

  function promijeni() {
    setPrikazi((prethonaVrijednost) => !prethonaVrijednost);
  }

  return { prikazi, promijeni };
}
