import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"



function Planes(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-14">
                Planes               
            </div>

            <Footer/>
            
        </Layout>
    )
}
export default Planes