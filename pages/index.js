import styles from '../styles/Home.module.css'
import {useEffect} from 'react';
import {getFruits} from '../utils/getFruits';
import Navbar from '../components/Navbar';
import Welcome from '../components/hero'
import Head from 'next/head'
import Footer from '../components/Footer';

export default function Home() {

    return (
        <div >
            <Head>
        <title>Scholarfox | Home Page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
            <Navbar/>
            <div className="hero min-h-screen bg-base-200">    
            <Welcome />
            
        </div>
        <Footer/>
      </div>
        
        
)
}