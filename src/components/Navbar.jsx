import React from 'react'

const Navbar = (props) => {
    return (
        <div className="row navRow">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <h2 className="title">Weather app</h2>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <form className="region" onSubmit={(event) => props.changeWeather(event)}>
                    <input 
                        className="regioninput" 
                        placeholder="Enter location (Ex. New York,Dhaka,Mumbai)"
                        onChange={(event) => props.changeRegion(event.target.value)}
                    />
                </form>
            </div>
        </div>
    )
};

export default Navbar;