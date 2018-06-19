const categories = require('../constants').SEEDS.CATEGORY;
const ingredient = require('../constants').SEEDS.INGREDIENT;
const randomDate = () => new Date(new Date(2012, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2012, 0, 1).getTime()));


module.exports = [
  {
    name: 'Crock Pot Roast',
    imageURL: 'http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/27/20/8/picVfzLZo.jpg',
    ingredients: [ingredient.TOMATO, ingredient.MEAT],
    steps: [
      'Place beef roast in crock pot.',
      'Mix the dried mixes together in a bowl and sprinkle over the roast.',
      'Pour the water around the roast.',
      'Cook on low for 7-9 hours.'
    ],
    time: 420,
    date: randomDate(),
    categories: [categories.BARBECUE],
    rating: {
      count: 223,
      value: 4.5
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
  },
  {
    name: 'Roasted Asparagus',
    imageURL: 'http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/50/84/7/picMcSyVd.jpg',
    ingredients: [ingredient.SPAGETTI, ingredient.CHICKEN],
    steps: [
      'Preheat oven to 425°F.',
      'Cut off the woody bottom part of the asparagus spears and discard.',
      'With a vegetable peeler, peel off the skin on the bottom 2-3 inches of the spears (this keeps the asparagus from being all, and if you eat asparagus you know what I mean by that).',
      'Place asparagus on foil-lined baking sheet and drizzle with olive oil.',
      'Sprinkle with salt.',
      'With your hands, roll the asparagus around until they are evenly coated with oil and salt.',
      'Roast for 10-15 minutes, depending on the thickness of your stalks and how tender you like them.',
      'They should be tender when pierced with the tip of a knife.',
      'The tips of the spears will get very brown but watch them to prevent burning.',
      'They are great plain, but sometimes I serve them with a light vinaigrette if we need something acidic to balance out our meal.'
    ],
    time: 10,
    date: randomDate(),
    categories: [categories.DISHES],
    rating: {
      count: 123,
      value: 3.3
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
  },
  {
    name: 'Curried Lentils and Rice',
    imageURL: 'http://dagzhsfg97k4.cloudfront.net/wp-content/uploads/2012/05/lentils3.jpg',
    ingredients: [ingredient.RICE, ingredient.CREAM, ingredient.TOMATO],
    steps: [
      'Bring broth to a low boil.',
      'Add curry powder and salt.',
      'Cook lentils for 20 minutes.',
      'Add rice and simmer for 20 minutes.',
      'Enjoy!'
    ],
    time: 40,
    date: randomDate(),
    categories: [categories.DISHES],
    rating: {
      count: 44,
      value:5.0
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
  },
  {
    name: 'Big Night Pizza',
    imageURL: 'https://www.elementstark.com/woocommerce-extension-demos/wp-content/uploads/sites/2/2016/12/pizza.jpg',
    ingredients: [ingredient.CREAM, ingredient.MEAT, ingredient.CHEESE],
    steps: [
      'Add hot water to yeast in a large bowl and let sit for 15 minutes.',
      'Mix in oil, sugar, salt, and flour and let sit for 1 hour.',
      'Knead the dough and spread onto a pan.',
      'Spread pizza sauce and sprinkle cheese.',
      'Add any optional toppings as you wish.',
      'Bake at 400 deg Fahrenheit for 15 minutes.',
      'Enjoy!'
    ],
    time: 60,
    date: randomDate(),
    categories: [categories.BAKERY],
    rating: {
      count: 9,
      value: 3.8
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
  },
  {
    name: 'Cranberry and Apple Stuffed Acorn Squash Recipe',
    imageURL: 'http://elanaspantry.com/wp-content/uploads/2008/10/acorn_squash_with_cranberry.jpg',
    ingredients: [ingredient.SUGAR, ingredient.CREAM, ingredient.JEM],
    steps: [
      'Cut squash in half, remove seeds.',
      'Place squash in baking dish, cut-side down.',
      'Pour 1/4-inch water into dish.',
      'Bake for 30 minutes at 350 degrees F.',
      'In large bowl, combine remaining ingredients.',
      'Remove squash from oven, fill with mix.',
      'Bake for 30-40 more minutes, until squash tender.',
      'Enjoy!'
    ],
    time: 45,
    date: randomDate(),
    categories: [categories.BAKERY],
    rating: {
      count: 99,
      value: 3.2
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
  },
  {
    name: 'Mic\'s Yorkshire Puds',
    imageURL: 'http://upload.wikimedia.org/wikipedia/commons/f/f9/Yorkshire_Pudding.jpg',
    ingredients: [ingredient.CHEESE, ingredient.TOMATO],
    steps: [
      'Put the flour and some seasoning into a large bowl.',
      'Stir in eggs, one at a time.',
      'Whisk in milk until you have a smooth batter.',
      'Chill in the fridge for at least 30 minutes.',
      'Heat oven to 220C/gas mark 7.',
      'Pour the oil into the holes of a 8-hole muffin tin.',
      'Heat tin in the oven for 5 minutes.',
      'Ladle the batter mix into the tin.',
      'Bake for 30 minutes until well browned and risen.'
    ],
    time: 75,
    date: randomDate(),
    categories: [categories.VEGANS],
    rating: {
      count: 322,
      value: 4.2
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
  },
  {
    name: 'Old-Fashioned Oatmeal Cookies',
    imageURL: 'http://s3.amazonaws.com/gmi-digital-library/65caecf7-a8f7-4a09-8513-2659cf92871e.jpg',
    ingredients: [ingredient.CHEESE, ingredient.TOMATO],
    steps: [
      'Simmer raisins and water over medium heat until raisins are plump, about 15 minutes.',
      'Drain raisins, reserving the liquid.',
      'Add enough water to reserved liquid to measure 1/2 cup.',
      'Heat oven to 400°.',
      'Mix thoroughly shortening, sugar, eggs and vanilla.',
      'Stir in reserved liquid.',
      'Blend in remaining ingredients.',
      'Drop dough by rounded teaspoonfuls about 2 inches apart onto ungreased baking sheet.',
      'Bake 8 to 10 minutes or until light brown.',
      'About 6 1/2 dozen cookies.'
    ],
    time: 36,
    date: randomDate(),
    categories: [categories.VEGANS],
    rating: {
      count: 31,
      value: 2.1
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
  },
  {
    name: 'Blueberry Oatmeal Squares',
    imageURL: 'http://www.theglowingfridge.com/wp-content/uploads/2016/06/SAM_3546.jpg',
    ingredients: [ingredient.CHEESE, ingredient.TOMATO],
    steps: [
      'Filling: In saucepan, bring blueberries, sugar and orange juice to boil; reduce heat and simmer until tender, about 10 minutes.',
      'Whisk cornstarch with 2 tbsp (25 mL) water; whisk into blueberries and boil, stirring, until thickened, about 1 minute.',
      'Place plastic wrap directly on surface; refrigerate until cooled, about 1 hour.',
      'In large bowl, whisk together oats, flour, sugar, orange rind and salt ; with pastry blender, cut in butter until in coarse crumbs.',
      'Press half into 8-inch (2 L) square parchment paper–lined metal cake pan; spread with blueberry filling.',
      'Bake in centre of 350°F oven until light golden, about 45 minutes.',
      'Let cool on rack before cutting into squares.',
      '(Make-ahead: Cover and refrigerate for up to 2 days or overwrap with heavy-duty foil and freeze for up to 2 weeks.)'
    ],
    time: 120,
    date: randomDate(),
    categories: [categories.BAKERY],
    rating: {
      count: 32,
      value: 1.1
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
  }
];