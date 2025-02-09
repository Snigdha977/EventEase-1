document.addEventListener("DOMContentLoaded", function () {
  // Select all countdown timer elements.
  const countdownElements = document.querySelectorAll(
    ".countdown-timer"
  );

  // Function to update a single countdown timer.
  const updateTimer = (timerElement, targetDate) => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // If the countdown is over, display an expired message.
    if (distance < 0) {
      timerElement.querySelector(".timer").innerText =
        "Event has started or expired!";
      return false; // Signal to stop the interval.
    }

    // Time calculations for days, hours, minutes, and seconds.
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (distance % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update the HTML with the calculated values.
    timerElement.querySelector(".days").innerText = days;
    timerElement.querySelector(".hours").innerText = hours;
    timerElement.querySelector(".minutes").innerText = minutes;
    timerElement.querySelector(".seconds").innerText = seconds;

    return true;
  };

  // Loop through each countdown timer element.
  countdownElements.forEach((timerElement) => {
    // Get the target date from the data attribute.
    const targetDateStr = timerElement.getAttribute("data-target");
    const targetDate = new Date(targetDateStr).getTime();

    // Immediately update the timer.
    updateTimer(timerElement, targetDate);

    // Set interval to update timer every second.
    const intervalId = setInterval(() => {
      const active = updateTimer(timerElement, targetDate);
      if (!active) clearInterval(intervalId);
    }, 1000);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Initial page value and total number of numeric pages.
  let currentPage = 1;
  const paginationContainer = document.querySelector(".pagination");
  const prevBtn = paginationContainer.querySelector("li:first-child");
  const nextBtn = paginationContainer.querySelector("li:last-child");
  // Numeric page items are those in between Previous and Next.
  const pageItems = Array.from(
    paginationContainer.querySelectorAll("li.page-item:not(:first-child):not(:last-child)")
  );
  const totalPages = pageItems.length;

  // Function to update the active page and disable buttons as needed.
  function updatePagination() {
    pageItems.forEach((item) => {
      // The page number is contained in the link text.
      const pageNum = parseInt(item.textContent.trim());
      if (pageNum === currentPage) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });

    // Disable "Previous" if on the first page.
    if (currentPage === 1) {
      prevBtn.classList.add("disabled");
    } else {
      prevBtn.classList.remove("disabled");
    }

    // Disable "Next" if on the last page.
    if (currentPage === totalPages) {
      nextBtn.classList.add("disabled");
    } else {
      nextBtn.classList.remove("disabled");
    }
  }

  // Set up click event for numeric page items.
  pageItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      // Read the number from the link text.
      currentPage = parseInt(this.textContent.trim());
      updatePagination();

      // Place your code here to load or change the page content.
      console.log("Page changed to:", currentPage);
    });
  });

  // Event listener for the Previous button.
  prevBtn.querySelector("a.page-link").addEventListener("click", function (e) {
    e.preventDefault();
    if (currentPage > 1) {
      currentPage--;
      updatePagination();
      // Place your code here to load or change the page content.
      console.log("Page changed to:", currentPage);
    }
  });

  // Event listener for the Next button.
  nextBtn.querySelector("a.page-link").addEventListener("click", function (e) {
    e.preventDefault();
    if (currentPage < totalPages) {
      currentPage++;
      updatePagination();
      // Place your code here to load or change the page content.
      console.log("Page changed to:", currentPage);
    }
  });

  // Initialize the pagination for the first time.
  updatePagination();
});


document.addEventListener("DOMContentLoaded", function () {
  const rsvpForm = document.getElementById("rsvpForm");

  rsvpForm.addEventListener("submit", function (e) {
    e.preventDefault();
    
    // Get form data.
    const name = document.getElementById("userName").value;
    const email = document.getElementById("userEmail").value;
    const message = document.getElementById("userMessage").value;
    
    // Simple validation for required fields.
    if (!name.trim() || !email.trim()) {
      alert("Please fill out your name and email.");
      return;
    }
    
    // Simulated submission process.
    // Replace this part with an actual API call or AJAX request if needed.
    console.log("RSVP registration submitted:", { name, email, message });
    
    // Close the modal using Bootstrap's modal instance.
    const modalElement = document.getElementById("rsvpModal");
    const modalInstance = bootstrap.Modal.getInstance(modalElement);
    if (modalInstance) {
      modalInstance.hide();
    } else {
      new bootstrap.Modal(modalElement).hide();
    }
    
    // Show a confirmation message.
    alert("Thank you for registering for the event!");
    
    // Reset the form.
    rsvpForm.reset();
  });
});
