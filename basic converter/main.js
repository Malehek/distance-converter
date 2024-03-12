(function (){

    "use strict"

    document.getElementById('convert').addEventListener('submit', function(event){

        event.preventDefault();

        var distance = document.getElementById('distance').value;
        var answer = document.getElementById ('answer');
        distance = parseFloat(distance);
        

        if (distance){
            //convert
            //display
            var conversion = distance * 1.609344;
            var roundedConversion = conversion.toFixed(3);
            
            answer.innerHTML = `<h2>${distance} miles converts to ${roundedConversion} kilometers </h2>`;
        }
        else {
            //dispaly error
            answer.innerHTML = "<h2>please enter a number!</h2>"

        }
    });
})();