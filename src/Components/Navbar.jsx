import React from 'react'

const Navbar = () => {
    return(
        <div class = "main-nav ">
            <ul className = "grid grid-cols-4 gap-5 p-0 list-none">
                <li class = "bg-primary block no-underline p-3 text-center text-dark uppercase text-lg shadow-lg hover:bg-dark hover:text-light">
                    <a href = "#">
                        Home
                    </a>
                </li>
                <li class = "bg-primary block no-underline p-3 text-center text-dark uppercase text-lg shadow-lg hover:bg-dark hover:text-light">
                    <a href = "#">
                        About
                    </a>
                </li>
                <li class = "bg-primary block no-underline p-3 text-center text-dark uppercase text-lg shadow-lg hover:bg-dark hover:text-light">
                    <a href = "#">
                        Services
                    </a>
                </li>
                <li class = "bg-primary block no-underline p-3 text-center text-dark uppercase text-lg shadow-lg hover:bg-dark hover:text-light">
                    <a href = "#">
                        Contact
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;