# flux-standard-error

A simple function to consistently generate standard Flux Action Errors. It follows these simple rules:

- An `error` property must exist, and will be set to true
- The payload must be the Error.

## Usage

Sample Action

```javascript
import createError from 'flux-standard-error';

const myFancyAction = () => (dispatch) => {
   try { 
       // some error happens
   } catch(e) {
       dispatch(createError(e, MY_UNEXPECTED_ERROR, MY_FANCY_ACTION))
   }
}

```

It takes the following arguments, taken from the jsdoc

```javascript
/*
 * @param {Error} error - The actual Error object
 * @param {string} type - The type to dispatch
 * @param {string} cause - The cause of the error
 * @param {object} [meta] - Additional information to be inserted into the meta property
 * @returns {{type: string, payload: Error, error: boolean, meta: {cause: string}}}
 */
```
The meta object is useful to stuffing in any additional data that might be needed to handle the error.