let randText = ()=>{
    console.log("\nHere is a random text!\n\n")

    let phrase = 4
    let wordPerPhrase = {min:6,max:20}
    let wordLenght = {min:2,max:8}

    let words = Math.floor(wordPerPhrase.min+Math.random()*wordPerPhrase.max)
    let punctuation = [".","!","?","..."]
    let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    let newText = ""

    for(let p=0;p<phrase;p++){
      for(let w=0;w<words;w++){
        for(let l=0;l<Math.floor(wordLenght.min+Math.random()*wordLenght.max);l++){
          let letter = alphabet[Math.floor(Math.random()*26)]
          if(w===0 && l===0){
            letter = letter.toUpperCase()
          }
          newText += letter
        }
        if(w<words-1)
        newText += " "
      }
      newText += punctuation[Math.floor(Math.random()*punctuation.length)]+" "
    }
    console.log(newText)
    //this.props.dispatch({type:"text",text: newText})  // Usage in a redux context... not useful here.
  }
  randText() // Run it!
