import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { action, EventData, View } from '@nativescript/core';
import { DURATION, show } from 'nativescript-toasts';
import { Book, BOOKS } from '../shared/book';

@Component({
  selector: 'ns-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  @ViewChild('refreshIcon', { static: false }) refreshIcon?: ElementRef<View>;
  books: Book[] = [];
  visibleBooks: Book[] = [];
  searchText = '';
  private nextId = 4;

  constructor(private routerExtensions: RouterExtensions) {}

  ngOnInit(): void {
    this.books = [...BOOKS];
    this.filterBooks();
  }

  // [(ngModel)] invoca este método cada vez que cambia el campo de búsqueda.
  filterBooks(): void {
    const term = this.searchText.toLocaleLowerCase().trim();
    this.visibleBooks = this.books.filter(book =>
      !term || book.title.toLocaleLowerCase().includes(term) || book.author.toLocaleLowerCase().includes(term));
  }

  openDetail(book: Book): void {
    this.routerExtensions.navigate(['/detail', book.id], { transition: { name: 'slideLeft' } });
  }

  async chooseCategory(book: Book): Promise<void> {
    const result = await action({
      title: `Categoría para ${book.title}`,
      message: 'Selecciona una categoría',
      actions: ['Ficción', 'Ciencia', 'Desarrollo', 'Historia'],
      cancelButtonText: 'Cancelar'
    });
    if (result !== 'Cancelar') {
      book.category = result;
      this.filterBooks();
      show({ text: `Categoría actualizada: ${result}`, duration: DURATION.SHORT });
    }
  }

  onDoubleTap(): void {
    this.searchText = '';
    this.filterBooks();
    show({ text: 'Búsqueda limpiada con doble toque', duration: DURATION.SHORT });
  }

  refreshList(args: EventData): void {
    const added: Book = {
      id: this.nextId++, title: `Lectura recomendada ${this.nextId}`, author: 'Biblioteca móvil',
      category: ['Ficción', 'Ciencia', 'Desarrollo'][Math.floor(Math.random() * 3)],
      description: 'Elemento nuevo obtenido al actualizar el catálogo.',
      cover: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=240'
    };
    setTimeout(() => {
      this.books = [added, ...this.books];
      this.filterBooks();
      // El objeto que emite el plugin expone la propiedad `refreshing`.
      (args.object as any).refreshing = false;
      show({ text: 'Catálogo actualizado con una nueva lectura', duration: DURATION.SHORT });
    }, 700);
  }

  animateRefresh(): void {
    const icon = this.refreshIcon?.nativeElement;
    icon?.animate({ rotate: 360, duration: 450 }).then(() => icon.rotate = 0);
    show({ text: 'Desliza la lista hacia abajo para actualizar', duration: DURATION.SHORT });
  }
}
