import React from 'react';
import Button from 'react-bootstrap/Button';

const SmallButton = ({ children, ...props }) => {
  return (
    <Button
      {...props}
      style={{
        height: '32px',
        fontSize: '14px',
        padding: '4px 12px',
        borderRadius: '6px',
        width: 'auto',
        flex: '1',
        textDecoration: 'none',
        ...props.style, // Allow additional styles passed via props
      }}
    >
      {children}
    </Button>
  );
};

export default SmallButton;
