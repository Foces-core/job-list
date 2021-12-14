import styles from '../styles/Home.module.css'
import {useEffect} from 'react';
import {getFruits} from '../utils/getFruits';
import Navbar from '../components/Navbar';

const Scholarships=()=> {
    useEffect(()=>{
      getFruits(); //check the console to see data coming from firebase
    },[])
    return (
        <div>
          <Navbar/>
          <div className="hero min-h-screen bg-base-200">
          <div className="text-center hero-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">
                    Hello there! This is the scholarships page!
                  </h1> 
              <p className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p> 
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
          </div>
        </div>
)
}

export default Scholarships;
