# outside-cli
How to create a real-world Node CLI app with Node; Tutorial by https://github.com/timberio


## Notes


    $ npm link
    npm notice created a lockfile as package-lock.json. You should commit this file.
    npm WARN outside-cli@1.0.0 No repository field.

    up to date in 1.156s
    found 0 vulnerabilities

    /usr/local/bin/outside -> /usr/local/lib/node_modules/outside-cli/bin/outside
    /usr/local/lib/node_modules/outside-cli -> /Users/harald/Programming/JS.cli/outside-cli
    $
    $ outside
    Welcome to the outside!

### Axios and ora

	npm install --save axios ora
		
- **<a href='https://github.com/axios/axios' target='_new'>axios/axios</a>:** Promise based HTTP client for the browser and node.js
- **<a href='https://github.com/sindresorhus/ora' target='_new'>sindresorhus/ora</a>:** Elegant terminal spinner

### ipstack and Ipdata 
- <a href='https://ipdata.co/index.html' target='_new'>Ipdata.co</a>: IP Geolocation and Threat Data API 
(1.500 free requests per day)
- <a href='https://ipstack.com/' target='_new'>ipstack.com</a>: Locate and identify website visitors by IP address 
(10.000 free requests per month)