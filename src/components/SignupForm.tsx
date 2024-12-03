'use client'

import { useState } from "react"
import {Input} from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"

const SignUpForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleSubmit = (e: React.FormEvent) =>{
        e.preventDefault()
        console.log("Sigup successfully with: ", {email, password})
    
    }

    return(
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Signup</CardTitle>
                <CardDescription>Enter the ask  following datails</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit = {handleSubmit} className="sapce-y-4">
                    <div className="space-y-2">
                        <Input
                         type="email" 
                         placeholder="Email"
                         value={email} 
                         onChange={(e)=>setEmail(e.target.value)}
                         required
                         />
                    </div>
                    <div className="space-y-2">
                        <Input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        required 
                        />

                    </div>
                    <div className="space-y-2">
                        <Input
                        type="password"
                        placeholder="Confirm Password"
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        required 
                        />

                    </div>

                    <Button type="submit" className="w-full" onClick={()=>alert("Thanks for sigup")} >Login</Button>

                </form>
            </CardContent>
        </Card>
    )
}
export default SignUpForm



