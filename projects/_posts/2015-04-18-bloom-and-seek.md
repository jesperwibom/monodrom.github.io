---
layout: project
category: projects

title:  "Bloom And Seek"
subtitle: "A complex location based treasure-hunt game for Android"
date:
  started: 2015-04-18
  completed: 2014-06-10

images:
  gallery: img/bloom-and-seek/gallery.png
  splash: img/bloom-and-seek/concept-card.jpg

tags:
- arduino
- android
- java
- firebase
- python
- prototyping
- development
- project-management

note:
---

The final project, year one at interaction-design was a five week project encompassing several different technologies and design paradigms.<!--more-->  The goal was to create a multi-device application for Android-phones and public screens. It was also going to be place-specific to Malmö university's new building, called 'Niagara'.


Furthermore, the display application should provide different functionality than the Android app. The android app should also be a control for some of the screens functions and, finally, the communication between all modules were to be made using Firebase, an asynchronous database service.

##Concept creation
We were divided in random teams of 7 persons/team and were given our own project rooms("the war-room"). We started creating our concept imediaetly by going around the table and discussing previous experiences with these kinds of multi-device and place-specific projects. Turned out that this group was phenomenal at generating ideas, most of them really good!

After a myrriad of concepts where placed on our whiteboard, we had the daunting task of reducing these good ideas into a single great one. We sorted the concepts into groups of relating categories.  

![Concept creation](../../../../img/bloom-and-seek/concept-creation.jpg "Concept creation")

After several more discussions, categorizing and voting, in the end of the week we presented our concept. We finally decided to focus on Niagara's amazing rooftop garden and we created a concept with the goal of letting new students explore the building and the garden.

The idea was to build a casual gaming experience, a scavanger hunt, where the player was looking for hidden "treasure". The tresure was represented by item-icons in the Android application and these treasure-items could be "given" to a tree in the garden to start a light installation. This would look especially nice in the darker parts of the year. (In Sweden it's quite dark most of the year, so...)

The player was given information on the public screens about the location of the treasures. They then had to scan these treasures by scanning the correct qr-code. The qr-codes where distributed around the building and the public screens provided an top-view map over the building.

<iframe style="width:95%; height:50vh;" src="https://www.youtube.com/embed/i6TB_mRXQ40" frameborder="0" allowfullscreen></iframe>

We originally envisioned the treasure items to not be qr-codes. Alternatives that were proposed was NFC modules and checking location data. Location data was not expected to work in such a large building and NFC modules where to costly and would taken to much time to ship. So we made qr-codes our stand in for NFC.

For user testing purposes we also made a large-ish sized led matrix, 1x1 meter, that could give users adequate feedback. A full-blown light installation was to expensive to realize in this early state of the project.

Below you can see a picture over how all these parts where going to communicate. IoT plant is a Arduino Uno connected to a Raspberry Pi B+. (Firebase only allows http**s** requests and a Raspberry Pi is the cheapest way to achieve this.)

![Flow chart](../../../../img/bloom-and-seek/concept-flow-chart.svg "Flow chart")

![Vision](../../../../img/bloom-and-seek/concept-vision.jpg "Vision")

##Development

![Storyboard](../../../../img/bloom-and-seek/concept-storyboard.jpg "Storyboard")

![Graphical profile](../../../../img/bloom-and-seek/graphical-profile.png "Graphical profile")

##User testing

![User testing](../../../../img/bloom-and-seek/user-testing.jpg "User testing")

![Inventory sketch](../../../../img/bloom-and-seek/inventory-sketch.jpg "Inventory sketch")

##Conclusion

![Concept card](../../../../img/bloom-and-seek/concept-card.jpg "Concept card")
