import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Logo from "../components/logo"
import SEO from "../components/seo"

import {
  createMuiTheme,
  withStyles,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles"
import { Button, Box, Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  button: {
    backgroundColor: theme.palette.accent.main,
    textTransform: "none",
  },
  box: {
    backgroundColor: theme.palette.accent.main,
    marginTop: 16,
    marginButton: 16,
  },
}))

const onClick = () => {
  console.log("hello universe")
}

const IndexPage = () => {
  const classes = useStyles()
  return (
    <Layout>
      <SEO title="Home" />
      <Box py={2}>
        <Typography variant="h6" align="center">
          Hi Jerry
        </Typography>
      </Box>
      <Button
        onClick={onClick}
        variant="contained"
        disableElevation
        size="medium"
        className={classes.button}
      >
        Medium
      </Button>
      <Box p={3} className={classes.box}>
        asd
      </Box>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Logo />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

export default IndexPage
