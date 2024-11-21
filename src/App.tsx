import './App.css'
import Layout from "./layout/Layout.tsx";
import Header from "./sections/left-side/components/header/Header.tsx";
import LeftSide from "./sections/left-side/LeftSide.tsx";

function App() {

  return (
    <Layout>
        <LeftSide>
            <Header/>
        </LeftSide>
    </Layout>
  )
}

export default App
