import Link from "next/link";

import { cn } from "./libs/utils";

const BASE_URL =
  process.env.NODE_ENV === "development"
    ? process.env.__NEXT_PRIVATE_ORIGIN
    : "https://ameyanaik.com";

export type NavigationItem = {
  name: string;
  href: string;
};

export const ABOUT = { name: "About", href: `${BASE_URL}/about` };
export const ARCHIVES = { name: "Archives", href: `${BASE_URL}/archives` };
export const FEED = { name: "Feed", href: `${BASE_URL}/feed` };
export const GITHUB = { name: "GitHub", href: `https://ameyanaik.com/github` };
export const BLOG = { name: "Blog", href: `${BASE_URL}` };
const defaultNavigation = [GITHUB, ABOUT];

type Props = {
  className?: string;
  navigationItems?: NavigationItem[];
};

export default function Menu({
  className,
  navigationItems = defaultNavigation,
}: Props) {
  return (
    <div className={cn("flex flex-row gap-5 flex-wrap", className)}>
      {navigationItems.map(({ name, href }) => (
        <Link
          key={name}
          href={href}
          className="hover:underline underline-offset-8"
        >
          {name}
        </Link>
      ))}
    </div>
  );
}
