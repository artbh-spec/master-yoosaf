/**
 * SITE CONFIG
 * Edit contact behavior and the optional gallery here.
 * Name, rank, roles, and the biography are also written in index.html
 * so they remain readable when JavaScript is unavailable.
 *
 * PHONE
 * Confirmed international number: +973 35313206.
 * countryCallingCode is digits only. countryCodeVerified enables
 * WhatsApp and the +973 telephone links.
 */
const SITE = {
  fullName: "MASTER MOHAMED YOOSAF M.V",
  title: "Taekwondo Master",
  phone: {
    display: "+973 35313206",
    nationalNumber: "35313206",
    countryCallingCode: "973",
    countryCodeVerified: true
  },
  email: "mohmaedyoosafm.v@gmail.com",
  instagram: {
    handle: "@yoosafashraf",
    url: "https://www.instagram.com/yoosafashraf/"
  },
  enquiryMessage: "Hello Master Mohamed Yoosaf M.V, I would like to enquire about training.",
  shareText: "Master Mohamed Yoosaf M.V — 4th Dan Black Belt and Senior Taekwondo Instructor.",
  vcardNote: "4th Dan Black Belt. National Player. National Referee. Senior Taekwondo Instructor. 15 years of Taekwondo experience. Coached 10-20 students for the Kerala State Team. 40 students advanced to Black Belt. National Best Referee Award holder. Kerala State Gold Medalist. Excellent Taekwondo Academy, Bahrain.",
  vcardFilename: "Master-Mohamed-Yoosaf-MV.vcf",
  /**
   * Real photographs only. Leave this empty to keep the gallery hidden.
   * Example:
   * { src: "assets/gallery/coaching.jpg", alt: "Master Mohamed Yoosaf M.V coaching.", caption: "Coaching", width: 1200, height: 900 }
   */
  gallery: []
};

function digitsOnly(value) {
  return String(value || "").replace(/\D/g, "");
}

function internationalDigits() {
  const phone = SITE.phone || {};
  const code = digitsOnly(phone.countryCallingCode).replace(/^0+/, "");
  const national = digitsOnly(phone.nationalNumber);
  if (!phone.countryCodeVerified || !code || !national) return "";
  return code + national;
}

function telHref() {
  const intl = internationalDigits();
  if (intl) return "tel:+" + intl;
  return "tel:" + digitsOnly(SITE.phone.nationalNumber);
}

function escapeVCard(value) {
  return String(value)
    .replace(/\\/g, "\\\\")
    .replace(/\r\n|\n|\r/g, "\\n")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,");
}

function foldLine(line) {
  const limit = 75;
  if (line.length <= limit) return line;
  let result = "";
  let index = 0;
  let size = limit;
  while (index < line.length) {
    if (result.length > 0) result += "\r\n ";
    const take = Math.min(size, line.length - index);
    result += line.slice(index, index + take);
    index += take;
    size = limit - 1;
  }
  return result;
}

function buildVCard() {
  const intl = internationalDigits();
  const tel = intl ? "+" + intl : digitsOnly(SITE.phone.nationalNumber);
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "N:;" + escapeVCard(SITE.fullName) + ";;;",
    "FN:" + escapeVCard(SITE.fullName),
    "TITLE:" + escapeVCard(SITE.title),
    "ROLE:Senior Taekwondo Instructor",
    "TEL;TYPE=CELL:" + escapeVCard(tel),
    "EMAIL;TYPE=INTERNET:" + escapeVCard(SITE.email),
    "URL:" + escapeVCard(window.location.href),
    "NOTE:" + escapeVCard(SITE.vcardNote),
    "END:VCARD"
  ];
  return lines.map(foldLine).join("\r\n") + "\r\n";
}

function saveContact(event) {
  event.preventDefault();
  try {
    const card = buildVCard();
    const blob = new Blob([card], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = SITE.vcardFilename || "contact.vcf";
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(function () {
      URL.revokeObjectURL(url);
    }, 1500);
  } catch (error) {
    const fallback = event.currentTarget.getAttribute("href") || "contact.vcf";
    window.location.href = fallback;
  }
}

function applyContact() {
  const phoneText = SITE.phone.display;
  const email = SITE.email;
  const intl = internationalDigits();
  const dialLabel = intl ? "+" + intl : phoneText;

  document.querySelectorAll("[data-phone-text]").forEach(function (el) {
    el.textContent = phoneText;
  });

  document.querySelectorAll("[data-email-text]").forEach(function (el) {
    el.textContent = email;
  });

  document.querySelectorAll("[data-tel]").forEach(function (el) {
    el.href = telHref();
    if (!el.hasAttribute("data-phone-text")) {
      el.setAttribute("aria-label", "Call " + dialLabel);
    }
  });

  document.querySelectorAll("[data-mail]").forEach(function (el) {
    el.href = "mailto:" + email;
    if (!el.hasAttribute("data-email-text")) {
      el.setAttribute("aria-label", "Email " + email);
    }
  });

  document.querySelectorAll("[data-whatsapp]").forEach(function (el) {
    if (!intl) {
      el.hidden = true;
      el.removeAttribute("href");
      return;
    }
    el.href = "https://wa.me/" + intl;
    el.target = "_blank";
    el.rel = "noopener noreferrer";
    if (!el.hasAttribute("data-phone-text")) {
      el.setAttribute("aria-label", "WhatsApp " + dialLabel);
    }
    el.hidden = false;
  });

  document.querySelectorAll("[data-enquiry]").forEach(function (el) {
    if (!intl) {
      el.hidden = true;
      return;
    }
    const message = el.getAttribute("data-enquiry") || SITE.enquiryMessage;
    el.href = "https://wa.me/" + intl + "?text=" + encodeURIComponent(message);
    el.target = "_blank";
    el.rel = "noopener noreferrer";
    el.hidden = false;
  });

  document.querySelectorAll("[data-instagram]").forEach(function (el) {
    if (!SITE.instagram || !SITE.instagram.url) return;
    el.href = SITE.instagram.url;
    el.target = "_blank";
    el.rel = "noopener noreferrer";
    if (el.hasAttribute("data-instagram-text")) {
      el.textContent = SITE.instagram.handle;
    }
  });

  document.querySelectorAll("[data-quick-actions]").forEach(function (row) {
    const visible = row.querySelectorAll("a:not([hidden]), button:not([hidden])").length;
    row.classList.toggle("is-trio", visible >= 3);
  });

  document.querySelectorAll("[data-share]").forEach(function (el) {
    el.hidden = false;
  });
}

function isSafeGallerySrc(src) {
  return typeof src === "string" && /^assets\/gallery\/[A-Za-z0-9._/-]+$/.test(src);
}

function renderGallery() {
  const section = document.querySelector("[data-gallery]");
  if (!section) return;
  const items = (Array.isArray(SITE.gallery) ? SITE.gallery : []).filter(function (item) {
    return item && isSafeGallerySrc(item.src);
  });
  if (!items.length) {
    section.hidden = true;
    return;
  }
  const list = section.querySelector("[data-gallery-list]");
  if (!list) return;
  list.replaceChildren();
  items.forEach(function (item) {
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.alt ? String(item.alt) : "Photograph of Master Mohamed Yoosaf M.V";
    img.loading = "lazy";
    img.decoding = "async";
    if (Number(item.width) > 0) img.width = Number(item.width);
    if (Number(item.height) > 0) img.height = Number(item.height);
    figure.appendChild(img);
    if (item.caption) {
      const caption = document.createElement("figcaption");
      caption.textContent = String(item.caption);
      figure.appendChild(caption);
    }
    list.appendChild(figure);
  });
  section.hidden = false;
}

let toastTimer = 0;

function announce(message) {
  const el = document.getElementById("status");
  if (!el) return;
  el.textContent = "";
  el.classList.remove("is-visible");
  window.requestAnimationFrame(function () {
    el.textContent = message;
    el.classList.add("is-visible");
  });
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(function () {
    el.classList.remove("is-visible");
  }, 2800);
}

function legacyCopy(text) {
  const area = document.createElement("textarea");
  area.value = text;
  area.setAttribute("readonly", "");
  area.style.position = "fixed";
  area.style.top = "0";
  area.style.left = "0";
  area.style.opacity = "0";
  document.body.appendChild(area);
  area.focus();
  area.select();
  area.setSelectionRange(0, text.length);
  let ok = false;
  try {
    ok = document.execCommand("copy");
  } catch (error) {
    ok = false;
  }
  area.remove();
  return ok;
}

function copyText(text) {
  const modernCopy = navigator.clipboard && window.isSecureContext
    ? navigator.clipboard.writeText(text)
    : Promise.reject(new Error("clipboard unavailable"));
  const timedCopy = Promise.race([
    modernCopy,
    new Promise(function (_, reject) {
      window.setTimeout(function () {
        reject(new Error("timeout"));
      }, 1200);
    })
  ]);
  return timedCopy.catch(function () {
    if (!legacyCopy(text)) throw new Error("copy failed");
  });
}

async function shareProfile() {
  const url = window.location.href;
  const payload = {
    title: document.title,
    text: SITE.shareText,
    url: url
  };
  if (navigator.share) {
    try {
      await navigator.share(payload);
      return;
    } catch (error) {
      if (error && error.name === "AbortError") return;
    }
  }
  try {
    await copyText(url);
    announce("Profile link copied.");
  } catch (error) {
    announce("Copy the profile link from the dialog.");
    window.prompt("Copy the profile link:", url);
  }
}

function init() {
  applyContact();
  renderGallery();
  document.querySelectorAll("[data-save-contact]").forEach(function (el) {
    el.addEventListener("click", saveContact);
  });
  document.querySelectorAll("[data-share]").forEach(function (el) {
    el.addEventListener("click", function (event) {
      event.preventDefault();
      shareProfile();
    });
  });
}

init();
