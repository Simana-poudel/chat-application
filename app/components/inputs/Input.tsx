'use client';
import React from 'react';
import {clsx} from 'clsx';
import {FieldErrors,
        FieldValues,
        UseFormRegister
      } from 'react-hook-form';

interface InputProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>,
  errors: FieldErrors,
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  type,
  required,
  register,
  errors,
  disabled
}) => {
  return (
    <div>
      <label 
      className='
      block
      font-medium
      text-sm
      leading-6
      text-gray-900
      '
      htmlFor='id'
      >
        {label}
      </label>
      <div className='mt-2'>
        <input 
        id={id}
        type={type}
        autoComplete={id}
        disabled={disabled}
        {... register(id, { required })}
        className={clsx(`
        form-input
        block
        w-full
        rounded-md
        border-0
        py-1.5
        text-gray-900
        shadow-sm
        

        `)}
        />
      </div>
    </div>
  )
}

export default Input