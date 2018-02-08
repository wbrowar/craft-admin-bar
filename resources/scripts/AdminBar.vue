<template>
    <div v-html="adminbar"></div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                adminbar: false,
                data: false,
            };
        },
        props: {
            uri: { required: true },
        },
        mounted() {
            // get the URI that's passed in as a prop
            this.data = {
                uri: this.uri
            };

            // make request to get Admin Bar content
            axios.post('/actions/admin-bar/bar', this.data).then((json) => {
                if (json.status === 200) {
                    this.adminbar = json.data.content;
                }
            });
        },
        updated: function () {
            this.$nextTick(function () {
                if (this.adminbar && typeof window.adminBarInit === "function") {
                    // fire init function that gets loaded into the template
                    // via the {{ getAdminBarAssets() }} Twig tag
                    window.adminBarInit();
                }
            })
        }
    }
</script>