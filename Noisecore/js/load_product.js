function loadProducts() {
  fetch("data/products.json")
    .then((response) => response.json())
    .then((data) => {
      const gallery = document.getElementById("product-gallery");
      const filterSelect = document.querySelector(".filter-category");
      const searchInput = document.querySelector(".search-bar");

      function render(products) {
        gallery.innerHTML = "";
        products.forEach((product) => {
          gallery.innerHTML += `
            <div class="product-card" data-category="${product.category}">
              <img src="${product.image}" alt="${product.name}" />
              <h3>${product.name}</h3>
              <p>${product.rating}</p>
              <p>${product.price}</p>
            </div>
          `;
        });
      }

      function applyFilters() {
        const selectedCategory = filterSelect.value;
        const searchTerm = searchInput.value.toLowerCase();

        const filtered = data.filter((product) => {
          const matchesCategory = selectedCategory === "" || product.category === selectedCategory;
          const matchesSearch = product.name.toLowerCase().includes(searchTerm);
          return matchesCategory && matchesSearch;
        });

        render(filtered);
      }

      render(data);

      filterSelect.addEventListener("change", applyFilters);
      searchInput.addEventListener("input", applyFilters);
    });
}

document.addEventListener("DOMContentLoaded", loadProducts);
