console.log("JS working");
let menu = {
  drinks: ["Water", "Tea", "Sweet Tea", "Coke", "Dr. Pepper", "Sprite"],
  entrees: [
    "Hamburger w/ Fries",
    "Grilled Cheese w/ Tater Tots",
    "Grilled Chicken w/ Veggies",
    "Chicken Fried Steak w/ Mashed Potatoes",
    "Fried Shrimp w/ Coleslaw",
    "Veggie Plate",
  ],
  desserts: ["Cheesecake", "Chocolate Cake", "Snickerdoodle Cookie"],
};

const menuItemsEl = document.getElementById("menuItems");
const menuCategoryEl = document.getElementById("menuCategory");
menuCategoryEl.onchange = menuChange;
function menuChange() {
  console.log("menuChange Start");
  const selectedValue = menuCategoryEl.value;
  if (selectedValue == "select") {
    menuItemsEl.options.length = 0;
    menuItemsEl.size = 0;
  }
  if (selectedValue == "drinks") {
    generateSelect(menu.drinks, selectedValue);
  }
  if (selectedValue == "entrees") {
    generateSelect(menu.entrees, selectedValue);
  }
  if (selectedValue == "desserts") {
    generateSelect(menu.desserts, selectedValue);
  }
  console.log("menuChange finish");
}

function generateSelect(itemsList, category) {
  console.log("generateSelect start");
  menuItemsEl.name = category;
  menuItemsEl.size = itemsList.length;
  menuItemsEl.options.length = 0;
  console.log(menuItemsEl.size);
  for (let item in itemsList) {
    const itemName = itemsList[item];
    const itemCode = itemsList[item].substring(0, 3).toLowerCase();
    const optionsEl = new Option(itemName, itemCode);
    menuItemsEl.appendChild(optionsEl);
    console.log(itemName, itemCode);
  }
}
