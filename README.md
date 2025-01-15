# CollabNamak

### 
A microservices-based platform to help **brands** discover and connect with **influencers** by pulling real social media data from **Instagram** and **Facebook**. This project is built with **.NET Core**, **React**, and containerized using **Docker** (with plans for **Kubernetes**).

---

## Table of Contents
1. [Overview](#overview)  
2. [Tech Stack](#tech-stack)  
3. [MVP Scope & Features](#mvp-scope--features)  
4. [High-Level Architecture](#high-level-architecture)  
    - [Services Breakdown](#services-breakdown)  
    - [Data Flow: Integrating Instagram & Facebook](#data-flow-integrating-instagram--facebook)  
5. [Future Enhancements](#future-enhancements)  
6. [Local Setup & Running](#local-setup--running)  
7. [Contributing](#contributing)  
8. [License](#license)

---

## 1. Overview

**Brand–Influencer Discovery & Analytics Platform** is a system that allows:

- **Brands** to register, create a profile, and search for influencers by niche or keywords.  
- **Influencers** to register, connect their **Instagram** or **Facebook** accounts, and automatically update follower/engagement stats (no manual entry).

This project uses **microservices** for authentication, profile management, and social media integration (aggregator). The front end is built in **React**. Our MVP focuses on **real data** from Meta platforms (Instagram/Facebook), ensuring that brand searches reflect accurate, up-to-date influencer metrics.

---

## 2. Tech Stack

| Layer             | Technology                      |
|-------------------|---------------------------------|
| **Frontend**      | React, Axios, React Hooks       |
| **Backend**       | .NET Core 6 (C#) APIs           |
| **Microservices** | Auth, Profile, Aggregator       |
| **Database**      | SQL Server / PostgreSQL (MVP)   |
| **Containerization** | Docker (K8s planned later)    |
| **Deployment**    | Docker Compose locally; Azure or other cloud platform for production (planned) |

---

## 3. MVP Scope & Features

### Key Features

1. **User Registration & Login**  
   - Users register as **Brand** or **Influencer**.  
   - JWT-based authentication for secure API calls.

2. **Influencer Profile Integration**  
   - Influencers connect their **Instagram** or **Facebook** account via OAuth.  
   - System automatically fetches follower count, basic engagement metrics (likes, comments).

3. **Brand Profiles**  
   - Brands store their company name, industry, website, and description.

4. **Search & Discovery**  
   - Brands can search for Influencers by niche or keywords.  
   - Returns top-level influencer stats (follower count, etc.) from the aggregator service.

5. **React Frontend**  
   - Registration/Login pages, role-based dashboards (Brand vs. Influencer).  
   - Influencer dashboard for connecting Meta accounts.  
   - Brand dashboard to search and view influencer stats.

**Outcome**: A functioning system that demonstrates real data integration from Meta, enabling a basic brand-influencer discovery process.

---

## 4. High-Level Architecture

```text
               ┌────────────┐
    ┌─────────>│ Auth Svc   │<───────┐
    │          └────────────┘        │
    │                   ^            │
    │JWT                |            │
    v                   |            │
┌────────────┐   ┌────────────┐   ┌───────────────────┐
│ React App  │   │ Profile Svc │   │ Aggregator Svc    │
│(Brand/Inf.)│   └────────────┘   └─────────┬─────────┘
└────────────┘           ^                 │
       ^                  |                 │Requests
       |                  |                 v
       |            ┌───────────────┐   ┌─────────────────────────┐
       └────────────│ Profile DB    │   │ Social Media APIs (Meta) │
                    └───────────────┘   └─────────────────────────┘
```


## 5. Services Breakdown

### Auth Service
- Manages registration, login, and JWT token generation.
- **Database**: Typically a `Users` table with credentials, roles, timestamps.

### Profile Service
- Manages `BrandProfile` and `InfluencerProfile`.
- Stores niche, follower count (cached from aggregator), brand industry, etc.
- Provides search endpoints for brands to find influencers.

### Aggregator Service
- Handles OAuth flow with **Instagram/Facebook** (via Meta Graph API).
- Fetches real-time influencer stats (follower count, basic engagement) and updates the **Profile DB**.
- Optionally stores tokens/long-lived tokens in a separate aggregator DB for security.

### React Frontend
- Registration and login pages.
- Influencer dashboard for connecting Meta accounts.
- Brand dashboard for searching influencers.

---

### Data Flow: Integrating Instagram & Facebook

1. **Influencer clicks “Connect”** inside their dashboard.  
2. **Aggregator Service** redirects them to Meta’s OAuth screen.  
3. After authorization, aggregator obtains a **long-lived access token**.  
4. Aggregator fetches follower counts, recent post metrics, etc., and updates the Profile DB.  
5. **Brand** searches for an influencer → sees these updated stats.

---

## 6. Future Enhancements

1. **Advanced Analytics**  
   - Sentiment analysis of posts, trending hashtags, competitor monitoring.  
   - Support for multiple platforms (YouTube, TikTok, LinkedIn).

2. **Recommendation Engine**  
   - AI-driven or rule-based synergy scores for brand-influencer matches.  
   - “Best fit” suggestions based on niche, engagement, and audience overlap.

3. **Subscription & Monetization**  
   - Freemium vs. Paid plans (basic vs. advanced analytics).  
   - Payment integration (Stripe, PayPal).

4. **Messaging & Collaboration**  
   - In-app communication: proposals, budgets, and campaign management.  
   - Track campaign ROI within the platform.

5. **Kubernetes Deployment**  
   - Migrate from Docker Compose to Kubernetes.  
   - Use Helm charts, horizontal pod autoscaling, and advanced DevOps pipelines (Azure DevOps or GitHub Actions).

6. **White-Label & Agency Support**  
   - Agencies can manage multiple brands/influencers from a single dashboard.  
   - White-label solutions or custom branding for enterprise clients.

---

## 7. Local Setup & Running

Below is a minimal guide to run the MVP locally using **Docker Compose** (sample instructions; adjust as needed):

1. **Clone the Repo**  
   ```bash
   git clone https://github.com/YourUser/brand-influencer-platform.git
   cd brand-influencer-platform
   ```

2. **Configure Environment Variables**  
   - Copy `.env.example` to `.env` and fill in any required secrets:  
     - **Meta App ID** and **Meta App Secret** for Instagram/Facebook integration.  
     - **JWT Secret** for secure authentication.  
     - **Database connection strings** for the Profile DB.

3. **Build & Run**  
   - Run the following commands to build and start the application:  
     ```bash
     docker-compose build
     docker-compose up
     ```
   - This should start the following services:  
     - `auth-service`  
     - `profile-service`  
     - `aggregator-service`  
     - A database container  
     - The `react-frontend`

4. **Access the App**  
   - Visit `http://localhost:3000` (or whatever port is mapped) to access the React Frontend.  
   - You can register and log in as either a brand or influencer to test the workflows.

5. **(Optional) Run Without Docker**  
   - To run each service manually:
     1. Navigate to each microservice folder and run:  
        ```bash
        dotnet run
        ```
     2. For the React app, use:  
        ```bash
        npm start
        ```
---

## 7. Contributing

Contributions are welcome! To contribute, please follow these steps:

1. **Fork** the repository.  
2. Create a feature branch:  
   ```bash
   git checkout -b feature/my-new-feature
    ```
3. Commit and push your changes:
   ```bash
     git add .
    git commit -m "Add new feature"
    git push origin feature/my-new-feature
    ```
4. Open a Pull Request on the main repository. Include a detailed description of your feature, fixes or enhancements.

## 8. License

This project is licensed under the MIT License. Feel free to use, modify, and distribute it as per the license terms.

#### That’s it!
We now have a fully functional MVP that integrates real-time social media data from Instagram and Facebook, allowing brands to discover influencers based on live metrics.

Check out the Future Enhancements section for the roadmap to add advanced analytics, subscription tiers, and other features.

For questions or feedback, please open an issue. Happy building!
