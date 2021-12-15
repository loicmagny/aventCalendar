$(document).ready(function () {
	//Objet JS qui contient toutes les données
	const datas = [
		{
			date: 01,
			title: 'STRING_TYPE abc',
			src: 'img1'
		},
		{
			date: 02,
			title: 'STRING_TYPE abc',
			src: 'img2'
		},
		{
			date: 03,
			title: 'STRING_TYPE abc',
			src: 'img3'
		},
		{
			date: 04,
			title: 'STRING_TYPE abc',
			src: 'img4'
		},
		{
			date: 05,
			title: 'STRING_TYPE abc',
			src: 'img5'
		},
		{
			date: 06,
			title: 'STRING_TYPE abc',
			src: 'img6'
		},
		{
			date: 07,
			title: 'STRING_TYPE abc',
			src: 'img7'
		},
		{
			date: 08,
			title: 'STRING_TYPE abc',
			src: 'img8'
		},
		{
			date: 09,
			title: 'STRING_TYPE abc',
			src: 'img9'
		},
		{
			date: 10,
			title: 'STRING_TYPE abc',
			src: 'img10'
		},
		{
			date: 11,
			title: 'STRING_TYPE abc',
			src: 'img11'
		},
		{
			date: 12,
			title: 'STRING_TYPE abc',
			src: 'img12'
		},
		{
			date: 13,
			title: 'STRING_TYPE abc',
			src: 'img13'
		},
		{
			date: 14,
			title: 'STRING_TYPE abc',
			src: 'img14'
		},
		{
			date: 15,
			title: 'STRING_TYPE abc',
			src: 'img15'
		},
		{
			date: 16,
			title: 'STRING_TYPE abc',
			src: 'img16'
		},
		{
			date: 17,
			title: 'STRING_TYPE abc',
			src: 'img17'
		},
		{
			date: 18,
			title: 'STRING_TYPE abc',
			src: 'img18'
		},
		{
			date: 19,
			title: 'STRING_TYPE abc',
			src: 'img19'
		},
		{
			date: 20,
			title: 'STRING_TYPE abc',
			src: 'img20'
		},
		{
			date: 21,
			title: 'STRING_TYPE abc',
			src: 'img21'
		},
		{
			date: 22,
			title: 'STRING_TYPE abc',
			src: 'img22'
		},
		{
			date: 23,
			title: 'STRING_TYPE abc',
			src: 'img23'
		},
		{
			date: 24,
			title: 'STRING_TYPE abc',
			src: 'img24'
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
					'.png"></a>'
			);
		}
		createModals(datas);
	}
	//Création des fenetres modales, si besoin
	//idem, .append pour modifier le code html
	function createModals(datas) {
		for (let i = 0; i < datas.length; i++) {
			const daysBeforeNoel = 25 - datas[i].date ;
			console.log(daysBeforeNoel);
			$('#modals').append(
				'<div id="modal' +
					i +
					'" class="modal">' +
					'	<div class="modal-content">' +
					'		<h4>' + 
					datas[i].date + ' Décembre 2021' +
					'</h4>' + 'Il reste ' +  daysBeforeNoel + ' jours avant de découvrir tes cadeaux '+
					 
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
