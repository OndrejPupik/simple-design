import artbovich from "./assets/artbovich.jpg";
import beratilgin from "./assets/beratilgin.jpg";
import theGhazi from "./assets/the-ghazi.jpg";

function App() {
  return (
    <section>
      <span className="text-gray-400 uppercase">vize projektu</span>
      <h2 className="font-bold text-lg uppercase">harmonie v každém detailu</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore esse
        iste odit. Adipisci labore, repellendus accusantium obcaecati saepe
        exercitationem illo ut dicta earum delectus, dolore nulla, laboriosam
        neque animi vel!
      </p>
      <img src={beratilgin} alt="Krásná zahrádka" />
      <img src={theGhazi} alt="Moderní vila" />
      <img src={artbovich} alt="Moderní interiér jídelny" />
    </section>
  );
}

export default App;
