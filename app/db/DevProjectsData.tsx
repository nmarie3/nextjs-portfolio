//DO NOT USE "USE CLIENT" ON THIS FILE OR IT WILL EFF THINGS UP!!!!　GIVES A CLIENT/SERVER SIDE ERROR


export type ProjectCard = {
    id: string;
    src: string;
    title:string;
    summary: string;
    tools: Tool[];
    link1: string;
    link2: string;
    status: string;
    type: string;
}

export type Tool = {
  name: string;
};

    const devProjectsData: ProjectCard[] = [
    {
        id: "1",
        title:"My Portfolio",
        src: "/dev_images/portfolio.png",
        summary: "現在のポートフォリオ",
        tools: [
            {name: "NextJS"},
            {name: "Typescript"},
            {name: "Framer Motion"},
            {name: "Tailwind CSS"},
            {name: "Adobe Xd"},
            {name: "Illustrator"},
        ],
        link1: "https://github.com/nmarie3/nextjs-portfolio",
        link2: "https://hello-natasha.dev",
        status:"完了",
        type: "ポートフォリオ",
    },
    {
        id: "2",
        title:"Cafe LycoReco Menu",
        src: "/dev_images/cafelycoreco_menu.png",
        summary: "アニメ『リコリコ』のファン向けのインタラクティブな企画。アニメに出てくるメニューを3Dの本みたいにパラパラめくれるよ。",
        tools: [
            {name: "Three.js"},
            {name: "React"},
            {name: "Javascript"},
            {name: "Vite"},
            {name: "Tailwind CSS"},
            {name: "Photoshop"},
        ],
        link1: "https://github.com/nmarie3/threejs-cafeLR",
        link2: "https://cafelycoreco-menu.netlify.app/",
        status:"完了",
        type: "趣味",
    },
    {
        id: "3",
        title:"Subscription Tracker API",
        src: "/dev_images/subtracker.png",
        summary: "ユーザーのサブスクを管理するAPI。CRUDアプリで、バックエンドだけ作ってる。バックエンドのみ",
        tools: [
            {name: "Node JS"},
            {name: "Express"},
            {name: "Javascript"},
            {name: "Mongo DB"},
        ],
        link1: "https://github.com/nmarie3/backend-api",
        link2: "",
        status:"作成中",
        type: "練習",
    },
    {
        id: "4",
        title:"Pui Pui Sekai ECサイト",
        src: "/dev_images/pui-pui-sekai.png",
        summary: "モルモット商品が買えるECサイト。フロントは完成してて、今は仮のショッピングAPIを使ってる。バックエンドはまだ作業中。",
        tools: [
            {name: "NextJS"},
            {name: "NuxtJS"},
            {name: "Typescript"},
            {name: "Tailwind CSS"},
        ],
        link1: "https://github.com/nmarie3/pui-pui-sekai",
        link2: "",
        status:"作成中",
        type: "練習",
    },
    {
        id: "5",
        title:"Idol LP",
        src: "/dev_images/idol.png",
        summary: "アイドルグループの静的なランディングページ。メンバーのプロフィールはカスタマイズできて、編集も楽。",
        tools: [
            {name: "React"},
            {name: "Typescript"},
        ],
        link1: "https://github.com/nmarie3/idol-LP",
        link2: "https://nmarie3.github.io/idol-LP/",
        status:"完了",
        type: "練習",
    },
    {
        id: "6",
        title:"Spud's Space Splash",
        src: "/dev_images/spud.png",
        summary: "Itch.ioの「20 Second Game Jam 2022」で作って公開したゲーム。チームで開発したプロジェクト。",
        tools: [
            {name: "Game Maker"},
        ],
        link1: "",
        link2: "https://washedonshore.itch.io/spuds-space-splash",
        status:"完了",
        type: "イベント",
    },
    {
        id: "7",
        title:"Real Time Rocket Launcher Countdown",
        src: "/dev_images/rocket_countdown.png",
        summary: "ロケット発射APIからリアルタイムデータを取って、5つのロケットのカウントダウンをするウェブアプリ。一番近い発射のタイマーはページの上にあるやつ。UIは古いままで、今後もっとモダンなフレームワークで作り直す予定。",
        tools: [
            {name: "Javascript"}, 
            {name: "HTML"},
            {name: "CSS"},
        ],
        link1: "https://github.com/nmarie3/rocketLaunchCountdown",
        link2: "https://nmarie3.github.io/rocketLaunchCountdown/",
        status:"一旦完了・更新する予定",
        type: "",
    },
    {
        id: "8",
        title:"07th Expansion Landing Page",
        src: "/dev_images/07th.png",
        summary: "07th Expansionの公式サイトを練習で再現してみたもの。",
        tools: [
            {name: "React"},
            {name: "Typescript"},
        ],
        link1: "https://github.com/nmarie3/CenterForce-/tree/main/HTML%E3%83%BBCSS/07expansion-ts-copy",
        link2: "",
        status:"完了",
        type: "練習",
    },
        {
        id: "9",
        title:"Black Thunder Landing Page",
        src: "/dev_images/blackThunder.png",
        summary: "ブラックサンダーの公式サイトを練習で再現してみたもの。",
        tools: [
            {name: "React"},
            {name: "Typescript"},
        ],
        link1: "https://github.com/nmarie3/CenterForce-/tree/main/HTML%E3%83%BBCSS/bthunder-ts-copy",
        link2: "",
        status:"完了",
        type: "練習",
    },
    {
        id: "10",
        title:"Linebreak Checker",
        src: "/dev_images/linebreak_checker.png",
        summary: "ゲーム業界で働いてた時に作ったツール。翻訳者がどこで改行すればいいか分かるようにするためのもので、QAでテキストが切れるのを防ぐ目的だった。",
        tools: [
            {name: "Javascript"},
            {name: "HTML"},
            {name: "CSS"},
        ],
        link1: "https://github.com/nmarie3/character_cutoff",
        link2: "",
        status:"完了",
        type: "仕事で利用",
    },
    {
        id: "11",
        title:"Coming Soon",
        src: "/images/comingSoon.jpg",
        summary: "麻雀関係のアプリを開発中。",
        tools: [
            {name: "MySQL"},
            {name: "Docker"},
            {name: "Golang"},
            {name: "Typescript"},
        ],
        link1: "",
        link2: "",
        status:"作成中",
        type: "練習",
    },
]

const getAllDev = () => {
    return devProjectsData;
}

const getOneDev = (id: string) => {
    return devProjectsData.find(devProject => devProject.id === id);
}

export {getAllDev, getOneDev}
