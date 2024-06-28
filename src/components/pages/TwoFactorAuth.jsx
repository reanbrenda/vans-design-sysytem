import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import Flex from '../atoms/Flex';
import Stack from '../atoms/Stack';
import Text from '../atoms/Text';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import StandardCard from '../atoms/StandardCard';

const TwoFactorAuth = () => {
  return (
    <ThemeProvider theme={theme}>
      <Flex justifyContent="center" alignItems="center" height="100vh" bg="lightgray">
        <StandardCard width="400px" p="lg">
          <Stack spacing="lg">
            <Text as="p" textAlign="center">
              Enter the code sent to your email.
            </Text>
            <Flex justifyContent="center">
            <Input placeholder="Authentication Code" type="text" />
            </Flex>
            <Flex justifyContent="center">
              <Button variant="primary" size="small">
                Verify
              </Button>
            </Flex>
          </Stack>
        </StandardCard>
      </Flex>
    </ThemeProvider>
  );
};

export default TwoFactorAuth;

