"use client"
import { useUser } from "@clerk/nextjs"

export default function Welcome() {
    const {user}= useUser()
    return (
        <div>
            <h1>Welcome Dr. {user?.lastName}!</h1>
        </div>
    )
}
