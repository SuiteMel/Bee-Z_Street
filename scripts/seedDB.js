const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;
const bluebird = require("bluebird");

// Connect to the Mongo DB
mongoose.Promise = bluebird;
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/beezstreet",
  { promiseLibrary: bluebird }
);

const plantSeed = [
  {
    name: "Eryngium yuccifolium",
    commonName: "Rattlesnake Master",
    height: 48, //inches
    spacing: 24, //inches
    notes:
      "Rattlesnake Master has unique round flowers that are held above long, sturdy flower stalks. To feature the yucca-like, spiny, gray foliage, plant Rattlesnake Master next to shorter grasses such as Prairie Dropseed.",
    habitat: "prairie",
    flowering: ["July", "August"],
    sun: ["full"],
    soil: ["sand", "loam", "clay"],
    water: ["wet", "mesic", "dry"],
    images: {
      box: "../images/plant_photos/Rattlesnake_Master.jpg",
      proportional: "./images/rattlesnake_master_252.png"
    },
    insects: [
      {
        insect: "Honey Bees",
        image: "../images/bees/honeybee.png"
      },
      {
        insect: "Yellow-Faced Bees",
        image: "../images/bees/yellow-face-bees.png"
      },
      {
        insect: "Bumblebees",
        image: "../images/bees/bumblebee.png"
      }
    ]
  },

  {
    name: "Asclepias tuberosa",
    commonName: "Butterfly Milkweed",
    height: 24, //inches
    spacing: 16, //inches
    notes:
      "Because of its large taproot, Butterfly Milkweed does not translplant well and requires loose soils. Plant in masses to create an unrivaled display of bright orange flowers.",
    habitat: "prairie",
    flowering: ["June", "July"],
    sun: ["full"],
    soil: ["sand", "loam"],
    water: ["mesic", "dry"],
    images: {
      box:
        "../images/plant_photos/asclepias-tuberosa-butterfly-weed-close-up.jpg",
      proportional: "./images/butterfly_milkweed_250.png"
    },
    insects: [
      {
        insect: "Leaf-Cutter Bees",
        image: "../images/bees/leaf-cutter-bee.png"
      },
      {
        insect: "Green Sweat Bees",
        image: "../images/bees/green-sweat-bee.png"
      },
      {
        insect: "Monarch Butterflies",
        image: "../images/bees/monarch.png"
      }
    ]
  },
  {
    name: "Phlox pilosa",
    commonName: "Prairie Phlox",
    height: 15, //inches
    spacing: 12, //inches
    notes:
      "Prairie Phlox performs best in well-drained soils in full sun. Use massed on the edges of small prairie plantings or in a boulevard planting.",
    habitat: "prairie",
    flowering: ["April", "May"],
    sun: ["full"],
    soil: ["sand", "loam"],
    water: ["wet", "mesic", "dry"],
    images: {
      box: "../images/plant_photos/phlox_villosissima_alplains_cc.jpg",
      proportional: "./images/prairie_phlox_80.png"
    },
    insects: [
      {
        insect: "Bumblebees",
        image: "../images/bees/bumblebee.png"
      },
      {
        insect: "Green Sweat Bees",
        image: "../images/bees/green-sweat-bee.png"
      },
      {
        insect: "Small Carpenter Bees",
        image: "../images/bees/small-carpenter-bee.png"
      }
    ]
  },
  {
    name: "Echinacea pallidda",
    commonName: "Pale Purple Coneflower",
    height: 45, //inches
    spacing: 12, //inches.
    notes:
      "One of the tallest coneflower species. combine with prairie grasses or medium-height forbs such as Butterfly Milkweed.",
    habitat: "prairie",
    flowering: ["June", "July"],
    sun: ["full"],
    soil: ["sand", "loam", "clay"],
    water: ["mesic", "dry"],
    images: {
      box: "../images/plant_photos/echinacea_pallida.jpg",
      proportional: "./images/coneflower_235.png"
    },
    insects: [
      {
        insect: "Long-Horned Bees",
        image: "../images/bees/longhorn-bee.png"
      },
      {
        insect: "Sweat Bees",
        image: "../images/bees/sweat-bee.png"
      },
      {
        insect: "American Lady Butterflies",
        image: "../images/bees/american-lady-butterfly.png"
      }
    ]
  },
  {
    name: "Geranium maculatum",
    commonName: "Wild Geranium",
    height: 24, //inches
    spacing: 12, //inches
    notes:
      "Wild Geranium rivals cultivated geraniums with its numerous, large pink flowers. It flowers profusely in springs with high rainfall. An excellent plant to mass under trees.",
    habitat: "woodland edge",
    flowering: ["April", "May"],
    sun: ["part-sun", "shade"],
    soil: ["sand", "loam"],
    water: ["mesic", "dry"],
    images: {
      box: "../images/plant_photos/Geranium-maculatum-Chatto-3.jpg",
      proportional: "./images/wild_geranium_120.png"
    },
    insects: [
      {
        insect: "Mason Bees",
        image: "../images/bees/mason-bee.png"
      },
      {
        insect: "Mining Bees",
        image: "../images/bees/mining-bee.png"
      },
      {
        insect: "Cuckoo Bees",
        image: "../images/bees/cuckoo-bee.png"
      }
    ]
  },

  {
    name: "Eurybia macrophylla",
    commonName: "Large-Leafed Aster",
    height: 30, //inches
    spacing: 36, //inches
    notes:
      "Large-Leafed Aster is one of the few native woodland perennials to flower in late summer. Combine with ferns for great contrast and foliage textures",
    habitat: "woodland edge",
    flowering: ["July", "August", "September"],
    sun: ["part-sun", "shade"],
    soil: ["sand", "loam", "clay"],
    water: ["wet", "mesic", "dry"],
    images: {
      box: "../images/plant_photos/Aster-large-leaved-wood_1024x1024.jpg",
      proportional: "./images/large_leafed_aster_240.png"
    },
    insects: [
      {
        insect: "Bumblebees",
        image: "../images/bees/bumblebee.png"
      },
      {
        insect: "Green Sweat Bees",
        image: "../images/bees/green-sweat-bee.png"
      },
      {
        insect: "Mining Bees",
        image: "../images/bees/mining-bee.png"
      }
    ]
  },

  {
    name: "Hydrophyllum virginianum",
    commonName: "Virginia Waterleaf",
    height: 15, //inches
    spacing: 12, //inches
    notes:
      "The silver-spotted leaves of Virginia Waterleaf are prominent before the flowerheads develop; they then turn dark green. Mass plants near edge of woodland for a colorful display.",
    habitat: "woodland edge",
    flowering: ["May"],
    sun: ["part-sun", "shade"],
    soil: ["sand", "loam"],
    water: ["wet", "mesic", "dry"],
    images: {
      box: "../images/plant_photos/va_waterleaf1.jpg",
      proportional: "./images/virginia_waterleaf_215.png"
    },
    insects: [
      {
        insect: "Mining Bees",
        image: "../images/bees/mining-bee.png"
      },
      {
        insect: "Mason Bees",
        image: "../images/bees/mason-bee.png"
      },
      {
        insect: "Sweat Bees",
        image: "../images/bees/sweat-bee.png"
      }
    ]
  },
  {
    name: "Asclepias incarnata",
    commonName: "Swamp Milkweed",
    height: 48, //inches
    spacing: 24, //inches
    notes:
      "Easily grown in medium to wet soils in full sun. Surprisingly tolerant of average well-drained soils in cultivation even though the species is native to swamps and wet meadows. Plants have deep taproots and are best left undisturbed once established. Foliage is slow to emerge in spring.",
    habitat: "wetland edge",
    flowering: ["July"],
    sun: ["full"],
    soil: ["sand", "loam", "clay"],
    water: ["wet, mesic"],
    images: {
      box:
        "../images/plant_photos/swamp-milkweed-asclepias-incarnata-cinderella_0-600x600.jpg",
      proportional: "./images/swamp_milkweed_235.png"
    },
    insects: [
      {
        insect: "Monarch Butterflies",
        image: "../images/bees/monarch.png"
      },
      {
        insect: "Great Spangled Fritillary",
        image: "../images/bees/great-spangled-fritillary.png"
      },
      {
        insect: "Red Admiral Butterfly",
        image: "../images/bees/red-admiral-butterfly.png"
      }
    ]
  },
  {
    name: "Chelone glabra",
    commonName: "White Turtlehead",
    height: 36, //inches
    spacing: 18, //inches
    notes:
      "Best grown in moist to wet, rich, humusy soils in part shade. Appreciates a good composted leaf mulch, particularly in sunny areas. Consider pinching back the stem ends in spring to reduce mature plant height, especially if growing plants in strongly shaded areas where they are more likely to need some support. In optimum environments, however, staking is usually not required. Slowly spreads by rhizomes.",
    habitat: "wetland edge",
    flowering: ["July", "August"],
    sun: ["full", "part-sun"],
    soil: ["sand", "loam", "clay"],
    water: ["wet"],
    images: {
      box: "../images/plant_photos/white_turtlehead_chelone-glabra-_1_.jpg",
      proportional: "./images/white_turtlehead_313.png"
    },
    insects: [
      {
        insect: "Long-Horned Bees",
        image: "../images/bees/longhorn-bee.png"
      },
      {
        insect: "Bumblebees",
        image: "../images/bees/bumblebee.png"
      },
      {
        insect: "Baltimore Checkerspot Butterfly",
        image: "../images/bees/baltimore-checkerspot-butterfly.png"
      }
    ]
  }
];

db.Plant.remove({})
  .then(() => db.Plant.collection.insertMany(plantSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted into Plant!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
