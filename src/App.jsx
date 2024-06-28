// src/App.jsx
import React from 'react';
import Button from '../src/components/atoms/Button';
import Box from '../src/components/atoms/Box';
import Text from '../src/components/atoms/Text';


function App() {
  return (
    <div>
 
        <Text variant="h1">Vans Design System</Text>
        <Text variant="p">This is a sample application using the Vans Design System.</Text>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="tertiary">Tertiary</Button>
          <Button variant="disabled" disabled>Disabled</Button>
          <Button variant="hover">Hover</Button>
          <Button variant="newsletter">Newsletter</Button>
        
  
    </div>
  );
}

export default App;

