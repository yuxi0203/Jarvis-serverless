'use strict';

console.log('Loading function');

exports.handler = (event, context, callback) => {
    console.log('hello');
    callback(null, {
        statusCode: 200,
        headers: { 'x-custom-header' : 'my custom header value' },
        body: 'Hello World!' + event.key1

    });
};