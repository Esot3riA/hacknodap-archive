import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const ButtonDiv = styled.div`
  margin-left: auto;
`;

const Header = ({ onOpen }) => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h5" color="inherit">
          Hacknodap Archive
        </Typography>
        <ButtonDiv>
          <Button
            variant="contained"
            color="secondary"
            onClick={onOpen}>Login</Button>
        </ButtonDiv>
      </Toolbar>
    </AppBar>
  );
};

export default Header;