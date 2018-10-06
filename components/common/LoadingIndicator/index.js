import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Spinner from './Spinner';
import Grid from '@material-ui/core/Grid';

class LoadingIndicator extends React.Component {
  state = {
    open: false,
    vertical: 'top',
    horizontal: 'center',
  };

  handleClick = state => () => {
    this.setState({ open: true, ...state });
  };

  // handleClose = () => {
  //   this.setState({ open: false });
  // };

  render() {
    const { vertical, horizontal } = this.state;
    const { show, description, onClose } = this.props;
    return (
      <div>
        <Button onClick={this.handleClick({ vertical: 'top', horizontal: 'center' })}>
          Top-Center
        </Button>
    
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={show}
          onClose={onClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<div id="message-id">
           <Grid container spacing={24}>
           <Grid item  sm={4}>
           <Spinner />
        </Grid>
        <Grid item sm={8}>
        {description}
        </Grid>
           
           </Grid>
           
         
          </div>}
        />
      </div>
    );
  }
}

export default LoadingIndicator;