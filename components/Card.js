import React from 'react'
import { useState,useEffect } from 'react';
import {firestore} from '../utils/firebase';
import { collection, getDocs } from "firebase/firestore";

function Card({title, description, deadline, eligibility}) {
    return (
        <div className="card lg:card-side border-2 border-blue-500 text-left bg-stone-50 m-4">
            <div className="card-body">
            <h2 className="card-title font-bold">{title}</h2> 
            <p className="text-gray-500">{description}</p> 
            <div className="flex flex-row items-center justify-between mt-2">
                <div className="card-actions">
                    <div className="flex flex-col">
                        <p>Last date: {deadline}</p> 
                        <p>Eligibility: {eligibility}</p>
                    </div>                
                </div>
                <button className="btn bg-blue-100 text-blue-500 border-none">Visit Website</button>
            </div>
            </div>
      </div>      
    )
}

export default Card
