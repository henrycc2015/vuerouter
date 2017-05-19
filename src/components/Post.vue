<template>
    <div>
        <div class="loading" v-if='loading'>
            Loading...
        </div>
        <div class="error" v-if='error'>
            {{error}}
        </div>
        <div class="content">
            <h2>{{post}}</h2>
        </div>
    </div>

</template>
<script>
    export default{
        data() {
            return {
                loading :false,
                post: null,
                error:null
            }
        },
        created() {
            this.fetchData()
        },
        watch: {
            '$route' : 'fetchData'
        },
        methods: {
            fetchData:function() {
                this.post = this.error = null
                this.loading = this.$route.params.id ? false: true
                this.post = this.$route.params.id || 'hello world'
            }
        }

    }
</script>