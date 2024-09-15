"use client"
import { useUser } from "@clerk/nextjs"

export default function Welcome() {
    const {user}= useUser()
    return (
        <div>
            <h1>Welcome {user?.firstName}!</h1>
        </div>
    )
}