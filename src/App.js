

import { ThemeProvider } from "styled-components";
import {Container} from "./components/styles/Container.styled"
import Header from "./components/Header";
import {GlobalStyles } from "./components/styles/Global";
import content from "./content";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  const theme={
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer:'black',
  },
  mobile: '768px '}
  return (
    <>
    <GlobalStyles />
    <Header />
<Container>
  {content.map((item,index)=>(<Card key ={index } item ={item} />))}
</Container>
<Footer />
</>

 );
}

export default App;
