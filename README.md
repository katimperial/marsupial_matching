# Marsupial Matching!
### A Game by Kat Imperial
![Marsupial_Matching!](https://i.imgur.com/qtyML65.png)
![Marsupials!](https://cdn.britannica.com/19/93319-004-78B92D73/Australian-marsupials.jpg)
## Getting Started
* Fork and clone this repository
* cd into the marsupial_matching directory
* Open in your text editor of choice (example: for VSCode enter "code .")
## Game Objective
Marsupial Matching will be a cute matching game featuring everyone's favorite mammalian infraclass; Marsupials! 
A collection of cards will be presented to the player with just the backs visible. The player will click on the cards to reveal what is on the other side, a picture of a marsupial (kangaroo, kaola, etc.). For every card there will be a matching card hidden elsewhere on the board. If the cards that the player chooses are not a match they will flip back over. The goal is for the player to correctly match all of the marsupial pairs.
![Memory Game](https://img.lakeshorelearning.com/is/image/OCProduction/fg522?wid=800&fmt=jpeg&qlt=85,1&pscan=auto&op_sharpen=0&resMode=sharp2&op_usm=1,0.65,6,0)
## Difficulties (Levels)
There will be an easy and a hard difficulty setting. Easy will be 8 different marsupials, hard will feature 2 more marsupials totaling 10.
## Layout
Players will be presented with a grid (of sorts) of card backs. Easy will be 4x4 (8 matching graphics, 16 cards). Hard will be 4x5 (10 matching graphics, 20 cards. Perhaps more than 10 for hard?? Maybe can incorporate a couple other odd mammals that aren't marsupials for a bonus.) There will be a button giving the player the option to choose between levels and also a button giving the player the option to start over.
## Game Play
Each card will have a click event. The card backs (which are presented to the player at the start) will be stored in the HTML. My thought at this point is card "fronts" will be stored in the JS so they only appear when summoned. 
For each turn players will select 2 cards. If the cards match, they will stay turned over. (**freeCodeCamp.org** on YouTube recommends removing the event listener to achieve this.) If they do not then they will turn back to their original status and the player will have to try again. When all the cards have turned over the player will have won.
## If Time Allows
I would like to:
* Make the cards actually flip over when clicked.
* Create a custom header graphic for the game.
* Add a countdown timer so players have to find all the matches by a certain time.
* Have cards appear randomly for each game.
## Known Bugs
* Program recognizes a "double-click" on the same card as a "match" and leaves the card turned over.
* Unresolved issue with CSS layout for header...looks correct on my screen but might not on someone else's screen.

## Link to Deployed "Surge" Website

[https://learned-hill.surge.sh](https://learned-hill.surge.sh)

## Trello Board
[https://trello.com/b/8dZMtPqE/marsupial-matching](https://trello.com/b/8dZMtPqE/marsupial-matching)

## Sources
* [**Memory Card Game - JavaScript Tutorial**](https://www.youtube.com/watch?v=ZniVgo8U7ek)