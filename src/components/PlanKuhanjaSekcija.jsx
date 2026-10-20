import { useEffect, useState } from "react";

const PlanKuhanjaSekcija = ({ recept }) => {
  const [brojOsoba, setBrojOsoba] = useState(4);

  useEffect(() => {
    document.title = recept
      ? `${recept.name} - za ${brojOsoba} osoba`
      : "Ideje za kuhanje";
  }, [recept, brojOsoba]);

  return (
    <section className="section">
      <h2>Plan kuhanja</h2>
      <div>
        <label htmlFor="odabir-broja-osoba">Broj osoba:</label>
        <select
          id="odabir-broja-osoba"
          value={brojOsoba}
          onChange={(e) => setBrojOsoba(e.target.value)}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
        </select>
      </div>
    </section>
  );
};

export default PlanKuhanjaSekcija;

//zadatak implementiraj komponentu plan kuhanja do kraja
