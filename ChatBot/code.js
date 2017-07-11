//The sample application will utilize Javascript for DOM manipulation and a simple form for input/output actions

//Array of quotes to choose from as a message
var quotes = [
"All successes begin with Self-Discipline. It starts with you.",
"Don't be afraid to be ambitious about your goals. Hard work never stops. Neither should your dreams.",
"Grind Hard, Shine Hard.",
"I like to use the hard times of the past to motivate me today.",
"Not only do I think being nice and kind is easy, but being kind, in my opinion is important.",
"One of the most important things you can accomplish is just being yourself.",
"The first step to achieving your goal, is to take a moment to respect your goal. Know what it means to you to achieve it.",
"The wall! Your success is on the other side. Can't jump over it or go around it. You know what to do.",
"There is no substitute for hard work. Always be humble and hungry.",
 "Wake up determined. Go to bed satisfied.",
 "We do today what they won't, so tomorrow we accomplish what they can't.",
 "When life puts you in touchy situations, don't say 'Why Me?', Just say 'Try Me.',",
 "When you walk up to opportunities door, don't knock it… Kick that b*tch in, smile and introduce yourself.",
 "With drive and a bit of talent, you can move mountains.",
 "You don't need directions, just point yourself to the top and go!",
 "Be the person that when your feet touch the floor in the morning the devil says, 'Awe s**, they're up",
 "If something stands between you and your success – move it. Never be denied.",
 "In 1995 I had $7 bucks in my pocket and knew two things: I'm broke as hell and one day I won't be.",
 "Success at anything will always come down to this: focus and effort. And we control both.",
"Success isn't always about 'Greatness', it's about consistency. Consistent, hard work gains success. Greatness will come.",
 "Success isn't overnight. It's when everyday you get a little better than the day before. It all adds up.",
 "Think back 5 years ago. Think of where you're at today. Think ahead 5 years and what you want to accomplish. Be Unstoppable.",
 "I grew up in a musical family; the majority of my growing up was done in Hawaii. It's what we do. You sing, you dance, you play ukulele and you drink.",
 "The men I idolized built their bodies and became somebody – like Sylvester Stallone and Arnold Schwarzenegger – and I thought, 'That can be me.' So I started working out. The funny thing is I didn't realize back then that I was having a defining moment.",
 "Football changed my life and it gave me a platform to get out my aggression and it gave me a sense of value.",
"I like the idea of working in different genres and transcending genres and hopefully finding success, and ultimately make movies people like.",
 "When he speaks to you he speaks with an earnest vibe and an earnest energy.",
 "Wrestling was like stand-up comedy for me.",
 "The one thing I couldn't identify with was the blue cowboy outfit he put on. I was a bit challenged when I was younger to stay on the right path.",
 "I want someone who can trust that my big hands are going to take care of them.",

 "I'm very low-key. I don't really blend in, so it's difficult to go out in public. I like to do things that are kind of quiet, whether it's a dinner at my house or a restaurant, or a movie night at home.",
 "My philosophy is, it's always very rewarding when you can make an audience laugh. I don't mind making fun of myself. I like self-deprecating comedy. But I'd like you to laugh with me occasionally, too.",
 "I like the idea of making a big, fun, adventure type of movie.",
 "When I was a kid at four years old, that's when I started amateur wrestling with my dad and family. And when that's instilled in you, it never goes away.",
 "You don't sign up for a divorce when you get married. It's very painful. But it's taught me a great deal about myself.",
 "WWE is a space where I thrived, and I loved, and I still do. I love connecting with an audience; that is the greatest thing about going back to WWE.",
 "I've always loved the showmanship of professional wrestling. While I love making movies, I love that platform, too.",
 "My goal was never to be the loudest or the craziest. It was to be the most entertaining.",
 "The road to success and greatness is always paved with consistent hard work. Outwork your competitors, be authentic, and above all else, chase your greatness.",
 "Let your actions do your talking for you.",
 "With drive and a bit of talent, you can move mountains.",
 "Just bring it!",
 "Two things happen when an athlete gets injured. Some guys say, ';F*ck it, I'm going to wait it out 3-4 months.' But with me and lots of other athletes, you find your eighth or ninth gear – a gear you've never gone to before – and say, 'I'm going to come back.'",
 "Training for me is a metaphor for life, period. The dedication, the determination, the desire, the work ethic, the great successes and the great failures – I take that into life.",
"My work, my goal, my life, it's like a treadmill. And there's no stop-button on my treadmill. Once I get on, I just keep going.",
 "I'll never, ever be full. I'll always be hungry. Obviously, I'm not talking about food. Growing up I had nothing for such a long time. Someone told me a long time ago and I've never forgotten it, 'Once you've ever been hungry, really, really hungry, then you'll never, ever be full.' So I'll always be hungry in some way, driven and motivated to get what I want.", 
 "I grew up where, when a door closed, a window didn't open. The only thing I had was cracks. I'd do everything to get through those cracks - scratch, claw, bite, push, bleed. Now the opportunity is here. The door is wide open, and it's as big as a garage.",
 "Be humble. Be hungry. And always be the hardest worker in the room.",
 "One of the most important things you can accomplish is just being yourself.",
 "Blood, sweat, and respect. First two you give. Last one you earn.",
 "It's you vs. you.",
 "It's not about the car your drive. It's about the size of your arm hanging out of the window.",
 "Keep calm and shut your mouth.",
 "If you really want to do something, you'll find a way. If you don't, you'll find an excuse.",
 "It's simple. Do it.",
 "I like to use the hard times of the past to motivate me today.",
 "You either play the game or let the game play you."]

//Create variables that represent the DOM elements
var botText = document.getElementById('botText');
var userText = document.getElementById('userText');
var sendMessage = document.getElementById('send');
var messageText = document.getElementById('message');
var conversation = document.getElementById('conversation');

//Miscellaneous test code to access the text displayed in the messages
/*
botText.innerText = 'javascript rules';
userText.innerText = 'yea buddy';
*/

//Create variables that are representations of the User and Bot generated messages
var newMessage = userText.cloneNode();
var newPrompt = botText.cloneNode();

//Hide the original HTML message bubbles
botText.hidden = userText.hidden = true;

//Add Send Button functionality for the click event
sendMessage.addEventListener('click', function() {
    //if there is nothing typed in, don't send a message
    if (!messageText.value) {
        return;
    }

    //New message process
    newMessage = newMessage.cloneNode(); //Make a fresh copy of the message bubble WITHOUT the text. if cloneNode(true), the text is also copied
    newMessage.innerText = messageText.value; //set the text in the message to match the input entered by the user
    messageText.value = ''; //empty out the input box
    conversation.appendChild(newMessage); //add the new message bubble to the chat screen
    newMessage.scrollIntoView(); //scroll down to show the new message

    //prepare bot to respond after 2.5 seconds
    setTimeout(function() {
        
        //make a new copy of the bot message element
        newPrompt = newPrompt.cloneNode();
        
        if (newMessage.innerText.toLowerCase().includes('cook') ) { //if the user typed in cook/Cook/cOoK/etc, show a new quote
            
            newPrompt.innerText = quotes[Math.floor(Math.random() * quotes.length)]; //set the message to include a quote

        } else if (newMessage.innerText.toLowerCase().includes('quit')) { //if the user typed in quit, say goodbye and close the window
            
            alert('Thanks for checking out the bot!');
            window.close();

        } else { //if the user typed in something else, reply with wah gwan, mon
            
            newPrompt.innerText = 'wah gwan';

        }
        
        conversation.appendChild(newPrompt); //add the message to the conversation
        newPrompt.scrollIntoView(); //scroll down to show it
    }, 2500) //set the time delay for the reply to 2.5 seconds. Written in milliseconds
});

//Allow the enter key to send the messages to the bot
messageText.addEventListener('keypress', function(e) {
    if (e.keyCode == 13) { 
        sendMessage.click();
    }
})

//when the page loads, send the initial greetings from the bot
window.addEventListener('load', function() {
    //New message process
    newPrompt = newPrompt.cloneNode();
    newPrompt.innerText = "This is not The Rock, but he supports these messages. Assuming that he doesn't regret his own previous public statements.";
    conversation.appendChild(newPrompt);
    newPrompt.scrollIntoView();

    //delay the follow up instructional message
    setTimeout(function() {
        newPrompt = newPrompt.cloneNode();
        newPrompt.innerText = "Reply 'cook' to find out what the Rock is cooking";
        conversation.appendChild(newPrompt);
        newPrompt.scrollIntoView();
    }, 2000);

});