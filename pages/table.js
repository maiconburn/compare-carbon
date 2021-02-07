import React from 'react'
import NavBar from '../components/NavBar'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Table from '../components/Table'
import styles from '../styles/Projects.module.scss'
import fetch from 'isomorphic-unfetch'


function Projects({projects}) {
  return (
    <>
      <NavBar />
      <Container maxWidth="lg" className={styles.projects}>
            <Box xs>
                <Table />
            </Box>
      </Container>
    </>
  )
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/hello`)
  const projects = await res.json()

  // Pass data to the page via props
  return { props: { projects } }
}

export default Projects