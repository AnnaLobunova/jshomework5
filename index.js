"use strict";
const priceData = {
    Apples: '23.4',
    BANANAS: '48',
    oRAngGEs: '48.7584',
  };
  
  let updatedPriceData = {};
  for (let key in priceData){
    let price = parseFloat(priceData[key]).toFixed(2);
    updatedPriceData[key.toLowerCase()]= price;
    };
    console.log(updatedPriceData);

