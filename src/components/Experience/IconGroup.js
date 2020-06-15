import React from 'react';

const IconGroup = props => (
  <div
    className={'flex flex-col items-center justify-center ' + props.className}
  >
    {props.children}
    <p className="text-xxs mt-2"> {props.text}</p>
  </div>
);

export default IconGroup;
