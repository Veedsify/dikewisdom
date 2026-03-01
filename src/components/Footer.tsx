import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import Socials from './Socials';
import menuData from '@/data/menu.json';

interface NavItem {
  url: string;
  label: string;
}

const Footer: React.FC = () => {
  const menuItems: NavItem[] = menuData;

  return (
    <footer className="dark:bg-gray-950 border-t">
      <div className="container">
        <div className="lg:border-x py-20">
          <div className="lg:max-w-screen-lg lg:mx-auto dotted-side-borders">
            <div className="lg:max-w-screen-md lg:mx-auto grid gap-16">
              <div className="grid gap-10 text-center">
                <h2 className="!mb-0 font-heading">Let&apos;s Build Something Great</h2>
                <p className="!mb-0 max-w-lg mx-auto">
                  Have a project in mind? I&apos;m available for freelance work, contract
                  roles, and technical consulting. Let&apos;s talk.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/contact" className="btn">
                    Get In Touch
                  </Link>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    Download CV
                  </a>
                </div>
              </div>
              <div className="grid gap-10">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
                  <Link
                    href="/"
                    className="w-12 grid transition-opacity hover:opacity-75 duration-300 text-gray-950 dark:text-gray-100"
                    aria-label="Home"
                  >
                    <Logo />
                  </Link>
                  <nav aria-label="Footer navigation">
                    <ul className="flex flex-wrap justify-center gap-8 list-none m-0 py-0">
                      {menuItems.map((item) => (
                        <li key={item.url}>
                          <Link
                            href={item.url}
                            className="text-gray-600 dark:text-gray-400 transition-colors duration-300 hover:text-gray-950 dark:hover:text-gray-100 no-underline"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
                <div className="border-t pt-8">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
                    <p className="text-gray-600 dark:text-gray-400 !mb-0">
                      &copy; {new Date().getFullYear()} Dike Wisdom. All rights reserved.
                    </p>
                    <Socials />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;