import { Component } from '@angular/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import  Editor from '../../../../ckeditor5-custom-build/build/ckeditor';
import * as html2pdf from 'html2pdf.js';
import { FormsModule} from '@angular/forms';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-diario',
  standalone: true,
  imports: [CKEditorModule,FormsModule,NgStyle],
  templateUrl: './diario.component.html',
  styleUrl: './diario.component.scss'
})
export class DiarioComponent {

  public Editor:any = Editor;

  public editorData = '';
  downloadPDF() {
    const editorContent = this.editorData;

    const tempElement = document.createElement('div');
    tempElement.innerHTML = editorContent;

    const options = {
      margin: 10,
      filename: 'documento.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().from(tempElement).set(options).save();
  }

 
}
 




