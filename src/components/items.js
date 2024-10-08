import React, { Component } from 'react'
import Item from './item'

export class Items extends Component {
    render() {
        return (
            <main>
                {this.props.items.map(el => (
                    <Item key={el.id} item={el} setCartOpen={this.props.setCartOpen} />
                ))}
            </main>
        )
    }
}

export default Items