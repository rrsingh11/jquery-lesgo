// $() = jquery()

//for single property add a property or remove a property or update it
// .css() method is use to change css single property
// $(<CSS SELECTOR>).css("<Property Name>","<Property>")
$('h1').css("color","red") // <-Code



//for multiple properties add a class or remove a class
// .addClass() method is use to add a class to selected element
// $(<CSS SELECTOR>).addClass("<class name>")
$('h1').addClass("bold background")
// .removeClass() method is use to add a class to selected element
// $(<CSS SELECTOR>).removeClass("<class name>")
$('h1').removeClass("bold")
// .hasClass() is used to check if the class exist or not, returns true/false accordingly



// to change the text/html
// .text() method is used 
$("h1").text("Bye")
//.html() is used 



//for adding attributes
$('h1').attr("id","orange");


//Event Listeners
$('button').click(()=>{
    $('h1').css("color","pink");
})
$('button').dblclick(()=>{
    $('h1').css("color","purple");
})
$('input').keypress((event)=>{
    $("h1").text(event.key);
})

// for all events use .on()method 
$("button").on("mouseover",()=>{
    $("h1").text("Mouse")
})



// USE DOCS FOR FURTHER METHODS