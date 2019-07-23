//Loops through the links from the array of the specified Cluster, creating new tabs for each link
function loop_cluster(arr) {
      if (arr.length == 0){
        alert("This Cluster currently has no links in it. Manually add by clicking the edit button in the top right corner of a new tab or go to the desired webpage and click on the Cluster icon.")
        return;
      }
      for (var i = 0; i<arr.length;i++){
        chrome.tabs.create({
          url: arr[i]
        });
  }
}

//1. Work
//Retrieves work cluster from chrome.storage and calls helper function to loop through
function open_work() {
    chrome.storage.sync.get('work', function(items){
        var arr = items.work;
        loop_cluster(arr);
    });
}
//Opens the links stored within the clicked Cluster
document.getElementById("work").addEventListener('click', open_work);

//2. School
//Retrieves school cluster from chrome.storage and calls helper function to loop through
function open_school() {
    chrome.storage.sync.get('school', function(items){
        var arr = items.school;
        loop_cluster(arr);
    });
}
//Opens the links stored within the clicked Cluster
document.getElementById("school").addEventListener('click', open_school);

//3. Mail
//Retrieves mail cluster from chrome.storage and calls helper function to loop through
function open_mail() {
    chrome.storage.sync.get('mail', function(items){
        var arr = items.mail;
        loop_cluster(arr);
    });
}
//Opens the links stored within the clicked Cluster
document.getElementById("mail").addEventListener('click', open_mail);

//4. Music
//Retrieves music cluster from chrome.storage and calls helper function to loop through
function open_music() {
    chrome.storage.sync.get('music', function(items){
        var arr = items.music;
        loop_cluster(arr);
    });
}
//Opens the links stored within the clicked Cluster
document.getElementById("music").addEventListener('click', open_music);

//5. Entertainment
//Retrieves entertainment cluster from chrome.storage and calls helper function to loop through
function open_entertainment() {
    chrome.storage.sync.get('entertainment', function(items){
        var arr = items.entertainment;
        loop_cluster(arr);
    });
}
//Opens the links stored within the clicked Cluster
document.getElementById("entertainment").addEventListener('click', open_entertainment);

//6. Social Media
//Retrieves socialmedia cluster from chrome.storage and calls helper function to loop through
function open_socialmedia() {
    chrome.storage.sync.get('socialmedia', function(items){
        var arr = items.socialmedia;
        loop_cluster(arr);
    });
}
//Opens the links stored within the clicked Cluster
document.getElementById("socialmedia").addEventListener('click', open_socialmedia);

//7. Sports
//Retrieves sports cluster from chrome.storage and calls helper function to loop through
function open_sports() {
    chrome.storage.sync.get('sports', function(items){
        var arr = items.sports;
        loop_cluster(arr);
    });
}
//Opens the links stored within the clicked Cluster
document.getElementById("sports").addEventListener('click', open_sports);

//8. Shopping
//Retrieves shopping cluster from chrome.storage and calls helper function to loop through
function open_shopping() {
    chrome.storage.sync.get('shopping', function(items){
        var arr = items.shopping;
        loop_cluster(arr);
    });
}
//Opens the links stored within the clicked Cluster
document.getElementById("shopping").addEventListener('click', open_shopping);

