import Assignment from "./Assignment.js"
import AssignmentTags from "./AssignmentTags.js"
import Card from "./Card.js"

export default {
    components: { Assignment, AssignmentTags, Card },
    template: `
        <card v-show="assignments.length" class="w-72">
            <div class="flex justify-between items-start">
                <h2 class="font-bold mb-2 text-xl">
                    {{ title }}
                    <span class="text-sm text-gray-400">({{ assignments.length }})</span>
                </h2>
                <button v-show="canToggle" class="text-lg" @click="$emit('toggle')">&times</button>
            </div>

            <assignment-tags 
                v-model="currentTag"
                :initial-tags="assignments.map(a => a.tag)"
            />

            <ul class="rounded-md mt-6 w-full">
                <assignment 
                    v-for="assignment in filteredAssignments" 
                    class="flex gap-2 items-center" 
                    :key="assignment.id"
                    :assignment="assignment"
                    >
                </assignment>
            </ul>

            <slot></slot>
        </card>
    `,

    props: {
        assignments: Array, 
        title: String,
        
        canToggle: { type: Boolean, default: false}
    },

   data() {
     return {
            currentTag: 'all',
        }
   },

    computed: {
        filteredAssignments(){
            if(this.currentTag === 'all') {
                return this.assignments;
            } 
            return this.assignments.filter(initialTags => initialTags.tag === this.currentTag);
        },

    }
        
}