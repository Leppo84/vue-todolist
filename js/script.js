const toDoList = new Vue ({
    el : "#toDoApp",
    data : {
        newTask : {
            task : "",
            done : "false",
        },
        myList : [
            {
                task : "Andare a prendere il nipote",
                done : "true",
            },
            {
                task : "Capire intimente Vue",
                done : "False",
            },
            {
                task : "Telefonare Cettina",
                done : "false",
            },
            {
                task : "Portare la Vespa dal meccanico",
                done : "false",
            },
            {
                task : "Prenotare casa per Tom",
                done : "true",
            },
        ]
    },
    methods : {
        // addTask (){

        // }

    }
})