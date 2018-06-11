// Initialization
dataLayer = [];

// Dumb logic, replace with something more reactive
if (window.location.href.indexOf("/product/") !== -1) {
    // TODO: figure out how to pull in these variables from Big Cartel
    dataLayer.push({
        price_unit: "USD",
        price_value: 0,
        product_id: "abc",
        product_name: "abc shirt",
        product_categories: ["tee shirts"]
    });
}