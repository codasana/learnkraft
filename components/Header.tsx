import Link from 'next/link'
import { useState } from "react";
import { Fragment, useEffect } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { useRouter } from 'next/router'
import { BellIcon, MenuIcon, XIcon, ChevronDownIcon } from '@heroicons/react/outline'
import { UserCircleIcon} from '@heroicons/react/solid'

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Services', href: '/services', current: false },
  { name: 'Blog', href: '/blog', current: false },
  { name: 'Contact', href: '/contact', current: false },
]

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

return (
  <header className="bg-zinc-100">
    <div className="container mx-auto max-w-7xl flex justify-between items-center py-6 px-6">
    {/* Logo and Menu Links */}
    <div className="flex items-center justify-between w-full">
      <Link className="mr-12 " href="/">
        <img className="h-8 w-auto" src="/images/lk-logo.png" alt="Logo" />
      </Link>
      <nav className="hidden md:flex justify-center space-x-8">
        <Link href="/" className="text-gray-600 hover:text-gray-800 font-normal text-[15px]">Home</Link>
        <Link href="/services" className="text-gray-600 hover:text-gray-800 font-normal text-[15px]">Services</Link>
        <Link href="/blog" className="text-gray-600 hover:text-gray-800 font-normal text-[15px]">Blog</Link>
        <a className="text-gray-600 hover:text-gray-800 font-normal text-[15px]" href="https://modernsoftware.substack.com/" target="__blank">Newsletter</a>
        <Link href="/contact" className="text-gray-600 hover:text-gray-800 font-normal text-[15px]">Contact Us</Link>
      </nav>
    </div>

    <div className="flex md:hidden">
      <button type="button" className="-m-2.5 p-2.5 text-gray-700 " onClick={() => setMobileMenu(true)}>
        <span className="sr-only">Open sidebar</span>
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>
    </div>
    {/* Mobile Menu */}
    <div className={`rw-mobilenav-container ${mobileMenu === true ? 'open' : ''}`}>
      <div className="rw-container flex flex-col h-full">
        <div className="flex justify-between items-center">
          <div>
            <Link className="" href="/">
                <img className="h-8 w-auto" src="images/lk-logo.png" alt="Logo" />
              </Link>
          </div>
          <div className="cursor-pointer" onClick={() => setMobileMenu(false)}>
            <svg width={34} height={34} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.9964 33C8.17554 33 1.00002 25.8229 1.00002 17C1.00002 8.17709 8.17614 1 16.997 1C25.8178 1 32.9933 8.17703 32.9933 17C32.9933 25.8228 25.8172 33 16.9964 33Z" fill="black" />
              <path d="M22.2837 11.6567L11.1537 22.7867" stroke="white" /><path d="M22.1918 22.6948L11.0619 11.5649" stroke="white" />
            </svg>
          </div>
        </div>
        <div className="mt-8">
          <Link className="rw-mobilenav-item block" href="/services">Services</Link>
          <Link className="rw-mobilenav-item block" href="/blog">Blog</Link>
          <a className="rw-mobilenav-item block" href="https://modernsoftware.substack.com/" target="__blank">Newsletter</a>
          <Link className="rw-mobilenav-item block" href="/contact">Contact</Link>
        </div>
        {/*<div className="font-display my-8 text-xl">
          <Link href="/signin" className="rw-btn outlined inverted border">Member Login</Link>
        </div>*/}
        
        {/*<div className="flex justify-between font-display mt-auto pt-4 border-t border-black">
          <div><a href="https://www.youtube.com/runwayml" target="_blank">Youtube</a></div>
          <div><a href="https://twitter.com/runwayml" target="_blank">Twitter</a></div>
          <div><a href="http://discord.gg/invite/runwayml" target="_blank">Discord</a></div>
        </div>*/}
      </div>
    </div>
  </header>
)
}



/*import { Fragment, useEffect } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon, ChevronDownIcon } from '@heroicons/react/outline'
import { UserCircleIcon} from '@heroicons/react/solid'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router'
import { server } from '../config';



export default function Header() {

  const router = useRouter()


  return (
    <div id="header"> 
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="bg-blue-100">
            <div className="relative flex items-center justify-between h-20 mx-auto px-2 sm:px-6 lg:px-8 max-w-screen-xl ">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center space-between mr-8">
                <a href="/" className="grow">
                <div className="flex cursor-pointer grow">
                  
                  <img
                    className="block lg:hidden h-9 w-auto ml-12"
                    src="/images/lk-logo-square.png"
                    alt="Learn Kraft Logo"
                  />
                  <img src="/images/lk-logo.png" width="215" height="50" className="hidden lg:block h-9 w-auto" alt="Finance Train Logo"/>

                </div>
                </a>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    <Link
                      href="/"
                      className={classNames('text-gray-800 hover:text-ligreen','px-3 py-2 rounded-md text-base font-medium')}>
                    
                      Home
                    
                    </Link>
                    <Menu as="div" className="relative px-3 py-2">
                  <div>
                    <Menu.Button className="flex text-base rounded-md focus:outline-none items-center group font-medium text-gray-800">
                      <span className="sr-only">Open user menu</span>
                      Services
                      <ChevronDownIcon className="h-4 w-4 text-gray group-hover:text-ligreen ml-1"/>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="z-10 origin-top-right absolute left-0 mt-2 w-60 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a href="/services/web-apps"
                            className={classNames(active ? 'bg-ligreen-light' : '', 'block px-4 py-2 text-sm text-gray-700 hover:bg-ligreen-light')}
                          >
                            Web App Development
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a href="/services/mobile-apps"
                            className={classNames(active ? 'bg-ligreen-light' : '', 'block px-4 py-2 text-sm text-gray-700 hover:bg-ligreen-light')}
                          >
                            Mobile App Development
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a href="/services/content-marketing"
                            className={classNames(active ? 'bg-ligreen-light' : '', 'block px-4 py-2 text-sm text-gray-700 hover:bg-ligreen-light')}
                          >
                            Content Marketing
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a href="/services/websites"
                            className={classNames(active ? 'bg-ligreen-light' : '', 'block px-4 py-2 text-sm text-gray-700 hover:bg-ligreen-light')}
                          >
                            Websites
                          </a>
                        )}
                        </Menu.Item>
                      {/*<Menu.Item>
                        {({ active }) => (
                          <a href="/services/websites"
                            className={classNames(active ? 'bg-ligreen-light' : '', 'block px-4 py-2 text-sm text-gray-700 hover:bg-ligreen-light')}
                          >
                            Marketing Websites
                          </a>
                        )}
                      </Menu.Item>


                      <Menu.Item>
                        {({ active }) => (
                          <a href="/services/maintenance"
                            className={classNames(active ? 'bg-ligreen-light' : '', 'block px-4 py-2 text-sm text-gray-700 hover:bg-ligreen-light')}
                          >
                            Ongoing Maintenance
                          </a>
                        )}
                        </Menu.Item>
	
                    </Menu.Items>
                  </Transition>
                  
                        </Menu>

                    <Link
                      href="/blog"
                      className={classNames('text-gray-800 hover:text-ligreen','px-3 py-2 rounded-md text-base font-medium')}>
                    
                      Blog
                    
                    </Link>    
                    <a
                        href="/contact"
                        className="text-gray-800 hover:text-ligreen','px-3 py-2 rounded-md text-base font-medium"
                      >
                        Contact Us
                        </a>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>

    </div>
  );
}

/* Profile dropdown */

/*<Menu as="div" className="ml-3 relative">
<div>
  <Menu.Button className="flex text-sm rounded-full focus:outline-none items-center group">
    <span className="sr-only">Open user menu</span>
    <UserCircleIcon className="h-8 w-8 rounded-full text-gray mr-1 group-hover:text-ligreen"/>
    <ChevronDownIcon className="h-4 w-4 text-gray group-hover:text-ligreen"/>
  </Menu.Button>
</div>
<Transition
  as={Fragment}
  enter="transition ease-out duration-100"
  enterFrom="transform opacity-0 scale-95"
  enterTo="transform opacity-100 scale-100"
  leave="transition ease-in duration-75"
  leaveFrom="transform opacity-100 scale-100"
  leaveTo="transform opacity-0 scale-95"
>
  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
    <Menu.Item>
      {({ active }) => (
        <a href="/account"
          className={classNames(active ? 'bg-ligreen-light' : '', 'block px-4 py-2 text-sm text-gray-700 hover:bg-ligreen-light')}
        >
          Account
        </a>
      )}
    </Menu.Item>
    <Menu.Item>
      {({ active }) => (
        <a
          onClick={() => {}}
          className={classNames(active ? 'bg-ligreen-light' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-ligreen-light')}
        >
          Sign out
        </a>
      )}
    </Menu.Item>
  </Menu.Items>
</Transition>
</Menu>*/