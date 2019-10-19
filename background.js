//On installation, the default username is User, the clusters are empty, and the theme is car
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
    /*username*/ 
    'user': 'User', 
    /*clusters*/
    'work': work, 
    'school': school, 
    'mail': mail, 
    'music': music, 
    'entertainment': entertainment, 
    'socialmedia': socialmedia,
    'sports': sports,
    'shopping': shopping, 
    /*theme*/
    'theme': 'car'
  }, function() {
    console.log("The default name is User.");
    console.log("The default Clusters are empty.")
    console.log("The default theme is car.")
  });
  document.getElementById('greeting').innerHTML = 'Welcome Back, User.';
});

//sets the cluster button outlines to the inputted colors
function cluster_outline(work, school, mail, music, entertainment, socialmedia, sports, shopping) {
  document.getElementById('work').style.borderColor = work;
  document.getElementById('school').style.borderColor = school;
  document.getElementById('mail').style.borderColor = mail;
  document.getElementById('music').style.borderColor = music;
  document.getElementById('entertainment').style.borderColor = entertainment;
  document.getElementById('socialmedia').style.borderColor = socialmedia;
  document.getElementById('sports').style.borderColor = sports;
  document.getElementById('shopping').style.borderColor = shopping;
}

//sets the cluster background to a translucent gradient
function cluster_background() {
  document.getElementById('clusters-background').style.backgroundImage = "linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.1))";
  document.getElementById('clusters-background').style.borderRadius = "30px";
}

//sets the greeting background to a translucent gradient
function greeting_background() {
  document.getElementById('greeting').style.backgroundImage = "linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2))";
  document.getElementById('greeting').style.borderRadius = "30px";
}

//1. Changing to beach background
function beach_change() {
  //page background
  document.getElementById('page-background').style.backgroundImage = "linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.1)), url(wallpapers/beachWallpaper.jpg)";
  //cluster buttons background
  cluster_background();
  //greeting background
  greeting_background();
  //search button
  document.getElementById('search-color').style.backgroundColor = "#00ddff";
  //cluster outlines
  cluster_outline("#00ddff", "#38e4ff", "#80eeff", "#baf6ff", "#d9d8bf", "#d9d7ad", "#d4d196", "#d4d083");
  //edit box
  document.getElementById('edit-title').style.color = "#00ddff";

}

//2. Changing to canyon background
function canyon_change() {
  //page background
  document.getElementById('page-background').style.backgroundImage = "linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.1)), url(wallpapers/canyonWallpaper.jpg)";
  //cluster buttons background
  cluster_background();
  //search button
  document.getElementById('search-color').style.backgroundColor = "#0d86ff"
  //cluster outlines
  cluster_outline("#0d86ff", "#3399ff", "#57abff", "#70b8ff", "#d6d5a3", "#d4d28a", "#d6d476","#d4d163");
  //edit box
  document.getElementById('edit-title').style.color = "#0d86ff";
}

//3. Changing to car background
function car_change() {
  document.getElementById('page-background').style.backgroundImage = "linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.1)), url(wallpapers/carWallpaper.jpg)";
}

//4. Changing to city background
function city_change() {
  //page background
  document.getElementById('page-background').style.backgroundImage = "linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.1)), url(wallpapers/cityWallpaper.jpg)";
  //cluster buttons background
  cluster_background();
  //search button
  document.getElementById('search-color').style.backgroundColor = "#5931a8"
  //cluster outlines
  cluster_outline("#5931a8", "#6849a3", "#755fa1", "#8475a1", "#928aa1", "#d5e0e0", "#c8dbdb", "#b9f9fa");
  //edit box
  document.getElementById('edit-title').style.color = "#5931a8";
}

//5. Changing to nature background
function nature_change() {
  //page background
  document.getElementById('page-background').style.backgroundImage = "linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.1)), url(wallpapers/natureWallpaper.jpg)";
  //cluster buttons background
  cluster_background();
}

//6. Changing to samoyed background
function samoyed_change() {
  //page background
  document.getElementById('page-background').style.backgroundImage = "linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.1)), url(wallpapers/samoyedWallpaper.jpg)";
  //cluster buttons background
  cluster_background();
  //cluster outline
  cluster_outline("#e37134", "#d98152", "#d69978", "#d9ac93", "#d9bdad", "#d9c7bd", "#d9d0cc", "#d6d6d6");
  //edit box
  document.getElementById('edit-title').style.color = "#e37134";
  //search button
  document.getElementById('search-color').style.backgroundColor = "#e37134"
}

//7. Changing to golden retriever background
function golden_change() {
  //page background
  document.getElementById('page-background').style.backgroundImage = "linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.1)), url(wallpapers/goldenWallpaper.jpg)";
  //cluster buttons background
  cluster_background();
  //cluster outline
  cluster_outline('#3ae000', '#72c456', '#a3c797', '#bec7bb', '#c7ccb1', '#c2cf84', '#bcd444', '#b3d602');
  //search button
  document.getElementById('search-color').style.backgroundColor = "#3ae000";
  //edit box
  document.getElementById('edit-title').style.color = "#3ae000";
}

//8. Changing to mystical background
function mystical_change() {
  //page background
  document.getElementById('page-background').style.backgroundImage = "linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.1)), url(wallpapers/mysticalWallpaper.jpg)";
  //cluster outlines
  cluster_outline("#ff0df7", "#ff57f9", "#ff8cfb", "#ffc9fd", "#c9e0ff", "#a3caff", "#78b1ff", "#3389ff");
  //search button
  document.getElementById('search-color').style.backgroundColor = "#ff0df7";
  //edit box
  document.getElementById('edit-title').style.color = "#ff0df7";
}

//9. Changing to space background
function space_change() {
  //page background
  document.getElementById('page-background').style.backgroundImage = "linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.1)), url(wallpapers/spaceWallpaper.jpg)";
  //cluster outline
  cluster_outline("#023da3", "#204fa1", "#42649e", "#5f759c", "#75839c", "#767b82", "#6c6e70", "#5d5e5e");
  //cluster buttons background
  cluster_background();
  //search button
  document.getElementById('search-color').style.backgroundColor = "#023da3";
  //edit box
  document.getElementById('edit-title').style.color = "#023da3";
}

//10. Changing to lake background
function lake_change() {
  //page background
  document.getElementById('page-background').style.backgroundImage = "linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.1)), url(wallpapers/lakeWallpaper.jpg)";
  //cluster background
  cluster_background();
  //search button
  document.getElementById('search-color').style.backgroundColor = "#ff5ee6"
  //cluster outlines
  cluster_outline("#ff5ee6","#ff85ec","#fca4ee","#facaf2","#8cffb5","#6effa1","#3bff80","#00ff5a");
  //edit box
  document.getElementById('edit-title').style.color = "#ff5ee6";
}

//restore username, clusters, and theme stored in chrome.storage when new tab is opened
function restore_user() {
  chrome.storage.sync.get('user', function(items) {
    document.getElementById('greeting').innerHTML = 'Welcome back, ' + items.user.trim() + ".";
    document.getElementById('username').placeholder = "Current Username: " + items.user;
  });
  chrome.storage.sync.get('theme', function(items) {
    document.getElementById(items.theme).checked = true;
    if (items.theme == 'beach') {
      beach_change();
    }
    else if (items.theme == 'boba') {
      boba_change();
    }
    else if (items.theme == 'canyon') {
      canyon_change();
    }
    else if (items.theme == 'car') {
      car_change();
    }
    else if (items.theme == 'city') {
      city_change();
    }
    else if (items.theme == 'nature') {
      nature_change();
    }
    else if (items.theme == 'golden') {
      golden_change();
    }
    else if (items.theme == 'samoyed') {
      samoyed_change();
    }
    else if (items.theme == 'mystical') {
      mystical_change();
    }
    else if (items.theme == 'space') {
      space_change();
    }
    else if (items.theme == 'lake'){
      lake_change();
    }
  });
}
//When new page is loaded, user information is retrieved from chrome.storage
document.addEventListener('DOMContentLoaded', restore_user);


