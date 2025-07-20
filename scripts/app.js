// Wait until the page fully loads before running our code
document.addEventListener('DOMContentLoaded', () => {
  
  // Grab the "Add to Cart" button
  const addToCartBtn = document.querySelector('.add-to-cart');
  
  // When clicked, show our beautiful notification
  addToCartBtn.addEventListener('click', () => {
    showNotification('🎉 Item added to cart!');
  });

});

// Creates and shows a notification
function showNotification(message) {
  // Create the notification container
  const notification = document.createElement('div');
  notification.className = 'notification';
  
  // Fill it with content (notice no &times; in HTML)
  notification.innerHTML = `
    <div class="notification-content">
      <svg class="notification-icon" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
      <span>${message}</span>
      <button class="close-btn" aria-label="Close"></button>
    </div>
  `;
  
  // Add it to the page
  document.body.appendChild(notification);
  
  // Trigger the show animation
  setTimeout(() => notification.classList.add('show'), 10);
  
  // Make the close button work
  const closeBtn = notification.querySelector('.close-btn');
  closeBtn.addEventListener('click', () => {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 300);
  });
  
  // Auto-close after 5 seconds (optional)
  setTimeout(() => {
    if (notification.isConnected) { // Check if still in DOM
      notification.classList.remove('show');
      setTimeout(() => notification.remove(), 300);
    }
  }, 5000);
}
