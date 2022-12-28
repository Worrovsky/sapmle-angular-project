import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CanselConfirmDialogComponent } from '../cansel-confirm-dialog/cansel-confirm-dialog.component';
import { HeroesService } from '../heroes/heroes.service';
import { Superhero } from '../models/superhero';

@Component({
  selector: 'app-create-hero',
  templateUrl: './create-hero.component.html',
  styleUrls: ['./create-hero.component.css'],
})
export class CreateHeroComponent implements OnInit {
  superhero: Superhero;
  @ViewChild('superheroForm') form: NgForm;

  constructor(
    private heroesService: HeroesService,
    private dialog: MatDialog,
    private snackbar: MatSnackBar
  ) {
    this.superhero = new Superhero();
  }

  ngOnInit(): void {}

  onSave() {
    if (this.form.valid) {
      this.heroesService.add({ ...this.superhero });
      this.form.reset();
      this.snackbar.open('Hero is saved!', 'Ok');
    }
  }
  onCancel() {
    const dialogData = { message: 'Cancel creation new hero?' };
    const dialogRef: MatDialogRef<CanselConfirmDialogComponent> =
      this.dialog.open(CanselConfirmDialogComponent, {
        hasBackdrop: true,
        width: '300px',
        data: { message: 'Cancel creation new hero?' },
      });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }
}
