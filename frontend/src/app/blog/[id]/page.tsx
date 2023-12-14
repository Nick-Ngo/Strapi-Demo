import Link from 'next/link'
import React from 'react'

export const page = () => {
  return (
    <div className='max-w-3xl mx-auto p-4'>
      <Link href="/">{"< Black"}</Link>
      <div className="mt-4">
        <h1 className="text-w-3xl font-semibold">
          {"This is the title Blog"}
        </h1>
        <p className='text-grey-600 mt-2'>
          {"This is the Desc"}
        </p>
        <div className='text-sm'>
          Publish on
        </div>
      </div>
    </div>
  )
}

export default page;