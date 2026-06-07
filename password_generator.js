 
        const minuscules = "abcdefghijklmnopqrstuvwxyz";
        
        document.getElementById("generer").addEventListener("click",function () {
          let result= ""  
          for (let i = 0; i < 12; i++) {
                result+= minuscules[Math.floor(Math.random()*minuscules.length)]
                
            }
            document.getElementById("password").value = result
                })