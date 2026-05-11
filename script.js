const siteContent = {
  registryProducts: [
    {
      title: "Crate & Barrel Registry",
      price: "Follow Link",
      category: "Assorted",
      description:
        "Click the link to see what we have listed on our Crate & Barrel Registry",
      link: "https://www.crateandbarrel.com/gift-registry/dolly-michele-and-brennan-diedrich/r7555011",
    },
    {
      title: "West Elm Registry",
      price: "Follow Link",
      category: "Assorted",
      description:
        "Click the link to see what we have listed on our West Elm Registry",
      link: "https://www.westelm.com/registry/28wbgvmhws/registry-list.html",
    },
    {
      title: "Smart Indoor Hydroponic Garden",
      price: "$899",
      category: "Plants",
      description:
        "The only smart indoor hydroponic garden that grows 30 fresh vegetables, herbs, and greens in 2 sq ft. 24/7 plant monitoring and automated watering and lighting keep them thriving.",
      link: "https://mygardyn.com/product/gardyn-home-kit/?utm_source=google&utm_medium=cpc&utm_campaign=&utm_id=23682332535&utm_term=&utm_content=&nbt=nb%3Aadwords%3Ax%3A23682332535%3A%3A&nb_adtype=pla&nb_kwd=&nb_ti=&nb_mi=277479155&nb_pc=online&nb_pi=lniyzqjr&nb_ppi=&nb_placement=&nb_li_ms=&nb_lp_ms=&nb_fii=&nb_ap=&nb_mt=&utm_term=&utm_campaign=US_PMax_HM&utm_source=adwords&utm_medium=ppc&hsa_acc=2604927837&hsa_cam=23682332535&hsa_grp=&hsa_ad=&hsa_src=x&hsa_tgt=&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gad_source=1&gad_campaignid=23692433272&gbraid=0AAAAACakiZ8B3YKjv2wpl5frWW8-D4ebU",
    },
    {
      title: "Floor Lamp",
      price: "$155",
      category: "Home-Decor",
      description:
        "When a room calls for understated modernism, this floor lamp answers with the perfect balance of minimalism and statement-making design. The energy-efficient built-in LEDs cast a warm glow from the slim line bar base. Finished with a classic silk-wrapped cord, as beautiful displayed as hidden.",
      link: "https://www.allmodern.com/AllModern--Juaquin-59.5-LED-Novelty-Floor-Lamp-X116172449-L6238-K~ORNL1552.html",
    },
  ],
  cashFunds: [
    {
      title: "Honeymoon Fund",
      amount: "Any amount",
      description:
        "Help us create unforgettable moments on our honeymoon, from special dinners to excursions. (This will open a paypal link)",
      link: "https://www.paypal.com/paypalme/BMwedding2027",
    },
    {
      title: "Home Sweet Home Fund",
      amount: "Any amount",
      description:
        "Contribute toward the finishing touches that will help us make our home warm and welcoming.(This will open a paypal link)",
      link: "https://www.paypal.com/paypalme/BMwedding2027",
    },
  ],
  faqs: [
    {
      question: "Can I bring a plus-one?",
      answer:
        "We are unable to accommodate additional guests. Each attendee has been accounted for specifically, and all invitations are being sent individually.",
    },
    {
      question: "What should I wear?",
      answer:
        "Both events on July 6th are black tie events. The traditional african ceremony is on July 7th. See our personal designer's instagram @draempstudios for attire ideas, and contact him to purchase custom attire +234 807 915 0726.",
    },
    {
      question: "Are children invited?",
      answer:
        "If they are not listed on the invitation, they are not included. Please contact us if you believe this is an error",
    },
    {
      question: "When should I RSVP by?",
      answer:
        "For those requiring accommodation, RSVP and payment are due by April 1, 2027. All other guests must RSVP by May 15, 2027.",
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
