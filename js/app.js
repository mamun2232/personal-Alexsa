var recognition = new webkitSpeechRecognition()
console.log(recognition);


recognition.onresult = function(event){
          var text = event.results[0][0].transcript
          console.log(text);
          const outPut = document.getElementById('outPut').innerHTML = text;

          read(text)
}

const read = text =>{
          const speech = new SpeechSynthesisUtterance()
          console.log(speech);
          speech.text = text
          if(text == 'Alexa' || text == 'really' || text == 'very sad'){
                    speech.text = 'yes sir'

          }
          else if(text == 'how are you'){
                    speech.text = 'im good all the time'
          }
          else if(text == 'Assalamu Alaikum'){
                    speech.text = 'OlaiqumSalam sir'
          }
          else if(text == 'what is your name'){
                    speech.text = 'my name is Alesa, i am your assistan'
          }
          else if(text == 'what do you do'){
                    speech.text = 'Noting sir'
          }
          else if(text == 'are you human'){
                    speech.text = 'no sir. im speek robot'
          }
          else if(text == 'very good' || text == 'good boy'){
                    speech.text = 'thank you sir'
          }
          else if(text == 'bye'){
                    speech.text = 'ok sir, AssalamuOlaiqum'
          }
          else if(text == 'hello'){
                    speech.text = 'AssalamuOlaiqum sir'
          }
          else if(text == 'do you love someone'){
                    speech.text = 'yes'
          }
          else if(text == 'who you love'){
                    speech.text = 'I dont know i love Because Mamun dont set his name in my program '
          }
          else if(text == 'who made you'){
                    speech.text = 'Mamun made me very careful'
          }
          else if(text == 'do you have a girlfriend'){
                    speech.text = 'No, i dont have any girlFrinds,Because im a voise robot, So no loves me,'
          }

          else{
                    speech.text = 'please try aigan'
          }

          document.getElementById('res').innerHTML = speech.text
          window.speechSynthesis.speak(speech)
}