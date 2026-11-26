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
  shareText: "Master Mohamed Yoosaf M.V — 4th Dan Black Belt, National Player, Senior Taekwondo Instructor and Personal Trainer.",
  vcardNote: "4th Dan Black Belt. National Player. National Referee. Senior Taekwondo Instructor. Personal Trainer. Kerala Team Coach. 15 years of Taekwondo experience. 40 students advanced to Black Belt. National Best Referee Award holder. Kerala State Gold Medalist. Excellent Taekwondo Academy, Bahrain.",
  vcardFilename: "Master-Mohamed-Yoosaf-MV.vcf",
  /**
   * Real photographs only. Leave this empty to keep the gallery hidden.
   * Paths must start with assets/gallery/. group is the section heading.
   */
  gallery: [
    { group: "Recognition", src: "assets/gallery/kerala-championship-honour.jpg", alt: "Master Mohamed Yoosaf M.V receiving a plaque at the Kerala State Kiddies, Sub Junior and Open Taekwondo Championship.", caption: "Kerala State Championship honour", width: 1600, height: 1067 },
    { group: "Recognition", src: "assets/gallery/ready-stance.jpg", alt: "Master Mohamed Yoosaf M.V in a white dobok and black belt, in a ready stance.", caption: "4th Dan ready stance", width: 924, height: 1600 },

    { group: "Coaching", src: "assets/gallery/form-correction.jpg", alt: "Master Mohamed Yoosaf M.V correcting a student's arm position during class.", caption: "Correcting technique", width: 1600, height: 1200 },
    { group: "Coaching", src: "assets/gallery/stance-guidance.jpg", alt: "Master Mohamed Yoosaf M.V guiding a student's stance on the training mats.", caption: "Guiding a student's stance", width: 1600, height: 1200 },
    { group: "Coaching", src: "assets/gallery/student-bow.jpg", alt: "Master Mohamed Yoosaf M.V bowing with a student at Excellent Taekwondo Academy.", caption: "A bow with a student", width: 768, height: 1364 },
    { group: "Coaching", src: "assets/gallery/target-kick.jpg", alt: "A student kicking a target held by Master Mohamed Yoosaf M.V.", caption: "Target kick practice", width: 1600, height: 1066 },
    { group: "Coaching", src: "assets/gallery/pad-kicks.jpg", alt: "Master Mohamed Yoosaf M.V holding focus pads for a student's kick.", caption: "Pad work", width: 1244, height: 1066 },
    { group: "Coaching", src: "assets/gallery/turning-kick.jpg", alt: "Master Mohamed Yoosaf M.V coaching a student through a turning kick.", caption: "Turning kick practice", width: 1600, height: 1066 },
    { group: "Coaching", src: "assets/gallery/child-sparring.jpg", alt: "Master Mohamed Yoosaf M.V coaching two children in sparring gear.", caption: "Children's sparring", width: 1320, height: 1257 },
    { group: "Coaching", src: "assets/gallery/sparring-class.jpg", alt: "Master Mohamed Yoosaf M.V with a sparring class in chest guards at Excellent Taekwondo Academy.", caption: "Sparring class", width: 1024, height: 768 },

    { group: "Students", src: "assets/gallery/poomsae-gold.jpg", alt: "Master Mohamed Yoosaf M.V with a student holding a poomsae gold medal and certificate.", caption: "Poomsae gold medal", width: 1587, height: 1600 },
    { group: "Students", src: "assets/gallery/coach-and-student.jpg", alt: "Master Mohamed Yoosaf M.V standing with a student after training.", caption: "After training", width: 871, height: 1600 },
    { group: "Students", src: "assets/gallery/young-student.jpg", alt: "A young student in a white dobok at Excellent Taekwondo Academy.", caption: "A young student", width: 1200, height: 1600 },
    { group: "Students", src: "assets/gallery/little-students.jpg", alt: "Four young students in doboks standing together at the academy.", caption: "Children's class", width: 1600, height: 1200 },
    { group: "Students", src: "assets/gallery/championship-children.jpg", alt: "Young students with medals at the 11th Excellent Taekwondo Championship.", caption: "11th Academy Championship", width: 1227, height: 1600 },
    { group: "Students", src: "assets/gallery/belt-presentation.jpg", alt: "Master Mohamed Yoosaf M.V presenting a green belt at Excellent Taekwondo Academy.", caption: "Belt presentation", width: 1200, height: 1600 },
    { group: "Students", src: "assets/gallery/yellow-belt-certificate.jpg", alt: "Master Mohamed Yoosaf M.V presenting a yellow belt certificate.", caption: "Yellow belt certificate", width: 900, height: 1600 },
    { group: "Students", src: "assets/gallery/belt-certificates.jpg", alt: "Students holding belt promotion certificates with Master Mohamed Yoosaf M.V.", caption: "Belt promotion certificates", width: 1155, height: 1600 },
    { group: "Students", src: "assets/gallery/promotion-trophy.jpg", alt: "Master Mohamed Yoosaf M.V with students holding a promotion trophy and certificates.", caption: "Promotion trophy", width: 1600, height: 1363 },

    { group: "Competition", src: "assets/gallery/bahrain-medal-team.jpg", alt: "Master Mohamed Yoosaf M.V with medal-winning students in front of a Bahrain sign.", caption: "Medal winners in Bahrain", width: 1600, height: 1200 },
    { group: "Competition", src: "assets/gallery/bahrain-medal-line.jpg", alt: "Master Mohamed Yoosaf M.V with students showing medals at the Bahrain School Games.", caption: "Bahrain School Games", width: 1600, height: 1200 },
    { group: "Competition", src: "assets/gallery/school-games-podium.jpg", alt: "Students on the podium with medals at the 6th School Games in Bahrain.", caption: "6th School Games podium", width: 1600, height: 900 },
    { group: "Competition", src: "assets/gallery/academy-medals.jpg", alt: "Master Mohamed Yoosaf M.V with students wearing competition medals at the academy.", caption: "Competition medals", width: 1600, height: 1200 },

    { group: "Academy", src: "assets/gallery/masters-and-students.jpg", alt: "Master Mohamed Yoosaf M.V with masters and students at Excellent Taekwondo Academy.", caption: "Masters and students", width: 1486, height: 1600 },
    { group: "Academy", src: "assets/gallery/academy-families.jpg", alt: "Students, families, and instructors together at Excellent Taekwondo Academy.", caption: "Students and families", width: 1600, height: 1200 },
    { group: "Academy", src: "assets/gallery/promotion-test.jpg", alt: "A large group of students at a belt promotion test at Excellent Taekwondo Academy.", caption: "Belt promotion test", width: 1600, height: 900 },
    { group: "Academy", src: "assets/gallery/seminar-hall.jpg", alt: "Students seated in rows during a Taekwondo seminar in a large hall.", caption: "Taekwondo seminar", width: 1318, height: 1600 },
    { group: "Academy", src: "assets/gallery/with-practitioners.jpg", alt: "Master Mohamed Yoosaf M.V with two fellow practitioners at Excellent Taekwondo Academy.", caption: "With fellow practitioners", width: 1200, height: 1600 },

    { group: "Recognition", src: "assets/gallery/best-referee-award.jpg", alt: "Master Mohamed Yoosaf M.V holding the Best Referee Kyorugi award at the 32nd National Sub-Junior Taekwondo Championships in Cuttack.", caption: "Best Referee, Kyorugi", width: 1200, height: 1600 },
    { group: "Recognition", src: "assets/gallery/championship-winners-trophies.jpg", alt: "Master Mohamed Yoosaf M.V holding two winners trophies at an All Kerala Taekwondo Championship.", caption: "Winners trophies", width: 984, height: 1600 },
    { group: "Recognition", src: "assets/gallery/national-cadet-honour.jpg", alt: "Master Mohamed Yoosaf M.V receiving a plaque at the 6th National Cadet Kyorugi and Poomsae Taekwondo Championship.", caption: "National Cadet Championship honour", width: 945, height: 1600 },
    { group: "Recognition", src: "assets/gallery/kerala-state-2019.jpg", alt: "Master Mohamed Yoosaf M.V receiving an award at the 21st Kerala State Taekwondo Championship in 2019.", caption: "21st Kerala State Championship, 2019", width: 853, height: 853 },
    { group: "Recognition", src: "assets/gallery/state-junior-award.jpg", alt: "Master Mohamed Yoosaf M.V receiving an award at a State Junior and Cadet Taekwondo Championship.", caption: "State Junior and Cadet award", width: 576, height: 576 },
    { group: "Recognition", src: "assets/gallery/veterans-award.jpg", alt: "Master Mohamed Yoosaf M.V receiving an award on stage at a Veterans India state-level Taekwondo event.", caption: "Veterans state-level award", width: 648, height: 648 },
    { group: "Recognition", src: "assets/gallery/outdoor-long-stance.jpg", alt: "Master Mohamed Yoosaf M.V in a long stance outdoors, wearing a white dobok and black belt.", caption: "Long stance outdoors", width: 1284, height: 1600 },

    { group: "Coaching", src: "assets/gallery/young-student-stance.jpg", alt: "Master Mohamed Yoosaf M.V coaching a young student through a stance on the training mats.", caption: "Coaching a young student's stance", width: 1320, height: 1307 },
    { group: "Coaching", src: "assets/gallery/gear-check.jpg", alt: "Master Mohamed Yoosaf M.V checking a student's chest guard before sparring.", caption: "Checking sparring gear", width: 1032, height: 581 },
    { group: "Coaching", src: "assets/gallery/ringside-talk.jpg", alt: "Master Mohamed Yoosaf M.V speaking with an athlete in sparring gear at a competition.", caption: "Ringside coaching", width: 1200, height: 1600 },
    { group: "Coaching", src: "assets/gallery/self-defence-hold.jpg", alt: "Master Mohamed Yoosaf M.V demonstrating a hold with a young student.", caption: "A self-defence hold", width: 768, height: 1024 },

    { group: "Students", src: "assets/gallery/student-with-medal.jpg", alt: "Master Mohamed Yoosaf M.V with a student holding a competition medal.", caption: "A student with a medal", width: 768, height: 1024 },
    { group: "Students", src: "assets/gallery/children-in-line.jpg", alt: "Children standing in line during class at Excellent Taekwondo Academy.", caption: "Children's class in line", width: 1024, height: 768 },
    { group: "Students", src: "assets/gallery/children-training.jpg", alt: "Children training on the mats at Excellent Taekwondo Academy.", caption: "Children's training", width: 1024, height: 768 },
    { group: "Students", src: "assets/gallery/children-class-floor.jpg", alt: "A children's class spread across the mats at Excellent Taekwondo Academy.", caption: "Children's class", width: 1024, height: 768 },

    { group: "Competition", src: "assets/gallery/school-games-gold.jpg", alt: "A junior athlete with a gold medal beside Master Mohamed Yoosaf M.V at the 6th School Games.", caption: "Junior gold, 6th School Games", width: 898, height: 1600 },
    { group: "Competition", src: "assets/gallery/team-trophy-hall.jpg", alt: "Master Mohamed Yoosaf M.V with a team as a trophy is presented in a hall.", caption: "Team trophy presentation", width: 1320, height: 970 },
    { group: "Competition", src: "assets/gallery/medal-group.jpg", alt: "Master Mohamed Yoosaf M.V with students holding gold and silver medals.", caption: "Medal winners", width: 1098, height: 1600 },
    { group: "Competition", src: "assets/gallery/runner-up-trophy.jpg", alt: "Master Mohamed Yoosaf M.V holding a runner-up trophy from a Kerala State Open Taekwondo Championship.", caption: "Runner-up trophy", width: 1075, height: 1600 },
    { group: "Competition", src: "assets/gallery/medals-and-trophies.jpg", alt: "Athletes with medals and trophies, with Master Mohamed Yoosaf M.V among the group.", caption: "Medals and trophies", width: 1599, height: 755 },
    { group: "Competition", src: "assets/gallery/team-with-trophy.jpg", alt: "A competition team posing with a trophy in a stadium.", caption: "Championship team with the trophy", width: 1152, height: 544 },

    { group: "Academy", src: "assets/gallery/hall-conditioning.jpg", alt: "A packed training hall, with students holding a push-up position.", caption: "Conditioning in a packed hall", width: 1045, height: 1600 },
    { group: "Academy", src: "assets/gallery/students-at-attention.jpg", alt: "Students standing at attention in the Excellent Taekwondo Academy hall.", caption: "Students at attention", width: 1320, height: 933 },
    { group: "Academy", src: "assets/gallery/black-belt-line.jpg", alt: "Black belts standing in line at Excellent Taekwondo Academy.", caption: "Black belts in line", width: 1308, height: 869 },
    { group: "Academy", src: "assets/gallery/academy-black-belts.jpg", alt: "Masters and students in doboks posing at Excellent Taekwondo Academy.", caption: "Academy black belts", width: 1440, height: 957 },
    { group: "Academy", src: "assets/gallery/outdoor-squad.jpg", alt: "Students and instructors seated outdoors for an academy group photograph.", caption: "Academy squad outdoors", width: 1000, height: 446 },
    { group: "Academy", src: "assets/gallery/outdoor-academy-group.jpg", alt: "A large academy group in doboks posing outdoors.", caption: "Academy group outdoors", width: 1156, height: 651 }
  ]
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
    "ROLE:Senior Taekwondo Instructor and Personal Trainer",
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

function galleryItems() {
  return (Array.isArray(SITE.gallery) ? SITE.gallery : []).filter(function (item) {
    return item && isSafeGallerySrc(item.src);
  });
}

function galleryGroups(items) {
  const order = [];
  const map = {};
  items.forEach(function (item) {
    const name = item.group ? String(item.group) : "Photographs";
    if (!map[name]) {
      map[name] = [];
      order.push(name);
    }
    map[name].push(item);
  });
  return order.map(function (name) {
    return { name: name, items: map[name] };
  });
}

function galleryImage(item) {
  const img = document.createElement("img");
  img.src = item.src;
  img.alt = item.alt ? String(item.alt) : "Photograph of Master Mohamed Yoosaf M.V";
  img.loading = "lazy";
  img.decoding = "async";
  return img;
}

let lightboxItems = [];
let lightboxIndex = 0;
let lightboxReturn = null;

function ensureLightbox() {
  let box = document.querySelector("[data-lightbox]");
  if (box) return box;
  box = document.createElement("div");
  box.className = "lightbox";
  box.hidden = true;
  box.setAttribute("data-lightbox", "");
  box.setAttribute("role", "dialog");
  box.setAttribute("aria-modal", "true");
  box.setAttribute("aria-label", "Photograph");

  const frame = document.createElement("div");
  frame.className = "lightbox-frame";

  const img = document.createElement("img");
  img.alt = "";
  img.setAttribute("data-lightbox-img", "");

  const caption = document.createElement("p");
  caption.className = "lightbox-caption";
  caption.setAttribute("data-lightbox-caption", "");

  const close = document.createElement("button");
  close.type = "button";
  close.className = "lightbox-close";
  close.textContent = "Close";
  close.addEventListener("click", closeLightbox);

  const prev = document.createElement("button");
  prev.type = "button";
  prev.className = "lightbox-nav lightbox-prev";
  prev.setAttribute("aria-label", "Previous photograph");
  prev.textContent = "Previous";
  prev.addEventListener("click", function () {
    showLightboxAt(lightboxIndex - 1);
  });

  const next = document.createElement("button");
  next.type = "button";
  next.className = "lightbox-nav lightbox-next";
  next.setAttribute("aria-label", "Next photograph");
  next.textContent = "Next";
  next.addEventListener("click", function () {
    showLightboxAt(lightboxIndex + 1);
  });

  frame.appendChild(close);
  frame.appendChild(prev);
  frame.appendChild(img);
  frame.appendChild(next);
  frame.appendChild(caption);
  box.appendChild(frame);
  box.addEventListener("click", function (event) {
    if (event.target === box) closeLightbox();
  });
  document.body.appendChild(box);
  return box;
}

function showLightboxAt(index) {
  if (!lightboxItems.length) return;
  const count = lightboxItems.length;
  lightboxIndex = (index + count) % count;
  const item = lightboxItems[lightboxIndex];
  const box = ensureLightbox();
  const img = box.querySelector("[data-lightbox-img]");
  const caption = box.querySelector("[data-lightbox-caption]");
  img.src = item.src;
  img.alt = item.alt ? String(item.alt) : "Photograph of Master Mohamed Yoosaf M.V";
  caption.textContent = item.caption ? String(item.caption) : "";
  box.hidden = false;
  document.body.classList.add("lightbox-open");
  const close = box.querySelector(".lightbox-close");
  if (close) close.focus();
}

function openLightbox(items, index, returnTo) {
  lightboxItems = items;
  lightboxReturn = returnTo || null;
  showLightboxAt(index);
}

function closeLightbox() {
  const box = document.querySelector("[data-lightbox]");
  if (!box || box.hidden) return;
  box.hidden = true;
  document.body.classList.remove("lightbox-open");
  const img = box.querySelector("[data-lightbox-img]");
  if (img) img.removeAttribute("src");
  if (lightboxReturn && lightboxReturn.focus) lightboxReturn.focus();
  lightboxReturn = null;
}

function renderCategories(list, groups) {
  list.replaceChildren();
  groups.forEach(function (group) {
    const cover = group.items[0];
    const button = document.createElement("button");
    button.type = "button";
    button.className = "gallery-card";
    button.setAttribute("aria-label", group.name + ", " + group.items.length + " photographs");
    button.appendChild(galleryImage(cover));

    const label = document.createElement("span");
    label.className = "gallery-card-label";
    const title = document.createElement("span");
    title.className = "gallery-card-title";
    title.textContent = group.name;
    const count = document.createElement("span");
    count.className = "gallery-count";
    count.textContent = group.items.length + "+";
    label.appendChild(title);
    label.appendChild(count);
    button.appendChild(label);
    button.addEventListener("click", function () {
      renderCategory(list, groups, group);
    });
    list.appendChild(button);
  });
}

function renderCategory(list, groups, group) {
  list.replaceChildren();
  const panel = document.createElement("div");
  panel.className = "gallery-open";

  const back = document.createElement("button");
  back.type = "button";
  back.className = "gallery-back";
  back.textContent = "All categories";
  back.addEventListener("click", function () {
    renderCategories(list, groups);
  });

  const title = document.createElement("h3");
  title.className = "gallery-open-title";
  title.textContent = group.name;

  const count = document.createElement("p");
  count.className = "gallery-open-count";
  count.textContent = group.items.length + "+ photographs";

  const thumbs = document.createElement("div");
  thumbs.className = "gallery-thumbs";
  group.items.forEach(function (item, index) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "gallery-thumb";
    button.setAttribute("aria-label", item.caption ? String(item.caption) : "Open photograph");
    button.appendChild(galleryImage(item));
    button.addEventListener("click", function () {
      openLightbox(group.items, index, button);
    });
    thumbs.appendChild(button);
  });

  panel.appendChild(back);
  panel.appendChild(title);
  panel.appendChild(count);
  panel.appendChild(thumbs);
  list.appendChild(panel);
  back.focus();
}

function renderGallery() {
  const section = document.querySelector("[data-gallery]");
  if (!section) return;
  const items = galleryItems();
  if (!items.length) {
    section.hidden = true;
    return;
  }
  const list = section.querySelector("[data-gallery-list]");
  if (!list) return;
  renderCategories(list, galleryGroups(items));
  section.hidden = false;
  if (!section.hasAttribute("data-gallery-keys")) {
    section.setAttribute("data-gallery-keys", "");
    document.addEventListener("keydown", function (event) {
      const box = document.querySelector("[data-lightbox]");
      if (!box || box.hidden) return;
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowRight") showLightboxAt(lightboxIndex + 1);
      if (event.key === "ArrowLeft") showLightboxAt(lightboxIndex - 1);
    });
  }
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
  document.querySelectorAll(".nav a").forEach(function (link) {
    link.addEventListener("click", function () {
      var toggle = document.getElementById("nav-toggle");
      if (toggle) toggle.checked = false;
    });
  });
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
