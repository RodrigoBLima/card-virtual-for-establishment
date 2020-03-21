import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Form from './Form' 

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
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  }
}));

export default function Login() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Form />
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