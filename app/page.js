import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className=' flex items-center justify-center min-h-screen'>


<Link href={`/pages`}  className='relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group'>


   


<button className='px-3 py-2 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full text-white'>
  Go to products
</button>
      


    </Link>



    </div>
  )
}

export default page