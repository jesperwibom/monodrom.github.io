---
layout: post
category: blog

title:  "Samsung's current IoT initiative"
subtitle: "and the open Artik development platform"
date:
  started: 2015-12-05
  completed: 2014-12-13

images:
  gallery: img/samsungs-iot-initiative/gallery.jpg
  header: img/samsungs-iot-initiative/header.jpg

tags:
- internet of things
- samsung electronics
- smartthings inc
- arduino llc
- open source
---

[Adapted from school report] This article describes the current efforts of the Samsung-owned company SmartThings and looks at how their products fit in a Samsung IoT initiative.<!--more-->

The Samsung SmartThings Hub is a internet connected IoT device for connecting smaller sensors to SmartThings Open Cloud service. Connected modules can be controlled via a smartphone app and sensors can push notifications to the user through the same app. SmartThings Hub includes both Z-Wave and Zigbee wireless technologies. It is connected to the users router by using an ethernet cable. A user can buy several Samsung produced modules and connected sensors but the hub also plays nice with other brands devices. This include Philips Hue (you still need the Hue hub though), door locks from different manufacturers, Sonos connected speakers and more.

SmartThings is a technology company based in Palo Alto specialising in IoT and home automation. Co-founded in 2012 by among others Alex Hawkinson, they were acquired by Samsung in 2014 for 200 million dollars. Alex Hawkinson previously founded a  cloud service software company called SMBLive and is the CEO. There seems to be a strong sense with all the founders that the IoT of the future is based on an ever increasing internet cloud.

Samsung's immediate vision for IoT seems to be to connect all types of consumer appliances and home automation sensors to a cloud. Their cloud in the form of SmartThings IoT cloud service. A sensible strategy can be found in the company's move towards creating an ecosystem of their vast array of electronic product categories. Samsung is one of the biggest household appliance manufacturers, the current number one phone manufacturer and *the* largest tv-manufacturer. Better cooperation and shared computing/data between Samsung's smart products, regardless of their product category, could greatly incite consumer buy-in into a Samsung branded IoT ecosystem.

<a href="http://www.statista.com/statistics/267095/global-market-share-of-lcd-tv-manufacturers/"><img src="http://www.statista.com/graphic/1/267095/global-market-share-of-lcd-tv-manufacturers.jpg" alt="Statistic: Global market share held by LCD TV manufacturers from 2008 to 2014 | Statista" style="width: 100%; height: auto !important; max-width:1000px;-ms-interpolation-mode: bicubic;"/></a><br />Find more statistics at <a href="http://www.statista.com">Statista</a>

An interesting development by Samsung’s Strategy and Innovation Center (SSIC) is also the Artik family of development/prototyping/production IoT boards. Yet to be released, these small SoM's (System on Module) come equipped with BLE (low energy bluetooth), nine-axis sensor and low power consumption in the smallest module. More features and processing power can be found in the larger alternatives. Notable is that SmartThings second version of their IoT hub do also in fact come with bluetooth capabilities, albeit not yet activated. One can speculate about the possibility that Artik boards could get out of the box integration with SmartThings hub.

![The Artik 5 development board](../../../../img/samsungs-iot-initiative/artik-5-interior.png "Artik 5 interior")
© 2015 Samsung - The Artik 5 development board. Looks really nice with its black/gold color scheme!

Even more exiting is that the SSIC has worked together with Arduino LLC to make the Artik certified Arduino IDE compatible. The possibility of 'out of the box' integration of the Artik platform into the SmartThings already existing ecosystem of IoT devices – and, compatibility with the ubiquitous development environment that is the Arduino IDE – would give the maker community and DIY creatives an unprecedented easy access to an expanding IoT infrastructure.

> ARTIK joins the exclusive list of Arduino Certified processors that are compatible with the Arduino ecosystem. ARTIK can be programmed utilizing the Arduino Software Development Environment (IDE), and ARTIK developers can tap into the Arduino community for ideas, insights and best practices. Arduino integration brings the open ARTIK platform into the hands and minds of makers, hobbyists and first-time programmers, who can join developers in discovering new possibilities for the Internet of Things. - https://www.artik.io/partners, retrived 2015-12-11

It is unclear, at least for me, wether a centralized cloud service is the future of IoT. Trust in a cloud service is much more hard-earned after the iCloud scandal, Snowden and wiki-leaks all showed the horrid privacy vulnerabilities for the end-user. The current move by Samsung Electronics towards open-source and open-hardware is a good step towards the transparency consumers are starting to demand.

Links:
- https://blog.arduino.cc/2015/05/12/samsung-joins-arduino-certified-program/
- https://www.artik.io/
- https://www.smartthings.com/
