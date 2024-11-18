function mySetTimeout(delay) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

function makeToy(time) {
  console.log("Making a toy...");
  return mySetTimeout(time).then(() => {
    console.log("Toy made!");
    return true;
  });
}

function deliverToys(time) {
  console.log("Delivering toys...");
  return mySetTimeout(time).then(() => {
    console.log("Toys delivered!");
    return true;
  });
}

function sellToy(time) {
  console.log("Selling the toy...");
  return mySetTimeout(time).then(() => {
    console.log("Toy sold!");
    return true;
  });
}

makeToy(3000)
  .then((made) => {
    if (made) return deliverToys(2000);
    throw new Error("Failed to make the toy!");
  })
  .then((delivered) => {
    if (delivered) return sellToy(1000);
    throw new Error("Failed to deliver the toys!");
  })
  .then(() => {
    console.log("Process complete!");
  })
  .catch((error) => {
    console.error("Process failed:", error.message);
  });

// version 2

async function toyShopProcess() {
  try {
    console.log("Making a toy...");
    await mySetTimeout(3000);
    console.log("Toy made!");

    console.log("Delivering toys...");
    await mySetTimeout(2000);
    console.log("Toys delivered!");

    console.log("Selling the toy...");
    await mySetTimeout(1000);
    console.log("Toy sold!");

    console.log("Process complete!");
  } catch (error) {
    console.error("Process failed:", error.message);
  }
}

toyShopProcess();
