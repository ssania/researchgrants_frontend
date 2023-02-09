import React from "react";

function Header(){
    return(
        <>
<nav id="navb" className="navbar navbar-inverse">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <div className="navbar-header">
                        <a className="navbar-toggle" data-target="#mobile_menu" data-toggle="collapse"><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span></a>
                        <a href="#" className="navbar-brand">LOGO</a>
                    </div>
                    <nav>
        <ul class='nav-bar'>
            <span class="menu">
            <div className="navbar-collapse collapse" id="mobile_menu">
                        <ul className="nav navbar-nav">
                            <li><a href="/Userpage">Home</a></li>
                            <li><a href="/Grantsadmin">Grants</a></li>
                
                        </ul>
                        <ul className="nav navbar-nav navbar-center">
                            <li>
                                <form action="" className="navbar-form">
                                    <div className="form-group">
                                        <div className="input-group">
                                            <input type="search" name="search" id="" placeholder="Search Grants..." className="form-control"/>
                                            <span className="input-group-addon"><span className="glyphicon glyphicon-search"></span></span>
                                        </div>
                                    </div>
                                </form>
                            </li>
                        </ul>

                        <ul className="nav navbar-nav navbar-right">
                        {/* <li><a href="/Aboutus">About Us</a></li> */}
                            <li><a href="/Queries">Queries </a></li>
                            <li><a href="#"><span className="glyphicon glyphicon-user"></span> Profile</a></li>
                            {/* <li><a href="#" className="dropdown-toggle" data-toggle="dropdown"><span className="glyphicon glyphicon-log-in"></span> Login / Sign Up <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    
                                    <li><a href="/Login">Login</a></li>
                                    <li><a href="/Signup">Sign Up</a></li>
                                </ul>
                            </li> */}
                        </ul>
                    </div>
                {/* <label for="check" class="close-menu"><i class="fas fa-times"></i></label> */}
            </span>
            {/* <label for="check" class="open-menu"><i class="fas fa-bars"></i></label> */}
        </ul>
    </nav>
                </div>
            </div>
        </div>
    </nav>
    </>
    )
    }
export default Header