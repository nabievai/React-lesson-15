import React from "react";
import Btn from '@mui/material/Button';

const Button = ({children, onClick}) => {
  return (
    <div>
      <Btn onClick={onClick}>
        {children}
      </Btn>
    </div>
  )
}

export default Button