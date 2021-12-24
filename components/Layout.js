import React from 'react'
import Card from './Card';
import {getScholar} from '../utils/getScholar';
import { useState,useEffect } from 'react';


function Layout() {
    const elements = []
    const [scholarships,getScholarships] = useState([]);
    useEffect(()=>{
        scholarships = getScholar()  
        
    scholarships.then((a)=>{
            return(
                a.map((r)=>{
                    // console.log(r);
                    const name = r.title;
                    console.log(name);
                    elements.push(<Card details = {name} />)                   
                } )
            )
            
        })
        console.log(elements);
    })
    
    // scholarships.map((scholarship)=>{
    //     console.log(scholarship);
    // })
    return (
        <>
        {elements}
        </>
        
    )
}

export default Layout;
