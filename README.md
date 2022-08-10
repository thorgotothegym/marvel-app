# Frontend Coding Challenge

## Project's Title

Marvel App

## Description

As a test we would like you to create a simple web application by using React that allow users to
navigate the Marvel characters records. (See http://developer.marvel.com/).

Requirements

1. Display a list of all characters that can be navigated, paginated, sorted, and searched easily (e.g a
   table with paginations, filters, and search box).

2. By clicking a character on the list, user should be able to navigate to a view with more details
   about the character, and the view should include the following details of the character
   a. name, description, and image
   b. list of stories, events, and series that the character appears in

3. Responsiveness - - the web view should be both desktop and mobile friendly

- On mobile device, the image of character should occupy full width of the screen, with a
  margin of 20px. And the resolution should be proportional to its original dimensions.
- On desktop, the image of character should always fit a square of 750px with the original
  resolution which should not be cropped or stretched.

4. The application can be able to be initiated on command line

- You can use any third-party framework or libraries.
- You can add any improvement in functionality perspective you want as a bonus.

### What does the application do

This application allows you to search for Characters and be able to filter by:

- Name in ascending order
- Name descending order
- Modified in ascending order
- Modified descending order

You must enter a minimum of two characters for there to be results, otherwise you will get a custom error.
Once the results have appeared (with pagination) you can click on the characters and it will take you to the characters description.

It should be remembered that on the list screen, at the bottom you will get the total number that the search gives

In the character detail screen, you will be able to see all the information there is and if there is no information, a custom message 'oop there is no information about it' will appear

### Technologies I use in the App

- React
- Typescript
- Style-Components
- React testing library
- React-query
- AntDesign for UI https://ant.design/

### Some challenge that I have faced

One of the first decisions I have had to make is whether to do it with Hexagonal Architecture with Clean Code and to make a more basic front-end architecture but with Clean Code. So in the end I opted for fast, however if I had more time I would have done a Hexagonal Architecture with Clean Code.

Another challenge that I have faced is testing, I am still learning and it is not my strong point, but I continue to train by watching videos, consulting stackoverflow or on payment platforms such as Udemy.

The component architecture would have faced it differently, such as creating a separate repository with StoryBook and making the modifications there and being able to reuse the components

## How to use the App

1.- Install all packages with `npm i`

2.- `npm run start`

A browser window will open and you will be able to see the app:

When you start the app, your default browser will open and you can search for your character, filter and hit search.

## Install

Please to install use `npm`:

```
npm install
```

## Run the application

```
npm run start
```

## For testing

```
yarn testing
```

## Bibliography

- [React-query](https://react-query-v3.tanstack.com/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [react-hooks-testing-library](https://www.npmjs.com/package/@testing-library/react-hooks)
- [Axios](https://axios-http.com/)
- [Testing router](https://testing-library.com/docs/example-react-router/)
