Vue.createApp({
    data() {
        return {
            word: null,            
            number: null,
            message: null,
        };
    },

    methods:{
        repeatWord(number){            

            if(number>=0){
                this.message = this.word.repeat(number);                
            }
            else this.message = "Must be non-negative number: " + this.number;           
        }
    }
}).mount("#app")