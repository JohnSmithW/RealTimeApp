import React, { useState } from 'react';

export default function ProductTableField({ tableValue, onBlur }) {
  const [value, setValue] = useState(tableValue);
  const [isDisabled, setIsDisabled] = useState(true);

  return (
    <td
      onDoubleClick={() => {
        setIsDisabled(false);
      }}
    >
      <input
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
        className="product-table-main__data product-table-main__data_number"
      />
    </td>
  );
}
