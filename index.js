
import { messages } from './messages.js';
const mainContainer = document.getElementById('main-container');
const container = document.getElementById('container');

const home = `
    <div class="phrase-container">
        <h2>"No matter how long is the journey, You always start from a single step"</h2>
        <h3>Today I'll show you a bit of my journey...just hover and click around!</h3>
    </div>
    <div class="picture-container">
        <img src="./images/me2.png">
    </div>
    `;

container.innerHTML = home;


// render the various topic pages

mainContainer.addEventListener('click', function(e){
    document.getElementById('images-container').classList.add('hidden')
    document.getElementById('home-btn-container').classList.remove('hidden')

    document.addEventListener('click', function(e){
        if(e.target.id === 'home-btn'){
            document.getElementById('images-container').classList.remove('hidden')
            document.getElementById('home-btn-container').classList.add('hidden')
            container.innerHTML = home;
        }
    })
   
    if(e.target.id === 'music-link'){
        const music = `
    <div class='music-container'>
        <h1>Music has always been my main passion</h1>
        <div class='music-content'>
            <p>Since when I was a little kid, I was always fascinated by music, with my parents that would listen to a lot of different artists and genres.
            I really started to get into this world at 15, when I embraced a guitar and never left it since.
            In my twenties I played as a guitarist in various bands and projects, and I also started to write my own songs.
            Few years ago I had many songs that I had written, but never recorded them. So I decided that I was going to record them in a studio, but the problem is that I only had the voice and guitar part really defined.
            In a recording studio usually, the more time you take the more you pay, so I had to have drums, bass guitar and keyboard defined as well, so that I wouldn’t have any doubts on how to record the song in the studio.
            As I downloaded an audio recording programme in my computer and started to record my songs, I notice that the quality was not bad at all, so eventually I decided to record everything myself.
            Since then, in my spare time I would sit in my home studio and record some music or jam with myself.</p>
            <h3>You can listen to some of my songs below:</h3>
            <div class='image-songs'>
                <div class='image-container'>
                    <img src='./images/me-playing.jpg' class='me-playing'>
                </div>
                <div class='songs'>
                <div>
                    <label for='if-my-life-goes-wrong'>If my life goes wrong</label>
                    <audio src='./music/If my life goes wrong.mp3'id='if-my-life-goes-wrong'controls></audio>
                </div>
                <div>
                    <label for='prendimi-con-te'>Prendimi con te</label>
                    <audio src='./music/prendimi con te.mp3' id='prendimi-con-te' controls></audio>
                </div>
                <div>
                    <label for='fino-alle-nuvole'>Fino alle nuvole</label>
                    <audio src='./music/Fino alle nuvole.mp3' id='fino-alle-nuvole' controls></audio>
                </div>
                <div>
                    <label for='in-questo-mondo-digitale'>In questo mondo digitale</label>
                    <audio src='./music/in questo mondo digitale.mp3' id='in-questo-mondo-digitale' controls></audio>
                </div>
                <div>
                    <label for='ma-nessuno-sa'>Ma nessuno sa</label>
                    <audio src='./music/Ma nessuno sa.mp3' id='ma-nessuno-sa' controls></audio>
                </div>
                </div>
            </div>
        </div>
    </div>
    `
        container.innerHTML = music;
    }else if(e.target.id === 'rome-link'){
        const rome = 
        `<div class='topic-container'>
        <h1>Rome is my Eternal City</h1>
            <div class='topic-image'>
                <p>Rome is my city. Obviously I mean The Eternal City, the one and unique Rome that you can find in central Italy. I was born e grew up there.
                    I’ve always been fascinated by the mysteries and stories that my city carries with it.
                    Somebody says that it is an open-sky museum and it is true, but is not just that.
                    Rome is many many things more, is the art and the culture, but it is also the Vatican and the Government. 
                    Rome is the luxury and the poverty of the immigrants who sleep in the stations. 
                    It is a walk under the colosseum, but it is also a night out in Trastevere, where you can find many restaurants and bars, full of any generation of people.
                    I especially love Rome in a summer night, because you can feel something in the air that is hard to describe, you know that something is going to happen and that Rome is gonna surprise you in some way. 
                    There is always something that you don’t know about Rome, even something that’s been under your nose for long time and you never noticed. 
                    Even if now I don’t leave there anymore, I feel like the more I stay away from Rome the more I need it and I can’t wait to go back.
                    I would have much more to say, but the reality is that I don’t think I’m good enough to say it all and also I don’t have much space on the page, so I stop here, hoping that one day you’ll know (if you don’t know already) what I tried to talk about.
                </p>
                <div class='topic-pic-container'>
                    <img src='./images/me-rome.png'class='topic-pic'>
                </div>
            </div>
        </div>
        `;

        container.innerHTML = rome;
    }else if(e.target.id === 'london-link'){
        const london =
        `<div class='topic-container'>
        <h1>The World in London</h1>
            <div class='topic-image'>
                <p>
                London is my second home, my second opportunity and a new life for me. I’ve been living in London for five years straight now, after coming here for a year the first time in 2014. 
                I’ve always been fascinated by the amount of different cultures that can coexist in the same city, London feels like the world in a single city, there are a lot of things happening in here at every moment. 
                Living in here gives you the opportunity to be anyone you want to be in life. For me it was a bit hard at the beginning because when I came here I didn’t speak much English and the little English that I remembered from school, wasn’t actually very useful.
                Coming from that, the first few months in London I had to take any job opportunity that I had, and the first ones weren’t the most pleasant ones.
                Now after few years I can say that I can have more control over my career path, and just being a “Londoner” for some time gave me the confidence that will and persistence can help you achieve anything if you really want it.
                I thank this city every day, because it made me switch my mentality, and even if I have a lot to do, I know that I can do it.
                </p>
                <div class='topic-pic-container'>
                    <img src='./images/me-london.jpg'class='topic-pic'>
                </div>
            </div>
        </div>
        `;
        container.innerHTML = london;
    }else if(e.target.id === 'finance-link'){
        const finance =
        `<div class='topic-container'>
        <h1>The Wolf of Willesden Green</h1>
            <div class='topic-image'>
                <p>
                In my current job, I have the possibility to meet a lot of people that work in finance or do business with finance related companies. 
                This grew in me fair interest in the topic and things related to it. In the last 3 years I started gathering high informations about the finance world and the stock market exchange and I find it very fascinating, you can make a lot of money just betting on the right horse, but you can also lose a lot. 
                It seems like a game, but entire companies and people lives base their future on this “game”. I didn’t have any idea that our economy was so complicated and so fragile at the same time.
                I decided to start playing a bit of the game, putting little money on it, knowing that I could lose it all. For me it’s not about money itself, but it is about being present in the world we’re in. 
                Playing with the stock market makes you research and get informed about the economic trends and the situation our society is heading to.
                Of course nowadays when you talk about finance you can’t leave the “Crypto world” aside. I’m really excited about crypto and the blockchain technology behind it. 
                I’m actually more invested in cryptocurrencies than in the stock market, but I still think that most of the cryptocurrencies are actually a Frode and that they’re gonna disappear. 
                The blockchain technology dough, it is something that is here to stay and shape our future together with AI.
                I actually got into coding, because one day eventually I want to work with blockchains too.
  
                </p>
                <div class='topic-pic-container'>
                    <img src='./images/me-finance.jpeg'class='topic-pic'>
                </div>
            </div>
        </div>
        `;
        container.innerHTML = finance;
    }else if(e.target.id === 'hospitality-link'){
        const hospitality =
        `<div class='topic-container'>
        <h1>Not Just a Plate</h1>
            <div class='topic-image'>
                <p>
                I’ve been working in hospitality since when I moved to London. I have no shame on saying that I started by cleaning toilets and washing dishes, 
                and sometimes I was cleaning toilets in the morning and washing dishes in the evening. As my English improved I started working more on the restaurant floor, 
                at first just taking plates to the table and then taking guest orders as well.
                Now I work for a fine dining restaurant in one of the best hotels in London.
                After few years of experience, I can say that working in hospitality is not as easy as many people think. Especially in the fine dining and five stars world, 
                you need to know what you’re talking about when talking to a guest and you need to know how to deal with different kinds of glitches that could happen in any normal service. 
                Nowadays people really care on what they put in their mouth and really care about the experience that you deliver them when they walk in your restaurant.
                Everybody is different, but working constantly with public, gives you the opportunity to start recognising the different kinds of people as soon as they walk in, and this gives you the opportunity to try anticipate their needs, 
                which is a very sought for skill in hospitality.
                I’m grateful to have had the chance to work in hospitality, because you have the possibility to meet a lot of people, among colleagues and guests, that can really shape and enrich your existence, and even if it’s hard, it is also fun.
  
                </p>
                <div class='topic-pic-container'>
                    <img src='./images/me-hospitality.jpeg'class='topic-pic'>
                </div>
            </div>
        </div>
        `;
        container.innerHTML = hospitality;
    }else if(e.target.id === 'football-link'){
        const football =
        `<div class='topic-container'>
        <h1>Forza Lazio!!!</h1>
            <div class='topic-image'>
                <p>
                Football in Italy is almost like a religion. Some people live only for football and spend entire weekends following the team they support in other cities or nations and they don’t talk about anything else. 
                For me this is a bit too much, but I consider football an important part of my everyday life. I support Lazio witch is a team based in Rome, and everyday I keep myself updated on its news and topics and I watch every match I can.
                It is a thing that I do since when I was I kid, in fact my dad used to take me to the stadium sometimes and I really enjoyed it. At the beginning for me football was only an excuse to interact with adults and friends, and I wasn’t really interested on the actual matter. 
                But when I was 11 I started to play with my local football team and I started to get more into the soul of this sport. I became more passionate and I began to watch matches on my own and checking all the news, at that point my dream was to become a football player. But of course my lack of a big talent, didn’t agree with that. 
                Back in these days I really enjoy watching Lazio’s matches, but a part from it, I don’t really follow everything that is going on in football if it does’t concern Lazio.
                I also enjoy playing football five a side, even dough since I moved to London I haven’t played much, but who knows what the future may unfold.
                </p>
                <div class='topic-pic-container'>
                    <img src='./images/me-football.png'class='topic-pic'>
                </div>
            </div>
        </div>
        `;
        container.innerHTML = football;
    }else{
        const coding = `
        <div class='topic-container'>
            <h1>My Coding Journey</h1>
            <div class="topic-image">
            <p>
            I always looked at coding like this super complicated thing that only math geniuses and people who grew up with a computer in their hands could do.
            I’ve never even met somebody who wrote code as a profession, up until my late twenties. I think that being surrounded by mostly people with “regular” jobs in my life didn’t help me towards the tech industry.
            What changed then? I still see coding like a super complicated thing, but now it is something that I believe I can learn and do. 
            I started gradually, at the beginning it was just interest towards cryptocurrencies and then I started looking at the blockchain technology, and then after watching some tutorials on how to code for blockchain in a programming language called Solidity, I felt that I needed to start from the basics of web development. So I started watching some tutorials online about the web development triad, Html-Css-Javascript.
            The more I practiced what I had learnt, the more I enjoyed it. And I really enjoy coding, there’s always a challenge, always something that you don’t know, always a way to improve.
            I find that it keeps your brain awake and focused and I like this feeling, and when you solve a problem that you got stuck with is like scoring a goal, it is exciting and gratifying.
            I want to learn everything in Web Development and beyond, and also after I got confident enough I want to learn Blockchain Development as well, because I believe that the Blockchain technology is gonna be the future of the internet together with Artificial Intelligence.
            I know that the road to walk is still long, but I want this to be my job and I want to be able to say that I’m a Web Developer. 

            </p>
                <div class="projects-links">
                <h2>Some of the projects I've done</h2>
                <a href="https://lucagi89.github.io/Game-fac/"><img src='./images/projects-pics/death fight.png' class='project-pic' alt='death fight'></a>
                <a href="https://lucagi89.github.io/splash-page/"><img src='./images/projects-pics/food ordering app.png' class='project-pic' alt='food ordering app'></a>
                <a href="https://lucagi89.github.io/Scoreboard/"><img src='./images/projects-pics/gameboard.png' class='project-pic' alt='gameboard'></a>
                <a href="https://lucagi89.github.io/City-Finder2/"><img src='./images/projects-pics/ideal city finder.png' class='project-pic' alt='ideal city finder'></a>
                <a href="https://lucagi89.github.io/Twimba-Twitter-Clone/"><img src='./images/projects-pics/twitter clone.png' class='project-pic' alt='twitter clone'></a>
                <a href="https://lucagi89.github.io/Password-generator/"><img src='./images/projects-pics/password generator.png' class='project-pic' alt='password generator'></a>
                <a href="https://lucagi89.github.io/Guitars-gallery/"><img src='./images/projects-pics/guitars gallery.png' class='project-pic' alt='guitars gallery'></a>
                <a href="https://lucagi89.github.io/Clock/"><img src='./images/projects-pics/clock cicle.png' class='project-pic' alt='clock cicles'></a>
                <a href="https://lucagi89.github.io/people-counter/"><img src='./images/projects-pics/people counter.png' class='project-pic' alt='people counter'></a>
                </div>
            </div>
        </div>
        `;
        container.innerHTML = coding;
    }
});

//render message form
document.getElementById("message-btn").addEventListener("click", renderMessageForm);

function renderMessageForm(){
    const formContainer = document.getElementById("form-container");
    formContainer.classList.toggle("hidden");
    const messageForm = `
    <h3>Send me a message</h3> 
        <button id='close-btn' class='close-btn'>X</button>
        <form class='message-form'>
            <div class='form-inputs'>
                <label for='name'>Name</label>
                <input type='text' id='name' name='name' placeholder='Your name' required>
            </div>
            <div class='form-inputs'>
                <label for='surname'>Surname</label>
                <input type='text' id='surname' name='surname' placeholder='Your surname' required>
            </div>
            <div class='form-inputs'>
                <label for='email'>Email</label>
                <input type='email' id='email' name='email' placeholder='Your email' required>
            </div>
            <div class='form-inputs textarea'>
                <label for='message'>Message</label>
                <textarea id='message' name='message' placeholder='Your message' required></textarea>
            </div>
            <div class='form-inputs'>
                <input type='submit' value='Send'>
            </div>
        </form>
    `;
    formContainer.innerHTML = messageForm;

    formContainer.addEventListener("click", (e) => {
        if(e.target.id === "close-btn"){
            formContainer.innerHTML = "";
            formContainer.classList.add("hidden");
        }
    });
    
    formContainer.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const surname = document.getElementById("surname").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        
        const messageObj = {
            name: name,
            surname: surname,
            email: email,
            message: message
        }

        messages.push(messageObj);
        console.log(messages);

        formContainer.innerHTML = "";
        formContainer.classList.toggle("hidden");
        });


}
