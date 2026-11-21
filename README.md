# Is Even — NPM Package Demo

A modern, responsive demo website built for a college assignment demonstrating the usage of the published npm package **[`is-even-clone`](https://www.npmjs.com/package/is-even-clone)**.

## 🚀 Live Demo & Links

- **Live Deployed Demo:** [Deployed Link](https://demo-project-npm.vercel.app/) *(or GitHub Pages / Netlify)*
- **Demo GitHub Repository:** [https://github.com/skakshat2007-svg/Demo-Project-Npm](https://github.com/skakshat2007-svg/Demo-Project-Npm)
- **Original NPM Package Repository:** [https://github.com/skakshar2007-svg/NPM-package-](https://github.com/skakshar2007-svg/NPM-package-)
- **NPM Package Registry:** [https://www.npmjs.com/package/is-even-clone](https://www.npmjs.com/package/is-even-clone)

---

## 📦 About the NPM Package

The demo installs and uses [`is-even-clone`](https://www.npmjs.com/package/is-even-clone) directly from the npm registry.

### Installation

```bash
npm install is-even-clone
```

### Usage

```javascript
import isEven from 'is-even-clone';

isEven(4);   // true
isEven(7);   // false
isEven(-2);  // true
isEven(0);   // true
```

---

## 🛠️ Tech Stack

- **HTML5 & CSS3**: Clean, responsive layout with modern dark-mode aesthetic.
- **JavaScript (ES Modules)**: Native browser integration importing `is-even-clone`.
- **Vite**: Lightweight, fast bundler and dev server.

---

## 💻 Local Development

1. Clone this repository:
   ```bash
   git clone https://github.com/skakshat2007-svg/Demo-Project-Npm.git
   cd Demo-Project-Npm
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start local development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

---

## 🎓 College Presentation Notes

- **Separation of Concerns**: The even/odd determination logic is NOT hardcoded in the frontend. It is encapsulated inside the standalone `is-even-clone` npm package and imported into the client bundle.
- **Package Integrity**: The package handles validation (finite numbers, integer checking, type enforcement).
