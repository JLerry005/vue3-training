export default {
    template: `
        <div class="flex gap-1 items-center flex-wrap">
            <button 
                @click="$emit('update:modelValue', tag)"
                v-for="tag in tags" 
                class="bg-teal-500 px-2 py-px rounded text-[10px] tracking-wider text-white uppercase font-medium hover:shadow hover:shadow-teal-300 hover:cursor-pointer transition-all ease-in-out duration-300"
                :class="{
                    'bg-teal-900 shadow shadow-teal-300': tag === modelValue
                }"
            >
                {{ tag }}
            </button>
        </div>
    `,
    
    props: {
        initialTags: Array,
        modelValue: String
    },

    computed: {
        tags() {
            // return ['javascript', 'CSS', 'research'];
            return ['all',...new Set(this.initialTags)];
        }
    },
}