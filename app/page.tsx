import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  CodeXmlIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  XIcon,
} from "lucide-react";

const HomePage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <div className="sm:mb-8 flex justify-center">
          <div className="relative">
            <Avatar className="w-20 h-20 sm:w-56 sm:h-56">
              <AvatarImage src="/pias.webp" alt="Pias's photo" />
            </Avatar>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
            Pias Das
          </h1>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Software Engineer @{" "}
            <a
              target="_blank"
              href="https://grabstar.io/"
              className="font-semibold text-indigo-600"
            >
              Grabstar.io
            </a>
          </p>
          <div className="mt-4 flex items-center justify-center gap-x-6">
            <a
              href="https://www.linkedin.com/in/dspias"
              target="_blank"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:dspias.dev@gmail.com"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <MailIcon className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/dspias"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://x.com/ds_pias"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <XIcon className="w-4 h-4" />
            </a>
            <a
              href="https://leetcode.com/u/dspias"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <CodeXmlIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
