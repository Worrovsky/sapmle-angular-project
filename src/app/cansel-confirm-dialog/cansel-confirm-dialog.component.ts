import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-cansel-confirm-dialog',
  templateUrl: './cansel-confirm-dialog.component.html',
  styleUrls: ['./cansel-confirm-dialog.component.css'],
})
export class CanselConfirmDialogComponent implements OnInit {
  message: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: { message: string },
    private dialogRef: MatDialogRef<CanselConfirmDialogComponent>
  ) {
    this.message = data.message;
  }

  ngOnInit(): void {}

  onCloseClick() {
    this.dialogRef.close({
      a: 'abc',
      b: 'zwx',
    });
  }
}
