import React from "react";
import section5 from './Helper/images/Section5.jpg.png'
import { AiOutlineArrowRight } from "react-icons/ai";
function Section5(){
    return(
        <>
        <div className="py-5 container" role="listbox">
            <div className="item mt-5">
                <div className="row row-sm">
                    <div className="col-md-6">
                        <div className="inner-bg">
                            <img 
                            src={section5}  
                            alt="" 
                            className="w-75 h-200 img-responsive">
                            </img>
                        </div>
                    </div>
                    <div className="col-md-6 mt-4">
                        <div className="team-info">
                            <h4 className="text-warning mb-4">MOT CONSECTET</h4>
                            <h3 className="header mb-2">AMET,CONSECTET</h3>
                            <div className="team-div">
                                <p className="mb-4">
                                    Then Create your Pirate Team and enter the Grand Line.
                                    Lorem totam maiores! Placeat, mollitia esse odio autem
                                    recusandae laborum corrupti quaerat minus dolorem earum fugit, molestias
                                </p>
                            </div>
                            <button className="btn btn-lg text-white rounded">
                                 GET STARTED&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<AiOutlineArrowRight/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
        </>
    )
}
export default Section5