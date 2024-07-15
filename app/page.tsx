import { EB_Garamond,Montserrat,Bodoni_Moda, } from "next/font/google";
import Image from "next/image";
import MapButton from './_components/mapButton' 
import CallButton from './_components/callButton'
import JobButton from './_components/jobButton'

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
          
          
          <h1 className={`${bodoni.className} hidden md:block flex justify-center text-9xl `}>greendot</h1>
          <h1 className={`${montserrat.className} mt-8 md:mt-0 flex justify-center text-2xl`}>HAIR&nbsp;&nbsp;&nbsp;      SKIN&nbsp;&nbsp;&nbsp;        MAKEUP</h1>
          
          {/* <div className="flex mt-10 justify-center"><CallButton phoneNumber="+919605888498"/>&nbsp;&nbsp;&nbsp;<MapButton/>&nbsp;&nbsp;&nbsp;<JobButton/></div> */}
          <div className="flex mt-10 justify-center"><JobButton/></div>

      </div>
    </div>
    
  );
}