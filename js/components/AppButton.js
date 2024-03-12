

 export default {
    template: `
        <button 
            :class="{
                'px-5 py-2 rounded-md disabled:cursor-not-allowed': true, 
                'bg-purple-500 hover:bg-purple-700': type === 'primary', 
                'bg-cyan-500 hover:bg-cyan-700': type === 'secondary', 
                'bg-white hover:bg-gray-200': type === 'muted', 
                'relative is-loading text-transparent': processing
            }"
            :disabled="processing"
            @click="toggle"
        >
            <slot/> 
        </button>
    `,

    methods: {
        toggle() {
            // alert('Working');
            this.$emit('update:processing', !this.processing);
        }
    },

    props: {
        type: {
            type: String,
            default: 'primary'
        },

        processing: {
            type: Boolean,
            default: false
        }
    },
}