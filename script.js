var request = new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all',true);
request.send();
request.onload = function(){
    var data = JSON.parse(request.response)
    console.log(data);
    for (var i=0;i<data.length;i++){
        console.log(data[i].name["common"],data[i].region,data[i].subregion,data[i].flag,data[i].population)
    }
}