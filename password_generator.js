 
            const minuscules = "abcdefghijklmnopqrstuvwxyz";
             function make_password() {
                let result= ""  
                for (let i = 0; i < 12; i++) {
                        result+= minuscules[Math.floor(Math.random()*minuscules.length)]
                        
                    }
                    document.getElementById("password").value = result
                        }