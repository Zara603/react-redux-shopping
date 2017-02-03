import React, { Component, PropTypes } from 'react';


export default class WishListItem extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="col-xs-12">
        <div className="row WishListItem">
          <div className="col-xs-8">
            <h3>{this.props.data.name}</h3>
          </div>
          <div className="col-xs-4">  
            <img src={this.props.data.imageUrl}/>
          </div>
            <span className="btn btn-primary WishListItem-btnClose" role="button"
             onClick={this.handleClick.bind(this)}>x</span>
        </div>  
        
      </div>
    )
  }

  handleClick() {
    this.props.onWishListRemove(this.props.data)
  }
}
