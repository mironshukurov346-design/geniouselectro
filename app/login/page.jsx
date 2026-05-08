'use client'

import Footer from '@/components/Footer'
import Register from '@/components/Login/Register'
import SignIn from '@/components/Login/SignIn'
import Navbar from '@/components/Navbar'
import React, { useState } from 'react'

export default function LoginPage() {


  return (
  <div>
     <Navbar />
     <SignIn />
     <Register />
     <Footer />
  </div>
  )
}
