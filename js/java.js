//O document ready verifica se a página já carregou antes de executar o código
$(document).ready(function (){

    $(".icon").on("click",function ()
    {
        
        //Se o menu estiver fechado abrir o menu caso contrario fechar
        if( $(".topnav").css("display") == "none" ){
            $(".topnav").css("display","block");
            
            //Para alterar dos três traços do menu para a cruz
            $(".icon i").removeClass("fa-stream");
            $(".icon i").addClass("fa-times");

        }else{
            $(".topnav").css("display","none");
            //Para alterar da cruz para os três traços do menu
            $(".icon i").removeClass("fa-times");
            $(".icon i").addClass("fa-stream");
        }
    });

});

$(document).ready(function (){

    $(".icon2").on("click",function ()
    {
        
        //Se o menu estiver fechado abrir o menu caso contrario fechar
        if( $(".topnav2").css("display") == "none" ){
            $(".topnav2").css("display","block");
            
            //Para alterar dos três traços do menu para a cruz
            $(".icon2 i").removeClass("fa-angle-double-down");
            $(".icon2 i").addClass("fa-times");

        }else{
            $(".topnav2").css("display","none");
            //Para alterar da cruz para os três traços do menu
            $(".icon2 i").removeClass("fa-times");
            $(".icon2 i").addClass("fa-angle-double-down");
        }
    });

});