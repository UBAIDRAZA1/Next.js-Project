'use client'

import LoginForm from "@/components/LoginForm"
import SignUpForm from "@/components/SignupForm"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function User() {
    const [isLogin, setIsLogin] = useState(true)

    return (
        <div className="min-h-screen flex flex-col justify-center items-center content-center bg-black">
            <div className="mb-4">
                <Button 
                    className="text-sm text-white" // Add `text-white` here
                    onClick={() => setIsLogin(!isLogin)} // Fix the parameter name here
                    variant={"ghost"}
                >
                    {isLogin ? 'Need an account: Create' : 'Login with your current account'}
                </Button>
            </div>
            {isLogin ? <LoginForm /> : <SignUpForm />}
        </div>
    )
}
