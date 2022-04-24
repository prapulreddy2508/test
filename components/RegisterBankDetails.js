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
import * as yup from 'yup';

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

const textStyles = {
    fontWeight: "600",
    fontFamily: "Open Sans",
};


const schema = yup.object({
    accountNumber: yup.string().required(),
    confirmAccountNumber: yup.string().required(),
    ifsc: yup.string().required(),
    recipientName: yup.string().required(),
});

function RegisterBankDetails(props) {


    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

    const onSubmit = data => {
        console.log(data)
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
                                    {...register('accountNumber')}
                                />
                                <p style={{ color: 'red' }}>{errors.accountNumber?.message}</p>
                            </Grid>

                            <Grid item my={2}>
                                <TextField
                                    label="Re-enter Account Number"
                                    variant="outlined"
                                    name="email"
                                    fullWidth
                                    required
                                    {...register('confirmAccountNumber')}
                                />
                                <p style={{ color: 'red' }}>{errors.confirmAccountNumber?.message}</p>
                            </Grid>

                            <Grid item>
                                <TextField
                                    label="IFSC Code"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    {...register('ifsc')}


                                />
                                <p style={{ color: 'red' }}>{errors.ifsc?.message}</p>
                            </Grid>

                            <Grid item my={2}>
                                <TextField
                                    label="Recipient Name"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    {...register('recipientName')}

                                />
                                <p style={{ color: 'red' }}>{errors.recipientName?.message}</p>
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
                                <Button variant="contained" style={{ margin: "0 0 0 2rem" }}
                                    onClick={handleSubmit(onSubmit)}>
                                    Next
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Card>
        </Box>
    )
}

export default RegisterBankDetails
