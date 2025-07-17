

// Function to open a certificate image

  function toggleImage(link) {
    const imgId = link.getAttribute("data-target");
    const img = document.getElementById(imgId);
    if (img.style.display === "none") {
      img.style.display = "block";
      link.textContent = "Hide Certificate";
    } else {
      img.style.display = "none";
      link.textContent = "View Certificate";
    }
  }


function openTab(evt, tabName) {
    const tabcontents = document.getElementsByClassName("tab-contents");
    const tablinks = document.getElementsByClassName("tab-links");

    // Hide all tab contents
    for (let i = 0; i < tabcontents.length; i++) {
        tabcontents[i].style.display = "none";
        tabcontents[i].classList.remove("active-tab");
    }

    // Remove active class from all tab links
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-link");
      }

        // Show current tab and highlight link
      document.getElementById(tabName).style.display = "block";
      evt.currentTarget.classList.add("active-link");
    }

    // burger menu toggle
     function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    const menuIcon = document.getElementById("menuIcon").querySelector("i");

    navLinks.classList.toggle("active");
    overlay.classList.toggle("active");

    // Lock or unlock body scroll
  document.body.style.overflow = navLinks.classList.contains("active") ? "hidden" : "auto";


    // Toggle icon between bars and X
    if (navLinks.classList.contains("active")) {
      menuIcon.classList.remove("fa-bars");
      menuIcon.classList.add("fa-xmark");
    } else {
      menuIcon.classList.remove("fa-xmark");
      menuIcon.classList.add("fa-bars");
    }
  }

  function openStealAndStealth(imageElement) {
  const overlay = document.getElementById('imageOverlay');

  // Clear previous content
  overlay.innerHTML = '';

  // Create zoomed image
  const zoomedImage = document.createElement('img');
  zoomedImage.src = imageElement.src;
  zoomedImage.alt = imageElement.alt;

  // Create close (X) button
  const closeBtn = document.createElement('span');
  closeBtn.classList.add('close-btn');
  closeBtn.innerHTML = '&times;'; // HTML entity for ×
  closeBtn.onclick = () => closeOverlay();

  // Add image and close button to overlay
  overlay.appendChild(closeBtn);
  overlay.appendChild(zoomedImage);

  // Show overlay
  overlay.classList.remove('hidden');

  // Lock scroll
  document.body.style.overflow = 'hidden';

  // Optional: close on clicking outside image
  overlay.onclick = (e) => {
    if (e.target === overlay) {
      closeOverlay();
    }
  };

  function closeOverlay() {
    overlay.classList.add('hidden');
    document.body.style.overflow = 'auto'; // Unlock scroll
  }
}

   // For Symposium Project images
  function openSymposiumImage(imageElement) {
    const overlay = document.getElementById('sympImageOverlay');

    // Clear previous content
    overlay.innerHTML = '';

    // Create a zoomed version of the image
    const zoomedImage = document.createElement('img');
    zoomedImage.src = imageElement.src;
    zoomedImage.alt = imageElement.alt;

    // Create close (X) button
  const closeBtn = document.createElement('span');
  closeBtn.classList.add('close-btn');
  closeBtn.innerHTML = '&times;'; // HTML entity for ×
  closeBtn.onclick = () => closeOverlay();

    // Add image and close button to overlay
  overlay.appendChild(closeBtn);
  overlay.appendChild(zoomedImage);

    // Show overlay
    overlay.classList.remove('hidden');

    // Lock scroll
  document.body.style.overflow = 'hidden';

    // Optional: close on clicking outside image
  overlay.onclick = (e) => {
    if (e.target === overlay) {
      closeOverlay();
    }
  };

  function closeOverlay() {
    overlay.classList.add('hidden');
    document.body.style.overflow = 'auto'; // Unlock scroll
  }
}
  

  
