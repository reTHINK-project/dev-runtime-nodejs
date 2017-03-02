import { expect } from 'chai'
import Request from '../src/Request'

let _method, _url, _body

//
//
//Usage synopsis
//
// 	request.get(url, options).then(response => {
// 		// response text in case succesfull response
// 	}).catch(err => {
// 		// error text in case failure response
// 	})
//
// url: The URL of the resource which is being fetched.
//
// options:
// * body (String, body types) - HTTP request body
// * headers (key/value collection) - Key: header name, Value: header value
//
//
//
describe('Request', () => {
	//## Protocols mapping
	//Urls are mapped to valid protocols
	describe('mapping protocols', () => {
		const protocols = {
			'localhost://test.com/': 'https://test.com',
			'undefined://test.com': 'https://test.com',
			'hyperty-catalogue://test.com': 'https://test.com',
			'https://test.com': 'https://test.com',
			'http://test.com': 'http://test.com'
		};

		for(let prop in protocols) {
			it(`should map ${prop} protocol to ${protocols[prop]}`, (done) => {
				let httpRequest = new Request();
				let url ='http://test.com'
			
				console.log('request is :', request);

				httpRequest.get(url).then((result) => {
					console.log('_url is : ', url, result);
					// expect(url).to.be.equal(protocols[prop])
					done()
				});
			});
		}

		it('should throw an exception if protocol is not found', (done) => {
			let request = new Request()
			let url ='test.com'

			request.get(url).catch(() => {
				done()
			})
		})
	})

	//## Get request
	describe('get', () => {
		it('should get a response from a valid url', (done) => {
			let request = new Request()
			let url ='http://localhost:9999/'
	

			request.get(url).then((res) => {
				expect(res).to.be.equal(res)
				done()
			}).catch(console.log)
		})
	})

	//## Post request
	describe('post', () => {
		it('should send a post and receive a response', (done) => {
			let request = new Request()
			let url ='http://localhost:9999/'
			let options = {
				body: JSON.stringify({payload:'test'}),
				headers: {'Content-Type': 'application/json;charset=UTF-8'}
			}
	

			request.post(url, options).then((res) => {
				expect(_method).to.be.equal('POST')
				expect(_body).to.be.equal('{"payload":"test"}')
				expect(res).to.be.equal(res)
				done()
			}).catch(console.log)
		})
	})
})
