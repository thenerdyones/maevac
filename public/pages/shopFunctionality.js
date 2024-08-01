// Array to store product descriptions (index 0 corresponds to product 1, index 1 to product 2, and so on)
const productDescriptions = [
  "SKU VLS6247-018 Quality: 100% printed cotton. Length: 6 yards = 5,48 meter. Width: 1,20 meter. Finish: Embellished.",
  "SKU VLS6247-017 Quality: 100% printed cotton. Length: 6 yards = 5,48 meter. Width: 1,20 meter. Finish: Embellished.",
  "SKU VLS6247-016 Quality: 100% printed cotton. Length: 6 yards = 5,48 meter. Width: 1,20 meter. Finish: Embellished.",
  "SKU VLS6247-015 Quality: 100% printed cotton. Length: 6 yards = 5,48 meter. Width: 1,20 meter. Finish: Embellished.",
  "SKU VLS6247-012 Quality: 100% printed cotton. Length: 6 yards = 5,48 meter. Width: 1,20 meter. Finish: Embellished.",
  "SKU VLS6247-014 Quality: 100% printed cotton. Length: 6 yards = 5,48 meter. Width: 1,20 meter. Finish: Embellished.",
  "SKU VLS6247-010 Quality: 100% printed cotton. Length: 6 yards = 5,48 meter. Width: 1,20 meter. Finish: Embellished.",
  "SKU VLS6247-034 Quality: 100% printed cotton. Length: 6 yards = 5,48 meter. Width: 1,20 meter. Finish: Embellished.",
  "SKU VLS6247-118 Quality: 100% printed cotton. Length: 6 yards = 5,48 meter. Width: 1,20 meter. Finish: Embellished.",
  "SKU VLS6247-133 Quality: 100% printed cotton. Length: 6 yards = 5,48 meter. Width: 1,20 meter. Finish: Embellished.",
  "SKU VLS6247-218 Quality: 100% printed cotton. Length: 6 yards = 5,48 meter. Width: 1,20 meter. Finish: Embellished.",
  "SKU VLS6247-038 Quality: 100% printed cotton. Length: 6 yards = 5,48 meter. Width: 1,20 meter. Known as Ongles de Marie Therese",
  // Add more descriptions for other products as needed
];

const productImages = [
  ["../assets/images/product_images/product1-image1.jpg"],
  ["../assets/images/product_images/product2-image1.jpg"],
  ["../assets/images/product_images/product3-image1.jpg"],
  ["../assets/images/product_images/product4-image1.jpg"],
  ["../assets/images/product_images/product5-image1.jpg"],
  ["../assets/images/product_images/product6-image1.jpg"],
  ["../assets/images/product_images/product7-image1.jpg"],
  ["../assets/images/product_images/product8-image1.jpg"],
  ["../assets/images/product_images/product9-image1.jpg"],
  ["../assets/images/product_images/product10-image1.jpg"],
  ["../assets/images/product_images/product11-image1.jpg"],
  ["../assets/images/product_images/product12-image1.jpg"],
  // Add more image paths for other products as needed
];

document.addEventListener("DOMContentLoaded", function () {
  const productContainers = document.querySelectorAll("[class^='product']");

  productContainers.forEach((container) => {
    const productId = container.classList[0].replace("product", ""); // Extract product number

    // Attach click event listener to show modal
    container.addEventListener("click", () => {
      const modal = document.getElementById("productModal");
      const modalContentContainer = document.getElementById("modalContent");

      // Dynamically fetch and display images in the modal
      displayImages(productId, modalContentContainer);

      modal.classList.remove("hidden");
      modal.classList.add("flex");

      // Toggle overlay visibility
      overlay.classList.toggle("hidden");

      // Update Modal Content
      const modalContent = generateModalContent(productId);
      modalContentContainer.innerHTML = modalContent;

      // Attach event listeners for modal elements (e.g., close button)
      attachModalEventListeners();
    });
  });

  function generateModalContent(productId) {
    // Retrieve product description from the array based on productId
    const productDescription = productDescriptions[productId - 1];
    // Retrieve product images from the array based on productId
    const productImagePaths = productImages[productId - 1];

    // Create an image tag for the main image
    const mainImageTag = `<img id="mainImage-${productId}" src="${productImagePaths[0]}" alt="Product ${productId} Image" class="object-cover mb-4">`;

    // For now, a placeholder content is shown
    return `
      <h2 id="productName" class="text-xl font-semibold mb-2">Product ${productId}</h2>
      <div class="flex">
        <div class="flex-col">
          ${mainImageTag}
        </div>
        <div class="flex-col ml-4">
          <p id="productDescription" class="text-gray-600 mb-4">${productDescription}</p>
          <div class="flex-col md:flex">
            <button id="requestQuoteBtn" class="bg-primary text-white px-4 py-2 rounded hover:bg-transparent hover:text-primary border border-primary transition">Request a Quote</button>
            <button id="closeModalBtn" class="mt-2 text-gray-600 hover:text-red-500">Close</button>
          </div>
        </div>
      </div>
    `;
  }

  function attachModalEventListeners() {
    document
      .getElementById("closeModalBtn")
      .addEventListener("click", closeModal);
    document
      .getElementById("requestQuoteBtn")
      .addEventListener("click", requestQuote);
  }

  function displayImages(productId, container) {
    // Make the image container visible
    container.classList.remove("hidden");
  }

  function closeModal() {
    const modal = document.getElementById("productModal");
    const overlay = document.getElementById("overlay");
    modal.classList.remove("flex");
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  }

  function requestQuote() {
    // Redirect to the contactUs.html page
    window.location.href = "../pages/contactUs.html";
  }
});
