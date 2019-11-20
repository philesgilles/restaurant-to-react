import React, { Component } from "react";
import Tabletop from "tabletop";
class review extends Component {
  constructor() {
    super();
    this.state = {
      reviews: []
    };
  }

  componentDidMount() {
    Tabletop.init({
      key: "1KKlJJx2adR41DhPwzpPMKo8lzZnnXx34axXPsNyYXnY",
      callback: googleData => {
        this.setState({
          reviews: googleData
        });
      },
      simpleSheet: true
    });
  }

  render() {
    console.log(this.state.reviews);
    const reviews = this.state.reviews.map(review => {
      let rating = [];
      if (review.rating !== "0") {
        for (let i = 0; i < review.rating; i++) {
          rating.push(
            <span className="float-right">
              <i className="text-warning fa fa-star"></i>
            </span>
          );
        }
      }
      return (
        <div className="card mb-3 col-5">
          <div className="card-body">
            <div className="row">
              <div className="col-12">
                <p>
                  <strong>{review.name}</strong>

                  {rating}
                </p>
                <div className="clearfix"></div>
                <p>{review.review}</p>
                <p className="text-secondary text-center">
                  {review.location} - {review.time}
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <React.Fragment>
        <div className="row justify-content-center mt-1 p-3">
          <div className="col border border-primary p-3">
            <h1 className="font-weight-light text-center text-lg-left">
              Reviews
            </h1>
            <hr className="mt-2 mb-5" />
            <div id="pageOrder" className="pb-3">
              <div className="row d-flex justify-content-around">{reviews}</div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default review;
