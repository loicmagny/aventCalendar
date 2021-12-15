$(document).ready(function () {
	//Objet JS qui contient toutes les données
	const datas = [
		{
			date: 01,
			title: 'STRING_TYPE abc',
			src: '2a1af7de0479ae4344113a4750136_screen'
		},
		{
			date: 02,
			title: 'STRING_TYPE abc',
			src: '40e1ca62959fe132102a52c93d5096ea'
		},
		{
			date: 03,
			title: 'STRING_TYPE abc',
			src: '71Ln3JLWyOL._SL1500_'
		},
		{
			date: 04,
			title: 'STRING_TYPE abc',
			src: '71R4Cw4pOvL._SL1200_'
		},
		{
			date: 05,
			title: 'STRING_TYPE abc',
			src: '81nFF-rXdRL._SL1500_'
		},
		{
			date: 06,
			title: 'STRING_TYPE abc',
			src: '81N-UApD81L._SL1500_'
		},
		{
			date: 07,
			title: 'STRING_TYPE abc',
			src: '81Q-XcdVEEL._SL1400_'
		},
		{
			date: 08,
			title: 'STRING_TYPE abc',
			src: '81w8ulibKPL._AC_SX425_'
		},
		{
			date: 09,
			title: 'STRING_TYPE abc',
			src: '500x500'
		},
		{
			date: 10,
			title: 'STRING_TYPE abc',
			src: '600_jul-cover-2'
		},
		{
			date: 11,
			title: 'STRING_TYPE abc',
			src: '719eCIrSXYL._SL1400_'
		},
		{
			date: 12,
			title: 'STRING_TYPE abc',
			src: '624459-booba-annonce-la-sortie-de-son-dernier-album-ultra-disponible-en-precommande-ce-jeudi'
		},
		{
			date: 13,
			title: 'STRING_TYPE abc',
			src: '758469'
		},
		{
			date: 14,
			title: 'STRING_TYPE abc',
			src: '1116095'
		},
		{
			date: 15,
			title: 'STRING_TYPE abc',
			src: '0060253743943_600'
		},
		{
			date: 16,
			title: 'STRING_TYPE abc',
			src: 'a9ju02ugh0i2a_600'
		},
		{
			date: 17,
			title: 'STRING_TYPE abc',
			src: 'angele_2670'
		},
		{
			date: 18,
			title: 'STRING_TYPE abc',
			src: 'artistic-album-cover-design-template-d12ef0296af80b58363dc0deef077ecc_screen'
		},
		{
			date: 19,
			title: 'STRING_TYPE abc',
			src: 'avuwcm2cs233b_600'
		},
		{
			date: 20,
			title: 'STRING_TYPE abc',
			src: 'billie'
		},
		{
			date: 21,
			title: 'STRING_TYPE abc',
			src: 'eclipse-mixtape-cover-music-cd-design-template-b6bf8293632bce2ad98c1c4ab6752e1d_screen'
		},
		{
			date: 22,
			title: 'STRING_TYPE abc',
			src: 'love-music-cd-music-cover-template-design-a8f2a1af7de0479ae4344113a4750136_screen'
		},
		{
			date: 23,
			title: 'STRING_TYPE abc',
			src: 'QALF'
		},
		{
			date: 24,
			title: 'STRING_TYPE abc',
			src: 'Ses-plus-belles-chansons'
		}
	];
	sortArrayDates(datas);
	// Code pour générer dynamiquement le slider, modifier le code du .append pour modifier l'affichage du slider
	function carouselFill(datas) {
		console.log(datas);
		for (let i = 0; i < datas.length; i++) {
			$('#carouselBottom').append(
				'<a class="carousel-item active modal-trigger" href="#modal' +
					i +
					'"' +
					i +
					'!"><img src="assets/img/' +
					datas[i].src +
					'.jpg"></a>'
			);
		}
		createModals(datas);
	}
	//Création des fenetres modales, si besoin
	//idem, .append pour modifier le code html
	function createModals(datas) {
		for (let i = 0; i < datas.length; i++) {
			$('#modals').append(
				'<div id="modal' +
					i +
					'" class="modal">' +
					'	<div class="modal-content">' +
					'		<h4>' +
					datas[i].date +
					'</h4>' +
					'		<p>A bunch of text</p>' +
					'	</div>' +
					'	<div class="modal-footer">' +
					'		<a href="#!" class="modal-close waves-effect waves-green btn-flat">' +
					'			Agree' +
					'		</a>' +
					'	</div>' +
					'</div>'
			);
			$('.modal').modal();
		}
	}
	//Coupe le tableau de données en 2 à partir de la date d'aujourd'hui et mélange les 2 tableaux obtenus en un seul commençant en datas.date correspondant (15eme entrée devient 1ère le 15/12 et ainsi de suite)
	function sortArrayDates(datas) {
		let date = new Date();
		let today = date.getDate();
		let start = [];
		let end = [];
		let sliced = [];
		start = datas.slice(0, today - 1);
		end = datas.slice(today - 1, datas.length);
		carouselFill(end.concat(start));
	}
});
