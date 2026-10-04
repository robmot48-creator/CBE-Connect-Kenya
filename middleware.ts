generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

enum UserRole {
  STUDENT
  TEACHER
  PARENT
  ADMIN
  COUNTY_TRAINER
  MINISTRY
}

model User {
  id        String   @id @default(uuid())
  name      String
  email     String   @unique
  password  String
  role      UserRole @default(STUDENT)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Subject {
  id          String   @id @default(uuid())
  title       String
  grade       String
  description String?
  createdAt   DateTime @default(now())
}

model Assessment {
  id          String   @id @default(uuid())
  title       String
  subjectId   String
  totalMarks  Int
  createdAt   DateTime @default(now())
}

model Result {
  id           String   @id @default(uuid())
  studentId    String
  assessmentId String
  marks        Int
  createdAt    DateTime @default(now())
}

model Resource {
  id          String   @id @default(uuid())
  title       String
  type        String
  subject     String?
  fileUrl     String?
  description String?
  createdAt   DateTime @default(now())
}
