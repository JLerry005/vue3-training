
import AppButton from './AppButton.js';
import Assignments from './Assignments.js';
import Card from './Card.js';


export default {
    components: { AppButton, Assignments, Card},

    template: `
    
        <div class="grid gap-6">
            <card v-slot:heading> Assignments </card>

            <assignments></assignments>

            <!-- <app-button :processing="false">Submit</app-button> -->
            
        </div>

    `,

    // <card> 
    // <template v-slot:heading>
    //     Assignments 
    // </template>

    //     This is the default content hehehehe...
    // </card>

    // <card> 
    //     This is the default content hehehehe...
    // </card>

    // <card theme="light"> 
    //     This is the default content hehehehe...
    // </card>
    
    // <template #footer>
    //     This is my footer
    // </template>
}
