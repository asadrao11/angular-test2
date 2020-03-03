import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import * as XLSX from 'xlsx';

@Component({
  selector: 'app-add-manufacturer',
  templateUrl: './add-manufacturer.component.html',
  styleUrls: ['./add-manufacturer.component.scss']
})
export class AddManufacturerComponent implements OnInit {

  public submitLoader: boolean;
  filename: string = "Choose File";
  fileToUpload: File = null;

  wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
  fileName: string = 'SheetJS.xlsx';


  constructor(private http: HttpClient) {
    this.submitLoader = false;
  }

  ngOnInit() {
  }

  handleFileInput(e) {
    if (e.target.files.length !== 1) {
      this.filename = "Choose File";
      return "Cannot use multiple files";
    }
    else if (e.target.files.length == 1) {
      this.filename = e.target.files.item(0).name;
      this.fileToUpload = e.target.files.item(0);
      this.fileUpload(e);
    }
    else {
      this.filename = "Choose File";
      
      return "Error in reading file";
    }
  }

  fileUpload(e) {
    if (this.fileToUpload) {
      const reader: FileReader = new FileReader();
      reader.onload = (e: any) => {
        const bstr: string = e.target.result;
        const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
        const wsname: string = wb.SheetNames[0];
        const ws: XLSX.WorkSheet = wb.Sheets[wsname];
        let data = XLSX.utils.sheet_to_json(ws, { header: 1 });

        
        // this.http.post(environment.host + 'manufacturer/bulkupload', data).subscribe((res) => {

        // })
      };
      reader.readAsBinaryString(e.target.files[0]);
    }
    else{
      // this.toastr.success('Hello world!', 'Toastr fun!');
      return "Please select file";
    }
  }

  onSubmitLoader() {
    this.submitLoader = true;
    setTimeout(() => {
      this.submitLoader = false;
    }, 2000);
  }

}
