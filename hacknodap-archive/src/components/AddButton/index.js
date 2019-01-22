import React from 'react';
import styled from 'styled-components';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

const AddButtonDiv = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
`;

const AddButton = () => {
  return (
    <AddButtonDiv>
      <Tooltip placement="top" title="New Activity...">
        <Button variant="fab" color="secondary">
          <AddIcon />
        </Button>
      </Tooltip>
    </AddButtonDiv>
  );
};

export default AddButton;