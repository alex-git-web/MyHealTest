import { Button } from '@mui/material';
import React from 'react';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { makeStyles } from '@mui/styles';

interface Props {
  onClick: Function;
}

export const CustomModalCloseButton = (props: Props) => {
  const { onClick } = props;
  const classes = useStyles();

  return (
    <Button className={classes.closeModalBtn} onClick={() => onClick()}>
      <CloseOutlinedIcon htmlColor="#1E1E1E" sx={{ fontSize: '20px' }} />
    </Button>
  );
};

const useStyles = makeStyles(() => ({
  closeModalBtn: {
    width: '40px',
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    border: '1px solid #1e1e1e',
    background: '#fff',
    top: '10px',
    right: '10px',
    position: 'absolute',
    minWidth: 0,
  },
}));
