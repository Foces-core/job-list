import React from 'react'
import { useState,useEffect } from 'react';
import {firestore} from '../utils/firebase';
import { collection, getDocs } from "firebase/firestore";
import Link from 'next/link'

function JobCard({company,date,email,link,location,position}) {
    return (
        <div class="card lg:card-side card-bordered shadow-xl mb-7 md:m-7 w-96 md:w-full">
            <div class="card-body">
                <div className='flex flex-row'>
                    <h2 className="card-title font-bold">{position}</h2> 
                    <span className='text-white bg-green-600 badge p-3 text-tiny text-center ml-3 border-0 rounded-sm'>NEW</span>
                </div>
                <p className='text-gray-500 mb-1'>{company}</p> 
                <p className='text-gray-500 mb-1'>{location}</p> 
                <div className='flex flex-col items-start justify-between md:flex-row md:items-center'>
                    <p className='font-semibold mb-3 md:mb-0'>Contact mail : {email} </p> 
                    <a href={link} target='_blank' ><button className="btn  border-none text-blue-600 bg-sky-100">Visit Website</button></a>
                </div>
                <span className='text-blue-500 font-semibold absolute bottom-10 right-5 md:absolute md:top-10 md:right-9'>{date}</span>
            </div>
        </div>
    )
}

export default JobCard
