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
    </div>
  )
}

export default Input