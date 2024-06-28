import React, { useState } from 'react';
import Modal from '../atoms/Modal';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import Box from '../atoms/Box';
import Text from '../atoms/Text';

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    title: { control: 'text' },
    primaryButtonText: { control: 'text' },
    secondaryButtonText: { control: 'text' },
    centerButtons: { control: 'boolean' },
  },
};

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => setIsOpen(false);

  return (
    <ThemeProvider theme={theme}>
      {isOpen && <Modal {...args} onClose={handleClose}>
        <Text>This is the content of the modal. You can put any components here.</Text>
      </Modal>}
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: 'SEGUR MI PEDIDO',
  primaryButtonText: 'PRIMARY',
  secondaryButtonText: 'SECONDARY',
  primaryButtonAction: () => alert('Primary Action'),
  secondaryButtonAction: () => alert('Secondary Action'),
  centerButtons: false,
};

export const WithCenteredButtons = Template.bind({});
WithCenteredButtons.args = {
  title: 'SEGUR MI PEDIDO',
  primaryButtonText: 'PRIMARY',
  secondaryButtonText: 'SECONDARY',
  primaryButtonAction: () => alert('Primary Action'),
  secondaryButtonAction: () => alert('Secondary Action'),
  centerButtons: true,
};

