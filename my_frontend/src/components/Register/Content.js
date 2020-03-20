import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// import Form from './Form' 
import { Link } from 'react-router-dom'

const  Copyright = () => (
    // return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="#">
                RMR Soluções
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
// }

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://martexweb.com.br/wp-content/uploads/2019/07/Cria%C3%A7%C3%A3o-de-sites-em-Londrina-com-A-Martex-web.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
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

export default function Login() {
    const classes = useStyles();

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        Cadastrar Estabelecimento
                    </Typography>
                    {/* <Form classes= /> */}
                    <form className={classes.form} noValidate>

                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            //   id="email"
                            label="Nome do estabelecimento"
                            name="name"
                            //   autoComplete="email"
                            autoFocus
                        />

                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Digite o e-mail"
                            name="email"
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
                            id="password"
                            autoComplete="current-password"
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Confirmar senha"
                            type="password"
                            id="password"
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
                            {/* <Grid item xs>                
                <Link href="#" variant="body2">
                  Esqueci a minha senha
                </Link>
              </Grid> */}
                            <Grid item>
                                <Link to={`/register`} variant="body2">
                                    {"Já possui uma conta?  Entrar"}
                                </Link>
                            </Grid>
                        </Grid>
                        <Box mt={5}>
                            <Copyright />
                        </Box>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}

// https://www.google.com/search?q=images%20ui&tbm=isch&hl=pt-BR&hl=pt-BR&tbs=rimg%3ACZQYdU3nrch_1ImA63MTq8oWaGC1hf9ONevq4UFZ1_1QspGZiwqXyp_1ppX0CwNNuxlR0p2zSOMdnzye8DCTfBpL1UJV_1GcS_1NBNzIxnZPXOfpb_1ADCXdEe_19HnsLsEVpO-jtRyPXWYmqB9nHUqEgk63MTq8oWaGBGY6A2VszkwTCoSCS1hf9ONevq4EZf0Z5ppUjacKhIJUFZ1_1QspGZgRImF0yLvwU-AqEgmwqXyp_1ppX0BGhpuz7mP6kUyoSCSwNNuxlR0p2EetpdvMiBxdTKhIJzSOMdnzye8ARGfQpZ_1ypI0kqEgnCTfBpL1UJVxEj2JVckSenPCoSCfGcS_1NBNzIxEc-_16PTrewSAKhIJnZPXOfpb_1AARDNigJ9A4XRgqEgnCXdEe_19HnsBEhqPR-rGdNeSoSCbsEVpO-jtRyESNdI6ZgBeM2KhIJPXWYmqB9nHURgKZLftzVgCBhb9dcJEb2-o8&ved=0CBsQuIIBahcKEwiwtazpndnnAhUAAAAAHQAAAAAQBw&biw=1351&bih=671
// https://humber.ca/hrms//wp-content/uploads/2019/06/coding-isometric-12.png
// https://image.freepik.com/vetores-gratis/conceito-de-design-do-smartphone-ui-ux-e-aplicacao_73903-155.jpg
// https://i.pinimg.com/originals/48/1b/f5/481bf567d153b61decde5003f6faf03c.png
// https://i.pinimg.com/originals/10/7c/cc/107ccc81baaed52134c2a46493519da6.png
// https://cdn1.vectorstock.com/i/1000x1000/74/55/isometric-design-concept-for-landing-page-vector-22927455.jpg
// https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/120065908/original/af35b3a1a744fdfe4aab23faa4898822461b962d/create-incredible-isometric-illustrations.png
// https://www.google.com/search?q=images%20ui&tbm=isch&hl=pt-BR&hl=pt-BR&tbs=rimg%3ACdmzVEoLyvNnImC16p5gV1LvqBJS-pKOTq9u55-t-iGHXME6lDn8bgoRvGi_18oafETVLrTRYvj0o3d_1NQoaj6ssp78czqjO0rHwgar5plQU5GfK6LvBhuTanohaSsC94VOsznAGuze-6VRQqEgm16p5gV1LvqBEPvgKURy1nXioSCRJS-pKOTq9uEWdeVVFljf4SKhIJ55-t-iGHXMERfdogpgku8SkqEgk6lDn8bgoRvBFDqFpW-B4wbioSCWi_18oafETVLETQVXsFTjysYKhIJrTRYvj0o3d8RJBWLWTCw1tkqEgnNQoaj6ssp7xEuj5X4gtpVrSoSCcczqjO0rHwgETA3OfsupAUvKhIJar5plQU5GfIRs6PITpSxQosqEgm6LvBhuTanohHHYeItfNC71ioSCRaSsC94VOszEZOpadfvNxA7KhIJnAGuze-6VRQRRiiTsJT1m_1lhNfSzTlvcg1Y&ved=0CBsQuIIBahcKEwjoiJ6jmNnnAhUAAAAAHQAAAAAQHw&biw=1351&bih=671