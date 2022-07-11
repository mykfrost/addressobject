//Create an address object with three properties
//Street
//City
//Zipcode
//create a fucntion showAddress(address) and shows all  its values

let address = {
    street: 'Kondele',
    city: 'Kisumu',
    zip: '40100'
};


function showAddress(address2){

    for( let key in address){
        console.log(key,address[key]);
        // for (let key of Object.keys(address));
        //   console.log(key);
    }
 
}
showAddress(address);