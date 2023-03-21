
import React, { useState } from 'react';
import ReactSwitch from 'react-switch';
import './ToggleSwitch.css';

function ToggleSwitch() {
  const [checked, setChecked] = useState(true);

  const handleChange = val => {
    setChecked(val)
  }

  return (
    <div className="toggle" >
    <p>Part Time</p>
      <ReactSwitch
        checked={checked}
        onChange={handleChange}
        onHandleColor="#00756a"
        handleDiameter={30}
        uncheckedIcon={true}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        height={20}
        width={48}
      />
      <p>Full Time</p>
    </div>
  );
}

export default ToggleSwitch;