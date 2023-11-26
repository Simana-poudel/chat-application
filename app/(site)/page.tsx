import Image from "next/image";
import { AuthForm } from "./component/AuthForm";

export default function Home() {
  return (
    <div
    className="
    flex
    flex-col
    min-h-full
    justify-center
    py-12
    sm:px-6
    lg:px-8
    bg-gray-100
    "
    >
      <div className=" sm:w-full sm:mx-auto sm:max-w-md">
        <Image 
        alt="Logo"
        height="48"
        width="48"
        src='/images/logo.png'
        className="mx-auto w-auto"
        />

        <h2
        className="
        mt-6
        text-center
        text-3xl
        font-bold
        tracking-tight
        text-gray-900
        "
        >
          Sign in to your account
        </h2>
        <AuthForm />
      </div>
    </div>
  )
}
