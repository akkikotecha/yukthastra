// import { useState } from 'react';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
// import swal from 'sweetalert';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url('../../../../public/')",
    backgroundSize: "cover",
  },
  video: {
    // Styles for video element
    width: "100%", // Example styling
    height: "auto", // Example styling
  },
  paper: {
    margin: theme.spacing(10, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Signin() {
  const classes = useStyles();

  const schema = yup
    .object({
      password: yup.string().required("Password is required"),
      email: yup
        .string()
        .email("Invalid email")
        .required("Email ID is required"),
    })
    .required();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
    //
    mode: "all",
  });
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    console.log(data);

    const templateParams = {
      email: data.email,
      password: data.password,
    };
    // console.log("DATA ",templateParams);
    // toast.success("Login Successfully")
    // reset();
    try {
      // const formData = new FormData();

      // formData.append("email", templateParams.email);
      // formData.append("password", templateParams.password);
      const formData = {
        email: templateParams.email,
        password: templateParams.password,
      };
      try {
        axios
          .post(`${import.meta.env.VITE_BACKEND_URL}/api/login`, formData)
          .then((res) => {
            console.log("response", res);
            if (res.data.status == 0) {
              toast.error(res.data.data);
            } else {
              toast.success("Login Successfully");

              reset();
              localStorage.setItem('accessToken',res.data.token)
              navigate("/admin-dashboard"); // Redirect to Dashboard
            }
          })
          .catch((error) => {
            console.error("API request failed:", error);
          });
      } catch (error) {
        console.log("error1", error);
        // toast.warning("Something went wrong!");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={false} md={6}>
        <img

          src="../../../../public/admin/login.jpg"
          style={{ width: "100%", height: "100vh" }} />
      </Grid>

      <Grid item xs={12} md={6} component={Paper} elevation={6} square style={{"backgroundColor":"linear-gradient(195deg, #71b2b5, rgb(25 111 114))","background":"linear-gradient(195deg, #71b2b5, rgb(25 111 114))"}}>
        <div className={`${classes.paper} px-5`}>
          <img loading="lazy" alt="" src="/image-1@2x.png" />

          <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              {...register("email")}
              // onChange={e => setUserName(e.target.value)}
            />
            <div className={`mt-2 mb-3 text-white block text-sm`}>
              {errors?.email?.message}
            </div>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="password"
              label="Password"
              type="password"
              {...register("password")}

              // onChange={e => setPassword(e.target.value)}
            />
            <div className={`mt-2 text-white block text-sm`}>
              {errors?.password?.message}
            </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}>
              Submit
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
