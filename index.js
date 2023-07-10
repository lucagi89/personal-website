

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
            <div class='songs'>
                <img src='./images/me-playing.jpg' class='me-playing'>
                
                <label for='if-my-life-goes-wrong'>If my life goes wrong</label>
                <audio src='./music/If my life goes wrong.mp3'id='if-my-life-goes-wrong'controls></audio>
                
                <label for='prendimi-con-te'>Prendimi con te</label>
                <audio src='./music/prendimi con te.mp3' id='prendimi-con-te'controls></audio>
                
                <label for='fino-alle-nuvole'>Fino alle nuvole</label>
                <audio src='./music/Fino alle nuvole.mp3' id='fino-alle-nuvole' controls></audio>
                
                <label for='in-questo-mondo-digitale'>In questo mondo digitale</label>
                <audio src='./music/in questo mondo digitale.mp3' id='in-questo-mondo-digitale' controls></audio>

                <label for='ma-nessuno-sa'>Ma nessuno sa</label>
                <audio src='./music/Ma nessuno sa.mp3' id='ma-nessuno-sa' controls></audio>
            </div>
        </div>
    </div>
    `
    if(e.target.id === 'music-link'){
        container.innerHTML = music;
    }
})