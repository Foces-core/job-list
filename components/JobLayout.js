import React from 'react'
import {useState,useEffect} from 'react';
import {firestore} from '../utils/firebase';
import {collection, getDocs} from 'firebase/firestore';
import JobCard from './JobCard';

function JobLayout() {
    const [jobs,setJobs] = useState([]);

    useEffect(()=>{
        const getJobs = async() => {
            const querySnapshot = await getDocs(collection(firestore,"jobs"));
            querySnapshot.forEach((doc)=>{
                var data = doc.data();
                setJobs(arr => [data,...arr]);
                console.log(data);
            });
        }
        getJobs();
    },[])
    return (
        <div  className="lg:grid grid-cols-2 gap-8 ">
            {
                jobs.map((job,index) =>((
                    <JobCard key = {index}
                        company = {job.company}
                        date = {job.date}
                        email = {job.email}
                        link = {job.link}
                        location = {job.location}
                        position = {job.position}
                    />
                )))
            }
        </div>
    )
}

export default JobLayout
