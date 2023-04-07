import * as React from 'react';
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ActiveState from './ActiveState';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  App:{
    marginTop:'1rem'
  },
  title:{
    display:'flex', 
    flexDirection:'row', 
    justifyContent:'space-between', 
    alignItems: 'center',
    padding:'0 1rem 0 1rem'
  },
  personalDetailsText:{
    display: 'flex', 
    alignItems: 'center'
  },
  personalDetails:{
    backgroundColor: '#bdbdbd', 
    height: 1, 
    flex: 1, 
    margin: '0 10px'
  },
  Step1:{
    display:'flex', 
    widows: '100%', 
    justifyContent: 'space-between', 
    marginTop: 20
  },
  Details:{
    display: 'flex', 
    widows: '100%', 
    justifyContent: 'space-between', 
    marginTop: 10
  },
  insideApp:{
    display:'flex', 
    flexDirection:'row', 
    justifyContent: 'space-between', 
    width: '99%'
  },
  Submit:{
    display: 'flex',
    widows: '100%', 
    justifyContent: 'space-between', 
    marginTop: 20
  },
  Finish:{
    display:'flex', 
    flexDirection:'row', 
    justifyContent: 'space-between', 
    width: '100%'
  },
  formSubmit:{
    display: 'flex', 
    flexDirection: 'row', 
    pt: 2
  },
  formSubmitInside:{
    flex: '1 1 auto'
  }
}));

// const steps = ['Contact Details Details', 'Contact Details', 'Contact Details Details Details'];
export default function HorizontalLinearStepper() {
  const classes = useStyles();
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formValues, setFormValues] = useState({});

    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
    First_Name:"",
    Last_Name:"",
    User_Name:"",
    Password:"",
    Email:"",
    Phone:"",
    Address_Linel:"",
    Address_Line2:"",
    Employer_Name: "",
    Designation: "",
    Total_Experience: "",
    City:"",
    });
  
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
      };
      
      const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
      };
      
    const nextStep = () => {
      setStep(step + 1);
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const prevStep = () => {
      setStep(step - 1);
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
  const [activeStep, setActiveStep] = React.useState(0);

  const handleReset = () => {
    setActiveStep(0);
    window.location.reload(false);
  };

  return (
    <div className={classes.App}>
    <div className={classes.title}>
      
      <p className={classes.personalDetailsText}><ActiveState step={0} activeStep={activeStep}/>Personal Details</p>
      <div className={classes.personalDetails}></div>
      {(()=>{
        if(activeStep>=1){
          return <p className={classes.personalDetailsText}><ActiveState step={1} activeStep={activeStep}/>Contact Details</p>
        }
        else{
          return <p><ActiveState step={1} activeStep={activeStep}/>Contact Details</p>
        }
      })()}

      <div className={classes.personalDetails}></div>

      {(()=>{
        if(activeStep>=2){
          return <p className={classes.personalDetailsText}><ActiveState step={2} formSubmitted={formSubmitted} activeStep={activeStep}/>Job Details</p>
        }
        else{
          return <p><ActiveState step={2} formSubmitted={formSubmitted} activeStep={activeStep}/>Job Details</p>
        }
      })()}
      
    </div>
         {(
        <div>
          <p sx={{ mt: 2, mb: 1 }}>
          {activeStep === 0 && (
        <form onSubmit={nextStep}>
                <div className={classes.Step1}>
                  <TextField style={{width: '50%', margin: 10}} type="name" id="outlined-basic" label="First Name" variant="outlined" name="First_Name" value={formData.name} onChange={handleChange} required/>
                  <TextField style={{width: '50%', margin: 10}} type="name" id="outlined-basic" label="Last Name" variant="outlined" name="Last_Name" value={formData.name} onChange={handleChange} required/>
                </div>
                <div className={classes.Details}>
                <TextField style={{width: '50%', margin: 10}} type="name" id="outlined-basic" label="User Name" variant="outlined" name="User_Name" value={formData.name} onChange={handleChange} required/>
                <TextField style={{width: '50%', margin: 10}} type="password" id="outlined-basic" label="Password" variant="outlined" name="Password" value={formData.name} onChange={handleChange} required/>
                </div>
      
      <div className={classes.insideApp}>
      <Button type="submit" style={{marginLeft:'96%', backgroundColor:'#1976d2', color:'white'}}>Next</Button>
        </div>
        </form>
      )}
       {activeStep === 1 && (
        <form onSubmit={nextStep}>
                <div style={{display: 'flex', widows: '100%', justifyContent: 'space-between', marginTop: 20}}>
                  <TextField style={{width: '50%', margin: 10}} type="email" id="outlined-basic" label="Email" variant="outlined" name="Email" value={formData.name} onChange={handleChange} required/>
                  <TextField style={{width: '50%', margin: 10}} type="number" id="outlined-basic" label="Phone" variant="outlined" name="Phone" value={formData.name} onChange={handleChange} required/>
                </div>
                <div className={classes.Details}>
                <TextField style={{width: '50%', margin: 10}} type="name" id="outlined-basic" label="Address Linel" variant="outlined" name="Address_Linel" value={formData.name} onChange={handleChange} required/>
                <TextField style={{width: '50%', margin: 10}} type="name" id="outlined-basic" label="Address Line2" variant="outlined" name="Address_Line2" value={formData.name} onChange={handleChange}/>
                </div>

        <div className={classes.insideApp}>
        <Button type="button" onClick={prevStep} style={{marginLeft:'1%',backgroundColor:'#1976d2', color:'white'}}>Previous</Button>
        <Button type="submit" style={{marginLeft:'87.5%', backgroundColor:'#1976d2', color:'white'}}>Next</Button>
        </div>
        </form>
      )}
      {activeStep === 2 && (
  <div>
      <form onSubmit={handleSubmit}>
      <div className={classes.Submit}>
                  <TextField style={{width: '50%', margin: 10}} type="name" id="outlined-basic" label="Employer Name" variant="outlined" name="Employer_Name" value={formData.name} onChange={handleChange} required/>
                  <TextField style={{width: '50%', margin: 10}} type="name" id="outlined-basic" label="Designation" variant="outlined" name="Designation" value={formData.name} onChange={handleChange} required/>
                </div>
                <div className={classes.Details}>
                <TextField style={{width: '50%', margin: 10}} type="number" id="outlined-basic" label="Total Experience" variant="outlined" name="Total_Experience" value={formData.name} onChange={handleChange} required/>
                <TextField style={{width: '50%', margin: 10}} type="name" id="outlined-basic" label="City" variant="outlined" name="City" value={formData.name} onChange={handleChange} required/>
                </div>
        {formSubmitted ? (
        <div>
          <div className={classes.formSubmit}>
            <div className={classes.formSubmitInside}/>

            <div className={classes.Finish}>
            <Button type="button" onClick={prevStep} style={{marginLeft:'.7%',backgroundColor:'#1976d2', color:'white'}}>Previous</Button>
            <Button onClick={handleReset} style={{ marginRight:'.7%', backgroundColor:'#1976d2', color:'white'}}>Finish</Button>
            </div>
          </div>
        </div>
      ) : (
        <div className={classes.insideApp}>
        <Button type="button" onClick={prevStep} style={{marginLeft:'1%',backgroundColor:'#1976d2', color:'white'}}>Previous</Button>
        <Button type="submit" style={{marginLeft:'87.7%', backgroundColor:'#1976d2', color:'white'}}>Submit</Button>
        </div>
      )}
      </form>
      {formSubmitted ? (
      <p>
        <div>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
        </div>
      </p>
    ) : (
        " "
    )}
  </div>
)}
        </p>
        </div>
      )}
    </div>
    
  );
}
