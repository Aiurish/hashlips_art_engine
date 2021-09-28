"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const { MODE } = require(path.join(basePath, "src/blendMode.js"));
const description = "A group of tests faces!";
const baseUri = "ipfs://NewUriToReplace";

const layerConfigurations = [
  {
    growEditionSizeTo: 10,
    layersOrder: [
      { name: "Base$" },
      { name: "Eye_Brow$" },
      { name: "Eyes" },
      { name: "Mouth" },
      { name: "Nose" },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

//if you want folders (marked with '$') to run sequentially instead of randomly set this to true
const sequential = true;

//if you want the sequence to "restart" once it reaches the end of the folder set this to true
//else, the layer will be removed from further generations
const sequentialLooping = false;

const format = {
  width: 512,
  height: 512,
};

const background = {
  generate: true,
  brightness: "80%",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.width / format.height,
  imageName: "preview.png",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  sequential,
  sequentialLooping,
  extraMetadata,
};
