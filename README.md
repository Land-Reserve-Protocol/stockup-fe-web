# 📈 Stockup Web Frontend

Welcome to the **Stockup Web Frontend** — a high-performance, modular, and scalable application for modern trading and asset interaction. Built with speed in mind using **[Vite](https://vitejs.dev/)**, structured with **TypeScript**, and safeguarded with **[Jest](https://jestjs.io/)**, this codebase is your frontend fortress.

---

## 🚀 Quick Start

```bash
# Clone the repo
git clone https://github.com/Napolite/stockup-fe-web
cd stockup-fe-web

# Install dependencies
npm install

# Run the app in development mode
npm run dev

# Run tests
npm run test

# Build for production
npm run build
```

---

## 🛠️ Project Stack

| Tool             | Role                         |
| ---------------- | ---------------------------- |
| **React**        | Frontend UI framework        |
| **Vite**         | Lightning-fast build tool    |
| **TypeScript**   | Typed safety and dev support |
| **Redux**        | State management             |
| **Jest**         | Unit and integration testing |
| **React Router** | Client-side routing          |

---

## 🧱 File Structure

```
src/
├── assets/        # Images, fonts, and static files
├── common/        # Constants, enums, and shared configs
├── components/    # Reusable UI components
├── hooks/         # Custom React hooks
├── pages/         # View-level components (route targets)
├── Redux/         # Redux store and slices
├── services/      # API calls and integrations
├── utilities/     # Helper functions and utilities
├── App.tsx        # App entry layout
├── index.tsx      # Application bootstrap
└── vite-env.d.ts  # Vite type definitions
```

> 📁 **Modular First**: Each folder serves a specific purpose. No "misc" dumping allowed.

---

## 🧾 Contribution Guidelines

### 🔱 Branch Naming Convention

- Features: `feature/[username]-[feature-name]`
- Bug fixes: `fix/[username]-[bug-description]`
- Chores/Refactors: `chore/[username]-[description]`
- Hotfixes: `hotfix/[username]-[issue]`

### 🧪 PR Naming & Discipline

- **PR Title**: Should match the **Asana ticket title**
- **PR Description**:
  - Bullet list of **all commits** in the PR
  - A short summary of what changed and why
  - Link to the **Asana ticket**

> Example:
>
> ```
> Title: Add product search filter
>
> Description:
> - feat: implemented search logic in custom hook
> - fix: debounce issue on input field
> - chore: added unit test for search
>
> Asana: https://app.asana.com/0/1234567890/1234567890
> ```

---

## ✍️ Code Style & Best Practices

### TypeScript

- **Always type your variables and functions.**
- Use interfaces over types where structure is expected.
- Avoid `any` like it’s the plague unless justified.

### Components

- Use `PascalCase` for components.
- Keep components small and composable.
- Use functional components with hooks, no class components.

### Styling

- Use utility-first CSS (e.g. Tailwind) or scoped modules.
- Avoid inline styles except for dynamic cases.

### File Naming

- Hooks: `useWhatever.ts`
- Components: `WhateverComponent.tsx`
- Tests: `WhateverComponent.test.tsx`

---

## 🔍 Testing

### Writing Tests

- Use **Jest** + **React Testing Library**
- Every new component/hook should come with a test file
- Focus on:
  - Component render states
  - Logic correctness
  - Edge cases

```bash
# Run all tests
npm run test

# Watch mode
npm run test:watch
```

---

## 📦 Environment Setup

Create a `.env` file at the root for your local dev environment:

```env
VITE_API_BASE_URL=https://api.stockup.io
VITE_FEATURE_TOGGLE_X=true
```

> ❗ Do not commit secrets or private keys. Use `.env.local` for local overrides.

---

## 🧹 Linting & Formatting

Set up ESLint and Prettier to keep the codebase clean:

```bash
# Check lint errors
npm run lint

# Auto-fix issues
npm run lint:fix

# Format code
npm run format
```

### Recommended VSCode Extensions

- ESLint
- Prettier
- Tailwind CSS IntelliSense
- GitLens

```

---

## 🧠 Best Practices Summary

| Area             | Practice                                                   |
|------------------|------------------------------------------------------------|
| Code             | Small, typed, readable modules                             |
| State            | Redux with properly isolated slices                        |
| Styling          | Tailwind or CSS Modules, no global chaos                   |
| Commits          | Atomic, descriptive, conventional                         |
| Features         | Must include relevant tests                                |
| PR Discipline    | Follow naming conventions, clean history, structured desc. |
| Secrets          | Never in the repo; always use env vars                     |

---

## 🛡️ Security

- Sanitize all user input.
- Never log sensitive info.
- Use HTTPS-only APIs.
- Validate forms before submission.

---

## 🧭 Future Enhancements

- [ ] CI/CD pipeline with GitHub Actions
- [ ] Visual regression testing
- [ ] Storybook for component preview
- [ ] i18n integration
- [ ] Progressive Web App (PWA) support

---

## ✨ Maintainers

- **Lead Dev**: [Lord Constantine](mailto:you@example.com)
- **Contributors**: See Git history or project board on Asana

---

## 🧙‍♂️ Final Word

This repo is not just a codebase. It is the battlefront for Stockup glory.

Go forth, write elegant code, and make Stockup a fortress of finesse.

> “As is the frontend, so shall be the fortune of the product.” — Some wise React dev, probably.
```
