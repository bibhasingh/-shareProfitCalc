"use strict";

document.querySelector(".calc").addEventListener("click", function () {
  const buyPrice = document.querySelector(".buy").value;
  const sellPrice = document.querySelector(".sell").value;
  const numShare = document.querySelector(".numShare").value;
  const profit =
    sellPrice > buyPrice
      ? (sellPrice - buyPrice) * numShare
      : (buyPrice - sellPrice) * numShare;
  document.querySelector(".gainOrLoss").value = profit;
});
