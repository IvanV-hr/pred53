import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Header naslov="Recepti" />
      <main id="glavni-sadrzaj">
        <h1>Ideje za kuhanje</h1>
      </main>
      <Footer naslov="Recepti" />
    </>
  );
}
