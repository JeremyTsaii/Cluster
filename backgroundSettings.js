//Opens the form for username input
function openSettings() {
    var x = document.getElementById("disappear");
    if(x.className == "disappearing-form") {
      x.className = "active";
    }
    else {
      x.className = "disappearing-form";
    }
  }
//When the settings button is clicked, the username input form is shown
document.getElementById("open-settings").addEventListener('click', openSettings)
  
//save username to chrome.storage and update placeholder and greeting
function save_user() {
    var user = document.getElementById("username").value;
    //check that a username was inputted 
    if (!user || (user.trim()).length == 0) {
        document.getElementById("username").value = "";
        alert('No username specified.');
        return;
    }
    if (user.length>10){
        document.getElementById("username").value = "";
        alert("Username exceeded 10 characters.")
        return;
    }
    //if there is a username, save to chrome.storage
    chrome.storage.sync.set({"user": user}, function() {
        message('Username saved and updated.');
    });
    document.getElementById("username").placeholder = "Current Username: " + user;
    document.getElementById("username").value = "";
  }
//When set username button is clicked, username is updated in chrome.storage
document.getElementById("save-button").addEventListener('click', save_user);
  
//Updates the displayed username by monitoring chrome.storage and seeing when the user variable changes
chrome.storage.onChanged.addListener(function(changes, namespace) {
    for (key in changes) {
        if(key === 'user'){
        chrome.storage.sync.get('user', function(items){
          document.getElementById('greeting').innerHTML = 'Welcome back, ' + items.user.trim() + ".";
        });
      }
    }
  });

//Allows pressing Enter to submit new username 
var txt = document.getElementById('username');
var save = document.getElementById('save-button')
txt.addEventListener("keypress", function(event) {
    if (event.keyCode==13){
      save.click();
    event.preventDefault();
    }
  });

//Saves theme to chrome.storage 
function save_theme(e) {
    var theme = e.target.id;
    chrome.storage.sync.set({"theme": theme}, function() {
      document.location.reload();
    });
}
//when theme radio button is clicked, updates theme in chrome.storage
document.getElementById('beach').addEventListener('click', save_theme);
document.getElementById('canyon').addEventListener('click', save_theme);
document.getElementById('car').addEventListener('click', save_theme);
document.getElementById('city').addEventListener('click', save_theme);
document.getElementById('golden').addEventListener('click', save_theme);
document.getElementById('lake').addEventListener('click', save_theme);
document.getElementById('mystical').addEventListener('click', save_theme);
document.getElementById('nature').addEventListener('click', save_theme);
document.getElementById('samoyed').addEventListener('click', save_theme);
document.getElementById('space').addEventListener('click', save_theme);