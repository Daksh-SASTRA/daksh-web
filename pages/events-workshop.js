import React, { useEffect,useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'
import EventsWorkshop from '../components/EventsWorkshop/EventsWorkshop'

function Events() {
    const { query } = useRouter();
    const [number,setNumber] = useState(0);

    useEffect(() => {
        if(query.q === 'events'){
            setNumber(0);
        }else if(query.q === 'workshops'){
            setNumber(1);
        }else if(query.q === 'hackathons'){
            setNumber(2);
        }
        console.log(query);
    },[query])

    return (
        <div>
            <Head>
                <title>Daksh 2022 - Events/Workshop/Hackathon</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <Nav />
                <EventsWorkshop number={number}/>
                <Footer />
            </main>
        </div>
    )
}

export default Events
