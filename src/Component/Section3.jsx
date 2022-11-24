import React from "react";
import Car from "./Helper/images/smart-car.png";
import Ship from "./Helper/images/ship.png";
import Bus from "./Helper/images/bus.png";
import Driving from "./Helper/images/driving.png";
import { AiOutlineArrowRight } from "react-icons/ai";
//import Rectangle3 from './Helper/images/Rectangle 486.png'
function Section3() {
  return (
    <>
      <div className="container bg-section3 justify-content-between">
        <div className="row">
          <div className="col-md-6">
            <div className="content mt-3">
              <div className="custom-bg">
                <h4 className="text-warning mb-4">MOT CONSECTET</h4>
                <h3 className="header mb-2">AMET,CONSECTET</h3>
              </div>
              <p>
                Then Create your Pirate Team and enter the Grand Line. Lorem
                totam maiores! Placeat, mollitia esse odio autem Then Create
                your Pirate Team and enter the Grand Line. Lorem totam maiores!
                Placeat, mollitia esse odio autem
              </p>
              <button className="btn btn-lg text-white rounded">
                GET
                STARTED&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<AiOutlineArrowRight />
              </button>
            </div>
          </div>
          <div className="col-md-6 mt-5">
            <div className="d-flex flex-column">
              <div className="d-flex mb-4">
                <div className="content card me-4 bg-section3 p-4">
                  <img className="bg-header icon-sec p-2" src={Car} />
                  <h4 className="mt-4">
                    CAR<span className="h6">RENAL</span>
                  </h4>
                  <p>
                    Then Create your Pirate Team and enter the Grand
                    Line.Placeat
                  </p>
                </div>
                <div className="content card bg-section3 p-4">
                  <img className="icon-sec p-2" src={Ship} />
                  <h4 className="mt-4">
                    BOAT<span className="h6"> CRUISE</span>
                  </h4>
                  <p>
                    Then Create your Pirate Team and enter the Grand
                    Line.Placeat
                  </p>
                </div>
              </div>
              <div className=" d-flex">
                <div className="content card me-4 bg-section3 p-4">
                  <img className="icon-sec p-2" src={Bus} />
                  <h4 className="mt-4">
                    BUS<span className="h6"> TRIP</span>
                  </h4>
                  <p>
                    Then Create your Pirate Team and enter the Grand
                    Line.Placeat
                  </p>
                </div>
                <div className="content card bg-section3 p-4">
                  <img className="icon-sec p-2" src={Driving} />
                  <h4 className="mt-4">
                    ROAD<span className="h6"> TRIP</span>
                  </h4>
                  <p>
                    Then Create your Pirate Team and enter the Grand
                    Line.Placeat
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Section3;
