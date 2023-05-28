import React, {useState, useEffect}from 'react';
import { memo } from 'react';
const CountDown = (props) => {
    const [count, setCount] = useState(10);

    useEffect(() => {
        if(count===0){
            props.onTimesUp();
            return;
        }
        setTimeout(() => {
            setCount(count - 1);
        }, 1000);
        // let timer = setInterval(()=>{
        //     setCount(count - 1);
        // },1000)
        // return () => (clearInterval(timer))
    }, [count]);

    return (
        <div>{count}</div>
    )
  }
export default memo(CountDown);