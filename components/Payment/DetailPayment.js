import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    textAlign: "justify",
    marginTop: "20px",
    margin: "5px",
    
    borderRadius: "5px",
    backgroundColor: "#ECEFF1", 
    [theme.breakpoints.up('md')]: {
       marginRight: "550px",
       marginLeft: "550px",
      },
  },
});

function DetailPayment(props) {
  const { classes, tokenName, exchangeAmount } = props;

  return (
    <div>
      <div className={classes.root} elevation={1}>
        <Typography component="p">
You will Exchange <span style={{float: "right"}}>{exchangeAmount} {tokenName}</span>
        </Typography>
        < hr />
        <Typography component="p">
          You will use <span style={{fontWeight: "bold"}}>{exchangeAmount} {tokenName}</span> from your balance to pay. see <span style={{color: "#2593e8", fontWeight: "bold"}}> more details</span>
        </Typography>
      
      </div>
    </div>
  );
}

DetailPayment.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DetailPayment);