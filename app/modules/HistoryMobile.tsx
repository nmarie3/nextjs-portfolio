'use client'
import React, {useEffect, useRef} from 'react'
//import { motion, useInView, useAnimation } from 'framer-motion';
import HistorySvgMask from "../components/HistorySvgMask";
import HistorySvg from '../components/HistorySvg';
import { RevealEffect } from '../components/RevealEffect';




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
    <section className="relative w-full h-200 mt-10 mb-10 ">
        <div className="relative w-full">
            <HistorySvgMask className="relative top-[60%] w-full z-20" />
            <HistorySvg className="absolute z-10  top-[15%] left-[4%] w-full h-full" />
        </div>

    {/*fadeIn history details*/}
    <div className="absolute inset-0 w-full h-full pointer-events-none z-30 text-white">
      <h4 className="absolute text-sm sm:text-sm lg:text-xl right-[5%] top-[53%]"><RevealEffect delay={0.6}>2013年<br />大学卒</RevealEffect></h4>
      <h4 className="absolute text-sm -top-[9%] right-[20%] sm:top-[57%] sm:right-[23%] lg:text-xl"><RevealEffect delay={0.8}>2014年<br />英語教師</RevealEffect></h4>
      <h4 className="absolute text-sm top-[39%] sm:text-sm lg:text-xl left-[43%] sm:top-[43%]"><RevealEffect delay={1}>2016年<br />映像撮影・編集</RevealEffect></h4>
      <h4 className="absolute text-sm -top-[18%] left-[10%] sm:top-[41%] sm:left-[15%] lg:text-xl"><RevealEffect delay={1.2}>2017年<br />ゲーム業界で日英翻訳</RevealEffect></h4>
      <h4 className="absolute text-sm bottom-[8%] sm:text-sm lg:text-xl left-[15%] sm:bottom-[13%]"><RevealEffect delay={1.4}>2024年<br />フロントエンドエンジニア</RevealEffect></h4>
    </div>


    </section>
  )
}

export default HistoryMobile
