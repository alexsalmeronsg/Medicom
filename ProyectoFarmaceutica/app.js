// ===============================
// Inicializar app
// ===============================
var app = angular.module("medApp", ["ngRoute"]);

// ===============================
// Configurar rutas del SPA
// ===============================
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "inicio.html",
            controller: "MainController"
        })
        .when("/nosotros", {
            templateUrl: "nosotros.html"
        })
        .when("/servicios", {
            templateUrl: "servicios.html"
        })
        .when("/blog", {
            templateUrl: "blog.html"
        })
        .when("/citas", {
            templateUrl: "citas.html"
        })
        .when("/privacidad", {
            templateUrl: "privacidad.html"
        })
        .when("/terminos", {
            templateUrl: "terminos.html"
        })
        .otherwise({
            redirectTo: "/"
        });
});

// ===============================
// Controlador principal
// ===============================
app.controller("MainController", function ($scope) {

    // ===============================
    // SERVICIOS PRINCIPALES
    // ===============================
  $scope.serviciosPrincipales = [
    {
        nombre: "Urgencias",
        descripcion: "Atención inmediata las 24 horas.",
        imagen: "img/urgencias.jpg"
    },
    {
        nombre: "Imagenología",
        descripcion: "Rayos X y ultrasonidos.",
        imagen: "img/imagenología.jpg"
    },
    {
        nombre: "Laboratorio",
        descripcion: "Análisis clínicos y pruebas.",
        imagen: "img/laboratorio.jpg"
    },
    {
        nombre: "Medicina General",
        descripcion: "Consulta sin cita previa.",
        imagen: "img/medicina.jpg"
    }
];


    // ===============================
    // ESPECIALIDADES MÉDICAS
    // ===============================
    $scope.especialidades = [
        { id: 1, servicio: "Neurología", disponibilidad: "Disponible", precio: 850 },
        { id: 2, servicio: "Traumatología y Ortopedia", disponibilidad: "Disponible", precio: 750 },
        { id: 3, servicio: "Cardiología", disponibilidad: "No disponible", precio: 950 },
        { id: 4, servicio: "Pediatría", disponibilidad: "Disponible", precio: 600 },
        { id: 5, servicio: "Nutrición", disponibilidad: "Disponible", precio: 500 },
        { id: 6, servicio: "Cirugía Maxilofacial", disponibilidad: "No disponible", precio: 1500 },
        { id: 7, servicio: "Cirugía Plástica", disponibilidad: "Disponible", precio: 2500 },
        { id: 8, servicio: "Psiquiatría", disponibilidad: "Disponible", precio: 1200 }
    ];

    // ===============================
    // ORDENAMIENTO DE TABLA
    // ===============================
    $scope.orden = "id";      // orden inicial
    $scope.reverse = false;  // ascendente

    $scope.cambiarOrden = function (campo) {
        if ($scope.orden === campo) {
            $scope.reverse = !$scope.reverse;
        } else {
            $scope.orden = campo;
            $scope.reverse = false;
        }
    };

    // ===============================
    // BLOG
    // ===============================
    $scope.blogPosts = [
        {
            titulo: "La importancia de la consulta médica",
            fecha: "10 de mayo de 2025",
            resumen: "Asistir de manera regular a consulta médica permite detectar enfermedades en etapas tempranas y mantener un control adecuado de la salud.",
            imagen: "img/blog1.jpg"
        },
        {
            titulo: "Consejos para una vida saludable",
            fecha: "2 de abril de 2025",
            resumen: "Adoptar hábitos saludables como una alimentación balanceada, ejercicio constante y descanso adecuado mejora la calidad de vida.",
            imagen: "img/blog2.jpg"
        },
        {
            titulo: "Prevención y cuidado de la salud",
            fecha: "25 de octubre de 2025",
            resumen: "La prevención permite reducir riesgos, evitar complicaciones médicas y fomentar una vida más activa y segura.",
            imagen: "img/blog3.jpg"
        }
    ];

    // ===============================
    // CITAS
    // ===============================
    // Fecha mínima (hoy)
    $scope.hoy = new Date().toISOString().split("T")[0];

    $scope.cita = {};
    $scope.citaConfirmada = false;
    $scope.citaResumen = {};

    $scope.agendarCita = function () {

        // Guardar datos
        $scope.citaResumen = angular.copy($scope.cita);

        // Mostrar confirmación
        $scope.citaConfirmada = true;

        // Limpiar formulario
        $scope.cita = {};
    };

});
