var person = {
    "Name": "Joe",
    "Last Name": "Miller",
    "Address": {
        "Street": "Neverland 42",
        "City": "Toronto"
    },
    "Hobbies": [
        "doing stuff",
        "dreaming"
    ],

    "Cars": [{
        "make": "mustang",
        "Year": 2018,

    },
    {
        "make": "F150",
        "year": 2018,

    },

    ]
}
var person1 = {
    "Name": "Duy",
    "Last Name": "Pham",
    "car1": "Mustang",
    "car2": "F150"
}
var myJson = {
    "car1": {
        "color": 'black'
    },
    "car2": {
        "color": "blue"
    }
}
myJson.car1.model = 'Mustang';
myJson.car2.model = 'Mustang';
// people.person2={"name":"Duy"};
// console.log(myJson.car1.color);

//    console.log(person.Hobbies[1]);
// 
// var number=1;
// var str="car2";
// var str1="car";
// console.log(person1['car'+number]);
// console.log(person1[str]);
// console.log(person1);
// console.log(person1[str1+number]);
// number++;
// console.log(person1[str1+number]);
var myObj = {
    "friends": [
        {
            "firstName": "Mike",
            "lastName": "Jones"
        },
        {
            "firstName": "John",
            "lastName": "Smith"
        },
        {
            "firstName": "Duy",
            "lastName": "Pham"
        },

    ]
}
console.log(myObj);
var user = myObj.friends;
console.log(user);
var html = "";

myObj.friends.splice(1,0,{
    "firstName": "Duy1",
    "lastName": "Pham1"
})

// number=1;
// var output=document.getElementById('output');
// console.log(output);
// for(x=0;x<myObj.friends.length;x++){
//     html+=Number((x)+1)+'.' + user[x].firstName +
//      ' ' + user[x].lastName + '<br>';
// }
// myObj.friends.forEach(function(item){
// output.innerHTML+= item.firstName +' ' + item.lastName + '<br>';
// })
// in ra vòng lặp
// for (var x in user) {
//     html += (number + '.' + user[x].firstName + '' + user[x].lastName + '<br>');
//     number++;
// }
// output.innerHTML = html;
// phan 2
var data = '{"results":[{"gender":"female","name":{"title":"mrs","first":"brandie","last":"harper"},"location":{"street":"6201 w sherman dr","city":"dayton","state":"oklahoma","postcode":62855},"email":"brandie.harper@example.com","login":{"username":"brownbutterfly621","password":"gonzo","salt":"GsbcT8AP","md5":"57cc5b1158d11bb68e899297fef0ebf5","sha1":"0ae0b3af0d2a91754802217f2785f74e93392591","sha256":"4fa6313116c8f3d4d55d79e3a0e8ac7382dfb53d3e5e0b55c89db71f08861296"},"dob":"1992-07-25 23:42:44","registered":"2013-06-20 21:46:22","phone":"(477)-226-7686","cell":"(052)-024-9912","id":{"name":"SSN","value":"210-83-7107"},"picture":{"large":"https://randomuser.me/api/portraits/women/85.jpg","medium":"https://randomuser.me/api/portraits/med/women/85.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/85.jpg"},"nat":"US"}],"info":{"seed":"cb7d885d5ca37ec4","results":1,"page":1,"version":"1.1"}}';
// thay đổi định dạnh qua json
// var dataJson=JSON.parse(data);
// var person=dataJson.results[0];
// console.log(dataJson);
// console.log(person.name.first);
// console.log(person.picture.large);
// var html1=person.name.first
// html1+='<img src="'+person.picture.large+'">';
// output.innerHTML=html1;
// var strMe=JSON.stringify(dataJson);
// console.log(strMe);

