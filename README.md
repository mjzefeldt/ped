# Ped - Virtual Wellness Pet

_Application Description_

Ped is a personal wellness app proof of concept that uses Fitbit personal data to maintain the state of a virtual pet, a Ped. Personal Fitbit data is pulled into the app via an implicit OAuth 2.0 connection that access's Fitbit web API end routes for sleep and profile data. Sleep goal and daily sleep totals are modeled in a Redux store and then used to populate Ped's local state in React. State corresponds to the visual appearance of the virtual pet Ped. The closer a user's daily total is to her sleep goal the happier and healthier the appearance of the Ped. Ped graphic created via SVG authoring. Ped animation and state changes implemented via direct DOM manipulation of SVG attributes within React lifecycle methods.

## Try out Ped
Visit https://ped-wellness-pet.herokuapp.com/ to try out Ped.
NOTE - You must have a Fitbit account to try Ped out as this is a built as a personal use companion application to a user's Fitbit account.

## Guide to Reviewing Ped code - if you are looking to hire me :-)
Ped was built utilizing a fullstack boilerplate framework that typically includes React, Redux, Node.js, Express, Seqeuelize, PostgreSQL. However, Ped itself utilizes only Javascript with React/Redux framework. Redux is used as source of state upon user Fitbit authentication and subsequent API call. See client subfolder, including client and store subfolders. Also see public subfolder.
