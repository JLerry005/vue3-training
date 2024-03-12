export default {
    template: `
        <div 
            :class="{
                'p-5 py-3 rounded-xl shadow-md shadow-teal-300 transition=-all ease-in-out duration-500': true, 
                'bg-zinc-800': theme === 'dark',
                'bg-gray-100 text-gray-900': theme === 'light'
            }">    
            <h2 v-if="$slots.heading" class="font-bold mb-2 text-xl">
                <slot name="heading" />
            </h2>

            <slot />

            <footer v-if="$slots.footer">
                <slot name="footer"/>
            </footer>
        </div>
    `,

    props: {
        theme: { type: String, default: 'dark'}
    }
}