{
	'user strict';

	new Vue({
		el: 'main#app',
		data: {
			tasks: [
				{ title: "Acheter du pain", isDone: true },
				{ title: "Manger le pain", isDone: false },
				{ title: "Dormir", isDone: false }
			], 
			titleTask: ""			
		},
		computed: {
			remaining: function() {
				return this.tasks.filter(el => !el.isDone).length;
			}
		},
		methods: {
			removeElement: function (index) {
    			this.tasks.splice(index, 1);
			},
			addElement: function () {
				if(this.titleTask == "")
					return;
				this.tasks.push({title: this.titleTask, isDone: false});
				this.titleTask = "";
			}
		},
		filters: {
			pluralize: function (nb, str) {
				if(nb > 1)
					str+="s";
				return nb+" "+str;	
			}
		}
	});
}