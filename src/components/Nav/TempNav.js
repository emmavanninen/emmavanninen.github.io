import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Nav.css'

const useStyles = makeStyles({
  list: {
    width: '20vw',
    height: '100vh',
    backgroundColor: 'rgba(234, 247, 247, 0.762)',
    backgroundImage: 'url(/binaryEmmaVanninen.png)',
    backgroundRepeat: 'repeat',
    backgroundSize: '100%'
  }
})

export default function TempNav() {
  const classes = useStyles()
  const [state, setState] = React.useState({
    left: false
  })

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [side]: open })
  }

  const navList = side => (
    <div
      className={classes.list}
      role='presentation'
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <div className='closeMenu'>
          <img src='./cancel.png' alt='close menu icon'></img>
        </div>
        <ul className='nav-list'>
          <li>
            <AnchorLink href='#bioID'> Who am I?</AnchorLink>
          </li>
          <li>
            <AnchorLink href='#worksID'>My Work</AnchorLink>
          </li>
          <li>
            <AnchorLink href='#aboutmeID'>My story</AnchorLink>
          </li>
          <li>
            <AnchorLink href='#footerID'>Contact</AnchorLink>
          </li>
          <li className='topA'>
            <AnchorLink href='#headerID'> Back to the top</AnchorLink>
          </li>
        </ul>
      </List>
    </div>
  )

  return (
    <div>
      <div onClick={toggleDrawer('left', true)} className='menuicon'>
        <img src='./menu.png' alt='menu icon'></img>
      </div>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {navList('left')}
      </Drawer>
    </div>
  )
}
