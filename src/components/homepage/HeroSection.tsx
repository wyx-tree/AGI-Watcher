import React from 'react';
import Link from '@docusaurus/Link';
import { useColorMode } from '@docusaurus/theme-common';
import Head from '@docusaurus/Head';

export default function HeroSection() {
  const { colorMode } = useColorMode();

  return (
    <section className="noise-bg no-underline-links px-4 pt-16 lg:py-0">
      <div className="mx-auto flex max-w-7xl flex-col items-center lg:h-[540px] lg:flex-row">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="mb-6 font-jakarta text-4xl font-bold lg:text-6xl">
            AGI Watcher
          </h1>
          <p className="text-sm text-text-400 lg:max-w-lg lg:text-base">
            多年以后，当AGI技术正在改变着世界的面貌，我们会回想起AGI-Watcher陪伴我们一起见证它的成长和进展的那个遥远的下午。
          </p>
          <div className="mt-8 flex flex-col gap-4 lg:flex-row">
            <Link
              href="/docs/首页"
              className="rounded-sm bg-primary px-12 py-2.5 text-center font-semibold text-white hover:text-white"
            >
              开始阅读
            </Link>
          </div>
        </div>
        <div className="flex-1 xl:flex-none">
          <img
              src={`/static/landing-page/duihua_${colorMode}.png`}
              alt="Preview of prompt"
              width={640}
          />
        </div>
      </div>
    </section>
  );
}
