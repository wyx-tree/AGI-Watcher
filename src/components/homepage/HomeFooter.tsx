import React from 'react';
import Link from '@docusaurus/Link';
import { useColorMode } from '@docusaurus/theme-common';

import {
  GitHubLogoIcon,
} from '@radix-ui/react-icons';
import clsx from 'clsx';

export default function HomeFooter() {
  const { colorMode } = useColorMode();

  return (
    <footer className="bg-secondary-900">
      <div
        className={clsx('mx-auto flex max-w-7xl flex-col gap-4 px-10 pt-8 pb-1 lg:flex-row lg:items-center lg:gap-8')}
      >
        <div className="flex items-center gap-3">
          <Link href="https://github.com/wyx-tree/AGI-Watcher">
            <GitHubLogoIcon className="h-6 w-6 text-zinc-400 hover:text-primary" />
          </Link>
        </div>
        <div className="flex-1 text-zinc-400 lg:text-right">
          <div className="flex-1 text-zinc-400 lg:text-right">
            Fork from <a target={"_blank"} href={"https://github.com/thinkingjimmy/Learning-Prompt"}>Learning-Prompt</a>
          </div>
        </div>
      </div>
      <div
        className={clsx('mx-auto flex max-w-7xl flex-col gap-4 px-10 pt-1 pb-8 lg:flex-row lg:items-center lg:gap-8')}
      >
        
        
      </div>
    </footer>
  );
}
