
import React from 'react'

const Footer = () => {
    return (


        <div id="kt_app_footer" className="app-footer">
            <div className="app-container container-fluid d-flex flex-column flex-md-row flex-center flex-md-stack py-3">
                <div className="text-dark order-2 order-md-1">
                    <span className="text-muted fw-semibold me-1">© Copyright 2022,</span>
                    <span className="text-gray-800">Ghana Lands Commission.</span> Powered by   
                    <span className='ms-2'><b><a href='https://www.zeusatlasltd.com/' target="_blank" className="text-gray-800 text-hover-primary">Zeus Atals</a></b></span>
                </div>
                {/* <ul className="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
                    <li className="menu-item">
                        <a href="#" target="_blank" className="menu-link px-2">Documentation</a>
                    </li>
                    <li className="menu-item">
                        <a href="#" target="_blank" className="menu-link px-2">T&C</a>
                    </li>
                   
                </ul> */}
            </div>
        </div>


    )
}

export default Footer
