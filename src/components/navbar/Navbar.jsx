import React from 'react'

const Navbar = ({ onOpenModal, onShowHidden }) => {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container-fluid">
                    <a
                        href="#"
                        className="navbar-brand"
                        onClick={(e) => {
                            e.preventDefault();
                            onOpenModal();
                        }}
                    >
                        Launch Modal
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li id="visualize" className="nav-item">
                                <a className="nav-link active" href="#" onClick={(e) => { e.preventDefault(); onShowHidden(); console.log("hello") }}>Visualize</a>
                            </li>
                            <li id="features" className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li id="Pricing" className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
