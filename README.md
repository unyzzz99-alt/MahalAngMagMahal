# Sanaol! Number Guessing Game

A colorful, mobile-friendly number guessing game built with HTML, CSS, and JavaScript. The browser runs the game, so it works as a static website on Vercel without a separate server or extra packages. Python is included as an optional local web server.

## Run the game

1. Install Python 3 if it is not already on your computer.
2. Open a terminal in this project folder.
3. Run `python app.py` (on some Windows computers, use `py app.py`).
4. Open **http://127.0.0.1:8000** in your browser.
5. To stop the server, return to the terminal and press **Ctrl+C**.

Keep the Python server running while you play. The game itself runs in your browser.

## Deploy to Vercel

1. Put this project in a GitHub repository.
2. Sign in at **https://vercel.com** and choose **Add New... → Project**.
3. Import the GitHub repository.
4. Choose **Other** as the framework preset. Leave the build command empty and set the output directory to `.`.
5. Choose **Deploy**. Vercel will publish the website and provide its public URL.

The game is a static website, so Vercel does not need to run Python. `vercel.json` sets the output directory, and `.vercelignore` keeps the local Python helper and documentation out of the public deployment.

## Test the game

- Submit an empty field and check that the page asks you to enter a number.
- Try `0`, `101`, and a decimal such as `12.5`; each should be rejected.
- Enter an in-range whole number and check that the page says whether it is too high or too low and updates the guess count.
- Guess until you win; the page congratulates you, disables further guesses, and shows **Play again**.
- Start another game and check that the count returns to zero.
- Narrow your browser window or open the page on a phone to check the responsive layout.

## What each file does

- `app.py` starts an optional local Python web server. The game logic runs in the browser.
- `index.html` contains the game page and the buttons, input field, and messages.
- `style.css` controls the colors, playful look, animations, and phone-friendly layout.
- `script.js` picks a random number and updates the feedback, attempt count, and restart button.
- `vercel.json` configures Vercel to publish this static website.
- `.vercelignore` keeps local-only files out of the Vercel deployment.
