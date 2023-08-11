import React, { useState } from 'react';
import { DropdownLink, DropdownMenu, DropdownMenuItem } from './NavbarElements';

function Dropdown({ items }) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <DropdownMenu onClick={handleClick} className={click ? 'clicked' : ''}>
      {items.map((item, index) => (
        <DropdownMenuItem key={index}>
          <DropdownLink className={item.cName} to={item.path} onClick={() => setClick(false)}>
            {item.title}
          </DropdownLink>
        </DropdownMenuItem>
      ))}
    </DropdownMenu>
  );
}

export default Dropdown;
