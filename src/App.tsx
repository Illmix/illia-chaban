import './App.css'
import Layout from "./layout/Layout.tsx";
import Header from "./sections/left-side/components/header/Header.tsx";
import LeftSide from "./sections/left-side/LeftSide.tsx";
import Socials from "./sections/left-side/components/socials/Socials.tsx";

function App() {

  return (
    <Layout>
        <LeftSide>
            <Header/>
            <Socials/>
        </LeftSide>
    </Layout>
  )
}

export default App
