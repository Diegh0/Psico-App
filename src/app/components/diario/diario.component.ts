import { Component } from '@angular/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import CustomEditor from '../../../../plugins/build/ckeditor';


@Component({
  selector: 'app-diario',
  standalone: true,
  imports: [CKEditorModule],
  templateUrl: './diario.component.html',
  styleUrl: './diario.component.scss'
})
export class DiarioComponent {

public Editor:any = CustomEditor

}
