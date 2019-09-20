import React, { Component } from 'react';

class main extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <div id="page1">
                    
        <div
                        id="carouselExampleControls"
                        className="carousel slide"
                        data-ride="carousel"
                    >
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img
                                    src="https://picsum.photos/1200/300?random=1"
                                    className="d-block w-100 img-fluid"
                                    alt="slider 1"
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="https://picsum.photos/1200/300?random=2"
                                    className="d-block w-100 img-fluid"
                                    alt="slider 2"
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="https://picsum.photos/1200/300?random=0"
                                    className="d-block w-100 img-fluid"
                                    alt="slider 3"
                                />
                            </div>
                        </div>
                        <a
                            className="carousel-control-prev"
                            href="#carouselExampleControls"
                            role="button"
                            data-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a
                            className="carousel-control-next"
                            href="#carouselExampleControls"
                            role="button"
                            data-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                   
        <div className="jumbotron">
                        <h2 className="">Welcome to La Casa Nostra</h2>
                        <p>
                            La Casa Nostra is as much for diners as it is for drinkers. The
            seafood dishes, spicy tuna tartare, and truffle —crusted<em
                            ><b> cod</b></em
                            >— pair perfectly with the restaurant’s extensive selection of white
                            and red wines, champagne, sake, and cocktails.
          </p>
                        <p>
                            We focus on sourcing only seasonal and sustainable—and sometimes
                            local—catch like wild Alaskan salmon and Arctic char at a retail
                            counter. We put the fresh goods to use in dishes like lobster rolls,
                            kelp-noodle pad Thai and Baja-style fish tacos dressed with
                            citrus-cabbage slaw and chipotle-lime mayo, doled out in a tiled
                            space outfitted with marble counters and high-top tables.
          </p>
                        <button
                            type="button"
                            className="btn btn-primary btn-lg"
                            data-toggle="modal"
                            data-target="#bookTable"
                        >
                            Book a table
          </button>
                        <hr className="my-4" />
                        <blockquote className="blockquote mb-2">
                            <p>
                                “After a good dinner one can forgive anybody, even one's own
                                relations.”
            </p>
                            <footer className="blockquote-footer">
                                Oscar Wilde,
              <cite title="Source Title">A Woman of No Importance</cite>
                            </footer>
                        </blockquote>
        </div>
                    <hr />
                    <h2>This Week's specials</h2>
                    <div className="card">
                        <div className="card-body">
                            <div className="row text-center justify-content-around">
                                <div className="col-12 col-md-6 menuText">
                                    <p>
                                        Mesclun Salad<br />
                                        <span className="menuExpl"
                                        >Market Herbs and Spring Vegetables; Truffle
                    Vinaigrette</span
                                        >
                                    </p>
                                </div>

                                <div className="col-12 col-md-6 menuText">
                                    <p>
                                        Rainbow trout<br />
                                        <span className="menuExpl"
                                        >with baby fennel, focaccia, caper</span
                                        >
                                    </p>
                                </div>
                                <div className="col-12 col-md-6 menuText">
                                    <p>
                                        Branzino<br />
                                        <span className="menuExpl"
                                        >wild striped bass, sturgeon caviar, mussel
                    vinaigrette</span
                                        >
                                    </p>
                                </div>
                                <div className="col-12 col-md-6 menuText">
                                    <p>
                                        Passera<br />
                                        <span className="menuExpl"
                                        >mediterranean fluke, cucumber, mint</span
                                        >
                                    </p>
                                </div>
                                <div className="col-12 col-md-6 menuText">
                                    <p>
                                        Granchio Reale<br />
                                        <span className="menuExpl"
                                        >Jumbo lump crab, basil, calabrian chilies</span
                                        >
                                    </p>
                                </div>
                                <div className="col-12 col-md-6 menuText">
                                    <p>
                                        Quadrotti<br />
                                        <span className="menuExpl"
                                        >black truffle, corn, chanterelle, parmigiano (pf supp
                    10)</span
                                        >
                                    </p>
                                </div>

                                <div
                                    className="col-7 col-lg-5 menuText p-3 border border-primary shadow"
                                >
                                    <p className="lead">
                                        "The King's"<br />
                                        <span className="menuExpl leadSpan"
                                        >Norwegian king crab, hackelback caviar, potato pavé, melted
                    leeks</span
                                        >
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">2 days ago</small>
                        </div>
                    </div>
                    <hr />
                    <h2>Special events</h2>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Weekday Late Lunch</h5>
                            <p className="card-text">
                                <small className="text-muted">September 6th 2019</small>
                            </p>
                            <p className="card-text">
                                Pick from a juicy prime beef burger served with truffle fries or a
                                delicious classic margherita pizza, paired with a bottle of Peroni
                                at just $28++. Stay on for the Casa Nostra Aperitivo to enjoy a
                                special offer on cocktails!
            </p>
                        </div>
                        <hr className="ml-3 mr-3" />
                        <div className="card-body">
                            <h5 className="card-title">Ladies Night</h5>
                            <p className="card-text">
                                <small className="text-muted">Every Tuesday</small>
                            </p>
                            <p className="card-text">
                                Every Tuesday, Free Flow Veuve Champagne, Mimosa, Bloody Mary,
                                Singapore Sling, Red & White Wine, Peroni Beer, Soda, Tea, Coffee
                                for the ladies
            </p>
                        </div>
                    </div>
                </div>
                <div
                    className="modal fade"
                    id="bookTable"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="bookATable"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="bookATable">Book a Table</h5>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label for="firstName">Firstname</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="firstName"
                                                placeholder="First Name"
                                            />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="firstName">Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                placeholder="Name"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label for="email">Email</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                placeholder="Email"
                                            />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="telephone">Telephone</label>
                                            <input
                                                type="tel"
                                                className="form-control"
                                                id="telephone"
                                                placeholder="tel n°"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-4">
                                            <label for="date">Date</label>
                                            <input type="date" className="form-control" id="date" />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label for="time">Time</label>
                                            <input type="time" className="form-control" id="time" />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label for="seating">Seating</label>
                                            <select className="form-control" id="seating">
                                                <option>Inside</option>
                                                <option>Terrace</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="contactMessage">Message</label>
                                        <textarea
                                            className="form-control"
                                            id="contactMessage"
                                            rows="3"
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="btn btn-primary float-right bold">
                                        Send message
              </button>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-dismiss="modal"
                                >
                                    Close
            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         )
    }
}
 
export default main;