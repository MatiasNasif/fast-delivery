import { IconButton, InputAdornment, InputLabel, Input } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import React from 'react';
import styles from '../styles/Login.module.css';

export default function InputPassword({ register, errors }) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <InputLabel
        sx={{ fontSize: '12px', marginTop: '10px' }}
        className={styles.textLabelcolor}
        focused={true}
        color="info"
        htmlFor="password"
      >
        Contraseña
      </InputLabel>
      <Input
        className="Mui-focused"
        sx={{ marginBottom: '20px' }}
        name="password"
        {...register('password', { required: true })}
        error={!!errors?.password}
        helperText={!!errors?.password ? errors.password.message : null}
        fullWidth={true}
        type={showPassword ? 'text' : 'password'}
        endAdornment={
          <InputAdornment position="start">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </>
  );
}
