
window.addEventListener('DOMContentLoaded', function() {
  const targetDiv = document.getElementById('enfocar');
  targetDiv.scrollIntoView({ behavior: 'smooth' });
});


window.addEventListener('load', function() {

 
  
// BUSCAR INTENTO #1
const searchForm = document.querySelector('#search-form');
const searchInput = document.getElementById('search-input');
const searchResults = document.querySelector('#search-results');

const pages = [
  { title: 'Promt Para Poemas', url: '../post/post1.html' },
  { title: 'Prompt para rapero', url: '../post/post2.html' },
  { title: 'Prompt para profesor de matemáticas', url: '../post/post3.html' },

  { title: 'Prompt para traductor mejorador de cualquier idioma', url: '../post/post4.html' },
  { title: 'Prompt para pronunciar en ingles', url: '../post/post5.html' },
  { title: 'Prompt para pafrasear sin plagio', url: '../post/post6.html' },
  { title: 'Prompt para comentarista de fútbol', url: '../post/post7.html' },
  { title: 'Prompt para un comediante stand-up', url: '../post/post8.html' },
  { title: 'Prompt para entrenador motivacional', url: '../post/post9.html' },
  { title: 'Prompt para un debatidor', url: '../post/post10.html' },
  { title: 'Prompt para compositor', url: '../post/post11.html' },
  { title: 'Prompt para guionista', url: '../post/post12.html' },
  { title: 'Prompt para novelista', url: '../post/post13.html' },
  { title: 'Prompt para un orador motivacional', url: '../post/post14.html' },
  { title: 'Prompt para profesor', url: '../post/post15.html' },
  { title: 'Prompt para especialista en seguridad cibernética', url: '../post/post16.html' },
  { title: 'Prompt para reclutador', url: '../post/post17.html' },
  { title: 'Prompt para etimólogo', url: '../post/post18.html' },
  { title: 'Prompt para un mago', url: '../post/post19.html' },
  { title: 'Prompt para entrenador personal', url: '../post/post20.html' },
  { title: 'Prompt para asesor de salud mental', url: '../post/post21.html' },
  { title: 'Prompt para Logistico', url: '../post/post22.html' },
  { title: 'Prompt para dentista', url: '../post/post23.html' },
  { title: 'Prompt para consultor de diseño web', url: '../post/post24.html' },
  { title: 'Prompt para un médico asistido por IA', url: '../post/post25.html' },
  { title: 'Prompt para médico', url: '../post/post26.html' },
  { title: 'Prompt para chef', url: '../post/post27.html' },
  { title: 'Prompt para contador', url: '../post/post28.html' },
  { title: 'Prompt para analista financiero', url: '../post/post29.html' },
  { title: 'Prompt para decorador de interiores', url: '../post/post30.html' },
  { title: 'Prompt para un juego de aventuras basado en texto', url: '../post/post31.html' },
  { title: 'Prompt para un generador de títulos de calidad', url: '../post/post32.html' },
  { title: 'Prompt para un intérprete de sueños', url: '../post/post33.html' },
  { title: 'Prompt ejercicios para aprender ingles', url: '../post/post34.html' },
  { title: 'Prompt para generador de contraseñas', url: '../post/post35.html' },
  { title: 'Prompt para código morse traductor', url: '../post/post36.html' },
  { title: 'Prompt para un psicólogo', url: '../post/post37.html' },
  { title: 'Prompt para generador nombres de dominio creativos', url: '../post/post38.html' },
  { title: 'Prompt para comprar dispositivo:', url: '../post/post39.html' },
  { title: 'Prompt para escribir articulos', url: '../post/post40.html' },
  { title: 'Prompt para un buscador de falacias', url: '../post/post41.html' },
  { title: 'Prompt para realizar critica de revista o texto', url: '../post/post42.html' },
  { title: 'Prompt para un influencer en las redes sociales', url: '../post/post43.html' },
  { title: 'Prompt para creador de contenido educativo', url: '../post/post44.html' },
  { title: 'Prompt para escribir de ensayos', url: '../post/post45.html' },
  { title: 'Prompt para un discurso', url: '../post/post46.html' },
  { title: 'Prompt para consultar historia ', url: '../post/post47.html' },
  { title: 'Prompt para critica de pelicula', url: '../post/post48.html' },
  { title: 'Prompt para periodico o reportaje', url: '../post/post49.html' },
  { title: 'Prompt para maquillar', url: '../post/post50.html' },
  { title: 'Prompt para cuidar niños', url: '../post/post52.html' },
  { title: 'Prompt para un artista Ascii', url: '../post/post53.html' },
  { title: 'Prompt paraintérprete de Python', url: '../post/post54.html' },
  { title: 'Prompt para buscar sinónimos', url: '../post/post.html55' },
  { title: 'Prompt para buscar antonimos', url: '../post/post.html56' },
  { title: 'Prompt para un médico virtual', url: '../post/post.html' },
  { title: 'Prompt para chef personal', url: '../post/post.html' },
  { title: 'Prompt para asesor legal', url: '../post/post.html' },
  { title: 'Prompt para estilista personal', url: '../post/post.html' },
  { title: 'Prompt para diseñar imágenes SVG', url: '../post/post.html' },
  { title: 'Prompt para arreglar errores de dispositivo', url: '../post/post.html' },
  { title: 'Prompt para resultados de matemáticas', url: '../post/post.html' },
  { title: 'Prompt para una guía de viajes en el tiempo', url: '../post/post.html' },
  { title: 'Prompt para entrenar a un trabador', url: '../post/post.html' },
  { title: 'Prompt para entrenador de talentos', url: '../post/post.html' },
  { title: 'Prompt para intérprete de programación', url: '../post/post.html' },
  { title: 'Prompt soluciones para programadores', url: '../post/post.html' },
  { title: 'Prompt para traductor de emojis', url: '../post/post.html' },
  { title: 'Prompt para intérprete de PHP', url: '../post/post.html' },
  { title: 'Prompt para un profesional de respuesta a emergencias', url: '../post/post.html' },
  { title: 'Prompt para creador de nuevos idiomas', url: '../post/post.html' },
  { title: 'Prompt para detector de idioma', url: '../post/post.html' },
  { title: 'Prompt para vendedor', url: '../post/post.html' },
  { title: 'Prompt para generador de mensajes de confirmación', url: '../post/post.html' },
  { title: 'Prompt para director ejecutivo', url: '../post/post.html' },
  { title: 'Prompt para explicar libro a niño', url: '../post/post.html' },
  { title: 'Prompt para generador de títulos a partir de texto', url: '../post/post.html' },
  { title: 'Prompt para recomendar de canciones', url: '../post/post.html' },
  { title: 'Corregir escrito o texto', url: '../post/post.html' },
  { title: 'Crear plan de estudios', url: '../post/post.html' },
  { title: 'Prompt para Crear o realizar examen', url: '../post/post.html' },
  { title: 'Prompt para ideas de sitio web', url: '../post/post.html' },
  { title: 'Prompt para Crear tablas', url: '../post/post.html' },
  { title: 'Prompt para Crear campañas de publicidad', url: '../post/post.html' },
  { title: 'Prompt para generar nuevas ideas de negocio', url: '../post/post.html' },
  { title: 'Prompt para enviar correo importante', url: '../post/post.html' },
  { title: 'Prompt para traducir video o audio', url: '../post/post.html' },
  { title: 'Prompt para realizar descripción de titulo ', url: '../post/post.html' },
  { title: 'Prompt para titulo de publicación', url: '../post/post.html' },
  { title: 'Prompt para redactar una misión', url: '../post/post.html' },
  { title: 'Prompt para redactar una visión', url: '../post/post.html' },
  { title: 'Prompt para lista de referencias', url: '../post/post.html' },
  { title: 'Prompt para citar en APA', url: '../post/post.html' },
  { title: 'Prompt para citar en ICONTEC', url: '../post/post.html' },
  { title: 'Prompt para redactar Objetivo general', url: '../post/post.html' },
  { title: 'Prompt para redactar objetivos específicos', url: '../post/post.html' },
  { title: 'Prompt para enamorar chica', url: '../post/post.html' },
  { title: 'Prompt para entretenerse en algo', url: '../post/post.html' },
  { title: 'Prompt para pelicula Netflix', url: '../post/post.html' },
  { title: 'Prompt para contar palabras', url: '../post/post.html' },
  { title: '', url: '../post/post.html' },
  { title: '', url: '../post/post.html' },
  { title: '', url: '../post/post.html' },
  { title: '', url: '../post/post.html' },
  { title: '', url: '../post/post.html' },
  { title: '', url: '../post/post.html' },
  { title: '', url: '../post/post.html' },
  { title: '', url: '../post/post.html' },
  { title: '', url: '../post/post.html' },
  { title: '', url: '../post/post.html' },
  { title: '', url: '../post/post.html' },
  { title: '', url: '../post/post.html' },
  { title: '', url: '../post/post.html' },

  
  
];





function normalize(string) {
  return string.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function searchPages(query) {
  const normalizedQuery = normalize(query.toLowerCase());
  const matchingPages = pages.filter(page => {
    const normalizedTitle = normalize(page.title.toLowerCase());
    const normalizedUrl = normalize(page.url.toLowerCase());
    return normalizedTitle.includes(normalizedQuery) || normalizedUrl.includes(normalizedQuery);
  });
  return matchingPages;
}

function displayResults(results) {
  searchResults.innerHTML = '';
  if (results.length === 0) {
    searchResults.innerHTML = '<li>No se encontraron resultados.</li>';
  } else {
    results.forEach(result => {
      const li = document.createElement('li');
      const link = document.createElement('a');
      link.href = result.url;
      link.textContent = result.title;
      li.appendChild(link);
      searchResults.appendChild(li);
    });
  }
}

searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const query = searchInput.value.trim();
  const results = searchPages(query);
  displayResults(results);
});

searchInput.addEventListener('input', event => {
  const query = searchInput.value.trim();
  if (query) {
    const results = searchPages(query);
    displayResults(results);
  } else {
    searchResults.innerHTML = '';
  }
});




//letrero


//icon buscar


  });



//enfocador 

