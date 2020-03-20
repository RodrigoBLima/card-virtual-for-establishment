import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './initial.css'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
}));

export default function Found() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>

                <Grid item xs={6} sm={6}>
                    <img
                        className="menu-image"
                        src="https://tek2d.com/wp-content/uploads/2019/01/UI-UX.jpg"
                    />
                </Grid>

                <Grid item xs={6}>
                    <h1>Lorem ipsum Lorem ipsumLorem ipsumLorem ipsum</h1>
                    <Paper className={classes.paper}>
                        <Typography className={classes.title} variant="h2" noWrap>
                            Algo aqui
                       </Typography >
                        <p>
                            A expressão Lorem ipsum em design gráfico e editoração é um texto
                            padrão em latim utilizado na produção gráfica para preencher os
                            espaços de texto em publicações para testar e
                            ajustar aspectos visuais antes de utilizar conteúdo rea
                        </p>
                        <Grid item xs={12} sm={6}>
                            <Button color="primary" variant="contained">ALgo escrito aqui</Button>
                        </Grid>
                    </Paper>
                    <p className="footer-initial-page">Copyright © 2020 Nome projeto   | <Link href="#">Política de privacidade</Link></p>
                </Grid>


            </Grid>
        </div>
    )

}


