import { EB_Garamond,Montserrat } from "next/font/google";
import Image from "next/image";

const garamond = EB_Garamond({ subsets: ["latin"] });
const garamondy = EB_Garamond({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="m-auto">
          <h1 className={`${garamondy.className} ml-10 block md:hidden flex justify-center text-9xl `}>g°</h1>
          <h1 className={`${garamond.className} hidden md:block flex justify-center text-9xl `}>green dot°</h1>
          <h1 className={`${montserrat.className} mt-8 md:mt-0 flex justify-center text-2xl`}>hair, face & body&nbsp; <b>spa</b> </h1>
          <h4>we offer unlimited Hair Spa services to People with the name 'Abhirami A' </h4>
      </div>
    </div>
    
  );
}

