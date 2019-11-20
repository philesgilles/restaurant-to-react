import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeItem,
  addQuantity,
  subtractQuantity
} from "../components/actions/CartActions";

class Cart extends Component {
  //to remove the item completely
  handleRemove = id => {
    this.props.removeItem(id);
  };
  //to add the quantity
  handleAddQuantity = id => {
    this.props.addQuantity(id);
  };
  //to substruct from the quantity
  handleSubtractQuantity = id => {
    this.props.subtractQuantity(id);
  };

  render() {
    let addedItems = this.props.items.length ? (
      this.props.items.map(item => {
        return (
          <tr key={item.id}>
            <td data-th="Product">
              <div className="row">
                <div className="col-sm-2 hidden-xs">
                  <img src={item.img} alt={item.img} className="img-fluid" />
                </div>
                <div className="col-sm-10">
                  <h4 className="nomargin">{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            </td>
            <td data-th="Price">{item.price}</td>
            <td data-th="Quantity">{item.quantity}</td>
            <td data-th="Subtotal" className="text-center">
              {item.quantity * item.price}
            </td>
            <td className="actions" data-th="">
              <Link to="/cart">
                <button
                  onClick={() => {
                    this.handleAddQuantity(item.id);
                  }}
                  className="btn btn-info btn-sm m-1"
                >
                  <i className="fa fa-plus"></i>
                </button>
              </Link>
              <Link to="/cart">
                <button
                  onClick={() => {
                    this.handleSubtractQuantity(item.id);
                  }}
                  className="btn btn-info btn-sm m-1"
                >
                  <i className="fa fa-minus"></i>
                </button>
              </Link>
              <Link to="/cart">
                <button
                  onClick={() => {
                    this.handleRemove(item.id);
                  }}
                  className="btn btn-primary btn-sm m-1"
                >
                  <i className="fa fa-trash"></i>
                </button>
              </Link>
            </td>
          </tr>
        );
      })
    ) : (
      <tr>
        <td>
          <p>Nothing.</p>
        </td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
    );
    return (
      <React.Fragment>
        <div className="row justify-content-center mt-1 p-3">
          <div className="col border border-primary p-3">
            <table id="cart" className="table table-hover table-condensed">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th className="text-center">Subtotal</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>{addedItems}</tbody>
              <tfoot>
                <tr className="visible-xs">
                  <td className="text-center">
                    <strong>Total {this.props.total} €</strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="/order" className="btn btn-warning">
                      <i className="fa fa-angle-left"></i> Continue Shopping
                    </a>
                  </td>
                  <td colSpan="2" className="hidden-xs"></td>
                  <td className="hidden-xs text-center">
                    <strong>Total {this.props.total} €</strong>
                  </td>
                  <td>
                    <a href="/" className="btn btn-primary btn-block">
                      Checkout
                    </a>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.addedItems,
    total: state.total.toFixed(2)
  };
};
const mapDispatchToProps = dispatch => {
  return {
    removeItem: id => {
      dispatch(removeItem(id));
    },
    addQuantity: id => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: id => {
      dispatch(subtractQuantity(id));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
