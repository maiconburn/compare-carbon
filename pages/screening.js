import React from 'react'
import TopBar from '../components/TopBar'
import Questions from '../components/Questions'

export default function Index() {
  return (
    <>
      <TopBar />
      <Questions currentQuestion={0} />
    </>
  )
}