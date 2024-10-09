import React, { Component } from 'react'

export class Features extends Component {
    render() {
        return (
            <div className='features'>
                <span>Фичи</span>
                <h2>Краткое описание наших преимуществ</h2>
                <div className='blocks'>
                    <div>
                        <img src="./img/fast.png" />
                        <h3>Быстро</h3>
                        <p>Lorem ipsum dolor sit, amet consecting elit. Iure, facere! Nulla consequuntur magni tempore adipisci?</p>
                    </div>
                    <div>
                        <img src="./img/safety.png" />
                        <h3>Надежно</h3>
                        <p>Lorem ipsuetur adipisicing. Iure consequuntur magni tempore adipisci?</p>
                    </div>
                    <div>
                        <img src="./img/comfort.png" />
                        <h3>Уютно</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, facere! Nulla consequuntur magni tempore adipisci?</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Features