import { EB_Garamond,Montserrat,Bodoni_Moda } from "next/font/google";
import Image from "next/image";
import MapButton from './_components/mapButton' 
import CallButton from './_components/callButton'

const garamond = EB_Garamond({ subsets: ["latin"] });
const garamondy = EB_Garamond({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });
const bodoni = Bodoni_Moda({ subsets: ["latin"] })

export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="m-auto">
          <div className="flex justify-center">
          <img src='/logo.png' alt="logo" width={100} height={100}/>
          </div>
          
          
          <h1 className={`${bodoni.className} hidden md:block flex justify-center text-9xl `}>green dot</h1>
          <h1 className={`${montserrat.className} mt-8 md:mt-0 flex justify-center text-2xl`}>hair, face & body&nbsp; <b>spa</b> </h1>
          
          <div className="flex mt-10 justify-center"><CallButton phoneNumber="+919605888498"/>&nbsp;&nbsp;&nbsp;<MapButton/></div>
      </div>
    </div>
    
  );
}