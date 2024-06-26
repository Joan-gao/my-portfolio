'use client';

import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
} from 'react-icons/ri';

import Link from 'next/link';

const icons = [
  // {
  //   path: '/',
  //   name: <RiYoutubeFill />,
  // },
  {
    path: 'https://www.linkedin.com/in/joan-xinyi-gao-659a7b18b/',
    name: <RiLinkedinFill />,
  },
  {
    path: 'https://github.com/Joan-gao',
    name: <RiGithubFill />,
  },
  // {
  //   path: '/',
  //   name: <RiFacebookFill />,
  // },
  {
    path: 'https://www.instagram.com/joangaooo/',
    name: <RiInstagramFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
