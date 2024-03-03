import React from 'react'
import MyModal from './Component/MyModal'
import PhoneAuth from './Component/PhoneAuth'

const Home = () => {
  return (
   <>
   <MyModal child={<PhoneAuth/>}/>
   </>
  )
}

export default Home