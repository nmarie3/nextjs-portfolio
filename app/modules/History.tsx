'use client'
import { Tilt_Warp, M_PLUS_1p} from 'next/font/google';
import { BounceEffect } from '../components/BounceRevealEffect';
import { ScrollAnimate } from '../components/ScrollAnimate';
import HistorySvgHorizontal from '../components/HistorySvgHORIZONTAL';
import HistorySvgMaskHorizontal from '../components/HistorySvgMaskHORIZONTAL';
import HistorySvgVerticle from '../components/HistorySvgVERTICLE';
import HistorySvgMaskVerticle from '../components/HistorySvgMaskVERTICLE';

const tiltwarp = Tilt_Warp({
  weight: ["400"],
  subsets: ['latin'],
})

const mplus = M_PLUS_1p({
  weight: ["400"],
  subsets: ['latin'],
})



const History = () => {

  return (
    <section id="history" className="h-screen overflow-hidden">
      <div className="text-center flex-col justify-center">
          <h2 className={`${tiltwarp.className} rainbow-text text-transparent animate-gradient text-4xl sm:text-5xl pb-3 md:pt-50`}>History</h2>
          {/*mobile and sm*/}
          <ScrollAnimate>
          <div className="block md:hidden relative">
            
                <div className="relative w-full h-full flex items-center justify-center">
                    <div className="relative w-full h-[vh]">
                        <HistorySvgMaskVerticle className="relative h-screen w-full z-20 " />
                        <HistorySvgVerticle className="absolute h-screen inset-0 z-10 w-full text-glow" />
                    </div>

                    {/*fadeIn history details*/}
                    <div className={`${mplus.className} text-stone-300 absolute inset-0  pointer-events-none z-30`}>
                      <h4 className="absolute text-right text-2xl sm:text-4xl left-[29%] top-[5%] sm:left-[31%] sm:top-[5%]"><BounceEffect delay={0.6}><span className="text-sm sm:text-xl">2013年</span><br />大学卒</BounceEffect></h4>

                      <h4 className="absolute text-left text-2xl sm:text-4xl top-[23%] right-[10%] sm:top-[21%] sm:right-[17%]"><BounceEffect delay={0.8}><span className="text-sm sm:text-xl">2014年</span><br />英語教師</BounceEffect></h4>

                      <h4 className="absolute text-2xl sm:text-4xl text-right top-[39%] left-[8%] sm:top-[39%] sm:left-[15%]"><BounceEffect delay={1}><span className="text-sm sm:text-xl">2016年</span><br />映像撮影<br />編集<br /></BounceEffect></h4>

                      <h4 className="absolute text-left text-2xl sm:text-4xl bottom-[28%] right-[13%] sm:bottom-[28%] sm:right-[16%]"><BounceEffect delay={1.2}><span className="text-sm sm:text-xl">2017年</span><br />ゲーム業界で<br />日英翻訳者</BounceEffect></h4>

                      <h4 className="absolute text-left text-2xl sm:text-4xl bottom-[8%] left-[19%]"><BounceEffect delay={1.4}><span className="text-sm sm:text-xl">2024年</span><br />ウェブエンドエンジニア</BounceEffect></h4>
                    </div>
                </div>
          </div>
          {/*end*/}

          {/*md and lg screens*/}
          <div className="hidden md:block relative">

                    <div className="relative w-full h-full right-[15px] flex items-center justify-center">
                        <HistorySvgMaskHorizontal className="relative w-screen h-full z-20 " />
                        <HistorySvgHorizontal className="absolute w-screen inset-0 z-10 h-full text-glow" />
                    </div>

                    {/*fadeIn history details*/}
                    <div className={`${mplus.className} absolute text-stone-300 inset-0  pointer-events-none z-30`}>

                      <h4 className="absolute text-right md:right-[4%] md:top-[59%] md:text-2xl lg:right-[6%] lg:top-[62%] lg:text-3xl xl:right-[5%] xl:top-[55%] xl:text-4xl"><BounceEffect delay={0.6}><span className="md:text-lg lg:text-xl xl:text-2xl">2013年</span><br />大学卒</BounceEffect></h4>

                      <h4 className="absolute text-right md:right-[23%] md:top-[19%] md:text-2xl lg:right-[23%] lg:top-[28%] lg:text-3xl xl:right-[22%] xl:top-[22%] xl:text-4xl"><BounceEffect delay={0.8}><span className="md:text-lg lg:text-xl xl:text-2xl">2014年</span><br />英語教師</BounceEffect></h4>

                      <h4 className="absolute text-left md:left-[42%] md:top-[53%] md:text-2xl lg:left-[43%] lg:top-[53%] lg:text-3xl xl:left-[40%] xl:top-[48%] xl:text-4xl"><BounceEffect delay={1}><span className="md:text-lg lg:text-xl xl:text-2xl">2016年</span><br />映像撮影・編集<br /></BounceEffect></h4>

                      <h4 className="absolute text-left md:left-[10%] md:top-[10%] md:text-2xl lg:left-[11%] lg:top-[17%] lg:text-3xl xl:left-[10%] xl:top-[13%] xl:text-4xl"><BounceEffect delay={1.2}><span className="md:text-lg lg:text-xl xl:text-2xl">2017年</span><br />ゲーム業界で日英翻訳者</BounceEffect></h4>

                      <h4 className="absolute text-left md:left-[14%] md:bottom-[3%] md:text-2xl lg:left-[14%] lg:bottom-[3%] lg:text-3xl xl:left-[14%] xl:bottom-[10%] xl:text-4xl"><BounceEffect delay={1.4}><span className="md:text-lg lg:text-xl xl:text-2xl">2024年</span><br />ウェブエンドエンジニア</BounceEffect></h4>
                    </div>
          </div>

          </ScrollAnimate>
    </div>
    </section>
  )
}

export default History