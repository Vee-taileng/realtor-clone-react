import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Header = () => {
    const urlLocation = useLocation()
  const navigate = useNavigate()
  
    function pathMatchRoute(route) {
        return route === urlLocation.pathname
    }
    return (
      <div className='bg-white border-b shadow-sm sticky top-0 
    z-50'>
          <header className='flex justify-between items-center 
        px-3 max-w-6xl mx-auto'>
            <div className="logo">
                  <img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
                      alt="logo"
                        className='h-5 cursor-pointer'
                        onClick={()=> navigate("/")}
                  />    
              </div>   
              <div className="menu">
                  <ul className='flex space-x-10 '>
              <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400
                         ${pathMatchRoute("/") && "text-black border-b-[3px] border-b-red-500"}`}
                        onClick={()=> navigate("/")}>Home</li>
                        <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400
                         ${pathMatchRoute("/offers") && "text-black border-b-[3px] border-b-red-500"}`}
                        onClick={()=> navigate("/offers")}>Offers</li>
                       <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400
                         ${pathMatchRoute("/sign-in") && "text-black border-b-[3px] border-b-red-500"}`}
                        onClick={()=> navigate("/sign-in")}>Sign in</li>
                  </ul>
              </div>
        </header>
    </div>
  )
}

export default Header
