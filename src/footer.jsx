import './stylesheets/header.scss'
import React from 'react'
import { createRoot } from 'react-dom/client'
import * as ReactDOM from 'react-dom/client'

import { footercontent } from './footer_data.js'
import FinalFooter from './O_footer.js'

console.clear()



const props = {
  footercontent
}
const root = ReactDOM.createRoot(document.querySelector('SO_FooterForAll', 'Q_Logo', 'O_FooterTextInfo', 'M_Authors', 'M_Curators','M_SocialIcons'))
root.render(<FinalFooter />)