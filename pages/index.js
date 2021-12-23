import styles from '../styles/Home.module.css'
import {useEffect} from 'react';
import {getFruits} from '../utils/getFruits';
import Navbar from '../components/Navbar';
import Welcome from '../components/hero'

export default function Home() {
    useEffect(()=>{
        getFruits();
      },[])

    return (
        <div>
            <Navbar/>
            <div className="hero min-h-screen bg-base-200">
        
          <div className="max-w-md">
            <Welcome/>
          </div>
        </div>
      </div>
        
        
)
}