'use client'

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const SignUpForm = () => {
    // State variables
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        // Validate if password and confirmPassword match
        if (password !== confirmPassword) {
            alert("Passwords do not match!")
            return
        }

        console.log("Signup successfully with: ", { email, password })
        alert("Thanks for signing up!")
    }

    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Signup</CardTitle>
                <CardDescription>Enter the following details</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Email Input */}
                    <div className="space-y-2">
                        <Input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    {/* Password Input */}
                    <div className="space-y-2">
                        <Input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {/* Confirm Password Input */}
                    <div className="space-y-2">
                        <Input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword} // Correct variable used
                            onChange={(e) => setConfirmPassword(e.target.value)} // Correct variable used
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <Button type="submit" className="w-full">Sign Up</Button>
                </form>
            </CardContent>
        </Card>
    )
}

export default SignUpForm
