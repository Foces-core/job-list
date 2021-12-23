import React from 'react'
import Card from './Card';
import { useState,useEffect } from 'react';
import {firestore} from '../utils/firebase';
import { collection, getDocs } from "firebase/firestore";
import Scholarships from '../pages/scholarships';

function Layout() {
    const [scholarships,setScholarships] = useState([]);

    
    useEffect(()=>{
        const getScholar = async() => {
            const querySnapshot = await getDocs(collection(firestore, "scholarships"));
            querySnapshot.forEach((doc) => {
                // console.log(`${JSON.stringify(doc.data())}`);
                // console.log(doc.data());  
                // return(doc.data());
                var data = doc.data();
                
                setScholarships(arr => [...arr , data]);
                console.log(data);
            
            });
          }
          getScholar();
        
    },[])
    // scholarships.map((scholarship)=>{
    //     console.log(scholarship);
    // })    
        return (
                <div>
                    {
                        scholarships.map((scholarship, index)=>((
                            <Card key={index}
                            title = {scholarship.title}
                            description = {scholarship.description}
                            deadline = {scholarship.deadline}
                            eligibility = {scholarship.eligibility}/>
                        )))
                        }
                    </div>
                
                        
                        
                
                
            
        
    );
}

export default Layout;
