

const mainContainer = document.getElementById('main-container');
const container = document.getElementById('container');

const home = `
    <div class="links-container">
        <h2>"No matter how long is the journey, You always start from a single step"</h2>
        <h3>Today I'll show you a bit of my journey...just hover and click around!</h3>
    </div>
    <div class="picture-container">
        <img src="./images/me2.png">
    </div>
    `;

container.innerHTML = home;


//music

mainContainer.addEventListener('click', function(e){
    document.getElementById('images-container').classList.add('hidden')
    if(e.target.id === 'music-link'){
        let music = `
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
        let rome = 
        `<div class='rome-container'>
        <h1>Rome is my Eternal City</h1>
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
        </div>
        `;

        container.innerHTML = rome;
    }
})