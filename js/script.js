const { createApp } = Vue

createApp({
    data() {
        return {
            toDoList: [
                `Cosa da fare 1`,
                `Cosa da fare 2`,
                `Cosa da fare 3`,
                `Cosa da fare 4`,
                `Cosa da fare 5`,
                `Cosa da fare 6`,
                `Cosa da fare 7`,
                `Cosa da fare 8`,
                `Cosa da fare 9`,
            ],
            newElement: ``,
        }
    },
    methods: {
        addToList() {
            debugger;
            this.toDoList.push(this.newElement);
            document.getElementById("newElement").value = ``;
            //Qualcosa in Vue reimposta il valore precedente del "input", annullando la riga qui sopra.
        },
        removeElement(item) {           
            // item.remove()...?
        }
    }
}).mount('#vueApp');