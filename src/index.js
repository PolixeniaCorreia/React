import React from 'react'
import ReactDOM from 'react-dom'

import Multi from './componentes/Multiplos'
// import BoaTarde, { BoaNoite } from './componentes/Multiplos'
// import { BoaTarde, BoaNoite } from './componentes/Multiplos'

ReactDOM.render(
    <div>
        < Multi.BoaTarde nome='Ana' />
        < Multi.BoaNoite nome='Bia' />
    </div>
    , document.getElementById('root'))

// ReactDOM.render(
//     <div>
//         < BoaTarde nome='Ana' />
//         < BoaNoite nome='Bia' />
//     </div>
//     , document.getElementById('root'))