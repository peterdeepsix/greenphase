import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

import { makeStyles } from "@material-ui/core/styles"
import {
  Container,
  AppBar,
  Button,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
} from "@material-ui/core"
import { siteMetadata } from "../../gatsby-config"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import InboxIcon from "@material-ui/icons/MoveToInbox"
import MailIcon from "@material-ui/icons/Mail"
import clsx from "clsx"

const useStyles = makeStyles(theme => ({
  header: {
    backgroundColor: theme.palette.primary.main,
  },
  cacheinvalidator: {
    backgroundColor: theme.palette.primary.main,
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: "250",
  },
  fullList: {
    width: "auto",
  },
}))

const Header = ({ siteTitle }) => {
  const classes = useStyles()

  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setDrawerOpen(!drawerOpen)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="regular">
          <Typography align="justify" variant="h4" className={classes.title}>
            Green Phase
          </Typography>
          <IconButton
            edge="false"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
            size="large"
          >
            <MenuIcon color="inherit" fontSize="large" />
          </IconButton>
          <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer}>
            <List className={classes.list}>
              <ListItem button>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="About" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Process" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Ecology" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Contact" />
              </ListItem>
            </List>
          </Drawer>
        </Toolbar>
      </AppBar>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
