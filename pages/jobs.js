import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import JobLayout from '../components/JobLayout'
import Head from 'next/head'
import Footer from './../components/Footer';
export default function Job() {
  return (
    <>
    <Head>
        <title>Scholarfox | Jobs Page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <div className="hero min-h-screen bg-white-200">
        <div className=" hero-content flex flex-col">
          <div className="max-w-3/4 ">
            <h1 className="text-center m-14 text-2xl font-bold text-blue-500 md:text-black md:text-5xl">
                  Explore Jobs
            </h1>
            </div>
            <div> <JobLayout/></div>
           
          
        </div>
      </div>
      <Footer/>
      </>
)
}

