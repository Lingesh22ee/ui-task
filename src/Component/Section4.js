import React from "react";
import Python from './Helper/images/python.png'
import iost from './Helper/images/iost-(iost).png'
import Vector3 from './Helper/images/Vector2.png'
import Dots from './Helper/images/Dots 8px.1.png'
import Rectangle2 from './Helper/images/Rectangle 497.png';
function Section4() {
    return (
        <>
            <div className="container">
                <div className="row text-align-center justify-content-center bg-sec4">
                    <div className="mot-bg">
                    <h4 className="text-warning text-center mt-5 mb-4">MOT CONSECTET</h4>
                    <h3 className="header text-center mb-5">AMET,CONSECTET IQUIT</h3></div>
                    <div className="col-md-4">
                        <div className="position-relative">
                            <div className="card shadow w-20 position-relative card-2 p-4">
                                <div className="inner container">
                                    <img src={Python} className="h-5 text-dark icon-height" />
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">MOT<span className="h6"> CONSECTET</span></h4>
                                    <p className="card-text">
                                        Then Create your Pirate Team and enter the Grand Line.
                                        Lorem totam maiores! Placeat, mollitia esse odio autem
                                    </p>
                                </div>
                            </div>
                            <img src={Dots} alt="" className="overload" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow w-20 card-2 p-4">
                            <div className="container">
                                <img
                                    src={iost}
                                    className="bg-header icon-height">
                                </img>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">MOT<span className="h6"> CONSECTET</span></h4>
                                <p className="card-text">
                                    Then Create your Pirate Team and enter the Grand Line.
                                    Lorem totam maiores! Placeat, mollitia esse odio autem
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="position-relative">
                            <div className="card shadow w-20 position-relative card-2 p-4">
                                <div className="inner container">
                                    <img
                                        src={Vector3}
                                        className="icon-height">
                                    </img>
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">MOT<span className="h6"> CONSECTET</span></h4>
                                    <p className="card-text">
                                        Then Create your Pirate Team and enter the Grand Line.
                                        Lorem totam maiores! Placeat, mollitia esse odio autem
                                    </p>
                                </div>
                            </div>
                            <img src={Rectangle2} alt="" className="overload right" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Section4