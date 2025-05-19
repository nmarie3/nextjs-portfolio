'use client'
import Image from 'next/image'
import React from 'react'
import { Bungee_Inline, Tilt_Warp, M_PLUS_1p, Mochiy_Pop_One, RocknRoll_One} from 'next/font/google';
//import { BounceEffect } from '../components/BounceRevealEffect';
import { SlideEffect } from '../components/SlideRevealEffect';
import { ScrollAnimate } from '../components/ScrollAnimate';

const bungee = Bungee_Inline({
  weight: ["400"]
})

const tiltwarp = Tilt_Warp({
  weight: ["400"]
})

const kosugi = M_PLUS_1p({
  weight: ["400"]
})

const mochiy = RocknRoll_One({
  weight: ["400"]
})

const Hero = () => {
  return (
    <section id="hero" className="flex items-center justify-center overflow-hidden sm:pt-40 h-screen xl:pl-15 pb-5 md:pr-32 lg:pr-20 xl:pr-0">
      <ScrollAnimate>
      {/*mobile*/}
      <div className="block md:hidden pt-20">

    <div className="flex items-center">
      <div className="flex flex-col items-center pl-6 pr-6">
        
        <div className="gap-2 flex justify-between flex-row text-xl text-white pb-3">
          <span className={`${bungee.className} block text-right`}><SlideEffect delay={0} duration={1.5}>DEV.</SlideEffect></span>
          <span className={`${bungee.className}`}><SlideEffect delay={0} duration={1.5}>TRANSLATOR.</SlideEffect></span>
          <span className={`${bungee.className}`}><SlideEffect delay={0} duration={1.5}>CREATOR.</SlideEffect></span>
        </div>

        <div className="flex gap-4 flex-col justify-center text-center"><SlideEffect delay={0.5} duration={1.5}>
            <h1 className={`${mochiy.className} rainbow-text text-2xl text-transparent animate-gradient pb-5`}>好きなことを仕事に<br />学びながら成長していく</h1>
            <h2 className={`${kosugi.className} text-white text-based text-justify pb-15 px-2`}>はじめまして、ナターシャです。<br />
            これまで数年間、翻訳家としてキャリアを積んできましたが、新しい世界に挑戦したいという思いから、現在はエンジニアとしてウェブ開発やアプリ開発に取り組んでいます。
            今でも翻訳の仕事を続けていて、ファンコミュニティ向けの翻訳を中心に、フリーランスとして楽しく活動中です。
            また、イラスト制作やモーショングラフィックス、3Dアートなど、創作系のプロジェクトにも意欲的に取り組み、自分のスキルを日々磨いています。

            家では、2匹の可愛いモルモットを育てています。</h2></SlideEffect>
        </div>
      </div>
    </div>

    </div>


    {/*screens*/}
    <div className="hidden md:block">
    <ScrollAnimate>
    <div className="flex">
      <div className="flex flex-col md:grid md:grid-cols-[60%_40%] gap-10 items-center">
        <div className="flex flex-col"><SlideEffect x={-75} y={0} delay={0.8} duration={1}>
            <h1 className={`${mochiy.className} rainbow-text text-right text-base md:text-4xl lg:text-4xl text-transparent animate-gradient`}>好きなことを仕事に<br />学びながら成長していく</h1>
            <h2 className={`${kosugi.className} text-white text-right text-base md:text-2xl p-3`}>はじめまして、ナターシャです。<br />
            これまで数年間、翻訳家としてキャリアを積んできましたが、新しい世界に挑戦したいという思いから、現在はエンジニアとしてウェブ開発やアプリ開発に取り組んでいます。
            今でも翻訳の仕事を続けていて、ファンコミュニティ向けの翻訳を中心に、フリーランスとして楽しく活動中です。
            また、イラスト制作やモーショングラフィックス、3Dアートなど、創作系のプロジェクトにも意欲的に取り組み、自分のスキルを日々磨いています。

            家では、2匹の可愛いモルモットを育てています。</h2></SlideEffect>
        </div>
        <div className="gap-3 flex flex-row text-2xl sm:text-4xl md:text-7xl md:flex-col md:gap-10 text-white lg:text-7xl">
          <span className={`${bungee.className} block text-right`}><SlideEffect x={75} y={0} delay={0.2} duration={1}>DEV</SlideEffect></span>
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
