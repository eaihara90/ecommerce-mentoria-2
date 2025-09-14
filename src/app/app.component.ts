import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiModule } from '@ecommerce-mentoria-2/ui';

@Component({
    standalone: true,
    imports: [RouterModule, UiModule],
    selector: 'ecommerce-mentoria-2-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'ecommerce-mentoria-2';
}
