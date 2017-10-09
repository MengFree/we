<template>
    <div class="hello">
       test1
       <ul>
            <li>
                <router-link to="/home">home</router-link>
            </li>
        </ul>
    </div>
</template>

<script>

import { mapState, mapActions, mapMutations } from 'vuex';

export default {
    name: 'test',
    data() {
        return {
            msg: 'false',
            src: null
        }
    },
    computed: {
        ...mapState([
            'fuck'
        ]),
    },
    methods: {
        ...mapActions([
            'SHIT'
        ]),
        damn() {
            this.SHIT();
        },
        hhe() {
            var that = this;
            var files = this.$refs.input.files[0];
            // console.log(files);
            var fd = new FormData();
            fd.append('IMG', files);
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    var data = JSON.parse(xhr.responseText);
                    console.log(data);
                    that.src = data.body.base + data.body.url;
                }
            };
            xhr.open("post", '/api/uploadimg');
            xhr.send(fd);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
