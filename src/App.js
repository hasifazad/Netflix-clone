import React from 'react'
import './App.css'
import Banner from './components/Banner'
import Row from './components/Row'
import Navbar from './components/Navbar'

import { trendings } from './constants/Constants'
import { action } from './constants/Constants'



function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Row url={trendings} title='Netflix Originals' />
      <Row url={action} title='Actions' />
    </div>
  )
}

export default App
