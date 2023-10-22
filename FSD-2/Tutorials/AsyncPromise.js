async function greeting() {
    let myPromise = new Promise(
        function(resolve) {
            setTimeout(function(){resolve("Hello!")}, 4000);
        }
    );
    
    console.log(await myPromise);
}

greeting();