import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: { AssignmentList, AssignmentCreate },
    template: `
        <section class="flex flex-col gap-8 md:flex-row transition=-all ease-in-out duration-500">
            <assignment-list :assignments="filters.inProgress" title="🔥 In Progress" class="text-yellow-500">
                <assignment-create @add="add"></assignment-create>
            </assignment-list>

            <div v-show="showCompleted">
                <assignment-list 
                    :assignments="filters.completed" 
                    title="😎 Completed" 
                    can-toggle 
                    class="text-lime-500"
                    @toggle="showCompleted = !showCompleted"
                ></assignment-list>
            </div>
        </section>
            `,
 
    data() {
        return {
            assignments: [],
            newAssignments: '',
            showCompleted: true
        }
    },

    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(assignment =>!assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete),
            }
        }
    },

    created() {
        fetch('http://localhost:3001/assignments')
            .then(response => response.json())
            .then(assignments => {
                this.assignments = assignments;
        })
    },

    methods: {
        add(name) {
            this.assignments.push({
                id: this.assignments + 1,
                name: name,
                complete: false,
            }),
            this.newAssignments = ''
        }
    }
    
}