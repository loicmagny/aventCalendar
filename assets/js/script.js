$(document).ready(function () {
	const days = [
		'Lundi',
		'Mardi',
		'Mercredi',
		'Jeudi',
		'Vendredi',
		'Samedi',
		'Dimanche'
	];

	generateCalendar();

	function generateCalendar() {
		for (let i = 0; i < 4; i++) {
			$('#aventBoard').append(
				'<table class="table">' +
					'<thead id="calendarDays>' +
					'</thead>' +
					'</table>'
			);
			for (let j = 0; j < days.length; j++) {
				$('#calendarDays')();
				// .append
				//     <tbody>
				//       <tr>
				//         <th scope="row">1</th>
				//         <td>Mark</td>
				//         <td>Otto</td>
				//         <td>@mdo</td>
				//       </tr>
				//       <tr>
				//         <th scope="row">2</th>
				//         <td>Jacob</td>
				//         <td>Thornton</td>
				//         <td>@fat</td>
				//       </tr>
				//       <tr>
				//         <th scope="row">3</th>
				//         <td>Larry</td>
				//         <td>the Bird</td>
				//         <td>@twitter</td>
				//       </tr>
				//     </tbody>'
			}
		}
	}
});
