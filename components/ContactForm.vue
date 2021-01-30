<template>
    <form id="contact" netlify name="contact">
        <input type="hidden" name="form-name" value="contact">
        <div class="field is-horizontal">
            <div class="field-label">
                <label for="name" class="label">Name</label>
            </div>
            <div class="field-body">
                <input id="name" name="name" type="text" class="input" placeholder="Name" v-model="name" required>
            </div>
        </div>
        <div class="field is-horizontal">
            <div class="field-label">
                <label for="email" class="label">Email</label>
            </div>
            <div class="field-body">
                <input id="email" name="email" type="email" class="input" placeholder="Email" v-model="email" required>
            </div>
        </div>
        <div class="field is-horizontal">
            <div class="field-label">
                <label for="message" class="label">Message</label>
            </div>
            <div class="field-body">
                <textarea id="message" name="message" class="textarea" placeholder="Message" rows="5" v-model="message" required/>
            </div>
        </div>
        <div class="field is-horizontal">
            <div class="field-label">
            </div>
            <div class="field-body">
                <button class="button is-primary is-outlined" type="submit" >
                    Send
                </button>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    data(){
        return{
            name: "",
            email: "",
            message: "",

        };
    },
    methods: {
    }
}
</script>

<style lang="scss">

</style>