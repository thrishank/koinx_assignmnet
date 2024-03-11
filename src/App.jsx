import { Team_Card } from "./components/teamcard";
import { Navbar } from "./ui/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Team_Card name={"thrishank"} desgination={"Sr Enginner"} />
      </div>
    </>
  );
}

export default App;
