'use client'
import { Tilt_Warp, M_PLUS_1p, RocknRoll_One} from 'next/font/google';
import React, {useEffect, useRef} from 'react'
//import { motion, useInView, useAnimation } from 'framer-motion';
import HistorySvgMask from "../components/HistorySvgMask";
import HistorySvg from '../components/HistorySvg';
import HistorySvgMaskVERTICLE from "../components/HistorySvgMaskVERTICLE";
import HistorySvgVERTICLE from '../components/HistorySvgVERTICLE';
import { BounceEffect } from '../components/BounceRevealEffect';
import { ScrollAnimate } from '../components/ScrollAnimate';

const tiltwarp = Tilt_Warp({
  weight: ["400"]
})

const mplus = M_PLUS_1p({
  weight: ["400"]
})

const rock = RocknRoll_One({
  weight: ["400"]
})


const HistoryMobile = () => {

  return (
    <section id="history" className="h-screen overflow-hidden">
      <div className="text-center flex-col justify-center">
          <h2 className={`${tiltwarp.className} rainbow-text text-transparent animate-gradient text-4xl sm:text-5xl  md:pt-50`}>History</h2>
          {/*mobile and sm*/}
          <ScrollAnimate>
          <div className="block md:hidden">
            
                <div className="relative w-full h-full flex items-center justify-center">
                    <div className="relative w-full h-[vh]">
                        <HistorySvgMaskVERTICLE className="relative h-screen w-full z-20 " />
                        <HistorySvgVERTICLE className="absolute h-screen inset-0 z-10 w-full text-glow" />
                    </div>

                    {/*fadeIn history details*/}
                    <div className={`${mplus.className} text-stone-300 absolute inset-0  pointer-events-none z-30`}>
                      <h4 className="absolute text-right text-2xl sm:text-4xl left-[29%] top-[5%] sm:left-[31%] sm:top-[6%]"><BounceEffect delay={0.6}><span className="text-sm sm:text-xl">2013年</span><br />大学卒</BounceEffect></h4>

                      <h4 className="absolute text-left text-2xl sm:text-4xl top-[23%] right-[10%] sm:top-[21%] sm:right-[15%]"><BounceEffect delay={0.8}><span className="text-sm sm:text-xl">2014年</span><br />英語教師</BounceEffect></h4>

                      <h4 className="absolute text-2xl sm:text-4xl text-right top-[39%] left-[8%] sm:top-[39%] sm:left-[15%]"><BounceEffect delay={1}><span className="text-sm sm:text-xl">2016年</span><br />映像撮影<br />編集<br /></BounceEffect></h4>

                      <h4 className="absolute text-left text-2xl sm:text-4xl bottom-[28%] right-[13%] sm:bottom-[28%] sm:right-[16%]"><BounceEffect delay={1.2}><span className="text-sm sm:text-xl">2017年</span><br />ゲーム業界で<br />日英翻訳者</BounceEffect></h4>

                      <h4 className="absolute text-left text-2xl sm:text-4xl bottom-[9%] left-[19%]"><BounceEffect delay={1.4}><span className="text-sm sm:text-xl">2024年</span><br />フロントエンドエンジニア</BounceEffect></h4>
                    </div>
                </div>
          </div>
          {/*end*/}

          {/*md and lg screens*/}
          <div className="hidden md:block">

                    <div className="relative right-3 md:right-[22px] w-full">
                        <HistorySvgMask className="relative pt-3 top-[60%] w-full z-20 " />
                        <HistorySvg className="absolute z-10 pt-3 top-[15%] left-[4%] w-full text-glow" />
                    </div>

                    {/*fadeIn history details*/}
                    <div className={`${mplus}.className} text-stone-300 absolute inset-0  pointer-events-none z-30`}>
                      <h4 className="absolute text-right text-xs md:text-sm lg:text-xl right-[5%] top-[58%]"><BounceEffect delay={0.6}>2013年<br />大学卒</BounceEffect></h4>

                      <h4 className="absolute text-right text-xs md:text-sm top-[9%] right-[21%] sm:top-[57%] sm:right-[23%] lg:text-xl"><BounceEffect delay={0.8}>2014年<br />英語教師</BounceEffect></h4>

                      <h4 className="absolute text-xs text-left md:text-sm top-[50%] sm:text-sm lg:text-xl left-[43%] sm:top-[43%]"><BounceEffect delay={1}>2016年<br />映像撮影・編集<br /></BounceEffect></h4>

                      <h4 className="absolute text-left text-xs md:text-sm -top-[2%] left-[10%] sm:top-[41%] sm:left-[15%] lg:text-xl"><BounceEffect delay={1.2}>2017年<br />ゲーム業界で日英翻訳者</BounceEffect></h4>

                      <h4 className="absolute text-left text-xs md:text-sm bottom-0 sm:text-sm lg:text-xl left-[14%] sm:bottom-[13%]"><BounceEffect delay={1.4}>2024年<br />フロントエンドエンジニア</BounceEffect></h4>
                    </div>
          </div>

          </ScrollAnimate>
    </div>
    </section>
  )
}

export default HistoryMobile
