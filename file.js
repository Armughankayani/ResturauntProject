function sayHello(){
    var name=document.getElementById("name").value;
    var message="Hello " + name;

    document.getElementById("content").textContent=message;
}
function changeLocation1(){
    window.location.href = 'index.html';
  }
  function changeLocation2(){
    window.location.assign = 'menu.html';
  }
  function changeLocation3(){
    window.location.href = 'aboutUs.html';
  }
  function changeLocation4(){
    window.location.href = 'contact.html';
  }