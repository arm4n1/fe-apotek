import { Button, Input, Spinner } from '@heroui/react';
import { Card, CardBody } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import useRegister from './useRegister';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import { Controller } from 'react-hook-form';

const Register = () => {
  const {
    visiblePassword,
    handleVisiblePassword,
    control,
    handleSubmit,
    handleRegister,
    isPendingRegister,
    errors,
  } = useRegister();

  return (
    <div className="flex w-full flex-col items-center justify-center gap-10 lg:flex-row lg:gap-20">
      <div className="flex w-full flex-col items-center justify-center gap-10 lg:w-1/3">
        <Image
          src="/images/general/logo_apotek.png"
          alt="logo"
          className="h-auto w-full max-w-[250px] object-contain md:max-w-[350px] lg:max-w-[500px] xl:max-w-[600px] 2xl:max-w-[700px]"
          width={625}
          height={234}
          priority
        />
        <Image
          src="/images/ilustration/register.png"
          alt="ilustration"
          className="h-1/3 w-full max-w-[350px] object-contain md:max-w-[450px] lg:max-w-[450px] xl:max-w-[700px] 2xl:max-w-[800px]"
          width={500}
          height={500}
          priority
        />
      </div>
      <Card>
        <CardBody className="p-8">
          <h2 className="text-xl font-bold text-cyan-800"> Create Account</h2>
          <p className="mb-4 text-small">
            {' '}
            Have an account?&nbsp;
            <Link href="/auth/login" className="font-semibold text-yellow-400">
              Login here
            </Link>
          </p>

          <form className="flex w-80 flex-col gap-4" onSubmit={handleSubmit(handleRegister)}>
            <Controller
              name="fullName"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="text"
                  label="Fullname"
                  variant="bordered"
                  autoComplete="off"
                  isInvalid={errors.fullName !== undefined}
                  errorMessage={errors.fullName?.message}
                />
              )}
            />

            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="text"
                  label="Username"
                  variant="bordered"
                  autoComplete="off"
                  isInvalid={errors.username !== undefined}
                  errorMessage={errors.username?.message}
                />
              )}
            />

            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="email"
                  label="Email"
                  variant="bordered"
                  autoComplete="off"
                  isInvalid={errors.email !== undefined}
                  errorMessage={errors.email?.message}
                />
              )}
            />

            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type={visiblePassword.password ? 'text' : 'password'}
                  label="Password"
                  variant="bordered"
                  autoComplete="off"
                  isInvalid={errors.password !== undefined}
                  errorMessage={errors.password?.message}
                  endContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={() => handleVisiblePassword('password')}
                    >
                      {visiblePassword.password ? (
                        <FaEye className="pointer-events-none text-xl text-default-400" />
                      ) : (
                        <FaEyeSlash className="pointer-events-none text-xl text-default-400" />
                      )}
                    </button>
                  }
                />
              )}
            />

            <Controller
              name="confirmPassword"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type={visiblePassword.confirmPassword ? 'text' : 'password'}
                  label="Password Confirmation"
                  variant="bordered"
                  autoComplete="off"
                  isInvalid={errors.confirmPassword !== undefined}
                  errorMessage={errors.confirmPassword?.message}
                  endContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={() => handleVisiblePassword('confirmPassword')}
                    >
                      {visiblePassword.confirmPassword ? (
                        <FaEye className="pointer-events-none text-xl text-default-400" />
                      ) : (
                        <FaEyeSlash className="pointer-events-none text-xl text-default-400" />
                      )}
                    </button>
                  }
                />
              )}
            />

            <Button className="bg-blue-900 text-white hover:bg-blue-800" size="lg" type="submit">
              {isPendingRegister ? <Spinner color="white" size="sm" /> : 'Register'}
            </Button>

            <Button
              className="flex items-center justify-center gap-2 rounded-full border border-gray-300 p-2 hover:bg-gray-100"
              size="lg"
              type="button"
              // onClick={() => signIn("google")}
            >
              <FcGoogle className="text-2xl" />
              sign in with google account
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default Register;
