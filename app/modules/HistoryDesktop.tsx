import React from 'react'

const History = () => {
  return (
    <div className="relative flex flex-row mt-10 w-full">
      <div className="">
      <svg width="13" height="330" viewBox="0 0 13 567" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 7L6 105.328L5.99999 195.54L5.99998 354.113L5.99998 567" stroke="white" stroke-width="4"/>
        <circle cx="6.5" cy="6.5" r="6.5" transform="matrix(-1 0 0 1 13 554)" fill="#D9D9D9"/>
        <circle cx="6.5" cy="6.5" r="6.5" transform="matrix(-1 0 0 1 13 330)" fill="#D9D9D9"/>
        <circle cx="6.5" cy="6.5" r="6.5" transform="matrix(-1 0 0 1 13 203)" fill="#D9D9D9"/>
        <circle cx="6.5" cy="6.5" r="6.5" transform="matrix(-1 0 0 1 13 81)" fill="#D9D9D9"/>
        <circle cx="6.5" cy="6.5" r="6.5" transform="matrix(-1 0 0 1 13 0)" fill="#D9D9D9"/>
      </svg>
      </div>

      <div>
        <div className="group relative">
            <h4 className="ml-5 -mt-1 mb-5">2013年 大学卒</h4>
                <div className="absolute top-0 left-full m-5 w-90 hidden group-hover:block  bg-green-600">
                    <h2>University at Albany, ニューヨーク州 米国</h2>
                    <h3>2013年05月</h3>
                    <p>東アジア研究・日本語</p>
                </div>
        </div>

        <div className="group relative">
            <h4 className="ml-5 mb-12">2014年 英語教師</h4>
                <div className="absolute top-0 left-full m-5 w-90 hidden group-hover:block  bg-green-600">
                    <h2>Victoria Kids English Academy</h2>
                        <h3>2014年06月 - 2016年01月</h3>
                        <p>内容</p>
                </div>
        </div>

        <div className="group relative">
            <h4 className="ml-5 mb-12">2016年 映像撮影・編集</h4>
                <div className="absolute top-0 left-full m-5 w-90 hidden group-hover:block  bg-green-600">
                    <h2>スイートルーム</h2>
                        <h3>2016年02月 - 2017年03月</h3>
                        <p>内容</p>
                </div>
        </div>

        <div className="group relative">
            <h4 className="ml-5 mb-26">2017年 ゲーム業界で英語翻訳者</h4>
                <div className="absolute top-0 left-full m-5 w-100 hidden group-hover:block  bg-green-600">
                    <div className="flex flex-row">
                        <div>
                            <h2>株式会社ドリコム</h2>
                                <h3>2017年04月 - 2017年10月</h3>
                                <p>内容</p>
                            <h2>株式会社Cygames</h2>
                                <h3>2016年11月 - 2018年08月</h3>
                                <p>内容</p>
                            <h2>株式会社WFS</h2>
                                <h3>2018年09月 - 2023年012月</h3>
                                <p>内容</p>
                            </div>
                            <div className="freelance">
                            <h2>株式会社パピレス</h2>
                                <h3>2018年09月 - 2023年012月</h3>
                                <p>内容</p>
                            <h2>Fohigh Technological Translation Co. Ltd.</h2>
                                <h3>2018年09月 - 2023年012月</h3>
                                <p>内容</p>
                        </div>
                    </div>
                </div>
        </div>

        <div className="group relative">
            <h4 className="ml-5">2024年 フロントエンドエンジニア</h4>
                <div className="absolute top-0 left-full m-5 w-90 hidden group-hover:block  bg-green-600">
                    <h2>株式会社コグラフ</h2>
                        <h3>2024年01月 - 2024年05月</h3>
                        <p>内容</p>
                    <h2>Center Force</h2>
                        <h3>2018年10月 - 現在</h3>
                        <p>内容</p>
                </div>
        </div>
      </div>
    </div>
  )
}

export default History
