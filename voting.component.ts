import { Component } from '@angular/core';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css'],
})
export class VotingComponent {
  complaints = [
    { text: 'Complaint 1', upvotes: 0, solved: false, imageUrl: 'image1.jpg' },
    { text: 'Complaint 2', upvotes: 0, solved: false, imageUrl: 'image2.jpg' },
    // More complaints...
  ];

  upvoteComplaint(complaint: any): void {
    complaint.upvotes++;
    this.complaints.sort((a, b) => b.upvotes - a.upvotes);
  }

  markAsSolved(complaint: any): void {
    complaint.solved = true;
  }
}
