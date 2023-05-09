const listOfCategories = document.querySelector("#categories");
const items = listOfCategories.querySelectorAll(".item");

console.log(`Number of categories: ${items.length}`);

items.forEach((item) => {
  const nameOfCategory = item.querySelector("h2").textContent;
  const elementsOfCategory = item.querySelectorAll("li").length;
  console.log(`Category: ${nameOfCategory}`);
  console.log(`Elements: ${elementsOfCategory}`);
});
