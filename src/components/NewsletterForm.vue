<script>
export default {
    created (){
        fetch('http://localhost:3000/users')
            .then(response => response.json())
            .then(result => this.users = result)
    },
    data(){
        return{
            users: '',
            name: '',
            email: '',
            showForm: true
        }
    },
    methods: {
        close() {
            window.location.reload();
        },
        save() {
            fetch('http://localhost:3000/users',{
            body: JSON.stringify({id: this.users.length+1, name: this.name, email: this.email}),
            headers: {'Content-Type': 'application/json'},
            method: 'POST'
            })
            .then(response => response.json())
            .then(data => console.log(data))
        }
  }
}
</script>

<template>
        <div class="container">
            <div class="news-header">
                <h2 v-if="showForm === true">NEWSLETTER</h2>
                <h2 v-if="showForm === false">THANK YOU</h2>
                <img id="x" @click="close()" src="../assets/x.png" alt="x">
            </div>
            <p class="info-text" v-if="showForm === true">Want the latest news? <br>
            Sign up to be the first to know the latest news on Dermot.</p>
            <h3 v-if="showForm === false">for subscribing {{ name }}</h3>
            <p class="info-text" v-if="showForm === false">We will now provide you with the latest news <br> on Dermot Kennedy. If you wish to unsubscribe <br> there is a link in the bottom of every email.</p>
            <div id="form-container" v-if="showForm === true">
                <p>Name</p>
                <input v-model="name" type="text">
                <p>Email adress</p>
                <input v-model="email" type="text">
                <button @click="save(), showForm = false">Sign up!</button>
            </div>
        </div>

</template>

<style scoped>

.container {
    background-color: #ffffff;
    width: auto;
    height: auto;
    padding-bottom: 2rem;
    position: relative;
}

.news-header {
    display: flex;
    text-align: center;
}

h2 {
    font-size: 2.5rem;
    margin: 3rem 0 0 3rem;
}

h3 {
    font-size: 1.9rem;
    margin: 0 0 1rem 3rem;
}

#x {
    width: 2rem;
    height: 2rem;
    margin: .2rem .2rem;
    position: absolute; top:0; right:0;
    cursor: pointer;
}

.info-text {
    font-size: .8rem;
    margin-left: 3rem;
    margin-right: 3rem;
}

#form-container {
    margin-left: 3rem;
    display: flex;
    flex-direction: column;
    width: 70%;
}

#form-container p {
    font-size: .8rem;
    margin-top: 2vh;
    margin-bottom: 0;
}

#form-container button {
    margin: 3vh 0 3rem;
}
#news-form {
    position: absolute;
    top: 10%;
    left: 30%;
    z-index: 2;
}
</style>
