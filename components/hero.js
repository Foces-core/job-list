import React from 'react'
import Link from 'next/link'

function Welcome(){
    return(
<div className="hero min-h-screen bg-base-200">
  <div className="flex-col hero-content lg:flex-row-reverse">
    <img src="/homepage.png" className="max-w-sm rounded-lg shadow-2xl" /> 
    <div>
      <h1 className="mb-5 text-5xl font-bold">
            Find Unique career opportunities for college students
          </h1> 
      <p className="mb-5">
      Explore latest scholarships and job opportunities for college students.
      </p>
            <Link href='/scholarships'>
                   <button id="#scholarships" className="mr-6 btn btn-primary bg-primary">Find Scholarships</button>
 
            </Link>
            <Link href='/jobs'>
                    <button id="#jobs" className="btn btn-primary bg-primary-focus">Find FresherJobs</button>

            </Link>
    </div>
  </div>
</div> 
)
}

export default Welcome