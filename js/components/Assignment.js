export default {
    template: `
        <li>
            <label 
                class="p-2 flex justify-between items-center w-full hover:cursor-pointer hover:text-teal-500 transition-all ease-in-out duration-300">
                {{ assignment.name }}
                <input type="checkbox" v-model:="assignment.complete" class="ml-2 accent-lime-500 hover:accent-lime-500 hover:cursor-pointer">
            </label>
        </li>
    `,

    props: {
        assignment: Object,
    }
}