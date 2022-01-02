import React from 'react'
import { useState,useEffect } from 'react';
import {firestore} from '../utils/firebase';
import { collection, getDocs } from "firebase/firestore";
import Link from 'next/link'

function Card({title, description, deadline, eligibility,link}) {
    return (
        <div className="card lg:card-side text-left shadow-[0_8px_70px_rgba(223,224,225,0.43)] mb-7 md:m-7">
            <div className="card-body">
                <div className='flex flex-row'>
                    <h2 className="card-title font-bold">{title}</h2> 
                    <span className='text-white bg-green-600 badge p-3 text-tiny text-center ml-3 border-0 rounded-sm'>NEW</span>
                </div>            
            <p className="text-gray-500">{description}</p> 
            <div className="flex flex-col items-start justify-between mt-2 md:flex-row md:items-center">
                <div className="card-actions">
                    <div className="flex flex-col">
                        <p className='font-semibold m-1'>Last date: {deadline}</p> 
                        <p className='font-semibold m-1'>Eligibility: {eligibility}</p>
                    </div>                
                </div>
                <a href={link} target='_blank' rel="noreferrer"><button className="btn  border-none text-blue-600 bg-sky-100">Visit Website</button></a>
            </div>
            </div>
      </div>      
    )
}

export default Card
