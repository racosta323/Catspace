# Welcome to CatSpace! 

This project was made by Hunter Matyi, Eve Strittmatter, and Rene Acosta in the [Flatiron School](https://flatironschool.com/courses/coding-bootcamp/)'s 2024 Software Engineering Bootcamp as an exercise in a creating single-page application. This is achieved with React routing, namely the createBrowserRouter and RouterProvider functions. Beyond this minimal requirement, we've made frequent use of bootstrap styling, a separately hosted database, and a publicly available API. The frontend is hosted on [Netlify](https://www.netlify.com/) and the backend on [Render](https://render.com/). 

## Functionality

### Homepage

The homepage will display all of the cats currently in our database. Typing something in the searchbar at the top will filter the cats to include your search, and you can enter a search on any page and hit enter to navigate to the homepage with that search filter applied. 

### Add a Cat Page

The add a cat page can be navigated to from the navigation pane in the header, the blue button front and center on the homepage, or the first icon in the list of cats. Here you can enter all details of a cat you'd like to make a profile for; hitting submit will add the cat to the server (and the homepage) and navigate you to your cat's profile page. You can upload the profile picture from your computer or grab a random cat image from the [Cat as service (CATAAS)](https://cataas.com/) API and either will be cropped according to the preview provided by the [react-avatar-edit](https://www.npmjs.com/package/react-avatar-edit) library. 

### Profile Page

Here you can see the details of a cat that are not visible on the homepage. The profile picture is displayed over the banner image, and below there is pronunciation (not in the add a cat form at the moment), current location, an about section with current location, original location, and nickname, and a yet-to-be-implemented comments section. There is also a hidden photos section above the about section that may be implemented in the future. At the bottom of each profile is a button to delete the cat from the database. Hitting it will also redirect the user to the homepage. In a future product, this button and account edit features will be available soley to the owner of the account. 


### About Page

Here we have some info about the site and its developers, as well as some useful links. We hope you enjoy the site! 