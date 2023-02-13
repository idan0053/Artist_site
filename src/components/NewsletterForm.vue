<script>
export default {
    data(){
        return{
            name: '',
            email: ''
        }
    },
    methods: {
        close() {
            window.location.reload();
        },
        save() {
        console.log(this.name)
        console.log(this.email)
    }
  }
}
</script>

<template>
        <div class="container">
            <div id="news-header">
                <h2>NEWSLETTER</h2>
                <img id="x" @click="close()" src="../assets/x.png" alt="x">
            </div>
            <p id="info-text">Want the latest news? <br>
            Sign up to be one of the first to know the latest news on Dermot.</p>
            <div id="form-container">
                <p>Name</p>
                <input v-model="name" type="text">
                <p>Email adress</p>
                <input v-model="email" type="text">
                <button @click="save()">Sign up!</button>
            </div>
        </div>
</template>

<style scoped>

.container {
    background-color: #ffffff;
    width: auto;
    height: auto;
    position: relative;
}

#news-header {
    display: flex;
}

h2 {
    font-size: 2.5rem;
    margin: 3rem 0 0 3rem;
}

#x {
    width: 2rem;
    height: 2rem;
    margin: .2rem .2rem;
    position: absolute; top:0; right:0;
    cursor: pointer;
}

#info-text {
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


</style>
