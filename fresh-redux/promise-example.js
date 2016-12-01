const promiseFunc = (myParam) => {
   return new Promise( (resolve, reject) => {
      let condition = true;
      // think of resolve() and reject() as 'return', but for different eventualities...
      if (condition === true) {
         resolve(`Success! This string, with ${myParam} as an argument, will be returned as 'result'`);
      }
      else {
         reject(Error("Promise rejected... this string will be returned as 'error' "));
      }
   });
}

promiseFunc('PAULOS3000').then( result => {
   this.setState({randomData: result});
}).catch( error => {
   alert(error + 'As a result, value was not set!');
});
