import React from 'react'
import Link from 'next/link'

function Welcome(){
    return(
<div className="hero min-h-screen bg-base-200">
  <div className="flex-col hero-content lg:flex-row-reverse max-w-screen-2xl p-0 w-screen">
    <img src="/homepage.png" className="rounded-lg shadow-2xl basis-1/2 w-2/4"/> 
      <div className="basis-1/2 w-2/4">
          <h1 className="mb-5 text-5xl font-bold ">
            Find Unique career <br></br>
            opportunities for college <br></br>
            students
          </h1> 
        <p className="mb-5">
          Explore latest scholarships and job <br></br> 
          opportunities for college students.
        </p>
            <Link href='/scholarships'>
                   <button id="#scholarships" className="mr-6 btn btn-primary px-8 bg-primary">Find Scholarships</button>
 
            </Link>
            <Link href='/jobs'>
                    <button id="#jobs" className="btn btn-primary px-8 bg-primary-focus">Find FresherJobs</button>

            </Link>
      </div>
  </div>
</div>
)
}

export default Welcome