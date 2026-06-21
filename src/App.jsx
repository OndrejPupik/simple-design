import artbovich from "./assets/artbovich.webp";
import beratilgin from "./assets/beratilgin.webp";
import theGhazi from "./assets/the-ghazi.webp";

function App() {
  return (
    <main className="mx-auto max-w-5xl p-4 lg:pt-2">
      <div className="lg:flex lg:flex-row">
        <span className="font-medium text-gray-500 uppercase lg:w-21/50 lg:text-xs">
          vize projektu
        </span>
        <div className="pt-2 lg:relative lg:w-29/50">
          <h2 className="text-4xl leading-tight font-medium uppercase lg:text-5xl">
            harmonie v každém detailu
          </h2>
          <p className="pt-7 pb-8 text-xl leading-relaxed text-gray-800 lg:absolute lg:top-full lg:left-0 lg:text-base">
            Habitasse enim tellus egestas duis cursus. Non non nam sed id ut
            varius quis sollicitudin bibendum. Tincidunt pulvinar accumsan
            aliquet dui placerat nunc lorem. Consectetur nec ipsum porta quis a.
            In nunc sagittis dolor cursus id posuere fusce tempus aliquam.
          </p>
        </div>
      </div>

      <div className="grid w-full grid-cols-2 gap-5 lg:gap-12 lg:pt-9">
        <div className="flex flex-col justify-between gap-6 pb-4 lg:gap-11 lg:pb-12">
          <img
            src={beratilgin}
            alt="Krásná zahrádka"
            className="aspect-square w-4/5 rounded-lg"
            width={900}
            height={900}
          />
          <img
            src={theGhazi}
            alt="Moderní vila"
            className="aspect-square w-7/10 self-end rounded-lg"
            width={900}
            height={900}
          />
        </div>

        <div className="flex items-end">
          <img
            src={artbovich}
            alt="Moderní interiér jídelny"
            className="aspect-5/6 w-full rounded-lg object-cover"
            width={1000}
            height={670}
          />
        </div>
      </div>
    </main>
  );
}

export default App;
