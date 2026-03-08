Le Birbos

Live website:
https://le-birbos.vercel.app

Le Birbos is a multilingual website for a mountain house located in Valle Maira (Italy).
The site is built with React + Vite and deployed on Vercel.

The website includes:

Multilingual interface (Italian, English, Dutch, German)

Image gallery with lightbox

Panorama gallery

Availability calendar

Booking request section

Google Maps location section

Run the Project Locally

Open the project folder in your terminal and run:

npm install
npm run dev

Then open the local address shown in the terminal (usually):

http://localhost:5173
Build the Project

To build the production version:

npm run build

To preview the production build locally:

npm run preview
Project Structure

Main files and folders:

src/
  App.jsx
  App.css
  assets/
Important Files

src/App.jsx

Contains the main website logic, translations, gallery, and availability calendar.

src/App.css

Contains all styling for the website.

src/assets/

Contains all images used by the website.

Updating the Occupied Dates

The availability calendar is managed manually in:

src/App.jsx

Look for this section in the file:

const occupiedDates = [
  "2026-01-03",
  "2026-01-04",
  "2026-01-05",
  "2026-01-18",
  "2026-01-19",
  "2026-02-14",
  "2026-02-15",
  "2026-03-01"
];

These dates will appear as occupied in the calendar.

Add a New Occupied Date

Add a new line inside the array:

"2026-08-14",
Remove an Occupied Date

Simply delete the corresponding line from the array.

Date Format

Always use the following format:

YYYY-MM-DD

Example:

2026-07-21
Publishing Updates

After modifying the code (for example changing the occupied dates), run:

git add .
git commit -m "Update occupied dates"
git push

If the repository is connected to Vercel, the website will update automatically after the push.

Updating Website Content

Most content can be edited directly in:

src/App.jsx

From there you can change:

All texts

Translations

Booking email

Phone number

WhatsApp number

Gallery images

Occupied dates

Images

All images used by the website are located in:

src/assets/

If you replace an image:

Keep the same file name, or

Update the import inside src/App.jsx.

Example:

import heroImg from "./assets/birbos-hero.jpg";
import interniImg from "./assets/interni.jpg";
Languages

The website currently supports the following languages:

Italian

English

Dutch

German

Translations are handled directly inside the texts object in:

src/App.jsx
Deployment

This project is deployed using Vercel.

To publish updates:

git add .
git commit -m "Your update message"
git push

Vercel will automatically deploy the latest version.

Tech Stack

React

Vite

react-calendar

Vercel

Author

Website created for Le Birbos.
