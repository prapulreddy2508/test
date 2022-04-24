import * as React from "react";
import {
  Card,
  Grid,
  Typography,
  Box,
  Button,
  Link,
  TextField,
} from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import ImageRender from "../components/ImageRender";

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
  padding: "2rem",
};

const schema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  companyEmail: yup.string().email().required(),
});

 function RegisterPage() {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors }, 
  // } = useForm({
  //   resolver: yupResolver(schema),
  // });

  // const { handleStepper } = props;

  // const onSubmit = (data) => {
  //   console.log("gere", data);
  //   handleStepper(1);
  // };

  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
   

  return (
    <form >
      <Box sx={boxStyles}>
        <Card sx={{ height: "700px", width: "1200px" }}>
          <Grid container>
            <ImageRender image="/registerpage.svg" />

            <Grid item lg={6} xs={12} sx={gridItemStyles}>
              <Grid item xs={12}>
                <Typography variant="h4">Welcome!</Typography>
                <Typography variant="h4" mt={1}>
                  First things first
                </Typography>
                Already have an account? <Link>Login</Link>
                <Grid item my={3}>
                  <TextField
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    required
                     {...register("firstName")}
                  />
                  {/* <p style={{color:'red'}}>{errors.firstName?.message}</p> */}
                </Grid>
                <Grid item>
                  <TextField
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    type="text"
                    required
                    // {...register("lastName")}
                  />
                  {/* <p>{errors.lastName?.message}</p> */}
                </Grid>
                <Grid item my={3}>
                  <TextField
                    label="Company Email"
                    variant="outlined"
                    fullWidth
                    type="email"
                    required
                    // {...register("companyEmail")}
                  />
                  {/* <p>{errors.companyEmail?.message}</p> */}
                </Grid>
                <Grid item align="right">
                  <Button variant="contained">
                    Next
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </form>
  );
}

export default RegisterPage;
