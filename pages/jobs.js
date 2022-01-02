import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import JobLayout from '../components/JobLayout'

export default function Job() {
  return (
    <>
      <Navbar />
      <div className="hero min-h-screen bg-white-200">
        <div className=" hero-content">
          <div className="max-w-3/4">
            <h1 className="text-center m-14 text-2xl font-bold text-blue-500 md:text-black md:text-5xl">
                  Explore Jobs
            </h1>
            <JobLayout />
          </div>
        </div>
      </div>
      </>
)
}

