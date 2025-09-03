import { Component } from '@angular/core';
import { BaseTemplate } from '../base-template';

@Component({
  selector: 'app-foo',
  standalone: true,
  imports: [],
  templateUrl: './foo.component.html',
  styleUrl: './foo.component.scss'
})
export class FooComponent extends BaseTemplate {
  constructor() {
    super('foo');
  }
}
