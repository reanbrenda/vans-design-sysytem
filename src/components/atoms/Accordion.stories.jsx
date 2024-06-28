import React from 'react';
import Accordion from '../atoms/Accordion';
import AccordionGroup from '../atoms/AccordionGroup';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';

export default {
  title: 'Text/Accordion',
  component: Accordion,
  subcomponents: { AccordionGroup },
  argTypes: {
    title: { control: 'text' },
    children: { control: 'text' },
  },
};

const SingleTemplate = (args) => (
  <ThemeProvider theme={theme}>
    <Accordion {...args} />
  </ThemeProvider>
);

export const SingleAccordion = SingleTemplate.bind({});
SingleAccordion.args = {
  title: 'Trigger',
  children: 'Una vez haya realizado su pedido, puede cancelarlo dentro de un plazo de 30 minutos utilizando el botón "Cancelar pedido" en la opción "Seguir mi pedido" o desde su cuenta a través de la página web. Después de 30 minutos, su pedido no se podrá cancelar, pero si no desea conservar sus artículos una vez entregados, puede devolverlos de forma gratuita.',
};

const GroupTemplate = (args) => (
  <ThemeProvider theme={theme}>
    <AccordionGroup {...args} />
  </ThemeProvider>
);

export const MultipleAccordions = GroupTemplate.bind({});
MultipleAccordions.args = {
  accordions: [
    {
      title: 'Trigger 1',
      content: 'Content for first accordion. Una vez haya realizado su pedido, puede cancelarlo dentro de un plazo de 30 minutos utilizando el botón "Cancelar pedido".',
    },
    {
      title: 'Trigger 2',
      content: 'Content for second accordion. Después de 30 minutos, su pedido no se podrá cancelar.',
    },
    {
      title: 'Trigger 3',
      content: 'Content for third accordion. Puede devolverlos de forma gratuita.',
    },
  ],
  singleOpen: false,
};

export const SingleOpenAccordionGroup = GroupTemplate.bind({});
SingleOpenAccordionGroup.args = {
  accordions: [
    {
      title: 'Trigger 1',
      content: 'Content for first accordion. Una vez haya realizado su pedido, puede cancelarlo dentro de un plazo de 30 minutos utilizando el botón "Cancelar pedido".',
    },
    {
      title: 'Trigger 2',
      content: 'Content for second accordion. Después de 30 minutos, su pedido no se podrá cancelar.',
    },
    {
      title: 'Trigger 3',
      content: 'Content for third accordion. Puede devolverlos de forma gratuita.',
    },
  ],
  singleOpen: true,
};
