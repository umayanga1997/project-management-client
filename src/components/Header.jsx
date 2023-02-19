import React from 'react'
import { NavLink } from 'react-router-dom'
import "../assets/styles.css"

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">PM</NavLink>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-NavLink" aria-current="page" to="/" >Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-NavLink" to="clients">Clients</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-NavLink" to="employees">Employees</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-NavLink" to="projects">Projects</NavLink>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}
