import React from 'react'

const Navbar = (props) => {
    return (
        <div className="row navRow">
            <div className="col-md-6">
                <h1 className="title">Weather app</h1>
            </div>
            <div className="col-md-6">
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