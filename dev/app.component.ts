import {Component} from 'angular2/core';
import {AttributeDirectives} from "./attribute-directives.component";
import {StructuralDirectivesComponent} from "./structural-directives.component";


@Component({
    selector: 'my-app',
    template: `
        <my-attribute-directives></my-attribute-directives>
        <br />
        <h1>Structural directives</h1>
        <structural-directives></structural-directives>
    `,
    directives: [AttributeDirectives, StructuralDirectivesComponent]

})

export class AppComponent {

}
