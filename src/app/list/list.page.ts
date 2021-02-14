import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  data: any;

  loadDoc() {
    let url = 'http://spike.scu.edu.au:8080/PetServ/';

    this.data = this.getData(url);

    console.log(typeof (this.data));
  }

  getData = (url) => {
    return fetch(`${url}`)
      .then((response) => {
        console.log(response)
        return response.json()
      })
      .catch((err) => console.log(err))
  }


}
