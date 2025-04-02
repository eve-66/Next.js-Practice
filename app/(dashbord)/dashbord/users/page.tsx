import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div>
      <h1> Dashbord Users</h1>

      <ul className="mt-10">
        <li><Link href="/dashbord/users/1">User 1</Link></li>
        <li><Link href="/dashbord/users/2">User 2</Link></li>
        <li><Link href="/dashbord/users/3">User 3</Link></li>
        <li><Link href="/dashbord/users/4">User 4</Link></li>
      </ul>
    </div>
  )
}

export default page