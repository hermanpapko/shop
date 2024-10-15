import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/items"
import Features from "./components/Features"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      cartOpen: false,
      items: [
        {
          id: 1,
          title: 'Стул серый',
          img: 'chair-grey.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Стол',
          img: 'table.webp',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'tables',
          price: '149.00'
        },
        {
          id: 3,
          title: 'Диван',
          img: 'sofa.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'sofa',
          price: '549.99'
        },
        {
          id: 4,
          title: 'Лампа',
          img: 'wall-light.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'light',
          price: '25.00'
        },
        {
          id: 5,
          title: 'Стул белый',
          img: 'chair-white.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'chairs',
          price: '49.99'
        }
      ]
    }
    this.setCartOpen = this.setCartOpen.bind(this)
    this.addToOrder= this.addToOrder.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} />
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
        <Features />
      </div>
    )
  }

  setCartOpen() {
    this.setState({ cartOpen: !this.setCartOpen.cartOpen })
  }

  addToOrder(item) {
  this.setState({orders: [...this.state.orders, item]})
  }
}

export default App;
