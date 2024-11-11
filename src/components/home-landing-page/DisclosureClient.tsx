"use client"

import Image from "next/image"
import Link from "next/link"
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react"

interface LinkProps {
  text: string
  href: string
  external: boolean
}

interface DisclosureClientProps {
  topnav: {
    logoLink: {
      text: string
      href: string
      image: {
        url: string
        alternativeText: string | null
        name: string
      }
    }
    link: LinkProps[]
    cta: LinkProps
  }
}

export function DisclosureClient(props: Readonly<DisclosureClientProps>) {
  const navigation = props.topnav.link
  const logo = props.topnav.logoLink
  const cta = props.topnav.cta

  return (
    <Disclosure>
      {({ open }) => (
        <div className="flex w-full flex-wrap items-center justify-between lg:w-auto">
          <Link href={logo.href || "/"}>
            <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
              <span>
                <Image
                  src={logo.image.url}
                  alt={logo.image.alternativeText || logo.image.name}
                  width={32}
                  height={32}
                  className="w-8"
                />
              </span>
              <span>{logo.text}</span>
            </span>
          </Link>

          <DisclosureButton
            aria-label="Toggle Menu"
            className="dark:focus:bg-trueGray-700 ml-auto rounded-md px-2 py-1 text-gray-500 hover:text-indigo-500 focus:bg-indigo-100 focus:text-indigo-500 focus:outline-none dark:text-gray-300 lg:hidden"
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {open && (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              )}
              {!open && (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </DisclosureButton>

          <DisclosurePanel className="my-5 flex w-full flex-wrap lg:hidden">
            <>
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="-ml-4 w-full rounded-md px-4 py-2 text-gray-500 hover:text-indigo-500 focus:bg-indigo-100 focus:text-indigo-500 focus:outline-none dark:text-gray-300 dark:focus:bg-gray-800"
                >
                  {item.text}
                </Link>
              ))}
              <Link
                href={cta.href}
                target={cta.external ? "_blank" : "_self"}
                className="mt-3 w-full rounded-md bg-indigo-600 px-6 py-2 text-center text-white lg:ml-5"
              >
                {cta.text}
              </Link>
            </>
          </DisclosurePanel>
        </div>
      )}
    </Disclosure>
  )
}
