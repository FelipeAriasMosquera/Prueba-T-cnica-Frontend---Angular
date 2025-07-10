# 🧪 Prueba Técnica Frontend - Angular

Aplicación desarrollada como parte de una prueba técnica para evaluar habilidades en Angular, RxJS, TailwindCSS, consumo de APIs y uso de pipes personalizados.

---

## 🚀 Tecnologías usadas

- ✅ Angular 14
- ✅ RxJS (`debounceTime`, `switchMap`)
- ✅ TailwindCSS
- ✅ HttpClient
- ✅ Pipes personalizados (`filterPosts`, `highlight`)
- ✅ Arquitectura limpia (por capas)

---

## 🎯 Funcionalidad

- 🔍 Listado de posts consumidos desde la API pública [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts)
- 🔎 Filtro de búsqueda en tiempo real por título
- 🎨 Estilos responsive con TailwindCSS
- ⏳ Spinner de carga con animación y marca personalizada (`SELASKI`)
- 🧠 Pipes personalizados:
  - `filterPosts`: Filtra los posts según el término ingresado, ignorando mayusculas o minusculas
  - `highlight`: Resalta el texto buscado dentro del título de cada registro
- 📊 Contador de resultados encontrados vs. total
- 🧼 Buenas prácticas y arquitectura, separando por capas (`domain`, `application`, `infrastructure`, `presentation`)

---

## 📦 Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/FelipeAriasMosquera/Prueba-T-cnica-Frontend---Angular.git
   cd Prueba-T-cnica-Frontend---Angular
