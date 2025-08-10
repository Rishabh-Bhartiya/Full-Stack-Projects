# Shadow Talk

## Today's Progress - [10 August 2025]

### What I Accomplished Today:

**Project Setup & Architecture:**
- ✅ Initialized Next.js 15.4.6 project with TypeScript and Tailwind CSS
- ✅ Set up ESLint configuration with Next.js rules
- ✅ Configured PostCSS and Tailwind CSS v4
- ✅ Added Turbopack for faster development builds

**Database Models & Schemas:**
- ✅ Created comprehensive User model with Mongoose integration
- ✅ Implemented Message sub-schema for user messages
- ✅ Added user verification system with expiry codes
- ✅ Included message acceptance toggle functionality
- ✅ Set up proper TypeScript interfaces and Document extensions

**Data Validation:**
- ✅ Implemented Zod schemas for all user interactions:
  - Sign up validation (username, email, password)
  - Sign in validation (identifier, password)
  - Email verification code validation
  - Message content validation (10-300 characters)
  - Message acceptance toggle validation
- ✅ Added username constraints (3-20 chars, alphanumeric only)
- ✅ Email format validation
- ✅ Password minimum length requirements

**Project Structure:**
- ✅ Organized code into logical directories (models, schemas, app)
- ✅ Set up proper TypeScript configuration
- ✅ Maintained clean separation of concerns

**Next Steps:**
- API routes for authentication and messaging
- Frontend components for user interface
- Database connection setup
- Authentication middleware
- Message handling endpoints

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
