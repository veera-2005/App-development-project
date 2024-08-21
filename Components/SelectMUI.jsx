// src/Components/SelectMUI.js
import React from 'react';
import { MenuItem, Select } from '@mui/material';

function SelectMUI({ dat, func, attribute }) {
  const handleChange = (event) => {
    func(event.target.value);
  };

  // Example options, adjust as needed
  const options = attribute === "Month"
    ? Array.from({ length: 12 }, (_, i) => i + 1)
    : Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i);

  return (
    <Select value={dat} onChange={handleChange} fullWidth>
      <MenuItem value="">{`Select ${attribute}`}</MenuItem>
      {options.map((item) => (
        <MenuItem key={item} value={item}>{item}</MenuItem>
      ))}
    </Select>
  );
}

export default SelectMUI;
