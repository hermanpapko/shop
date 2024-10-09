import React, { Component } from 'react'

export class Categories extends Component {
    // Для хранения массива будем использовать состояние
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'chairs', // вместо id у нас тут будут ключи (уникальные)
                    name: 'Стулья' // А это просто название категории
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