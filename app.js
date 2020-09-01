
 function sendwhatsapps(){
    window.open("https://api.whatsapp.com/send?text="+ document.getElementById("output").value +" to translate this use this link https://eraudotachon.github.io/traductor/")
 }
 
 window.onload=function() {
    setInterval(translate, 100)
}     
     function translate() { 
        let inputtext= document.getElementById("input").value
         if(morseToText(inputtext).length!=0){
         document.getElementById("output").innerText =
         morseToText(inputtext)
         }else{
            document.getElementById("output").innerText =
            textToMorse(inputtext)
         }
        }
   
  let letters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9",".",",","?","’","'"," ","/","“","”"]
  let morseCode =[".,",",...",",.,.",",..",".","..,.",",,.","....","..",".,,,",",.,",".,..",",,",",.",",,.,,",",,,",".,,.",",,.,",".,.","...",",","..,","...,",".,,",",..,",",.,,",",,..",",,,,,",".,,,,","..,,,","...,,","....,",".....",",....",",,...",",,,..",",,,,.",".,.,.,",",.,.,,","..,,..",".,.,.",".,.,.",":",",..,.",".,..,.",".,..,"]
  
      function textToMorse(text){
          let textInMorse=[]
          text=text.toUpperCase()
      for(let i=0; i<text.length; i++){
          if (letters.indexOf(text[i])>=0){
              textInMorse.push(morseCode[letters.indexOf(text[i])])
              textInMorse.push(";")
          }
          else textInMorse.push(";")
      }
      return textInMorse.join("")
      }
   
      function morseToText(textInMorse){
  
          let morseInText=[], temp=[], a=[]
          
          for(let i=0; i<textInMorse.length; i++){
              if(textInMorse[i]=="," ||textInMorse[i]=="." ||textInMorse[i]==";" ||textInMorse[i]==":" ){
                  a.push(textInMorse[i])
              }
          }
          
          for(let i=0; i<a.length; i++){
              if(a[i]==";" || i==a.length+1){
                  morseInText.push(letters[morseCode.indexOf(temp.join(""))])
                  temp=[]
              }
              if(a[i]!=";" && a[i]!=" " ) temp.push(a[i])
          }
          return morseInText.join("").toLowerCase()
      }
      


        
  
  
  
  
  