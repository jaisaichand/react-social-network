
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { useFormik } from 'formik';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import '../App.css';
import logo from '../jai_crown2.png';
import * as Yup from 'yup';





const SignUp = () => {

    let formik = useFormik({
        initialValues: {
            emailid: '',
            name: '',
            password: '',
            firstname: '',
            lastname: '',
            confirmPassword: '',
            username: '',
            passwordIsOn: false
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validationSchema: SignInSchema
    })

    // const handleChange = (eve) => {
    //     console.log(eve);

    // }

    const SignInSchema = Yup.object().shape({
        emailid: Yup.string().email().required("Email is required"),

        password: Yup.string()
            .required("Password is required")
            .min(8, "Password is too short - should be 8 chars minimum"),
    });



    // const handleClickShowPassword = (eve) => {
    //     console.log(eve);
    //     console.log(formik.values.passwordIsOn);

    //     formik.values.passwordIsOn = !formik.values.passwordIsOn;

    //     console.log(formik.values.passwordIsOn);
    // }


    return (
        <div className="fullwidthfullheight displayallcenter backgroundcommonall">

            <Container component="main" boxshadow={3} maxWidth="xs">
                <Box boxShadow={3} className="mainBrick border-radius-ten logorelative">
                    <div className="logoabsolute">
                        <div>
                            <img className="logoImage" src={logo} alt="" />
                        </div>
                    </div>
                    <hr />
                    <div className="mt-4">
                        <h4>Create a new account</h4>
                        <p><span className="text-muted">Its quick and easy</span></p>
                    </div>
                    <hr />
                    <form onSubmit={formik.handleSubmit}>
                        {/* Emailid */}
                        <div className="mb-4">
                            <TextField size="small" variant="outlined" type="text" id="emailid" name="emailid"
                                label="Email id" />
                            <p className="d-none"><small className="text-muted font-super-small">Provide a valid email address to verify if its you</small></p>
                        </div>
                        {/* username */}
                        <div className="mb-4">
                            <TextField value={formik.values.username} size="small" variant="outlined"
                                type="text" id="username" name="username" label="Username" />
                            <p className="d-none"><small className="text-muted font-super-small">Make sure username is unique, it is how others distinguish you...</small></p>
                        </div>
                        {/* firstname */}
                        <div className="mb-4">
                            <TextField size="small" value={formik.values.firstname} variant="outlined" type="text" id="firstname" name="firstname"
                                label="Firstname" />
                            <p className="d-none"><small className="text-muted font-super-small">Enter your firstname</small></p>
                        </div>
                        {/* lastname/surname */}
                        <div className="mb-4">
                            <TextField size="small" value={formik.values.lastname} variant="outlined" type="text" id="lastname" name="lastname"
                                label="Lastname/Surname" />
                            <p className="d-none"><small className="text-muted font-super-small">Enter your lastname or surname</small></p>
                        </div>
                        {/* password */}
                        <div className="mb-4">
                            <TextField size="small" value={formik.values.password} variant="outlined" type="password" id="password" name="password"
                                label="Password" />
                            <p className="d-none"><small className="text-muted font-super-small">Enter a strong password with atleast 8 charecters length and consiting atleast one number and one special charecter</small></p>
                        </div>
                        {/* Confirm password */}

                        {/* <FormControl variant="outlined" className="restrict-width">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={formik.values.password ? 'text' : 'password'}
                            value={formik.values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">

                                    <VisibilityOff />

                                </InputAdornment>
                            }

                        />
                    </FormControl> */}

                        <div className="mb-4">
                            <TextField size="small" value={formik.values.confirmPassword} variant="outlined" type="password" id="cpassword" name="cpassword"
                                label="Confirm Password" />
                            <p className="d-none"><small className="text-muted font-super-small">Make sure both the passwords match</small></p>
                        </div>

                        <Button className="mb-4" variant="contained" color="secondary" type="submit">Submit</Button>
                    </form>
                </Box>
            </Container>
        </div>
    );

}

export default SignUp;