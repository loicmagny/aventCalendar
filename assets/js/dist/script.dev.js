"use strict";

$(document).ready(function () {
  var datas = [{
    date: '01/12/2021',
    title: 'STRING_TYPE abc',
    src: '2a1af7de0479ae4344113a4750136_screen'
  }, {
    date: '02/12/2021',
    title: 'STRING_TYPE abc',
    src: '40e1ca62959fe132102a52c93d5096ea'
  }, {
    date: '03/12/2021',
    title: 'STRING_TYPE abc',
    src: '71Ln3JLWyOL._SL1500_'
  }, {
    date: '04/12/2021',
    title: 'STRING_TYPE abc',
    src: '71R4Cw4pOvL._SL1200_'
  }, {
    date: '05/12/2021',
    title: 'STRING_TYPE abc',
    src: '81nFF-rXdRL._SL1500_'
  }, {
    date: '06/12/2021',
    title: 'STRING_TYPE abc',
    src: '81N-UApD81L._SL1500_'
  }, {
    date: '07/12/2021',
    title: 'STRING_TYPE abc',
    src: '81Q-XcdVEEL._SL1400_'
  }, {
    date: '08/12/2021',
    title: 'STRING_TYPE abc',
    src: '81w8ulibKPL._AC_SX425_'
  }, {
    date: '09/12/2021',
    title: 'STRING_TYPE abc',
    src: '500x500'
  }, {
    date: '10/12/2021',
    title: 'STRING_TYPE abc',
    src: '600_jul-cover-2'
  }, {
    date: '11/12/2021',
    title: 'STRING_TYPE abc',
    src: '719eCIrSXYL._SL1400_'
  }, {
    date: '12/12/2021',
    title: 'STRING_TYPE abc',
    src: '624459-booba-annonce-la-sortie-de-son-dernier-album-ultra-disponible-en-precommande-ce-jeudi'
  }, {
    date: '13/12/2021',
    title: 'STRING_TYPE abc',
    src: '758469'
  }, {
    date: '14/12/2021',
    title: 'STRING_TYPE abc',
    src: '1116095'
  }, {
    date: '15/12/2021',
    title: 'STRING_TYPE abc',
    src: '0060253743943_600'
  }, {
    date: '16/12/2021',
    title: 'STRING_TYPE abc',
    src: 'a9ju02ugh0i2a_600'
  }, {
    date: '17/12/2021',
    title: 'STRING_TYPE abc',
    src: 'angele_2670'
  }, {
    date: '18/12/2021',
    title: 'STRING_TYPE abc',
    src: 'artistic-album-cover-design-template-d12ef0296af80b58363dc0deef077ecc_screen'
  }, {
    date: '19/12/2021',
    title: 'STRING_TYPE abc',
    src: 'avuwcm2cs233b_600'
  }, {
    date: '20/12/2021',
    title: 'STRING_TYPE abc',
    src: 'billie'
  }, {
    date: '21/12/2021',
    title: 'STRING_TYPE abc',
    src: 'eclipse-mixtape-cover-music-cd-design-template-b6bf8293632bce2ad98c1c4ab6752e1d_screen'
  }, {
    date: '22/12/2021',
    title: 'STRING_TYPE abc',
    src: 'love-music-cd-music-cover-template-design-a8f2a1af7de0479ae4344113a4750136_screen'
  }, {
    date: '13/12/2021',
    title: 'STRING_TYPE abc',
    src: 'QALF'
  }, {
    date: '24/12/2021',
    title: 'STRING_TYPE abc',
    src: 'Ses-plus-belles-chansons'
  }];
  carouselFill(datas);

  function carouselFill(datas) {
    console.log(datas);
    var today = new Date();
    console.log(today.getDate());

    for (var i = 0; i < datas.length; i++) {
      if (i == today.getDate() - 1) {
        $('#carouselBottom').append('<a class="carousel-item active" href="#' + i + '!"><img src="assets/img/' + datas[i].src + '.jpg"></a>');
      } else {
        $('#carouselBottom').append('<a class="carousel-item" href="#' + i + '!"><img src="assets/img/' + datas[i].src + '.jpg"></a>');
      }
    }
  }
});