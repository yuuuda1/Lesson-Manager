module.exports.authorize = (request, response) => {
  response.jsonp({
    token_type    : 'Bearer',
    expires_in    : 31536000,
    access_token  : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImM4MD…Qf8lC_NL1OGzYESbTcHrrxIfUveds0zMXhSKhFaEWVi6I6ipQ',
    refresh_token : 'def50200156520be0efdecd8ee54782b54741b073482a59823…f0ee982e13784e3ef87bcfe7f2843e44deb22c110f1cdfd6d'
  })
}
