'use client'
import React from 'react'
import { Bungee_Inline, M_PLUS_1p, RocknRoll_One} from 'next/font/google';
import { SlideEffect } from '../components/SlideRevealEffect';
import { ScrollAnimate } from '../components/ScrollAnimate';

const bungee = Bungee_Inline({
  weight: ["400"],
  subsets: ['latin'],
})


const mplus = M_PLUS_1p({
  weight: ["400"],
  subsets: ['latin'],
})

const rock = RocknRoll_One({
  weight: ["400"],
  subsets: ['latin'],
})

const Hero = () => {
  return (
    <section id="hero" className="flex items-center justify-center overflow-hidden h-screen pb-5 bg-gradient-to-b from-gray-800 to-zinc-950 md:px-4">
      <ScrollAnimate>
      {/*mobile and sm screens*/}
      <div className="block md:hidden pt-20 sm:pt-0">

    <div className="flex items-center">
      <div className="flex flex-col justify-center text-center items-center pl-6 pr-6">
        
        <div className="flex flex-col text-center items-center text-4xl sm:text-7xl text-white pb-3">
          <span className={`${bungee.className}`}><SlideEffect delay={0} duration={1.5}>DEV</SlideEffect></span>
          <span className={`${bungee.className}`}><SlideEffect delay={0} duration={1.5}>TRANSLATOR</SlideEffect></span>
          <span className={`${bungee.className}`}><SlideEffect delay={0} duration={1.5}>CREATOR</SlideEffect></span>
        </div>

        <div className="flex gap-4 flex-col justify-center text-center"><SlideEffect delay={0.5} duration={1.5}>
            <h1 className={`${rock.className} mb-1 rainbow-text text-2xl sm:text-4xl text-transparent animate-gradient pb-5`}>&quot;好きなことを仕事に&quot;<br />学びながら成長していく</h1>
            <h2 className={`${mplus.className} text-white text-based sm:text-lg text-justify pb-15 px-2`}>はじめまして、ナターシャです。<br />
            これまで数年間、翻訳家としてキャリアを積んできましたが、新しい世界に挑戦したいという思いから、現在はエンジニアとしてウェブ開発やアプリ開発に取り組んでいます。
            今でも翻訳の仕事を続けていて、ファンコミュニティ向けの翻訳を中心に、フリーランスとして楽しく活動中です。
            また、イラスト制作やモーショングラフィックス、3Dアートなど、創作系のプロジェクトにも意欲的に取り組み、自分のスキルを日々磨いています。

            家では、2匹の可愛いモルモットを育てています。</h2></SlideEffect>
        </div>
      </div>
    </div>

    </div>


    {/*md and lg screens*/}
    <div className="hidden md:block">
    <ScrollAnimate>
    <div className="px-5 flex justify-center">
      <div className="md:grid md:grid-cols-[60%_40%] lg:grid-cols-[60%_40%] gap-3 items-center">
        <div className="flex flex-col justify-center items-center text-center"><SlideEffect x={-75} y={0} delay={0.8} duration={1}>
            <h1 className={`${rock.className} mb-5 rainbow-text text-right text-base md:text-4xl lg:text-5xl  text-transparent animate-gradient`}>&quot;好きなことを仕事に&quot;<br />学びながら成長していく</h1>
            <h2 className={`${mplus.className} text-white text-right md:text-xl lg:text-2xl pt-3`}>はじめまして、ナターシャです。</h2>
            <h2 className={`${mplus.className} text-white text-justify md:text-xl lg:text-2xl pb-3 px-3 lg:pl-25`}>
            これまで数年間、翻訳家としてキャリアを積んできましたが、新しい世界に挑戦したいという思いから、現在はエンジニアとしてウェブ開発やアプリ開発に取り組んでいます。
            今でも翻訳の仕事を続けていて、ファンコミュニティ向けの翻訳を中心に、フリーランスとして楽しく活動中です。
            また、イラスト制作やモーショングラフィックス、3Dアートなど、創作系のプロジェクトにも意欲的に取り組み、自分のスキルを日々磨いています。

            家では、2匹の可愛いモルモットを育てています。</h2></SlideEffect>
        </div>
        <div className="flex md:text-7xl lg:text-8xl  md:flex-col md:gap-10 text-white">
          <span className={`${bungee.className}`}><SlideEffect x={75} y={0} delay={0.2} duration={1}>DEV</SlideEffect></span>
          <span className={`${bungee.className}`}><SlideEffect x={75} y={0} delay={0.4} duration={1}>TRANS-<br />LATOR</SlideEffect></span>
          <span className={`${bungee.className}`}><SlideEffect x={75} y={0} delay={0.6} duration={1}>CREATOR</SlideEffect></span>
        </div>
      </div>
    </div>
    </ScrollAnimate>
    </div>
</ScrollAnimate>

    </section>
  )
}

export default Hero


