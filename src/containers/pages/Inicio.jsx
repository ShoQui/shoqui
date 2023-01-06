import Header from "components/home/Header"
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"



function Inicio(){
    return(
        <Layout>
            <Header/>
            <Navbar/>            
            <Footer/>
            
        </Layout>
    )
}
export default Inicio