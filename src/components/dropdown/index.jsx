import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownItem from './dropdownItem';
import './styles.scss';

export default function customDropdown({ label, options }) {
  return (
    <Dropdown className="header-dropdown">
      <Dropdown.Toggle id="dropdown-custom-1">{label}</Dropdown.Toggle>
      {
        options &&
        <Dropdown.Menu>
          {options.map((item, index) => {
            return <DropdownItem label={item.label} iconClass={item.iconClass} key={index} eventKey={index} />
          })}
        </Dropdown.Menu>
      }
    </Dropdown>
  );
};
