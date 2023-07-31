import useLoginModal from '@/hooks/useLoginModal';
import useRegisterModal from '@/hooks/useRegisterModal';
import { useCallback, useState } from 'react';
import Input from '../Input';
import Modal from '../Modal';

export const LoginModal = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      //TODO ADD LOG IN

      loginModal.onClose();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [loginModal]);

  const onToggle = useCallback(() => {
    if (isLoading) {
      return;
    }

    loginModal.onClose();
    registerModal.onOpen();
  }, [isLoading, loginModal, registerModal]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        placeholder="Email"
        disabled={isLoading}
        value={email}
        onChange={(event) => setEmail(event?.target.value)}
      />
      <Input
        placeholder="Password"
        disabled={isLoading}
        value={password}
        onChange={(event) => setPassword(event?.target.value)}
        type="password"
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
      isOpen={loginModal.isOpen}
      title="Login"
      body={bodyContent}
      actionLabel="Sign in"
      onSubmit={onSubmit}
      onClose={loginModal.onClose}
      footer={footerContent}
    />
  );
};
