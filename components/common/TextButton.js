import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// const Root = styled.div`
//     margin-top: 130px;
//     flex: 1;
//     text-align: center;
//     // width: 300;
//     @media only screen and (max-width: 600px) {
//      margin-left: 10px;
//      margin-right: 10px;
     
//   }, 
 
  
 
// `

// const StyledButton = styled(Button)`
//   && {
//   background: #2593e8;
//   border-radius: 3px;
//   // border: 0;
//   color: #fff;

//   // padding: 0 50px;
//   padding-left: 100px;
//   padding-right: 100px;
  

//   }, 
 

// `
// function TextButtons (props) {
//   return (
//     <Root>
//       <StyledButton 
//     onClick={props.buttonClick}
//       variant='contained' 
//       href={props.href}>
//         {props.name}
//       </StyledButton>

//     </Root>
//   )
// }
const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    backgroundColor: '#2593e8',
    color: '#fff', 
    
  },
});
function TextButtons (props) {
  const { classes } = props;
  return (
    <Button fullWidth variant="contained" size="large"  href={props.href} className={classes.button}>
         {props.name}
        </Button>
  )
}


export default withStyles(styles)(TextButtons)
