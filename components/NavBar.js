import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import MoreIcon from '@material-ui/icons/MoreVert'
import ButtonActive from '../components/ButtonActive'
import ButtonMobileActive from '../components/ButtonMobileActive'
import styles from '../styles/Home.module.scss'

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(0),
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}))

export default function TopBar() {
  const classes = useStyles()
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  }

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  }

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <ButtonMobileActive className={styles.buttonMobileActive} color="inherit" href="/what-is-offsetting">
          What is offsetting?
        </ButtonMobileActive>
      </MenuItem>
      <MenuItem>
        <ButtonMobileActive className={styles.buttonMobileActive} color="inherit" href="/about-us">
          About Us
        </ButtonMobileActive>
      </MenuItem>
      <MenuItem>
        <ButtonMobileActive className={styles.buttonMobileActive} color="inherit" href="/contact">
          Contact
        </ButtonMobileActive>
      </MenuItem>
      <MenuItem>
        <Button className={styles.buttonMobileActive} href="/screening" color="inherit" target="_blank">
          Get Started
        </Button>
      </MenuItem>
    </Menu>
  )

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Button edge="start" color="inherit" href="/" >
            <Typography variant="h6" className="MuiTypography-noWrap">
                COMPARE CARBON
            </Typography>
          </Button>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <ButtonActive className={styles.buttonActive} color="inherit" href="/what-is-offsetting">
              What is offsetting?
            </ButtonActive>
            <ButtonActive className={styles.buttonActive} color="inherit" href="/about-us">
              About Us
            </ButtonActive>
            <ButtonActive className={styles.buttonActive} color="inherit" href="/contact">
              Contact
            </ButtonActive>
            <ButtonActive className={styles.buttonGetStarted} color="inherit" href="/screening">
              Get Started
            </ButtonActive>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      
    </div>
  )
}