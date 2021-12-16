import React from 'react'

function Welcome(){
    return(
<div class="hero min-h-screen bg-base-200">
  <div class="flex-col hero-content lg:flex-row-reverse">
    <img src="/homepage.png" class="max-w-sm rounded-lg shadow-2xl" /> 
    <div>
      <h1 class="mb-5 text-5xl font-bold ">
            Find Unique career opportunities for college students
          </h1> 
      <p class="mb-5">
      Explore latest scholarships and job opportunities for college students.
      </p>
      <button id="#scholarships" class="mr-6 btn btn-primary bg-primary">Find Scholarships</button>
      <button id="#jobs" class="btn btn-primary bg-primary-focus">Find FresherJobs</button>

    </div>
  </div>
</div> 
)
}

export default Welcome