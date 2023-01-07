import { Typewriter } from 'react-simple-typewriter'
import { Link } from 'react-router-dom'
import videoBg from 'assets/video/Fondo.mp4'
import logotipo_lg from 'assets/img/logotipo.png'


function Header(){
    return(
        <main>
          <div className="w-full  bg-black bg-opacity-60 top-0 content">
            <div className="-z-10 w-full  bg-black top-0 content">
              <video src={videoBg} autoPlay loop muted />
            </div>
          </div>

        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-3xl pt-20 sm:pt-40 sm:pb-40">
            <div>
              <div className="hidden  sm:flex sm:justify-center">
                <div className="relative">
                <img src={logotipo_lg} width={444} className='' />
                </div>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-slate-200 tracking-wide sm:text-center sm:text-4xl pt-4 pb-2 ">
                  Nosotros
                </h3>
                    <h2 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl py-2 ">                        
                        <span style={{ color: '#d500f9', fontWeight: 'bold' }}>
                        <Typewriter
                        words={[' LO HACEMOS', ' DISEÑAMOS', ' PRODUCIMOS', 'PUBLICAMOS', ' NOS ENCARGAMOS']}
                        loop={0}
                        cursor
                        cursorStyle='|'
                        cursorColor='#18181b'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        // onLoopDone={handleDone}
                        // onType={handleType}
                        />
                        </span>                        
                    </h2>
                
                <ul className='flex gap-8 place-content-center pt-8 pb-4'>
                    <li className='inline-flex py-1 px-2 border-t border-b  text-zinc-100 hover:border-b-2 hover:border-b-zinc-50 hover:border-t-2 hover:border-t-zinc-50'> <Link to='/planes/paquetes' >Aplicaciones</Link> </li>
                    <li className='inline-flex py-1 px-2 border-t border-b  text-zinc-100 hover:border-b-2 hover:border-b-zinc-50 hover:border-t-2 hover:border-t-zinc-50'> <Link to='/planes/paquetes' >Contenidos</Link> </li>
                    <li className='inline-flex py-1 px-2 border-t border-b  text-zinc-100 hover:border-b-2 hover:border-b-zinc-50 hover:border-t-2 hover:border-t-zinc-50'> <Link to='/planes/paquetes' >Video Juegos</Link> </li>
                    <li className='inline-flex py-1 px-2 border-t border-b  text-zinc-100 hover:border-b-2 hover:border-b-zinc-50 hover:border-t-2 hover:border-t-zinc-50'> <Link to='/planes/paquetes' >Publicaciones</Link> </li>
                </ul>
                
                <div className="mt-8 flex gap-x-4 sm:justify-center">
                  <a
                    href="#"
                    className="inline-block rounded bg-zinc-300 px-4 py-1 text-base font-semibold text-black shadow-sm ring-2 ring-zinc-300 hover:ring-zinc-200 hover:bg-transparent hover:text-zinc-200"
                  >Comencemos</a>
                  <a
                    href="#"
                    className="inline-block rounded bg-zinc-300 px-4 py-1 text-base font-semibold text-black shadow-sm ring-2 ring-zinc-300 hover:ring-zinc-200 hover:bg-transparent hover:text-zinc-200"
                  >
                    Demostración</a>
                </div>
              </div>              
            </div>
          </div>
        </div>
      </main>
    )
}

export default Header