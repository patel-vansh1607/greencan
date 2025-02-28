lucide.createIcons();

// Segment switching functionality
const segmentButtons = document.querySelectorAll(".segment-button");
const segments = document.querySelectorAll(".pricing-segment");

segmentButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Update buttons
    segmentButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    // Update segments
    const targetSegment = button.dataset.segment;
    segments.forEach((segment) => {
      segment.classList.remove("active");
      if (segment.id === `${targetSegment}-plans`) {
        segment.classList.add("active");
      }
    });
  });
});
