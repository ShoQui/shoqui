import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"



function Inicio(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-14">
            Inicio                
            </div>

            <Footer/>
            
        </Layout>
    )
}
export default Inicio