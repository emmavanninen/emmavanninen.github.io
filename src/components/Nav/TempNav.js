import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Nav.css'

const useStyles = makeStyles({
  list: {
    minWidth: '40vmin',
    width: 'fit-content',
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
    <div className={classes.list}>
      <List>
        <div
          className='closeMenu'
          role='presentation'
          onClick={toggleDrawer(side, false)}
          onKeyDown={toggleDrawer(side, false)}
        >
          <img src='./cancel.png' alt='close menu icon'></img>
        </div>
        <ul
          className='nav-list'
          role='presentation'
          onClick={toggleDrawer(side, false)}
          onKeyDown={toggleDrawer(side, false)}
        >
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
        <div className='navContact'>
          Contact me:
          <br />
          email: emma.vanninen@gmail.com
          <br />
          <p style={{ margin: '0' }}>TEMPORARY tel. (+358) 50 363 0087</p>
          <p style={{ textDecorationLine: 'line-through', margin: '0' }}>
            tel. (+1) 347 5566944
          </p>
          <br />
          <br />
          <div className='navicons'>
            <a href='https://www.linkedin.com/in/emmavanninen/' target='_blank'>
              <img src='./linkedin.png' alt='li' />
              <br />
            </a>
            <a href='https://github.com/emmavanninen' target='_blank'>
              <img src='./github.png' alt='gh' />
              <br />
            </a>
          </div>
        </div>
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
