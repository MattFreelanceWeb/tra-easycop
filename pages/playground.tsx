import TricksToNumeric from '@/components/trickstonumeric/TricksToNumeric'
import React from 'react'

type Props = {}

function playground({}: Props) {
  return (
    <main className=" h-screen w-screen flex items-center justify-center relative ">
        <TricksToNumeric/>
    </main>
  )
}

export default playground