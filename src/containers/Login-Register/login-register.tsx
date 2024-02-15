import React, { useState } from 'react';
import {
  Input,
  Stack,
  Link,
  Text,
  Divider,
  VStack,
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import HoverUnderlineButton from '../../components/Buttons/HoverButton';

interface AuthFormProps {
  isLogin: boolean;
  onToggle: () => void;
  onForgotPassword: () => void;
}

const AuthForm: React.FC<AuthFormProps> = ({
  isLogin,
  onToggle,
  onForgotPassword,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [linkhovered, setLinkHovered] = useState(false);
  const [forgotPasswordHovered, setForgotPasswordHovered] = useState(false);


  const handleSubmit = () => {
    // Perform login or registration logic here
  };

  const handleToggle = () => {
    setFormData({
      name: '',
      email: '',
      password: '',
    });
    onToggle();
    setLinkHovered(false);
  };

  return (
    <Stack
      direction="column"
      spacing={4}
      align="center"
      justify="center"
      padding={4}
      border={'2px solid green'}
    >
      <AnimatePresence exitBeforeEnter>
        {isLogin ? (
          <motion.div
            key="login"
            initial={{ opacity: 0, x: '-50%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-50%' }}
            transition={{ duration: 0.4 }}
          >
            <VStack gap={4} align='baseline'>
              <VStack>
                <Input
                  minW='350px'
                  placeholder="Email address"
                  value={formData.email}
                  variant="ghost"
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <Divider />
                <Input
                  minW='350px'
                  placeholder="Password"
                  type="password"
                  variant="ghost"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
              </VStack>
              <Link
                onClick={onForgotPassword}
                onMouseEnter={() => setForgotPasswordHovered(true)}
                onMouseLeave={() => setForgotPasswordHovered(false)}
                style={{ textDecoration: 'none' }}
                color={forgotPasswordHovered ? 'gray.500' : 'gray.700'}
                fontSize='small'
              >
                Forgot your password?
              </Link>
            </VStack>
          </motion.div>
        ) : (
          <motion.div
            key="register"
            initial={{ opacity: 0, x: '50%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '50%' }}
            transition={{ duration: 0.4 }}
          >
            <VStack>

              <Input
                minW='350px'
                placeholder="Name"
                value={formData.name}
                variant="ghost"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <Divider />
              <Input
                minW='350px'
                placeholder="Email address"
                value={formData.email}
                variant="ghost"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <Divider />
              <Input
                minW='350px'
                placeholder="Password"
                type="password"
                variant="ghost"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </VStack>
          </motion.div>
        )}
      </AnimatePresence>
      <HoverUnderlineButton onClick={handleSubmit}>
        {isLogin ? 'Login' : 'Register'}
      </HoverUnderlineButton>
      <Text>
        {isLogin
          ? "Don't have an account? "
          : 'Already have an account? '}
        <Link
          as='b'
          onClick={handleToggle}
          onMouseEnter={() => setLinkHovered(true)}
          onMouseLeave={() => setLinkHovered(false)}
          style={{ textDecoration: 'none' }}
          color={linkhovered ? 'gray.500' : 'gray.700'}
        >
          {isLogin ? 'Register' : 'Login'}
        </Link>
      </Text>
    </Stack >
  );
};

export default AuthForm;
