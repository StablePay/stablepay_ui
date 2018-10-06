

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    justifyContent: "center",
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    [theme.breakpoints.up('md')]: {
          width: 300,
      },
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});



class SelectCommon extends React.Component {
  state = {
    value: this.props.data[0].value,
  };

  handleChange = name => event => {
   
    this.setState({
      [name]: event.target.value,
    });
    this.props.onChange(event.target.value)
  };


  render() {
    const { classes, data } = this.props;

     return (
      <form className={classes.container} noValidate autoComplete="off">
         <TextField
          id="standard-select-currency"
          select
          label={this.props.name}
          className={classes.textField}
          value={this.state.value}
          onChange={this.handleChange('value')}
          fullWidth
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText={this.props.helperText}
          margin="normal"
        >
          {data.map(option => (
            <MenuItem key={option.value} value={option.value} onChange={this.handleChange} >
    <img src={`../../static/${option.src}`} alt={option.label} height="22" width="22"></img> &nbsp; &nbsp;{option.label} <span style={{float: "right"}}>{option.token}</span> 
            </MenuItem>
          ))}
        </TextField>
       
      </form>
    );
  }
}

SelectCommon.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
};

export default withStyles(styles)(SelectCommon);