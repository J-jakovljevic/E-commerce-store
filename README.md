# Tech store

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Notes
<li>The search api call triggers when the user stops typing for 750ms or when the enter key is pressed (in that case api call will not be made again after 750ms). Additionally, I implemented special character encoding in the search input to ensure data security by preventing issues like injection attacks.</li>
<li>On Figma all cards have a white background, whereas in my data that is not the case. Therefore, I omitted the white background within the card - there would be a product image, and around the image a white background, which doesn't look nice. For that I would normally consult with a designer because that case is not covered on Figma.</li>
<li>The endpoints from the given website donot include the 'smallDescription' field in the response as envisioned on Figma. I had the idea to create a small description by taking only the first sentence from the description, but it was not necessary since all descriptions here are short. So I created a [see more] link at the end of the description in case it's too long, which leads to the page of the selected item so that the entire description can be read.</li>


