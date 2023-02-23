import { Fragment, useEffect } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon, ChevronDownIcon } from '@heroicons/react/outline'
import { UserCircleIcon} from '@heroicons/react/solid'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router'
import { server } from '../config';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Services', href: '/services', current: false },
  { name: 'Blog', href: '/blog', current: false },
  { name: 'Contact', href: '/contact', current: false },
  //{ name: 'Topics', href: '/topics', current: false },
  //{ name: 'Calculators', href: '/calculator', current: false },
]

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {

  const router = useRouter()
  const trigChat = () => {
    // @ts-ignore
    if (window.HubSpotConversations) {
      console.log('Yes');
      // @ts-ignore
      window.HubSpotConversations.widget.open()
    } else {
      // @ts-ignore
      window.hsConversationsOnReady = [
        // @ts-ignore
        () => {
          // @ts-ignore
          window.HubSpotConversations.widget.open()
        }
      ];
    }
  }

  return (
    <div id="header"> {/* className="border-b"*/}
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="bg-blue-100">
            <div className="relative flex items-center justify-between h-20 mx-auto px-2 sm:px-6 lg:px-8 max-w-screen-xl ">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
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
                    <Link href="/">
                    <a
                      
                      className={classNames('text-gray-800 hover:text-ligreen','px-3 py-2 rounded-md text-base font-medium')}
                    >
                      Home
                    </a>
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
                        </Menu.Item>*/}
	
                    </Menu.Items>
                  </Transition>
                  
                        </Menu>
                    {/*<Link href="/services">
                    <a
                      className={classNames('text-gray-800 hover:text-ligreen','px-3 py-2 rounded-md text-base font-medium')}
                    >
                      Services
                    </a>
                      </Link>  */} 
                    <Link href="/blog">
                    <a
                      className={classNames('text-gray-800 hover:text-ligreen','px-3 py-2 rounded-md text-base font-medium')}
                    >
                      Blog
                    </a>
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
              {/*<div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <div className="space-x-4">

                    <button onClick={()=> trigChat()} className="flex-shrink-0 text-white text-base font-semibold py-3 rounded-sm px-4 bg-slate-700 focus:outline-none hover:text-white hover:bg-ligreen-normal">
                    Chat With Us
                  </button>
                </div>
              </div>*/}
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

  )
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