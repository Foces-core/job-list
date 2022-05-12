import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Footer from './../components/Footer';
export default function About() {
    return (
        <div>
          <Head>
        <title>Scholarfox | About Page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
            <Navbar />
            {/* First Card */}
            <div className="md:card md:card-side bg-base-100 md:m-20 md:justify-between items-center rounded-none md:flex-row-reverse p-8">
            <figure className="card rounded-none" ><img src="/hat-throwing.png" alt="Movie"/></figure>
            <div className="md:w-1/3 md:pt-40 ">
              <h1 className="text-left md:mb-8 text-2xl font-bold text-blue-500 md:text-black md:text-4xl pt-6 mb-6">About Scholarfox</h1>
              <p className="text-base-content">Scholarfox is here to help college students find scholarships and freshers’ job openings. Students looking for scholarships can browse through a list of relevant programs and search for scholarships of their interest.</p>
            </div>
           
          </div>

          {/* Second Card */}
          <div className="md:card md:card-side bg-base-100 md:m-20 justify-between items-center rounded-none p-8">
          <figure className="card rounded-none" ><img src="/graduation.png" alt="Graduation Picture"/></figure>
            <div className="md:w-2/4 pt-10">
              
              <p className="text-base-content mb-8">Considering the sheer amount of scholarship opportunities available around us, this site makes it very easy to get the most out of your college education.</p>
              
              <p className="text-base-content">Scholarfox is a community-based platform that gives you the opportunity to browse through educational jobs, finding your perfect study plan to get you the most out of your time in college. You can also search for scholarships online, ranging from financial aid, university and business-sponsored awards, as well as other sources.</p>          
            </div>
            
          </div>

          {/* Third Card */}
          <div className="md:card md:card-side bg-base-100 md:m-20 justify-between items-center rounded-none md:flex-row-reverse p-8">
          <figure className="card rounded-none" ><img src="/foces-logo.svg" alt="Foces Logo"/></figure>
            <div className="md:w-1/2  ">
              <h2 className="text-left mb-8 text-2xl font-bold text-blue-500 md:text-black md:text-2xl">A Product by FOCES.web team</h2>
              <p className="text-base-content  mb-8">Forum Of Computer Engineering Students (FOCES) is the official forum of the Computer Science and Engineering students of CEC.All CSE students are compulsory members of this forum .Its the platform where students can share , implement and develop their productive ideas.</p>
              <button className="rounded-none btn btn-primary normal-case font-normal bg-blue-700"><a href="https://foces-core.github.io/Foces-Website/">Know more about FOCES</a></button>
            </div>
            
          </div>
          <Footer/>
        </div>
)
}
