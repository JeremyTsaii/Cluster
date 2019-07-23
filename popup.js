//Adds current webpage link to the specified Cluster's array of links and updates chrome.storage

//1. Work
function add_work(){
    //retrieves work cluster's array of links
    chrome.storage.sync.get('work', function(items){
        var arr = items.work;
        //get url of user's current webpage
        chrome.tabs.query({
            active: true, currentWindow: true
        }, function(tabs) {
            var tab = tabs[0];
            var url = tab.url;
            arr.push(url);
            //update work cluster's array of links in chrome.storage
            chrome.storage.sync.set({'work': arr}, function() {
                alert('Page added to Work Cluster.')
            });
        });
    });
}
document.getElementById("work").addEventListener('click', add_work);

//2. School
function add_school(){
    //retrieves school cluster's array of links
    chrome.storage.sync.get('school', function(items){
        var arr = items.school;
        //get url of user's current webpage
        chrome.tabs.query({
            active: true, currentWindow: true
        }, function(tabs) {
            var tab = tabs[0];
            var url = tab.url;
            arr.push(url);
            //update school cluster's array of links in chrome.storage
            chrome.storage.sync.set({'school': arr}, function() {
                alert('Page added to School Cluster.')
            });
        });
    });   
}
document.getElementById("school").addEventListener('click', add_school);

//3. Mail
function add_mail(){
    //retrieves mail cluster's array of links
    chrome.storage.sync.get('mail', function(items){
        var arr = items.mail;
        //get url of user's current webpage
        chrome.tabs.query({
            active: true, currentWindow: true
        }, function(tabs) {
            var tab = tabs[0];
            var url = tab.url;
            arr.push(url);
            //update mail cluster's array of links in chrome.storage
            chrome.storage.sync.set({'mail': arr}, function() {
                alert('Page added to Mail Cluster.')
            });
        });
    });
}
document.getElementById("mail").addEventListener('click', add_mail);

//4. Music
function add_music(){
    //retrieves music cluster's array of links
    chrome.storage.sync.get('music', function(items){
        var arr = items.music;
        //get url of user's current webpage
        chrome.tabs.query({
            active: true, currentWindow: true
        }, function(tabs) {
            var tab = tabs[0];
            var url = tab.url;
            arr.push(url);
            //update music cluster's array of links in chrome.storage
            chrome.storage.sync.set({'music': arr}, function() {
                alert('Page added to Music Cluster.')
            });
        });
    });
}
document.getElementById("music").addEventListener('click', add_music);

//5. Entertainment
function add_entertainment(){
    //retrieves entertainment cluster's array of links
    chrome.storage.sync.get('entertainment', function(items){
        var arr = items.entertainment;
        //get url of user's current webpage
        chrome.tabs.query({
            active: true, currentWindow: true
        }, function(tabs) {
            var tab = tabs[0];
            var url = tab.url;
            arr.push(url);
            //update entertainment cluster's array of links in chrome.storage
            chrome.storage.sync.set({'entertainment': arr}, function() {
                alert('Page added to Entertainment Cluster.')
            });
        });
    });
}
document.getElementById("entertainment").addEventListener('click', add_entertainment);

//6. Social Media
function add_socialmedia(){
    //retrieves socialmedia cluster's array of links
    chrome.storage.sync.get('socialmedia', function(items){
        var arr = items.socialmedia;
        //get url of user's current webpage
        chrome.tabs.query({
            active: true, currentWindow: true
        }, function(tabs) {
            var tab = tabs[0];
            var url = tab.url;
            arr.push(url);
            //update socialmedia cluster's array of links in chrome.storage
            chrome.storage.sync.set({'socialmedia': arr}, function() {
                alert('Page added to Social Media Cluster.')
            });
        });
    });
}
document.getElementById("socialmedia").addEventListener('click', add_socialmedia);

//7. Sports
function add_sports(){
    //retrieves sports cluster's array of links
    chrome.storage.sync.get('sports', function(items){
        var arr = items.sports;
        //get url of user's current webpage
        chrome.tabs.query({
            active: true, currentWindow: true
        }, function(tabs) {
            var tab = tabs[0];
            var url = tab.url;
            arr.push(url);
            //update sports cluster's array of links in chrome.storage
            chrome.storage.sync.set({'sports': arr}, function() {
                alert('Page added to Sports Cluster.')
            });
        });
    });
}
document.getElementById("sports").addEventListener('click', add_sports);

//8. Shopping
function add_shopping(){
    //retrieves shopping cluster's array of links
    chrome.storage.sync.get('shopping', function(items){
        var arr = items.shopping;
        //get url of user's current webpage
        chrome.tabs.query({
            active: true, currentWindow: true
        }, function(tabs) {
            var tab = tabs[0];
            var url = tab.url;
            arr.push(url);
            //update shopping cluster's array of links in chrome.storage
            chrome.storage.sync.set({'shopping': arr}, function() {
                alert('Page added to Shopping Cluster.')
            });
        });
    });
}
document.getElementById("shopping").addEventListener('click', add_shopping);