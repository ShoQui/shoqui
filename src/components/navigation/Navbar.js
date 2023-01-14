import {connect} from 'react-redux'
import {NavLink, Link} from 'react-router-dom'
import comensar_cs from 'assets/img/loadingB.gif'
import logo_lg from 'assets/img/logoNav.gif'

import { useState } from 'react'


function Navbar(){

    const [loading,setloading]=useState(true)
    
    window.onscroll = function() {scrollFunction()}        

    function scrollFunction() {
        if(document.getElementById('navbar')){
            if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
                document.getElementById('navbar').classList.add('shadow-navbar');
                document.getElementById('navbar').classList.add('bg-black');
                                
            }else{
                document.getElementById('navbar').classList.remove('shadow-navbar');
                document.getElementById('navbar').classList.remove('bg-black');
                                
            }
        }
        
    }
    
    

    return(
        <nav id='navbar' className='w-full py-2 top-0 z-40 fixed'>
            <div className='px-4 sm:px-6'>
                <div className='-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-2 px-2'>
                    <Link to='/' className='ml-6 mt-4 '>
                        
                        <img src={logo_lg} width={222} />
                    </Link>
                    <div className='ml-4 mt-4 flex-shrink-0'>
                        <NavLink to='/inicio' className='text-xs inline-flex font-normal leading-6 text-zinc-200 border-b border-transparent hover:border-zinc-200 hover:text-purple-200-accent  mx-3'>Inicio</NavLink>
                        <NavLink to='/servicios' className='text-xs inline-flex font-normal leading-6 text-zinc-200 border-b border-transparent hover:border-zinc-200 hover:text-purple-200-accent  mx-3'>Servicios</NavLink>
                        <NavLink to='/nosotros' className='text-xs inline-flex font-normal leading-6 text-zinc-200 border-b border-transparent hover:border-zinc-200 hover:text-purple-200-accent  mx-3'>Nosotros</NavLink>
                        <NavLink to='/planes' className='text-xs inline-flex font-normal leading-6 text-zinc-200 border-b border-transparent hover:border-zinc-200 hover:text-purple-200-accent  mx-3'>Planes</NavLink>
                        <NavLink to='/blog' className='text-xs inline-flex font-normal leading-6 text-zinc-200 border-b border-transparent hover:border-zinc-200 hover:text-purple-200-accent  mx-3'>Blog</NavLink>
                        <NavLink to='/contacto' className='text-xs inline-flex font-normal leading-6 text-zinc-200 border-b border-transparent hover:border-zinc-200 hover:text-purple-200-accent  mx-3'>Contacto</NavLink>
                        <Link to='comenzar' type="button" className="ml-8 relative inline-flex items-center rounded border border-transparent mx-2 bg-zinc-300 px-2 py-0.5 text-xs font-medium text-black shadow-sm transition duration-300 ease-in-out hover:bg-transparent hover:text-zinc-200 hover:border-2 hover:border-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-300 focus:ring-offset-1"
                        > Comencemos <img src={comensar_cs} className='ml-1 w-4 '/></Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

const mapStateToProps=state=>({

})

export default connect(mapStateToProps, {

}) (Navbar)