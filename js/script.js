console.log('vue ok', Vue)

Vue.config.devtools = true;
//RICORDA IL PASCAL CASE
const root = new Vue({
    name: 'mail-list',
    //Posso cambiare il nome all'interno della console (Vue)
    //prendo l'elemento dal dom(OBBLIGATORIO)
    el: '#root',
    data: {
        printEmail: '',
        totEmails: 10,
        myGeneratedEmails: [],
    },
    methods: {
        getRandomEmails(){
            for (let i = 1; i <= this.totEmails; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((res) => {
                        //esegui se la chiamata e' ok (2xx)
                        const email = res.data.response
                        console.log(res.data.response)
                        this.myGeneratedEmails.push(email)
                        this.printEmail = this.myGeneratedEmails
                    })
            }
        }
    },
    created() {
        this.getRandomEmails()
        }
})