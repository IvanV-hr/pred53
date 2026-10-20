import { useList } from "../hooks/useList";
import { Button } from "./Button";

const KarticaRecepta = ({ recept, onOdaberi }) => {
  const { prikazi, promijeni } = useList();

  return (
    <div className="kartica">
      <h3>{recept.name}</h3>
      <p>
        Priprema i kuhanje: {recept.prepTimeMinutes + recept.cookTimeMinutes}{" "}
        min
      </p>
      <div className="actions">
        <Button
          onClick={promijeni}
          aria-expanded={prikazi}
          aria-controls={`sastojci-${recept.id}`}
        >
          {prikazi ? "Sakrij sastojke" : "Prikazi sastojke"}
        </Button>
        <Button onClick={() => onOdaberi(recept)}>Odaberi recept</Button>
      </div>
      <ol id={`sastojci-${recept.id}`} hidden={!prikazi}>
        {recept.ingredients.map((sastojak) => (
          <li key={sastojak}>{sastojak}</li>
        ))}
      </ol>
    </div>
  );
};

export default KarticaRecepta;
