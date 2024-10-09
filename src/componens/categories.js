import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'chairs', 
                    name: 'Стулья'
                },
                {
                    key: 'tables',
                    name: 'Столы'
                },
                {
                    key: 'sofa',
                    name: 'Диваны'
                },
                {
                    key: 'light',
                    name: 'Свет'
                }
            ]
        }
    }
    render() {
        return (
            <div className='categories'>
                {this.state.categories.map(el => (
                    <div>{el.name}</div>
                ))}
            </div>
        )
    }
}

export default Categories