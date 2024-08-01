This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
# Book Binge
Start with a near-empty React (Next.js) project and end with a book search and list management system. This project uses the [Open Library API](https://openlibrary.org/developers/api) to retrieve book data and cover images. The code-along teaches key React concepts like how to handle API calls, using TypeScript to type models and interfaces, and how to manage state and props. You will also practice conditional rendering and adding styles using SCSS, including responsive styling. Finally, the project teaches a very basic implementation of Next.js to create static pages, as well as using React-intl to localize your application.

## Prerequisites

You should have a basic grasp of JavaScript/TypeScript, and of the foundational concepts presented in **React**’s first two _Learn React_ chapters: [Describing the UI](https://react.dev/learn/describing-the-ui) and [Adding Interactivity](https://react.dev/learn/adding-interactivity).

Start with _Your First Component_ and work through _Updating Arrays in State_ (16 lessons total). Review these concepts to get the most out of this curriculum, and feel free to skip areas you’re already familiar with.

### Additional resources

[JavaScript syntax cheatsheet](https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-introduction/cheatsheet) (5 min read)  
[Typescript from a C# perspective](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-oop.html)(5-10 min read)  
And remember, the [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects) are your friend!


## Getting Started

### Set up your dev environment to work on the project:
Install [Node Version Manager](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating) to make your life easier now and in the future.

Use the required Node version to minimize issues:
```bash
nvm install v18.17.0
```
Fork or Clone the Book Binge repo from GitHub:
https://github.com/aehaldy/book-binge

In a terminal inside the project folder, install packages:
```bash
npm install
```

### Start developing

```bash
npm run dev
```

Open [http://localhost:4000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

# Build the Book Binge App

### Figma Designs
To simulate working with a design team, this project comes with a Figma design. You can view the design by uploading the Figma file (BookBinge.fig) to your Figma account (a free account is sufficient). You will need to use Figma to inspect the design and ascertain style choices such as fonts and colors.

The project is already loaded with all necessary fonts and color variables so that you can focus on coding. You'll find the full list of color variable names and media breakpoints in the global.scss file.

### UI Components
To simulate using 3rd-party or in-house UI libraries, this project comes with a small UI library you must leverage during development. You can see the available components by navigating to [http://localhost:4000/ui-libary](http://localhost:4000/ui-library).

## Step-by-step lessons
Find the BookBingeLessons folder in the project root. Each lesson contains a pdf of instructions to walk you through building the app, and each builds upon the previous one. Each lesson also has a branch on the repo with the completed code for that lesson. As you start later lessons, feel free to branch off of the previous lesson's branch to start fresh.


#
## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
