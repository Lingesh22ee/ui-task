import React from "react";
import CTO from './Helper/images/r.png'
import Leon from './Helper/images/Leon.png'
import philip from './Helper/images/philip.png'
import Arrow from './Helper/images/ARROW.png'
import Streight from './Helper/images/straight.png'
function Scroll(){
    return(
      <>
      <div className="container">
        <div className="d-flex justify-content-between">
          <div>
            <h4 className="text-warning mt-5 mb-4">MOT CONSECTET</h4>
            <h3 className="header mb-5">AMET,CONSECTET SIT QUIS</h3>
          </div>
          <div className="align-self-center">
          <img src={Arrow}/> <span><img src={Streight} className="bg-header"/></span>
          </div>
        </div>
        <div className="d-flex scroll-wrapper mb-5">
          <div className="card item p-4">
            <div className="d-flex">
              <img src={CTO} alt="" />
              <h6>CTO May & Baker<p className="text-muted">Tayo Oshinuma</p></h6>
            </div>
            <p className="card-text content-text mt-4">
              Then Create your Pirate Team and enter the Grand Line.
              Lorem totam maiores! Placeat, mollitia esse odio autem
            </p>
          </div>
          <div className="card item p-4">
            <div className="d-flex">
              <img src={Leon} alt="" />
              <h6>CTO May & Baker<p className="text-muted">Tayo Oshinuma</p></h6>
            </div>
            <p className="card-text bg-p mt-4">
              Then Create your Pirate Team and enter the Grand Line.
              Lorem totam maiores! Placeat, mollitia esse odio autem
            </p>
          </div>
          <div className="card item p-4">
            <div className="d-flex">
              <img src={philip} alt="" />
              <h6>CTO May &<p className="text-muted">Tayo Oshinuma</p></h6>
            </div>
            <p className="card-text bg-p mt-4">
              Then Create your Pirate Team and enter the Grand Line.
              Lorem totam maiores! Placeat, mollitia esse odio autem
            </p>
          </div>
          <div className="card item p-4">
            <div className="d-flex">
              <img src={CTO} alt="" />
              <h6>CTO May & Baker<p className="text-muted">Tayo Oshinuma</p></h6>
            </div>
            <p className="card-text bg-p mt-4">
              Then Create your Pirate Team and enter the Grand Line.
              Lorem totam maiores! Placeat, mollitia esse odio autem
            </p>
          </div>
          <div className="card item p-4">
            <div className="d-flex">
              <img src={Leon} alt="" />
              <h6>CTO May & Baker<p className="text-muted">Tayo Oshinuma</p></h6>
            </div>
            <p className="card-text bg-p mt-4">
              Then Create your Pirate Team and enter the Grand Line.
              Lorem totam maiores! Placeat, mollitia esse odio autem
            </p>
          </div>
          <div className="card item p-4">
            <div className="d-flex">
              <img src={philip} alt="" />
              <h6>CTO May&<p className="text-muted">Tayo Oshinuma</p></h6>
            </div>
            <p className="card-text bg-p mt-4">
              Then Create your Pirate Team and enter the Grand Line.
              Lorem totam maiores! Placeat, mollitia esse odio autem
            </p>
          </div>
        </div>
        </div>
      </>
    )
}
export default Scroll