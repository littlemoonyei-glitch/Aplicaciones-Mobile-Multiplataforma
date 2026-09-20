import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';
import { DURATION, show } from 'nativescript-toasts';
import { Book, BOOKS } from '../shared/book';

@Component({
  selector: 'ns-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  book!: Book;
  constructor(private route: ActivatedRoute, private routerExtensions: RouterExtensions) {}
  ngOnInit(): void {
    const id = Number(this.route.snapshot.params.id);
    this.book = BOOKS.find(item => item.id === id) || { id, title: 'Lectura nueva', author: 'Biblioteca móvil', category: 'Novedad', description: 'Este libro fue agregado al actualizar el listado.', cover: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=500' };
  }
  goBack(): void { this.routerExtensions.back(); }
  save(): void { show({ text: 'Libro guardado en tus favoritos', duration: DURATION.SHORT }); }
}
