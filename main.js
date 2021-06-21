menu_list_array = ["Veg Margherita Pizza","Chicken Tandoori Pizza","veg suppreme pizza","paneer tika pizza","deulax vegie pizza","veg extravaganza pizza"];

function getmenu(){
var htmldata;
htmldata = "<ol class = 'menulist'>";
menu_list_array.sort();
for(var i = 0;i<menu_list_array.length;i++){
htmldata = htmldata + '<li>' + menu_list_array[i] + '</li>';
}
htmldata = htmldata + "</ol>";
document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
htmldata = "<secton class = 'cards'>"
for(var i = 0;i<menu_list_array.length;i++){
    htmldata = htmldata + '<div class = "card">' + '<img class = "images/pizzaImg.png"/>' + menu_list_array[i] + '</div>';
    }
    htmldata = htmldata + "</section>";
    document.getElementById("display_addedmenu").innerHTML = htmldata;
}

function add_top(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    console.log(menu_list_array);
    add_item();
}