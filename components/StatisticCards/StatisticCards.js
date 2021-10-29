import React,{useState, useEffect, useRef} from 'react'
import CountUp from 'react-countup'
import styles from './statisticCards.module.css'

function useOnScreen(ref, rootMargin = "0px") {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);
  const [comp, setComp] = useState(true);
  useEffect(() => {
    if(comp){
      const observer = new IntersectionObserver(
        ([entry]) => {
          // Update our state when observer callback fires
          setIntersecting(entry.isIntersecting);
        },
        {
          rootMargin,
        }
      );
      if (ref.current) {
        observer.observe(ref.current);
      }
    }
    return () => {
      setComp(false);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount
  return isIntersecting;
}

function StatisticCards(){
  const ref = useRef()
  const isVisible = useOnScreen(ref)
  
    return (
        <div className={styles.container} ref={ref}>
            {console.log(isVisible)}
            <div className={styles.item} >
              <p id="counter">{ isVisible && <CountUp start={0} duration={2} end={40} className={styles.counter}/>}+<br/><span>Events</span></p>
            </div> 
            <div className={styles.item}>
              <p id="counter" className={styles.counterCenter}>{ isVisible && <CountUp start={0} duration={2} end={500} className={styles.counter}/>}K<br/><span>Prize Pool</span></p>
            </div>
            <div className={styles.item}>
              <p id="counter">{ isVisible && <CountUp start={0} duration={2} end={1500} className={styles.counter}/>}+<br/><span>Participants</span></p>
            </div>
        </div>
    )
}
  
export default StatisticCards
