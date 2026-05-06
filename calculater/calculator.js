function add(){
    let firstvalue = document.getElementById("firstvalue").value;
    let secondvalue = document.getElementById("secondvalue").value;
    let result = parseInt(firstvalue) + parseInt(secondvalue);
    document.getElementById("result").value = result;
 }
function sub(){
            let firstvalue = document.getElementById("firstvalue").value;
            let secondvalue = document.getElementById("secondvalue").value;
            let result = parseInt(firstvalue) - parseInt(secondvalue);
            document.getElementById("result").value = result;
        }
        function multi(){
            let firstvalue = document.getElementById("firstvalue").value;
            let secondvalue = document.getElementById("secondvalue").value;
            let result = parseInt(firstvalue) * parseInt(secondvalue);
            document.getElementById("result").value = result;
        }
        function div(){
            let firstvalue = document.getElementById("firstvalue").value;
            let secondvalue = document.getElementById("secondvalue").value;
            let result = parseInt(firstvalue) / parseInt(secondvalue);
            document.getElementById("result").value = result;
        }
    