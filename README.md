# Bloom

A video calling web app built with Next.js, Clerk, and Stream.

**Live:** [bloom-sooty-theta-13.vercel.app](https://bloom-sooty-theta-13.vercel.app)

## Features

- **Instant meetings** — create and join video calls with one click
- **Scheduled meetings** — plan calls for a future date and time
- **Meeting links** — share invite links for others to join
- **Upcoming meetings** — view all your scheduled calls
- **Authentication** — sign in with email or Google via Clerk
- **Responsive** — works on desktop and mobile

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Auth:** Clerk
- **Video:** Stream Video SDK
- **Styling:** Tailwind CSS 4 + shadcn/ui
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 20+
- A [Clerk](https://clerk.com) account
- A [Stream](https://getstream.io) account

### Setup

1. Clone the repo:

```bash
git clone https://github.com/akachi11/Bloom.git
cd Bloom
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

NEXT_PUBLIC_STREAM_API_KEY=your_stream_api_key
STREAM_SECRET_KEY=your_stream_secret_key

NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

4. Run the dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to use the app.

## Deployment

Deployed on Vercel. Set all the environment variables from `.env.local` in your Vercel project settings, updating `NEXT_PUBLIC_BASE_URL` to your production URL.
