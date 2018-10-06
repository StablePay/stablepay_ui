import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: "30px",
  },
  paper: {
    height: 140,
    width: 100,
  },

});

class NavbarPaymentPrice extends React.Component {
 

  render() {
    const { classes } = this.props;
  

    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid container className={classes.demo} justify="center" spacing={40}>
         
             <Grid  item>
             <img src='/static/Logo.svg' alt='Tablepay' width='142' />
              </Grid>
              <Grid  item>
              <i className="material-icons">
              add_shopping_cart
</i> $ 299.99
              </Grid>
          </Grid>
          <hr style={{backgroundColor: "#E0E0E0", height: "1px", border: 0}} />
        </Grid>
  
      </Grid>
    );
  }
}

NavbarPaymentPrice.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavbarPaymentPrice);