function openPopup(popupId) {
    document.getElementById(popupId).style.display = 'flex';
  }
  
  function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
  }
  
  function showDetails(plan) {
    const details = document.getElementById("details");
    const title = document.getElementById("plan-title");
    const description = document.getElementById("plan-description");
    details.style.display = "block";

    const plans = {
        daily: { title: "Daily Pickup", description: "Unlimited pickups, free sorting bag, and flexible scheduling." },
        weekly: { title: "Weekly Pickup", description: "4 pickups per month, priority scheduling, and discounts on extras." },
        monthly: { title: "Monthly Pickup", description: "1 pickup per month, free waste audit, and 10% off extra pickups." },
        yearly: { title: "Yearly Pickup", description: "12 pickups per year, free eco-friendly bins, and exclusive discounts." }
    };

    title.innerText = plans[plan].title;
    description.innerText = plans[plan].description;
}