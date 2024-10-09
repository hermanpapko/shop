import React, { Component } from 'react'

export class item extends Component {
  render() {
    return (
      <div className='item'>
        <img src={""} />
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.desc}</p>
        <b>{this.props.item.price}$</b>
        <div className='add-to-cart'>+</div>
      </div>
    )
  }
}

export default item