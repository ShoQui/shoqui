import {connect} from 'react-redux'
import {NavLink, Link} from 'react-router-dom'
import comensar_cs from 'assets/img/blancoSuspensivo.gif'
import logo_lg from 'assets/img/logoP.gif'
import { useState } from 'react'

function Navbar(){

    const [loading,setloading]=useState(true)
    return(
        <nav className='w-full py-3 bg-black top-0 fixed'>
            <div className='px-4 sm:px-6'>
                <div className='-ml-4 -mt-3 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-2 px-2'>
                    <Link to='/' className='ml-6 mt-3'>
                        <img src={logo_lg} width={150} className=''/>
                    </Link>
                    <div className='ml-4 mt-2 flex-shrink-0'>
                        <NavLink to='/inicio' className='text-xs inline-flex font-normal leading-6 text-zinc-400 border-b border-black hover:border-zinc-200 hover:text-zinc-200  mx-3'>Inicio</NavLink>
                        <NavLink to='/servicios' className='text-xs inline-flex font-normal leading-6 text-zinc-400 border-b border-black hover:border-zinc-200 hover:text-zinc-200  mx-3'>Servicios</NavLink>
                        <NavLink to='/nosotros' className='text-xs inline-flex font-normal leading-6 text-zinc-400 border-b border-black hover:border-zinc-200 hover:text-zinc-200  mx-3'>Nosotros</NavLink>
                        <NavLink to='/planes' className='text-xs inline-flex font-normal leading-6 text-zinc-400 border-b border-black hover:border-zinc-200 hover:text-zinc-200  mx-3'>Planes</NavLink>
                        <NavLink to='/blog' className='text-xs inline-flex font-normal leading-6 text-zinc-400 border-b border-black hover:border-zinc-200 hover:text-zinc-200  mx-3'>Blog</NavLink>
                        <NavLink to='/contacto' className='text-xs inline-flex font-normal leading-6 text-zinc-400 border-b border-black hover:border-zinc-200 hover:text-zinc-200  mx-3'>Contacto</NavLink>
                        <Link to='comenzar' type="button" className="ml-12 relative inline-flex items-center rounded-md border border-transparent mx-2 bg-zinc-400 px-4 py-1 text-xs font-medium text-black shadow-sm transition duration-300 ease-in-out hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:ring-offset-1"
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