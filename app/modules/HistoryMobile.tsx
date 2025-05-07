import React from 'react'
import { BiDownArrow } from 'react-icons/bi'
import Skills from './Skills'

const HistoryMobile = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-row p-2 rounded-3xl bg-sky-300">
        <div className="">
        <svg width="13" height="300" viewBox="0 0 13 567" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 7L6 105.328L5.99999 195.54L5.99998 354.113L5.99998 567" stroke="white" strokeWidth="4"/>
            <circle cx="6.5" cy="6.5" r="6.5" transform="matrix(-1 0 0 1 13 554)" fill="#D9D9D9"/>
            <circle cx="6.5" cy="6.5" r="6.5" transform="matrix(-1 0 0 1 13 330)" fill="#D9D9D9"/>
            <circle cx="6.5" cy="6.5" r="6.5" transform="matrix(-1 0 0 1 13 203)" fill="#D9D9D9"/>
            <circle cx="6.5" cy="6.5" r="6.5" transform="matrix(-1 0 0 1 13 81)" fill="#D9D9D9"/>
            <circle cx="6.5" cy="6.5" r="6.5" transform="matrix(-1 0 0 1 13 0)" fill="#D9D9D9"/>
        </svg>
        </div>

        <div>
            <div className="group relative">
                <h4 className="flex gap-2 ml-5 -mt-1 mb-5">2013年 大学卒<BiDownArrow/></h4>
                    {/* <div className="absolute top-0  m-5 w-100 hidden group-hover:block z-10 bg-green-600">
                        <h2>University at Albany, ニューヨーク州 米国</h2>
                        <h3>2013年05月</h3>
                        <p>東アジア研究・日本語</p>
                    </div> */}
            </div>

            <div className="group relative">
                <h4 className="flex gap-2 ml-5 mb-10">2014年 英語教師<BiDownArrow/></h4>
                    {/* <div className="absolute top-0  m-5 w-100 hidden group-hover:block z-10 bg-green-600">
                        <h2>Victoria Kids English Academy</h2>
                            <h3>2014年06月 - 2016年01月</h3>
                            <p>In exercitation ex do anim ipsum veniam elit ea esse officia occaecat officia est sunt. Elit reprehenderit nisi est pariatur pariatur enim irure. Aute in amet tempor culpa exercitation elit. Reprehenderit minim consequat tempor sint duis pariatur nulla irure. Laborum reprehenderit enim anim commodo ipsum et amet et consectetur velit dolor voluptate.</p>
                    </div> */}
            </div>

            <div className="group relative">
                <h4 className="flex gap-2 ml-5 mb-11">2016年 映像撮影・編集<BiDownArrow/></h4>
                    {/* <div className="absolute top-0  m-5 w-100 hidden group-hover:block z-10 bg-green-600">
                        <h2>スイートルーム</h2>
                            <h3>2016年02月 - 2017年03月</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed odio amet obcaecati ratione quas laborum fuga, cumque ipsa consequatur animi doloremque magnam quae earum repellat veritatis reiciendis excepturi neque numquam.</p>
                    </div> */}
            </div>

            <div className="group relative">
                <h4 className="flex gap-2 ml-5 mb-22">2017年 ゲーム業界で英語翻訳者<BiDownArrow/></h4>
                    {/* <div className="absolute top-0  m-5 w-100 hidden group-hover:block z-10 bg-green-600">
                        <div className="flex flex-row">
                            <div>
                                <h2>株式会社ドリコム</h2>
                                    <h3>2017年04月 - 2017年10月</h3>
                                    <p className="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eum voluptatem harum sit. Quis id fugit eaque quos saepe voluptatem aliquid aut corrupti dolore fugiat? Ipsam nemo quaerat ipsa unde.</p>
                                <h2 >株式会社Cygames</h2>
                                    <h3>2016年11月 - 2018年08月</h3>
                                    <p className="mb-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, amet enim omnis, quasi cum saepe odio tenetur aut quod tempore fuga modi voluptatum facilis. Sunt fugit eius cupiditate quidem neque?</p>
                                <h2>株式会社WFS</h2>
                                    <h3>2018年09月 - 2023年012月</h3>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem magnam nam consequatur. Consequuntur dignissimos ipsum voluptatum earum ratione, expedita perspiciatis excepturi libero commodi magni laudantium corporis dolores, quae sint placeat.</p>
                                </div>
                                <div className="freelance">
                                <h2 className="mb-2">株式会社パピレス</h2>
                                    <h3>2018年09月 - 2023年012月</h3>
                                    <p className="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam at dolores voluptate itaque dolorem, sapiente fugit, accusamus corrupti quidem temporibus voluptates natus vitae alias blanditiis nemo quas! Exercitationem, culpa quod.</p>
                                <h2>Fohigh Technological Translation Co. Ltd.</h2>
                                    <h3>2018年09月 - 2023年012月</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum tempora nam nobis fugiat doloribus a nostrum ad officiis quisquam magni. Cupiditate accusantium tempora natus ab nihil explicabo ullam! Aut, facilis!</p>
                            </div>
                        </div>
                    </div> */}
            </div>

            <div className="group relative">
                <h4 className="flex gap-2 ml-5">2024年 フロントエンドエンジニア<BiDownArrow/></h4>
                    {/* <div className="absolute top-0  m-5 w-100 hidden group-hover:block z-10 bg-green-600">
                        <h2>株式会社コグラフ</h2>
                            <h3>2024年01月 - 2024年05月</h3>
                            <p className="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolores necessitatibus pariatur consequuntur dolore incidunt quas quaerat culpa provident sit? Dolores delectus harum soluta itaque. Rem officiis debitis placeat tenetur.</p>
                        <h2>Center Force</h2>
                            <h3>2018年10月 - 現在</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas necessitatibus fugiat reprehenderit fuga obcaecati explicabo eaque maxime perferendis! Voluptatum facere alias sapiente nam vitae aliquam ullam unde odit iure. Veritatis!</p>
                    </div> */}
            </div>
        </div>
        </div>
        <Skills/>
    </div>
  )
}

export default HistoryMobile
