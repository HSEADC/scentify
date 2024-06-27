import './stylesheets/header.scss'
import React from 'react'
import { createRoot } from 'react-dom/client'
import * as ReactDOM from 'react-dom/client'

import { menu } from './header_data.js'
import header from './header.js'
import FinalHeader from './O_header.js'

console.clear()



const props = {
  menu
}
const root = ReactDOM.createRoot(document.querySelector('.O_Header', 'Q_Logo', 'M_MenuItemsHeader', 'A_MenuItemHeader', 'Q_Search'))
root.render(<FinalHeader />)