import * as React from "react";
import {
  Card,
  Grid,
  Typography,
  Box,
  Button,
  Link,
  Radio,
  TextField,
} from "@mui/material";
import ImageRender from "../components/ImageRender";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

const boxStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center", 
  height: "100vh",
};

const gridItemStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  padding: "2rem 4rem",
  height: "100%",
  float: "left",
};

const linkStyles = {
  color: "#0E369C",
};

const uploadStyles = {
  bottom: "23px",
  right: "45px",
};

const nameStyles = {
  justifyContent: "center",
  display: "flex-start",
};

const textStyles = {
  fontWeight: "600",
  fontFamily: "Open Sans",
};




const App = () => {
  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required('Account Number is required'),
    username: Yup.string()
      .required('Username is required')
      .min(6, 'Username must be at least 6 characters')
      .max(20, 'Username must not exceed 20 characters'),
    email: Yup.string()
      .required('Re-enter Account Number is required')
      .email('Email is invalid'),
    password: Yup.string()
      .required('IFSC Code is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters'),
    confirmPassword: Yup.string()
      .required('RecipientName is required')
      .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
    acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required')
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = data => {
    console.log(JSON.stringify(data, null, 2));
  };


  return (
    <Box sx={boxStyles}>
      <Card sx={{ height: "710px", maxWidth: "1300px" }}>
        <Grid container>
          <ImageRender image="/bankdetails.svg" />

          <Grid item lg={6} xs={12} sx={gridItemStyles}>
            <Grid item xs={12}>
              <Typography variant="h4">Bank Details</Typography>
              <Typography variant="subtitle1" mt={1}>
                We will get back to you shortly after verifying your documents.
              </Typography>
              <Grid item my={1} sx={textStyles}>
                <Radio
                  defaultChecked="true"
                  style={{ padding: "9px 9px 9px 0" }}
                ></Radio>
                Enter Bank Details
              </Grid>

              <Grid item>
                <TextField
                  label="Account Number"
                  variant="outlined"
                  id="fullname"
                  name="fullname"
                  fullWidth
                  required
                  // {...register('fullname')}
                  // error={errors.fullname ? true : false}
                />
                <Typography variant="inherit" color="textSecondary">
                {errors.fullname?.message}
              </Typography>
              </Grid>

              <Grid item my={2}>
                <TextField
                  label="Re-enter Account Number"
                  variant="outlined"
                  id="email"
                  name="email"
                  fullWidth
                  required
                //   {...register('email')}
                // error={errors.email ? true : false}
                />
                <Typography variant="inherit" color="textSecondary">
                {errors.email?.message}
              </Typography>
              </Grid>

              <Grid item>
                <TextField
                  label="IFSC Code"
                  variant="outlined"
                  fullWidth
                  required
                  id="password"
                  name="password"
                //   {...register('password')}
                // error={errors.password ? true : false}
                  

                />
                 <Typography variant="inherit" color="textSecondary">
                {/* {errors.password?.message} */}
              </Typography>
              </Grid>

              <Grid item my={2}>
                <TextField
                  label="Recipient Name"
                  variant="outlined"
                  fullWidth
                  required 
                  id="confirmPassword"
                name="confirmPassword"
                // {...register('confirmPassword')}
                // error={errors.confirmPassword ? true : false}

                />
                 
                 <Typography variant="inherit" color="textSecondary">
                {/* {errors.confirmPassword?.message} */}
              </Typography>

              </Grid>

              <Grid item sx={textStyles}>
                <Radio style={{ padding: "9px 9px 9px 0" }}></Radio>Upload
                cancelled cheque
              </Grid>

              <Grid
                item
                my={2}
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography>Cancelled Cheque</Typography>
                <Button disabled variant="outlined">
                  <ArrowUpwardIcon></ArrowUpwardIcon>Upload
                </Button>
              </Grid>

              <Grid
                item
                my={2}
                sx={{
                  display: "flex",
                  width: "inherit",
                  float: "right",
                  alignItems: "center",
                }}
              >
                <Link href="#">Skip</Link>
                <Button variant="contained" style={{ margin: "0 0 0 2rem" }}>
                  Next
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}

export default App;
