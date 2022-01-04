
import Navbar from '../components/Navbar';
import Layout from '../components/Layout';

const Scholarships=()=> { 
    return (
      <>
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
        </>
)
}

export default Scholarships;
