import React, { Component } from 'react'
import Swal from "sweetalert2";
import Box from '@mui/material/Box';
import Slider, { SliderThumb } from '@mui/material/Slider';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import { useState, useRef, useEffect } from "react";
import TimeFormat from "hh-mm-ss";
import Countdown from 'react-countdown';
import Rating from "@mui/material/Rating";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import { Alert, Button } from 'react-bootstrap';
import { Imagesdata } from './Commonimages';
import { Modal, Row, Col, Container, Table, Tooltip, Card, Collapse, Badge } from "react-bootstrap";
import { useTheme } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import useMediaQuery from "@mui/material/useMediaQuery";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Slide from "@mui/material/Slide";
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";
import { Link } from 'react-router-dom';
import { useDropzone } from "react-dropzone";
import "react-data-table-component-extensions/dist/index.css";
import { OverlayTrigger } from "react-bootstrap";
import * as rating from './rating';
import ALLImages from '../Imagesdata';
//*** RANGE SLIDER ***//

//CustomizedSlider
function ValueLabelComponent(props) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  value: PropTypes.number.isRequired,
};

const iOSBoxShadow =
  '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const marks12 = [
  {
    value: 0,
  },
  {
    value: 20,
  },
  {
    value: 37,
  },
  {
    value: 100,
  },
];

const IOSSlider = styled(Slider)(({ theme }) => ({

  height: 2,
  padding: '15px 0',
  '& .MuiSlider-thumb': {
    height: 28,
    width: 28,
    backgroundColor: '#fff',
    boxShadow: iOSBoxShadow,
    '&:focus, &:hover, &.Mui-active': {
      boxShadow:
        '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
      '@media (hover: none)': {
        boxShadow: iOSBoxShadow,
      },
    },
  },
  '& .MuiSlider-valueLabel': {
    fontSize: 12,
    fontWeight: 'normal',
    top: -6,
    backgroundColor: 'unset',
    color: theme.palette.text.primary,
    '&:before': {
      display: 'none',
    },
    '& *': {
      background: 'transparent',
      color: theme.palette.mode === 'dark' ? '#fff' : '#000',
    },
  },
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-rail': {
    opacity: 0.5,
    backgroundColor: '#bfbfbf',
  },
  '& .MuiSlider-mark': {
    backgroundColor: '#bfbfbf',
    height: 8,
    width: 1,
    '&.MuiSlider-markActive': {
      opacity: 1,
      backgroundColor: 'currentColor',
    },
  },
}));



function AirbnbThumbComponent(props) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
    </SliderThumb>
  );
}

AirbnbThumbComponent.propTypes = {
  children: PropTypes.node,
};

export function CustomizedSlider() {
  return (
    <Box md={{ width: 100 }}>
      <IOSSlider
        aria-label="ios slider"
        defaultValue={60}
        marks={marks12}
        valueLabelDisplay="on"
      />
    </Box>
  );
}

//CustomizedSlider1
function ValueLabelComponent1(props) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}
ValueLabelComponent1.propTypes = {
  children: PropTypes.element.isRequired,
  value: PropTypes.number.isRequired,
};
const PrettoSlider = styled(Slider)({
  color: '#52af77',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#52af77',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});
function AirbnbThumbComponent1(props) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
    </SliderThumb>
  );
}

AirbnbThumbComponent1.propTypes = {
  children: PropTypes.node,
};

export function CustomizedSlider1() {
  return (
    <Box md={{ width: 100 }}>
      <PrettoSlider
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        defaultValue={20}
      />

    </Box>
  );
}

//CustomizedSlider2
function ValueLabelComponent2(props) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent2.propTypes = {
  children: PropTypes.element.isRequired,
  value: PropTypes.number.isRequired,
};

function AirbnbThumbComponent2(props) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
    </SliderThumb>
  );
}

AirbnbThumbComponent2.propTypes = {
  children: PropTypes.node,
};

export function CustomizedSlider2() {
  return (
    <div>
      <Box md={{ width: 100 }}>
        <Slider
          valueLabelDisplay="auto"
          components={{
            // ValueLabel: ValueLabelComponent2,
          }}
          aria-label="custom thumb label"
          defaultValue={40}
        />

      </Box>
    </div>
  );
}

//CustomizedSlider4
ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  value: PropTypes.number.isRequired,
};
const AirbnbSlider = styled(Slider)(({ theme }) => ({
  color: '#3a8589',
  height: 3,
  padding: '13px 0',
  '& .MuiSlider-thumb': {
    height: 27,
    width: 27,
    backgroundColor: '#fff',
    border: '1px solid currentColor',
    '&:hover': {
      boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
    },
    '& .airbnb-bar': {
      height: 9,
      width: 1,
      backgroundColor: 'currentColor',
      marginLeft: 1,
      marginRight: 1,
    },
  },
  '& .MuiSlider-track': {
    height: 3,
  },
  '& .MuiSlider-rail': {
    color: theme.palette.mode === 'dark' ? '#bfbfbf' : '#d8d8d8',
    opacity: theme.palette.mode === 'dark' ? undefined : 1,
    height: 3,
  },
}));

function AirbnbThumbComponent3(props) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
    </SliderThumb>
  );
}

AirbnbThumbComponent3.propTypes = {
  children: PropTypes.node,
};

export function CustomizedSlider4() {
  return (
    <Box md={{ width: 100 }}>
      <AirbnbSlider
        components={{ Thumb: AirbnbThumbComponent }}
        getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
        defaultValue={[30, 65]}
      />
    </Box>
  );
}
//TrackFalseSlider
const marksrt = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 37,
    label: '37°C',
  },
  {
    value: 100,
    label: '100°C',
  },
];

function valuetextrt(value) {
  return `${value}°C`;
}

export function TrackFalseSlider() {
  return (
    <Box md={{ width: 100 }}>

      <Slider
        track={false}
        aria-labelledby="track-false-slider"
        getAriaValueText={valuetextrt}
        defaultValue={30}
        marks={marksrt}
      />
    </Box>
  );
}
//TrackFalseSlider1
const marksrt1 = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 37,
    label: '37°C',
  },
  {
    value: 100,
    label: '100°C',
  },
];

function valuetextrt1(value) {
  return `${value}°C`;
}

export function TrackFalseSlider1() {
  return (
    <Box md={{ width: 100 }}>
      <Slider
        track={false}
        aria-labelledby="track-false-range-slider"
        getAriaValueText={valuetextrt1}
        defaultValue={[20, 37, 50]}
        marks={marksrt1}
      />
    </Box>
  );
}

//TrackInvertedSlider
const marksin = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 37,
    label: '37°C',
  },
  {
    value: 100,
    label: '100°C',
  },
];

function valuetextin(value) {
  return `${value}°C`;
}

export function TrackInvertedSlider() {
  return (
    <Box md={{ width: 100 }}>

      <Slider
        track="inverted"
        aria-labelledby="track-inverted-slider"
        getAriaValueText={valuetextin}
        defaultValue={30}
        marks={marksin}
      />
    </Box>
  );
}
//TrackInvertedSlider1
const marksin1 = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 37,
    label: '37°C',
  },
  {
    value: 100,
    label: '100°C',
  },
];

function valuetextin1(value) {
  return `${value}°C`;
}

export function TrackInvertedSlider1() {
  return (
    <Box md={{ width: 100 }}>
      <Slider
        track="inverted"
        aria-labelledby="track-inverted-range-slider"
        getAriaValueText={valuetextin1}
        defaultValue={[20, 37]}
        marks={marksin1}
      />
    </Box>
  );
}
function valuetextvr(value) {
  return `${value}°C`;
}


export function VerticalSlider() {
  return (
    <Stack sx={{ height: 400 }} spacing={1} direction="row">
      <Slider
        aria-label="Temperature"
        orientation="vertical"
        getAriaValueText={valuetextvr}
        defaultValue={30}
      />

    </Stack>
  );
}
//VerticalSlider1
export function VerticalSlider1() {
  return (
    <Stack sx={{ height: 400 }} spacing={1} direction="row">
      <Slider
        aria-label="Temperature"
        orientation="vertical"
        getAriaValueText={valuetextvr}
        defaultValue={30}
      />

    </Stack>
  );
}
//VerticalSlider2
function valuetextvra(value) {
  return `${value}°C`;
}
const marksvra = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 37,
    label: '37°C',
  },
  {
    value: 100,
    label: '100°C',
  },
];
export function VerticalSlider2() {
  return (
    <Stack sx={{ height: 400 }} spacing={1} direction="row">

      <Slider
        getAriaLabel={() => 'Temperature'}
        orientation="vertical"
        getAriaValueText={valuetextvra}
        defaultValue={[20, 37]}
        marks={marksvra}
      />
    </Stack>
  );
}
//VerticalSlider4
function valuetextv(value) {
  return `${value}°C`;
}
const marksv = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 37,
    label: '37°C',
  },
  {
    value: 100,
    label: '100°C',
  },
];
export function VerticalSlider4() {
  return (
    <Stack sx={{ height: 400 }} spacing={1} direction="row">
      <Slider
        track={false}
        orientation="vertical"
        aria-labelledby="track-false-slider"
        getAriaValueText={valuetextv}
        defaultValue={30}
        marks={marksv}
      /> </Stack>
  );
}

//*** COUNTERS ***//
const formatTime = (time) =>
  ` ${String(Math.floor(time / 60)).padStart(2, "0")} : ${String(
    time % 60
  ).padStart(2, "0")}`;

const Timer = ({ time }) => {
  // const  RESET_INTERVAL_S = (time % RESET_INTERVAL_S);

  return (
    <>
      <div> 00 Days 00 :{formatTime(time)}</div>
    </>
  );
};

const IntervalTimerFunctional = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  return <Timer time={time} />;
};
export function Uptimer() {
  return <IntervalTimerFunctional />;
}

//Time Counting From 60 to 20

export const Timers = ({ min }) => {
  let mainTime;
  const secondsLeft = () => {
    const left = Number(min) * 60;
    return left;
  };

  const [seconds, setSeconds] = useState(secondsLeft());
  useEffect(() => {
    startTime();
    return () => {
      stopTimer();
    };
  });

  const startTime = () => {
    if (seconds && seconds > 20) {
      mainTime = setInterval(tick, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(mainTime);
  };

  const tick = () => {
    setSeconds((seconds) => {
      const updatedSeconds = seconds - 1;
      if (updatedSeconds < 1) {
        stopTimer();
      }
      return updatedSeconds;
    });
  };

  const display = TimeFormat.fromS(seconds, "hh:mm:ss");
  const [h, m, s] = display.split(":");
  return (
    <>
      {h} : {m} : {s}
    </>
  );
};
//timer 1 minute counter
export function Middle() {
  const intervalRef = useRef(null);

  const [timer, setTimer] = useState("00:00:00");
  useEffect(() => {
    function getTimeRemaining(endtime) {
      const total = Date.parse(endtime) - Date.parse(new Date());
      const seconds = Math.floor((total / 1000) % 60);
      const minutes = Math.floor((total / 1000 / 60) % 60);
      const hours = Math.floor(((total / 1000) * 60 * 60) % 60);

      return {
        total,
        hours,
        minutes,
        seconds,
      };
    }
    function startTimer(deadline) {
      let { total, hours, minutes, seconds } = getTimeRemaining(deadline);
      if (total >= 0) {
        setTimer(
          (hours ? hours : "0" + hours) +
          ":" +
          (minutes ? minutes : "0" + minutes) +
          ":" +
          (seconds ? seconds : "0" + seconds)
        );
      } else {
        clearInterval(intervalRef.current);
      }
    }

    function clearTimer(endtime) {
      setTimer("00:00:60");
      if (intervalRef.current) clearInterval(intervalRef.current);
      const id = setInterval(() => {
        startTimer(endtime);
      }, 1000);
      intervalRef.current = id;
    }
    function getDeadlineTime() {
      let deadline = new Date();
      deadline.setSeconds(deadline.getSeconds() + 60);
      return deadline;
    }

    clearTimer(getDeadlineTime());
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);
  return <>{timer}</>;
}
// // Random component
const AfterComplete = () => <span>You are good to go!</span>;

// Renderer callback with condition
const rendering = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <AfterComplete />;
  } else {
    // Render a countdown
    return (
      <div className="row">
        <div className="col-md-8 mx-auto">
          <div className="count-down row daycounter">
            <div className="col-xl-3 col-md-6 countdown  mb-6 mb-xl-0">
              <span className="days text-primary me-1">{days}</span>
              <span className="text-dark">Days</span>
            </div>
            <div className="col-xl-3 col-md-6 countdown mb-6 mb-xl-0">
              <span className="hours text-primary me-3 ">{hours}</span>

              <span className="text-dark me-2">Hrs</span>
            </div>
            <div className="col-xl-3 col-md-6 countdown  mb-6 mb-xl-0">
              <span className="minutes text-primary me-1">{minutes}</span>

              <span className="text-dark">Mins</span>
            </div>
            <div className="col-xl-3 col-md-6 countdown ">
              <span className="seconds text-primary me-1">{seconds}</span>

              <span className="text-dark">Secs</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export function DayCounter() {
  return (

    <Countdown date={Date.now() + 3088800000} renderer={rendering} />
  )

};

// Random component
const AfterCompletion = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <AfterCompletion />;
  } else {
    // Render a countdown
    return (
      <span className="h3 text-white">
        <span>{days} Days {hours} Hours: {minutes} Minutes: {seconds} Seconds</span>
      </span>
    );
  }
};
export function TimeCountingdaysLimit() {
  return (
    <Countdown date={Date.now() + 259200000} renderer={renderer} />
  )

};

// Renderer callback with condition
const render = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <AfterComplete />;
  } else {
    // Render a countdown
    return (
      <div className="row">
        <div className="col-md-8 mx-auto">
          <div className="count-down row ">
            <div className="col-xl-3 col-md-6 countdown mb-6 mb-xl-0">
              <span className="days text-dark me-1 d-inline-flex">{days}</span>
              <span className="text-dark">Days</span>
            </div>
            <div className="col-xl-3 col-md-6 countdown mb-6 mb-xl-0">
              <span className="hours text-dark me-1 d-inline-flex">{hours}</span>
              <span className="text-dark">Hrs</span>
            </div>
            <div className="col-xl-3 col-md-6 countdown  mb-6 mb-xl-0">
              <span className="minutes text-dark me-1 d-inline-flex">{minutes}</span>
              <span className="text-dark">Mins</span>
            </div>
            <div className="col-xl-3 col-md-6 countdown ">
              <span className="seconds text-dark me-1 d-inline-flex">{seconds}</span>
              <span className="text-dark">Secs</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export function DayCounters() {
  return (
    <Countdown date={Date.now(30888000000) + 30888000000} renderer={render} />
  )
};

//*** RATINGS ***//

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: "Very Dissatisfied",
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
    label: "Dissatisfied",
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
    label: "Neutral",
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: "Satisfied",
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: "Very Satisfied",
  },
};
function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

export function CustomizedRating6() {
  return (
    <Rating
      name="highlight-selected-only"
      defaultValue={2}
      className="Rating"
      IconContainerComponent={IconContainer}
      highlightSelectedOnly
    />
  );
}

//*** ALERTS ***//
//default alert
export const defaultData = [
  { id: 1, color: 'primary' },
  { id: 2, color: 'secondary' },
  { id: 3, color: 'success' },
  { id: 4, color: 'warning' },
  { id: 5, color: 'info' },
  { id: 6, color: 'danger' },
]
//links with alert
export const linksAData = [
  { id: 1, class: 'light-success', color: 'success', heading: 'Well Done!', alertLine: 'You Successfully Read', description: 'This Important Alert Message' },
  { id: 2, class: 'light-info', color: 'info', heading: 'Head Up! This', alertLine: 'but its not super important.', description: 'Alerts Needs Your Attension,', },
  { id: 3, class: 'light-warning', color: 'warning', heading: 'Warning!', alertLine: ' Better check yourself, youre', description: ' not looking too good.' },
  { id: 4, class: 'light-danger', color: 'danger', heading: 'Oh Snap!', alertLine: 'and try submitting again.', description: 'Change a few things up' },

]
//alert  eith icon 
export const iconAlerts = [
  { id: 1, class: 'success', description: 'Well done! You successfully read this important alert message.', icon: <i className="fa fa-check-circle-o me-2"></i> },
  { id: 2, class: 'info', description: 'Heads up! This alert needs your attention, but its not super important.', icon: <i className="fa fa-bell-o me-2"></i> },
  { id: 3, class: 'warning', description: 'Warning! Better check yourself, youre not looking too good.', icon: <i className="fa fa-exclamation me-2"></i> },
  { id: 4, class: 'danger', description: 'Oh snap! Change a few things up and try submitting again.', icon: <i className="fa fa-frown-o me-2"></i> },

]
//Imgalertprimary
export function Imgalertprimary() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="primary">
        <Button
          onClick={() => setShow(false)}
          className="btn-close"
          variant=""
        >
          <span aria-hidden="true" className='text-primary'>×</span>
        </Button>
        <img
          className="avatar brround cover-image"
          src={ALLImages("users14")}
          alt=""
        />&nbsp;
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit.</span>
      </Alert>
    );
  }
  return <p onClick={() => setShow(true)}></p>;
}
//Imgalertsuccess
export function Imgalertsuccess() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="success">
        <Button
          onClick={() => setShow(false)}
          className="btn-close"
          variant=""
        >
          <span aria-hidden="true" className='text-success'>×</span>
        </Button>
        <img
          className="avatar brround cover-image"
          src={ALLImages("users18")}
          alt=""
        />&nbsp;
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum
        dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit
        amet, consectetur adipisicing elit.
      </Alert>
    );
  }
  return <p onClick={() => setShow(true)}></p>;
}
//alert  deismissing icon 
export const iconAlerts1 = [
  { id: 1, class: 'default', description: 'This is a default alert - check it out!', icon: <i className="fe fe-download me-2"></i> },
  { id: 2, class: 'primary', description: 'This is a primary alert - check it out!', icon: <i className="fe fe-check-square me-2"></i> },
  { id: 3, class: 'success', description: 'This is a success alert - check it out!', icon: <i className="fe fe-thumbs-up me-2"></i> },
  { id: 4, class: 'warning', description: 'This is a warning alert - check it out!', icon: <i className="fe fe-info me-2"></i> },
  { id: 5, class: 'info', description: 'This is a info alert - check it out!', icon: <i className="fa fa-bell me-2"></i> },
  { id: 6, class: 'danger', description: 'This is a danger alert - check it out!', icon: <i className="fe fe-slash me-2"></i> },
]
//SuccessMessage
export function SuccessMessage() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="success">
        <Button
          onClick={() => setShow(false)}
          className="btn-close"
          variant=""
        >
          <span aria-hidden="true" className='text-success'>×</span>
        </Button>
        <Alert.Heading>
          <strong>Success Message </strong>
        </Alert.Heading>
        <hr />
        <p>You successfully read this important alert message.</p>
      </Alert>
    );
  }
  return <p onClick={() => setShow(true)}></p>;
}
//InfoMessage
export function InfoMessage() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="info">
        <Button
          onClick={() => setShow(false)}
          className="btn-close"
          variant=""
        >
          <span aria-hidden="true" className='text-info'>×</span>
        </Button>
        <Alert.Heading>
          <strong>Info Message</strong>
        </Alert.Heading>
        <hr />
        <p>This alert needs your attention, but it's not super important.</p>
      </Alert>
    );
  }
  return <p onClick={() => setShow(true)}></p>;
}
//WarningMessage
export function WarningMessage() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="warning">
        <Button
          onClick={() => setShow(false)}
          className="btn-close"
          variant=""
        >
          <span aria-hidden="true" className='text-warning'>×</span>
        </Button>
        <Alert.Heading>
          <strong>Warning Message</strong>
        </Alert.Heading>
        <hr />
        <p>Best check yo self, you're not looking too good</p>
      </Alert>
    );
  }
  return <p onClick={() => setShow(true)}></p>;
}
//DangerMessage
export function DangerMessage() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger">
        <Button
          onClick={() => setShow(false)}
          className="btn-close"
          variant=""
        >
          <span aria-hidden="true" className='text-danger'>×</span>
        </Button>
        <Alert.Heading>
          <strong>Danger Message</strong>
        </Alert.Heading>
        <hr />
        <p>Change a few things up and try submitting again.</p>
      </Alert>
    );
  }
  return <p onClick={() => setShow(true)}></p>;
}

//*** BUTTONS ***//

export const defaultbuttons = [
  { id: 1, color: 'default', class: 'Default' },
  { id: 2, color: 'primary', class: 'Primary' },
  { id: 3, color: 'secondary', class: 'Secondary' },
  { id: 4, color: 'success', class: 'Success' },
  { id: 5, color: 'info', class: 'Info' },
  { id: 6, color: 'warning', class: 'Warning' },
  { id: 7, color: 'danger', class: 'Danger' },
]
//Color variations
export const socialbuttons1 = [
  { id: 1, color: 'blue', class: 'Blue' },
  { id: 2, color: 'azure', class: 'Azure' },
  { id: 3, color: 'indigo', class: 'Indigo' },
  { id: 4, color: 'purple', class: 'Purple' },
  { id: 5, color: 'pink', class: 'Pink' },
  { id: 6, color: 'red', class: 'Red' },
  { id: 7, color: 'orange', class: 'Orange' },
  { id: 8, color: 'yellow', class: 'Yellow' },
  { id: 9, color: 'lime', class: 'Lime' },
  { id: 10, color: 'green', class: 'Green' },
  { id: 11, color: 'teal', class: 'Teal' },
  { id: 12, color: 'cyan', class: 'Cyan' },
  { id: 13, color: 'gray', class: 'Gray' },
  { id: 14, color: 'gray-dark', class: 'dark gray' },
]
//Socail buttons
export const socialbuttons2 = [
  { id: 1, color: 'facebook', icon: 'fa fa-facebook' },
  { id: 2, color: 'twitter', icon: 'fa fa-twitter' },
  { id: 3, color: 'google', icon: 'fa fa-google' },
  { id: 4, color: 'youtube', icon: 'fa fa-youtube' },
  { id: 5, color: 'vimeo', icon: 'fa fa-vimeo' },
  { id: 6, color: 'dribbble', icon: 'fa fa-dribbble' },
  { id: 7, color: 'github', icon: 'fa fa-github' },
  { id: 8, color: 'instagram', icon: 'fa fa-instagram' },
  { id: 9, color: 'pinterest', icon: 'fa fa-pinterest' },
  { id: 10, color: 'vk', icon: 'fa fa-vk' },
  { id: 11, color: 'rss', icon: 'fa fa-rss' },
  { id: 12, color: 'flickr', icon: 'fa fa-flickr' },
]
//Scial icon buttons
export const socialbuttons = [
  { id: 1, color: 'facebook', icon: 'fa fa-facebook' },
  { id: 2, color: 'twitter', icon: 'fa fa-twitter' },
  { id: 3, color: 'google', icon: 'fa fa-google' },
  { id: 4, color: 'youtube', icon: 'fa fa-youtube' },
  { id: 5, color: 'vimeo', icon: 'fa fa-vimeo' },
  { id: 6, color: 'dribbble', icon: 'fa fa-dribbble' },
  { id: 7, color: 'github', icon: 'fa fa-github' },
  { id: 8, color: 'instagram', icon: 'fa fa-instagram' },
  { id: 9, color: 'pinterest', icon: 'fa fa-pinterest' },
]
//*** Avatar Radius ***//
export const Simpleavatar = [
  { id: 1, src1: ALLImages('users4') },
  { id: 2, src1: ALLImages('users5') },
  { id: 3, src1: ALLImages('users3') },
  { id: 4, src1: ALLImages('users2') },
  { id: 5, src1: ALLImages('users1') },
]
//Avatar list 
export const avatarsizes = [
  { id: 1, src1: ALLImages('users4'), class: 'avatar-sm' },
  { id: 2, src1: ALLImages('users3'), class: '' },
  { id: 3, src1: ALLImages('users5'), class: 'avatar-md' },
  { id: 4, src1: ALLImages('users6'), class: 'avatar-lg' },
  { id: 5, src1: ALLImages('users4'), class: 'avatar-xl' },
  { id: 6, src1: ALLImages('users7'), class: 'avatar-xxl' },
]
export const Avatarlist = [
  { id: 1, src1: ALLImages('users8') },
  { id: 2, src1: ALLImages('users8') },
  { id: 3, src1: ALLImages('users9') },
  { id: 4, src1: ALLImages('users8') },
  { id: 5, src1: ALLImages('users11') },
]
export const Simpleavatar1 = [
  { id: 1, src1: ALLImages('users1') },
  { id: 2, src1: ALLImages('users2') },
  { id: 3, src1: ALLImages('users1') },
  { id: 4, src1: ALLImages('users2') },
  { id: 5, src1: ALLImages('users3') },
]

//*** Avatar Rounded ***//
export const avtarround = [
  { id: 1, src1: ALLImages('users12') },
  { id: 2, src1: ALLImages('users13') },
  { id: 3, src1: ALLImages('users11') },
  { id: 4, src1: ALLImages('users12') },
  { id: 5, src1: ALLImages('users14') },
]
export const avtarroundlist = [
  { id: 1, src1: ALLImages('users12') },
  { id: 2, src1: ALLImages('users1') },
  { id: 3, src1: ALLImages('users19') },
  { id: 4, src1: ALLImages('users2') },
  { id: 5, src1: ALLImages('users14') },
]
export const avatarsizes2 = [
  { id: 1, src1: ALLImages('users15'), class: 'avatar-sm' },
  { id: 2, src1: ALLImages('users13'), class: '' },
  { id: 3, src1: ALLImages('users16'), class: 'avatar-md' },
  { id: 4, src1: ALLImages('users17'), class: 'avatar-lg' },
  { id: 5, src1: ALLImages('users14'), class: 'avatar-xl' },
  { id: 6, src1: ALLImages('users18'), class: 'avatar-xxl' },
]

//*** DropDowns ***//
export const dropdowns = [
  { id: 1, color: 'default' },
  { id: 2, color: 'primary' },
  { id: 3, color: 'success' },
  { id: 4, color: 'info' },
  { id: 5, color: 'warning' },
  { id: 6, color: 'danger' },
]
//*** List Group ***//
export const listgroups = [
  { id: 1, heading: 'Cras justo odio' },
  { id: 2, heading: 'Dapibus ac facilisis in' },
  { id: 3, heading: 'Morbi leo risus' },
  { id: 4, heading: 'Porta ac consectetur ac' },
  { id: 5, heading: 'Vestibulum at eros' },
]
export const activelistgroups = [
  { id: 1, heading: 'Cras justo odio', active: 'active' },
  { id: 2, heading: 'Dapibus ac facilisis in', active: '' },
  { id: 3, heading: 'Morbi leo risus', active: '' },
  { id: 4, heading: 'Porta ac consectetur ac', active: '' },
  { id: 5, heading: 'Vestibulum at eros', active: '' },
]
export const disablelistgroups = [
  { id: 1, heading: 'Cras justo odio', disable: 'disabled' },
  { id: 2, heading: 'Dapibus ac facilisis in', disable: '' },
  { id: 3, heading: 'Morbi leo risus', disable: '' },
  { id: 4, heading: 'Porta ac consectetur ac', disable: '' },
  { id: 5, heading: 'Vestibulum at eros', disable: '' },
]
export const Contextuallistgroups = [
  { id: 1, heading: 'Dapibus ac facilisis in', color: 'default' },
  { id: 2, heading: 'Dapibus ac facilisis in', color: 'success' },
  { id: 3, heading: 'Cras sit amet nibh libero', color: 'info' },
  { id: 4, heading: 'Porta ac consectetur ac', color: 'warning' },
  { id: 5, heading: 'Vestibulum at eros', color: 'danger' },
]
export const Colorlistgroups = [
  { id: 1, heading: 'Cras justo odio', color: 'primary' },
  { id: 2, heading: 'Dapibus ac facilisis in', color: 'danger' },
  { id: 3, heading: 'Morbi leo risus', color: 'success' },
  { id: 4, heading: 'Porta ac consectetur ac', color: 'warning' },
  { id: 5, heading: 'Vestibulum at eros', color: 'info' },
]
export const Badgelistgroups = [
  { id: 1, heading: 'Cras justo odio', badge: '20' },
  { id: 2, heading: 'Dapibus ac facilisis in', badge: '15' },
  { id: 3, heading: 'Morbi leo risus', badge: '10' },
  { id: 4, heading: 'Porta ac consectetur ac', badge: '8' },
  { id: 5, heading: 'Vestibulum at eros', badge: '1' },
]
export const Badgecolorlistgroups = [
  { id: 1, heading: 'Cras justo odio', badge: '20', color: 'primary' },
  { id: 2, heading: 'Dapibus ac facilisis in', badge: '15', color: 'danger' },
  { id: 3, heading: 'Morbi leo risus', badge: '10', color: 'success' },
  { id: 4, heading: 'Porta ac consectetur ac', badge: '8', color: 'warning' },
  { id: 5, heading: 'Vestibulum at eros', badge: '1', color: 'info' },
]
//*** Tags ***//
export const colortags = [
  { id: 1, color: 'blue', class: 'Blue tag' },
  { id: 2, color: 'azure', class: 'Azure tag' },
  { id: 3, color: 'indigo', class: 'Indigo tag' },
  { id: 4, color: 'purple', class: 'Purple tag' },
  { id: 5, color: 'pink', class: 'Pink tag' },
  { id: 6, color: 'red', class: 'Red tag' },
  { id: 7, color: 'orange', class: 'Orange tag' },
  { id: 8, color: 'yellow', class: 'Yellow tag' },
  { id: 9, color: 'lime', class: 'Lime tag' },
  { id: 10, color: 'green', class: 'Green tag' },
  { id: 11, color: 'teal', class: 'Teal tag' },
  { id: 12, color: 'cyan', class: 'Cyan tag' },
  { id: 13, color: 'gray', class: 'Gray tag' },
  { id: 14, color: 'gray-dark', class: 'Dark gray tag' },
]
export const alltags = [
  { id: 1, class: 'One' },
  { id: 2, class: 'Two' },
  { id: 3, class: 'Three' },
  { id: 4, class: 'Four' },
  { id: 5, class: 'Five' },
  { id: 6, class: 'Six' },
  { id: 7, class: 'Seven' },
  { id: 8, class: 'Eight' },
  { id: 9, class: 'Nine' },
  { id: 10, class: 'Ten' },
  { id: 11, class: 'Eleven' },
  { id: 12, class: 'Twelve' },
  { id: 13, class: 'Thirteen' },
  { id: 14, class: 'Fourteen' },
  { id: 15, class: 'Fifteen' },
  { id: 16, class: 'Sixteen' },
  { id: 17, class: 'Seventeen' },
  { id: 18, class: 'Eighteen' },
  { id: 19, class: 'Nineteen' },
  { id: 20, class: 'Twenty' },
]
export const avatars = [
  { id: 1, src1: ALLImages("users11"), class: 'Victoria' },
  { id: 2, src1: ALLImages("users4"), class: ' Nathan' },
  { id: 3, src1: ALLImages("users1"), class: 'Alice' },
  { id: 4, src1: ALLImages("users18"), class: 'Rose' },
  { id: 5, src1: ALLImages("users16"), class: 'Peter' },
  { id: 6, src1: ALLImages("users4"), class: 'Wayne' },
  { id: 7, src1: ALLImages("users7"), class: 'Michelle' },
  { id: 8, src1: ALLImages("users17"), class: 'Debra' },
]

//*** Typography ***//
export const headers = [
  { id: 1, heading: 'Default Heading Text', class: 'h1.Heading', class5: 'h1.Heading', class1: 'h1.Heading', class2: 'h1.Heading', class3: 'h1.Heading', class4: 'h1.Heading', color: '', color1: '', color2: '', color3: '', color4: '', color5: '', },
  { id: 2, heading: 'Heading With Color Text', class: 'h1.Heading', class5: 'h1.Heading', class1: 'h1.Heading', class2: 'h1.Heading', class3: 'h1.Heading', class4: 'h1.Heading', color: 'text-primary', color1: 'text-info', color2: 'text-success', color3: 'text-danger', color4: 'text-secondary', color5: 'text-warning', },

]
export const headers1 = [
  { id: 1, heading: 'Heading-Inverse', color: 'inverse', color1: 'inverse', color2: 'inverse', color3: 'inverse', color4: 'inverse', color5: 'inverse', data: 'Examples using heading-inverse css' },
  { id: 2, heading: 'Heading primary to danger', color: 'primary', color1: 'secondary', color2: 'success', color3: 'info', color4: 'warning', color5: 'danger', data: 'Examples using heading-primary toheading-danger css' },

]

//*** Badges ***//
export const badges = [
  { id: 1, color: 'default' },
  { id: 2, color: 'primary' },
  { id: 3, color: 'success' },
  { id: 4, color: 'danger' },
  { id: 5, color: 'info' },
  { id: 6, color: 'warning' },
]
export const Buttonbadges = [
  { id: 1, color: 'primary', data: '2' },
  { id: 2, color: 'secondary', data: '1' },
  { id: 3, color: 'success', data: '5' },
  { id: 4, color: 'info', data: '3' },
  { id: 5, color: 'warning', data: '6' },
  { id: 6, color: 'danger', data: '4' },
]
export const Buttonsquarebadges = [
  { id: 1, color: 'primary', data: '2' },
  { id: 2, color: 'success', data: '65' },
  { id: 3, color: 'secondary', data: '1' },
  { id: 4, color: 'info', data: '5333' },
]
export const Buttonroundbadges = [
  { id: 1, color: 'info', data: '3' },
  { id: 2, color: 'primary', data: '22' },
  { id: 3, color: 'secondary', data: '145' },
  { id: 4, color: 'success', data: '3225' },
]
export const Buttonborderbadges = [
  { id: 1, color: 'primary', data: '2' },
  { id: 2, color: 'success', data: '65' },
  { id: 3, color: 'secondary', data: '43' },
  { id: 4, color: 'info', data: '563' },
]
export const badge = [
  { id: 1, color: 'default' },
  { id: 2, color: 'primary' },
  { id: 3, color: 'success' },
  { id: 4, color: 'info' },
  { id: 5, color: 'warning' },
  { id: 6, color: 'danger' },
]
//*** Panel ***//
export const panel = [
  { id: 1, color: 'primary' },
  { id: 2, color: 'secondary' },
  { id: 3, color: 'success' },
  { id: 4, color: 'danger' },
]
//*** Thumbnails ***//
export const basicthumnails = [
  { id: 1, src1: ALLImages("media1") },
  { id: 2, src1: ALLImages("media2") },
  { id: 3, src1: ALLImages("media3") },
  { id: 4, src1: ALLImages("media5") },
]
export const custom = [
  { id: 1, src1: ALLImages('media19') },
  { id: 2, src1: ALLImages('media20') },
  { id: 3, src1: ALLImages('media21') },
]

//*** Modal ***//

//Scale
export function Scale() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="primary"
        className="modal-effect d-grid mb-3"

        onClick={handleClickOpen}
      >
        Scale
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">Message Preview
          <Button onClick={() => setOpen(false)} className="btn-close" variant=""> x</Button>
        </DialogTitle>
        <hr className='my-0' />
        <DialogContent>
          <DialogContentText>
            Why We Use Electoral College, Not Popular Vote It is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content here', making it
            look like readable English.
          </DialogContentText>
        </DialogContent>
        <hr />
        <DialogActions>
          <Button variant="secondary" className="me-1" onClick={handleClose}>
            Save changes
          </Button>
          <Button onClick={handleClose} className="me-1" variant="success">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
//RightSlide
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});
export function RightSlide() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        className="modal-effect d-grid mb-3"

        variant="primary"
        onClick={handleClickOpen}
      >
        Slide In Right
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Message Preview
          <Button onClick={() => setOpen(false)} className="btn-close" variant=""> x</Button>
        </DialogTitle>
        <hr className='my-0' />
        <DialogContent>
          <DialogContentText>
            Why We Use Electoral College, Not Popular Vote It is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content here', making it
            look like readable English.
          </DialogContentText>
        </DialogContent>
        <hr />
        <DialogActions>
          <Button variant="secondary" className="me-1" onClick={handleClose}>
            Save changes
          </Button>
          <Button onClick={handleClose} className="me-1" variant="success">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
//BottomSlide
const Bottomslide = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export function BottomSlide() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        className="modal-effect d-grid mb-3"

        variant="primary"
        onClick={handleClickOpen}
      >
        Slide In Bottom
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Bottomslide}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Message Preview
          <Button onClick={() => setOpen(false)} className="btn-close" variant=""> x</Button>
        </DialogTitle>
        <hr className='my-0' />
        <DialogContent>
          <DialogContentText>
            Why We Use Electoral College, Not Popular Vote It is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content here', making it
            look like readable English.
          </DialogContentText>
        </DialogContent>
        <hr />
        <DialogActions>
          <Button variant="secondary" className="me-1" onClick={handleClose}>
            Save changes
          </Button>
          <Button onClick={handleClose} className="me-1" variant="success">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export const Datepicker = () => {
  const [date, setDate] = useState(new Date());

  const handleCalendarClose = () => console.log("Calendar closed");
  const handleCalendarOpen = () => console.log("Calendar opened");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button className="modal-effect d-grid mb-3"

        variant="primary" onClick={handleShow}>
        View Demo
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title>Basic Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Modal.Title>Modal Body</Modal.Title>
          <DatePicker
            selected={date}
            onChange={(date) => setDate(date)}
            onCalendarClose={handleCalendarClose}
            onCalendarOpen={handleCalendarOpen}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" className="me-1" onClick={handleClose}>
            Save Changes
          </Button>
          <Button variant="success" className="me-1" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
//ScrollBody
export function ScrollBody() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Button
        className="modal-effect  d-grid mb-3"

        onClick={handleClickOpen("body")}
      >
        scrollbody
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle>Subscribe
          <Button onClick={() => setOpen(false)} className="btn-close" variant=""> x</Button>
        </DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {[...new Array(10)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
  Cras justo odio, dapibus ac facilisis in, egestas eget quam.
  Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
  Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
              )
              .join("\n")}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="success" onClick={handleClose}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
//PaperComponent
export function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}
//DraggableModal
export function DraggableModal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        className="modal-effect  d-grid mb-3"

        variant="primary"
        onClick={handleClickOpen}
      >
        DraggableModal
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          Message Preview
          <Button onClick={() => setOpen(false)} className="btn-close" variant=""> x</Button>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Why We Use Electoral College, Not Popular Vote It is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content here', making it
            look like readable English.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="secondary" className="me-1" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleClose} className="me-1" variant="success">Save Changes</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
//FormModal
export function FormModal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        className="modal-effect  d-grid mb-3"

        variant="primary"
        onClick={handleClickOpen}
      >
        Form Modal
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Login From
          <Button
            onClick={handleClose}
            className="btn-close"
            variant=""
          >
            x
          </Button>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="secondary" className="me-1">Cancel</Button>
          <Button onClick={handleClose} variant="success" className="me-1">Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
//StaticbackdropModal
export function StaticbackdropModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        className="modal-effect  d-grid mb-3"

        variant="primary"
        onClick={handleShow}
      >
        static backdrop modal
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header >
          <Modal.Title>Modal title
          </Modal.Title>
          <Button onClick={() => setShow(false)} className="btn-close" variant=""> x</Button>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className="me-1" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" className="me-1" onClick={handleClose}>
            Understood
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
//MydModalWithGrid
export function MydModalWithGrid(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header >
        <Modal.Title >
          Using Grid in Modal
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={12} md={8}>
              .col-xs-12 .col-md-8
            </Col>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="modal-effect  d-grid mb-3"

          onClick={props.onHide}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
//Gridmodal
export function Gridmodal() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button
        className="modal-effect  d-grid mb-3"

        variant="primary"
        onClick={() => setModalShow(true)}
      >
        Grid Modal
      </Button>

      <MydModalWithGrid
        variant="primary"
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
//CustomModal
export function CustomModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  return (
    <>
      <Button
        className="modal-effect  d-grid mb-3"

        variant="primary"
        onClick={() => setShow(true)}
      >
        Custom Width Modal
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header >
          <Modal.Title>Modal title
          </Modal.Title>
          <Button onClick={() => setShow(false)} className="btn-close" variant=""> x</Button>
        </Modal.Header>
        <Modal.Body>
          Modal body text goes here.It is a long established fact that a reader
          will be distracted by the readable content of a page when looking at
          its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to using
          'Content here, content here', making it look like readable English.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className="me-1" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" className="me-1" onClick={handleClose}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
//MyVerticallyCenteredModal
export function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header >
        <Modal.Title >
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="modal-effect  d-grid mb-3"

          onClick={props.onHide}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
//VerticallyCenteredModal
export function VerticallyCenteredModal() {
  const [modalShow1, setModalShow1] = React.useState(false);

  return (
    <>
      <Button
        className="modal-effect  d-grid mb-3"

        variant="primary"
        onClick={() => setModalShow1(true)}
      >
        Vertically centered modal
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow1}
        onHide={() => setModalShow1(false)}
      />
    </>
  );
}
//CenterModal
export function CenterModal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        className="modal-effect  d-grid mb-3"

        variant="primary"
        onClick={handleClickOpen}
      >
        Open alert dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Message Preview
          <Button onClick={() => setOpen(false)} className="btn-close" variant=""> x</Button>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Why We Use Electoral College, Not Popular Vote It is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content here', making it
            look like readable English.
          </DialogContentText>

        </DialogContent>
        <DialogActions>
          <Button variant="secondary" className="me-1" onClick={handleClose}>Cancel</Button>
          <Button variant="success" className="me-1" onClick={handleClose} autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

//*** UserList ***//

//Category


//***Cryptocurrencies***//


//**Profile **//


//*** Edit Profile ***//



//*** MailInbox ***//
//MailInboxdata

//** About Company **//

//** Services **//

//** Invoice **//
//Tableinvoice

export function Printpage() {
  const print = () => {
    window.print();
  }
  return (


    <div className="card-footer text-end">
      <button
        type="button"
        className="btn btn-primary mb-1 me-2"
        // string="javascript:window.print();"
        onClick={print}
      >
        <i className="si si-wallet"></i> Pay Invoice
      </button>
      <button
        type="button"
        className="btn btn-success mb-1 me-2"
        // string="javascript:window.print();"
        onClick={print}
      >
        <i className="si si-paper-plane"></i> Send Invoice
      </button>
      <button
        type="button"
        className="btn btn-info mb-1 me-2"
        // string="javascript:window.print();"
        onClick={print}
      >
        <i className="si si-printer"></i> Print Invoice
      </button>
    </div>

  );
}
//** Pricing Table **//

//** Blog **//

//** Blog Details **//

//Shopcardlist
export const playerData = [
  {
    IMAGE: ALLImages('pngs9'),
    PRICE: "$16,599",
    TITLE: "Bracelets",
    PRICES: "$19,799",
    RIBBON: "ribbon",
    NEW: "new",
    STAR: "star",
    STAR1: "star",
    STAR2: "star-half-o",
    STAR3: "star-o",
  },
  {
    IMAGE: ALLImages('pngs1'),
    PRICE: "$599",
    TITLE: "Cup",
    PRICES: "$799",
    RIBBON: "ribbon1",
    NEW: "25%",
    STAR: "star",
    STAR1: "star-half-o",
    STAR2: "star-o",
    STAR3: "star-o",
  },
  {
    IMAGE: ALLImages('pngs7'),
    PRICE: "$25,239",
    TITLE: "Stool",
    PRICES: "$34,399",
    STAR: "star",
    STAR1: "star",
    STAR2: "star",
    STAR3: "star-half-o",
  },
  {
    IMAGE: ALLImages('pngs2'),
    PRICE: "$345",
    TITLE: "Video Game",
    PRICES: "$459",
    RIBBON: "ribbon1",
    NEW: "25%",
    STAR: "star",
    STAR1: "star",
    STAR2: "star-half-o",
    STAR3: "star-o",
  },
  {
    IMAGE: ALLImages('pngs4'),
    PRICE: "$277",
    TITLE: "Flower Pot",
    PRICES: "$456",
    STAR: "star-half-o",
    STAR1: "star-o",
    STAR2: "star-o",
    STAR3: "star-o",
  },
  {
    IMAGE: ALLImages('pngs8'),
    PRICE: "$567",
    TITLE: "Watch",
    PRICES: "$866",
    STAR: "star",
    STAR1: "star",
    STAR2: "star",
    STAR3: "star-half-o",
  },
  {
    IMAGE: ALLImages('pngs3'),
    PRICE: "$455",
    TITLE: "Headset",
    PRICES: "$567",
    STAR: "star",
    STAR1: "star-half-o",
    STAR2: "star-o",
    STAR3: "star-o",
  },
  {
    IMAGE: ALLImages('pngs5'),
    PRICE: "$345",
    TITLE: "Chair",
    PRICES: "$499",
    STAR: "star",
    STAR1: "star",
    STAR2: "star-half-o",
    STAR3: "star-o",
  },
  {
    IMAGE: ALLImages('pngs6'),
    PRICE: "$543",
    TITLE: "Goggles",
    PRICES: "$688",
    RIBBON: "ribbon1",
    NEW: "25%",
    STAR: "star",
    STAR1: "star",
    STAR2: "star",
    STAR3: "star-half-o",
  },
];
//Category

//** Product Details **//
//Category


//** ShoppingCart **//
//ShoppingData

//** Wishlist **//
//Wishlistdata


//** CheckOut ***//
//Counrtcheckout

//** FileManager List **//


//** FileManger **//



//** FileAttachments **//
export const files = [
  { id: 1, icon: 'mdi-file-image me-2', heading: 'Image_file.jpg', color: 'primary' },
  { id: 2, icon: 'mdi-file-word me-2', heading: 'Word_file.jpg', color: 'secondary' },
  { id: 3, icon: 'mdi-file-excel me-2', heading: 'Excel_file.jpg', color: 'success' },
  { id: 4, icon: 'mdi-file-pdf me-2', heading: 'Pdf_file.jpg', color: 'warning' },
  { id: 5, icon: 'mdi-file-video me-2', heading: 'Video_file.jpg', color: 'danger' },
  { id: 6, icon: 'mdi-file-music me-2', heading: 'Audio_file.jpg', color: 'info' },
]
export const fileattachment = [
  { id: 1, src1: ALLImages("pngs4"), heading: 'Image01.jpg' },
  { id: 2, src1: ALLImages("pngs3"), heading: 'Image02.jpg' },
  { id: 3, src1: ALLImages("pngs9"), heading: 'Image03.jpg' },
  { id: 4, src1: ALLImages("pngs6"), heading: 'Image04.jpg' },
  { id: 5, src1: ALLImages("pngs1"), heading: 'Image05.jpg' },
  { id: 6, src1: ALLImages("pngs10"), heading: 'Image06.jpg' },
]
export const filesdata = [
  { id: 1, src1: ALLImages("fileimg"), heading: 'Image01.jpg' },
  { id: 2, src1: ALLImages("doc"), heading: 'word.doc' },
  { id: 3, src1: ALLImages("file2"), heading: 'Excel.xls' },
  { id: 4, src1: ALLImages("file"), heading: 'Document.pdf' },
  { id: 5, src1: ALLImages("imgformat"), heading: 'Image02.jpg' },
]

//** File Details **//


//** Dashboard **//
//totalTransactions
export const totalTransactions = {
  series: [{
    name: "Total Orders",
    type: 'line',
    data: [0, 45, 30, 75, 15, 94, 40, 115, 30, 105, 65, 110]

  }, {
    name: "Total Sales",
    type: 'line',
    data: [0, 60, 20, 130, 75, 130, 75, 140, 64, 130, 85, 120]

  }, {
    name: "",
    type: 'area',
    data: [0, 105, 70, 175, 85, 154, 90, 185, 120, 145, 185, 130]
  }],

  options: {
    chart: {
      height: 300,
      type: "line",
      stacked: false,
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: true,
        opacity: 0.1,
      },
    },
    colors: ["#6259ca", "#f99433", 'rgba(119, 119, 142, 0.01)'],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "smooth",
      width: [3, 3, 0],
      dashArray: [0, 4],
      lineCap: "round"
    },
    grid: {
      padding: {
        left: 0,
        right: 0
      },
      strokeDashArray: 3
    },
    markers: {
      size: 0,
      hover: {
        size: 0
      }
    },

    xaxis: {
      type: "month",
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      axisBorder: {
        show: false,
        color: 'rgba(119, 119, 142, 0.08)',
      },
      labels: {
        style: {
          color: '#8492a6',
          fontSize: '12px',
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          color: '#8492a6',
          fontSize: '12px',
        },
      },
      axisBorder: {
        show: false,
        color: 'rgba(119, 119, 142, 0.08)',
      },
    },
    fill: {
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        opacityFrom: 0.95,
        opacityTo: 0.70,
        stops: [0, 100, 100, 100]
      }
    },
    tooltip: {
      show: false
    },
    legend: {
      position: "top",
      show: true
    }
  },

};
//Recentorders

export const Recentorders = {
  series: [83],
  options: {
    chart: {
      height: 305,
      type: "radialBar",
      responsive: 'true',
      offsetY: 10,
      offsetX: 0,
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        dataLabels: {
          name: {
            fontSize: "16px",
            color: undefined,
            offsetY: 30,
          },
          value: {
            offsetY: -16,
            fontSize: "22px",
            color: undefined,
            formatter: function (val) {
              return val + "%";
            },
          },
        },
      },
    },
    colors: ['#ff5d9e'],
    fill: {
      type: "gradient",
      gradient: {
        shade: "gradient",
        type: "horizontal",
        shadeIntensity: .5,
        gradientToColors: ['#6259ca'],
        inverseColors: !0,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100]
      }
    },
    stroke: {
      dashArray: 4,
    },
    labels: [""],
  },
};

//dashbordtable
//dashboard1
export const COLUMNS1 = [
  {
    Header: "S.NO:",
    accessor: "PurchaseDate",
    className: "",
  },
  {
    Header: "NAME",
    accessor: "Product",
    className: "",
  },
  {
    Header: "DATE",
    accessor: "ProductID",
    className: "",
  },
  {
    Header: "AMOUNT",
    accessor: "ProductCost",
    className: "",
  },
  {
    Header: "STATUS",
    accessor: "Status",
    className: "",
  },
  {
    Header: "ACTION",
    accessor: "Action",
    className: "",
  },
];
const i = <span className={`text-success fs-15 fw-semibold`}>Success</span>
const t = <span className={`text-danger fs-15 fw-semibold`}>Cancel</span>
const s = <span className={`text-warning fs-15 fw-semibold`}>Pending</span>
const d = <div className='d-flex align-items-center'><img className='w-6 h-6 brround me-2' src={ALLImages("users11")} /><div className='ms-1 d-block text-wrap w-80'><h6 className='mb-0 fs-14 text-start'>Jake poole</h6><span className="fs-12 text-muted text-wrap">jacke123@gmail.com</span></div>

</div>

const e = <div className='d-flex align-items-center'><img className='w-6 h-6 brround me-2' src={ALLImages("users1")} /><div className='ms-1 d-block text-wrap w-80'><h6 className='mb-0 fs-14 text-start'>Virginia Gray</h6><span className="fs-12 text-muted text-wrap">virginia456@gmail.com</span></div></div>
const f = <div className='d-flex align-items-center'><img className='w-6 h-6 brround me-2' src={ALLImages("users12")} /><div className='ms-1 d-block text-wrap w-80'><h6 className='mb-0 fs-14 text-start'>Jacob Thomson</h6><span className="fs-12 text-muted text-wrap">jacobthomson@gmail.com</span></div></div>
const g = <div className='d-flex align-items-center'><img className='w-6 h-6 brround me-2' src={ALLImages("users13")} /><div className='ms-1 d-block text-wrap w-80'><h6 className='mb-0 fs-14 text-start'>Trevor Thomson</h6><span className="fs-12 text-muted text-wrap">trevor@gmail.com</span></div></div>
const h = <div className='d-flex align-items-center'><img className='w-6 h-6 brround me-2' src={ALLImages("users2")} /><div className='ms-1 d-block text-wrap w-80'><h6 className='mb-0 fs-14 text-start'>Kylie north</h6><span className="fs-12 text-muted text-wrap">kylie@gmail.com</span></div></div>
const j = <div className='d-flex align-items-center'><img className='w-6 h-6 brround me-2' src={ALLImages("users14")} /><div className='ms-1 d-block text-wrap w-80'><h6 className='mb-0 fs-14 text-start'>Jan Hodges</h6><span className="fs-12 text-muted text-wrap">
  jan@gmail.com</span></div></div>
const l = <div className='d-flex align-items-center'><img className='w-6 h-6 brround me-2' src={ALLImages("users4")} /><div className='ms-1 d-block text-wrap w-80'><h6 className='mb-0 fs-14 text-start'>Trevor Thomson</h6><span className="fs-12 text-muted text-wrap">trevor@gmail.com</span></div></div>
const m = <div className='d-flex align-items-center'><img className='w-6 h-6 brround me-2' src={ALLImages("users5")} /><div className='ms-1 d-block text-wrap w-80'><h6 className='mb-0 fs-14 text-start'>Kylie north</h6><span className="fs-12 text-muted text-wrap">kylie@gmail.com</span></div></div>


const data1 = <><OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
  <Link to="#" className='btn btn-primary me-2'>  <i className="fe fe-edit fs-18"></i></Link>

</OverlayTrigger><OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
    <Link to="#" className='btn btn-danger'> <i className="fe fe-trash-2  fs-18"></i></Link>
  </OverlayTrigger></>
export const DATATABLE1 = [
  {
    PurchaseDate: "01",
    ClientName: "Cherry Blossom",
    ProductID: "20-11-2020",
    Product: d,
    PaymentMode: "Online Payment",
    Status: i,
    ProductCost: "$5.321.2",
    color: "badge badge-success",
    Action: data1
  },
  {
    PurchaseDate: "02",
    ClientName: "Simon Sais",
    ProductID: "20-11-2020",
    Product: e,
    PaymentMode: "Online Payment",
    Status: i,
    ProductCost: "$53,3654",
    Action: data1
  },
  {
    PurchaseDate: "03",
    ClientName: "Manny Jah",
    ProductID: "20-11-2020",
    Product: f,
    PaymentMode: "Cash on Delivery",
    Status: s,
    ProductCost: "$1,56,3654",
    Action: data1
  },
  {
    PurchaseDate: "04",
    ClientName: "Florinda Carasco",
    ProductID: "19 Sep 2021",
    Product: g,
    PaymentMode: "Online Payment",
    Status: i,
    ProductCost: "$12.3",
    Action: data1
  },
  {
    PurchaseDate: "05",
    ClientName: "Ivan Notheridiya",
    ProductID: "19-11-2020",
    Product: h,
    PaymentMode: "Cash on Delivery",
    Status: s,
    ProductCost: "$5.312.2",
    Action: data1
  },
  {
    PurchaseDate: "06",
    ClientName: "Willie Findit",
    ProductID: "19-11-2020",
    Product: j,
    PaymentMode: "Cash on delivered",
    Status: t,
    ProductCost: "$5.312.2",
    Action: data1
  },
  {
    PurchaseDate: "07",
    ClientName: "Addie Minstra",
    ProductID: "19-11-2020",
    Product: j,
    PaymentMode: "Online Payment",
    Status: i,
    ProductCost: "$2,24,1421",
    Action: data1
  },
  {
    PurchaseDate: "08",
    ClientName: "Laura Biding",
    ProductID: "19-11-2020",
    Product: m,
    PaymentMode: "Cash on delivered",
    Status: t,
    ProductCost: "$5.312.2",
    Action: data1
  },
];

export const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <span className="d-flex ms-auto">
      <input
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
        className="form-control mb-4"
        placeholder="Search..."
      />
    </span>
  );
};
//Timeline


//Browser usage


//** Widgets data **//


//** Treeview **//

//treeview
export const treeviews = [
  {
    id: 100,
    text: "TECH",
    children: [
      {
        id: 101,
        text: "Company Maintenance",
        isLeaf: true,
      },
      {
        id: 102,
        text: "Employees",
        isLeaf: true,
        children: [
          {
            id: 1021,
            text: "Reports",
            isLeaf: true,
          },
        ],
      },
      {
        id: 103,
        text: "Human Resources",
        isLeaf: true,
      },
    ],
  },
];
//treeviewXRP
export const treeviewXRP = [
  {
    id: 200,
    text: "XRP",
    children: [
      {
        id: 201,
        text: "Company Maintenance",
        isLeaf: true,
      },
      {
        id: 202,
        text: "Employees",
        isLeaf: true,
        children: [
          {
            id: 2021,
            text: "Reports",
            isLeaf: true,
          },
        ],
      },
      {
        id: 203,
        text: "Human Resources",
        isLeaf: true,
      },
    ],
  },
];
//treeview1
export const treeview1 = [
  {
    id: 1,
    text: "Treeview1",
    children: [
      {
        id: 2,
        text: "Company Maintenance",
        isLeaf: true,
      },
      {
        id: 3,
        text: "Employees",
        isLeaf: true,
        children: [
          {
            id: 4,
            text: "Reports",
            isLeaf: true,
            children: [
              {
                id: 5,
                text: "Report1",
                isLeaf: true,
              },
              {
                id: 6,
                text: "Report2",
                isLeaf: true,
              },
              {
                id: 7,
                text: "Report3",
                isLeaf: true,
              },
            ],
          },
          {
            id: 8,
            text: "Employee Maint",
            isLeaf: true,
            children: [
              {
                id: 9,
                text: "Reports",
                isLeaf: true,
                children: [
                  {
                    id: 10,
                    text: "Report1",
                    isLeaf: true,
                  },
                  {
                    id: 11,
                    text: "Report2",
                    isLeaf: true,
                  },
                  {
                    id: 12,
                    text: "Report3",
                    isLeaf: true,
                  },
                ],
              },
              {
                id: 13,
                text: "Employee Maint",
                isLeaf: true,
                children: [
                  {
                    id: 14,
                    text: "Reports",
                    isLeaf: true,
                    children: [
                      {
                        id: 15,
                        text: "Report1",
                        isLeaf: true,
                      },
                      {
                        id: 16,
                        text: "Report2",
                        isLeaf: true,
                      },
                      {
                        id: 17,
                        text: "Report3",
                        isLeaf: true,
                      },
                    ],
                  },
                  {
                    id: 18,
                    text: "Employee Maint",
                    isLeaf: true,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 19,
        text: "Human Resources",
        isLeaf: true,
      },
    ],
  },
];
//treeview2
export const treeview2 = [
  {
    id: 20,
    text: "Treeview2",

    children: [
      {
        id: 21,
        text: "Company Maintenance",
        isLeaf: true,
      },
      {
        id: 22,
        text: "Employees",
        isLeaf: true,
        children: [
          {
            id: 23,
            text: "Reports",
            isLeaf: true,
            children: [
              {
                id: 24,
                text: "Report1",
                isLeaf: true,
              },
              {
                id: 25,
                text: "Report2",
                isLeaf: true,
              },
              {
                id: 26,
                text: "Report3",
                isLeaf: true,
              },
            ],
          },
          {
            id: 27,
            text: "Employee Maint",
            isLeaf: true,
            children: [
              {
                id: 28,
                text: "Reports",
                isLeaf: true,
                children: [
                  {
                    id: 29,
                    text: "Report1",
                    isLeaf: true,
                  },
                  {
                    id: 30,
                    text: "Report2",
                    isLeaf: true,
                  },
                  {
                    id: 31,
                    text: "Report3",
                    isLeaf: true,
                  },
                ],
              },
              {
                id: 32,
                text: "Employee Maint",
                isLeaf: true,
                children: [
                  {
                    id: 33,
                    text: "Reports",
                    isLeaf: true,
                    children: [
                      {
                        id: 34,
                        text: "Report1",
                        isLeaf: true,
                      },
                      {
                        id: 35,
                        text: "Report2",
                        isLeaf: true,
                      },
                      {
                        id: 36,
                        text: "Report3",
                        isLeaf: true,
                      },
                    ],
                  },
                  {
                    id: 37,
                    text: "Employee Maint",
                    isLeaf: true,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 37,
        text: "Human Resources",
        isLeaf: true,
      },
    ],
  },
];
//treeview3
export const treeview3 = [
  {
    id: 38,
    text: "Treeview3",
    children: [
      {
        id: 39,
        text: "Company Maintenance",
        isLeaf: true,
      },
      {
        id: 40,
        text: "Employees",
        isLeaf: true,
        children: [
          {
            id: 41,
            text: "Reports",
            isLeaf: true,
            children: [
              {
                id: 42,
                text: "Report1",
                isLeaf: true,
              },
              {
                id: 43,
                text: "Report2",
                isLeaf: true,
              },
              {
                id: 44,
                text: "Report3",
                isLeaf: true,
              },
            ],
          },
          {
            id: 45,
            text: "Employee Maint",
            isLeaf: true,
            children: [
              {
                id: 46,
                text: "Reports",
                isLeaf: true,
                children: [
                  {
                    id: 47,
                    text: "Report1",
                    isLeaf: true,
                  },
                  {
                    id: 48,
                    text: "Report2",
                    isLeaf: true,
                  },
                  {
                    id: 49,
                    text: "Report3",
                    isLeaf: true,
                  },
                ],
              },
              {
                id: 50,
                text: "Employee Maint",
                isLeaf: true,
                children: [
                  {
                    id: 51,
                    text: "Reports",
                    isLeaf: true,
                    children: [
                      {
                        id: 52,
                        text: "Report1",
                        isLeaf: true,
                      },
                      {
                        id: 53,
                        text: "Report2",
                        isLeaf: true,
                      },
                      {
                        id: 54,
                        text: "Report3",
                        isLeaf: true,
                      },
                    ],
                  },
                  {
                    id: 55,
                    text: "Employee Maint",
                    isLeaf: true,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 56,
        text: "Human Resources",
        isLeaf: true,
      },
    ],
  },
];
//treeview4
export const treeview4 = [
  {
    id: 57,
    text: "Treeview4",
    children: [
      {
        id: 58,
        text: "Company Maintenance",
        isLeaf: true,
      },
      {
        id: 59,
        text: "Employees",
        isLeaf: true,
        children: [
          {
            id: 60,
            text: "Reports",
            isLeaf: true,
            children: [
              {
                id: 61,
                text: "Report1",
                isLeaf: true,
              },
              {
                id: 62,
                text: "Report2",
                isLeaf: true,
              },
              {
                id: 63,
                text: "Report3",
                isLeaf: true,
              },
            ],
          },
          {
            id: 64,
            text: "Employee Maint",
            isLeaf: true,
            children: [
              {
                id: 65,
                text: "Reports",
                isLeaf: true,
                children: [
                  {
                    id: 66,
                    text: "Report1",
                    isLeaf: true,
                  },
                  {
                    id: 67,
                    text: "Report2",
                    isLeaf: true,
                  },
                  {
                    id: 68,
                    text: "Report3",
                    isLeaf: true,
                  },
                ],
              },
              {
                id: 69,
                text: "Employee Maint",
                isLeaf: true,
                children: [
                  {
                    id: 70,
                    text: "Reports",
                    isLeaf: true,
                    children: [
                      {
                        id: 71,
                        text: "Report1",
                        isLeaf: true,
                      },
                      {
                        id: 72,
                        text: "Report2",
                        isLeaf: true,
                      },
                      {
                        id: 73,
                        text: "Report3",
                        isLeaf: true,
                      },
                    ],
                  },
                  {
                    id: 74,
                    text: "Employee Maint",
                    isLeaf: true,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 75,
        text: "Human Resources",
        isLeaf: true,
      },
    ],
  },
];
//treeview5
export const treeview5 = [
  {
    id: 76,
    text: "Treeview5",
    children: [
      {
        id: 77,
        text: "Company Maintenance",
        isLeaf: true,
      },
      {
        id: 78,
        text: "Employees",
        isLeaf: true,
        children: [
          {
            id: 79,
            text: "Reports",
            isLeaf: true,
            children: [
              {
                id: 78,
                text: "Report1",
                isLeaf: true,
              },
              {
                id: 79,
                text: "Report2",
                isLeaf: true,
              },
              {
                id: 80,
                text: "Report3",
                isLeaf: true,
              },
            ],
          },
          {
            id: 81,
            text: "Employee Maint",
            isLeaf: true,
            children: [
              {
                id: 82,
                text: "Reports",
                isLeaf: true,
                children: [
                  {
                    id: 83,
                    text: "Report1",
                    isLeaf: true,
                  },
                  {
                    id: 84,
                    text: "Report2",
                    isLeaf: true,
                  },
                  {
                    id: 85,
                    text: "Report3",
                    isLeaf: true,
                  },
                ],
              },
              {
                id: 86,
                text: "Employee Maint",
                isLeaf: true,
                children: [
                  {
                    id: 87,
                    text: "Reports",
                    isLeaf: true,
                    children: [
                      {
                        id: 88,
                        text: "Report1",
                        isLeaf: true,
                      },
                      {
                        id: 89,
                        text: "Report2",
                        isLeaf: true,
                      },
                      {
                        id: 90,
                        text: "Report3",
                        isLeaf: true,
                      },
                    ],
                  },
                  {
                    id: 91,
                    text: "Employee Maint",
                    isLeaf: true,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 92,
        text: "Human Resources",
        isLeaf: true,
      },
    ],
  },
];
//treeview6
export const treeview6 = [
  {
    id: 93,
    text: "Treeview6",
    children: [
      {
        id: 94,
        text: "Company Maintenance",
        isLeaf: true,
      },
      {
        id: 95,
        text: "Employees",
        isLeaf: true,
        children: [
          {
            id: 96,
            text: "Reports",
            isLeaf: true,
            children: [
              {
                id: 97,
                text: "Report1",
                isLeaf: true,
              },
              {
                id: 98,
                text: "Report2",
                isLeaf: true,
              },
              {
                id: 99,
                text: "Report3",
                isLeaf: true,
              },
            ],
          },
          {
            id: 100,
            text: "Employee Maint",
            isLeaf: true,
            children: [
              {
                id: 101,
                text: "Reports",
                isLeaf: true,
                children: [
                  {
                    id: 102,
                    text: "Report1",
                    isLeaf: true,
                  },
                  {
                    id: 103,
                    text: "Report2",
                    isLeaf: true,
                  },
                  {
                    id: 104,
                    text: "Report3",
                    isLeaf: true,
                  },
                ],
              },
              {
                id: 105,
                text: "Employee Maint",
                isLeaf: true,
                children: [
                  {
                    id: 106,
                    text: "Reports",
                    isLeaf: true,
                    children: [
                      {
                        id: 107,
                        text: "Report1",
                        isLeaf: true,
                      },
                      {
                        id: 108,
                        text: "Report2",
                        isLeaf: true,
                      },
                      {
                        id: 109,
                        text: "Report3",
                        isLeaf: true,
                      },
                    ],
                  },
                  {
                    id: 110,

                    text: "Employee Maint",
                    isLeaf: true,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        text: "Human Resources",
        isLeaf: true,
      },
    ],
  },
];

//** Search data **//
//Tablesearchdata


//** Blog Post **//


//
const AfterComplete4 = () => <span>You are good to go!</span>

// Renderer callback with condition
const rendering4 = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <AfterComplete4 />
  } else {
    // Render a countdown
    return (
      <span>
        <Row className="count-down">
          <Col sm={12} md={12} xl={3} className="col-12">
            <div className="countdown alert-primary">
              <span className="days text-primary ">{days}</span>
              <span className="text-primary">Days</span>
            </div>
          </Col>
          <Col sm={12} md={12} xl={3} className="col-12">
            <div className="countdown alert-success">
              <span className="hours text-success">{hours}</span>
              <span className="text-success">Hours</span>
            </div>
          </Col>

          <Col sm={12} md={12} xl={3} className="col-12">
            <div className="countdown alert-info">
              <span className="minutes text-info">{minutes}</span>
              <span className="text-info">Minutes</span>
            </div>
          </Col>
          <Col sm={12} md={12} xl={3} className="col-12">
            <div className="countdown alert-warning">
              <span className="seconds text-warning">{seconds}</span>
              <span className="text-warning">Seconds</span>
            </div>
          </Col>
        </Row>
      </span>
    )
  }
}

export function DayCounter1() {
  return (<Countdown date={Date.now() + 3088800000} renderer={rendering4} />)
}
//Card design
// fullscreen button

export function FullScreenDialog() {
  const [expanded, setExpanded] = useState(true);
  const [fullScreen, setFullscreen] = useState("true");
  const [show, setShow] = useState(false);

  const fullscreenmodalClose = () => setShow(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [shows, setShows] = useState(true);

  return (
    <div>

      {shows ? <Card>
        <Card.Header>

          <Card.Title>Fullscreen button</Card.Title>
          <div className="card-options">

            <Link to="#" onClick={handleExpandClick}> <i className={`fe ${expanded ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
            <Link to="#" onClick={() => handleShow(true)}><i className="fe fe-maximize"></i>

            </Link>

            <Link to="#" onClick={() => setShows(false)} aria-label="close"><i className="fe fe-x"></i></Link>
            <Modal show={show} fullscreen={fullScreen} onHide={() => setShow(false)}>
              <Modal.Header>
                <Modal.Title>Modal</Modal.Title>
                <span className="d-flex ms-auto pe-4" onClick={fullscreenmodalClose}><i className='fe fe-x ms-auto' ></i></span>
              </Modal.Header>
              <Modal.Body>Modal body content</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={fullscreenmodalClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={fullscreenmodalClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </div>

        </Card.Header>
        <Collapse in={expanded}>
          <Card.Body>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </Card.Body>

        </Collapse>
      </Card> : null}

    </div>
  );
}
// Initial collapsed card

export function InitialCollapsedCard() {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [show, setShow] = useState(true);

  return (
    <div>
      {show ? <Card>
        <Card.Header>
          <Card.Title>Initial collapsed card</Card.Title>
          <div className="card-options">
            <Link to="#" onClick={handleExpandClick}> <i className={`fe ${expanded ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
            <Link to="#" onClick={() => setShow(false)} aria-label="close"><i className="fe fe-x"></i></Link>
          </div>
        </Card.Header>
        <Collapse in={expanded} timeout={3000}>
          <Card.Body>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </Card.Body>
        </Collapse>
      </Card> : null}
    </div>
  );
}

export const Infoalert = () => {
  Swal.fire({
    title: "Alert",
    icon: "info",
    allowOutsideClick: false,
    confirmButtonText: "Exit",
    showCancelButton: "true",
    cancelButtonText: "Stay This page",
    cancelButtonColor: "#6259ca",
    text: "Info alert",
  });
}