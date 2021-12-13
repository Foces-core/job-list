import styles from '../styles/Home.module.css'
import {useEffect} from 'react';
import {getFruits} from '../utils/getFruits';
import Card from '../components/Card';

const Scholarships=()=> {
    useEffect(()=>{
      getFruits(); //check the console to see data coming from firebase
    },[])
    return (
        <div className="hero min-h-screen bg-white-200">
        <div className=" hero-content">
          <div className="max-w-3/4">
            <h1 className="text-center mb-5 text-5xl font-bold text-blue-500">
                  Scholarships
            </h1>
            <Card></Card>
          </div>
        </div>
      </div>
)
}

export default Scholarships;
