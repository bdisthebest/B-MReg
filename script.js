const siteContent = {
  registryProducts: [
    {
      title: "Stoneware Dinnerware Set",
      price: "$185",
      category: "Dining",
      description:
        "A timeless everyday dinnerware set for cozy weeknight meals and celebration dinners alike.",
      link: "https://example.com/stoneware-dinnerware-set",
    },
    {
      title: "Linen Bedding Bundle",
      price: "$240",
      category: "Home",
      description:
        "A soft, breathable bedding upgrade that makes the bedroom feel calm, warm, and inviting.",
      link: "https://example.com/linen-bedding-bundle",
    },
    {
      title: "Espresso Machine",
      price: "$329",
      category: "Kitchen",
      description:
        "A coffee-bar favorite for slow weekend mornings and hosting friends after dinner.",
      link: "https://example.com/espresso-machine",
    },
    {
      title: "Carry-On Luggage Set",
      price: "$210",
      category: "Travel",
      description:
        "A sleek travel set that is perfect for honeymoon flights and future getaways together.",
      link: "https://example.com/carry-on-luggage-set",
    },
    {
      title: "Dutch Oven",
      price: "$160",
      category: "Kitchen",
      description:
        "A versatile kitchen staple for comforting meals, celebrations, and everything in between.",
      link: "https://example.com/dutch-oven",
    },
    {
      title: "Patio String Lights",
      price: "$74",
      category: "Outdoor",
      description:
        "Soft lighting to help turn outdoor dinners and late-night conversations into favorite memories.",
      link: "https://example.com/patio-string-lights",
    },
  ],
  cashFunds: [
    {
      title: "Honeymoon Fund",
      amount: "Any amount",
      description:
        "Help us create unforgettable moments on our honeymoon, from special dinners to excursions. (This will open a paypal link)",
      link: "https://example.com/patio-string-lights",
    },
    {
      title: "Home Sweet Home Fund",
      amount: "Any amount",
      description:
        "Contribute toward the finishing touches that will help us make our home warm and welcoming.(This will open a paypal link)",
      link: "https://example.com/patio-string-lights",
    },
  ],
  faqs: [
    {
      question: "Can I bring a plus-one?",
      answer:
        "Short answer, no. Your invitation delineates most expected plus ones by name.",
    },
    {
      question: "What should I wear?",
      answer:
        "Both events on July 6th are black tie events. The traditional african ceremony is on July 7th. See our personal designer's instagram @draempstudios for attire ideas, and contact him to purchase custom attire +234 807 915 0726.",
    },
    {
      question: "Are children invited?",
      answer:
        "If they were not included on the invitation, they are generally not invited. If you feel this is an error, please reach out to us.",
    },
    {
      question: "When should I RSVP by?",
      answer:
        "If you are wanting accomdation, RSVP and payment is required by April 1st 2027. If no accomodation is required, RSVP is by May 15th 2027",
    },
  ],
};

const tabButtons = Array.from(document.querySelectorAll("[data-tab-target]"));
const tabPanels = Array.from(document.querySelectorAll("[data-tab-panel]"));
const revealItems = Array.from(document.querySelectorAll(".reveal"));
const registryContainer = document.querySelector("#registry-products");
const fundContainer = document.querySelector("#cash-funds");
const faqContainer = document.querySelector("#faq-list");
const rsvpForm = document.querySelector("[data-rsvp-form]");
const rsvpStatus = document.querySelector("[data-rsvp-status]");
const attendanceInputs = Array.from(document.querySelectorAll('input[name="attendance"]'));
const guestCountInput = document.querySelector("#guest-count");
const mealChoiceInput = document.querySelector("#meal-choice");

function renderRegistry() {
  registryContainer.innerHTML = siteContent.registryProducts
    .map(
      (item) => `
        <article class="registry-card">
          <div class="price-row">
            <span class="tag">${item.category}</span>
            <span class="price-value">${item.price}</span>
          </div>
          <div>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
          </div>
          <a class="card-link" href="${item.link}" target="_blank" rel="noreferrer">View Gift</a>
        </article>
      `,
    )
    .join("");

  fundContainer.innerHTML = siteContent.cashFunds
    .map(
      (fund) => `
        <article class="fund-card">
          <div class="fund-row">
            <span class="tag">Cash Fund</span>
            <span class="fund-value">${fund.amount}</span>
          </div>
          <div>
            <h3>${fund.title}</h3>
            <p>${fund.description}</p>
          </div>
          <a class="card-link" href="${fund.link}" target="_blank" rel="noreferrer">Contribute</a>
        </article>
      `,
    )
    .join("");
}

function renderFaqs() {
  faqContainer.innerHTML = siteContent.faqs
    .map(
      (item, index) => `
        <article class="faq-item">
          <button
            class="faq-trigger"
            type="button"
            aria-expanded="${index === 0 ? "true" : "false"}"
            aria-controls="faq-answer-${index}"
            id="faq-trigger-${index}"
          >
            <span class="faq-question">${item.question}</span>
            <span class="faq-icon">+</span>
          </button>
          <div
            class="faq-answer"
            id="faq-answer-${index}"
            role="region"
            aria-labelledby="faq-trigger-${index}"
            ${index === 0 ? "" : "hidden"}
          >
            <p>${item.answer}</p>
          </div>
        </article>
      `,
    )
    .join("");

  const triggers = Array.from(document.querySelectorAll(".faq-trigger"));

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const expanded = trigger.getAttribute("aria-expanded") === "true";
      const answer = document.getElementById(trigger.getAttribute("aria-controls"));

      trigger.setAttribute("aria-expanded", String(!expanded));
      answer.hidden = expanded;
    });
  });
}

function activateTab(tabName, updateHash = true) {
  tabButtons.forEach((button) => {
    const isActive = button.dataset.tabTarget === tabName;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  tabPanels.forEach((panel) => {
    const isActive = panel.dataset.tabPanel === tabName;
    panel.hidden = !isActive;
    panel.classList.toggle("active", isActive);
  });

  if (updateHash) {
    history.replaceState(null, "", `#${tabName}`);
  }
}

function syncAttendanceFields() {
  const selectedAttendance = attendanceInputs.find((input) => input.checked)?.value;
  const attending = selectedAttendance !== "Regretfully Declines";

  guestCountInput.disabled = !attending;
  mealChoiceInput.disabled = !attending;

  if (!attending) {
    guestCountInput.value = "1";
    mealChoiceInput.value = "Chicken";
  }
}

function handleRsvpSubmit(event) {
  event.preventDefault();

  const formData = new FormData(rsvpForm);
  const attendance = formData.get("attendance");
  const guestName = formData.get("guestName");
  const guestEmail = formData.get("guestEmail");
  const guestCount = formData.get("guestCount");
  const mealChoice = formData.get("mealChoice");
  const guestMessage = formData.get("guestMessage") || "No additional message.";
  const recipientEmail = rsvpForm.dataset.rsvpEmail;

  const lines = [
    `Name: ${guestName}`,
    `Email: ${guestEmail}`,
    `Attendance: ${attendance}`,
    `Guest Count: ${attendance === "Regretfully Declines" ? "Not attending" : guestCount}`,
    `Meal Choice: ${attendance === "Regretfully Declines" ? "Not applicable" : mealChoice}`,
    "",
    "Message:",
    guestMessage,
  ];

  const subject = encodeURIComponent(`Wedding RSVP from ${guestName}`);
  const body = encodeURIComponent(lines.join("\n"));

  rsvpStatus.textContent = "Opening your email app with a prefilled RSVP draft.";
  window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
}

function setupTabs() {
  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activateTab(button.dataset.tabTarget);
    });
  });

  const initialTab = window.location.hash.replace("#", "");
  const validTab = tabPanels.some((panel) => panel.dataset.tabPanel === initialTab) ? initialTab : "about";

  activateTab(validTab, false);

  window.addEventListener("hashchange", () => {
    const hashTab = window.location.hash.replace("#", "");
    if (tabPanels.some((panel) => panel.dataset.tabPanel === hashTab)) {
      activateTab(hashTab, false);
    }
  });
}

function setupRevealAnimations() {
  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 },
  );

  revealItems.forEach((item) => observer.observe(item));
}

renderRegistry();
renderFaqs();
setupTabs();
setupRevealAnimations();

attendanceInputs.forEach((input) => input.addEventListener("change", syncAttendanceFields));
rsvpForm.addEventListener("submit", handleRsvpSubmit);
syncAttendanceFields();
