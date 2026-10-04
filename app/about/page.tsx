# CBC Connect Kenya

CBC Connect Kenya is a starter Next.js platform for Kenya's Competency-Based Curriculum (CBC) and Competency-Based Education (CBE) ecosystem. It supports learners, teachers, parents, school leaders, county trainers, and Ministry of Education stakeholders with learning, assessments, analytics, digital libraries, STEM education, and AI tutoring.

## Features

- CBC/CBE landing page and educational portal
- Learner, teacher, parent, admin, and county trainer views
- AI Tutor section
- Subject and grade pathway structure
- Assessment and results tracking
- Digital library and resource center
- STEM and coding pathways
- Analytics dashboards and reporting
- Prisma schema for users, subjects, assessments, and resources
- Azure-ready architecture foundation

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Prisma ORM
- NextAuth starter configuration
- PostgreSQL-ready schema

## Getting Started

```bash
npm install
npx prisma generate
npm run dev
```

## Production build

```bash
npm run build
npm run start
```

## Deployment

Azure App Service and Azure PostgreSQL are suitable deployment targets for this starter. A typical workflow:

```bash
az login
az group create --name CBCConnectRG --location "South Africa North"
az webapp up --name cbc-connect-kenya
```

## Project structure

```bash
app/
components/
lib/
prisma/
public/
```

## Notes

This is a strong starter project for a national-scale CBC/CBE ecosystem. It is intentionally modular and can be extended as the platform grows with more user roles, advanced analytics, AI integrations, and Kenya-specific curriculum data.
