import { Component, ComponentRef, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { FooComponent } from './templates/foo/foo.component';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  templates: Type<any>[] = [
    FooComponent,
    FooComponent,
    FooComponent,
    FooComponent,
  ];
  selectedTemplateIndex: number = 0;

  @ViewChild('templateHost', { read: ViewContainerRef, static: true })
  viewContainerRef!: ViewContainerRef;

  selectedComponentRef?: ComponentRef<any>; // Store instance ref.

  constructor() {

  }

  loadSelectedComponent(): void {
    this.viewContainerRef.clear();

    const selectedComponent = this.templates[this.selectedTemplateIndex];
    const componentRef = this.viewContainerRef.createComponent(selectedComponent);

    this.selectedComponentRef = componentRef; // Save the instance.
  }

  generatePdf(): void {
    if (this.selectedComponentRef?.instance?.generatePdf) {
      this.selectedComponentRef.instance.generatePdf();
    }
  }
}

