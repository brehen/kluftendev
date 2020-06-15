import React from 'react';

const Icon = props => {
  return (
    <div
      className={
        'shadow-med cursor-pointer p-1 rounded-full bg-branddark flex justify-center items-center text-white ' +
        props.className
      }
    >
      {props.children}
    </div>
  );
};

export default Icon;
