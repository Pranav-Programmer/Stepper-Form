import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const steps = ['Personal Details', 'Contact Details', 'Job Details'];
export default function HorizontalLinearStepper() {

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
//   const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 5;
  };

//   const isStepSkipped = (step) => {
//     return skipped.has(step);
//   };

//   const handleNext = () => {
//     let newSkipped = skipped;
//     if (isStepSkipped(activeStep)) {
//       newSkipped = new Set(newSkipped.values());
//       newSkipped.delete(activeStep);
//     }

//     setActiveStep((prevActiveStep) =>  prevActiveStep + 1);
//     setSkipped(newSkipped);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleSkip = () => {
//     if (!isStepOptional(activeStep)) {
//       // You probably want to guard against something like this,
//       // it should never occur unless someone's actively trying to break something.
//       throw new Error("You can't skip a step that isn't optional.");
//     }

//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     setSkipped((prevSkipped) => {
//       const newSkipped = new Set(prevSkipped.values());
//       newSkipped.add(activeStep);
//       return newSkipped;
//     });
//   };

  const handleReset = () => {
    setActiveStep(0);
    window.location.reload(false);
  };

  return (
    <div style={{marginTop:'1rem'}}>
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
        //   if (isStepSkipped(index)) {
        //     stepProps.completed = false;
        //   }
          if (activeStep === 2){
            
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {/* {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <button onClick={handleReset}>Reset</button>
          </Box>
        </React.Fragment>) : */}
         {(
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
          {activeStep === 0 && (
        <form onSubmit={nextStep}>
                <div style={{display: 'flex', widows: '100%', justifyContent: 'space-between', marginTop: 20}}>
                  <TextField style={{width: '50%', margin: 10}} type="name" id="outlined-basic" label="First Name" variant="outlined" name="First_Name" value={formData.name} onChange={handleChange} required/>
                  <TextField style={{width: '50%', margin: 10}} type="name" id="outlined-basic" label="Last Name" variant="outlined" name="Last_Name" value={formData.name} onChange={handleChange} required/>
                </div>
                <div style={{display: 'flex', widows: '100%', justifyContent: 'space-between', marginTop: 10}}>
                <TextField style={{width: '50%', margin: 10}} type="name" id="outlined-basic" label="User Name" variant="outlined" name="User_Name" value={formData.name} onChange={handleChange} required/>
                <TextField style={{width: '50%', margin: 10}} type="password" id="outlined-basic" label="Password" variant="outlined" name="Password" value={formData.name} onChange={handleChange} required/>
                </div>
      
      <div style={{display:'flex', flexDirection:'row', justifyContent: 'space-between', width: '99%'}}>
      <Button type="submit" style={{marginLeft:'95%', backgroundColor:'#1976d2', color:'white'}}>Next</Button>
        </div>
        </form>
      )}
       {activeStep === 1 && (
        <form onSubmit={nextStep}>
                <div style={{display: 'flex', widows: '100%', justifyContent: 'space-between', marginTop: 20}}>
                  <TextField style={{width: '50%', margin: 10}} type="email" id="outlined-basic" label="Email" variant="outlined" name="Email" value={formData.name} onChange={handleChange} required/>
                  <TextField style={{width: '50%', margin: 10}} type="number" id="outlined-basic" label="Phone" variant="outlined" name="Phone" value={formData.name} onChange={handleChange} required/>
                </div>
                <div style={{display: 'flex', widows: '100%', justifyContent: 'space-between', marginTop: 10}}>
                <TextField style={{width: '50%', margin: 10}} type="name" id="outlined-basic" label="Address Linel" variant="outlined" name="Address_Linel" value={formData.name} onChange={handleChange} required/>
                <TextField style={{width: '50%', margin: 10}} type="name" id="outlined-basic" label="Address Line2" variant="outlined" name="Address_Line2" value={formData.name} onChange={handleChange}/>
                </div>
      
        

        <div style={{display:'flex', flexDirection:'row', justifyContent: 'space-between', width: '99%'}}>
        <Button type="button" onClick={prevStep} style={{marginLeft:'1%',backgroundColor:'#1976d2', color:'white'}}>Previous</Button>
        <Button type="submit" style={{marginLeft:'87.7%', backgroundColor:'#1976d2', color:'white'}}>Next</Button>
        </div>

      
        </form>
      )}
      {activeStep === 2 && (
  <React.Fragment>
   
      <form onSubmit={handleSubmit}>
      <div style={{display: 'flex', widows: '100%', justifyContent: 'space-between', marginTop: 20}}>
                  <TextField style={{width: '50%', margin: 10}} type="name" id="outlined-basic" label="Employer Name" variant="outlined" name="Employer_Name" value={formData.name} onChange={handleChange} required/>
                  <TextField style={{width: '50%', margin: 10}} type="name" id="outlined-basic" label="Designation" variant="outlined" name="Designation" value={formData.name} onChange={handleChange} required/>
                </div>
                <div style={{display: 'flex', widows: '100%', justifyContent: 'space-between', marginTop: 10}}>
                <TextField style={{width: '50%', margin: 10}} type="number" id="outlined-basic" label="Total Experience" variant="outlined" name="Total_Experience" value={formData.name} onChange={handleChange} required/>
                <TextField style={{width: '50%', margin: 10}} type="name" id="outlined-basic" label="City" variant="outlined" name="City" value={formData.name} onChange={handleChange} required/>
                </div>
        
        {formSubmitted ? (
        <React.Fragment>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />

            <div style={{display:'flex', flexDirection:'row', justifyContent: 'space-between', width: '99%'}}>
            <Button type="button" onClick={prevStep} style={{backgroundColor:'#1976d2', color:'white'}}>Previous</Button>
            <Button onClick={handleReset} style={{ marginRight:'1%', backgroundColor:'#1976d2', color:'white'}}>Finish</Button>
            </div>
          </Box>
        </React.Fragment>
      ) : (

        <div style={{display:'flex', flexDirection:'row', justifyContent: 'space-between', width: '99%'}}>
        <Button type="button" onClick={prevStep} style={{marginLeft:'1%',backgroundColor:'#1976d2', color:'white'}}>Previous</Button>
        <Button type="submit" style={{marginLeft:'87.7%', backgroundColor:'#1976d2', color:'white'}}>Submit</Button>
        </div>
        
      )}
      </form>
      {formSubmitted ? (
      <Typography>
        <Box>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
        </Box>
      </Typography>
    ) : (
        " "
    )}
  </React.Fragment>
)}
          </Typography>
        </React.Fragment>
      )}
    </Box>
    </div>
  );
}
