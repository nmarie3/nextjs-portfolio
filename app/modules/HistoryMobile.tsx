'use client'
import React, {useEffect, useRef} from 'react'
//import { motion, useInView, useAnimation } from 'framer-motion';
import HistorySvgMask from "../components/HistorySvgMask";
import HistorySvg from '../components/HistorySvg';
import { BounceEffect } from '../components/BounceRevealEffect';
import { ScrollAnimate } from '../components/ScrollAnimate';
import { Kosugi } from 'next/font/google';

const mochiy = Kosugi({
  weight: ["400"]
})


const HistoryMobile = () => {
    // const ref = useRef(null);
    // const isInView = useInView(ref, {once: true});

    // const mainControls = useAnimation();
    // const slideControls = useAnimation();

    // useEffect(() => {
    //     if (isInView) {
    //         mainControls.start("visible")
    //         slideControls.start("visible")
    //     }
    // }, [isInView]);

  return (
    <ScrollAnimate><section className="relative w-full bg-red-300 h-auto mt-10 pt-70 pb-50">
        <div className="relative w-full">
            <HistorySvgMask className="relative top-[60%] w-full z-20" />
            <HistorySvg className="absolute z-10  top-[15%] left-[4%] w-full h-full" />
        </div>

      {/*fadeIn history details*/}
      <div className={`${mochiy.className} absolute inset-0 w-full h-full pointer-events-none z-30 text-red-900`}>
        <h4 className="absolute text-sm sm:text-sm lg:text-xl right-[5%] top-[53%]"><BounceEffect delay={0.6}>2013年<br />大学卒</BounceEffect></h4>
        <h4 className="absolute text-sm -top-[9%] right-[20%] sm:top-[57%] sm:right-[23%] lg:text-xl"><BounceEffect delay={0.8}>2014年<br />英語教師</BounceEffect></h4>
        <h4 className="absolute text-sm top-[39%] sm:text-sm lg:text-xl left-[43%] sm:top-[43%]"><BounceEffect delay={1}>2016年<br />映像撮影・編集</BounceEffect></h4>
        <h4 className="absolute text-sm -top-[18%] left-[10%] sm:top-[41%] sm:left-[15%] lg:text-xl"><BounceEffect delay={1.2}>2017年<br />ゲーム業界で日英翻訳</BounceEffect></h4>
        <h4 className="absolute text-sm bottom-[8%] sm:text-sm lg:text-xl left-[15%] sm:bottom-[13%]"><BounceEffect delay={1.4}>2024年<br />フロントエンドエンジニア</BounceEffect></h4>
      </div>

    </section></ScrollAnimate>
  )
}

export default HistoryMobile
