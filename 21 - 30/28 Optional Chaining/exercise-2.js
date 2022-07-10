const order = {
    address: {
      city: "ciao",
    }
};

if (typeof order.customer?.address?.city === "undefined") {
  console.log("City is required");
}
