import React, { Component } from "react";
// import Etalase from "./Etalase";
import { Link /*,Redirect*/ } from "react-router-dom";
//import { Media } from "reactstrap";

class Home extends Component {
  render() {
    return (
      <div>
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">
              <span className="font-weight-bolder font-italic text-light">
                <u>CIRCLELINE</u>
              </span>
              <sub>
                <span className="font-italic text-light"> records</span>
              </sub>
            </h1>
            <p className="lead text-light">
              {/* <a href="tokopedia.com/circlelinerecord" class="stretched-link">
                Go somewhere
              </a> */}
              🤝Sell/Pre-Order/Buy Vinyl 🇲🇨Est.2017 Ready👉#circlelinereadystock
              ✋Hold 1x24Hour 📞WA: 0896.26.2222.26 📲Line: circlelinerecords
            </p>
          </div>
        </div>

        {/* Carousel */}
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <div
                id="carouselExampleSlidesOnly"
                class="carousel slide mb-2 ml-2"
                data-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src="https://scontent.fcgk12-1.fna.fbcdn.net/v/t1.0-9/49384594_591804604597983_273246652595175424_n.jpg?_nc_cat=1&_nc_eui2=AeHf6NoeoY6u79MEV2vJVHW8INKUusRrQ4SE-SugAFBtjQec3fB2eKJEl9_ig0TWo3AmKs7oJv2hndowQK46IMlwjuO5nwyqTOKTUkyUCpafGQ&_nc_ht=scontent.fcgk12-1.fna&oh=0af0020b242f13042ada0bafe1a387f6&oe=5D223FFC"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="https://images-na.ssl-images-amazon.com/images/I/71e4k8m7tYL._SL1500_.jpg"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="https://images-na.ssl-images-amazon.com/images/I/71Aw4kLeIGL._SL1425_.jpg"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="row">
                <div className="col-12 col-sm-5  ml-2 mb-2 gendre1 text-light font-weight-bold">
                  <Link to="/pop">POP</Link>
                </div>
                <div className="col-12 col-sm-5 ml-2 mb-2 gendre2 text-light font-weight-bold">
                  <Link to="/rock">ROCK</Link>
                </div>

                <div className="w-100" />

                <div className="col-12 col-sm-5 ml-2 mb-2 gendre3 text-light font-weight-bold">
                  <Link to="/jazz">JAZZ</Link>
                </div>
                <div className="col-12 col-sm-5 ml-2 mb-2 gendre4 text-light font-weight-bold">
                  <Link to="/country">COUNTRY</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-2">CircleLine</div>
            <div className="col-10">Deskripsi usaha</div>
          </div>
        </div>
        <div className="container">{/* <Etalase /> */}</div>
      </div>
    );
  }
}

export default Home;
