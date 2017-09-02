const expect      = require('chai').expect
const createError = require('../index')

describe('Flux Standard Error', () => {
	it('creates a standard error', () => {
		const error = new Error('a really bad error')
		const fse   = createError(error, 'ERROR_TYPE', 'INTENDED_ACTION', { data: 2 })
		expect(fse).to.eql({
			payload: error,
			error  : true,
			type   : 'ERROR_TYPE',
			meta   : {
				cause: 'INTENDED_ACTION',
				data : 2
			}
		})
	})
})
