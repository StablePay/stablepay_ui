import React from 'react'
import Link from 'next/link'
import { withStyles } from '@material-ui/core/styles';
import Head from '../components/head'
import Nav from '../components/nav'
import TextButton from '../components/common/TextButton'
import LogoImage from '../components/Home/LogoImage'
import LogoName from '../components/Home/LogoName'

const styles = theme => ({
  button: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '30px', 
  }, 
  logoImage: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '100px'
  }, 
  logoName: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '50px'
  }, 

});

function Home (props) {
  const { classes } = props;
return(
  <div>
    <Head title="Home" />
    {/* <Nav /> */}

    <div className="hero">
    <div className={classes.logoImage}>    <LogoImage /></div>
    <div className={classes.logoName}><LogoName /></div>

      <div className="title">Accept CryptoCurrency Payments on your Store</div>
    
      <div className={classes.button}>  <TextButton name="Get started" href='pay'/></div>
    
   
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 28px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
)
    }

export default withStyles(styles)(Home)
