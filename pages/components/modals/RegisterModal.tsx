import useRegisterModal from '@/hooks/useRegisterModal';
import useLoginModal from '@/hooks/useLoginModal';
import Modal from '../Modal';
import Input from '../Input';
import axios from 'axios';

import { useCallback, useState } from 'react';

const RegisterModal = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loginModal = useLoginModal();

  const registerModal = useRegisterModal();

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      //Creating account
      await axios.post('api/register', { email, password, username });
      registerModal.onClose();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [registerModal, email, password, username]);

  const onToggle = useCallback(() => {
    if (isLoading) {
      return;
    }

    registerModal.onClose();
    loginModal.onOpen();
  }, [isLoading, registerModal, loginModal]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        placeholder="Email"
        disabled={isLoading}
        value={email}
        onChange={(event) => setEmail(event?.target.value)}
      />
      <Input
        placeholder="Username"
        disabled={isLoading}
        value={username}
        onChange={(event) => setUsername(event?.target.value)}
      />
      <Input
        placeholder="Password"
        disabled={isLoading}
        value={password}
        onChange={(event) => setPassword(event?.target.value)}
      />
    </div>
  );

  const footerContent = (
    <div className="text-neutral-400 text-center mt-4">
      <p>
        Already have an account?{' '}
        <span
          onClick={onToggle}
          className="text-gray-100 cursor-pointer hover:underline"
        >
          {' '}
          Sign in
        </span>
      </p>
    </div>
  );

  return (
    <Modal
      isOpen={registerModal.isOpen}
      title="Create an account"
      body={bodyContent}
      actionLabel="Login"
      onSubmit={onSubmit}
      onClose={registerModal.onClose}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
