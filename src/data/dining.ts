import type {MenuItem} from '../types/dining';

const gradients: [string, string][] = [
  ['#1a0c0e', '#241016'],
  ['#0d1612', '#14201a'],
  ['#150e0e', '#1e1212'],
  ['#121018', '#1a1420'],
  ['#0e1418', '#162028'],
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'ember-duck-toast',
    name: 'Ember Duck Toast',
    tag: 'Warm Starter',
    description:
      'Crisp toasted brioche with slow-cooked duck, orange glaze, pickled shallots, and a light herb finish.',
    price: 14,
    prepMinutes: 12,
    imageKey: 'EmberDuckToast',
    gradient: gradients[0],
  },
  {
    id: 'midnight-truffle-croquettes',
    name: 'Midnight Truffle Croquettes',
    tag: 'Small Plate',
    description:
      'Golden potato croquettes with black truffle cream, aged cheese, and a soft roasted garlic dip.',
    price: 12,
    prepMinutes: 15,
    imageKey: 'MidnightTruffleCroquettes',
    gradient: gradients[1],
  },
  {
    id: 'smoked-pear-burrata',
    name: 'Smoked Pear & Burrata Plate',
    tag: 'Fresh Bite',
    description:
      'Creamy burrata served with lightly smoked pear, walnut crumble, basil oil, and toasted sourdough.',
    price: 15,
    prepMinutes: 10,
    imageKey: 'SmokedPearBurrataPlate',
    gradient: gradients[2],
  },
  {
    id: 'charred-octopus-coin',
    name: 'Charred Octopus Coin',
    tag: 'Signature Seafood',
    description:
      'Tender octopus with lemon potato cream, paprika oil, crispy capers, and grilled citrus.',
    price: 24,
    prepMinutes: 22,
    imageKey: 'CharredOctopusCoin',
    gradient: gradients[3],
  },
  {
    id: 'jacks-copper-rib-bites',
    name: "Jack's Copper Rib Bites",
    tag: 'House Special',
    description:
      'Slow-braised beef rib pieces glazed with dark honey sauce, served with pickled cucumber and herb crumbs.',
    price: 19,
    prepMinutes: 20,
    imageKey: 'JacksCopperRibBites',
    gradient: gradients[0],
  },
  {
    id: 'saffron-sea-rice-bowl',
    name: 'Saffron Sea Rice Bowl',
    tag: 'Comfort Dish',
    description:
      'Warm saffron rice with mussels, prawns, roasted peppers, lemon butter, and fresh parsley.',
    price: 22,
    prepMinutes: 25,
    imageKey: 'SaffronSeaRiceBowl',
    gradient: gradients[4],
  },
  {
    id: 'forest-mushroom-parcel',
    name: 'Forest Mushroom Parcel',
    tag: 'Vegetarian',
    description:
      'Thin pastry filled with wild mushrooms, soft cheese, thyme, and creamy pepper sauce.',
    price: 17,
    prepMinutes: 18,
    imageKey: 'ForestMushroomParcel',
    gradient: gradients[1],
  },
  {
    id: 'crispy-salmon-mosaic',
    name: 'Crispy Salmon Mosaic',
    tag: 'Light Dinner',
    description:
      'Pan-seared salmon pieces with avocado cream, cucumber ribbons, sesame crisp, and citrus dressing.',
    price: 21,
    prepMinutes: 22,
    imageKey: 'CrispySalmonMosaic',
    gradient: gradients[2],
  },
  {
    id: 'black-garlic-chicken',
    name: 'Black Garlic Chicken Cutlet',
    tag: 'Main Course',
    description:
      'Juicy chicken cutlet with black garlic sauce, roasted baby carrots, and creamy mashed potatoes.',
    price: 20,
    prepMinutes: 25,
    imageKey: 'BlackGarlicChickenCutlet',
    gradient: gradients[0],
  },
  {
    id: 'casino-garden-flatbread',
    name: 'Casino Garden Flatbread',
    tag: 'Share Plate',
    description:
      'Thin flatbread with grilled zucchini, sun-dried tomato cream, feta, olives, and fresh rocket.',
    price: 16,
    prepMinutes: 16,
    imageKey: 'CasinoGardenFlatbread',
    gradient: gradients[3],
  },
  {
    id: 'golden-beet-carpaccio',
    name: 'Golden Beet Carpaccio',
    tag: 'Fresh Starter',
    description:
      'Thin golden beet slices with goat cheese mousse, pistachio dust, apple dressing, and microgreens.',
    price: 13,
    prepMinutes: 10,
    imageKey: 'GoldenBeetCarpaccio',
    gradient: gradients[1],
  },
  {
    id: 'peppercorn-beef-medallions',
    name: 'Peppercorn Beef Medallions',
    tag: 'Premium Plate',
    description:
      'Tender beef medallions with green peppercorn sauce, potato gratin, and roasted seasonal vegetables.',
    price: 29,
    prepMinutes: 28,
    imageKey: 'PeppercornBeefMedallions',
    gradient: gradients[0],
  },
  {
    id: 'lemon-cloud-cheesecake',
    name: 'Lemon Cloud Cheesecake',
    tag: 'Dessert',
    description:
      'Soft cheesecake with lemon cream, almond crumble, white chocolate flakes, and berry sauce.',
    price: 11,
    prepMinutes: 8,
    imageKey: 'LemonCloudCheesecake',
    gradient: gradients[4],
  },
  {
    id: 'espresso-caramel-dome',
    name: 'Espresso Caramel Dome',
    tag: 'Sweet Finish',
    description:
      'A glossy caramel mousse dome with espresso sponge, dark chocolate base, and sea salt crunch.',
    price: 12,
    prepMinutes: 8,
    imageKey: 'EspressoCaramelDome',
    gradient: gradients[2],
  },
  {
    id: 'ruby-citrus-spritz',
    name: 'Ruby Citrus Spritz',
    tag: 'Signature Drink',
    description:
      'A refreshing non-heavy spritz with ruby grapefruit, orange peel, sparkling tonic, and rosemary aroma.',
    price: 9,
    prepMinutes: 5,
    imageKey: 'RubyCitrusSpritz',
    gradient: gradients[3],
  },
  {
    id: 'spiced-apple-night-tea',
    name: 'Spiced Apple Night Tea',
    tag: 'Warm Drink',
    description:
      'Warm apple infusion with cinnamon, clove, honey, and a soft citrus finish for a calm evening break.',
    price: 7,
    prepMinutes: 5,
    imageKey: 'SpicedAppleNightTea',
    gradient: gradients[1],
  },
];

export const SERVICE_FEE_RATE = 0.1;

export const formatEuro = (value: number) => `€${value}`;

export const getMenuItemById = (id: string) =>
  MENU_ITEMS.find(item => item.id === id);
