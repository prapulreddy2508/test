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

function RegisterAddTeam(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { handleStepper } = props;

  const onSubmit = (data) => {
    console.log("gere", data);
    handleStepper(2);
  };

  return (
    <Box sx={boxStyles}>
      <Card sx={{ height: "700px", width: "1200px" }}>
        <Grid container>
          <ImageRender image="/registeraddteam.svg" />

          <Grid item lg={6} xs={12} sx={gridItemStyles}>
            <Grid item xs={12}>
              <Typography variant="h4">Add Your Team</Typography>

              <Typography variant="subtitle1" mt={1}>
                You don't need to work alone
              </Typography>

              <Grid item my={3}>
                <TextField
                 id="fullname"
                 name="fullname"
                 label="User Name"
                  variant="outlined"
                  fullWidth
                  required
                  {...register('fullname')}
                  error={errors.fullname ? true : false}
                />
                 <Typography variant="inherit" color="textSecondary">
                {errors.fullname?.message}
              </Typography>
              </Grid>

              <Grid item>
                <TextField
                  label="password"
                  type="password"
                  name="password"
                  variant="outlined"
                  fullWidth
                  required
                  // {...register('password')}
                  // error={errors.password ? true : false}
                />
                 <Typography variant="inherit" color="textSecondary">
                {/* {errors.password?.message} */}
              </Typography>
              </Grid>

              <Grid item my={3}>
                <TextField
                  label="Repeat Password"
                  type="password"
                  name="password"
                  variant="outlined"
                  valid="true"
                  required 
                  fullWidth
                  // {...register('password')}
                  // error={errors.password ? true : false}
                />
                <Typography variant="inherit" color="textSecondary">
                {/* {errors.password?.message} */}
              </Typography>
              </Grid>

              {/* <Grid item>
                <TextField
                  label="Role"
                  select="select"
                  variant="outlined"
                  fullWidth
                  valid
                  required
                />
              </Grid> */}

              <Grid item my={3}>
                <Link underline="none">
                  + Add Another Admin
                </Link>
              </Grid>

              <Grid item align="right" >
                <Button variant="outlined" >I'll Do This Later</Button>
                <Button variant="contained"   onClick={handleSubmit(onSubmit)}>
                 Save & Proceed   
                </Button>
              </Grid> 
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}



export default RegisterAddTeam;
