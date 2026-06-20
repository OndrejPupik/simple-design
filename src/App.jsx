import artbovich from "./assets/artbovich.webp";
import beratilgin from "./assets/beratilgin.webp";
import theGhazi from "./assets/the-ghazi.webp";

function App() {
  return (
    <main className="mx-auto max-w-4xl p-4 pt-6">
      <div>
        <div className="lg:flex lg:flex-row">
          <span className="font-medium text-gray-500 uppercase lg:w-[42%] lg:text-xs">
            vize projektu
          </span>
          <div className="pt-2 lg:relative lg:w-[58%]">
            <h2 className="text-4xl leading-tight font-medium uppercase lg:text-5xl">
              harmonie v každém detailu
            </h2>
            <p className="pt-7 pb-8 text-xl leading-relaxed text-gray-800 lg:absolute lg:top-full lg:left-0 lg:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              esse iste odit. Adipisci labore, repellendus accusantium obcaecati
              saepe exercitationem illo ut dicta earum delectus, dolore nulla,
              laboriosam neque animi vel!
            </p>
          </div>
        </div>

        <div className="grid w-full grid-cols-2 gap-5 lg:pt-9">
          <div className="flex flex-col justify-between gap-6 pb-4 lg:pr-5">
            <img
              src={beratilgin}
              alt="Krásná zahrádka"
              className="aspect-square w-[80%] rounded-lg"
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
              className="aspect-5/6 w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
