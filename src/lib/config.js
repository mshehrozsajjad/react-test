module.exports = {
  SESSION_TOKEN_KEY: 'SESSION_TOKEN_KEY',
  backend: {
    hapiRemote: false,
    hapiLocal: false,
    parseRemote: false,
    parseLocal: true
  },
  HAPI: {
    local: {
      url: 'http://localhost:5000'
    },
    remote: {
      url: 'https://snowflakeserver-bartonhammond.rhcloud.com/'
    }
  },
  PARSE: {
    appId: 'codejunkie.app',                              // match APP_ID in parse-server's index.js
    local: {
      url: 'http://vaganstraffic/api/'            // match SERVER_URL in parse-server's index.js
    },
    remote: {
      url: 'http://snowflake-parse.herokuapp.com/parse'   // match SERVER_URL in parse-server's index.js
    }
  }
}
