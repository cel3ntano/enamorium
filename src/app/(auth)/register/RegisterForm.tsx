'use client';

import { Card, CardBody, CardHeader } from '@heroui/card';
import { Input } from '@heroui/input';
import { Button } from '@heroui/button';
import React from 'react';
import { GiPadlock } from 'react-icons/gi';
import { useForm } from 'react-hook-form';
import { registerSchema, RegisterSchema } from '@/lib/schemas/registerSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerUser } from '@/app/actions/authActions';

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid, isSubmitting },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    mode: 'onTouched',
  });

  const onSubmit = async (data: RegisterSchema) => {
    const result = await registerUser(data);
    if (result.status === 'success') {
      console.log('User registered successfully');
    } else {
      if (Array.isArray(result.error)) {
        result.error.forEach((error) => {
          const fieldName = error.path.join('.');
          setError(fieldName, { message: error.message });
        });
      } else {
        setError('root.serverError', { message: result.error });
      }
    }
  };

  return (
    <Card className='w-2/5 mx-auto'>
      <CardHeader className='flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center gap-2'>
          <div className='flex flex-row items-center gap-3 text-secondary'>
            <GiPadlock size={30} />
            <h1 className='text-3xl font-semibold'>Register</h1>
          </div>
          <p className='text-neutral-500'>Welcome to Enamorium</p>
        </div>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='space-y-4'>
            <Input
              defaultValue=''
              label='Name'
              variant='bordered'
              {...register('name')}
              isInvalid={!!errors.name}
              errorMessage={errors.name?.message}
            />
            <Input
              defaultValue=''
              label='Email'
              variant='bordered'
              {...register('email')}
              isInvalid={!!errors.email}
              errorMessage={errors.email?.message}
            />
            <Input
              defaultValue=''
              label='Password'
              variant='bordered'
              type='pasword'
              {...register('password')}
              isInvalid={!!errors.password}
              errorMessage={errors.password?.message}
            />
            {errors.root?.serverError && (
              <p className='text-danger text-sm'>
                {errors.root?.serverError.message}
              </p>
            )}
            <Button
              isLoading={isSubmitting}
              isDisabled={!isValid}
              fullWidth
              color='secondary'
              type='submit'
            >
              Register
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
}
