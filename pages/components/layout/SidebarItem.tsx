import { SidebarItemInterface } from './Sidebar';

const SidebarItem: React.FC<SidebarItemInterface> = ({
  label,
  href,
  icon: Icon,
  onClick,
}) => {
  return (
    <div className="flex items-center">
      <div className="relative rounded-full h-14 w-14 flex items-center justify-center hover:bg-opacity-100 cursor-pointer lg:hidden">
        <Icon className="h-5 text-white" />
      </div>
      <div
        className="relative hidden lg:flex items-center gap-4 p-4 rounded-full hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer
    "
      >
        <Icon className="h-5 text-white" />
        <p className="hidden lg:block text-xl text-gray-100">{label}</p>
      </div>
    </div>
  );
};

export default SidebarItem;
