import artbovich from "./assets/artbovich.jpg";
import beratilgin from "./assets/beratilgin.jpg";
import theGhazi from "./assets/the-ghazi.jpg";

function App() {
  return (
    <section className="max-w-5xl mx-auto p-4 pt-6">
      <div className="grid lg:grid-cols-2 gap-6">
        <span className="font-medium text-gray-500 uppercase">
          vize projektu
        </span>
        <h2 className="font-medium text-4xl uppercase">
          harmonie v každém detailu
        </h2>
        <p className="text-xl leading-relaxed text-gray-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore esse
          iste odit. Adipisci labore, repellendus accusantium obcaecati saepe
          exercitationem illo ut dicta earum delectus, dolore nulla, laboriosam
          neque animi vel!
        </p>

        <div className="w-full grid grid-cols-2 gap-5">
          <div className="flex flex-col gap-6 justify-between pb-4">
            <img
              src={beratilgin}
              alt="Krásná zahrádka"
              className="w-[80%] aspect-square rounded-lg"
            />
            <img
              src={theGhazi}
              alt="Moderní vila"
              className="w-[70%] self-end aspect-square rounded-lg"
            />
          </div>

          <div className="flex items-end">
            <img
              src={artbovich}
              alt="Moderní interiér jídelny"
              className="w-full aspect-[5/6] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
