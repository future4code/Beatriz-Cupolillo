import React from 'react'
import {ButtonsContainer} from "./styled"
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'
import { goToFeed, goToLogin } from '../../Routes/Coordinator'

const NavBar = () => {
    const history = useHistory()
    return (
        <AppBar className={'appbar'}>
          <Toolbar>
            <ButtonsContainer>
              <Button color="inherit" onClick={() => goToFeed(history)}>Labeddit</Button>
              <Button color="inherit" onClick={() => goToLogin(history)}>Logout</Button>
            </ButtonsContainer>
          </Toolbar>
        </AppBar>
    )
}

export default NavBar;