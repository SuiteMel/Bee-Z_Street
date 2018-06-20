const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/beezstreet",
  {
    useMongoClient: true
  }
);

const plantSeed = [
  {
    name: "Eryngium yuccifolium",
    commonName: "Rattlesnake Master",
    height: 48, //inches
    spacing: 24, //inches
    notes:
      "Rattlesnake master has unique round flowers that are held above long sturdy flower stalks. To feature the yucca-like, spiny, gray foliage, plant rattlesnake master next to shorter grasses such as prairie dropseed.",
    habitat: "prarie",
    flowering: ["July", "August"],
    sun: ["full"],
    soil: ["sand", "loam", "clay"],
    water: ["wet", "mesic", "dry"],
    images: {
      box:
        "https://cdn.shopify.com/s/files/1/1008/4432/products/Rattlesnake_Master_2.jpg?v=1525018687",
      proportional:
        "https://wimastergardener.org/files/2015/12/Eryngium_yuccifolium-plant.jpg"
    },
    insects: [
      {
        insect: "Honey Bees",
        image:
          "https://en.wikipedia.org/wiki/File:Apis_mellifera_Western_honey_bee.jpg"
      },
      {
        insect: "Yellow-Faced Bees",
        image:
          "https://crownbees.com/media/magiccart/blog/Male_YFB_on_Tree_HeliotropeSquare.png"
      },
      {
        insect: "Bumble Bees",
        image:
          "https://animalsadda.com/wp-content/uploads/2015/05/bumble-bee-6.jpg"
      }
    ]
  },

  {
    name: "Asclepias tuberosa",
    commonName: "Butterfly Milkweed",
    height: 24, //inches
    spacing: 16, //inches
    notes:
      "Because of its large taproot, butterfly milkweed does not translplant well an requires loose soils. Plant in masses to create an unrivaled display of bright orange flowers.",
    habitat: "prarie",
    flowering: ["June", "July"],
    sun: ["full"],
    soil: ["sand", "loam"],
    water: ["mesic", "dry"],
    images: {
      box:
        "https://www.americanmeadows.com/media/catalog/product/cache/1/image/2664a1c26d20ff89f08769f165108d16/a/s/asclepias-tuberosa-butterfly-weed-close-up.jpg",
      proportional:
        "https://blazingstargardens.com/wp-content/uploads/2016/02/Asclepias-tuberosa-Butterfly-Milkweed3.jpg"
    },
    insects: [
      {
        insect: "Leaf-Cutter Bees",
        image:
          "https://14fr7h2xgn5j198icf1rcm0i-wpengine.netdna-ssl.com/wp-content/uploads/2016/01/LeafcutterCC%C2%A9MJIPhotos.jpg"
      },
      {
        insect: "Green Sweat Bees",
        image:
          "https://nature.mdc.mo.gov/sites/default/files/styles/centered_full/public/media/images/2010/05/sweat_bee.jpg?itok=21nZ5yQK"
      },
      {
        insect: "Monarch Butterflies",
        image:
          "http://mediad.publicbroadcasting.net/p/wesa/files/styles/x_large/public/201705/monarch__1_.jpg"
      }
    ]
  },
  {
    name: "Phlox pilosa",
    commonName: "Prarie Plox",
    height: 15, //inches
    spacing: 12, //inches
    notes:
      "Prairie plax performs best in well-drained soils in full sun. Use massed on the edges of small prarie plantings or in a boulevard planting.",
    habitat: "prarie",
    flowering: ["April", "May"],
    sun: ["full"],
    soil: ["sand", "loam"],
    water: ["wet", "mesic", "dry"],
    images: {
      box:
        "https://www.highcountrygardens.com/media/catalog/product/cache/3/image/cdd56dd0d7347dc27aa421c918b212c4/p/h/phlox_villosissima_alplains_cc.jpg",
      proportional:
        "https://www.prairiemoon.com/mm5/graphics/00000001/phlox-pilosa-prairie-phlox_529x705.jpg"
    },
    insects: [
      {
        insect: "Bumble Bees",
        image:
          "https://animalsadda.com/wp-content/uploads/2015/05/bumble-bee-6.jpg"
      },
      {
        insect: "Green Sweat bees",
        image:
          "https://nature.mdc.mo.gov/sites/default/files/styles/centered_full/public/media/images/2010/05/sweat_bee.jpg?itok=21nZ5yQK"
      },
      {
        insect: "Small Carpenter Bees",
        image:
          "http://nathistoc.bio.uci.edu/hymenopt/Small%20Carpenter%20Bees%20(Ceratina)%20B.jpg"
      }
    ]
  },
  {
    name: "Echinacea pallidda",
    commonName: "Pale Purple Coneflower",
    height: 45, //inches
    spacing: 12, //inches.
    notes:
      "One of the tallest coneflower species. combine with prarie grasses or medium-height forbs such as butterfly milkweed",
    habitat: "prarie",
    flowering: ["June", "July"],
    sun: ["full"],
    soil: ["sand", "loam", "clay"],
    water: ["mesic", "dry"],
    images: {
      box:
        "https://www.australianseed.com/persistent/catalogue_images/products/echinacea_pallida.jpg",
      proportional:
        "https://www.sharpseed.com/_ccLib/image/plants/DETA-100008.jpg"
    },
    insects: [
      {
        insect: "Long-Horned Bees",
        image:
          "https://bugguide.net/images/cache/HQA/RYK/HQARYK1RKQYQ20K0W0Q0P0Q080DQJKYQX0NR3KBR50BRRQOQ3KWRQQ3RW000IQH0IQQ020DQM0Z0603RQQTRXQL020.jpg"
      },
      {
        insect: "Sweat Bees",
        image:
          "https://2.bp.blogspot.com/-PLKsB3Rf60o/V7igR_GuSMI/AAAAAAAAI4E/KJTCPeLSK6wX-9bWV7tT8vX-L1vtY9vSACLcB/s1600/HalictusRubicundusCO2a.jpg"
      },
      {
        insect: "American Lady Butterflies",
        image:
          "https://www.laspilitas.com/images/grid24_24/6855/butterflies/Butterflies_and_Moths/American_Painted_lady/painted_lady_butterfly.jpg"
      }
    ]
  },
  {
    name: "Geranium maculatum",
    commonName: "Wild Geranium",
    height: 24, //inches
    spacing: 12, //inches
    notes:
      "Wild geranium rivals cultivated geraniums with its numerous, large pink flowers. It flowers profusely in springs with high rainfall. An excellent plant to mass under trees.",
    habitat: "woodland edge",
    flowering: ["April", "May"],
    sun: ["part-sun", "shade"],
    soil: ["sand", "loam"],
    water: ["mesic", "dry"],
    images: {
      box:
        "https://dorsetperennials.co.uk/wp-content/uploads/2015/05/Geranium-maculatum-Chatto-3.jpg",
      proportional:
        "https://www.prairiemoon.com/mm5/graphics/00000001/Geranium-maculatum-Wild-Geranium_main_467x705.jpg"
    },
    insects: [
      {
        insect: "Mason Bees",
        image:
          "http://cwf-fcf.org/assets/images/pollinators/mason-bee-Jason-D-Roberts.jpg"
      },
      {
        insect: "Mining Bees",
        image:
          "http://1.bp.blogspot.com/-54m638DYUmw/UXaiScQ4v7I/AAAAAAAABEE/9wGVjlsF67o/s1600/DSC03519.JPG"
      },
      {
        insect: "Cuckoo Bees",
        image:
          "https://bugguide.net/images/raw/J0A/QZS/J0AQZSVQZSEQ9K4Q108QY01Q307KY08KY07KRS5KHSWQV0EQZS1QY05KWKLK6KQKV0NQY01Q304K.jpg"
      }
    ]
  },

  {
    name: "Eurybia macrophylla",
    commonName: "Large-Leaved Aster",
    height: 30, //inches
    spacing: 36, //inches
    notes:
      "Large-leaved aster is one of the few native woodland perrenials to flower in late summer. Combine wirth ferns for great contrast and foliage textures",
    habitat: "woodland edge",
    flowering: ["July", "August", "September"],
    sun: ["part-sun", "shade"],
    soil: ["sand", "loam", "clay"],
    water: ["wet", "mesic", "dry"],
    images: {
      box:
        "https://cdn.shopify.com/s/files/1/0739/9053/products/Aster-large-leaved-wood_1024x1024.jpg?v=1478537263",
      proportional: "http://www.mrsoshouse.com/plants/image/aster.jpg"
    },
    insects: [
      {
        insect: "Bumble Bees",
        image:
          "https://animalsadda.com/wp-content/uploads/2015/05/bumble-bee-6.jpg"
      },
      {
        insect: "Green Sweat bees",
        image:
          "https://nature.mdc.mo.gov/sites/default/files/styles/centered_full/public/media/images/2010/05/sweat_bee.jpg?itok=21nZ5yQK"
      },
      {
        insect: "Mining Bees",
        image:
          "http://1.bp.blogspot.com/-54m638DYUmw/UXaiScQ4v7I/AAAAAAAABEE/9wGVjlsF67o/s1600/DSC03519.JPG"
      }
    ]
  },

  {
    name: "Hydrophyllum virginianum",
    commonName: "Virginia Waterleaf",
    height: 15, //inches
    spacing: 12, //inches
    notes:
      "The silver-spotted leaves are prominent before the flowerheads develop; they then turn dark green. Mass plants near edge of woodland for a colorful display.",
    habitat: "woodland edge",
    flowering: ["May"],
    sun: ["part-sun", "shade"],
    soil: ["sand", "loam"],
    water: ["wet", "mesic", "dry"],
    images: {
      box:
        "http://www.illinoiswildflowers.info/woodland/photos/va_waterleaf1.jpg",
      proportional:
        "https://www.prairiemoon.com/mm5/graphics/00000001/hydrophyllum-virginianum-virginia-waterleaf_main.jpg"
    },
    insects: [
      {
        insect: "Mining Bees",
        image:
          "http://1.bp.blogspot.com/-54m638DYUmw/UXaiScQ4v7I/AAAAAAAABEE/9wGVjlsF67o/s1600/DSC03519.JPG"
      },
      {
        insect: "Mason Bees",
        image:
          "http://cwf-fcf.org/assets/images/pollinators/mason-bee-Jason-D-Roberts.jpg"
      },
      {
        insect: "Sweat Bees",
        image:
          "https://2.bp.blogspot.com/-PLKsB3Rf60o/V7igR_GuSMI/AAAAAAAAI4E/KJTCPeLSK6wX-9bWV7tT8vX-L1vtY9vSACLcB/s1600/HalictusRubicundusCO2a.jpg"
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
        "https://www.omcseeds.com/image/cache/data/products/swamp-milkweed-asclepias-incarnata-cinderella_0-600x600.jpg",
      proportional:
        "http://bearmountainbutterflies.com/wp-content/uploads/2015/04/Milkweed-plant.jpg"
    },
    insects: [
      {
        insect: "Monarch Butterflies",
        image:
          "http://mediad.publicbroadcasting.net/p/wesa/files/styles/x_large/public/201705/monarch__1_.jpg"
      },
      {
        insect: "Great Spangled Fritillary",
        image:
          "https://www.massaudubon.org/butterflyatlas/images/butterflies/greatspangledfritillary.jpg"
      },
      {
        insect: "Red Admiral Butterfly",
        image: "http://www.luontoportti.com/suomi/images/16098.jpg"
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
      box:
        "https://www.americanmeadows.com/media/catalog/product/cache/1/image/2664a1c26d20ff89f08769f165108d16/c/h/chelone-glabra-_1_.jpg",
      proportional:
        "https://www.prairiemoon.com/mm5/graphics/00000001/chelone-glabra-turtlehead_pollinator_468x705.jpg"
    },
    insects: [
      {
        insect: "Long-Horned Bees",
        image:
          "https://bugguide.net/images/cache/HQA/RYK/HQARYK1RKQYQ20K0W0Q0P0Q080DQJKYQX0NR3KBR50BRRQOQ3KWRQQ3RW000IQH0IQQ020DQM0Z0603RQQTRXQL020.jpg"
      },
      {
        insect: "Bumble Bees",
        image:
          "https://animalsadda.com/wp-content/uploads/2015/05/bumble-bee-6.jpg"
      },
      {
        insect: "Baltimore Checkerspot Butterfly",
        image:
          "http://mainebutterflies.com/Baltimore_Checkerspot_files/image007.jpg"
      }
    ]
  }
];

db.Plant.remove({})
  .then(() => db.Plant.collection.insertMany(plantSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
