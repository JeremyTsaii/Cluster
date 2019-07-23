//Prevent right clicking, which opens annoying context menu
document.addEventListener("contextmenu", function(event){
    event.preventDefault();}, false);

//Deletes the link at the specified position of the given array
function delete_link(arr, pos){
    if (pos>arr.length || pos<=0){
        alert("Please enter a valid position number.");
        document.getElementById('number').value = 1;
        return;
    }
    var deletedLink = arr.splice(pos-1,1);
    alert(deletedLink + " successfully deleted.")
    hide();
    document.getElementById('number').value = 1;
}

//Checks the current cluster open and passes the corresponding link array and inputted position number to delete_link function
function delete_helper(){
    var cluster = document.getElementById('edit-title').innerHTML;
    var num = document.getElementById('number').value;
    if (cluster == "Work Cluster: Enter the position of the link you wish to delete."){
        chrome.storage.sync.get('work', function(items){
            delete_link(items.work, num);
            chrome.storage.sync.set({'work': items.work});
        });
    }
    else if (cluster == "School Cluster: Enter the position of the link you wish to delete."){
        chrome.storage.sync.get('school', function(items){
            delete_link(items.school, num);
            chrome.storage.sync.set({'school': items.school});
        });
    }
    else if (cluster == "Mail Cluster: Enter the position of the link you wish to delete."){
        chrome.storage.sync.get('mail', function(items){
            delete_link(items.mail, num);
            chrome.storage.sync.set({'mail': items.mail});
        });
    }
    else if (cluster == "Music Cluster: Enter the position of the link you wish to delete."){
        chrome.storage.sync.get('music', function(items){
            delete_link(items.music, num);
            chrome.storage.sync.set({'music': items.music});
        });
    }
    else if (cluster == "Entertainment Cluster: Enter the position of the link you wish to delete."){
        chrome.storage.sync.get('entertainment', function(items){
            delete_link(items.entertainment, num);
            chrome.storage.sync.set({'entertainment': items.entertainment});
        });
    }
    else if (cluster == "Social Media Cluster: Enter the position of the link you wish to delete."){
        chrome.storage.sync.get('socialmedia', function(items){
            delete_link(items.socialmedia, num);
            chrome.storage.sync.set({'socialmedia': items.socialmedia});
        });
    }
    else if (cluster == "Sports Cluster: Enter the position of the link you wish to delete."){
        chrome.storage.sync.get('sports', function(items){
            delete_link(items.sports, num);
            chrome.storage.sync.set({'sports': items.sports});
        });
    }
    else if (cluster == "Shopping Cluster: Enter the position of the link you wish to delete."){
        chrome.storage.sync.get('shopping', function(items){
            delete_link(items.shopping, num);
            chrome.storage.sync.set({'shopping': items.shopping});
        });
    }
}
document.getElementById("edit-button").addEventListener('click', delete_helper);

//If cancel button is clicked while on the edit screen, the edit screen goes away
function hide(){
    var editPage = document.getElementById('hidden-edit');
    editPage.className = 'edit';
}
document.getElementById("cancel-button").addEventListener('click', hide);

//Allows pressing Enter to submit number position of link to delete
var num = document.getElementById('number');
var remove = document.getElementById('edit-button')
num.addEventListener("keypress", function(event) {
    if (event.keyCode==13){
      remove.click();
    }
  });
