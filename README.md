# Music List application

## To install all the dependencies

    npm install

## To run the application

    npm run dev

## To build the application

    npm run build

##

[Link to the deployed application](https://trash--phenomenal-sunshine-86e52f.netlify.app/)

## Choice of major packages

1. Vite bundler was user for bundling application modules. Vite is easy to configure and useful for fast dev builds
2. Redux, Redux-act, Redux-thunk were used for global state management. Redux was used over React Context because the latter one is used for simple global states such as theme choice, but not for more complex variable.
3. Husky was used for better configuration of the dev environment and script management.
4. Vite-plugin-pwa was used for turning the application into a PWA. Since we are using Vite bundler, it was mure logical to use a native Vite PWA plugin for better compatibility.
5. Axios was used for API calls because of the numerous advantages over native 'fetch' method.
6. Wouter was used for routing which used the same configuration as React Router V4.
7. Typescript was used over JavaScript due to stronger type checking.
8. Sass was used over regular CSS due to better functionality and extenstions.

## Impovements

1. Add unit tests for UI and functionality and render tests.
2. A seperate modal window for a specific related album.
3. Improve the audio player by adding the controllers(previous, next, slider).
4. Add light/dark themes.
5. Imporve UI.
6. Implement another API with better quality image.

## Assunptions and opinions gained

1. UI of an application matters. No matter how good the functionality is, users are attracted to a fancy UI and better UX.
2. It is really hard to make a good product in short time.
3. The application was made in 2 days due to a my own full-time job. So I guess I did a very good job for a 2 day project with several hours in each day. You can see it from my commit history.
4. The project task gave me an overview of my own capabilities and limitations.
5. I would really like to join Markato for creating better products that used by many people.

## Testing plan

1. Download CORS extension for making APIs work.
2. Press on a center of each card and the track should play.
3. Play and Pause buttons are available at the bottom menu.
4. Pressing on the blurred part of a card should open a modal with detailed information about an artist and his/her related 5 albums.
5. At the comments section you can leave reviews and they are saved in session storage of the browser.
