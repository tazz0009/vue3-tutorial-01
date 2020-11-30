export default {
    data() {
        return {
            timeout: "",
        };
    },
    methods: {
        debounce(func, wait = 1000) {
            clearTimeout(this.setTimeout);
            this.timeout = setTimeout(func, wait);
        }
    }
};