import React from 'react'
import TopBar from '../components/TopBar'
import Questions from '../components/Questions'
import questionsList from '../json/questions.json'

export default function Index() {
  return (
    <>
      <TopBar />
      <Questions />
    </>
  )
}