const sidebars = {
  docs: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Home'
    },
    {
      type: 'category',
      label: '360 Scenes Dataset',
      link: {
        type: 'doc',
        id: 'Scenes/index'
      },
      collapsed: true,
      items: [
        'Scenes/Badminton',
        'Scenes/BuskingCity',
        'Scenes/BuskingUnderpass',
        'Scenes/Cheerleading',
        'Scenes/ConferenceCenter',
        'Scenes/ConferenceParticipant',
        'Scenes/ForestWalk',
        'Scenes/Lake',
        'Scenes/ParkFountains',
        'Scenes/River',
        'Scenes/Skateboarding',
        'Scenes/Train'
      ],
    },
    {
      type: 'category',
      label: 'CGI Scenes Dataset',
      link: {
        type: 'doc',
        id: 'CGI/index'
      },
      collapsed: true,
      items: [
        'CGI/TheCave',
        'CGI/TheCinema',
        'CGI/TheMansion',
        'CGI/AssetInformation'
      ]
    },
    {
      type: 'category',
      label: 'Saliency Dataset',
      link: {
        type: 'doc',
        id: 'Saliency/index'
      },
      collapsed: true,
      items: [
        'Saliency/Badminton05',
        'Saliency/BuskingCity01',
        'Saliency/BuskingUnderpass05',
        'Saliency/Cheerleading01',
        'Saliency/ConferenceCenter01',
        'Saliency/ConferenceParticipant02',
        'Saliency/ForestWalk02',
        'Saliency/ForestWalk03',
        'Saliency/Lake01',
        'Saliency/ParkFountains01',
        'Saliency/River01',
        'Saliency/Skateboarding01',
        'Saliency/Skateboarding05',
        'Saliency/Train01'
      ],
    },
    'help'
  ]
};
module.exports = sidebars;