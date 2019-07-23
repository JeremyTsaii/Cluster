
//Upon right click, a popup appears that prints out the right-clicked Cluster's array of links with position numbers
//and shows a form for the user to type the position of the link they wish to delete 
//1. Work
document.getElementById('work').onmousedown = function(event) {
    if (event.which == 3) {
        chrome.storage.sync.get('work', function(items){
            //case where cluster array of links is empty
            if (items.work.length == 0){
                alert('There are no links in the Work Cluster to edit.');
                return;
            }
            //case where edit box is already open and editing the same cluster
            var hidden = document.getElementById("hidden-edit");
            var title = document.getElementById("edit-title");
            if (hidden.className == 'edit-active' && title.innerHTML.substring(0,4) == 'Work'){
                return;
            }
            title.innerHTML = "Work Cluster: Enter the position of the link you wish to delete.";
            hidden.className = 'edit-active';
            var arr = items.work;
            var table = document.getElementById("edit-table");
            table.innerHTML = ''; //clear table in case it was filled with previous cluster array links
            var tbody = document.createElement("tbody");
            var i = 1;
            arr.forEach(function(link){
                //cut off link displayed if too long
                if (link.length>30){
                    link = link.substring(0,60) + "...";
                }
                var row = document.createElement("tr");
                var posCell = document.createElement("td");
                posCell.textContent = i + '. ' + link;
                row.appendChild(posCell); 

                tbody.appendChild(row);
                i++;
            });
            table.appendChild(tbody);
        });
    }
}

//2. School
document.getElementById('school').onmousedown = function(event) {
    if (event.which == 3) {
        chrome.storage.sync.get('school', function(items){
            //case where cluster array of links is empty
            if (items.school.length == 0){
                alert('There are no links in the School Cluster to edit.');
                return;
            }
            //case where edit box is already open and editing the same cluster
            var hidden = document.getElementById("hidden-edit");
            var title = document.getElementById("edit-title");
            if (hidden.className == 'edit-active' && title.innerHTML.substring(0,6) == 'School'){
                return;
            }
            title.innerHTML = "School Cluster: Enter the position of the link you wish to delete.";
            hidden.className = 'edit-active';
            var arr = items.school;
            var table = document.getElementById("edit-table");
            table.innerHTML = ''; //clear table in case it was filled with previous cluster array links
            var tbody = document.createElement("tbody");
            var i = 1;
            arr.forEach(function(link){
                //cut off link displayed if too long
                if (link.length>30){
                    link = link.substring(0,60) + "...";
                }               
                var row = document.createElement("tr");
                var posCell = document.createElement("td");
                posCell.textContent = i + '. ' + link;
                row.appendChild(posCell); 

                tbody.appendChild(row);
                i++;
            });
            table.appendChild(tbody);
        });
    }
}

//3. Mail
document.getElementById('mail').onmousedown = function(event) {
    if (event.which == 3) {
        chrome.storage.sync.get('mail', function(items){
            //case where cluster array of links is empty
            if (items.mail.length == 0){
                alert('There are no links in the Mail Cluster to edit.');
                return;
            }
            //case where edit box is already open and editing the same cluster
            var hidden = document.getElementById("hidden-edit");
            var title = document.getElementById("edit-title");
            if (hidden.className == 'edit-active' && title.innerHTML.substring(0,4) == 'Mail'){
                return;
            }
            title.innerHTML = "Mail Cluster: Enter the position of the link you wish to delete.";
            hidden.className = 'edit-active';
            var arr = items.mail;
            var table = document.getElementById("edit-table");
            table.innerHTML = ''; //clear table in case it was filled with previous cluster array links
            var tbody = document.createElement("tbody");
            var i = 1;
            arr.forEach(function(link){
                //cut off link displayed if too long
                if (link.length>30){
                    link = link.substring(0,60) + "...";
                }
                var row = document.createElement("tr");
                var posCell = document.createElement("td");
                posCell.textContent = i + '. ' + link;
                row.appendChild(posCell); 

                tbody.appendChild(row);
                i++;
            });
            table.appendChild(tbody);
        });
    }
}

//4. Music
document.getElementById('music').onmousedown = function(event) {
    if (event.which == 3) {
        chrome.storage.sync.get('music', function(items){
            //case where cluster array of links is empty
            if (items.music.length == 0){
                alert('There are no links in the Music Cluster to edit.');
                return;
            }
            //case where edit box is already open and editing the same cluster
            var hidden = document.getElementById("hidden-edit");
            var title = document.getElementById("edit-title");
            if (hidden.className == 'edit-active' && title.innerHTML.substring(0,6) == 'Music'){
                return;
            }
            title.innerHTML = "Music Cluster: Enter the position of the link you wish to delete.";
            hidden.className = 'edit-active';
            var arr = items.music;
            var table = document.getElementById("edit-table");
            table.innerHTML = ''; //clear table in case it was filled with previous cluster array links
            var tbody = document.createElement("tbody");
            var i = 1;
            arr.forEach(function(link){
                //cut off link displayed if too long
                if (link.length>30){
                    link = link.substring(0,60) + "...";
                }             
                var row = document.createElement("tr");
                var posCell = document.createElement("td");
                posCell.textContent = i + '. ' + link;
                row.appendChild(posCell); 

                tbody.appendChild(row);
                i++;
            });
            table.appendChild(tbody);
        });
    }
}

//5. Entertainment
document.getElementById('entertainment').onmousedown = function(event) {
    if (event.which == 3) {
        chrome.storage.sync.get('entertainment', function(items){
            //case where cluster array of links is empty
            if (items.entertainment.length == 0){
                alert('There are no links in the Entertainment Cluster to edit.');
                return;
            }
            //case where edit box is already open and editing the same cluster
            var hidden = document.getElementById("hidden-edit");
            var title = document.getElementById("edit-title");
            if (hidden.className == 'edit-active' && title.innerHTML.substring(0,13) == 'Entertainment'){
                return;
            }
            title.innerHTML = "Entertainment Cluster: Enter the position of the link you wish to delete.";
            hidden.className = 'edit-active';
            var arr = items.entertainment;
            var table = document.getElementById("edit-table");
            table.innerHTML = ''; //clear table in case it was filled with previous cluster array links
            var tbody = document.createElement("tbody");
            var i = 1;
            arr.forEach(function(link){
                //cut off link displayed if too long
                if (link.length>30){
                    link = link.substring(0,60) + "...";
                }
                var row = document.createElement("tr");
                var posCell = document.createElement("td");
                posCell.textContent = i + '. ' + link;
                row.appendChild(posCell); 

                tbody.appendChild(row);
                i++;
            });
            table.appendChild(tbody);
        });
    }
}

//6. Social Media
document.getElementById('socialmedia').onmousedown = function(event) {
    if (event.which == 3) {
        chrome.storage.sync.get('socialmedia', function(items){
            //case where cluster array of links is empty
            if (items.socialmedia.length == 0){
                alert('There are no links in the Social Media Cluster to edit.');
                return;
            }
            //case where edit box is already open and editing the same cluster
            var hidden = document.getElementById("hidden-edit");
            var title = document.getElementById("edit-title");
            if (hidden.className == 'edit-active' && title.innerHTML.substring(0,6) == 'Social'){
                return;
            }
            title.innerHTML = "Social Media Cluster: Enter the position of the link you wish to delete.";
            hidden.className = 'edit-active';
            var arr = items.socialmedia;
            var table = document.getElementById("edit-table");
            table.innerHTML = ''; //clear table in case it was filled with previous cluster array links
            var tbody = document.createElement("tbody");
            var i = 1;
            arr.forEach(function(link){
                //cut off link displayed if too long
                if (link.length>30){
                    link = link.substring(0,60) + "...";
                }
                var row = document.createElement("tr");
                var posCell = document.createElement("td");
                posCell.textContent = i + '. ' + link;
                row.appendChild(posCell); 

                tbody.appendChild(row);
                i++;
            });
            table.appendChild(tbody);
        });
    }
}

//7. Sports
document.getElementById('sports').onmousedown = function(event) {
    if (event.which == 3) {
        chrome.storage.sync.get('sports', function(items){
            //case where cluster array of links is empty
            if (items.sports.length == 0){
                alert('There are no links in the Sports Cluster to edit.');
                return;
            }
            //case where edit box is already open and editing the same cluster
            var hidden = document.getElementById("hidden-edit");
            var title = document.getElementById("edit-title");
            if (hidden.className == 'edit-active' && title.innerHTML.substring(0,6) == 'Sports'){
                return;
            }
            title.innerHTML = "Sports Cluster: Enter the position of the link you wish to delete.";
            hidden.className = 'edit-active';
            var arr = items.sports;
            var table = document.getElementById("edit-table");
            table.innerHTML = ''; //clear table in case it was filled with previous cluster array links
            var tbody = document.createElement("tbody");
            var i = 1;
            arr.forEach(function(link){
                //cut off link displayed if too long
                if (link.length>30){
                    link = link.substring(0,60) + "...";
                }
                var row = document.createElement("tr");
                var posCell = document.createElement("td");
                posCell.textContent = i + '. ' + link;
                row.appendChild(posCell); 

                tbody.appendChild(row);
                i++;
            });
            table.appendChild(tbody);
        });
    }
}

//8. Shopping
document.getElementById('shopping').onmousedown = function(event) {
    if (event.which == 3) {
        chrome.storage.sync.get('shopping', function(items){
            //case where cluster array of links is empty
            if (items.shopping.length == 0){
                alert('There are no links in the Shopping Cluster to edit.');
                return;
            }
            //case where edit box is already open and editing the same cluster
            var hidden = document.getElementById("hidden-edit");
            var title = document.getElementById("edit-title");
            if (hidden.className == 'edit-active' && title.innerHTML.substring(0,4) == 'Shop'){
                return;
            }
            title.innerHTML = "Shopping Cluster: Enter the position of the link you wish to delete.";
            hidden.className = 'edit-active';
            var arr = items.shopping;
            var table = document.getElementById("edit-table");
            table.innerHTML = ''; //clear table in case it was filled with previous cluster array links
            var tbody = document.createElement("tbody");
            var i = 1;
            arr.forEach(function(link){
                //cut off link displayed if too long
                if (link.length>30){
                    link = link.substring(0,60) + "...";
                }
                var row = document.createElement("tr");
                var posCell = document.createElement("td");
                posCell.textContent = i + '. ' + link;
                row.appendChild(posCell); 

                tbody.appendChild(row);
                i++;
            });
            table.appendChild(tbody);
        });
    }
}

