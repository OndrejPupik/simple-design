import artbovich from "./assets/artbovich.jpg";
import beratilgin from "./assets/beratilgin.jpg";
import theGhazi from "./assets/the-ghazi.jpg";

function App() {
  return (
    <section className="max-w-4xl mx-auto p-4 pt-6">
      <div>
        <div className="lg:flex lg:flex-row">
          <span className="w-full lg:w-[42%] lg:text-xs font-medium text-gray-500 uppercase">
            vize projektu
          </span>
          <div className="lg:relative w-full lg:w-[58%] pt-2">
            <h2 className="font-medium text-4xl lg:text-5xl leading-tight uppercase">
              harmonie v každém detailu
            </h2>
            <p className="lg:absolute lg:top-full lg:left-0 w-full  text-xl lg:text-base leading-relaxed text-gray-800 pb-8 pt-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              esse iste odit. Adipisci labore, repellendus accusantium obcaecati
              saepe exercitationem illo ut dicta earum delectus, dolore nulla,
              laboriosam neque animi vel!
            </p>
          </div>
        </div>

        <div className="w-full grid grid-cols-2 gap-5 lg:pt-9">
          <div className="flex flex-col gap-6 justify-between pb-4 lg:pr-5">
            <img
              src={beratilgin}
              alt="Krásná zahrádka"
              className="w-[80%] aspect-square rounded-lg"
            />
            <div className="w-[70%] self-end lg:py-5">
              <img
                src={theGhazi}
                alt="Moderní vila"
                className="aspect-square rounded-lg"
              />
            </div>
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
