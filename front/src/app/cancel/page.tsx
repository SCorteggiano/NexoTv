import React from 'react'
import Link from 'next/link'
import { Button } from 'flowbite-react'

const Cancel = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-16 ">
      <h1 className="text-4xl font-bold text-red-500">Payment Cancelled</h1>
      <p className="mt-4 text-lg">
        It seems you cancelled the payment!
      </p>
      <p className="mt-4 text-lg pb-4">
       You can try again or contact our support.
      </p>
      <Button
        pill
        as={Link}
        href="/pricings"
        className="bg-violet hover:bg-darkviolet mr-3 px-6 py-1 "
      >
        Go back to Pricings
      </Button>
    </div>
  )
}

export default Cancel;