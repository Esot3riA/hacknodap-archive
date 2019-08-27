import React from 'react';
import styled from 'styled-components';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

const AddButtonDiv = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
`;

const AddButton = ({ onOpen }) => {
  return (
    <AddButtonDiv>
      <Tooltip
        placement="top"
        title="New Activity...">
        <Fab color="secondary" onClick={onOpen}>
          <AddIcon />
        </Fab>
      </Tooltip>
    </AddButtonDiv>
  );
};

AddButton.defaultProps = {
  onOpen : () => console.warn('onOpen is not defined')
};

export default AddButton;