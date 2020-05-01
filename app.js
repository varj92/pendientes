const app = new Vue ({
    el: "#app",
    data: {
        titulo: 'Pendientes',
        tareas:[],
        newTarea: ''
    },
    methods:{
        agregarTarea: function(){
            //console.log('diste click', this.newTarea)
            this.tareas.push({
                nombre: this.newTarea,
                estado: false
            });
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas))
            this.newTarea = '';
        },
        editarTarea: function(index){
            if(this.tareas[index].estado == false){
                this.tareas[index].estado = true;
            }else{
                this.tareas[index].estado = false;
            }
            
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas))
        },
        eliminarTarea: function(index){
            this.tareas.splice(index,1);
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas))
        }
    },
    created: function(){
        let datosDB = JSON.parse(localStorage.getItem('gym-vue'));
        if(datosDB === null){
            this.tareas = [];
        }else {
            this.tareas = datosDB;
        }
    }
});