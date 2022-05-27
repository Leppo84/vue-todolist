const toDoList = new Vue ({
    el : "#toDoApp",
    data : {
        newTask : "",
        myList : [
            {
                task : "Andare a prendere il nipote",
                done : "true",
            },
            {
                task : "Capire intimamente Vue",
                done : "False",
            },
            {
                task : "Avere una vita sociale",
                done : "false",
            },
            {
                task : "Portare la Vespa dal meccanico",
                done : "false",
            },
            {
                task : "Finire l'esercizio",
                done : "true",
            },
        ]
    },
    methods : {
        removeTask (index){
            this.myList.splice(index,1);
        },
        addTask (){
            const addingTask = {
                task : this.newTask,
                done : "false",
            };
            if (addingTask.task !== ""){
                this.myList.push(addingTask);
                this.newTask = "";
            }
        },
    }
})