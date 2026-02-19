export interface HeaderNav {
  title: string;
  arrow: boolean;
  href: string;
  links?: HeaderNavLink[];
}

export interface HeaderNavLink {
  icon: string;
  link: string;
  href: string;
  subtitle?: string;
}

export const headerNavs: HeaderNav[] = [
  {
    title: 'Solutions',
    arrow: true,
    href: '#',
    links: [
      {
        icon: 'headerIconMonitor',
        link: 'HMI Testing',
        href: '/#hmi-testing',
      },
      {
        icon: 'headerIcon3',
        link: 'Defence Simulators',
        href: '/#defence-simulators',
      },
      {
        icon: 'headerIcon2',
        link: 'Government Procurement',
        href: '/#government-education',
      },
    ],
  },
  {
    title: 'Research',
    arrow: false,
    href: '/research',
  },
  {
    title: 'Company',
    arrow: true,
    href: '#',
    links: [
      {
        icon: 'headerIcon8',
        link: 'Blog ',
        href: '/blog',
        subtitle: 'Read our latest news and updates',
      },
      {
        icon: 'headerIcon7',
        link: 'Career',
        href: 'https://filuta.notion.site/filuta-ai-careers',
        subtitle: "Let's build the future of AI together",
      },
    ],
  },
];

export const headerCTA = {
  label: 'Get Started',
  to: '/contact', // or your preferred CTA link
};
