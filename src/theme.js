import { createMuiTheme } from 'material-ui/styles'
import cyan from 'material-ui/colors/cyan'
import red from 'material-ui/colors/red'
import orange from 'material-ui/colors/orange'

const theme = createMuiTheme({
  palette: {
    primary: cyan,
    secondary: {
      ...orange,
      A200: '#FFAB40'
    },
    error: red
  }
})

export default theme
