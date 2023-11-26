"use client";
import Input from '@/app/components/inputs/input';
import {useCallback, useState} from 'react';
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';

type Variant = "LOGIN" | "REGISTER";

export const AuthForm = () => {

  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

   const toggleVariant = useCallback(
    () => {
      if (variant == 'LOGIN') {
        setVariant("REGISTER");
      }
      else {
        setVariant("LOGIN");
      }
    },
    [],
  );
  
  const {
    register,
    handleSubmit,
    formState:{
      errors
    }
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === 'REGISTER') {
      //axios register
    }

    if (variant === 'LOGIN') {
      //NextAuth SignIn
    }
  }

  const SocialAction = (action: string) => {
    setIsLoading(true);

    //NextAuth Social Sign In
  }

  return (
    <div
    className='
    mt-8
    sm:mx-auto
    sm:w-full
    sm:max-w-md 
    '
    >
      <div
      className='
      bg-white
      px-4
      py-8
      shadow
      sm:px-10
      sm:rounded-lg
      '
      >
        <form 
        className='space-y-6'
        onSubmit={handleSubmit(onSubmit)} //handleSubmit will pass the data to onSubmt
        >
          <Input label='email'/>
        </form>

      </div>
    </div>
  )
}
