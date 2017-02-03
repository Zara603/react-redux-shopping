import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as wishListActions from '../actions/wishList';
import RingItem from './RingItem';
import WishListItem from './WishListItem';


export default class Home extends Component {

  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="container Homepage">
        <h1>Homepage</h1>
        <div className="col-xs-8">
          <div className="row">
            {this.props.rings.items.map((ring, index) => {
              return <RingItem onWishListAdd={this.onWishListAdd.bind(this)} key={index} data={ring} />
            })}
          </div>
        </div>
        <div className="col-xs-4 WishList">
          <h4>Wish List</h4>
          {this.props.wishList.items.map((ring, index) => {
            return <WishListItem onWishListRemove={this.onWishListRemove.bind(this)} data={ring} key={index} />
          })}
        </div>
      </div>
    )
  }

  onWishListAdd(ringData) {
    if (ringData.inWishList) {
      this.props.dispatch(wishListActions.wishListRemove(ringData))      
    } else
      this.props.dispatch(wishListActions.wishListAdd(ringData))            
  }

  onWishListRemove(ringData) {
    this.props.dispatch(wishListActions.wishListRemove(ringData))
  }
}

function mapStateToProps(state) {
  return {
    rings: state.rings,
    wishList: state.wishList
  };
}

export default connect(mapStateToProps)(Home)
