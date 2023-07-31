import { useRouter } from 'next/navigation';
import { FaFeather } from 'react-icons/fa';
import useLoginModal from '@/hooks/useLoginModal';

const SidebarTweetButton = () => {
  const loginModal = useLoginModal();

  const router = useRouter();

  return (
    <div onClick={() => router.push('/')}>
      <div className="mt-6 lg:hidden rounded-full h-14 w-14 p-4 flex items-center justify-center bg-sky-500 hover:bg-opacity-80 transition cursor-pointer">
        <FaFeather className="text-gray-100 w-10" />
      </div>
      <div
        onClick={loginModal.onOpen}
        className="mt-6 hidden lg:flex rounded-full py-2 p-4 items-center justify-center bg-sky-500 hover:bg-opacity-80 transition cursor-pointer"
      >
        <p className="hidden lg:block text-center font-semibold text-white text-[20px]">
          Tweet
        </p>
      </div>
    </div>
  );
};

export default SidebarTweetButton;
