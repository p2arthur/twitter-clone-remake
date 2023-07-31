import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { BiArrowBack } from 'react-icons/bi';

interface HeaderPropsInterface {
  label: string;
  showBackArrow?: boolean;
}

const Header: React.FC<HeaderPropsInterface> = ({ label, showBackArrow }) => {
  const router = useRouter();

  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <div className="border-b-[1px] border-neutral-800 p-5">
      <div className="flex flex-row items-center gap-2">
        {showBackArrow && (
          <BiArrowBack
            onClick={handleBack}
            className="w-12 text-gray-100 cursor-pointer hover:opacity-70 transition"
          />
        )}
        <h2 className="text-gray-100 text-xl font-semibold">{label}</h2>
      </div>
    </div>
  );
};

export default Header;
