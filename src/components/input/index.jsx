import React from "react";
import TextField from '@mui/material/TextField';
import styles from './styles.module.scss'

const Input = ({onChange, value, onEnterPress}) => {

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onEnterPress();
    }
  };

  return (
    <div 
        component="form"
        sx={{
          '& > :not(style)': { width: '100%'},
        }}
        noValidate
        autoComplete="off"
        >
      <TextField
      className={styles['btn']}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyPress={handleKeyPress}
        type="text"
        sx={{width: '100%'}}
      />
    </div>
  )
}

export default Input