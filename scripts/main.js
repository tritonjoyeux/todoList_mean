{
	'user strict';

	new Vue({
		el: 'main#app',
		data: {
			tasks: [
				{ title: "Acheter du pain", isDone: true },
				{ title: "Manger le pain", isDone: false },
				{ title: "Dormir", isDone: false }
			]			
		}
	});
}