function generateHashtag (str) {
let reg = /\w/
if(!reg.test(str)) return false
  
    let arrayOfWords = str.split(" ")
   let newWords = arrayOfWords.map(worder=>{
     if(worder.length>0){
       return worder.replace(worder[0], worder[0].toUpperCase())
     }
   })
   
     let newString = "#"
     newWords.forEach(word=> {
     if(word!== undefined){
     newString+= word  
     }
     })
     if(newString.length >140) return false
     return newString
}