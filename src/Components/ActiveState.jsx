import { CheckCircle } from '@mui/icons-material'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
 Component1:{
  background: '#1976d2', 
  marginRight: '5px', 
  padding: '5px 11px ', 
  color: 'white', 
  fontStyle: 'normal', 
  borderRadius: '50%'
},
  Component2:{
  background: '#444', 
  marginRight: '5px', 
  padding: '5px 11px ', 
  color: 'white', 
  fontStyle: 'normal', 
  borderRadius: '50%'
}
}));
function ActiveState(props) {
  return (props.formSubmitted || props.activeStep > props.step) ? (
    <>
        <CheckCircle sx={{fontSize: '30px', marginRight: '5px', color:"#1976d2"}} />
    </>
  ) : (
    props.activeStep === props.step ? (
        <>
          <i className={classes.Component1}>{props.step+1}</i>
        </>
      ) : (
        <>
          <i className={classes.Component2}>{props.step+1}</i>
        </>
      )
  )
}

export default ActiveState
