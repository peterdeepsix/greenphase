import { red } from "@material-ui/core/colors"
import { createMuiTheme } from "@material-ui/core/styles"

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3A7033",
    },
    secondary: {
      main: "#78A1BB",
    },
    accent: {
      main: "#B1D8AB",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fafafa",
    },
  },
})

export default theme
