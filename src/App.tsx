import './App.css'
import Layout from "./layout/Layout.tsx";
import Header from "./sections/left-side/components/header/Header.tsx";
import LeftSide from "./sections/left-side/LeftSide.tsx";
import Socials from "./sections/left-side/components/socials/Socials.tsx";
import RightSide from "./sections/right-side/RightSide.tsx";
import Summary from "./sections/right-side/components/Summary.tsx";

function App() {

  return (
    <Layout>
        <LeftSide>
            <Header/>
            <Socials/>
        </LeftSide>
        <RightSide>
            <Summary/>
        </RightSide>
    </Layout>
  )
}

export default App
