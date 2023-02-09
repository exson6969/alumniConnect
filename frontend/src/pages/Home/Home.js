import React from 'react'
import FeaturesCard from '../../components/FeaturesCard/FeaturesCard'
import Header from '../../components/Header/Header'
import ParticlesEffect from '../../components/PaticlesEffect/ParticlesEffect'
import "./Home.css"

const Home = () => {
  return (
    <div>
      <Header />
      <ParticlesEffect />
      <h1 className='welcome-text'>
        Connect with thousands of alumni and relive your memories
      </h1>
      <div className="cardGroup">
      <FeaturesCard title="Easy Event Management" content="The event calendar make it easy for the college to create and manage events."/>
      <FeaturesCard title="Personalized Profiles" content="Provides a platform for alumni to showcase their contact information, work experience, and other relevant details, helping them connect with potential employers, colleagues, and friends."/>
      <FeaturesCard title="Seamless Connections" content="Provides a centralized location for alumni to find contact information for the alumni association and the college, making it easier for alumni to get in touch with the right people and receive prompt responses."/>
      </div>
    
    </div>
  )
}

export default Home