export interface FooterPartner {
  logo: string;
  title: string;
  subtitle: string;
}

export interface FooterLink {
  title: string;
  subtitles: FooterSubtitle[];
}

export interface FooterSubtitle {
  subtitle: string;
  href: string;
}

export const FooterPartnersLinks: FooterPartner[] = [
  {
    logo: 'footerAirLogo',
    title: 'AIPlan4EU',
    subtitle:
      'The AIPlan4EU project is funded by the European Commission - H2020 research and innovation programme under grant agreement No 101016442',
  },
  {
    logo: 'footerTechLogo',
    title: 'CzechInvest',
    subtitle: 'We were supported by the system project Technological Incubation',
  },
];

export const FooterLinks: FooterLink[] = [
  {
    title: 'Solutions',
    subtitles: [
      { subtitle: 'HMI Testing', href: '/#hmi-testing' },
      { subtitle: 'Defence Simulators', href: '/#defence-simulators' },
      { subtitle: 'Government Procurement', href: '/#government-education' },
    ],
  },
  {
    title: 'Links',
    subtitles: [
      { subtitle: 'Research', href: '/research' },
      { subtitle: 'Career', href: 'https://filuta.notion.site/filuta-ai-careers' },
      { subtitle: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Socials',
    subtitles: [{ subtitle: 'LinkedIn', href: 'https://www.linkedin.com/company/filuta' }],
  },
];
