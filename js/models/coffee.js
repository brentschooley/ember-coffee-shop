var attr = DS.attr

App.Coffee = DS.Model.extend({
  name: attr(),
  image_url: attr(),
  roaster: attr(),
  price: attr(),
  ounces: attr(),
  roast_type: attr(),
  notes: attr(),
  acidity: attr(),
  body: attr(),
  formattedPriceDollars: function () {
    var price = this.get('price'),
    formatted = parseFloat(price, 10).toFixed(2);

    return '$' + formatted;
  }.property('price')
});

App.Coffee.FIXTURES = [
  {
    id: 1,
    name: 'Dharma',
    image_url: 'http://www.gocoffeego.com/coffee-images/Temple-Coffee-Dharma-Espresso-Blend.1301.lg.jpg',
    roaster: 'Temple',
    price: 13.5,
    ounces: 12,
    roast_type: 'Medium Dark',
    notes: 'Bittersweet cocoa, caramel, complex, baking spices.',
    acidity: 'Moderate',
    body: 'Full'
  },
  {
    id: 2,
    name: 'Oktoberfest',
    image_url: 'http://www.gocoffeego.com/coffee-images/MadCap-Coffee-Oktoberfest.2481.lg.jpg',
    roaster: 'MadCap',
    price: 17,
    ounces: 12,
    roast_type: 'Medium',
    notes: 'Spice, citrus and apple.',
    acidity: 'Balanced',
    body: 'Deep'
  },
  {
    id: 3,
    name: 'Belle',
    image_url: 'http://www.gocoffeego.com/coffee-images/Klatch-Coffee-Belle-Espresso.59.lg.jpg',
    roaster: 'Klatch',
    price: 13.5,
    ounces: 12,
    roast_type: 'Medium Dark',
    notes: 'Brandy, chocolate, caramel, cedar, flowers',
    acidity: 'Mild',
    body: 'Smooth'
  },
  {
    id: 4,
    name: 'Monkey Bite',
    image_url: 'http://www.gocoffeego.com/coffee-images/Bird-Rock-Coffee-Monkey-Bite-Espresso.2776.lg.jpg',
    roaster: 'Bird Rock',
    price: 16.75,
    ounces: 12,
    roast_type: 'Medium',
    notes: 'Caramel, cocoa, candied citrus, floral',
    acidity: 'Sweet',
    body: 'Medium'
  },
  {
    id: 5,
    name: 'Little Buddy',
    image_url: 'http://www.gocoffeego.com/coffee-images/Olympia-Coffee-Little-Buddy-Organic-Blend.3198.lg.jpg',
    roaster: 'Olympia',
    price: 14.45,
    ounces: 12,
    roast_type: 'Medium Light',
    notes: 'Caramel, sweet',
    acidity: 'Mild',
    body: 'Heavy'
  },
  {
    id: 6,
    name: 'Rocketeer',
    image_url: 'http://www.gocoffeego.com/coffee-images/Atomic-Cafe--Rocketeer-Blend.350.lg.jpg',
    roaster: 'Atomic Cafe',
    price: 12.25,
    ounces: 12,
    roast_type: 'Medium',
    notes: 'Chocolate, spicy',
    acidity: 'Lively',
    body: 'Rich'
  },
];
