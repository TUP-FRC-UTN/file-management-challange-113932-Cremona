import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FileItem, FileType } from '../models/file.item.model';
import { FILE_LIST } from '../data/file.storage';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  files: FileItem[] = FILE_LIST;
  title = 'file-management';

  folderList: FileItem[] =[]
  fileList: FileItem[]=[]

  
  ngOnInit(){
    
    this.folderList = this.files
      .filter(file => file.type === FileType.FOLDER)
      .sort((a, b) => a.name.localeCompare(b.name));

    // Filtrar y ordenar archivos (FILES)
    this.fileList = this.files
      .filter(file => file.type === FileType.FILE)
      .sort((a, b) => a.name.localeCompare(b.name));

    this.files = this.folderList
    for(let i = 0; i < this.fileList.length;i++){
      this.files.push(this.fileList[i]);
    }

  }
  

  
}
