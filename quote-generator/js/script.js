let apiQuotes=[];

// Get the quotes from the API
async function getQuote() {
  const apiUrl=("https://type.fit/api/quotes");
   try{
  const response=await fetch(apiUrl);
  apiQuotes=await response.json();
  console.log(apiQuotes[12]);
   }catch(error){
    //catch error here
     console.log(error);
   }
}

//onload
getQuote()