import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Link from 'next/link'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}))

export default function TopBar() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            <Link href="/">
              <a>COMPARE CARBON</a>
            </Link>
          </Typography>
          <Button color="inherit">What is offsetting?</Button>
          <Button color="inherit">About Us</Button>
          <Button color="inherit">Contact</Button>
          <Link href="/screening?currentQuestion=0" passHref>
            <Button color="primary" variant="contained">Get Started</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}
