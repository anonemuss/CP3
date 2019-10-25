let app = new Vue({
    el: '#app',
    data:{
        genre: '',
        story: ''
    },
    computed:{
        
    },
    created(){
        this.getgenre();
    },
    watch:{
        
    },
    methods:{
        getgenre(){
            let response = axios.get('https://binaryjazz.us/wp-json/genrenator/v1/genre/').then(r =>{
                this.genre = r.data;
            });
        },
    },
    template:`
    <div>
    <div class="jumbotron">
    <p>{{genre}}</p>
    </div>
    <button type="button" v-on:click="getgenre">New Genre</button>
    </div>`
});