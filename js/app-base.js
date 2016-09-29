var hello = new Vue({
    el: '#hello',
    data: {
        msg: "Hello",
        people: [
            {name:"Maria"},
            {name:"Pedro"},
            {name:"Ricardo"},
            {name:"Amanda"},
        ],
        newElement: '',
        elements: [],
        objectA: {
            fontSize: '30px'
        },
        objectB: {
            color: 'red'
        },
        myListForm: [],
        myForm: {
            name:'a',
            email:'b'
        }
    },
    methods: {
        addElement: function (e) {
            e.preventDefault();
            var title = this.newElement.trim();
            if (title) {
                this.elements.push({title:title});
                this.newElement = "";
            }
        },
        removeElement: function (e, i) {
            e.preventDefault();
            this.elements.splice(i, 1);
        },
        myClick: function () {
            alert('Clicou!');
        },
        myKeyUp: function () {
            alert('myKeyUp');
        },
        addForm: function () {
            this.myListForm.push({
               name: this.myForm.name,
               email: this.myForm.email,
            });
            this.myForm.name = '';
            this.myForm.email = '';
        }
    }
});