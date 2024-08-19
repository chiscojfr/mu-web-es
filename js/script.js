/*global $, jQuery, alert*/
(function ($) {
    "use strict";

    function contactForm() {
        $('#contactform').submit(function () {
            var action = 'https://formspree.io/f/xnqelawk';
            // var action = '';
            $("#message-info").slideUp(250, function () {
                $('#message-info').hide();
                $('#submit')
                    .after('<div class="loader"><div></div></div>')
                    .attr('disabled', 'disabled');
                $.post(action, {
                    name: $('#name').val(),
                    email: $('#email').val(),
                    chapter: $('#chapter').val(),
                    message: $('#message').val()
                },
                
                    function (data) {
                        document.getElementById('message-info').innerHTML = data;
                        $('#message-info').slideDown(250);
                        $('#contactform .loader div').fadeOut('slow', function() {
                            $(this).remove();
                        });
                        $('#submit').removeAttr('disabled');
                        if (data.match('success') !== null) {
                            $('#contactform').slideUp(850, 'easeInOutExpo');
                        }
                    });
                    setTimeout(function() {messageSentAlert();}, 2000);
                    
            });
            return false;
        });
    }

    function messageSentAlert(){
            var chapterPage = 'index.html';
            var selectedChapter =  $('#chapter').val();
            
            switch(selectedChapter){
                case 'Capítulo I: Introducción':
                    chapterPage = 'index.html';
                    break;
                case 'Capítulo II: Parámetros del Proceso de Inyección':
                    chapterPage = 'chapter_2.html';
                    break;
                case 'Capítulo III: Gráficas del Proceso':
                    chapterPage = 'chapter_3.html';
                    break;
                case 'Capítulo IV: Morfología de Plásticos':
                    chapterPage = 'chapter_4.html';
                    break;
                case 'Capítulo V: Equipos Auxiliares':
                    chapterPage = 'chapter_5.html';
                    break;
                case 'Capítulo VI: Equipos Auxiliares':
                    chapterPage = 'chapter_6.html';
                    break;
                case 'Capítulo VII: Reología en Máquina':
                    chapterPage = 'chapter_7.html';
                    break;
                case 'Capítulo VIII: Determinación de la Velocidad de Inyección':
                    chapterPage = 'chapter_8.html';
                    break;
                case 'Capítulo IX: Verificación del Balance del Llenado':
                    chapterPage = 'chapter_9.html';
                    break;
                case 'Capítulo X: Determinación de Parámetros en la Etapa de Empaque':
                    chapterPage = 'chapter_10.html';
                    break;
                case 'Capítulo XI: Determinación de Parámetros en la Etapa de Enfriamiento':
                    chapterPage = 'chapter_11.html';
                    break;
                default:
                    chapterPage = 'index.html';
            }
            $('#name').val("");
            $('#email').val("");
            $('#chapter').val("");
            $('#message').val("");
            $('#contactform .loader div').fadeOut('slow', function() {
                $(this).remove();
            });
            Swal.fire({
            title: "¡Gracias!",
            text: "¡Tu mensaje fue enviado! Nos pondremos en contacto contigo pronto.",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Regresar al capítulo"
            }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = chapterPage;
            }
            });
            $('#contactform .sent-alert').fadeOut('slow', function() {
                $(this).remove();
            });
            $('#submit').removeAttr('disabled');
    }

    $(document).ready(function () {
        contactForm();
    });

}(jQuery));