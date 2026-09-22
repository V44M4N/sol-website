export const business = {
  name: "Sol The Brew House",
  phone: "+91 80913 96732",
  telephone: "tel:+918091396732",
  address:
    "5th Floor, Hotel Combermere, Next to the Tourism Lift, The Mall, Shimla 171001",
  instagram: "https://www.instagram.com/solthebrewhouse/",
  facebook: "https://www.facebook.com/solthebrewhouse/",
  maps: "https://www.google.com/maps/search/?api=1&query=Cafe+Sol&query_place_id=ChIJv0m6JpR4BTkRdTx7TzUS_YA",
  mapEmbed:
    "https://www.google.com/maps?q=Cafe+Sol,+Hotel+Combermere,+Shimla&ll=31.1021372,77.1774353&z=17&output=embed",
};
export const venue = (name: string) =>
  `/media/Gallery/SolTheBrewHouse/solthebrewhouse${name}.webp`;
export const cafeLocation = {
  maps: "https://www.google.com/maps/search/cafe+sol/@31.1040974,77.1707153,4139m/data=!3m1!1e3?entry=ttu",
  embed:
    "https://www.google.com/maps?q=Cafe+Sol,+Shimla&ll=31.1040974,77.1707153&z=15&output=embed",
};
export const galleryBackdrop = venue("_GalleryBackgroundImage");
export const headerVideos = [
  "solthebrewhouse_startingvideo",
  "solthebrewhouse_video1",
  "solthebrewhouse_video2",
  "solthebrewhouse_video3",
  "solthebrewhouse_video4",
  "solthebrewhouse_addinthelastvideo",
].map((name) => `/media/videos/${name}.mp4`);
export const foodVideos = [
  "foodanddrinks_backgroundvideo1",
  "foodanddrinks_backgroundvideo2",
  "foodanddrinks_backgroundvideo3",
  "foodanddrinks_backgroundvideo4",
  "foodanddrinks_backgroundlastvideo",
].map((name) => `/media/videos/${name}.mp4`);
export const cafe = (name: string) =>
  `/media/Gallery/SolCafe/solcafe_${name}.webp`;
export const beers = [
  {
    slug: "german-lager",
    name: "German Lager",
    style: "Golden & floral",
    description:
      "A light-bodied, highly attenuated, golden-coloured, bottom-fermented bitter beer. This German beer shows excellent head retention and an elegant, floral hop aroma. Crisp, clean and refreshing, German Lager showcases the finest quality German malt and hops.",
    ibu: "24",
    abv: "5-6%",
    image: "/media/BrewHouse/Brews/German_Lager_new.webp",
  },
  {
    slug: "mango-ale",
    name: "Mango Ale",
    style: "Mango & cinnamon",
    description:
      "This beer has a distinctive mango aroma with a slight hint of cinnamon. As a fruit beer, its low hop aroma is balanced with the mango aroma. Yellow in colour, it is made with cold-pressed mango juice added during fermentation. Distinctive mango and spice flavours are noticeable and may range in intensity from subtle to aggressive.",
    ibu: "12-15",
    abv: "4-5%",
    image: "/media/BrewHouse/Brews/Mango_Ale_new.webp",
  },
  {
    slug: "belgian-wit",
    name: "Belgian Wit",
    style: "Wheat & citrus",
    description:
      "A pale, refreshing wheat beer brewed in the Belgian style. Very pale straw in colour, with a cloudy appearance due to starch haze and yeast. This beer has moderate malty sweetness with a light, grainy, spicy wheat aroma, often with a little tartness. Citrus orange flavour is its speciality.",
    ibu: "12",
    abv: "4.5-5%",
    image: "/media/BrewHouse/Brews/Belgian_Wit_new.webp",
  },
  {
    slug: "chocolate-coffee-stout",
    name: "Chocolate Coffee Stout",
    style: "Roasted & rich",
    description:
      "A medium-full-bodied black beer with a pronounced roasted flavour, often similar to coffee. This beer has a moderate coffee and chocolate aroma. Hop aroma is very low, with a little earthy flavour. Moderately balanced with a touch of caramel and malty sweetness.",
    ibu: "20",
    abv: "7%",
    image: "/media/BrewHouse/Brews/ChocolateCoffee_Stout_new.webp",
  },
];
export const gallery = [
  {
    src: venue("_loungearea6"),
    alt: "Gather in the Brew House lounge",
    group: "Brew House",
  },
  {
    src: venue("2"),
    alt: "Another view of Sol The Brew House",
    group: "Brew House",
  },
  {
    src: venue("_goldenhour1"),
    alt: "Golden hour at Sol",
    group: "Brew House",
  },
  {
    src: venue("_outsidelounge3"),
    alt: "Unwind on the Sol terrace",
    group: "Brew House",
  },
  {
    src: venue("_loungearea5"),
    alt: "Inside the Sol lounge",
    group: "Brew House",
  },
  {
    src: venue("_bararea1"),
    alt: "Brewing tanks and the bar at Sol",
    group: "Brew House",
  },
  {
    src: venue("_outsidelounge2"),
    alt: "Sol terrace overlooking Shimla at sunset",
    group: "Brew House",
  },
  {
    src: venue("_peopleinthelounge1"),
    alt: "Friends sharing beers and food at Sol",
    group: "Brew House",
  },
  {
    src: venue("_loungearea1"),
    alt: "Plant-lined lounge at Sol The Brew House",
    group: "Brew House",
  },
  {
    src: venue("_outsidelounge1"),
    alt: "Evening view of Shimla from the terrace",
    group: "Brew House",
  },
  { src: venue(""), alt: "Sol The Brew House exterior", group: "Brew House" },
  ...[2, 3, 4].map((n) => ({
    src: venue(`_loungearea${n}`),
    alt: `Sol lounge, view ${n}`,
    group: "Brew House",
  })),
  {
    src: venue("_peopleinthelounge2"),
    alt: "Guests in the Brew House lounge",
    group: "Brew House",
  },
  ...["lounge1", "lounge2", "lounge3", "inside1", "inside2"].map((n, i) => ({
    src: cafe(n),
    alt: `Cafe Sol, view ${i + 1}`,
    group: "Cafe",
  })),
];

export const foodAndDrinks = [
  { src: "/media/food-drinks/food2.webp", alt: "Signature charcoal pizza" },
  { src: "/media/food-drinks/drinks1.webp", alt: "A freshly poured Sol brew" },
  { src: "/media/food-drinks/food4.webp", alt: "Sushi at Sol" },
  { src: "/media/food-drinks/drinks2.webp", alt: "A refreshing citrus drink" },
  { src: "/media/food-drinks/food3.webp", alt: "Biryani for the table" },
  { src: "/media/food-drinks/food1.webp", alt: "Fresh salads" },
  { src: "/media/food-drinks/drinks3.webp", alt: "Creamy milkshakes" },
  { src: "/media/food-drinks/food5.webp", alt: "A table full of Sol flavours" },
  {
    src: "/media/food-drinks/food6.webp",
    alt: "Burnt Basque cheesecake at sunset",
  },
];
