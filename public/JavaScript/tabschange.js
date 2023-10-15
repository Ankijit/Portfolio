

let tab = document.getElementsByClassName('tab');
        let tabdescription = document.getElementsByClassName('tabdescription');
        function opentab(tabname){
            for(x of tab){
                x.classList.remove("activetab")
            }
            for(y of tabdescription){
                y.classList.remove("activetabdescription")
            }
             event.currentTarget.classList.add("activetab");
            document.getElementById(tabname).classList.add("activetabdescription");
        }