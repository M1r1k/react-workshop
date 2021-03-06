import React from 'react';

export function TextInput({value, placeholder, onChange, id}) {
  return (
    <input
      type='text'
      value={value}
      placeholder={placeholder}
      onChange={(e) => {onChange(e.target.value, id);}}
    />
  );
}

export function Radio({value, options, placeholder, onChange, id}) {
  return (
    <div>
      {
        options.map((option, i) => {
          return (
            <input
              key={i}
              value={option}
              type='radio'
              checked={(option === value)}
              onChange={(e) => {onChange(e.target.value, id);}}
            />
          );
        })
      }
    </div>
  );
}
