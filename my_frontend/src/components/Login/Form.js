import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import { Link } from 'react-router-dom'

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

    const getFormData = () => {
        let form_data = new FormData();

        form_data.append('email', email);
        form_data.append('password', password);

        return form_data
    }

    const handleSubmit = () => {
        console.log('form submit')
   
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
        </div>





    )
}
export default Form;