<?php
// Conectarse a la base de datos
$servername = "localhost";
$username = "tu_usuario";
$password = "tu_contraseña";
$dbname = "tu_basedatos";
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
  die("Error de conexión: " . $conn->connect_error);
}

// Obtener los términos de búsqueda
$busqueda = $_POST["busqueda"];

// Realizar la consulta a la base de datos
$sql = "SELECT * FROM noticias WHERE titulo LIKE '%$busqueda%' OR descripcion LIKE '%$busqueda%' OR contenido LIKE '%$busqueda%'";
$resultado = $conn->query($sql);

// Mostrar los resultados de la búsqueda
if ($resultado->num_rows > 0) {
  while($fila = $resultado->fetch_assoc()) {
    echo "<h2>" . $fila["titulo"] . "</h2>";
    echo "<p>" . $fila["descripcion"] . "</p>";
    echo "<p>" . $fila["contenido"] . "</p>";
    echo "<hr>";
  }
} else {
  echo "No se encontraron resultados para la búsqueda: " . $busqueda;
}

// Cerrar la conexión
$conn->close();
?>
