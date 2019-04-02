import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

export default function DropdownItem({label, eventKey, iconClass}) {
  return (
    <Dropdown.Item eventKey={eventKey}>
      <i className={`icon ${iconClass}`}></i>
      {label}
    </Dropdown.Item>
  );
};

