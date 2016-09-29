//Vue.http.options.emulateJSON = true;
var app = new Vue({
    el:'#app',
    data:{
        books:[],
        mySearch: '',
        orderCol: 'id',
        orderInverse: -1,
    },
    methods:{
        filterOrderBy: function (event, col) {
            event.preventDefault();
            this.orderCol = col;
            this.orderInverse *= -1;
        }
    },
    ready:function(){
        var self = this;
        console.log('teste');

        self.$http.get('dataServer.json').then(function(response){
            self.books = response.data;
        });

    }
});