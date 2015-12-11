var userName = 'kristianbjornard'
var apiKey   = '5T8WWYiQqGy7sJV1sEQIdO2k8CDNDQS7'

/* some issue where no more than 25 can be returned at a time, there are ways to ask for more? https://help.behance.net/hc/communities/public/questions/202357274-Number-of-Behance-API-request-results-limited-to-25- */
var initialUrl = 'https://api.behance.net/v2/users/' + userName + '/projects/?api_key=' + apiKey +'&per_page=25&callback=?';
console.log('connected to ' + initialUrl + ' for main feed of projects. If you can click on the url it says you have connected to and it takes you to a JSON data feed, you are in business. Double check that the data looks like you!');

var userUrl = 'https://api.behance.net/v2/users/' + userName + '/?api_key=' + apiKey +'&callback=?';
console.log('connected to ' + userUrl + ' for user info. Click on this, if it looks like you, you are all set.');
