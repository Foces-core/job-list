
import Navbar from '../components/Navbar';
import Layout from '../components/Layout';
import Head from 'next/head'
import Footer from './../components/Footer';
const Scholarships=()=> { 
    return (
      <>
      <Head>
        <title>Scholarfox | Scholarships Page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        <Navbar />
        <div className="hero min-h-screen bg-white-200">
          <div className=" hero-content">
            <div className="max-w-3/4">
              <h1 className="text-center m-14 text-2xl font-bold text-blue-500 md:text-black md:text-5xl">
                    Explore Scholarships
              </h1>
              <Layout />
            </div>
          </div>
        </div>
        <Footer/>
        </>
)
}

export default Scholarships;
