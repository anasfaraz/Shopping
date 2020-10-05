import React, { Component } from 'react'
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import "./Cart.css";
export default class carts extends Component {
    state = { counter: 1 };

    handleIncrement = () => {
        this.setState(state => ({ counter: state.counter + 1 }));
    };

    handleDecrement = () => {
        this.setState(state => ({ counter: state.counter - 1 }));
    };

    render() {
        const displayCounter = this.state.counter > 0;
        return (
            <section>
                <div className="banner-innerpage">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-6 align-self-center text-center">
                                <h1 className="titles">Cart Page</h1>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="spacer">
                    <div className="container">
                        <div className="row mt-5">
                            <div className="col-lg-9">
                                <div className="row shop-listing">
                                    <table className="table shop-table">
                                        <tr>
                                            <th className="b-0">Product Image</th>
                                            <th className="b-0">Name</th>
                                            <th className="b-0">Price</th>
                                            <th className="b-0">Quantity</th>
                                            <th className="b-0 text-right">Total Price</th>
                                            <th className="b-0 text-right"></th>

                                        </tr>
                                        <tr>
                                            <td>   <img
                                                src={require("../../assets/Men.jpg")}
                                                alt="wrapkit"
                                                className="img-fluid"
                                            /></td>
                                            <td>T-shirt</td>
                                            <td>Rs400</td>
                                            <td>
                                                <ButtonGroup size="small" aria-label="small outlined button group">
                                                    <Button onClick={this.handleIncrement}>+</Button>
                                                    {displayCounter && <Button disabled>{this.state.counter}</Button>}
                                                    {displayCounter && <Button onClick={this.handleDecrement}>-</Button>}
                                                </ButtonGroup>
                                            </td>
                                            <td className="text-right">
                                                <h5 className="font-medium m-b-30">Rs1000</h5>
                                            </td>
                                            <td colspan="3" align="">
                                                {/* <Button className="text-right"variant="contained" color="primary">
                                                    X
                        </Button> */}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="5" align="right">
                                                Subtotal :Rs1500
                      </td>
                                        </tr>
                                        <td colspan="6"></td>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        )
    }
}
