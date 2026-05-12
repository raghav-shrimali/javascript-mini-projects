const quotes = ["Success begins the moment you stop waiting and start doing",
"Discipline will take you where motivation cannot",
"Your future is created by what you do today not tomorrow",
"Small progress every day builds unstoppable confidence",
"Don’t fear failure fear staying the same",
"Consistency is the real shortcut to success",
"Dreams work only when you do",
"The grind you avoid today becomes the regret of tomorrow",
"Focus on growth not approval",
"Hard work beats talent when talent doesn’t work hard",
"You don’t need perfect timing just strong commitment",
"Turn your excuses into reasons to succeed",
"The pain of discipline is temporary but regret lasts forever",
"Believe in yourself even when no one else does",
"Every expert was once a beginner who didn’t quit",
"Build habits that build your future",
"Action kills fear faster than overthinking ever will",
"Stay patient stay consistent and trust the process",
"You are one decision away from a completely different life",
"Success is earned in silence and revealed in results"
];

const button = document.querySelector('button');

const quote = document.querySelector('h1');
    button.addEventListener('click',()=>{
   const index = Math.floor(Math.random()*20);
   quote.textContent = quotes[index];
})
