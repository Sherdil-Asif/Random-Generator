var button = document.getElementById('button');

var output = document.getElementById('output');

var quotes = [
        'Often these types of connections can be highly beneficigets exposed to your guen product or content, or offer',
        'Reach out to your connections in the industry. Ask them to create a blog post for your website, ',
        'A very simple way to save time on content creation is to create less content. Instead of focusing on how much content you can',
        'Lets say you have five hours a week you, or someone on your team can dedicate to content creation such as blog posts. ',
        ' To repurpose content, find some well-performing content. Did you have a blog post that got a lot more page views and time on page than other posts you published? Or did  ',
        ' Its not simply about churning out content. Repurposed content helps ens ',
        '  When you block out a specific day for idea gou more efficiently use your time.',
        '“Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.” – Og Mandino',


];

button.addEventListener('click', function(){
     
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;
})