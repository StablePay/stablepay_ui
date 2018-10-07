import React from 'react'

import { withStyles } from '@material-ui/core/styles';
import Head from '../components/head'

import TextButton from '../components/common/TextButton'
import LogoImage from '../components/Home/LogoImage'
import LogoName from '../components/Home/LogoName'

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center'
  }, 
  button: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '30px', 
  }, 
  logoImage: {
   
    marginTop: '50px'
  }, 
  logoName: {
 
    marginTop: '30px'
  }, 

});

function Home (props) {
  const { classes } = props;
return(
  <div className={classes.root}>
    <Head title="Home" />
 

    <div>
    <div className={classes.logoImage}>    <LogoImage /></div>
    <div className={classes.logoName}><LogoName /></div>

      <div className="title">Instant and Secure Token Payments Converted to USD</div>
      
    
      <div className={classes.button}>  <TextButton name="Get started" href='pay'/></div>
    
      <div style={{marginTop: '20px', marginBottom:'10px', fontSize: '24px'}}>Supports: </div>
    
      <div style={{textAlign: 'center'}}>

     <span style={{margin: '5px'}}><img src="../static/dai-2.svg" alt="dai" width="55" height="60"  /></span> 
     <span style={{margin: '5px'}}><img src="../static/trueusd.svg" alt="trueusd" width="55" height="60" /></span> 
      </div>
   <div></div>
      
      <div style={{marginTop: '20px', marginBottom:'10px', fontSize: '24px'}}>Powered by:</div>
      <div><img src="../static/0x.png" alt="0x" width="50" height="50" /></div>
    </div>

    <style jsx>{`
   
      .title {
        margin: 0;
        width: 100%;
        // padding-top: 80px;
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
