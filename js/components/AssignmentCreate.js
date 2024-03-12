export default {
    template: `
        <form @submit.prevent="add">
            <div class="mb-1 text-stone-800 my-2">
                <label class="relative flex">
                    <input 
                        class="w-full placeholder:italic placeholder:text-slate-400 bg-amber-100 border border-slate-300 rounded-md py-1 pl-3 pr-3 shadow-sm focus:outline-none focus:border-amber-500 focus:ring-amber-500 focus:ring-1 sm:text-sm" placeholder="New assignment..." 
                        type="text"
                        v-model="newAssignments"
                        required
                    />
                    <button 
                        type="submit" 
                        class="absolute inset-y-0 right-0 ml-1 py-1s pr-1 text-gray-50 border-stone-800 rounded hover:cursor-pointer hover:text-gray-100 transition-all ease-in-out duration-300">
                        <span class=" flex items-center pl-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-amber-500">
                            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clip-rule="evenodd" />
                            </svg>

                        </span>
                    </button>
                </label>
            </div>
        </form>
    `,

    props: {
        assignments: Array
    },

    data() {
        return {
            newAssignments: ''
        }
    },

    methods: {
        add() {
            this.$emit('add', this.newAssignments);
            // this.assignments.push({
            //     id: this.assignments + 1,
            //     name: this.newAssignments,
            //     complete: false
            // }),
            this.newAssignments = ''
        }
    }
}