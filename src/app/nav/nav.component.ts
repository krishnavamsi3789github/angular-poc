import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginOverViewDialogComponent } from './login-over-view-dialog/login-over-view-dialog.component';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  itemcount = 0;

  constructor( public dialog: MatDialog , private cartService: CartService) { }
 
  addedCount(){
    this.cartService.getCartLength().subscribe(
      (data) => {
        this.itemcount = data;
        //console.log(data+"get length");
      },(err) => {
        console.log(err);
      }
    );
  }
  
  ngOnInit(): void {
    this.addedCount();
  }
  
  openDialog(): void {
    
    const dialogRef = this.dialog.open(LoginOverViewDialogComponent, {
      width: '55%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }
}
