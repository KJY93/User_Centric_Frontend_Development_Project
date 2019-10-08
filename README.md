Milestone Project One:  User Centric FrontEnd Development

# Shape Shifters 

This project focuses on the website development for a fictional gym called "Shape Shifters".
The website was designed to be intuitive, easy to navigate and is targeted towards gym goers and also the public in general.
Upon landing on the website, users will be able to check out more on the gym itself, the exciting classes it has to offer, 
the gym's branches and also the 30 days commit to stay fit challenges video, just to name a few.

## Demo: 
https://youtu.be/QQ5ViUTKb30

## Project Strategy and Scope
### User stories
1. User would like to check out on the classes available
   - To include a section that let user check out the details on the classes offered.

2. User would like to check out the location of the gym 
   - To include a section that let the user check out the location of the gym.

3. User would like to check out which tab they are currently on
    - To add JavaScript to the website to allow the styling of navbar item to show the user 
      which active tab they are currently on.

4. User would like to reach out to the gym's administrator to enquire more about the gym 
    - To include a section to allow the user to reach out to the gym's administrator. 

5. User would like to subscribe to the gym's newsletter
   - To include a subscription form at the footer section that allows the user to enter their email
     address and subsequently subscribe to the gym's newsletter for latest updates and promos.

6. User would like to check out the gym's social media  
   - To add the connect via social media's logo at the footer section of the website.

## Project Structure
### a. Overview:
The website is divided into 4 main pages.

i. Homepage - The "Homepage" section contains future to be implemented links (e.g. About Us, Pricing, Outdoor community classes etc.).
              Later on at this same page as well, user will be abe to check out the commit to stay fit 30 days challenge videos
              which they can view just by clicking on the play button.

ii. Clubs - The "Clubs" section let user check out the available branches

iii. Timetables - The "Timetables" section let the user check out the available classes offered by the gym.
                 The classes details with its respective timing and instructor are displayed in table format.
                 There is an "Enrol" button to allow users to sign up for a particular class in the future.

iv. Contact Us - The "Contact Us" section allows the user to reach out to the gym's administrator about their
                 inquiries by filling out the necessary fields in the contact-us form.

### b. Wireframes
https://drive.google.com/open?id=1cm3OWW94KwPLHUqSLnQCh5tJu9L5DGkh

## Project Skeleton
### a. Existing features
The website was designed with Bootstrap grid design and mobile responsiveness in mind. 
For all the HTML pages, the navigation bar at the top will collapse into the hamburger menu on smaller sized device. 
In addition to that, JavaScript was added to select the HTML elements and add styling to it so as to show the user which 
active tab they are currently on. For the index page, the video was embedded in an iframe element. In addition to that, 
to improve on the UX, when hovering on the links ("about shape shifters", "locations" etc) available on the middle 
section of this page, the font-size will be slightly bigger so as to let the user know that is currently the link 
they are clicking on. As for the clubs page, when a user hovers on a particular branch of the gym,
the font-color of the selected branch will change to orange in a linear gradient manner and the Background
will change to semi-transparent. The timetables page utilizes Bootstrap striped table to display classes information.
An enrol button was designed using Bootstrap button component. For the contact us page, bootstrap form has been used
and the corresponding field the required attribute was added to the contact-form fields.
Last but not least, there is a footer section at the very bottom of each HTML pages. This section
basically contains all the other relevant information of this website, the social media links and
also the subscription form.

### b. Features to be implemented in the future
Currently, the only workable links are the index (homepage) link, videos link, class, timetables
and the contact us links. In a later version of this website, the features that I would like to 
implement are all the other clickable links on the index page (i.e. to link it to that particular page
once it is ready). In addition to that, I would also like to implement a google map in the website that
shows the location of the gym itself. Last but not least, I would also want to coupled the website with 
Flask or Django so that user info from the form can be sent via HTTP post method to a particular route for processing,
verification, authentication and the data collected can be persisted in the database. 

## Project Surface
The color scheme of red, black and orange are the main theme of the website and it is an 
inspiration from the Virgin Active and the FitnessFirst website. Those three colors were
selected as these bright colors according to the psychology of colors website(https://smallbiztrends.com/2014/06/psychology-of-colors.html)  
will lead the users feeling more energetic and can evoke a better response of the user.
This is in agreement with the gym's objective which is to attract the users to sign up
for classes and their gym's membership plan.

## Technologies
1. HTML - https://www.w3schools.com/
2. CSS - https://internetingishard.com/html-and-css/flexbox/
3. Bootstrap - https://getbootstrap.com/
4. JavaScript - https://www.w3schools.com/jsref/met_element_addeventlistener.asp, https://www.w3schools.com/js/js_window_location.asp,
                https://www.w3schools.com/jsref/dom_obj_document.asp

## Testing
### 1. Mobile Responsiveness
The website was tested across multiple device screen sizes (small: iPhone 5, Galaxy S5, Pixel 2, medium: iPad, large: iPad Pro)
Website scale responsively according to the device screen size when tested in the Developer tools.

### 2. Browser Compatibility
The website was tested across Chrome, Opera and Firefox to ensure browser compatibility
Website displayed responsively according to the device screen size when tested in the Developer tools.

## Media
1. Background images used in the website were taken from https://unsplash.com/
2. Navbar home, social media logos used in this website were taken from https://fontawesome.com/
3. Countries flag logo used in this website were taken from https://favicon.io/emoji-favicons 

## Acknowledgements

Fonts: 
1. https://fonts.google.com

Bootstrap features:
1. Grid layout design: https://getbootstrap.com/docs/4.1/layout/grid/ 
2. Form: https://getbootstrap.com/docs/4.1/components/forms/
3. Navbar: https://getbootstrap.com/docs/4.1/components/navbar/

Skew submit button design: 
1. https://codepen.io/adamjohnson/pen/aokGt


