import Header from "components/home/Header"
import Incentives from "components/home/Incentives"
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"



function Home(){
    return(
        <Layout>                        
                <Header/>  
                <Navbar/>
                <Incentives/>           
                <Footer/>
            
        </Layout>
    )
}
export default Home