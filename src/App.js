import React from 'react';
import PrimarySearchAppBar from './Components/appbar';
import SwipeableTextMobileStepper from './Components/slide';
import ResponsiveFontSizes from './Components/text';

function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar />
      <SwipeableTextMobileStepper />
      <ResponsiveFontSizes />
    </div>
  );
}

export default App;
