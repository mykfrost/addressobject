//Create an address object with three properties
//Street
//City
//Zipcode
//create a fucntion showAddress(address) and shows all  its values

let address1 = {
    street:'Namibia',
    city :'Windhoek',
    zip:'34535'
};


function showAddress(address1){

    for( let key in address1){
        console.log(key,address1[key]);
        // for (let key of Object.keys(address));
        //   console.log(key);
    }
 
}
showAddress(address1);

//Factory Fucntion Answer

let address2 = createAddress('Oginga','Kisumu', '40100');
console.log(address2);

function createAddress(street, city , zipcode){

    return{
        street,
        city ,
        zipcode
    };
}