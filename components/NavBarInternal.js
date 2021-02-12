import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";
import ButtonActiveInternal from "../components/ButtonActiveInternal";
import ButtonMobileActive from "../components/ButtonMobileActive";
import styles from "../styles/components/NavBar.module.scss";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(0),
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  appbar: {
    background: "transparent",
    boxShadow: "none",
  },
  logo: {
    maxWidth: 200,
  },
}));

export default function NavBarInternal() {
  const router = useRouter();
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  console.log(router);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <ButtonMobileActive
          className={
            router.asPath == "/" || router.asPath == "/screening"
              ? styles.buttonMobileActive
              : styles.buttonMobileActive
          }
          color="inherit"
          href="/what-is-offsetting"
        >
          What is offsetting?
        </ButtonMobileActive>
      </MenuItem>
      <MenuItem>
        <ButtonMobileActive
          className={
            router.asPath == "/" || router.asPath == "/screening"
              ? styles.buttonMobileActive
              : styles.buttonMobileActive
          }
          color="inherit"
          href="/about-us"
        >
          About Us
        </ButtonMobileActive>
      </MenuItem>
      <MenuItem>
        <ButtonMobileActive
          className={
            router.asPath == "/" || router.asPath == "/screening"
              ? styles.buttonMobileActive
              : styles.buttonMobileActive
          }
          color="inherit"
          href="/contact"
        >
          Contact
        </ButtonMobileActive>
      </MenuItem>
      <MenuItem>
        <Button
          className={
            router.asPath == "/" || router.asPath == "/screening"
              ? styles.buttonMobileActive
              : styles.buttonMobileActive
          }
          href="/screening"
          color="inherit"
          target="_blank"
        >
          Get Started
        </Button>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Button edge="start" color="inherit" href="/">
            <img src="img/logo-blue.png" alt="logo" className={classes.logo} />
          </Button>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <ButtonActiveInternal
              buttonClass="buttonActiveInternal"
              color="inherit"
              urlLink="/why-offsetting"
              href="/why-offsetting"
            >
              Why offsetting?
            </ButtonActiveInternal>
            <ButtonActiveInternal
              buttonClass="buttonActiveInternal"
              color="inherit"
              urlLink="/about-us"
              href="/about-us"
            >
              About Us
            </ButtonActiveInternal>
            <ButtonActiveInternal
              buttonClass="buttonActiveInternal"
              color="inherit"
              urlLink="/contact"
              href="/contact"
            >
              Contact
            </ButtonActiveInternal>
            <ButtonActiveInternal
              buttonClass="buttonCalculate"
              color="inherit"
              urlLink="/calculate"
              href="/calculate"
            >
              Calculate
            </ButtonActiveInternal>
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
  );
}
