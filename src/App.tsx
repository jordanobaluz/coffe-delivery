import { ShoppingCart } from 'phosphor-react'
import { ThemeProvider } from 'styled-components'
import './App.css'
import './global.css'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
    </ThemeProvider>
      )
}

export default App
