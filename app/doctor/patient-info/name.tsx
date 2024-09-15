"use client"
import { useUser } from "@clerk/nextjs"

export default function FullName() {
    const {user}= useUser()
    return (
        <h1 style={{ fontSize: 40, paddingLeft: 20 }}>{user?.fullName}</h1>

    )
}