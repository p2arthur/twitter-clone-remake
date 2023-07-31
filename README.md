# Twitter Clone with Next.js and Full Stack Workflow

Welcome to my first project using the Next.js framework! This application is a Twitter clone where I aim to gain hands-on experience with a full stack workflow. I'll be leveraging various technologies such as Prisma, TypeScript, MongoDB, and Zustand for state management.

## Goal

My primary objective for this project is to learn the ins and outs of building a web application with Next.js while integrating essential tools like Prisma and MongoDB for database management and Zustand for state handling.

## Future Aspiration

In addition to mastering this tech stack, I plan to explore Algorand blockchain transactions and potentially implement them into the application later on.

## Documentation

To get started with this project, feel free to refer to the following documentation links:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Prisma Documentation](https://prisma.io/docs) - Explore the Prisma documentation.
- [MongoDB Documentation](https://docs.mongodb.com) - Discover MongoDB's capabilities.

Happy coding! 🚀
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Next.js Documentation - Learn about Next.js features and API.
[Prisma Documentation](prisma documentation link) - Explore the Prisma documentation.
[MongoDB Documentation](prisma documentation link) - Discover MongoDB's capabilities.
Happy coding! 🚀

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Data Base schema - Prisma

model User {
  id              String    @id @default(auto()) @map("_id") @db.ObjectId
  name            String?
  username        String?   @unique
  bio             String?
  email           String?   @unique
  emailVerified   DateTime?
  image           String?
  coverImage      String?
  profileImage    String?
  hashedPassword  String?
  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt
  followingIds    String[]  @db.ObjectId
  hasNotification Boolean?

  posts         Post[]
  comments      Comment[]
  notifications Notification[]
}

model Post {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  body      String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  userId    String   @db.ObjectId
  likeIds   String[] @db.ObjectId

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  comments Comment[]
}

model Comment {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  body      String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  userId    String   @db.ObjectId
  postId    String   @db.ObjectId

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)
  Post Post @relation(fields: [postId], references: [id], onDelete: Cascade)
}

model Notification {
  id       String   @id @default(auto()) @map("_id") @db.ObjectId
  body     String
  userId   String   @db.ObjectId
  createAt DateTime @default(now())

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)
}



