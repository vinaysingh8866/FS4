const say = require("say");
say.speak("Hello , Alex", 0.5);
say.stop();
let sorryDave = () => {
    say.speak("I'm sorry, Dave")
    say.stop();
}
sorryDave()