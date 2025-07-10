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

2. Se abre desde Visual Studio o cualquier otro IDE que tengas
   ```bash
   code .

3. verifica que tengas angular 14
   ```bash
   ng version
   #npm install -g @angular/cli@14

   
1. Instala las dependencias
   ```bash
   npm install

2. Corre la app:
   ```bash
   ng serve

3. Abre tu navegador
   ```bash
   http://localhost:4200/

## 📁 Estructura del proyecto
  ![image](https://github.com/user-attachments/assets/cb1a54e2-3cee-4ecd-b4cf-11d607e6e0a7)

## 📈 ¿Qué agregaría si tuviera más tiempo?
   - **Implementación de routing**: para mejor navegacion
   - **Ordenamiento alfabético**: Agregar la opción de ordenar los posts ascendente o descendente.
   - **Interfaz más completa**: Incluir botones de navegación, filtros adicionales y una paginación que     mejore la experiencia en listas largas.

✍️ Autor
- Felipe Arias Mosquera

