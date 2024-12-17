import { ReactElement } from "react";
import { Github, Twitter } from "./Icons";
import { cn } from "./libs/utils";
import { GITHUB } from "./Menu";

export default function Social(): ReactElement {
  const iconClasses = cn(
    "w-4 h-4",
    "text-slate-400 hover:text-slate-600",
    "dark:text-gray-500 dark:hover:text-white"
  );

  return (
    <div className="flex flex-row gap-4">
      <a href={GITHUB.href} target="_blank">
        <Github className={iconClasses} />
      </a>
      <a href="https://x.com/ameyanaik11" target="_blank">
        <Twitter className={iconClasses} />
      </a>
    </div>
  );
}
