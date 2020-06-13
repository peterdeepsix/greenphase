import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  button: {
    textTransform: "none",
  },
}));

const onClick = () => {
  console.log('hello universe')
}

const IndexPage = () => {
  const classes = useStyles();
  return (
  <Layout>
    <SEO title="Home" />
    <h1>Hi Jerry</h1>
<<<<<<< HEAD
    <Button onClick={onClick} variant="contained" color="primary" disableElevation size="medium" className={classes.button}>
          Medium
          </Button> 
=======
>>>>>>> b3094561b969b78ae7fa250363e6e4850d3943a1
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)}

export default IndexPage
