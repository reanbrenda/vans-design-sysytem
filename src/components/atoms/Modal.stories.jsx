import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import Modal from '../atoms/Modal';

export default {
  title: 'Components/Modal',
  component: Modal,
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <Modal {...args}>
      <p>
        Una vez haya realizado su pedido, puede cancelarlo dentro de un plazo de 30 minutos utilizando el botón "Cancelar pedido" en la opción "Seguir mi pedido" o desde su cuenta a través de la página web. Después de 30 minutos, su pedido ya no se podrá cancelar, pero si no desea conservar sus artículos una vez entregados, puede devolverlos de forma gratuita.
      </p>
    </Modal>
  </ThemeProvider>
);

export const StackedButtons = Template.bind({});
StackedButtons.args = {
  title: 'Seguir Mi Pedido',
  primaryButtonText: 'Primary',
  secondaryButtonText: 'Secondary',
  primaryButtonAction: () => alert('Primary Button Clicked'),
  secondaryButtonAction: () => alert('Secondary Button Clicked'),
  centerContent: false,
};

export const CenteredContent = Template.bind({});
CenteredContent.args = {
  title: 'Seguir Mi Pedido',
  primaryButtonText: 'Primary',
  secondaryButtonText: 'Secondary',
  primaryButtonAction: () => alert('Primary Button Clicked'),
  secondaryButtonAction: () => alert('Secondary Button Clicked'),
  centerContent: true,
};
