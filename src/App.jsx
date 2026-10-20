import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import ReceptiSekcija from "./components/ReceptiSekcija.jsx";
import PlanKuhanjaSekcija from "./components/PlanKuhanjaSekcija.jsx";
import { useState } from "react";

export default function App() {
  const [odabraniRecept, setOdabraniRecept] = useState(null);

  return (
    <>
      <Header naslov="Recepti" />
      <main id="glavni-sadrzaj">
        <h1>Ideje za kuhanje</h1>
        <ReceptiSekcija onOdaberi={setOdabraniRecept} />
        <PlanKuhanjaSekcija recept={odabraniRecept} />
      </main>
      <Footer naslov="Recepti" />
    </>
  );
}
