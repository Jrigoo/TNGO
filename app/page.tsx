import Image from "next/image";
import Logo from "../public/Logo.svg";
import Tngo from "../public/Tngo.png";
import Linea from "../public/Linea.svg";
import LineaText from "../public/Tngo v1.0.svg";
import CerroPatacon from "../public/Cerro Patacon.webp";
import TrashCircle from "../public/Tapas.jpeg";
import Lata from "../public/Lata.svg";
import Vidrio from "../public/Vidrio.svg";
import Papel from "../public/Papel.svg";
import Plastico from "../public/Plastico.svg";
import Botellas from "../public/Botellas.webp";
import Planta from "../public/Planta.webp";
import cliente1 from "../public/Juan Riquelme.jpg";
import Youtube from "../public/Youtube.svg";
import Instagram from "../public/Instagram.svg";
import Facebook from "../public/Facebook.svg";

const date = new Date();
const year = date.getFullYear();

const icons = [
  {
    svg: Lata,
    name: "Lata",
  },

  {
    svg: Vidrio,
    name: "Vidrio",
  },
  {
    svg: Papel,
    name: "Papel",
  },
  {
    svg: Plastico,
    name: "Plástico",
  },
];

const testimonios = [
  {
    name: "Juan Riquelme",
    img: cliente1,
    testimony:
      "Nunca me había animado a reciclar, hasta que obtuve el Tngo. Ahora todo es más fácil",
  },
  {
    name: "Juan Riquelme",
    img: cliente1,
    testimony:
      "Nunca me había animado a reciclar, hasta que obtuve el Tngo. Ahora todo es más fácil",
  },
  {
    name: "Juan Riquelme",
    img: cliente1,
    testimony:
      "Nunca me había animado a reciclar, hasta que obtuve el Tngo. Ahora todo es más fácil",
  },
];

export default function Home() {
  return (
    <main className="font-light text-dark bg-light">
      {/* Header */}
      <Image
        className="w-[90px] mt-10 mx-5 sm:mt-11 sm:mx-20 md:mx-24 xl:mx-32 lg:w-[120px]"
        priority
        src={Logo}
        alt="Tngo Logo icon"
      />

      {/* Hero */}
      <section className="my-10 px-5 sm:px-20 md:px-24 xl:px-32 sm:flex items-center">
        {/* Title */}
        <div className="mb-3">
          <h1 className="">
            Reciclar jamás <br />
            había sido <br />
            tan fácil
          </h1>
          <h5 className="mb-3 lg:mb-5 pr-16">
            El Tngo es un revolucionario basurero clasificador de basura que
            cambiará tu forma de gestionar los residuos
          </h5>
          <button className="bg-green-dark px-5 py-2 text-light rounded hover:bg-transparent border border-green-dark hover:text-dark delay-100 transition-all lg:px-7 lg:py-3">
            ¡Comprar Ya!
          </button>
        </div>

        {/* Tngo Device */}
        <div className="flex flex-col items-center relative">
          <Image
            className="w-[300px] sm:w-[400px] md:w-[450px] lg:w-[600px] xl:w-[700px]"
            priority
            src={Tngo}
            alt="Tngo Logo icon"
          />
          <Image
            className="w-[25px] relative -top-7 -right-6 lg:w-[40px]"
            priority
            src={Linea}
            alt="Line"
          />
          <Image
            className="w-[50px] relative -top-4 -right-6 lg:w-[70px]"
            priority
            src={LineaText}
            alt="Tngo Text"
          />
        </div>
      </section>

      {/* Problem */}
      <section className="my-20 px-5 sm:px-20 md:my-36 xl:px-32 sm:grid grid-cols-2 place-items-stretch">
        <div className="order-2">
          {/* Problema */}
          <h1 className="my-2">La basura es un problema</h1>
          <p className="text-justify text-green-dark">
            Panamá tiene una producción promedio de{" "}
            <b>1.2 kilogramos de basura por persona</b> al día, de la cual más
            del <b>40% de toda la basura</b> se dispone en <b>Cerro Patacón</b>,
            un vertedero no controlado
          </p>
        </div>

        <div className="w-[270px] md:w-[360px] lg:w-[420px] bg-green-dark relative rounded my-5 order-1">
          <Image
            className="w-[270px] md:w-[360px] lg:w-[420px] rounded relative top-3 left-3 md:top-4 md:left-4 lg:top-6 lg:left-6"
            priority
            src={CerroPatacon}
            alt="Tngo Logo icon"
          />
        </div>
      </section>

      {/* Explicación del product */}
      <section className="my-24 px-5 sm:px-20 md:my-32 md:px-24 xl:px-32">
        <header className="pb-5">
          <h1 className="text-center mb-2">Recicla sin esfuerzo</h1>
          <h5 className="text-center">
            Con el Tngo puedes reciclar los siguientes tipos de desechos
          </h5>
        </header>

        <div className="grid grid-cols-2 gap-y-5 sm:gap-y-8 lg:gap-y-12">
          {icons.map((icon, idx) => (
            <div className="flex flex-col items-center" key={idx}>
              <Image
                className="h-[55px] mb-3 sm:h-[75px] lg:h-[90px]"
                priority
                src={icon.svg}
                alt="Lata icon"
              />
              <h5 className="text-center">{icon.name}</h5>
            </div>
          ))}
        </div>
      </section>

      {/* Slogan Section */}
      <section className="px-5 sm:px-20 xl:px-32 grid place-items-center lg:grid-cols-2 my-20">
        <div className="lg:order-2">
          <h1 className="text-center mb-3">No más residuos</h1>
          <p className="mb-3 text-justify text-green-dark">
            Con el <b>Tngo</b> cada lata, papel o botella que recicles no solo
            representa una acción positiva para el medio ambiente, sino también
            una inversión en un Panamá más limpio y saludable para las
            generaciones futuras. Tu compromiso con el reciclaje es una forma
            tangible de ser parte del cambio que nuestro país necesita, y juntos
            podemos lograr un Panamá libre de contaminación.
          </p>
        </div>

        <Image
          className="w-[250px] h-[250px] md:w-[300px] md:h-[300px]  lg:w-[350px] lg:h-[350px] my-2 object-cover rounded-full object-left-bottom"
          priority
          src={TrashCircle}
          alt="Tngo Logo icon"
        />
      </section>

      {/* Why us */}
      <section className="my-20 w-full mb-16">
        <header className="pb-5">
          <h1 className="text-center mb-2">Nosotros</h1>
          <h5 className="text-center">Conoce por qué hacemos lo que hacemos</h5>
        </header>

        <div className="w-full h-fit relative">
          {/* Imagen */}
          <Image
            className="w-full h-full absolute top-0 -z-10 object-cover"
            src={Botellas}
            alt="Botellas recicladas"
          />
          <div className="w-full bg-green-filter z-10 px-5 py-3 sm:px-20 md:px-24 sm:py-12 lg:px-20 lg:py-12 xl:px-32 xl:py-20">
            <h3 className="text-light">Misión</h3>
            <p className="text-light">
              En T&GO, trabajamos para generar dispositivos autónomos que
              reduzcan la contaminación y fomenten la reutilización, el
              reciclaje y la reducción de desechos
            </p>
          </div>
          <div className="w-full bg-dark-filter z-10 px-5 py-3 sm:px-20 md:px-24 sm:py-12 lg:px-20 lg:py-12 xl:px-32 xl:py-20">
            <h3 className="text-light">Visión</h3>
            <p className="text-light">
              En T&GO, trabajamos para generar dispositivos autónomos que
              reduzcan la contaminación y fomenten la reutilización, el
              reciclaje y la reducción de desechos
            </p>
          </div>
          <div className="w-full bg-green-filter z-10 px-5 py-3 sm:px-20 md:px-24 sm:py-12 lg:px-20 lg:py-12 xl:px-32 xl:py-20">
            <h3 className="text-light">Valores</h3>
            <p className="text-light">
              En T&GO, trabajamos para generar dispositivos autónomos que
              reduzcan la contaminación y fomenten la reutilización, el
              reciclaje y la reducción de desechos
            </p>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="my-20 px-5 sm:px-20 lg:px-0 xl:px-20">
        <header className="pb-5">
          <h1 className="text-center mb-2">Testimonios</h1>
          <h5 className="text-center">
            Personas que se han atrevido, solo faltas tú
          </h5>
        </header>

        <div className="grid gap-y-8 place-items-center sm:grid-cols-2 lg:grid-cols-3">
          {testimonios.map((client, idx) => (
            <div
              key={idx}
              className={
                idx == 2
                  ? "max-w-[280px] lg:max-w-[350px] bg-dark rounded py-12 px-7 lg:py-20 md:px-12  flex flex-col items-center justify-center sm:col-span-2 lg:col-span-1"
                  : "max-w-[280px] lg:max-w-[350px] bg-dark rounded py-12 px-7 lg:py-20 md:px-12  flex flex-col items-center justify-center"
              }
            >
              <Image
                className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] lg:w-[160px] lg:h-[160px] object-cover rounded-full mb-5"
                priority
                src={client.img}
                alt="cliente contento"
              />
              <h4 className="text-light">{client.name}</h4>
              <p className="text-light text-center font-light">
                {client.testimony}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <section className="mt-20 w-full bg-green-dark sm:flex">
        <Image
          className="w-[300px] lg:w-1/2 hidden object-cover sm:block"
          priority
          src={Planta}
          alt="Tngo Logo icon"
        />

        <div className="px-7 pt-10 lg:pt-20 lg:px-20">
          <header>
            <h2 className="font-extrabold mb-3 text-green-light">
              Suscribete y Enterate de nuestras ofertas y servicios
            </h2>
          </header>

          <form action="" className="">
            <input id="name" type="name" placeholder="¿Cual es tu nombre?" />
            <input
              id="email"
              type="text"
              placeholder="¿Cual es tu correo electrónico?"
            />
            <button className=" bg-dark  px-2 py-2 md:py-5 w-full">
              Enviar
            </button>
          </form>

          {/* Social media and location */}
          <footer className="py-10 flex items-center justify-between">
            <p className="text-light">
              Ciudad del Saber <br />
              6378-4804 <br />
              &copy; Tngo {year}
            </p>
            <div className="flex gap-2 lg:gap-6">
              <Image
                className="h-[20px] lg:h-[35px]"
                src={Instagram}
                alt="Instagram Logo"
              />
              <Image
                className="h-[20px] lg:h-[35px]"
                src={Youtube}
                alt="Youtube Logo"
              />
              <Image
                className="h-[20px] lg:h-[35px]"
                src={Facebook}
                alt="Facebook Logo"
              />
            </div>
          </footer>
        </div>
      </section>
    </main>
  );
}
