import React from 'react';
import './css/radio.css';

const Radio = () => {
  return (
    <div>
      <div class="switch-field">
        <input type="radio" id="radio-one" name="switch-one" value="yes" checked/>
        <label for="radio-one">A2</label>
        <input type="radio" id="radio-two" name="switch-one" value="no" />
        <label for="radio-two">MIX</label>
      </div>
    </div>
  );
};

export default Radio;