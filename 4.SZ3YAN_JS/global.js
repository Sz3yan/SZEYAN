function nav__trigger() {
    const burger = document.querySelector(".nav__trigger");
    burger.addEventListener("click", function () {
        const body = document.body;
        body.classList.toggle("nav__open");
    
        var x = document.getElementById("nav__mobile");
        if (x.style.display === "block") {
            x.style.display = "none";
        } 
                    
        else {
            x.style.display = "block";
            }
        });
}

function hide__form() {
    $("#seeAnotherField").change(function() {
        if ($(this).val() == "email") {
            $('#emailshow').show();
            $('#emailshow input').attr('required','');
    
            $('#colabshow').hide();
            $('#hishow').hide();
            $('#colabshow').removeAttr('required');
            $('#hishow').removeAttr('required');
        } 
    
        else if (($(this).val() == "colab")) {
            $('#colabshow').show();
            $('#colabshow textarea').attr('required','');
    
            $('#emailshow').hide();
            $('#hishow').hide();
            $('#emailshow').removeAttr('required');
            $('#hishow').removeAttr('required');
        }
    
        else if (($(this).val() == "hi")) {
            $('#hishow').show();
            $('#hishow textarea').attr('required','');
    
            $('#emailshow').hide();
            $('#colabshow').hide();        
            $('#emailshow').removeAttr('required');
            $('#colabshow').removeAttr('required');
        }
        
        else {
            $('#emailshow').hide();
            $('#colabshow').hide();
            $('#hishow').hide();
            $('#emailshow').removeAttr('required');
            $('#colabshow').removeAttr('required');
            $('#hishow').removeAttr('required');
        }
    
    });
    
    $("#seeAnotherField").trigger("change");
}

function check(){
    var storeuser = localStorage.getItem("user");
    var storepw = localStorage.getItem("pw");
    var enteruser = document.getElementById("user")
    var enterpw = document.getElementById("pw")
    
    if (enteruser.value == storeuser && enterpw.value == storepw) {
        document.getElementById("formid").action = "../index.html"
    }

    else {
        alert("Click on sign up first.");
    }
}

// function logout() {
//     localStorage.removeItem("user");
//     localStorage.removeItem("pw");
//     localStorage.removeItem("nom");
//     window.location.reload();
// }

function register__validate() {
    var password = document.getElementById("pw");

    password.addEventListener("keyup", function(){
        var pass = document.getElementById("pw").value;
        check(pass);
    });

    function check(password) {
        if (password.length >= 12) {
            document.querySelector(".twelve__character").style.listStyleType = "disc";
        } 
        
        else {
            document.querySelector(".twelve__character").style.listStyle = "none";
        }

        if (password.match(/([0-9])/)) {
            document.querySelector(".one__number").style.listStyleType = "disc";
        } 

        else {
            document.querySelector(".one__number").style.listStyle = "none";
        }

        if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
            document.querySelector(".lowerupper__case").style.listStyleType = "disc";
        } 
        
        else {
            document.querySelector(".lowerupper__case").style.listStyle = "none";
        }
                      
        if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
            document.querySelector(".special__character").style.listStyleType = "disc";
        } 
                
        else {
            document.querySelector(".special__character").style.listStyle = "none";
        }
    }
}

function store(){
    if (document.querySelector(".twelve__character").style.listStyle != "none" &&
        document.querySelector(".one__number").style.listStyle != "none" &&
        document.querySelector(".special__character").style.listStyle != "none" &&
        document.querySelector(".lowerupper__case").style.listStyle != "none" 
    ) {
        localStorage.setItem('user', user.value);
        localStorage.setItem('pw', (pw.value));
        localStorage.setItem('nom', nom.value);
    }

    else {
        document.getElementById("reg").action = "";
        alert("Enter the password again");
    }
}

function send_email() {
    const btn = document.getElementById('send');

    document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const serviceID = 'default_service';
    const templateID = 'template_8hjq86e';

    emailjs.sendForm(serviceID, templateID, this).then(() => {
        btn.value = 'Send Email';
            alert("Sent")
        }, 

        (err) => {
            btn.value = 'Send Email';
            alert(JSON.stringify(err));
        });
    });
}

function change() {
    document.querySelector(".credit__hidden").classList.toggle("block");
}

function credit__validate() {
    var card = document.getElementById("checkcard");

    card.addEventListener("keyup", function(){
        if (card.value.length == 16) {
            card.style.borderColor = "green";
        }

        else if (card.value.length > 16) {
            card.value = "";
            card.style.borderColor = "red";
        }
    
        else {
            card.style.borderColor = "red";
        }
    });
}

function date__validate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }

    today = yyyy + "-" + mm + "-" + dd;
    document.getElementById("checkdate").setAttribute("min", today);
    document.getElementById("checkdate").style.borderColor = "green";
}

function cvv__validate() {
    var cvv = document.getElementById("checkcvv");

    cvv.addEventListener("keyup", function(){
        if (cvv.value.length == 3) {
            cvv.style.borderColor = "green";
        }

        else if (cvv.value.length > 3) {
            cvv.value = "";
            cvv.style.borderColor = "red";
        }
    
        else {
            cvv.style.borderColor = "red";
        }
    });
}

function success() {
    var card = document.getElementById("checkcard");
    var cvv = document.getElementById("checkcvv");

    if (card.value.length == 16 &&
        cvv.value.length == 3) {
        document.querySelector(".buy").style.display = "none";
        document.querySelector(".done").style.display = "block";
    }

    else {
        alert("Check");
    }
}

function name() {
    var hi = document.querySelector(".reg__intro h3");
    var hehe = document.querySelector(".name__input");

    hehe.addEventListener("keyup", function() {
        hi.innerText = "Hey " + hehe.value;
    });
}

document.addEventListener("DOMContentLoaded",docIsReady);
var badminton;
function docIsReady(){
	badminton=localStorage.getItem("badminton");
 
	if (badminton==null){
		badminton=[];
	}
	else {	
		badminton=JSON.parse(badminton);
        
        for (x = 0; x < badminton.length; x++) {
            var row = document.getElementById("schedule").insertRow(1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            cell1.innerHTML = badminton[x].name;
            cell2.innerHTML = badminton[x].date;
            cell3.innerHTML = badminton[x].location;
        }
	}
}

function book() {
    var name = document.querySelector(".name__input");
    var email = document.querySelector(".email__input");
    var date = document.querySelector(".expire");
    var location = document.querySelector(".location");

    if (name.value.length > 0 && 
        email.value.length > 0 && 
        location.value.length > 0) {
            
        var obj={"name":name.value, "email":email.value, "date":date.value, "location":location.value};
        badminton.push(obj);
        localStorage.setItem("badminton", JSON.stringify(badminton));

        const serviceID = 'default_service';
        const templateID = 'template_9p2ciqd';

        var tomail = {
            fromname: name.value,
            yourmail: email.value,
            yourdate: date.value,
            yourlocation: location.value
        };

        emailjs.send(serviceID, templateID, tomail);

        document.querySelector(".reg__intro").style.display = "none";
        document.querySelector(".badminton").style.display = "none";
        document.querySelector(".done").style.display = "block"; 
    }

    else {
        alert("Enter first");
    }
}

function details() {
    document.querySelector(".details__hide").classList.toggle("show");
}

function info() {
    document.querySelector(".info__hide").classList.toggle("show");
}