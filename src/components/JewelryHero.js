import Image from 'next/image';
import React from 'react';

const JewelryHero = () => {
  return (
    <div className="w-full h-auto responsive bg-neutral-50">

      {/* { Header }  */}
      <header className="bg-customBrown pl-10">
              <h1 className="text-4xl font-Rye text-50px leading-[93.75px] text-white">MANZZARI</h1>
      </header>

      {/* { HeroSection } */}
      <div className="max-w-7xl mx-20 py-14">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* {LeftContent } */}
          <div className="space-y-1">
            <div className="space-y-1">
             
              <h2 className="text-customBlack w-700 font-libreBodoni text-39px font-bold leading-[65.8px] 
              tracking-tight text-left  decoration-skip-ink-none letter-2.5%">
              IMPECCABLE CRAFTSMANSHIP & FINESSE
              </h2>

            </div>
            <div>
              <h2 className="text-myBrown text-20px font-libreBodoni">
               An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.</h2>
              </div>
            
           <div>
            <button className="w-[200px] h-[50px] my-4 rounded-md bg-customBrown text-25px font-libreBodoni text-white">
            Explore Now
          </button>
            </div>
          </div>

          {/* {RightImage} */}
          <div className="flex justify-end pr-20">
          <Image
          src="/jewelrymodel.jpg"
          alt="Elegant jewelry model"
          width={270}
           height={300}
          />  </div>
          
       </div>
   </div>
   </div>
  )
}
export default JewelryHero;