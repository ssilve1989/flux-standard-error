/**
 *
 * @param {Error} error - The actual Error object
 * @param {string} type - The type to dispatch
 * @param {string} cause - The cause of the error
 * @param {object} [meta] - Additional information to be inserted into the meta property
 * @returns {{type: string, payload: Error, error: boolean, meta: {cause: string}}}
 */
const createFSAError = (error, type, cause, meta = {}) => {
	return {
		type,
		payload: error,
		error  : true,
		meta   : Object.assign({}, { cause }, { meta })
	}
}

module.exports = createFSAError;