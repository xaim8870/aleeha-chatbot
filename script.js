function getResponse() {
  const userInput = document.getElementById('userInput');
  const chatBox = document.getElementById('chatBox');
  const question = userInput.value.trim().toLowerCase();

  const responseBank = {
    "who": [
      "Aleeha is a sunshine in human form 🌞💖",
      "She's a sweet and silly girl you can't forget 😄",
      "She's Aleeha — everyone's favorite star! 🌟"
    ],
    "yes": [
      "Absolutely! Me too, so what's it gonna be! 🎉",
      "Yes! A thousand times yes! 💖",
      "Of course! She is such an interesting and amazing girl! 🌈"
    ],
    "age": [
      "She's 16 and totally rocking it! 🎉👧",
      "Just sweet 16 and sparkling with energy ✨",
      "A young queen at 16 👑💫"
    ],
    "live": [
      "She lives in the beautiful Pakistan 🇵🇰",
      "Aleeha lives in Pakistan but her heart lives in Riyadh too 🏠❤️",
      "Born in Saudi Arabia, living gracefully in Pakistan 🌍"
    ],
    "like": [
      "She's funny, kind, and a total delight 😍",
      "Playful, smart, and simply adorable 💕",
      "She's a rainbow in everyone's cloud 🌈😊"
    ],
    "love": [
      "She loves fun, friends, and fantasy 📚✨",
      "Her heart is full of joy and love for everyone 💖",
      "She loves making people smile 😄"
    ],
    "bye": [
      "Bye-bye! Come back soon 💌",
      "See ya later, lovely human! 👋",
      "Leaving so soon? I'll miss you 😢"
    ],
    "hi": [
      "Hi there! 👋 Got a question about Aleeha?",
      "Hey hey! 😊 Let’s talk about our star, Aleeha!",
      "Yoo! Ready to know about the amazing Aleeha? 😎"
    ],
    "hello": [
      "Hello! Welcome to the Aleeha chat! 🌟",
      "Hi! Ready to dive into Aleeha's world? 🌍"
    ],
    "color": [
    "She loves pink — just like her vibe! 💗✨",
    "Pink is her power color! 🎀💖",
    "She’s all about that soft pink aesthetic 🌸💕"
    ],
    "food": [
      "She can’t resist biryani 🍛🔥",
      "Fries and nuggets? Her comfort food! 🍟🍗",
      "Aleeha + ice cream = perfect combo 🍦💘"
    ], 
    "hobby": [
      "She loves reading and writing 📖✍️",
      "Aleeha enjoys painting and creating art 🎨✨",
      "Her hobby? Spreading joy and laughter! 😄💖",
      "She loves painting little rainbows 🎨🌈",
      "Dancing around like nobody’s watching 💃🎶",
      "Writing cute stories and doodling her thoughts 📝✨"
    ],
    "school": [
      "She’s a student with a sparkle in her eyes 📚💫",
      "School is her playground of learning and laughter 🏫😊",
      "She shines bright even in exams 🌟📝"
    ],
    "music": [
      "She vibes with pop songs and happy beats 🎧🎶",
      "Anything with a good rhythm makes her groove 🎵💃",
      "She could dance all day to her fav tunes 🎤🕺"
    ],
    "friends": [
      "She’s the kind of friend who sends you memes at 2 AM 😂💌",
      "Her friends adore her sweet, silly heart 💞",
      "She makes every friendship feel magical ✨👯"
    ],
    "dream": [
      "She dreams of traveling the world with joy ✈️🌍",
      "One day she’ll paint her dreams across the skies 🎨🌌",
      "Her dreams are full of stars and sparkles 🌟💭"
    ],
    "animal": [
      "She adores fluffy kittens and playful puppies 🐱🐶",
      "Unicorns? Oh, absolutely! 🦄💖",
      "Bunnies make her heart melt 🐰💕"
    ], 
    "place": [
      "She loves quiet cafes and cozy corners ☕📚",
      "Aleeha dreams of visiting Paris one day 🇫🇷💐",
      "Her happy place? Anywhere with fairy lights ✨🌃"
    ],
    "cartoon": [
      "She grew up loving Dora and Barbie 🧁👧",
      "Cartoons? They’re her weekend joy 😄📺",
      "Her fav cartoon character changes every week! 🦸‍♀️🌈"
    ],
    "mood": [
      "She’s sunshine mixed with a little mischief 🌞😜",
      "Today? Feeling like a queen 👑💁‍♀️",
      "Her mood swings but always stays sweet 🍭❤️"
    ]


  };

  if (question) {
    const userMessage = document.createElement('div');
    userMessage.classList.add('message', 'user');
    const userContent = document.createElement('div');
    userContent.classList.add('message-content');
    userContent.textContent = userInput.value;
    userMessage.appendChild(userContent);
    chatBox.appendChild(userMessage);

    let reply = "Hmm, I don't know that yet 🤔💭";

    // Match keywords
    for (let keyword in responseBank) {
      if (question.includes(keyword)) {
        const replies = responseBank[keyword];
        reply = replies[Math.floor(Math.random() * replies.length)];
        break;
      }
    }

    const botMessage = document.createElement('div');
    botMessage.classList.add('message', 'bot');

    const stickers = [
      'images/sticker1.png',
      'images/sticker2.png',
      'images/sticker3.png'
    ];

    const stickerImg = document.createElement('img');
    stickerImg.src = stickers[Math.floor(Math.random() * stickers.length)];
    stickerImg.alt = "Sticker";
    stickerImg.classList.add('sticker');

    const botContent = document.createElement('div');
    botContent.classList.add('message-content');
    botContent.textContent = reply;

    botMessage.appendChild(stickerImg);
    botMessage.appendChild(botContent);
    chatBox.appendChild(botMessage);

    userInput.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const userInput = document.getElementById('userInput');

  userInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();  // prevent newline or form submission
      getResponse();           // trigger your response logic
    }
  });
});