---
layout: project
category: projects

title:  "Kalamazoo Racing"
subtitle: "cooperative gaming with custom controller"
date:
  completed: 2016-03-30
  started: 2015-02-01


images:
  gallery: img/handcar/gallery.png
  splash: img/handcar/prototype-controller.jpg

tags:
- game design
- interface design
- controller design
- unity 3d
- physical prototyping

---
'Kalamazoo Racing' (or "the handcar game" as we mostly call it) is a cooperative gaming experience. Two players share a large controller to move a handcar forward.<!--more--> By moving the handles up and down the handcar in the game goes forward along a track. The players can also switch track on certain spots in the level.

It started as a 2min throw-away pitch for a dumb simple game but apparently there is something in racing done by pump-cart! (It turns out that this is actually [a real thing!](https://www.youtube.com/watch?v=n2FKH0EsrO8)) The original idea included obstacles like oncoming trains and cows on the track and was thought to be in the style of 8-bit sports classic such as "Track & Field", "California Games", "Skate Or Die" and "Excitebike", with an isometric perspective and retro pixel graphics.

![Pitch illustration](../../../../img/handcar/pitch.png "Pitch obstacles illustration")

The finished game was developed in Unity3D with low-poly graphics instead of pixel-art. The cart transformed into a hover-cart with a "space-ship/submarine" design and we added a power meter and the ability to jump. We also used a timer and checkpoint mechanic, like those found in arcade racing games such as "Sega Racing". The main challenge in the final product was not scaring away cows or avoiding oncoming trains but instead traversing the level as fast as possible while not crashing into a tree or jumping out of the track.

## Prototyping

Deciding on style, type and direction of the game was done by a combination of brainstorming and bodystorming. We made mindmaps, doodled on whiteboards and tried to get an overview over the games fundamental concepts and gameplay. We made paper tiles and pretended to play the game and "avoided" obstacles by hitting imaginary controllers (see video further down). To not lock ourselfs into a specific concept (that may or may not be *the* concept) we also developed a few unrelated game concepts with completely different gameplay and controllers. In the end we decided to continue work on the original concept with focus on two-player cooperation and a novel but intuitive interface.

![Paper prototyping](../../../../img/handcar/paper-prototyping.jpg "Paper prototyping of fundamental game mechanics")

To explore the the physical interaction with this "pump"-interface we created a small-scale prototype controller with Legos. It revealed a couple of issues for us: (1) two players standing face-to-face would not allow for an equal opportunity to watch the screen and/or would create a sub-optimal viewing experience, (2) the placing of auxiliary *shared* controls (such as switch and horn/jump buttons) would be difficult would this design have been made in 1:1 scale, this because of players limited reach and the focus the primary action already demanded, and (3) such a small controller was actually quite cute and fun for players to use, not nearly the inferior player experience we first believed it would be.

![Lego controller](../../../../img/handcar/lego-controller.jpg "Small-scale Lego prototype controller")

## Controller design

The experience with the first controller prototype led us to create a more arcade-style second controller and not a hulking giant. Still large, mind you, but the feeling while using it should be the joy and fun we observed in the first controller. We also decided to break the main axis and have the players standing slightly angled towards each other. This so that both players could face the screen *and* still cooperate effectively. We again used Lego to brainstorm and pitch the mechanical solutions to these new difficulties.

![Controller planning](../../../../img/handcar/controller-planning.jpg "Meeting about the mechanics of the final prototype controller")

![Controller mock-up](../../../../img/handcar/controller-mockup.jpg "Cardboard mock-up of controller")

![Final prototype controller](../../../../img/handcar/prototype-controller.jpg "Building the final prototype controller")
*Building the final controller. We used an Arduino Uno and controlled it directly from Unity3D by using the [Firmata protocol](https://www.arduino.cc/en/Reference/Firmata) and the [Uniduino package](http://www.uniduino.com/)([Asset Store](https://www.assetstore.unity3d.com/en/#!/content/6804)). We read the central axis with a Hall effect sensor and used regular switches for the track-switcher.*

## Game development

![Planning track-prefabs](../../../../img/handcar/planning-prefabs.jpg "Drawing the different game objects necessary")
*The different track pieces needed to make a level were first planned on a whiteboard. These were then created in Unity and used to create the levels. The original idea was to have them procedurally generated for a endless-mode. But, yeah, procedural generation is tricky and we quickly abandoned that idea.*

![Level design](../../../../img/handcar/level-design.jpg "Sketches of the first couple of levels")
*Levels were first drawn on strips of paper to get a quick overview, to discuss the layout and approximate difficulty.*

![Kids playing](../../../../img/handcar/kids-playing.jpg "Some awesome kids try out the game at the  Arduino day 2016 event")
*We had the opportunity to bring our game to Arduino day -16 in Malmö, Sweden.*

## Difficulties

Working with this project went mostly fine. Some steps in the concept development phase were allowed to consume a bit too much time, time that could have been spent better in the later stages of the project. A good conceptual foundation is necessary for a successful result but I do imagine that if we would have been untethered to our course's schedule we would have had better time allocation.

The complexity of our envisioned interaction led to technical difficulties both in game development, controller programming and prototype building. This pushed back our external game-play sessions. Most notably this can be seen in the player feedback from the game, UI and rushed level design. Because no time was available to build a simple level editor (or some form of level construction editor tools) level creation was very time consuming. Levels were only internally tested and power-ups and checkpoint mechanics were underdeveloped.

<iframe style="width:94%; height:50vh;" src="https://www.youtube.com/embed/rT71GFQMS9Q" frameborder="0" allowfullscreen></iframe>

## Result

For all its flaws, however, there was one thing that our game-play tests, internal presentation and showcase at 'Arduino day -16' showed; it was fun! People liked it (kids *loved* it) and spectators *were* intrigued and wanted to try it out for themselves. I could not imagine a better complement as an interaction designer than players actually *wanting* to interact with our game.

This project really showed that the concept is viable. The goal for the course was to create a fun game with a novel way of interacting and controlling it. With this in mind I think it was a clear win and I would love to get the opportunity in the future to take this different interaction further. I can really see an amazing arcade cabinet with some weird pump-controller sticking out! 

<iframe style="width:94%; height:50vh;" src="https://www.youtube.com/embed/6hWU9RCgwFc" frameborder="0" allowfullscreen></iframe>
