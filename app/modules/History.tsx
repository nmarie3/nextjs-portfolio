'use client'
import { Kosugi, Mochiy_Pop_One} from 'next/font/google';
import React, {useEffect, useRef} from 'react'
//import { motion, useInView, useAnimation } from 'framer-motion';
import HistorySvgMask from "../components/HistorySvgMask";
import HistorySvg from '../components/HistorySvg';
import HistorySvgMaskVERTICLE from "../components/HistorySvgMaskVERTICLE";
import HistorySvgVERTICLE from '../components/HistorySvgVERTICLE';
import { BounceEffect } from '../components/BounceRevealEffect';
import { ScrollAnimate } from '../components/ScrollAnimate';


const kosugi = Kosugi({
  weight: ["400"]
})

const mochiy = Mochiy_Pop_One({
  weight: ["400"]
})


const HistoryMobile = () => {

  return (
    <section id="history" className="h-screen pt-10 overflow-hidden">
      {/*mobile*/}
      <ScrollAnimate>
      <div className="block md:hidden">

            <div className="">
            <div className="relative w-full h-full flex items-center justify-center">
                <div className="relative w-full h-[vh]">
                    <HistorySvgMaskVERTICLE className="relative h-screen w-full z-20 " />
                    <HistorySvgVERTICLE className="absolute h-screen inset-0 [15%]z-10 w-full text-glow" />
                </div>

                {/*fadeIn history details*/}
                <div className={`$kosugi.className} text-stone-300 absolute inset-0  pointer-events-none z-30`}>
                  <h4 className="absolute text-right text-xs md:text-sm lg:text-xl right-[5%] top-[58%]"><BounceEffect delay={0.6}>2013年<br />大学卒</BounceEffect></h4>

                  <h4 className="absolute text-right text-xs md:text-sm top-[9%] right-[21%] sm:top-[57%] sm:right-[23%] lg:text-xl"><BounceEffect delay={0.8}>2014年<br />英語教師</BounceEffect></h4>

                  <h4 className="absolute text-xs text-left md:text-sm top-[50%] sm:text-sm lg:text-xl left-[43%] sm:top-[43%]"><BounceEffect delay={1}>2016年<br />映像撮影・編集<br /></BounceEffect></h4>

                  <h4 className="absolute text-left text-xs md:text-sm -top-[2%] left-[10%] sm:top-[41%] sm:left-[15%] lg:text-xl"><BounceEffect delay={1.2}>2017年<br />ゲーム業界で日英翻訳者</BounceEffect></h4>

                  <h4 className="absolute text-left text-xs md:text-sm bottom-0 sm:text-sm lg:text-xl left-[14%] sm:bottom-[13%]"><BounceEffect delay={1.4}>2024年<br />フロントエンドエンジニア</BounceEffect></h4>
                </div>
              </div>
              </div>
      </div>
      {/*end*/}

      {/*screens*/}
      <div className="hidden md:block">

            <div className="relative w-full h-full flex items-center justify-center pt-40 pb-40">
                <div className="relative right-[6] md:right-[30]">
                    <HistorySvgMask className="relative pt-3 top-[60%] w-full z-20 " />
                    <HistorySvg className="absolute z-10 pt-3 top-[15%] left-[4%] w-full text-glow" />
                </div>

                {/*fadeIn history details*/}
                <div className={`$kosugi.className} text-stone-300 absolute inset-0  pointer-events-none z-30`}>
                  <h4 className="absolute text-right text-xs md:text-sm lg:text-xl right-[5%] top-[58%]"><BounceEffect delay={0.6}>2013年<br />大学卒</BounceEffect></h4>

                  <h4 className="absolute text-right text-xs md:text-sm top-[9%] right-[21%] sm:top-[57%] sm:right-[23%] lg:text-xl"><BounceEffect delay={0.8}>2014年<br />英語教師</BounceEffect></h4>

                  <h4 className="absolute text-xs text-left md:text-sm top-[50%] sm:text-sm lg:text-xl left-[43%] sm:top-[43%]"><BounceEffect delay={1}>2016年<br />映像撮影・編集<br /></BounceEffect></h4>

                  <h4 className="absolute text-left text-xs md:text-sm -top-[2%] left-[10%] sm:top-[41%] sm:left-[15%] lg:text-xl"><BounceEffect delay={1.2}>2017年<br />ゲーム業界で日英翻訳者</BounceEffect></h4>

                  <h4 className="absolute text-left text-xs md:text-sm bottom-0 sm:text-sm lg:text-xl left-[14%] sm:bottom-[13%]"><BounceEffect delay={1.4}>2024年<br />フロントエンドエンジニア</BounceEffect></h4>
                </div>
              </div>
      </div>
    </ScrollAnimate>
    </section>
  )
}

export default HistoryMobile
