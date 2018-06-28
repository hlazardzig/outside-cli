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
		
- **axios/axios:** Promise based HTTP client for the browser and node.js
- **sindresorhus/ora:** Elegant terminal spinner
