"use client";
import Button from '@/app/components/Button';
import Input from '@/app/components/inputs/Input';
import {useCallback, useState} from 'react';
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import AuthSocialButton from './AuthSocialButton';
import {BsGithub, BsGoogle} from 'react-icons/bs'

type Variant = "LOGIN" | "REGISTER";

export const AuthForm = () => {

  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

   const toggleVariant = useCallback(
    () => {
      if (variant === 'LOGIN') {
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
          {variant === "REGISTER" && (
            <Input 
            id='name' 
            label='Name' 
            register={register} 
            errors={errors}
            disabled={isLoading}
            />
          )}
          <Input 
            id='email' 
            label='Email Address'
            type='email' 
            register={register} 
            errors={errors}
            disabled={isLoading}
            />
            <Input 
            id='password' 
            label='Password'
            type='password' 
            register={register} 
            errors={errors}
            disabled={isLoading}
            />
            <div>
              <Button 
              disabled={isLoading}
              fullWidth
              type='submit'
              >
                {variant === 'LOGIN' ? 'Sign in' : 'Register' }
              </Button>
            </div>
        </form>
        
        <div className='mt-6'>
          <div className='relative'>
            <div 
            className='
            absolute
            inset-0
            flex
            items-center
            '>
              <div 
              className='
              w-full
              border-t
              border-gray-300
              '/>
              </div>
              <div 
              className="
              relative
              flex
              justify-center
              text-sm
              "
              >
              <span
              className='
              bg-white
              text-gray-500
              px-2
              '>
                Or continue with
              </span>
            </div>
          </div>

          <div className='mt-6 flex gap-2'>
            <AuthSocialButton 
            icon={BsGithub}
            onClick={() => SocialAction('github')}
            />
            <AuthSocialButton 
            icon={BsGoogle}
            onClick={() => SocialAction('google')}
            />
          </div>
        </div>
        <div
        className='
        flex
        mt-6
        gap-2
        justify-center
        px-2
        text-gray-500
        text-sm
        '>
          <div>
          {variant === 'LOGIN' ? "New To Messenger?" : "Already have an account?"}
          </div>
          <div
          onClick={toggleVariant}
          className='underline cursor-pointer'
          >
          {variant === 'LOGIN' ? "Create an account" : "Login"}
            
          </div>
        </div>
      </div>
    </div>
  )
}
