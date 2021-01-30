<template>
    <form netlify name="contact">
        <div class="field is-horizontal">
            <div class="field-label">
                <label for="" class="label">Name</label>
            </div>
            <div class="field-body">
                <input type="text" class="input" placeholder="Name">
            </div>
        </div>
        <div class="field is-horizontal">
            <div class="field-label">
                <label for="" class="label">Email</label>
            </div>
            <div class="field-body">
                <input type="email" class="input" placeholder="Email">
            </div>
        </div>
        <div class="field is-horizontal">
            <div class="field-label">
                <label for="" class="label">Message</label>
            </div>
            <div class="field-body">
                <textarea name="message" class="textarea" placeholder="Message" rows="5" />
            </div>
        </div>
        <div class="field is-horizontal">
            <div class="field-label">
            </div>
            <div class="field-body">
                <button class="button is-primary is-outlined" type="submit">
                    Send
                </button>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">

</style>