//On installation, the default username is User and the clusters are empty 
chrome.runtime.onInstalled.addListener(function() {
  var work = [];
  var school = [];
  var mail = [];
  var music = [];
  var entertainment = [];
  var socialmedia = [];
  var sports = [];
  var shopping = [];
  chrome.storage.sync.set({
    'userName': 'User', 
    'work': work, 
    'school': school, 
    'mail': mail, 
    'music': music, 
    'entertainment': entertainment, 
    'socialmedia': socialmedia,
    'sports': sports,
    'shopping': shopping
  }, function() {
    console.log("The default name is User.");
    console.log("The default Clusters are empty.")
  });
  document.getElementById('greeting').innerHTML = 'Welcome Back, User.';
});

//restore username and clusters stored in chrome.storage when new tab is opened
function restore_user() {
  chrome.storage.sync.get('user', function(items) {
    document.getElementById('greeting').innerHTML = 'Welcome back, ' + items.user.trim() + ".";
    document.getElementById('username').placeholder = "Current Username: " + items.user;
  });
}
//When new page is loaded, user information is retrieved from chrome.storage
document.addEventListener('DOMContentLoaded', restore_user);




