$( document ).ready(function() {
    $('.button-collapse').sideNav({
        menuWidth: 300,
        edge: 'left',
        closeOnClick: true
    }
                                 );
    $('.collapsible').collapsible();
    $('.modal').modal();

    $('#enviar').click(function(){

        for(i = 8990; i <= 9000; i++){

            var url = 'http://127.00.0.1:' + i;

            /*axios.get(url + '/info')
                .then(function(response){
                var endpoint = url;
                console.log("Achou o agente: " + endpoint)
            });*/

            console.log('Testando porta ' + i);

            $.ajax({
                url: 'http://127.0.0.1:' + i + '/info',
                async: false,
                crossDomain: true,
            }).done(function(){
                console.log("Achou na porta " + i);

                $.ajax({
                    url: 'http://127.0.0.1:' + i,
                    method: 'POST',
                    contents: {
                        "board":"arduino:avr:mega",
                        "port":"COM10",
                    }
                }).done(function(){
                    console.log("aasdasd")
                });
            });
        }
    });
});