import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/app-common/modal/modal.service';

@Component({
  selector: 'al-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  openModal(id: string) {
    this.modalService.open(id);
  
  }
  loading = false;
  setLoading(){
    this.loading = !this.loading
  }

}
