var xhr=new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all');
xhr.responseType='json';
xhr.send();
xhr.onload = function()
    {
        var responseObj =xhr.response;
        for(var i= 0;i < responseObj.length; i++ ) {
            console.log(responseObj[i].name.common)
            console.log(responseObj[i].papulation)
             console.log(responseObj[i].region)
            console.log(responseObj[i].subregion)
            


        }
        

    }
