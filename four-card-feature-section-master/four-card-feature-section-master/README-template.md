# Frontend Mentor - Four Card Feature Section Solution

This is a solution to the [Four Card Feature Section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/four-card-feature-section-weK1eFYK). Frontend Mentor challenges help developers improve their coding skills by building realistic projects.

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

---

## Overview

### The Challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for interactive elements

### Screenshot

![Design preview for the Four Card Feature Section coding challenge](./design/desktop-preview.jpg)
![Design preview for the Four Card Feature Section coding challenge](./design/desktop-design.jpg)
![Design preview for the Four Card Feature Section coding challenge](./design/mobile-design.jpg)

### Links

- **Solution URL:** [Add your solution URL here](https://your-solution-url.com)
- **Live Site URL:** [Add your live site URL here](https://your-live-site-url.com)

---

## My Process

### Built With

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I Learned

This project deepened my understanding of CSS Grid and Flexbox for creating responsive layouts. Here are some key takeaways:

```css
.cardContainer {
  margin: 0 auto;
  width: fit-content;
  display: grid;
  grid-template-areas: 
    ". a ."
    "b . c"
    ". d .";
  padding: 12px;
  gap: 24px;
}
```

Key lessons:
- **CSS Grid:** Using `grid-template-areas` simplifies complex layout structures.
- **Flexbox:** Ideal for aligning elements within grid items or smaller components.
- **Mobile-first workflow:** Ensures designs are responsive and scalable.

### Continued Development

To further enhance my skills, I aim to:

- **Improve Accessibility:** Incorporate ARIA roles and semantic elements to ensure inclusivity.
- **Experiment with Animations:** Use advanced CSS techniques like keyframes and transitions.
- **Explore Responsive Patterns:** Implement fluid typography and container queries.

---

## Author

- Frontend Mentor: [@gauravk2203](https://www.frontendmentor.io/profile/gauravk2203)
- LinkedIn: [gauravk2205](https://www.linkedin.com/in/gauravk2205/)

---

## Acknowledgments

Special thanks to Frontend Mentor for providing engaging challenges that enhance both design and coding skills. Additional gratitude to the coding community for sharing tips and resources that make development enjoyable!

