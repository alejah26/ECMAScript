function newUser(name,age,country){
    var name=name||'oscar';
    var age =age||34;
    var country =country||'MX'
    console.log(name,age,country)
}
newUser();

//ES6 
function newAdmin(name='oscar',age='32',country='COL'){
    console.log(name,age,country)
}