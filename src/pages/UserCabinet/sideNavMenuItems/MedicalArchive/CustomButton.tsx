import React from 'react';
import { Button, Theme, Typography, styled } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

interface Props {
  caption?: string;
  icon?: React.ReactNode;
  iconLocation?: 'start' | 'end';
  onClick?: Function;
  containerClassName?: string;
  captionClassName?: string;
  containerStyles?: React.CSSProperties;
  captionStyles?: React.CSSProperties;
  isDisabled?: boolean;
}

const CustomButton = (props: Props) => {
  const {
    caption,
    icon = <></>,
    iconLocation = 'start',
    onClick = () => null,
    containerClassName,
    captionClassName,
    containerStyles,
    captionStyles,
    isDisabled = false,
  } = props;

  const classes = useStyles();

  return (
    <CustomButtonContainer
      onClick={() => onClick()}
      variant="contained"
      disabled={isDisabled}
      startIcon={icon && iconLocation === 'start' ? icon : <></>}
      endIcon={icon && iconLocation === 'end' ? icon : <></>}
      className={`${containerClassName} ${!caption ? classes.btnWithoutIcon : ''}`}
      sx={containerStyles}
    >
      <CustomButtonLabel className={captionClassName} sx={captionStyles}>
        {caption && caption}
      </CustomButtonLabel>
    </CustomButtonContainer>
  );
};

export default CustomButton;

export const CustomButtonContainer = styled(Button)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  background: '#fff',
  padding: '5px 10px',
  borderRadius: '30px',
  gap: '10px',
  minHeight: '40px',
  minWidth: '0',
  height: '40px',

  span: {
    margin: '0',
  },
  ':hover': {
    opacity: '0.7',
    background: 'inherit',
    boxShadow: 'none',
  },
}));

export const CustomButtonLabel = styled(Typography)(({ theme }) => ({
  fontWeight: '600',
  fontSize: '12px',
  color: theme.palette.primary.main,
  lineHeight: '1',
}));

const useStyles = makeStyles(() => ({
  btnWithoutIcon: {
    gap: 0,
  },
}));
