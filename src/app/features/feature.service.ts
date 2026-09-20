import { Injectable } from '@angular/core'

export interface FeatureItem {
  id: number
  title: string
  description: string
  category: string
  accent: string
}

@Injectable({
  providedIn: 'root',
})
export class FeatureService {
  private items: FeatureItem[] = [
    {
      id: 1,
      title: 'Revisión de sprint',
      description: 'Revisa el avance del sprint y prioriza tareas del equipo.',
      category: 'Gestión',
      accent: 'Alta',
    },
    {
      id: 2,
      title: 'Checklist de QA',
      description: 'Valida funcionalidad, accesibilidad y errores de diseño.',
      category: 'Calidad',
      accent: 'Media',
    },
    {
      id: 3,
      title: 'Demo de clientes',
      description: 'Prepara la presentación final con indicadores clave.',
      category: 'Clientes',
      accent: 'Prioridad',
    },
  ]

  getItems(): FeatureItem[] {
    return this.items
  }

  getFeatureById(id: number): FeatureItem | undefined {
    return this.items.find((item) => item.id === id)
  }
}
