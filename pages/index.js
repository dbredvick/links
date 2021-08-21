import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import {
  UsersIcon,
  DesktopComputerIcon,
  MailIcon,
  PencilIcon,
  MailOpenIcon,
  ChatIcon,
} from "@heroicons/react/outline";

const actions = [
  {
    title: "Read my blog",
    href: "#",
    icon: PencilIcon,
    content: "hello, world",
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-50",
  },
  {
    title: "Subscribe to my newsletter",
    href: "#",
    icon: MailOpenIcon,
    content: "hello, world",
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-50",
  },
  {
    title: "Follow me on Twitter",
    href: "#",
    icon: UsersIcon,
    content: "hello, world",
    iconForeground: "text-sky-700",
    iconBackground: "bg-sky-50",
  },
  {
    title: "Check my code on Github",
    href: "#",
    icon: DesktopComputerIcon,
    content: "hello, world",
    iconForeground: "text-yellow-700",
    iconBackground: "bg-yellow-50",
  },
  {
    title: "Email me",
    href: "#",
    icon: MailIcon,
    content: "hello, world",
    iconForeground: "text-rose-700",
    iconBackground: "bg-rose-50",
  },
  {
    title: "DM me on Twitter",
    href: "#",
    icon: ChatIcon,
    content: "hello, world",
    iconForeground: "text-sky-700",
    iconBackground: "bg-sky-50",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Example() {
  return (
    <div className="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
      {actions.map((action, actionIdx) => (
        <div
          key={action.title}
          className={classNames(
            actionIdx === 0
              ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none"
              : "",
            actionIdx === 1 ? "sm:rounded-tr-lg" : "",
            actionIdx === actions.length - 2 ? "sm:rounded-bl-lg" : "",
            actionIdx === actions.length - 1
              ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none"
              : "",
            "relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
          )}
        >
          <div>
            <span
              className={classNames(
                action.iconBackground,
                action.iconForeground,
                "rounded-lg inline-flex p-3 ring-4 ring-white"
              )}
            >
              <action.icon className="h-6 w-6" aria-hidden="true" />
            </span>
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-medium">
              <a href={action.href} className="focus:outline-none">
                {/* Extend touch target to entire panel */}
                <span className="absolute inset-0" aria-hidden="true" />
                {action.title}
              </a>
            </h3>
            <p className="mt-2 text-sm text-gray-500">{action.content}</p>
          </div>
          <span
            className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
            aria-hidden="true"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
            </svg>
          </span>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className="w-full bg-gray-50 pb-6 md:pb-16">
      <div className="pt-14">
        <span className="prose">
          <h1 className="text-center">Drew Bredvick</h1>
        </span>
        <div className="flex items-center justify-center pt-8">
          <span className="prose">
            <h4 className="text-center px-4 max-w-md ">
              Engineer at ▲ @Vercel . Tweets about how I build side projects &
              startups with Next.js + React.
            </h4>
          </span>
        </div>
        <div />
        <div className="mt-14 mx-auto max-w-3xl">
          <Example />
        </div>
      </div>
    </div>
  );
}
