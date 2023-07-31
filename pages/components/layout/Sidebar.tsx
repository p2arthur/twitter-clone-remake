import { BsHouseFill, BsBellFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi';

import { IconType } from 'react-icons';

import SidebarLogo from './SidebarLogo';
import SidebarItem from './SidebarItem';
import SidebarTweetButton from './SidebarTweetButton';

interface SidebarPropsInterface {}

export interface SidebarItemInterface {
  label: string;
  href?: string;
  icon: IconType;
  onClick?: () => void;
}

const Sidebar = ({}: SidebarPropsInterface) => {
  const sidebarItemsList: SidebarItemInterface[] = [
    { label: 'Home', href: '/', icon: BsHouseFill },
    { label: 'Notification', href: '/notifications', icon: BsBellFill },
    { label: 'Profile', href: '/users/123', icon: FaUser },
  ];

  const sidebarItemsListRenderer = () => {
    return (
      <ul>
        {sidebarItemsList.map((sidebarItem) => (
          <SidebarItem
            key={sidebarItem.href}
            label={sidebarItem.label}
            href={sidebarItem.href}
            icon={sidebarItem.icon}
          />
        ))}
      </ul>
    );
  };

  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end justify-center">
        <div className="space-y-2 lg:w-[230px]">
          <SidebarLogo />
          {sidebarItemsListRenderer()}
          <SidebarItem onClick={() => {}} icon={BiLogOut} label="Logout" />
          <SidebarTweetButton />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
