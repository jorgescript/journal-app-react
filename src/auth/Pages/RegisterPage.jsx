import { Link as RouterLink } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { startCreatingUserWithEmailAndPassword } from "../../store/auth/authThunks";

const formData = {
  displayName: "",
  email: "",
  password: "",
};

const formValidations = {
  displayName: [(value) => value.length > 5, "El nombre no es correcto."],
  email: [(value) => value.includes("@"), "El email no es valido."],
  password: [(value) => value.length > 6, "La contraseña no es correcta."],
};

export const RegisterPage = () => {
  const {
    isFormValid,
    email,
    password,
    displayName,
    emailValid,
    passwordValid,
    displayNameValid,
    onInputChange,
  } = useForm(formData, formValidations);

  const [formSubmited, setFormSubmited] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setFormSubmited(true);
    if (!isFormValid) return;
    dispatch(
      startCreatingUserWithEmailAndPassword({ email, password, displayName })
    );
  };

  const dispatch = useDispatch();

  return (
    <AuthLayout title="Create Account">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ marginTop: 2 }}>
            <TextField
              fullWidth
              type="text"
              label="Full name"
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              placeholder="John Spencer"
              error={!!displayNameValid && formSubmited}
              helperText={formSubmited ? displayNameValid : null}
            />
          </Grid>
          <Grid item xs={12} sx={{ marginTop: 2 }}>
            <TextField
              fullWidth
              type="email"
              label="Email"
              name="email"
              value={email}
              onChange={onInputChange}
              placeholder="email@gmail.com"
              error={!!emailValid && formSubmited}
              helperText={formSubmited ? emailValid : null}
            />
          </Grid>
          <Grid item xs={12} sx={{ marginTop: 2 }}>
            <TextField
              fullWidth
              type="password"
              name="password"
              label="Password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmited}
              helperText={formSubmited ? passwordValid : null}
            />
          </Grid>
          <Grid container spacing={2} sx={{ marginBottom: 2 }}>
            <Grid item xs={12} sx={{ marginTop: 2 }}>
              <Button type="submit" variant="contained" fullWidth>
                Create account
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>Already have an account?</Typography>
            <Link component={RouterLink} to="/auth/login">
              Login
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
