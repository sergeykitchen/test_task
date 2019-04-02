import React from 'react';
import './styles.scss';
import Dropdown from '../dropdown/';

const options = [
  {
    label: '6,210 Customers',
    iconClass: 'fas fa-users',
  }, {
    label: '124 New this month',
    iconClass: 'fas fa-user-plus',
  }, {
    label: '97% Retention',
    iconClass: 'fas fa-user-friends',
  }, {
    label: '1:8 sensors to customers',
    iconClass: 'fas fa-user-tag',
  },
];

export default function Header() {
  return (
    <header className="b-header">
      <div className="w-dropdown-container">
        <Dropdown options={options} label="Users" />
        <Dropdown label="Gateways" />
        <Dropdown label="Devices" />
        <Dropdown label="Notifications" />
      </div>
    </header>
  );
};

