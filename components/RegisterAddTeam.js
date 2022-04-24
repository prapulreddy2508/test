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
    fullname: yup.string().required(),
    password: yup.string().required(),
    repeatPassword: yup.string().required(),
});

function RegisterAddTeam(props) {

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

    const { handleStepper } = props;

    const onSubmit = (data) => {
        console.log('register add team', data)
        handleStepper(3)
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
                                    label="User Name"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    {...register('fullname')}
                                />
                                <p style={{ color: 'red' }}>{errors.fullname?.message}</p>
                            </Grid>

                            <Grid item>
                                <TextField
                                    label="password"
                                    type="password"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    {...register('password')}
                                />
                                <p style={{ color: 'red' }}>{errors.password?.message}</p>
                            </Grid>

                            <Grid item my={3}>
                                <TextField
                                    label="Repeat Password"
                                    type="password"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    {...register('repeatPassword')}
                                />
                                <p style={{ color: 'red' }}>{errors.repeatPassword?.message}</p>
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
                                <Button variant="contained"
                                    onClick={handleSubmit(onSubmit)}>
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
