//https://www.behance.net/gallery/125405749/Top-10-trending-pastel-color-palettes-in-2021?locale=es_ES

var source = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

var color=['#DBFFFF','#E1EBFF','#E9DCFF','#E5C5F1','#FFD2FB','#E0E0F3','#D5D1F5','#DECCE5','#E9CFE3','#F8E7F8',
            '#9381FF','#B8B8FF','#F8F7FF','#DDFFF8','#BEFFDA','#F1FFDB','#E5FFCF','#D7FFCE','#D1FFEC','#BEF1F6',
            '#EFFFC5','#FAFFD4','#FFF4D1','#EFEFEF','#D2ECFF','#FFDBDB','#FFEDE1','#F5ECCF','#EBECE6','#E1FAFF',
            '#FDFFE4','#F8F2E0','#ECE1D5','#FFE2D1','#F3D6CE','#D0E3CC','#F7FFDD','#FCFDAF','#FCEAA8','#E6BC87',
            '#FFBBDA','#FCF6BD','#D0F4DE','#C0E4F6','#E8CFF8','#90F1EF','#FFD6E0','#FFEF9F','#C1FBA4','#7BF1A8']

fetch(source).then(
    (response)=>response.json())
    .then((json) =>{
        var listQuotes = json['quotes']
        let idx = Math.floor(Math.random() * listQuotes.length);
        let colorId = Math.floor(Math.random() * color.length);
        document.getElementById("text").innerText = listQuotes[idx].quote;
        document.getElementById("author").innerText = listQuotes[idx].author;
        document.body.style.backgroundColor = color[colorId];

        const tweetURL = 'https://twitter.com/intent/tweet?text=quoteArray[idx].quote - quoteArray[idx].author ';
        document.getElementById("tweet-quote").href = tweetURL;

        var newQuote = document.getElementById("new-quote");
        newQuote.addEventListener("click",()=>{
            let idx = Math.floor(Math.random() * listQuotes.length);
            let colorId = Math.floor(Math.random() * color.length);
            document.getElementById("text").innerText = listQuotes[idx].quote;
            document.getElementById("author").innerText = listQuotes[idx].author;
            document.body.style.backgroundColor = color[colorId];
            const tweetURL = 'https://twitter.com/intent/tweet?text=quoteArray[idx].quote - quoteArray[idx].author ';
            document.getElementById("tweet-quote").href = tweetURL;
        })

    })
    .catch((error) => {
        console.error('Error: ', error)
    })