import { Component } from '@angular/core';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css'],
})
export class ComplaintsComponent {
  complaintText: string = '';
  imageUrl: string = '';

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  submitComplaint(): void {
    // Logic to submit the complaint to the backend
    console.log('Complaint submitted:', this.complaintText, this.imageUrl);
  }
}
