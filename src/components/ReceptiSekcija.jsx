import { useEffect, useState } from "react";
import KarticaRecepta from "./KarticaRecepta";

const ReceptiSekcija = ({ onOdaberi }) => {
  const [recepti, setRecepti] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes?limit=8")
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((podatci) => setRecepti(podatci.recipes))
      .catch(() => console.log("greska prilikom dohvacanja recepata."));
  }, []);

  return (
    <section className="section">
      <h2>Recepti za svaki dan</h2>
      <p>Otvorite sastojke ili odaberite recept i prilagodite broj osoba.</p>
      <div className="kartice">
        {recepti.map((recept) => (
          <KarticaRecepta
            key={recept.id}
            recept={recept}
            onOdaberi={onOdaberi}
          />
        ))}
      </div>
    </section>
  );
};

export default ReceptiSekcija;
