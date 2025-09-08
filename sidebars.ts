import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    // 'intro',
    {
      type: 'category',
      label: 'Overview',
      link: { type: 'doc', id: 'tutorial/overview' },
      items: [
        'tutorial/waves',
        'tutorial/invitations',
        'tutorial/trust-graph',
        'tutorial/physical-card',
        'tutorial/domain',
        'tutorial/reputation-checker',
        'tutorial/mint',
        'tutorial/nft',
      ],
    },
  ],
};

export default sidebars;
