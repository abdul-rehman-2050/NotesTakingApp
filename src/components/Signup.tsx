// src/components/Signup.js

import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export function Signup() {
  const emailRef = useRef<HTMLInputElement | null>(null)
  const passwordRef = useRef<HTMLInputElement | null>(null)

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault()

    // @TODO: add sign up logic
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input-email">Email</label>
        <input id="input-email" type="email" ref={emailRef} />

        <label htmlFor="input-password">Password</label>
        <input id="input-password" type="password" ref={passwordRef} />

        <br />

        <button type="submit">Sign up</button>
        <p>
        Already have an account? <Link to="/login">Log In</Link>
      </p>
      </form>
    </>
  )
}