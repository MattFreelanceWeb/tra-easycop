
import WebcamCapture from '@/components/realTimePose/WebcamCapture'
import React from 'react'

type Props = {}

function playground({}: Props) {
  return (
    <main className=" h-screen w-screen flex items-center justify-center relative ">
        <WebcamCapture/>
    </main>
  )
}

export default playground