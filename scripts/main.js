{
	'user strict';

	const task = {
		props : [ 'task', 'index' ],
		template: `
		<li class="collection-item">
			<input type="checkbox" :id="'t_'+(index+1)" v-model="task.isDone">
			<label :for="'t_'+(index+1)">{{ task.title }}</label>
			<a href="#" @click="removeElement(index)" class="link-delete" title="Supprimer cette tâche">
				<i class="small material-icons">delete_forever</i>
			</a>
		</li>
		`
	};

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
		},
		components : { 'task' : task }
	});
}