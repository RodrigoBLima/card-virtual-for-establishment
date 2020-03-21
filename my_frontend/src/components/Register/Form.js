import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import axios from 'axios'

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
    const [name_establishment, setName_establishment] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirm_password] = useState('');

    const getFormData = () => {
        let form_data = new FormData();

        form_data.append('name_establishment', name_establishment);
        form_data.append('email', email);
        form_data.append('password', password);


        return form_data
    }

    const handleSubmit = () => {
        console.log('form submit', name_establishment)

        if (password != confirm_password) {
         console.log('senhas não são iguais')
        }

    }


    return (
        <div className={classes.paper}>
            <Typography component="h1" variant="h5">
                Cadastrar Estabelecimento
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit}>

                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Nome do estabelecimento"
                    name="name_establishment"
                    onChange={e => setName_establishment(e.target.value)}
                    autoFocus
                />

                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    // id="email"
                    label="Digite o e-mail"
                    name="email"
                    onChange={e => setEmail(e.target.value)}
                    autoComplete="email"
                    autoFocus
                />

                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Digite a  senha"
                    type="password"
                    // id="password"
                    onChange={e => setPassword(e.target.value)}
                    autoComplete="current-password"
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="confirm_password"
                    label="Confirmar senha"
                    type="password"
                    // id="confirm_password"
                    onChange={e => setConfirm_password(e.target.value)}

                    autoComplete="current-password"
                />

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Cadastrar
                </Button>

                <Grid container>
                    <Grid item>
                        Já possui uma conta?
                    <Link to={`/login`} className="router-link" variant="body2">Entrar</Link>
                    </Grid>
                </Grid>

            </form>
        </div>

    )


}
export default Form;