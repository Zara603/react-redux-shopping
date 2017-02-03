import React, { Component, PropTypes } from 'react';


export default class RingItem extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    // console.log(this.props);
    return (
      <div className="col-xs-12 col-md-4 RingItem">
        <div className="thumbnail">
          <img src={this.props.data.imageUrl} />
          <div className="caption">
            <h3>{this.props.data.name}</h3>
            <p><a href="#" className="btn btn-primary" role="button" 
                onClick={this.handleClick.bind(this)}>{this.props.data.inWishList ? "Saved" : "Save"}</a></p>
          </div>
        </div>
      </div>
    )
  }
  handleClick() {
    this.props.onWishListAdd(this.props.data);
  }
}








