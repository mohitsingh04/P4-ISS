import React, { useState, Component, Children, Fragment } from "react";
import { useForm } from "react-hook-form";
import { Button, Form, Row, Col, ListGroup, InputGroup } from "react-bootstrap";
import DualListBox from 'react-dual-listbox';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import { Controller } from "react-hook-form";
import Box from '@mui/material/Box';
import StepLabel from '@mui/material/StepLabel';
import StepContent from "@mui/material/StepContent";
import Typography from '@mui/material/Typography';
import 'react-dual-listbox/lib/react-dual-listbox.css';
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import TimePicker from "@mui/lab/TimePicker";
import { useDropzone } from "react-dropzone";
import Dropzone from "react-dropzone-uploader";
import constate from "constate";
import InputColor from "react-input-color";
import Compact from "@uiw/react-color-compact";
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";
import { CForm, CCol, CFormLabel, CFormFeedback, CFormInput, CInputGroup, CInputGroupText, CButton, CFormCheck, } from "@coreui/react";
import ColorLensIcon from '@mui/icons-material/ColorLens';
import { SketchPicker } from "react-color";

// Box 1

export function SelectBox() {
  let [value, setValue] = useState([""]);
  function handleChange(selected) {
    setValue(selected);
    console.log(selected);
  }
  const options = [

    { value: "HTML5", label: "HTML5" },
    { value: "CSS 3", label: "CSS 3" },
    { value: "PHP", label: "PHP" },
    { value: "J-Query", label: "J-Query" },
    { value: ".Net", label: ".Net" },
    { value: "Java", label: "Java" },
    { value: "Android", label: "Android" },
    { value: "React JS", label: "React JS" },
    { value: "Angular JS", label: "Angular JS" },
    { value: "PhotoShop", label: "PhotoShop" },
    { value: "Python", label: "Python" },
    { value: "Sql", label: "Sql" },
    { value: "JavaScript", label: "JavaScript" }
  ];


  return (
    <DualListBox
      canFilter
      selected={value}
      options={options}
      filterCallback={(option, filterInput) => {
        if (filterInput === "") {
          return true;
        }
        console.log(option);
        // return containsWord(option.label, filterInput);
        let words = filterInput.split(" ");
        let res = false;
        for (let word of words) {
          console.log(word);
          res = new RegExp(word, "i").test(option.label);
          if (res === false) {
            break;
          }
        }
        return res;
      }}
      onChange={handleChange}
    />
  );
}
// Box 2

export function SelectBoxwithLabel() {
  let [value, setValue] = useState([""]);
  function handleChange(selected) {
    setValue(selected);
    console.log(selected);
  }
  const options = [
    {
      label: "Software Side",
      options: [
        { value: "Web designer", label: "Web designer" },
        {
          value: "Web Developer",
          label: "Web Developer"
        },
        {
          value: "Application Developer",
          label: "Application Developer"
        },
        {
          value: "App Designer",
          label: "App Designer"
        }
      ]
    },
    {
      label: "Voice Side",
      options: [
        { value: "Tell Caller", label: "Tell Caller" },
        {
          value: "Recruiter",
          label: "Recruiter"
        },
        {
          value: "HR",
          label: "HR"
        },
        {
          value: "Data Entry",
          label: "Data Entry"
        },
        {
          value: "Mapping",
          label: "Mapping"
        },
        {
          value: "US Recruiter",
          label: "US Recruiter"
        }
      ]
    }
  ];


  return (
    <DualListBox
      canFilter
      selected={value}
      options={options}
      filterCallback={(option, filterInput) => {
        if (filterInput === "") {
          return true;
        }
        console.log(option);
        // return containsWord(option.label, filterInput);
        let words = filterInput.split(" ");
        let res = false;
        for (let word of words) {
          console.log(word);
          res = new RegExp(word, "i").test(option.label);
          if (res === false) {
            break;
          }
        }
        return res;
      }}
      onChange={handleChange}
    />
  );
}

function MyButton({ visible, ...props }) {
  return (

    <button
      className={visible ? "btn btn-primary " : "invisible"}
      {...props}
    />

  );
}
const Wizard = ({ step: currentIndex, ...props }) => {
  const steps = Children.toArray(props.children);
  const prevStep = currentIndex !== 0 && steps[currentIndex - 1].props;
  const nextStep = currentIndex !== steps.length - 1 && steps[currentIndex + 1].props;

  return (
    <div>

      <nav className="btn-group steps basicsteps">
        {steps.map((step, index) => (
          <button
            key={step.props.number}
            onClick={() => props.onChange(index)}
            className={getClsNavBtn(index === currentIndex)}
          >
            <span className="number me-2 ">{step.props.number}</span>
            <i>{step.props.title}</i>
          </button>
        ))}
      </nav>

      {steps[currentIndex]}

      <div className=" p-3 d-flex justify-content-between  ">
        <MyButton
          visible={prevStep}
          onClick={() => props.onChange(currentIndex - 1)}
          title={prevStep.description}
        >
          Back
        </MyButton>
        <MyButton
          visible={nextStep}
          onClick={() => props.onChange(currentIndex + 1)}
          title={nextStep.description}
        >
          Next
        </MyButton>
      </div>
    </div>
  );
};
const Stepps = ({ children }) => children;

function getClsNavBtn(active) {
  return "btn" + (active ? " active" : "");
}
export class BasicContent extends Component {
  state = { step: 0 };

  handleStep = (step) => {
    this.setState({ step });
  };

  render() {
    return (
      <Wizard step={this.state.step} onChange={this.handleStep}>
        <Stepps title="LogIn" number="1">
          <section className="card-body Basicwizard ">
            <Form>
              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" id="exampleInputEmail6"
                  placeholder="Enter email address" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" className="form-control"
                  id="exampleInputPassword7" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mt-4 mb-3 justify-content-end">
                <Form.Check label='Check me Out' />
              </Form.Group>
            </Form>
          </section>
        </Stepps>
        <Stepps title="NewUser" number="2">
          <section className="card-body Basicwizard">
            <Form>
              <Form.Group>
                <Form.Label>User Name</Form.Label>
                <Form.Control type="text" className="form-control" id="inputtext"
                  placeholder="Enter User Name" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" className="form-control" id="exampleInputEmail8"
                  placeholder="Enter email address" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" className="form-control"
                  id="exampleInputPassword9" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mt-4 mb-3 justify-content-end">
                <Form.Check label='Check me Out' />
              </Form.Group>
            </Form>
          </section>
        </Stepps>
        <Stepps title="End" number="3">
          <section className="card-body Basicwizard ">
            <Row>
              <Form>
                <Form.Group className="mt-4 mb-3 d-flex">
                  <Form.Check label='I agree terms and Conditions' />
                </Form.Group>
              </Form>
            </Row>
          </section>
        </Stepps>
      </Wizard>
    );
  }
}

// Basic Wizard With Validation

function PersonalInformation({ nextStep, handleFormData, values }) {
  const [error, setError] = useState(false);
  const submitFormData = (e) => {
    e.preventDefault();
    if (
      validator.isEmpty(values.firstName) ||
      validator.isEmpty(values.lastName)
    ) {
      setError(true);
    } else {
      nextStep();
    }
  };

  return (
    <div>
      <span className="Stepperh3">Personal Information</span>
      <Form onSubmit={submitFormData}>
        <Row>
          <Col md={5} lg={4}>
            <Form.Group className="">
              <Form.Label className="form-control-label">Firstname: <span className="text-danger">*</span></Form.Label>
              <Form.Control style={{ border: error ? "2px solid #dc3545" : "" }} name="firstName" defaultValue={values.firstName} type="text" placeholder="First Name" onChange={handleFormData("firstName")} />
              {error ? (<Form.Text style={{ color: "#dc3545" }}> This value is ..</Form.Text>) : ("")}
            </Form.Group>
          </Col>
          <Col md={5} lg={4} className="mg-t-20 mg-md-t-0">
            <Form.Group className="">
              <Form.Label className="form-control-label">Lastname: <span className="text-danger">*</span></Form.Label>
              <Form.Control style={{ border: error ? "2px solid #dc3545" : "" }} name="lastName" defaultValue={values.lastName} type="text" placeholder="Last Name" onChange={handleFormData("lastName")} />
              {error ? (<Form.Text style={{ color: "#dc3545" }}> This value is .. </Form.Text>) : ("")}
            </Form.Group>
          </Col>
        </Row>
        <Button className='mt-4' type="submit"> Continue</Button>
      </Form>
    </div>
  );
}

function BillingInformation({ nextStep, handleFormData, prevStep, values }) {

  const [error, setError] = useState(false);

  const submitFormData = (e) => {
    e.preventDefault();


    if (validator.isEmpty(values.email)) {
      setError(true);
    } else {
      nextStep();
    }
  };
  return (
    <div>
      <span className="Stepperh3">Billing Information</span>
      <span>Wonderful transition effects.</span>
      <Form onSubmit={submitFormData}>
        <Form.Group className="wd-xs-300">
          <Form.Label>Email:<span className="text-danger">*</span> </Form.Label>

          <Form.Control
            style={{ border: error ? "2px solid red" : "" }}
            type="email"
            placeholder="email"
            onChange={handleFormData("email")}
          />
          {error ? (
            <Form.Text style={{ color: "red" }}>This is a  field</Form.Text>) : ("")}
        </Form.Group>
        <div >
          <Button className="float-start mt-4" onClick={prevStep}> Previous </Button>
          <Button className="float-end mt-4" type="submit">Submit </Button>
        </div>
      </Form>
    </div>
  );
};

function PaymentDetails({ nextStep, prevStep, values }) {

  const setError = useState;


  const submitFormData = (e) => {
    e.preventDefault();


    if (validator.isEmpty(values.email)) {
      setError(true);
    } else {
      nextStep();
    }
  };

  const submitForm = () => {
    alert('form submitted sucessfully !!')
  }
  return (
    <div>
      <span className="Stepperh3">Payment Details</span>

      <Form onSubmit={submitFormData}>
        <Form.Group>
          <Form.Label>CardHolder Name</Form.Label>
          <Form.Control type="text" placeholder="First Name" />

        </Form.Group>
        <Form.Group>
          <Form.Label>Card number</Form.Label>
          <InputGroup>
            <Form.Control type="number" placeholder="Search for..." />
            <span className="input-group-text btn btn-info shadow-none mb-0"> <i className="fa fa-cc-visa"></i> &nbsp; <i className="fa fa-cc-amex"></i> &nbsp;<i className="fa fa-cc-mastercard"></i></span>
          </InputGroup>
        </Form.Group>
        <Row>
          <Col sm={8}>
            <Form.Group className="mb-sm-0">
              <Form.Label >Expiration</Form.Label>
              <InputGroup> <Form.Control type="number" placeholder="MM" name="expiremonth" />

                <Form.Control type="number" placeholder="YY" name="expireyear" />

              </InputGroup>
            </Form.Group>
          </Col>
          <Col sm={4}>
            <Form.Group className="mb-0">
              <Form.Label >CVV <i className="fa fa-question-circle"></i></Form.Label>
              <Form.Control type="number" />

            </Form.Group>
          </Col>
        </Row>

        <div >
          <Button className="float-start mt-4" onClick={prevStep}> Previous </Button>
          <Button className="float-end mt-4" type="submit" onClick={submitForm}>Finish</Button>
        </div>
      </Form>
    </div>
  );
};


export function ValidationForm() {
  const [step, setstep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    email: ''
  })

  const nextStep = () => {
    setstep(step + 1);
  };

  // function for going to previous step by decreasing step state by 1
  const prevStep = () => {
    setstep(step - 1);
  };
  // handling form input data by taking onchange value and updating our previous form data state
  const handleInputData = (input) => (e) => {
    // input value from the form
    const { value } = e.target;

    //updating for data state taking previous state and then adding new value to create new object
    setFormData(prevState => ({
      ...prevState,
      [input]: value
    }));

  }
  switch (step) {
    case 1:
      return (<div className="custom-margin"> <PersonalInformation nextStep={nextStep} handleFormData={handleInputData} values={formData} /></div>);
    case 2:
      return (<div className="custom-margin"><BillingInformation nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} /></div>);
    case 3:
      return (<div className="custom-margin"> <PaymentDetails nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} /> </div>);
  }
}
// Vertical Orientation Wizard
export const VerticalOrientationWizard = () => {
  const [goSteps, setGoSteps] = useState(0);

  const handleClick = () => {
    alert('form submitted sucessfully !!')
  }

  return (
    <div className="">
      <Stepper activeStep={goSteps}>
        <Step onClick={() => setGoSteps(0)} />
        <Step onClick={() => setGoSteps(1)} />
        <Step onClick={() => setGoSteps(2)} />
      </Stepper>
      {goSteps === 0 && (
        <>
          <div className="row border" >
            <div className="col-xl-4 border-end">
              <span className="Stepperh3 d-flex p-4"><span className="number step3 me-2">1</span><span className="title my-0" onClick={() => setGoSteps(0)}>Personal Information</span></span>
              <span className="Stepperh3 d-flex p-4"><span className="number step2 me-2">2</span><span className="title Step1 my-0" onClick={() => setGoSteps(1)}>Billing Information</span></span>
              <span className="Stepperh3 d-flex p-4"><span className="number step2 me-2">3</span><span className="title Step1 my-0" onClick={() => setGoSteps(2)}>Payment Details</span></span>
            </div>
            <div className="col-xl-8 p-4">
              <section>
                <div className="control-group form-group">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control " placeholder="Name" />
                </div>
                <div className="control-group form-group">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control "
                    placeholder="Email Address" />
                </div>
                <div className="control-group form-group">
                  <label className="form-label">Phone Number</label>
                  <input type="number" className="form-control " placeholder="Number" />
                </div>
                <div className="control-group form-group mb-0">
                  <label className="form-label">Address</label>
                  <input type="text" className="form-control " placeholder="Address" />
                </div>
                <div className="control-group form-group mb-0">
                  <label className="form-label">Dropify Single Upload</label>
                  <Form.Control type="file" />
                </div>
                <div className="control-group form-group mb-0">
                  <label className="form-label">Multiple Fancy Upload</label>
                  <Form.Control type="file" multiple />
                </div>
              </section>
              <button
                className="btn btn-primary mt-2 float-end mt-4"
                onClick={() => setGoSteps(1)}
              >
                Next
              </button>
              <button
                className="btn btn-primary mt-2 float-start mt-4"
                onClick={() => setGoSteps(0)}
                disabled
              >
                Previous
              </button>
            </div>
          </div>
        </>
      )}
      {goSteps === 1 && (
        <div>
          <div className="row border" >
            <div className="col-sm-4 border-right">
              <span className="Stepperh3 d-flex p-4"><span className="number step2 me-2">1</span><span className="title Step1 my-0" onClick={() => setGoSteps(0)}>Personal Information</span></span>
              <span className="Stepperh3 d-flex p-4"><span className="number step3 me-2">2</span><span className="title my-0" onClick={() => setGoSteps(1)}>Billing Information </span></span>
              <span className="Stepperh3 d-flex p-4"><span className="number step2 me-2">3</span><span className="title Step1 my-0" onClick={() => setGoSteps(2)}>Payment Details</span></span>
            </div>
            <div className="col-sm-8 p-4">
              <section>
                <div className="table-responsive mg-t-20">
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <td>Cart Subtotal</td>
                        <td className="text-end">$792.00</td>
                      </tr>
                      <tr>
                        <td><span>Totals</span></td>
                        <td className="text-end text-muted"><span>$792.00</span></td>
                      </tr>
                      <tr>
                        <td><span>Order Total</span></td>
                        <td>
                          <h2 className="price text-end mb-0">$792.00</h2>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
            <div className="col-sm-4 border-right"></div>
            <div className="col-sm-8 p-4">
              <button
                className="btn btn-primary float-end mt-4"
                onClick={() => setGoSteps(2)}
              >
                Next
              </button>
              <button className="btn btn-primary float-start mt-4" onClick={() => setGoSteps(0)}>
                Previous
              </button>
            </div>
          </div>
        </div>

      )}
      {goSteps === 2 && (
        <>
          <div className="row border">
            <div className="col-sm-4 border-right">
              <span className="Stepperh3 d-flex p-4"><span className="number step2 me-2">1</span><span className="title Step1 my-0" onClick={() => setGoSteps(0)}>Personal Information</span></span>
              <span className="Stepperh3 d-flex p-4"><span className="number step2 me-2">2</span><span className="title Step1 my-0" onClick={() => setGoSteps(1)}>Billing Information </span></span>
              <span className="Stepperh3 d-flex p-4"><span className="number step3 me-2">3</span><span className="title my-0" onClick={() => setGoSteps(2)}>Payment Details</span></span>
            </div>
            <div className="col-sm-8 p-4">
              <section>
                <Form.Group>
                  <label className="form-label">CardHolder Name</label>
                  <input type="text" className="form-control" id="name1"
                    placeholder="First Name" />
                </Form.Group>
                <Form.Group>
                  <label className="form-label">Card number</label>
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search for..." />
                    <span className="input-group-text btn btn-info shadow-none mb-0">
                      <i className="fa fa-cc-visa"></i> &nbsp; <i
                        className="fa fa-cc-amex"></i> &nbsp;
                      <i className="fa fa-cc-mastercard"></i>
                    </span>
                  </div>
                </Form.Group>
                <Row>
                  <Col sm={8}>
                    <Form.Group className="mb-sm-0">
                      <label className="form-label">Expiration</label>
                      <div className="input-group">
                        <input type="number" className="form-control" placeholder="MM"
                          name="expiremonth" />
                        <input type="number" className="form-control" placeholder="YY"
                          name="expireyear" />
                      </div>
                    </Form.Group>
                  </Col>
                  <Col sm={4}>
                    <Form.Group className="mb-0">
                      <label className="form-label">CVV <i
                        className="fa fa-question-circle"></i></label>
                      <input type="number" className="form-control" />
                    </Form.Group>
                  </Col>
                </Row>
              </section>
            </div>
            <div className="col-sm-4 border-right"></div>
            <div className="col-sm-8 p-4">   <button
              className="btn btn-primary float-end mt-4"
              onClick={() => { handleClick(); setGoSteps(0) }}
            >
              Submit
            </button>
              <button className="btn btn-primary wizer float-start mt-4" onClick={() => setGoSteps(1)}>
                Previous
              </button></div>
          </div>
        </>
      )}
    </div>
  );
};
const steps = [{
  label: "Name & Email",
  description: (
    <>
      <ListGroup>
        <ListGroup.Item>
          <Form.Group>
            <Form.Label>Name:</Form.Label>
            <Form.Control type="text" name="name" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email:</Form.Label>
            <Form.Control type="text" name="email" />
          </Form.Group>
        </ListGroup.Item>
      </ListGroup>
    </>
  ),
},
{
  label: "Contact",
  description: (
    <>
      <ListGroup>
        <ListGroup.Item>
          <Form.Group>
            <Form.Label>Telephone:</Form.Label>
            <Form.Control type="text" name="telephone" className="form-control" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Mobile:</Form.Label>
            <Form.Control type="text" name="mobile" className="form-control" />
          </Form.Group>
        </ListGroup.Item>
      </ListGroup>
    </>
  ),
},
{
  label: "Payment",
  description: (
    <>
      <ListGroup>
        <ListGroup.Item>
          <Form.Group>
            <Form.Label>Credit card:</Form.Label>
            <Form.Control type="text" name="card" />
          </Form.Group>
          <Form.Group className="form-row">
            <Col sm={4}>
              <Form.Label>Expiry:</Form.Label>
              <Form.Control type="text" name="expiry" />
            </Col>
            <Col sm={4}>
              <Form.Label>CVV:</Form.Label>
              <Form.Control type="text" name="cvv" />
            </Col>
          </Form.Group>
        </ListGroup.Item>
      </ListGroup>
    </>
  ),
},];

export function BasicFormWizard() {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const isStepOptional = (step) => {
    return step === 1;
  };
  const isStepSkipped = (step) => {
    return skipped.has(step);
  };
  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };
  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => {
          const stepProps = {}
          // const labelProps: { optional?: React.ReactNode } = {}
          if (isStepOptional(index)) { }
          if (isStepSkipped(index)) {
            stepProps.completed = false
          }
          return (
            <Step key={label.label} {...stepProps}>
              <StepLabel optional={
                index === 2 ? <Typography variant="caption"></Typography> : null
              }>{label.label}</StepLabel>
              <StepContent>
                {label.description}
                <Fragment>
                  <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Box sx={{ flex: '1 1 auto' }} />
                    <Button onClick={handleReset}>Reset</Button>
                  </Box>
                </Fragment>
              </StepContent>
            </Step>
          );
        })}
      </Stepper>
      <Fragment>
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
          <Button
            color="primary"
            disabled={activeStep === 0}
            onClick={handleBack}
            style={{ marginRight: 1 }}
          >
            Back
          </Button>
          <Box sx={{ flex: '1 1 auto' }} />
          {isStepOptional(activeStep) && (
            <Button color="inherit" onClick={handleSkip} style={{ marginRight: 7, marginLeft: 7 }}>
              Skip
            </Button>
          )}
          <Button className='ms-auto' color='primary' onClick={handleNext}>
            {activeStep === steps.length - 1 ? 'SUBMIT' : 'Next'}
          </Button>
        </Box>
      </Fragment>

    </Box>
  );
}
// Dual List Box START
const options = [
  { value: 'Choose one', label: 'Choose one', isDisabled: "true" },
  { value: 'Chuck Testa', label: 'Chuck Testa' },
  { value: 'Sage Cattabriga-Alosa', label: 'Sage Cattabriga-Alosa' },
  { value: 'Nikola Tesla', label: 'Nikola Tesla' },
  { value: 'Cattabriga-Alosa', label: 'Cattabriga-Alosa' },
  { value: 'Nikola Alosa', label: 'Nikola Alosa' },

];
const optionss = [
  {
    label: 'Java Script',
    options: [
      { value: 'Jquery', label: 'Jquery' },
      { value: 'Angular JS', label: 'Angular JS' },
      { value: 'React JS', label: 'React JS' },
      { value: 'Vue JS', label: 'Vue JS' }
    ],
  },
  {
    label: 'Popular',
    options: [
      { value: 'Java Script', label: 'Java Script' },
      { value: 'Java', label: 'Java' },
      { value: 'Python', label: 'Python' },
      { value: 'TypeScript', label: 'TypeScript' },
      { value: 'PHP', label: 'PHP' },
      { value: 'Ruby on Rails', label: 'Ruby on Rails' },
    ],
  }
];

export class DualList extends Component {
  state = {
    selected: [options[0]],
  };

  onChange = (selected) => {
    console.log(selected);
    this.setState({ selected });
  };

  render() {
    const { selected } = this.state;

    return (
      <DualListBox
        options={optionss}
        selected={selected}
        allowDuplicates
        simpleValue={false}
        onChange={this.onChange}
      />
    );
  }
}
// LocalizedTimePicker
export function LocalizedTimePicker() {
  const [value, setValue] = React.useState(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker
        ampmInClock
        openTo="hours"
        views={["hours", "minutes", "seconds"]}
        inputFormat="HH:mm:ss"
        mask="__:__"
        label="Hours and Minutes and seconds"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            className="form-control"
            placeholder="Set time"
            type="text"
          />
        )}
      />
    </LocalizationProvider>
  );
}
// //BasicTimePicker
export function BasicTimePicker() {
  const [value, setValue] = React.useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker
        label="Set Time"
        placeholder="Set time"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            className="form-control"
            id="tp1"
            placeholder="Set time"
            type="text"
          />
        )}
      />
    </LocalizationProvider>
  );
}
// //ResponsiveTimePickers
export function ResponsiveTimePickers() {
  const [value, setValue] = React.useState(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker
        ampmInClock
        views={["minutes", "seconds"]}
        inputFormat="mm:ss"
        mask="__:__"
        label="Minutes and seconds"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            className="form-control"
            placeholder="Set time"
            type="text"
          />
        )}
      />
    </LocalizationProvider>
  );
}
//Dropimg
export function Dropimg() {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="container">
      <div {...getRootProps({ className: "dropzone" })} className="drops">
        <input {...getInputProps()} />
        <p className="alitext">
          Drag 'n' drop some files here, or click to select files
        </p>
        <h4 className="alitext">Files</h4>
        <ul>{files}</ul>
      </div>
    </section>
  );
}
//Dropimg1
export function Dropimg1() {
  const getUploadParams = () => {
    return { url: "https://httpbin.org/post" };
  };

  const handleChangeStatus = ({ meta }, status) => {
    console.log(status, meta);
  };

  const handleSubmit = (files, allFiles) => {
    console.log(files.map((f) => f.meta));
    allFiles.forEach((f) => f.remove());
  };
  return (
    <Dropzone
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
    />
  );
}
// //ColorPicker
export function ColorPicker() {
  const [initial] = useState("#6259ca");

  return (
    <div className="colorpickers">
      <InputColor initialValue={initial} onChange={(setColor) => setColor} />
    </div>
  );
}
// //ColorPickers
export function ColorPickers() {
  const [hex, setHex] = useState("white");
  return (
    <Compact
      color={hex}
      onChange={(color) => {
        setHex(color.hex);
      }}
    />
  );
}
//transperant
const [ThemeProvider, useThemeContext, useThemeColor] = constate(
  (props) => useState(props.initialColor),
  (value) => value,
  ([color]) => color
);
const [PickerVisibilityProvider, usePickerVisibilityContext] = constate(() =>
  useState(false)
);

function Picker() {
  const [color, setColor] = useThemeContext();
  const [visible, setVisible] = usePickerVisibilityContext();
  return visible ? (
    <GithubPicker
      style={{ position: "absolute" }}
      triangle="hide"
      color={color}
      onChange={(c) => {
        setColor(c.hex);
        setVisible(false);
      }}
    />
  ) : null;
}
function Buttons() {
  const background = useThemeColor();
  const [visible, setVisible] = usePickerVisibilityContext();
  return (
    <button style={{ background }} onClick={() => setVisible(!visible)}>
      color: {background}
    </button>
  );
}
export function Transparencyselection() {
  return (
    <ThemeProvider initialColor="#6259ca">
      <PickerVisibilityProvider>
        <Buttons />
        <Picker />
      </PickerVisibilityProvider>
    </ThemeProvider>
  );
}
// GroupOptionMutipleSelect1
export function GroupOptionMutipleSelect1() {
  const [value, setvalue] = useState("");

  const handleOnchange = () => {
    setvalue(value);
  };
  const optionCounrty = [
    {
      value: "Group-1",
      label: "January",
    },
    {
      value: "Group-2",
      label: "February",
    },
    {
      value: "Group-3",
      label: "March",
    },
    {
      value: "Group-4",
      label: "April",
    },
    {
      value: "Group-5",
      label: "May",
    },
    {
      value: "Group-6",
      label: "June",
    },
    { value: "Group-7", label: "August", },
    { value: "Group-8", label: "September", },
    { value: "Group-9", label: "October", },
    { value: "Group-10", label: "November", },
    { value: "Group-11", label: "December", },

  ];
  return (
    <MultiSelect
      className="farm"
      displayValue="key"
      id="optionCounrty"
      onChange={handleOnchange}
      singleSelect="true"
      options={optionCounrty}
    />
  );
}
export function CustomSelectIcon() {
  const [value, setvalue] = useState("");

  const handleOnchange = () => {
    setvalue(value);
  };
  const optionCounrty = [
    {
      value: "Group-1",
      label: "January",
      disabled: "disabled"
    },
    {
      value: "Group-2",
      label: "February",
    },
    {
      value: "Group-3",
      label: "March",
      disabled: "disabled"
    },
    {
      value: "Group-4",
      label: "April",
    },
    {
      value: "Group-5",
      label: "May",
    },
    {
      value: "Group-6",
      label: "June",
    },
    { value: "Group-7", label: "August", },
    { value: "Group-8", label: "September", },
    { value: "Group-9", label: "October", },
    { value: "Group-10", label: "November", },
    { value: "Group-11", label: "December", },

  ];
  return (
    <MultiSelect
      className="farm"
      displayValue="key"
      id="optionCounrty"
      onChange={handleOnchange}
      placeholder="January, March,"
      options={optionCounrty}
    />
  );
}
//SearchSelect1
export const SearchSelect1 = () => {
  const options = [
    { value: "Audi", label: "Audi" },
    { value: "BMW", label: "BMW" },
    { value: "volkswagen", label: "volkswagen" },
    { value: "Aston Martin", label: "Aston Martin" },
    { value: "mitsubishi", label: "mitsubishi" },
    { value: "hyundai", label: "hyundai" },
    { value: "fiat", label: "fiat" },]
  const [selected, setSelected] = useState([]);
  return (
    <MultiSelect
      value={selected}
      onChange={setSelected}
      labelledBy="Select"
      options={options}
    />
  );
};
// //Singleselect12
export const Singleselect12 = () => {
  const objectArray = [
    { label: "Volvo", value: "Group 1" },
    { label: "BMW", value: "Group 2" },
    { label: "Audi", value: "Group 3" },
    { label: "Saab", value: "Group 4" },
    { label: "Mercedes", value: "Group 5" },
    { label: "porche", value: "Group 6" },
    { label: "Tata", value: "Group 7" },
  ];
  const [selected, setSelected] = useState([]);
  return (
    <div>
      <MultiSelect value={selected}
        onChange={setSelected}
        labelledBy="Select" options={objectArray} singleSelect="true" />
    </div>
  );
};
//** Form Editor **//
//ServerSideValidation
export function ServerSideValidation() {
  const [value, setvalue] = useState("");

  const handleOnchange = () => {
    setvalue(value);
  };
  const optionselectyear = [
    {
      value: "Choose...-1",
      label: "Choose...",
    },
    {
      value: "Mountain-1",
      label: "Mountain ",
    },
    {
      value: "Wyoming-2",
      label: "Wyoming",
    },
    {
      value: "Utah-3",
      label: "Utah",
    },
    {
      value: "Montana-4",
      label: "Montana",
    },
    {
      value: "Colorado-6",
      label: "Colorado",
    },
    {
      value: "Mountain Time Zone-7",
      label: "Mountain Time Zone",
    },
    {
      value: "Wyoming-8",
      label: "Wyoming",
    },
  ];
  return (
    <CForm className="row g-3 needs-validation">
      <CCol md={4}>
        <CFormLabel htmlFor="validationServer01">Email</CFormLabel>
        <CFormInput
          type="text"
          id="validationServer01"
          defaultValue="Mark"
          valid

        />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor="validationServer02">Email</CFormLabel>
        <CFormInput
          type="text"
          id="validationServer02"
          defaultValue="Otto"
          valid

        />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor="validationServerUsername">Username</CFormLabel>
        <CInputGroup className="has-validation">
          <CInputGroupText id="inputGroupPrepend03">@</CInputGroupText>
          <CFormInput
            type="text"
            id="validationServerUsername"
            defaultValue=""
            aria-describedby="inputGroupPrepend03"
            invalid

          />
          <CFormFeedback invalid>Please choose a username.</CFormFeedback>
        </CInputGroup>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="validationServer03">City</CFormLabel>
        <CFormInput type="text" id="validationServer03" />
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>
      <CCol md={3}>
        <CFormLabel htmlFor="validationServer04">City</CFormLabel>
        <MultiSelect
          className="farms"
          displayValue="key"
          id="optionselectyear"
          onChange={handleOnchange}
          placeholder="--Select--"
          singleSelect="true"
          options={optionselectyear}

        />
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>
      <CCol md={3}>
        <CFormLabel htmlFor="validationServer05">City</CFormLabel>
        <CFormInput type="text" id="validationServer05" />
        <CFormFeedback invalid>Please provide a valid zip.</CFormFeedback>
      </CCol>
      <CCol xs={12}>
        <CFormCheck
          type="checkbox"
          id="invalidCheck"
          label="Agree to terms and conditions"
          invalid

        />
        <CFormFeedback invalid>You must agree before submitting.</CFormFeedback>
      </CCol>
      <CCol xs={12}>
        <CButton color="primary" type="submit">
          Submit form
        </CButton>
      </CCol>
    </CForm>
  );
}
//End

export function CustomValidation() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Mark"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Otto"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" placeholder="Zip" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
  );
}
//End

//DefaultValidation
export const DefaultValidation = (props) => {
  const [value, setvalue] = useState("");

  const handleOnchange = () => {
    setvalue(value);
  };
  const optionselectyear = [
    {
      value: "Choose...-1",
      label: "Choose...",
    },
    {
      value: "MountainZone-2",
      label: "MountainZone",
    },
    {
      value: "Wyoming-3",
      label: "Wyoming",
    },
    {
      value: "Utah-4",
      label: "Utah",
    },
    {
      value: "Montana-5",
      label: "Montana",
    },
    {
      value: "Colorado-6",
      label: "Colorado",
    },
    {
      value: "Mountain Time Zone-7",
      label: "Mountain Time Zone",
    },
    {
      value: "Wyoming-8",
      label: "Wyoming",
    },
  ];
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  return (
    <CForm
      className="row g-3 needs-validation"
      validated={validated}
      onSubmit={handleSubmit}
    >
      <CCol md={4}>
        <CFormLabel htmlFor="validationDefault01">Email</CFormLabel>
        <CFormInput
          type="text"
          id="validationDefault01"
          defaultValue="Mark"

        />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor="validationDefault02">Email</CFormLabel>
        <CFormInput
          type="text"
          id="validationDefault02"
          defaultValue="Otto"

        />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor="validationDefaultUsername">Username</CFormLabel>
        <CInputGroup className="has-validation">
          <CInputGroupText id="inputGroupPrepend02">@</CInputGroupText>
          <CFormInput
            type="text"
            id="validationDefaultUsername"
            defaultValue=""
            aria-describedby="inputGroupPrepend02"

          />
          <CFormFeedback invalid>Please choose a username.</CFormFeedback>
        </CInputGroup>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="validationDefault03">City</CFormLabel>
        <CFormInput type="text" id="validationDefault03" />
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>
      <CCol md={3}>
        <CFormLabel htmlFor="validationDefault04">City</CFormLabel>
        <MultiSelect
          className="farms"
          onChange={handleOnchange}
          placeholder="--Select--"
          singleSelect="true"
          options={optionselectyear}
        />
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>
      <CCol md={3}>
        <CFormLabel htmlFor="validationDefault05">City</CFormLabel>
        <CFormInput type="text" id="validationDefault05" />
        <CFormFeedback invalid>Please provide a valid zip.</CFormFeedback>
      </CCol>
      <CCol xs={12}>
        <CFormCheck
          type="checkbox"
          id="invalidCheck"
          label="Agree to terms and conditions"

        />
        <CFormFeedback invalid>You must agree before submitting.</CFormFeedback>
      </CCol>
      <CCol xs={12}>
        <CButton color="primary" type="submit">
          Submit form
        </CButton>
      </CCol>
    </CForm>
  );
};
//End
//Tooltips
export function Tooltips() {
  const [value, setvalue] = useState("");

  const handleOnchange = () => {
    setvalue(value);
  };
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  const optionselectyear = [
    {
      value: "Choose...-1",
      label: "Choose...",
    },
    {
      value: "Time Zone-2",
      label: "Time Zone",
    },
    {
      value: "Wyoming-3",
      label: "Wyoming",
    },
    {
      value: "Utah-4",
      label: "Utah",
    },
    {
      value: "Montana-5",
      label: "Montana",
    },
    {
      value: "Colorado-6",
      label: "Colorado",
    },
    {
      value: "Mountain Time Zone-7",
      label: "Mountain Time Zone",
    },
    {
      value: "Wyoming-8",
      label: "Wyoming",
    },
  ];
  return (
    <CForm
      className="row g-3 needs-validation"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <Col md={4} className="position-relative">
        <CFormLabel htmlFor="validationTooltip01">Email</CFormLabel>
        <CFormInput
          type="text"
          id="validationTooltip01"
          defaultValue="Mark"

        />
        <CFormFeedback tooltip valid>
          Looks good!
        </CFormFeedback>
      </Col>
      <Col md={4} className="position-relative">
        <CFormLabel htmlFor="validationTooltip02">Email</CFormLabel>
        <CFormInput
          type="text"
          id="validationTooltip02"
          defaultValue="Otto"

        />
        <CFormFeedback tooltip valid>
          Looks good!
        </CFormFeedback>
      </Col>
      <CCol md={4} className="position-relative">
        <CFormLabel htmlFor="validationTooltipUsername">Username</CFormLabel>
        <CInputGroup className="has-validation">
          <CInputGroupText id="inputGroupPrepend">@</CInputGroupText>
          <CFormInput
            type="text"
            id="validationTooltipUsername"
            defaultValue=""
            aria-describedby="inputGroupPrepend"

          />
          <CFormFeedback tooltip invalid>
            Please choose a username.
          </CFormFeedback>
        </CInputGroup>
      </CCol>
      <CCol xl={6} md={12} className="position-relative">
        <CFormLabel htmlFor="validationTooltip03">City</CFormLabel>
        <CFormInput type="text" id="validationTooltip03" />
        <CFormFeedback tooltip invalid>
          Please provide a valid city.
        </CFormFeedback>
      </CCol>
      <CCol xl={3} md={12} className="position-relative">
        <CFormLabel htmlFor="validationTooltip04">City</CFormLabel>
        <MultiSelect
          className="farms"
          onChange={handleOnchange}
          placeholder="--Select--"
          singleSelect="true"
          options={optionselectyear}
        />
        <CFormFeedback tooltip invalid>
          Please provide a valid city.
        </CFormFeedback>
      </CCol>
      <CCol xl={3} md={12} className="position-relative">
        <CFormLabel htmlFor="validationTooltip05">City</CFormLabel>
        <CFormInput type="text" id="validationTooltip05" />
        <CFormFeedback tooltip invalid>
          Please provide a valid zip.
        </CFormFeedback>
      </CCol>
      <CCol xs={12} className="position-relative">
        <CButton color="primary" type="submit">
          Submit form
        </CButton>
      </CCol>
    </CForm>
  );
}
//End
export function Singleselect1() {
  const [value, setvalue] = useState("");

  const handleOnchange = () => {
    setvalue(value);
  };
  const objectArraysingle = [
    { label: "Choose...", value: "Choose..." },
    { label: "Mountain Time Zone", value: "Mountain Time Zone" },
    { label: "Wyoming", value: "Wyoming" },
    { label: "Utah", value: "Utah" },
    { label: "Montana", value: "Montana" },
    { label: "Colorado", value: "Mountain Time Zone" },
    { label: "Wyoming", value: "Wyoming" },
    { label: "Utah", value: "Utah" },
  ];
  return (
    <div>
      <MultiSelect
        options={objectArraysingle}
        onChange={handleOnchange}
        placeholder="--Select--"
        singleSelect="true"
      />
    </div>
  );
}
//** Form wizard **//
//End

//BasicContentWizard
export const BasicContentWizard = () => {
  const [goSteps, setGoSteps] = useState(0);

  return (
    <div>
      <Stepper activeStep={goSteps}>
        <Step onClick={() => setGoSteps(0)} label="Personal Information" />
        <Step onClick={() => setGoSteps(1)} label="Billing Information" />
        <Step onClick={() => setGoSteps(2)} label="Payment Details" />
      </Stepper>
      {goSteps === 0 && (
        <div>
          <h4 className="fw-semibold">Personal Information</h4>
          <section>
            <div className="control-group form-group ">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control "
                placeholder="Name"
              />
            </div>
            <div className="control-group form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control "
                placeholder="Email Address"
              />
            </div>
            <div className="control-group form-group">
              <label className="form-label">Phone Number</label>
              <input
                type="number"
                className="form-control "
                placeholder="Number"
              />
            </div>
            <div className="control-group form-group mb-0">
              <label className="form-label">Address</label>
              <input
                type="text"
                className="form-control "
                placeholder="Address"
              />
            </div>
          </section>
          <button
            className="btn btn-primary mt-2 float-end"
            onClick={() => setGoSteps(1)}
          >
            Next
          </button>
          <button
            className="btn btn-primary mt-2 float-start"
            onClick={() => setGoSteps(0)}
            disabled
          >
            Previous
          </button>
        </div>
      )}
      {goSteps === 1 && (
        <div>
          <h3>Billing Information</h3>
          <section>
            <div className="table-responsive mg-t-20 mb-3">
              <table className="table table-bordered border">
                <tbody>
                  <tr>
                    <td>Cart Subtotal</td>
                    <td className="text-end">$792.00</td>
                  </tr>
                  <tr>
                    <td>
                      <span>Totals</span>
                    </td>
                    <td className="text-end text-muted">
                      <span>$792.00</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>Order Total</span>
                    </td>
                    <td>
                      <h2 className="price text-end mb-0">$792.00</h2>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <div>
            <button
              className="btn btn-primary float-end"
              onClick={() => setGoSteps(2)}
            >
              Next
            </button>
            <button className="btn btn-primary float-start " onClick={() => setGoSteps(0)}>
              Previous
            </button>
          </div>
        </div>
      )}
      {goSteps === 2 && (
        <div className="Paymentdetails">
          <h3>Payment Details</h3>
          <section>
            <div className="form-group">
              <label className="form-label">Card Holder Name</label>
              <input
                type="text"
                className="form-control"
                id="name1"
                placeholder="First Name"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Card number</label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for..."
                />
                <span className="input-group-text btn btn-info shadow-none">
                  <button>
                    <i className="fa fa-cc-visa text-white"></i> &nbsp;
                    <i className="fa fa-cc-amex text-white"></i> &nbsp;
                    <i className="fa fa-cc-mastercard text-white"></i>
                  </button>
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-8">
                <div className="form-group mb-sm-0">
                  <label className="form-label">Expiration</label>
                  <div className="input-group">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="MM"
                      name="expiremonth"
                    />
                    <input
                      type="number"
                      className="form-control"
                      placeholder="YY"
                      name="expireyear"
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-4 ">
                <div className="form-group mb-0">
                  <label className="form-label">
                    CVV <i className="fa fa-question-circle"></i>
                  </label>
                  <input type="number" className="form-control" />
                </div>
              </div>
            </div>
          </section>
          <button
            className="btn btn-primary float-end"
            onClick={() => setGoSteps(0)}
          >
            Submit
          </button>
          <button className="btn btn-primary wizer float-start" onClick={() => setGoSteps(1)}>
            Previous
          </button>
        </div>
      )}
    </div>
  );
};
//End
//WizardForm
function Name({ nextStep, handleFormData, values }) {
  const [error, setError] = useState(false);
  const submitFormData = (e) => {
    e.preventDefault();
    if (
      validator.isEmpty(values.firstName) ||
      validator.isEmpty(values.lastName)
    ) {
      setError(true);
    } else {
      nextStep();
    }
  };

  return (
    <div>
      <Form onSubmit={submitFormData}>
        <Form.Group className="">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            style={{ border: error ? "2px solid #6259ca" : "" }}
            name="firstName"
            defaultValue={values.firstName}
            type="text"
            placeholder="First Name"
            onChange={handleFormData("firstName")}
          />
          {error ? (
            <Form.Text style={{ color: "#6259ca" }}>
              This is a  field
            </Form.Text>
          ) : (
            ""
          )}
        </Form.Group>
        <Form.Group className="">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            style={{ border: error ? "2px solid #6259ca" : "" }}
            name="lastName"
            defaultValue={values.lastName}
            type="text"
            placeholder="Last Name"
            onChange={handleFormData("lastName")}
          />
          {error ? (
            <Form.Text style={{ color: "#6259ca" }}>
              This is a  field
            </Form.Text>
          ) : (
            ""
          )}
        </Form.Group>
      </Form>
    </div>
  );
}
function StepTwo({ nextStep, handleFormData, prevStep, values }) {

  const [error, setError] = useState(false);


  const submitFormData = (e) => {
    e.preventDefault();


    if (validator.isEmpty(values.age) || validator.isEmpty(values.email)) {
      setError(true);
    } else {
      nextStep();
    }
  };
  return (
    <div>
      <Form onSubmit={submitFormData}>
        <Form.Group className="mb-3">
          <Form.Label>Age</Form.Label>
          <Form.Control
            style={{ border: error ? "2px solid red" : "" }}
            type="number"
            placeholder="Age"
            onChange={handleFormData("age")}
          />
          {error ? (
            <Form.Text style={{ color: "red" }}>
              This is a  field
            </Form.Text>
          ) : (
            ""
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            style={{ border: error ? "2px solid red" : "" }}
            type="email"
            placeholder="email"
            onChange={handleFormData("email")}
          />
          {error ? (
            <Form.Text style={{ color: "red" }}>
              This is a  field
            </Form.Text>
          ) : (
            ""
          )}
        </Form.Group>
        <div >
          <Button className="float-start" onClick={prevStep}>
            Previous
          </Button>

          <Button className="float-end" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};
function Final({ values }) {


  const { firstName, lastName, age, email } = values;
  return (

    <div style={{ textAlign: "left" }}>
      <div>
        <p>
          <strong>First Name :</strong> {firstName}
        </p>
        <p>
          <strong>Last Name :</strong> {lastName}
        </p>
        <p>
          <strong>Age :</strong> {age}
        </p>
        <p>
          <strong>Email :</strong> {email}
        </p>
      </div>
    </div>

  );
};
export function WizardForm() {
  const [step, setstep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: ""
  })
  const nextStep = () => {
    setstep(step + 1);
  };
  const prevStep = () => {
    setstep(step - 1);
  };
  const handleInputData = input => e => {
    const { value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [input]: value
    }));
  }
  switch (step) {
    case 1:
      return (

        <div className="custom-margin">
          <Name nextStep={nextStep} handleFormData={handleInputData} values={formData} />
        </div>
      );

    default:
      return (

        <div className="custom-margin">
          <StepTwo nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
        </div>
      );

    case 3:
      return (
        <div className="">
          <div className="custom-margin">
            <Final values={formData} />
          </div>
        </div>


      );


  }
}

//** Form Editor **//
//FormEditorstyle1
export const FormEditorstyle1 = () => {
  const { handleSubmit, control } = useForm({
    mode: "onChange",
  });
  const handleSubmitOnClick = ({ editor_content }) => {
    console.log("editor_content ==> ", editor_content);
  };


  return (
    <section>
      <form className="richText br-5" onSubmit={handleSubmit(handleSubmitOnClick)}>
        <Controller
          name="editor_content"
          control={control}
          defaultValue=""
          render={(props) => (
            <Editor
              {...props}
              onEditorStateChange={(editorState) => {
                if (editorState.blocks) {
                  props.onChange(editorState.blocks[0]);
                }
              }}
            />
          )}
        />
      </form>
    </section>
  );
};
// //OuterDropzone
export function OuterDropzone() {
  const handleChangeStatus = ({ meta }, status) => {
    console.log(status, meta);
  };

  const handleSubmit = (files, allFiles) => {
    console.log(files.map((f) => f.meta));
    allFiles.forEach((f) => f.remove());
  };

  return (
    <Dropzone
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      maxFiles={3}
      inputContent="Drop Files"
      inputWithFilesContent={(files) => `${3 - files.length} more`}
      submitButtonDisabled={(files) => files.length < 3}
    />
  );
}
//color picker
export class SketchExample extends Component {
  state = {
    displayColorPicker: false,
    color: {
      r: 241,
      g: 112,
      b: 19,
      a: 1,
    },
  }
  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  handleChange = (color) => {
    this.setState({ color: color.rgb })
  };
  render() {

    return (
      <div>
        <p className="mt-4 mb-1">Show Adove photoshop with Alphaline and pallete. </p>
        <Button className='btn-pill' variant='primary' size='sm' onClick={this.handleClick}>
          <ColorLensIcon />
        </Button>
        {this.state.displayColorPicker ? <div >
          <div onClick={this.handleClose} />
          <SketchPicker className='mt-3' color={this.state.color} onChange={this.handleChange} />
        </div> : null}

      </div>

    )
  }
}