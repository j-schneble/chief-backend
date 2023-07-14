import { MouseEvent, useEffect, useState } from "react";
import {useSession, signOut} from 'next-auth/react'
import Image from 'next/image';

const menu = [
 
  {
    name: "Settings ",
    icon: "",
  },
  {
    name: "Logout",
    icon: "",
    onClick:{handleSignOut}
  },
];


function handleSignOut(){
    signOut()
  }
const MenuButton = ({ icon, name ,  }: { icon: string; name: string }) => (
  <button onClick={handleSignOut} className="menu-button">
    <span className="material-symbols-outlined">{icon}</span>
    <span className=" menu-button-text">{name}</span>
  </button>
);

export const DropdownButton1 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", closeDropdown);
    return () => document.body.removeEventListener("click", closeDropdown);
  }, []);

  return (
    <div className="dropdown">
      <div className={`menu ${isOpen ? "open" : " "}`}>
        {menu.map((menuItem) => (
          <MenuButton 
            key={menuItem.name}
            icon={menuItem.icon}
            name={menuItem.name}
            
          />
        ))}
      </div>
      <button onClick={handleClick}>
        
      
        <span className="pl-4 ml-2 font-semibold text-md">
          {isOpen ? "▲" : "▼"}
        </span>
      </button>
    </div>
  );
};

<button onClick={handleSignOut} className='px-10 py-1 mt-5 text-gray-700 rounded-sm bg-amber-500'>
Sign Out
</button>