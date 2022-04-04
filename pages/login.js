import { useState } from "react";
import { useRouter } from "next/router";
import MainLayout from "../layouts/mainLayout/MainLayout";
import { Grid, Button, TextField, Typography as Font } from "@mui/material";
import { primaryColor } from "../styles/themes/defaulttheme";
import Image from "next/image";
import Logo from "../public/assets/logo.png";
const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    console.log("submit");
  };
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email": {
        setEmail(value);
        break;
      }
      case "password": {
        setPassword(value);
        break;
      }
      default: {
        console.log("incorrect name");
      }
    }
  };

  const values = {
    email,
    password,
  };

  return (
    <MainLayout title="Login">
      <Grid
        container
        direction="column"
        alignContent="center"
        spacing={4}
        display="flex"
        height="100vh"
        justifyContent="center"
      >
        <Grid item display="flex" justifyContent="center">
          <Image
            src={Logo}
            alt="Logo"
            layout="intrinsic"
            width={150}
            height={100}
            priority={true}
            quality={75}
            onClick={() => router.push("/")}
          />
        </Grid>
        <Grid item>
          <Font variant="h3" component="h1">
            Login your account
          </Font>
          <Font variant="subtitle" color={primaryColor}>
            Fill in you credentials
          </Font>
        </Grid>
        <Grid item>
          <Grid
            container
            component="form"
            onSubmit={handleSubmit}
            direction="column"
            spacing={2}
          >
            <Grid item>
              <TextField
                name="email"
                label="Email address"
                type="email"
                onChange={handleChange}
                value={values.email}
                variant="standard"
                fullWidth
              />
            </Grid>
            <Grid item>
              <TextField
                name="password"
                label="Password"
                type="password"
                variant="standard"
                onChange={handleChange}
                value={values.password}
                fullWidth
              />
            </Grid>
            <Grid item>
              <Button variant="rounded" type="submit" fullWidth>
                <Font variant="button">Login</Font>
              </Button>
            </Grid>

            <Grid item>
              <Font variant="body1">
                Forgot password?{" "}
                <Font
                  variant="body1"
                  color={primaryColor}
                  component="a"
                  onClick={() => router.push("/forgot-password")}
                >
                  Reset Password
                </Font>
              </Font>
            </Grid>
            <Grid item>
              <Font variant="body1">
                Don&apos;t have an account?{" "}
                <Font
                  variant="body1"
                  color={primaryColor}
                  component="a"
                  onClick={() => router.push("/register")}
                >
                  Register
                </Font>
              </Font>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default Login;
