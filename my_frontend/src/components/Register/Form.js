import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link,useHistory } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import myConfig from '../../constants/index'

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Form() {
  const classes = useStyles();
  const [name_establishment, setName_establishment] = useState("");
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");

  const history = useHistory();

  const handleSubmit = () => {
    if (password != confirm_password) {
        toast("senhas não são iguais");
    }

    const data = {
      name_establishment,
      username,
      password,
      email: username,
    };

    let USER_URL = myConfig.API_URL + "/establishment/";
    axios({
      baseURL: USER_URL,
      method: "POST",
      data: data,
    })
      .then((res) => {
        if (res.status === 201) {
          toast(`Cadastro realizado com sucesso !`);
        }
        setTimeout(() => {
          history.push("/login/");
        }, 5000);
      })
      .catch((error) => {
        console.log(error);
        let error_msg = "";
        Object.keys(error.response.data).forEach(function (e) {
          error_msg += e + ": " + error.response.data[e][0] + " - ";
        });
        toast(error);
      });
  };

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
          onChange={(e) => setName_establishment(e.target.value)}
          autoFocus
        />

        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          // id="username"
          label="Digite o e-mail"
          name="username"
          onChange={(e) => setusername(e.target.value)}
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
          onChange={(e) => setPassword(e.target.value)}
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
          onChange={(e) => setConfirm_password(e.target.value)}
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
            <Link to={`/login`} className="router-link" variant="body2">
              Entrar
            </Link>
          </Grid>
        </Grid>
      </form>
      <ToastContainer />
    </div>
  );
}
export default Form;
