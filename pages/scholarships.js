import styles from '../styles/Home.module.css'
import {useEffect,useState} from 'react';
import {getScholar} from '../utils/getScholar';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import Layout from '../components/Layout';

const Scholarships=()=> { 
    return (
      <>
        <Navbar />
        <div className="hero min-h-screen bg-white-200">
        <div className=" hero-content">
          <div className="max-w-3/4">
            <h1 className="text-center mb-14 text-5xl font-bold text-blue-500">
                  Explore Scholarships
            </h1>
            <Layout />
          </div>
        </div>
        </div>
        </>
)
}

export default Scholarships;
