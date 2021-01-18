import React from 'react'
import NavBar from '../components/NavBar'
import Questions from '../components/Questions'

export default function Index() {
  return (
    <>
      <NavBar />
      <Questions currentQuestion={0} />
    </>
  )
}