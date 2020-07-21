import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import { Link } from 'react-router-dom'
import  myConfig from '../../constants/index'
import { ToastContainer, toast } from "react-toastify";

const useStyles = makeStyles(theme => ({
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));



function Form() {
    const classes = useStyles();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function formData() {
        const form_data = new FormData();
    
        form_data.append("username", email);
        form_data.append("password", password);
        form_data.append("grant_type", "password");
        form_data.append("client_id", "your_client_id");
        form_data.append(
          "client_secret",
          "your_client_Secret"
        );
    
        return form_data;
      }
    
    const handleSubmit = () => {
        console.log('form submit')
        const LOGIN_URL = `${myConfig.API_URL}/o/token/`;

        axios({
            baseURL: LOGIN_URL,
            method: "POST",
            data: formData(),
          })
            .then((res) => {
              if (res.status === 200) {
                console.log(res.data);
                localStorage.setItem("est-token", res.data.access_token);
                toast("Login realizado com sucesso.");
                window.location.href = "/";
              }
            })
            .catch((error) => {
              console.log("ERROR", error);
              toast("Email ou senha inválidos.");
            });

    }


    return (

        <div className={classes.paper}>
            <Typography component="h1" variant="h5">
                Entrar
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    // id="email"
                    label="Digite seu e-mail"
                    name="email"
                    autoComplete="email"
                    onChange={e => setEmail(e.target.value)}
                    autoFocus
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Digite a sua senha"
                    type="password"
                    // id="password"
                    onChange={e => setPassword(e.target.value)}
                    autoComplete="current-password"
                />

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Entrar
                </Button>
                <Grid container>
                    <Grid item xs>
                        <a href="#" className="router-link" variant="body2">
                            Esqueci minha senha
                        </a>
                    </Grid>
                    <Grid item>
                        Não possui uma conta? 
                        <Link to={`/register`} className="router-link" variant="body2"> Registre-se </Link>
                    </Grid>
                </Grid>

            </form>
            <ToastContainer />
        </div>





    )
}
export default Form;