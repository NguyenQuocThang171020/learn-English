import './content.css'
import { useState,useEffect } from 'react';
const Content = (props) => {
    const [show, setShow] = useState(false);
    const [count, setCount] = useState(0);
    const [type, setType] = useState(false);
    const [dataList, setDatalist] = useState(props.data);
    const [key, setKey] = useState(Object.keys(dataList[count]));
    const [value, setValue ] = useState(Object.values(dataList[count]));
    const [active, setActive] = useState(1);
    const randomWord=()=>{
        setType(true);
        setCount(0);
        const shuffledArray = [...props.data];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        setDatalist(shuffledArray);
    }
    const autoWord =()=>{
        setType(false);
        setCount(0);
        setDatalist(props.data);
    }
    const learnWord=()=>{
        setShow(true);
        setTimeout(() => {
            setShow(false);
        }, 1000);
    }

    const setPrevious = ()=>{
        setCount(count - 1);
    }

    const setNext = ()=>{
        setCount(count + 1);
    }

    useEffect(() => {
       setDatalist(props.data);
       setKey(Object.keys(props.data[count]));
       setValue(Object.values(props.data[count]));
       setCount(0);
      }, [props.data]);
    useEffect(() => {
        setKey(Object.keys(dataList[count]));
        setValue(Object.values(dataList[count]));
      }, [count]);
    return ( 
        <div className="container">
            <div className="view">
                <div className="render-char">
                    {show ? (<p className='char-vn'>{value}</p>): (<p className='char-jp'>{key}</p>)}
                </div>
                <div className="mode">
                    <button className={active===1 ? "active":'disable'} disabled={type ? true : false} onClick={()=>{randomWord();setActive(1)}}>Random</button>
                    <button className={active===2 ? "active":'disable'} disabled={type ? false : true} onClick={()=>{autoWord();setActive(2)}}>Auto</button>
                    <button onClick={()=>learnWord()}>Learn</button>
                </div>
            </div>
            <div className="action-more">
                <button className={count===0 ? "disable":''} disabled={count===0 ? true : false} onClick={()=>setPrevious()}>Previous</button>
                <button className={count===(dataList.length-1) ? "disable":''} disabled={count===(dataList.length-1) ? true : false} onClick={()=>setNext()}>Next</button>
            </div>
        </div>
     );
}
 
export default Content;
