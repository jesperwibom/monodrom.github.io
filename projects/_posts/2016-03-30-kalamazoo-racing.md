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

![Level design](../../../../img/handcar/level-design.jpg "Sketches of the first couple of levels")

## Testing

![Kids playing](../../../../img/handcar/kids-playing.jpg "Some awesome kids try out the game at the  Arduino day 2016 event")

## End result and reflection

<iframe style="width:94%; height:50vh;" src="https://www.youtube.com/embed/rT71GFQMS9Q" frameborder="0" allowfullscreen></iframe>

<iframe style="width:94%; height:50vh;" src="https://www.youtube.com/embed/6hWU9RCgwFc" frameborder="0" allowfullscreen></iframe>
