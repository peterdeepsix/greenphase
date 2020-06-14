import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import {
  Container,
  AppBar,
  Button,
  Toolbar,
  Typography,
} from "@material-ui/core"
import { siteMetadata } from "../../gatsby-config"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"

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
}))

// let cat = "string"

// const jerrysCat = { jerrysKey: cat }

// console.log("jerrysCat", jerrysCat)

const Header = ({ siteTitle }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" className={classes.title}>
            Green Phase
          </Typography>
          <Button color="inherit">Login</Button>
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
