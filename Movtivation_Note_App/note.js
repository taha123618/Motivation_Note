// const AOS = () => {
  AOS.init();
// };

// quotes ko hasal kre ge
const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const newquotes = document.getElementById("newquotes");
const tweetMe = document.getElementById("tweetMe");


let realdata = "";
let quotesdata = "";

//tweetMe -->
const tweeNow = () => {
let tweetPost = `https://twitter.com/intent/tweet?text=${quotesdata.text}`;
window.open(tweetPost);
}

//2 def
const getNewQuotes = () => {
  let randomNo = Math.floor(Math.random() * 10);
  quotesdata = realdata[randomNo];
  //console.log(realdata[randomNo].author);
  quotes.innerHTML = `${quotesdata.text}`;

  //null ko solve krne ke lye 
  quotesdata.author == null
  ? (author.innerHTML = "unKnown")
  : (author.innerHTML = `${quotesdata.author}`);
};


//1 def 
const getQuotes = async () => {
const api = "https://type.fit/api/quotes";
try{
let data = await fetch(api);
realdata = await data.json();
//2 call
getNewQuotes();
//console.log(realdata[5].length);
//console.log(realdata[5].author); 

}catch(error) {}
};

//button ka kam 
tweetMe.addEventListener('click',tweeNow);
newquotes.addEventListener('click', getNewQuotes);



//1 call
getQuotes();
