//Creamos una función con la transición slide hacia delante
function navnext( next ) {
    $( ":mobile-pagecontainer" ).pagecontainer( "change", next, {
        transition: "slide"
    });
}
//Creamos una función con la transición slide hacia atrás
function navprev( prev ) {
    $( ":mobile-pagecontainer" ).pagecontainer( "change", prev, {
        transition: "slide",
        reverse: true
    });
}


$( document ).one( "pagecreate", "#page1", function() {
    // hacemos que la página sea manipulable
    // Navegamos a la siguiente página con swipelef
    $( document ).on( "swipeleft", ".ui-page", function( event ) {
        // Cogemos el nombre de la siguiente página que almacenamos en el data-next 
        // atributo next
        var next = $( this ).jqmData( "next" );
        if ( next ) {
            navnext( next );
        }
    });
    // Lo mismo para navegar a la página anterior pero con el atributo prev
    $( document ).on( "swiperight", ".ui-page", function( event ) {
        var prev = $( this ).jqmData( "prev" );
        if (prev) {
            navprev( prev );
        }
    });
});

