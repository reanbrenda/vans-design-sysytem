import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import Flex from '../atoms/Flex';
import Stack from '../atoms/Stack';
import Text from '../atoms/Text';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import StandardCard from '../atoms/StandardCard';

const LoginForm = () => {
  return (
    <ThemeProvider theme={theme}>
      <Flex justifyContent="center" alignItems="center" height="100vh" bg="lightgray">
        <StandardCard  p="lg">
          <Stack spacing="lg">
            <Text as="h1"  textAlign="center">
              Login
            </Text>
            <Flex>
            <Input placeholder="Email" type="email" />
            </Flex>
            <Input placeholder="Password" type="password" />
            <Flex justifyContent="center">
              <Button variant="primary" size="medium">
                Login
              </Button>
            </Flex>
          </Stack>
        </StandardCard>
      </Flex>
    </ThemeProvider>
  );
};

export default LoginForm;





