import { useEffect, useState } from 'react';
import './App.css';
import Header from './component/header/header';
import Footer from './component/footer/footer';
import Content from './component/content/content';
function App() {
  const titleDefault = "HIRAGANA";
  const arrayHiragana = [
    {
      "あ": "A"
    },
    {
      "い": "I"
    },
    {
      "う": "U"
    },
    {
      "え": "E"
    },
    {
      "お": "O"
    },
    {
      "か": "Ka"
    },
    {
      "き": "Ki"
    },
    {
      "く": "Ku"
    },
    {
      "け": "Ke"
    },
    {
      "こ": "Ko"
    },
    {
      "さ": "Sa"
    },
    {
      "し": "Shi"
    },
    {
      "す": "Su"
    },
    {
      "せ": "Se"
    },
    {
      "そ": "So"
    },
    {
      "た": "Ta"
    },
    {
      "ち": "Chi"
    },
    {
      "つ": "Tsu"
    },
    {
      "て": "Te"
    },
    {
      "と": "To"
    },
    {
      "な": "Na"
    },
    {
      "に": "Ni"
    },
    {
      "ぬ": "Nu"
    },
    {
      "ね": "Ne"
    },
    {
      "の": "No"
    },
    {
      "は": "Ha"
    },
    {
      "ひ": "Hi"
    },
    {
      "ふ": "Fu"
    },
    {
      "へ": "He"
    },
    {
      "ほ": "Ho"
    },
    {
      "ま": "Ma"
    },
    {
      "み": "Mi"
    },
    {
      "む": "Mu"
    },
    {
      "め": "Me"
    },
    {
      "も": "Mo"
    },
    {
      "や": "Ya"
    },
    {
      "ゆ": "Yu"
    },
    {
      "よ": "Yo"
    },
    {
      "ら": "Ra"
    },
    {
      "り": "Ri"
    },
    {
      "る": "Ru"
    },
    {
      "れ": "Re"
    },
    {
      "ろ": "Ro"
    },
    {
      "わ": "Wa"
    },
    {
      "を": "Wo"
    },
    {
      "ん": "N"
    }
  ];
  const katakana = [
    {
      "ア": "A"
    },
    {
      "イ": "I"
    },
    {
      "ウ": "U"
    },
    {
      "エ": "E"
    },
    {
      "オ": "O"
    },
    {
      "カ": "Ka"
    },
    {
      "キ": "Ki"
    },
    {
      "ク": "Ku"
    },
    {
      "ケ": "Ke"
    },
    {
      "コ": "Ko"
    },
    {
      "サ": "Sa"
    },
    {
      "シ": "Shi"
    },
    {
      "ス": "Su"
    },
    {
      "セ": "Se"
    },
    {
      "ソ": "So"
    },
    {
      "タ": "Ta"
    },
    {
      "チ": "Chi"
    },
    {
      "ツ": "Tsu"
    },
    {
      "テ": "Te"
    },
    {
      "ト": "To"
    },
    {
      "ナ": "Na"
    },
    {
      "ニ": "Ni"
    },
    {
      "ヌ": "Nu"
    },
    {
      "ネ": "Ne"
    },
    {
      "ノ": "No"
    },
    {
      "ハ": "Ha"
    },
    {
      "ヒ": "Hi"
    },
    {
      "フ": "Fu"
    },
    {
      "ヘ": "He"
    },
    {
      "ホ": "Ho"
    },
    {
      "マ": "Ma"
    },
    {
      "ミ": "Mi"
    },
    {
      "ム": "Mu"
    },
    {
      "メ": "Me"
    },
    {
      "モ": "Mo"
    },
    {
      "ヤ": "Ya"
    },
    {
      "ユ": "Yu"
    },
    {
      "ヨ": "Yo"
    },
    {
      "ラ": "Ra"
    },
    {
      "リ": "Ri"
    },
    {
      "ル": "Ru"
    },
    {
      "レ": "Re"
    },
    {
      "ロ": "Ro"
    },
    {
      "ワ": "Wa"
    },
    {
      "ヲ": "Wo"
    },
    {
      "ン": "N"
    }
  ]
  const [title, setTitle] = useState(titleDefault);
  const [data, setData] = useState(arrayHiragana);
  const [active, setActive] = useState(1);
  useEffect(()=>{
    setData(title === "HIRAGANA" ? arrayHiragana : title === "KATAKANA" ? katakana : [...arrayHiragana, ...katakana]);
  },[title]);
  return (
    <div className="app">
      <Header title={title} />
        <div className='tabMenu'>
          <button className={active===1 ? "active":''} onClick={()=>{setTitle("HIRAGANA");setActive(1)}}>Hiragana</button>
          <button className={active===2 ? "active":''} onClick={()=>{setTitle("KATAKANA");setActive(2)}}>Katakana</button>
          <button className={active===3 ? "active":''} onClick={()=>{setTitle("CUSTOM");setActive(3)}}>All</button>
        </div>
      <Content data={data}/>
      <Footer />
    </div>
  );
}

export default App;
