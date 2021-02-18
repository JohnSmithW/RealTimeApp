import React, { useState, useRef } from 'react';

export default function ProductTableField({ tableValue, onDoubleClick, onBlur }) {
  const [value, setValue] = useState(tableValue);
  const [isDisabled, setIsDisabled] = useState(true);
  const inputRef = useRef(null);

  return (
    <td
      onDoubleClick={() => {
        setIsDisabled(false);
        inputRef.current.focus();
        onDoubleClick();
      }}
    >
      <input
        ref={inputRef}
        onChange={(event) => {
          setValue(event.target.value);
        }}
        onBlur={() => {
          onBlur(value);
          setIsDisabled(true);
        }}
        type="number"
        value={value}
        disabled={isDisabled}
        className={
          isDisabled
            ? 'product-table-main__data product-table-main__data_number'
            : 'product-table-main__data product-table-main__data_active product-table-main__data_number'
        }
      />
    </td>
  );
}
