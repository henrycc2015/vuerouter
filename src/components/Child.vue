<template>
    <div>
        <h1 @click='goto'>go to Hello</h1>
        <h2 @click='back'>back</h2>
    </div>
</template>
<script>
    export default {
        props:[name],
        methods:{
            goto : function() {
                this.$router.replace({name:'profile',params:{id:'1231',username:'henrycc'}});
            },
            back: function() {
                this.$router.go(-1);
            }
        }
    }
    
</script>
<style scoped>

</style>