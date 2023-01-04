import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"



function Nosotros(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-14">
                Nosotros          
            </div>

            <Footer/>
            
        </Layout>
    )
}
export default Nosotros