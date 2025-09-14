import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: 'category',
      label: 'Overview',
      link: { type: 'doc', id: 'tutorial/overview' },
      items: [
        'tutorial/waves',
        'tutorial/invitations',
        'tutorial/chest',
        'tutorial/relic-holder',
        {
          type: 'category',
          label: 'Cards',
          items: [
            'tutorial/nft',
            'tutorial/physical-card',
          ],
        },
        'tutorial/mint',
        'tutorial/trust-graph',
        'tutorial/reputation-checker',
        'tutorial/domain',
      ],
    },
  ],
};

export default sidebars;
