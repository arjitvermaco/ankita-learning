import Link from 'next/link';

const links : {href: string, label: string}[] = [
    { href: '/client', label: 'client' },
    { href: '/drinks', label: 'drinks' },
    { href: '/prisma-example', label: 'prisma' },
    { href: '/tasks', label: 'tasks' },
];



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
            
            </ul>
          </details>
        </li> */}
      </ul>
    </div>
  </div>
  );
};

export default NavBar;
