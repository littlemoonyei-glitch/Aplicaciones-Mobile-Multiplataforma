# Actividad 2 — Biblioteca móvil

Aplicación NativeScript + Angular que demuestra los elementos solicitados en la guía práctica.

## Ejecutar

1. Instalar dependencias: `npm install`
2. Con un emulador o dispositivo Android conectado: `npm run android`

## Evidencias en el código

- `catalog.component.html`: búsqueda con `[(ngModel)]`, `ListView`, plantilla con `FlexboxLayout`, pull-to-refresh y double tap.
- `catalog.component.ts`: `RouterExtensions.navigate`, diálogo `action`, toast y animación `rotate`.
- `min-characters.directive.ts`: validador Angular personalizado.
- `App_Resources/Android/.../splash_screen.xml`: splash Android personalizado.
