# Master Mohamed Yoosaf M.V — Personal Profile

Mobile-first personal profile for an NFC card. The page is static HTML, CSS, and JavaScript. It opens directly in a browser and can be published on GitHub Pages with no build step.

This is a personal professional profile. It is not an academy or enrollment site.

## Preview

Open `index.html` in a phone or desktop browser.

Call, email, and Save Contact work from the file itself. Share Profile uses the Web Share API, or copies the link, and is reliable on HTTPS (GitHub Pages provides this).

## Confirmed details on the page

- Name: MASTER MOHAMED YOOSAF M.V
- Rank: 4th Dan Black Belt
- Also shown: National Player, National Referee
- Experience: 15 years of Taekwondo
- Coaching results: 10–20 Kerala State Team students, 40 students to Black Belt
- Phone / WhatsApp: +973 35313206
- Email: mohmaedyoosafm.v@gmail.com
- Instagram: [@yoosafashraf](https://www.instagram.com/yoosafashraf/)
- Affiliation: Excellent Taekwondo Academy, Bahrain

Do not change the email spelling. Do not add award years, championship names, or certificates that were not supplied.

The confirmed calling code is `973`. In `script.js` it is already set:

```js
countryCallingCode: "973",
countryCodeVerified: true
```

Call links use `tel:+97335313206`. WhatsApp uses `https://wa.me/97335313206`.

## Add gallery photographs

The gallery is hidden while it has no photos. To add real photographs:

1. Put the files in `assets/gallery/`.
2. Add them to `SITE.gallery` in `script.js`:

```js
gallery: [
  {
    src: "assets/gallery/refereeing.jpg",
    alt: "Master Mohamed Yoosaf M.V refereeing.",
    caption: "Refereeing",
    width: 1200,
    height: 900
  }
]
```

Use only genuine photographs. Paths must start with `assets/gallery/`.

## Contact card

Save Contact downloads a vCard 3.0 file (`Master-Mohamed-Yoosaf-MV.vcf`) with the name, title, phone, email, and the current page URL. Line endings are CRLF. `contact.vcf` is the same card for visitors without JavaScript, without a page URL because the public address is chosen at publish time.

## Publish on GitHub Pages

1. Create a GitHub repository and upload this folder, including `.nojekyll`, `index.html`, `style.css`, `script.js`, `contact.vcf`, and `assets/`.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the branch (usually `main`) and the folder **`/ (root)`**. Save.
5. Wait until Pages shows a visit URL. It will be HTTPS.
6. Open that URL on a phone. Check the portrait, Call, Email, Save Contact, and Share Profile.
7. In `index.html`, search for `PUBLIC URL`. Uncomment the canonical, Open Graph, and Twitter image lines, and replace `https://example.com/` with the exact Pages URL, including a repository path for a project site (`https://username.github.io/repository/`).
8. Change `<meta name="twitter:card" content="summary">` to `summary_large_image` once the image URL is set.
9. Program the NFC card with that same HTTPS URL.

Asset paths are relative, so the page works on a user site (`https://username.github.io/`) and a project site (`https://username.github.io/repository/`).

## Custom domain

1. In the repository, add a file named `CNAME` containing only the domain, for example `profile.example.com`.
2. At the DNS host:
   - For `www` or another subdomain, create a `CNAME` record pointing to `username.github.io`.
   - For an apex domain (`example.com`), create `A` records for `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, and `185.199.111.153`.
   - Optional IPv6 `AAAA` records: `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`.
3. In **Settings → Pages**, set the custom domain and turn on **Enforce HTTPS** after the certificate is issued.
4. Put that HTTPS address in the `PUBLIC URL` tags in `index.html`.
5. Point the NFC card at the custom HTTPS URL.

If GitHub’s published DNS records differ from the addresses above, use the records shown in the current GitHub Pages custom-domain documentation.

## Files

```
index.html
style.css
script.js
contact.vcf
README.md
.nojekyll
assets/master-portrait.jpg
assets/gallery/
assets/icons/favicon.svg
```
