import React, {useState,useEffect} from 'react'

function Count({time,setTime}) {
    useEffect(()=> {
        let counter = setInterval(() => {
                    console.log(time);
                    if(time == 0)
                        clearInterval(counter);
                    else{
                        setTime(time-1);
                    }
                },1000)
        return () => {
            clearInterval(counter);
        }
    });
    return (
        <span>
            {`Launching in.. ${time}`}
        </span>
    )
}

export default Count
