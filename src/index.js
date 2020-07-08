import React from 'react'
import ReactDOM from 'react-dom'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Santos">
            <Filho nome="Pedro" sobrenome="Santos" />
            <Filho nome="Poli" sobrenome="Santos" />
            <Filho nome="Carla" sobrenome="Santos" />
        </Pai>
    </div>
    , document.getElementById('root'))