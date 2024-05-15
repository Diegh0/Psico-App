import { Component, Inject, inject } from '@angular/core';
import { CKEditorModule, ChangeEvent } from '@ckeditor/ckeditor5-angular';
// import  Editor from 'ckeditor5-custom-build/build/ckeditor';
import  Editor from '../../../../ckeditor5-custom-build/build/ckeditor';

import { FormsModule, NgModel } from '@angular/forms';
import { saveAs } from 'file-saver';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import { NgStyle } from '@angular/common';
import htmlToDocx from 'html-to-docx';



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



}



