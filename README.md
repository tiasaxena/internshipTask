# Selection Task for Internship 

## Setup Instructions

### `https://github.com/tiasaxena/internshipTask.git`

Open the terminal. <br/>
Navigate to the folder where you want to clone the project. <br/>
Run the above command to get a copy of the code in your local. <br/>

## How to run the code?
### `npm install`

Run the above command once the project is cloned. <br/>
The desired dependencies gets installed. <br/>
In case of errors, make sure node and npm is install properly. <br/>
Run
`node -v`
and
`npm -v`
to check the version of the node and npm install.


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Observations Recorded

<h2>1. Make a GET API call</h2>
The request was made to the endpoint 'https://jsonplaceholder.typicode.com/users'. <br/> 
The Fake API placeholder contains an array of objects. The objects are populated with user's data, including their id, name, username, email,    
address.
The adress is yet another object inside main object that contains informations like, street, suite, city, zip code, and geography.
Futher geography holds latitudinal and longitudinal information. <br/>
<img src="https://github.com/tiasaxena/internshipTask/blob/main/src/assets/jsonImage" />

<br/>

<h2>2. Rendering the Response</h2>

For the project, in order to hit the API endpoint, a promise based HTTP client,
**axios**
was used to make HTTP requests from the browser and handle the transformation of request and response data.
<br/>
The data, so fetched, is displayed in the tabular format. Only the id, name, username, and email fields are populated. For creating the table, Chakra UI's 
<a href="https://chakra-ui.com/docs/components/table/usage">Table</a>
component has been used. <br/>
<img src="https://github.com/tiasaxena/internshipTask/blob/main/src/assets/fetchedData" />

**Added Feature**
In order to make the basic React App more user friendly, type ahead feature has been added. The feature allows the user to input either the name, email, or username in the input area. Next, all the data that contained the specifies inputted word gets filtered out and is displayed in the tabular form. The Modal feature is consistent to this part as well.
<img src="https://github.com/tiasaxena/internshipTask/blob/main/src/assets/Filter%20Operation" />



<h2>3. Creating an Interactive Modal Popup</h2>
An interactive modal is made using Chakra UI's
<a href="https://chakra-ui.com/docs/components/modal/usage">Modal</a>
component. The modal contains the rest of the information of the user.
The modal pops up on the screen when the user clicks any of the rows. The modal can be closed by 'Esc' button or 'X' button at the top right or 'Close' button in the buttom right. When the Modal opens up, the background color changes and the text gets blurred to a specified extent.<br/>
<img src="https://github.com/tiasaxena/internshipTask/blob/main/src/assets/ModalView" />

<h2>4. Integrate Redux to store data</h2>
Redux Toolkit is used to maintain a centralized data throughout the React App. The centralized data store and related methods and logics can be found in the src/redux folder. Redux prevents prop drilling which enhances the app's efficiency and prevents data leakage.
<img src="https://github.com/tiasaxena/internshipTask/blob/main/src/assets/redux" />
