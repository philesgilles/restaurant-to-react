import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../components/actions/CartActions";

class OrderPage extends Component {
  handleClick = id => {
    this.props.addToCart(id);
  };

  render() {
    let itemList = this.props.items.map(item => {
      return (
        <div className="col-3 p-2 d-flex" key={item.id}>
          <div className="card">
            <img src={item.img} className="card-img-top p-2" alt={item.title} />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.desc}</p>
              <p className="card-text">
                <b>Price: {item.price}$</b>
              </p>
              <button
                onClick={() => {
                  this.handleClick(item.id);
                }}
                type="button"
                className="btn btn-primary btn-lg"
              >
                +
              </button>
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
              Takeaway order
            </h1>
            <hr className="mt-2 mb-5" />
            <div className="box row d-flex justify-content-around">
              {itemList}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    items: state.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => {
      dispatch(addToCart(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderPage);
