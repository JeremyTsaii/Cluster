# Cluster Chrome Extension

The Cluster Chrome Extension allows users to open their most-used related webpages with a single click. Often, we visit a set of pages that go hand in hand and wouldn't make sense without each other. For example, if you have a personal email account and school/work account, you would most likely want to open both of these to check for anything new. With this chrome extension, you can store links for both of these emails in a "cluster" and with a single click of a button, both will open up.

Cluster replaces your Google Chrome homepage and provides 8 clusters, including Work, School, Mail, Music, Entertainment, Social Media, Sports, and Shopping. If perhaps you do not have multiple links that you want associated to a cluster, you can simply treat it as a favorites button and add a single link. Additionally, there is a custom greeting personalized with your own name. 

Version 1.1.0 comes with the ability to change your background to 10 high-definition themes so you can further personalize your home screen!

Check it out on the Chrome Web Store [here.](https://chrome.google.com/webstore/detail/cluster/gfnojhigkbkldehjmjgmppmaknjcomio?hl=en)

![Example Image](https://github.com/JeremyTsaii/5C-RateMyP/blob/master/example/siteExample.PNG)

### How was this developed?

This extension relies on the Chrome Storage API to stores link associated with each cluster, using the cluster's name as the key. On installation of the extension, the 8 clusters have empty arrays associated with them. Once the user navigates to a webpage that they want to store under a cluster, they click on the extension icon and click the cluster they want to add the current page to. The current tab's link is gathered and pushed to the back of the cluster's array using the Chrome Storage API. 

At the user's homepage, the extension listens for clicks on a specific cluster and once a cluster is clicked, the extension loops through the links stored in the associated array and opens them in new tabs. 

The user's username for the customized greeting is also stored using the Chrome Storage API and the user can change it under the settings, which is accessed by clicking on the gear icon in the upper left corner. (The gear rotates when hovered over, yay!).

The user's chosen background is also stored using the Chrome Storage API and can be changed by accessing the settings and clicking on the preferred background. 
