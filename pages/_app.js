import '../styles/globals.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    AOS.init({    
      offset: 100, 
      delay: 0,
      duration: 1000,
      easing: 'ease',
      once: true,
      mirror: false,
      anchorPlacement: 'top-bottom',
    });
  },[])
  return <Component {...pageProps} />
}

export default MyApp
