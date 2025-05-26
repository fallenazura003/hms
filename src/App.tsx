import React from 'react';
import logo from './logo.svg';
import './App.css';
import '@mantine/core/styles.css'
import {Button, createTheme, MantineProvider} from '@mantine/core';
import AppRoutes from "./Routes/AppRoutes";
const theme = createTheme({
  focusRing:"never",
  fontFamily:"Metal Mania, sans-serif",
  headings:{fontFamily:"Metal Mania, sans-serif"},
  colors: {
    primary: ['#7AD1DD', '#5FCCDB', '#44CADC', '#2AC9DE', '#1AC2D9', '#11B7CD', '#09ADC3', '#0E99AC', '#128797', '#147885'],
    neutral: ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'],
  },
  primaryColor:'primary',
  primaryShade:4,
  defaultGradient:{
    from:"primary.4",
    to:"primary.8",
    deg:132
  }
})

function App() {
  return (
      <MantineProvider theme={theme}>
       <AppRoutes/>
      </MantineProvider>

  );
}

export default App;
