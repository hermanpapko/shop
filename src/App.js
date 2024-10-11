import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/items"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
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
  }
  render() {
    return (
      <div className="wrapper">
        <Header setCartOpen={this.setCartOpen} cartOpen={this.state.cartOpen} />
        <Items items={this.state.items} setCartOpen={this.setCartOpen} />
        <Footer />
      </div>
    )
  }

  setCartOpen() {
    this.setState({ cartOpen: !this.setCartOpen.cartOpen })
  }
}

export default App;
