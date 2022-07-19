import { Header } from './components/header/header'
import { Form } from './components/form/form'
import { Footer } from './components/footer/footer';
import GlobalStyles from './globalStyles';

function App(txt: string) {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Form />
      <Footer />
    </div>
  )
}

export default App;
