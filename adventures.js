$(document).ready(function(){
    var today = new Date();
    document.querySelector("#copyrightYear").innerHTML = "Copyright " + today.getFullYear() + " &copy; Adventures Insurance";
    function fillFacebook() {
    var text = '{"info":[' +
            '{"title":"Joe Biden","date":"1/23/2020","description":"Will you shut up, man?"},' +
            '{"title":"Donald Trump","date":"4/21/2020","description":"Democrats will never win over the White House."},' +
            '{"title":"Kanye West","date":"10/22/2020","description":"Slavery was a choice."}]}';
    obj = JSON.parse(text);
    var i = 0;
    while (i < 3) {
    document.querySelector("#facebookNews").innerHTML += "<h3>" + obj.info[i].title + "</h3>" + 
            "<h4>" + obj.info[i].date + "</h4>" + "<p>" + obj.info[i].description + "</p>";
    i++;
    }
    }
    var exist = document.getElementById("facebookNews");
        if (exist){
            fillFacebook();
        }
});

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
};

function randomExhibitImage() {
    var filenames = ["images/farriswheel.jpg","images/sealions.jpg","images/skatepark.jpg"];
    var counter = getRandomInt(3);
    return filenames[counter];
};


$("#farris").click(function(){
    oldImage = $(this).attr("src");
    newImage = randomExhibitImage();
    while (oldImage == newImage) {
        newImage = randomExhibitImage();
    }
    $(this).attr("src", newImage);
});

function showSubmitSign() {
    var fname = document.querySelector('#first').value;
    var contact = document.querySelector('#contactway').value;
    alert("Thank you for your feedback, " + fname + ". Someone will contact you shortly by " + contact + ".");
}

var btn = document.querySelector('.inputbutton');
btn.addEventListener("click", showSubmitSign);