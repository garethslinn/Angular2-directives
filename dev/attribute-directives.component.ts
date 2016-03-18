import {Component} from 'angular2/core';
import {HighLightDirective} from "./highlight.directive";

@Component({
    selector: 'my-attribute-directives',
    template: `
        <div [myHighLight]="'red'">
            Highlight me
        </div>
        <br /><br />
        <div myHighLight [myHighLight]="'yellow'">
            Another Highlight
        </div>
        <br /><br />
        <div myHighLight [myHighLight]="">
            Another Highlight
        </div>
    `,
    directives: [HighLightDirective]

})

export class AttributeDirectives {

}
