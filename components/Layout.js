import React from 'react'
import Card from './Card';
import {getScholar} from '../utils/getScholar';
import { useState,useEffect } from 'react';


function Layout() {
    const [scholarships,getScholarships] = useState([]);
    useEffect(()=>{
        scholarships = getScholar()
        console.log(scholarships.get)
        
    })
    // scholarships.map((scholarship)=>{
    //     console.log(scholarship);
    // })
    console.log(scholarships.values)
    return (
        <Card />
    )
}

export default Layout;
