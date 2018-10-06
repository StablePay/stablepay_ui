import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
  } from "react-device-detect";

  import SelectCommon from '../SelectCommon';
  

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function SelectWallet(props) {
  const { classes, WalletData, WalletBrowserData, name, helperText } = props;



  return (
    <div className={classes.root}>
        <BrowserView>
            <SelectCommon 
             data={WalletBrowserData}
     
                name={name}
                helperText={helperText}
                onChange= {value => this.onChangeWallet(value)}
                />
        </BrowserView>
        <MobileView>
            <SelectCommon 
                data={WalletData}
                name={name}
                helperText={helperText}
                onChange= {value => this.onChangeWallet(value)}
                />
        </MobileView>
    </div>
  );
}

SelectWallet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectWallet);