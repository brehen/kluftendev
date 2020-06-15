import React from 'react';
import { CTAButton } from './CTAButton';

const CTAGroup = () => {
  return (
    <div className="flex flex-col items-center mt-4">
      <p className="text-xxs">I also run a blog:</p>
      <CTAButton
        id="fancy-button"
        text="Check it out >"
        class="bg-accent text-white px-2 py-1 shadow-med fancy-button text-xxs"
      ></CTAButton>
    </div>
  );
};

export default CTAGroup;
