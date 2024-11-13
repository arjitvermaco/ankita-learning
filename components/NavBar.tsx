// 'use client'
import Link from 'next/link';
import { createClient } from '@/utils/supabase/supabaseServer'
import { redirect } from 'next/navigation';

const links : {href: string, label: string}[] = [
    { href: '/client', label: 'client' },
    { href: '/drinks', label: 'drinks' },
    { href: '/prisma-example', label: 'prisma' },
    { href: '/tasks', label: 'tasks' },
];

const userInfo = await getUserMetadata()
console.log(userInfo)
//get user metadata from supabase
async function getUserMetadata() {
  const supabase = await createClient()
  const { data: { user }, error } = await supabase.auth.getUser()
  return user
}

async function logout() {
  'use server'
  const supabase = await createClient()
  const { error } = await supabase.auth.signOut()
  if (error) {
    redirect('/error')
  }
  redirect('/login')
}

const NavBar = () => {

  return (
    <div className="navbar bg-base-100">
    <div className="flex-1">
      <a className="btn btn-ghost text-xl">daisyUI</a>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        {/* <li><a>Link</a></li> */}
        {links.map((link) => {
              return (
                <li key={link.href}>
                  <Link href={link.href} className='capitalize'>
                    {link.label}
                  </Link>
                </li>
              );
            })}
        
        {/* <li>

          <details>
            <summary>Parent</summary>
            <ul className="bg-base-100 rounded-t-none p-2">
            
            </ul>`
          </details>
        </li> */}
        {userInfo && <li onClick={logout}>Logout</li>}
        {userInfo?.user_metadata.display_name}
       {/* <li onClick={logout}>Logout</li> */}
      </ul>
    </div>
  </div>
  );
};

export default NavBar;
