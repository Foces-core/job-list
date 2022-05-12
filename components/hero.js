import React from 'react'
import Link from 'next/link'

function Welcome(){
    return(
<div className="hero min-h-screen bg-base-200">
  <div className="flex-col hero-content lg:flex-row-reverse  p-0 w-screen">
    <img src="/homepage.png" className="md:mb-5 md:basis-1/2 md:w-2/4"/> 
      <div className="px-12 py-6 md:basis-1/2 md:w-2/4 w-96 md:p-24">
          <h1 className=" text-2xl text-left mb-5 md:text-4xl font-bold ">
            Find Unique career <br></br>
            opportunities for college <br></br>
            students
          </h1> 
        <p className="mb-5">
          Explore latest scholarships and job <br></br> 
          opportunities for college students.
        </p>
            <Link href='/scholarships'>
                   <button id="#scholarships" className="md:mr-6 mb-6 md:w-44 w-full btn btn-primary px-8 bg-primary normal-case font-normal rounded-none">Find Scholarships</button>
 
            </Link>
            <Link href='/jobs'>
                    <button id="#jobs" className="md:w-44 w-full btn btn-primary px-8 bg-primary-focus normal-case font-normal rounded-none">Find FresherJobs</button>

            </Link>
      </div>
  </div>
</div>
)
}

export default Welcome