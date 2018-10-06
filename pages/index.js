import React from 'react'

import { withStyles } from '@material-ui/core/styles';
import Head from '../components/head'

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
 

    <div>
    <div className={classes.logoImage}>    <LogoImage /></div>
    <div className={classes.logoName}><LogoName /></div>

      <div className="title">Accept CryptoCurrency Payments on your Store</div>
    
      <div className={classes.button}>  <TextButton name="Get started" href='pay'/></div>
    
   
    </div>

    <style jsx>{`
   
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
     
    `}</style>
  </div>
)
    }

export default withStyles(styles)(Home)
