let tipoEvaluacion = "adulto";

// =========================
// P/E NIÑOS 0 A 2 AÑOS
// Fuente: MINSAL / OMS 2006
// =========================

const tablaPE_Ninos = [

    { meses: 0,  menos2: 2.5, menos1: 2.9, mediana: 3.3, mas1: 3.9, mas2: 4.4 },
    { meses: 1,  menos2: 3.4, menos1: 3.9, mediana: 4.5, mas1: 5.1, mas2: 5.8 },
    { meses: 2,  menos2: 4.3, menos1: 4.9, mediana: 5.6, mas1: 6.3, mas2: 7.1 },
    { meses: 3,  menos2: 5.0, menos1: 5.7, mediana: 6.4, mas1: 7.2, mas2: 8.0 },
    { meses: 4,  menos2: 5.6, menos1: 6.2, mediana: 7.0, mas1: 7.8, mas2: 8.7 },
    { meses: 5,  menos2: 6.0, menos1: 6.7, mediana: 7.5, mas1: 8.4, mas2: 9.3 },
    { meses: 6,  menos2: 6.4, menos1: 7.1, mediana: 7.9, mas1: 8.8, mas2: 9.8 },
    { meses: 7,  menos2: 6.7, menos1: 7.4, mediana: 8.3, mas1: 9.2, mas2: 10.3 },
    { meses: 8,  menos2: 6.9, menos1: 7.7, mediana: 8.6, mas1: 9.6, mas2: 10.7 },
    { meses: 9,  menos2: 7.1, menos1: 8.0, mediana: 8.9, mas1: 9.9, mas2: 11.0 },
    { meses: 10, menos2: 7.4, menos1: 8.2, mediana: 9.2, mas1: 10.2, mas2: 11.4 },
    { meses: 11, menos2: 7.6, menos1: 8.4, mediana: 9.4, mas1: 10.5, mas2: 11.7 },
    { meses: 12, menos2: 7.7, menos1: 8.6, mediana: 9.6, mas1: 10.8, mas2: 12.0 },
    { meses: 13, menos2: 7.9, menos1: 8.8, mediana: 9.9, mas1: 11.0, mas2: 12.3 },
    { meses: 14, menos2: 8.1, menos1: 9.0, mediana: 10.1, mas1: 11.3, mas2: 12.6 },
    { meses: 15, menos2: 8.3, menos1: 9.2, mediana: 10.3, mas1: 11.5, mas2: 12.8 },
    { meses: 16, menos2: 8.4, menos1: 9.4, mediana: 10.5, mas1: 11.7, mas2: 13.1 },
    { meses: 17, menos2: 8.6, menos1: 9.6, mediana: 10.7, mas1: 12.0, mas2: 13.4 },
    { meses: 18, menos2: 8.8, menos1: 9.8, mediana: 10.9, mas1: 12.2, mas2: 13.7 },
    { meses: 19, menos2: 8.9, menos1: 10.0, mediana: 11.1, mas1: 12.5, mas2: 13.9 },
    { meses: 20, menos2: 9.1, menos1: 10.1, mediana: 11.3, mas1: 12.7, mas2: 14.2 },
    { meses: 21, menos2: 9.2, menos1: 10.3, mediana: 11.5, mas1: 12.9, mas2: 14.5 },
    { meses: 22, menos2: 9.4, menos1: 10.5, mediana: 11.8, mas1: 13.2, mas2: 14.7 },
    { meses: 23, menos2: 9.5, menos1: 10.7, mediana: 12.0, mas1: 13.4, mas2: 15.0 },
    { meses: 24, menos2: 9.7, menos1: 10.8, mediana: 12.2, mas1: 13.6, mas2: 15.3 }

];

// =========================
// P/E NIÑAS 0 A 2 AÑOS
// Fuente: MINSAL / OMS 2006
// =========================

const tablaPE_Ninas = [

    { meses: 0,  menos2: 2.4, menos1: 2.8, mediana: 3.2, mas1: 3.7, mas2: 4.2 },
    { meses: 1,  menos2: 3.2, menos1: 3.6, mediana: 4.2, mas1: 4.8, mas2: 5.5 },
    { meses: 2,  menos2: 3.9, menos1: 4.5, mediana: 5.1, mas1: 5.8, mas2: 6.6 },
    { meses: 3,  menos2: 4.5, menos1: 5.2, mediana: 5.8, mas1: 6.6, mas2: 7.5 },
    { meses: 4,  menos2: 5.0, menos1: 5.7, mediana: 6.4, mas1: 7.3, mas2: 8.2 },
    { meses: 5,  menos2: 5.4, menos1: 6.1, mediana: 6.9, mas1: 7.8, mas2: 8.8 },
    { meses: 6,  menos2: 5.7, menos1: 6.5, mediana: 7.3, mas1: 8.2, mas2: 9.3 },
    { meses: 7,  menos2: 6.0, menos1: 6.8, mediana: 7.6, mas1: 8.6, mas2: 9.8 },
    { meses: 8,  menos2: 6.3, menos1: 7.0, mediana: 7.9, mas1: 9.0, mas2: 10.2 },
    { meses: 9,  menos2: 6.5, menos1: 7.3, mediana: 8.2, mas1: 9.3, mas2: 10.5 },
    { meses: 10, menos2: 6.7, menos1: 7.5, mediana: 8.5, mas1: 9.6, mas2: 10.9 },
    { meses: 11, menos2: 6.9, menos1: 7.7, mediana: 8.7, mas1: 9.9, mas2: 11.2 },
    { meses: 12, menos2: 7.0, menos1: 7.9, mediana: 8.9, mas1: 10.1, mas2: 11.5 },
    { meses: 13, menos2: 7.2, menos1: 8.1, mediana: 9.2, mas1: 10.4, mas2: 11.8 },
    { meses: 14, menos2: 7.4, menos1: 8.3, mediana: 9.4, mas1: 10.6, mas2: 12.1 },
    { meses: 15, menos2: 7.6, menos1: 8.5, mediana: 9.6, mas1: 10.9, mas2: 12.4 },
    { meses: 16, menos2: 7.7, menos1: 8.7, mediana: 9.8, mas1: 11.1, mas2: 12.6 },
    { meses: 17, menos2: 7.9, menos1: 8.9, mediana: 10.0, mas1: 11.4, mas2: 12.9 },
    { meses: 18, menos2: 8.1, menos1: 9.1, mediana: 10.2, mas1: 11.6, mas2: 13.2 },
    { meses: 19, menos2: 8.2, menos1: 9.2, mediana: 10.4, mas1: 11.8, mas2: 13.5 },
    { meses: 20, menos2: 8.4, menos1: 9.4, mediana: 10.6, mas1: 12.1, mas2: 13.7 },
    { meses: 21, menos2: 8.6, menos1: 9.6, mediana: 10.9, mas1: 12.3, mas2: 14.0 },
    { meses: 22, menos2: 8.7, menos1: 9.8, mediana: 11.1, mas1: 12.5, mas2: 14.3 },
    { meses: 23, menos2: 8.9, menos1: 10.0, mediana: 11.3, mas1: 12.8, mas2: 14.6 },
    { meses: 24, menos2: 9.0, menos1: 10.2, mediana: 11.5, mas1: 13.0, mas2: 14.8 }

];

// =========================
// T/E NIÑOS 0 A 2 AÑOS
// Talla/longitud para la edad
// Valores en centímetros
// =========================

const tablaTE_Ninos = [

    { meses: 0,  menos2: 46.1, menos1: 48.0, mediana: 49.9, mas1: 51.8, mas2: 53.7 },
    { meses: 1,  menos2: 50.8, menos1: 52.8, mediana: 54.7, mas1: 56.7, mas2: 58.6 },
    { meses: 2,  menos2: 54.4, menos1: 56.4, mediana: 58.4, mas1: 60.4, mas2: 62.4 },
    { meses: 3,  menos2: 57.3, menos1: 59.4, mediana: 61.4, mas1: 63.5, mas2: 65.5 },
    { meses: 4,  menos2: 59.7, menos1: 61.8, mediana: 63.9, mas1: 66.0, mas2: 68.0 },
    { meses: 5,  menos2: 61.7, menos1: 63.8, mediana: 65.9, mas1: 68.0, mas2: 70.1 },
    { meses: 6,  menos2: 63.3, menos1: 65.5, mediana: 67.6, mas1: 69.8, mas2: 71.9 },
    { meses: 7,  menos2: 64.8, menos1: 67.0, mediana: 69.2, mas1: 71.3, mas2: 73.5 },
    { meses: 8,  menos2: 66.2, menos1: 68.4, mediana: 70.6, mas1: 72.8, mas2: 75.0 },
    { meses: 9,  menos2: 67.5, menos1: 69.7, mediana: 72.0, mas1: 74.2, mas2: 76.5 },
    { meses: 10, menos2: 68.7, menos1: 71.0, mediana: 73.3, mas1: 75.6, mas2: 77.9 },
    { meses: 11, menos2: 69.9, menos1: 72.2, mediana: 74.5, mas1: 76.9, mas2: 79.2 },

    { meses: 12, menos2: 71.0, menos1: 73.4, mediana: 75.7, mas1: 78.1, mas2: 80.5 },
    { meses: 13, menos2: 72.1, menos1: 74.5, mediana: 76.9, mas1: 79.3, mas2: 81.8 },
    { meses: 14, menos2: 73.1, menos1: 75.6, mediana: 78.0, mas1: 80.5, mas2: 83.0 },
    { meses: 15, menos2: 74.1, menos1: 76.6, mediana: 79.1, mas1: 81.7, mas2: 84.2 },
    { meses: 16, menos2: 75.0, menos1: 77.6, mediana: 80.2, mas1: 82.8, mas2: 85.4 },
    { meses: 17, menos2: 76.0, menos1: 78.6, mediana: 81.2, mas1: 83.9, mas2: 86.5 },
    { meses: 18, menos2: 76.9, menos1: 79.6, mediana: 82.3, mas1: 85.0, mas2: 87.7 },
    { meses: 19, menos2: 77.7, menos1: 80.5, mediana: 83.2, mas1: 86.0, mas2: 88.8 },
    { meses: 20, menos2: 78.6, menos1: 81.4, mediana: 84.2, mas1: 87.0, mas2: 89.8 },
    { meses: 21, menos2: 79.4, menos1: 82.3, mediana: 85.1, mas1: 88.0, mas2: 90.9 },
    { meses: 22, menos2: 80.2, menos1: 83.1, mediana: 86.0, mas1: 89.0, mas2: 91.9 },
    { meses: 23, menos2: 81.0, menos1: 83.9, mediana: 86.9, mas1: 89.9, mas2: 92.9 },
    { meses: 24, menos2: 81.7, menos1: 84.8, mediana: 87.8, mas1: 90.9, mas2: 93.9 }

];

// =========================
// T/E NIÑAS 0 A 2 AÑOS
// Talla/longitud para la edad
// Valores en centímetros
// =========================

const tablaTE_Ninas = [

    { meses: 0,  menos2: 45.4, menos1: 47.3, mediana: 49.1, mas1: 51.0, mas2: 52.9 },
    { meses: 1,  menos2: 49.8, menos1: 51.7, mediana: 53.7, mas1: 55.6, mas2: 57.6 },
    { meses: 2,  menos2: 53.0, menos1: 55.0, mediana: 57.1, mas1: 59.1, mas2: 61.1 },
    { meses: 3,  menos2: 55.6, menos1: 57.7, mediana: 59.8, mas1: 61.9, mas2: 64.0 },
    { meses: 4,  menos2: 57.8, menos1: 59.9, mediana: 62.1, mas1: 64.3, mas2: 66.4 },
    { meses: 5,  menos2: 59.6, menos1: 61.8, mediana: 64.0, mas1: 66.2, mas2: 68.5 },
    { meses: 6,  menos2: 61.2, menos1: 63.5, mediana: 65.7, mas1: 68.0, mas2: 70.3 },
    { meses: 7,  menos2: 62.7, menos1: 65.0, mediana: 67.3, mas1: 69.6, mas2: 71.9 },
    { meses: 8,  menos2: 64.0, menos1: 66.4, mediana: 68.7, mas1: 71.1, mas2: 73.5 },
    { meses: 9,  menos2: 65.3, menos1: 67.7, mediana: 70.1, mas1: 72.6, mas2: 75.0 },
    { meses: 10, menos2: 66.5, menos1: 69.0, mediana: 71.5, mas1: 73.9, mas2: 76.4 },
    { meses: 11, menos2: 67.7, menos1: 70.3, mediana: 72.8, mas1: 75.3, mas2: 77.8 },

    { meses: 12, menos2: 68.9, menos1: 71.4, mediana: 74.0, mas1: 76.6, mas2: 79.2 },
    { meses: 13, menos2: 70.0, menos1: 72.6, mediana: 75.2, mas1: 77.8, mas2: 80.5 },
    { meses: 14, menos2: 71.0, menos1: 73.7, mediana: 76.4, mas1: 79.1, mas2: 81.7 },
    { meses: 15, menos2: 72.0, menos1: 74.8, mediana: 77.5, mas1: 80.2, mas2: 83.0 },
    { meses: 16, menos2: 73.0, menos1: 75.8, mediana: 78.6, mas1: 81.4, mas2: 84.2 },
    { meses: 17, menos2: 74.0, menos1: 76.8, mediana: 79.7, mas1: 82.5, mas2: 85.4 },
    { meses: 18, menos2: 74.9, menos1: 77.8, mediana: 80.7, mas1: 83.6, mas2: 86.5 },
    { meses: 19, menos2: 75.8, menos1: 78.8, mediana: 81.7, mas1: 84.7, mas2: 87.6 },
    { meses: 20, menos2: 76.7, menos1: 79.7, mediana: 82.7, mas1: 85.7, mas2: 88.7 },
    { meses: 21, menos2: 77.5, menos1: 80.6, mediana: 83.7, mas1: 86.7, mas2: 89.8 },
    { meses: 22, menos2: 78.4, menos1: 81.5, mediana: 84.6, mas1: 87.7, mas2: 90.8 },
    { meses: 23, menos2: 79.2, menos1: 82.3, mediana: 85.5, mas1: 88.7, mas2: 91.9 },
    { meses: 24, menos2: 80.0, menos1: 83.2, mediana: 86.4, mas1: 89.6, mas2: 92.9 }

];

// =========================
// P/T NIÑOS 0 A 2 AÑOS
// Peso para longitud
// Longitud en cm / peso en kg
// =========================

const tablaPT_Ninos = [

    { longitud: 45.0, menos2: 2.0, menos1: 2.2, mediana: 2.4, mas1: 2.7, mas2: 3.0 },
    { longitud: 45.5, menos2: 2.1, menos1: 2.3, mediana: 2.5, mas1: 2.8, mas2: 3.1 },
    { longitud: 46.0, menos2: 2.2, menos1: 2.4, mediana: 2.6, mas1: 2.9, mas2: 3.1 },
    { longitud: 46.5, menos2: 2.3, menos1: 2.5, mediana: 2.7, mas1: 3.0, mas2: 3.2 },
    { longitud: 47.0, menos2: 2.3, menos1: 2.5, mediana: 2.8, mas1: 3.0, mas2: 3.3 },
    { longitud: 47.5, menos2: 2.4, menos1: 2.6, mediana: 2.9, mas1: 3.1, mas2: 3.4 },
    { longitud: 48.0, menos2: 2.5, menos1: 2.7, mediana: 2.9, mas1: 3.2, mas2: 3.6 },
    { longitud: 48.5, menos2: 2.6, menos1: 2.8, mediana: 3.0, mas1: 3.3, mas2: 3.7 },
    { longitud: 49.0, menos2: 2.6, menos1: 2.9, mediana: 3.1, mas1: 3.4, mas2: 3.8 },
    { longitud: 49.5, menos2: 2.7, menos1: 3.0, mediana: 3.2, mas1: 3.5, mas2: 3.9 },

    { longitud: 50.0, menos2: 2.8, menos1: 3.0, mediana: 3.3, mas1: 3.6, mas2: 4.0 },
    { longitud: 50.5, menos2: 2.9, menos1: 3.1, mediana: 3.4, mas1: 3.8, mas2: 4.1 },
    { longitud: 51.0, menos2: 3.0, menos1: 3.2, mediana: 3.5, mas1: 3.9, mas2: 4.2 },
    { longitud: 51.5, menos2: 3.1, menos1: 3.3, mediana: 3.6, mas1: 4.0, mas2: 4.4 },
    { longitud: 52.0, menos2: 3.2, menos1: 3.5, mediana: 3.8, mas1: 4.1, mas2: 4.5 },
    { longitud: 52.5, menos2: 3.3, menos1: 3.6, mediana: 3.9, mas1: 4.2, mas2: 4.6 },
    { longitud: 53.0, menos2: 3.4, menos1: 3.7, mediana: 4.0, mas1: 4.4, mas2: 4.8 },
    { longitud: 53.5, menos2: 3.5, menos1: 3.8, mediana: 4.1, mas1: 4.5, mas2: 4.9 },
    { longitud: 54.0, menos2: 3.6, menos1: 3.9, mediana: 4.3, mas1: 4.7, mas2: 5.1 },
    { longitud: 54.5, menos2: 3.7, menos1: 4.0, mediana: 4.4, mas1: 4.8, mas2: 5.3 },

    { longitud: 55.0, menos2: 3.8, menos1: 4.2, mediana: 4.5, mas1: 5.0, mas2: 5.4 },
    { longitud: 55.5, menos2: 4.0, menos1: 4.3, mediana: 4.7, mas1: 5.1, mas2: 5.6 },
    { longitud: 56.0, menos2: 4.1, menos1: 4.4, mediana: 4.8, mas1: 5.3, mas2: 5.8 },
    { longitud: 56.5, menos2: 4.2, menos1: 4.6, mediana: 5.0, mas1: 5.4, mas2: 5.9 },
    { longitud: 57.0, menos2: 4.3, menos1: 4.7, mediana: 5.1, mas1: 5.6, mas2: 6.1 },
    { longitud: 57.5, menos2: 4.5, menos1: 4.9, mediana: 5.3, mas1: 5.7, mas2: 6.3 },
    { longitud: 58.0, menos2: 4.6, menos1: 5.0, mediana: 5.4, mas1: 5.9, mas2: 6.4 },
    { longitud: 58.5, menos2: 4.7, menos1: 5.1, mediana: 5.6, mas1: 6.1, mas2: 6.6 },
    { longitud: 59.0, menos2: 4.8, menos1: 5.3, mediana: 5.7, mas1: 6.2, mas2: 6.8 },
    { longitud: 59.5, menos2: 5.0, menos1: 5.4, mediana: 5.9, mas1: 6.4, mas2: 7.0 },

    { longitud: 60.0, menos2: 5.1, menos1: 5.5, mediana: 6.0, mas1: 6.5, mas2: 7.1 },
    { longitud: 60.5, menos2: 5.2, menos1: 5.6, mediana: 6.1, mas1: 6.7, mas2: 7.3 },
    { longitud: 61.0, menos2: 5.3, menos1: 5.8, mediana: 6.3, mas1: 6.8, mas2: 7.4 },
    { longitud: 61.5, menos2: 5.4, menos1: 5.9, mediana: 6.4, mas1: 7.0, mas2: 7.6 },
    { longitud: 62.0, menos2: 5.6, menos1: 6.0, mediana: 6.5, mas1: 7.1, mas2: 7.7 },
    { longitud: 62.5, menos2: 5.7, menos1: 6.1, mediana: 6.7, mas1: 7.2, mas2: 7.9 },
    { longitud: 63.0, menos2: 5.8, menos1: 6.2, mediana: 6.8, mas1: 7.4, mas2: 8.0 },
    { longitud: 63.5, menos2: 5.9, menos1: 6.4, mediana: 6.9, mas1: 7.5, mas2: 8.2 },
    { longitud: 64.0, menos2: 6.0, menos1: 6.5, mediana: 7.0, mas1: 7.6, mas2: 8.3 },
    { longitud: 64.5, menos2: 6.1, menos1: 6.6, mediana: 7.1, mas1: 7.8, mas2: 8.5 },

    { longitud: 65.0, menos2: 6.2, menos1: 6.7, mediana: 7.3, mas1: 7.9, mas2: 8.6 },
    { longitud: 65.5, menos2: 6.3, menos1: 6.8, mediana: 7.4, mas1: 8.0, mas2: 8.7 },
    { longitud: 66.0, menos2: 6.4, menos1: 6.9, mediana: 7.5, mas1: 8.2, mas2: 8.9 },
    { longitud: 66.5, menos2: 6.5, menos1: 7.0, mediana: 7.6, mas1: 8.3, mas2: 9.0 },
    { longitud: 67.0, menos2: 6.6, menos1: 7.1, mediana: 7.7, mas1: 8.4, mas2: 9.2 },
    { longitud: 67.5, menos2: 6.7, menos1: 7.2, mediana: 7.9, mas1: 8.5, mas2: 9.3 },
    { longitud: 68.0, menos2: 6.8, menos1: 7.3, mediana: 8.0, mas1: 8.7, mas2: 9.4 },
    { longitud: 68.5, menos2: 6.9, menos1: 7.5, mediana: 8.1, mas1: 8.8, mas2: 9.6 },
    { longitud: 69.0, menos2: 7.0, menos1: 7.6, mediana: 8.2, mas1: 8.9, mas2: 9.7 },
    { longitud: 69.5, menos2: 7.1, menos1: 7.7, mediana: 8.3, mas1: 9.0, mas2: 9.8 },

    { longitud: 70.0, menos2: 7.2, menos1: 7.8, mediana: 8.4, mas1: 9.2, mas2: 10.0 },
    { longitud: 70.5, menos2: 7.3, menos1: 7.9, mediana: 8.5, mas1: 9.3, mas2: 10.1 },
    { longitud: 71.0, menos2: 7.4, menos1: 8.0, mediana: 8.6, mas1: 9.4, mas2: 10.2 },
    { longitud: 71.5, menos2: 7.5, menos1: 8.1, mediana: 8.8, mas1: 9.5, mas2: 10.4 },
    { longitud: 72.0, menos2: 7.6, menos1: 8.2, mediana: 8.9, mas1: 9.6, mas2: 10.5 },
    { longitud: 72.5, menos2: 7.6, menos1: 8.3, mediana: 9.0, mas1: 9.8, mas2: 10.6 },
    { longitud: 73.0, menos2: 7.7, menos1: 8.4, mediana: 9.1, mas1: 9.9, mas2: 10.8 },
    { longitud: 73.5, menos2: 7.8, menos1: 8.5, mediana: 9.2, mas1: 10.0, mas2: 10.9 },
    { longitud: 74.0, menos2: 7.9, menos1: 8.6, mediana: 9.3, mas1: 10.1, mas2: 11.0 },
    { longitud: 74.5, menos2: 8.0, menos1: 8.7, mediana: 9.4, mas1: 10.2, mas2: 11.2 },

    { longitud: 75.0, menos2: 8.1, menos1: 8.8, mediana: 9.5, mas1: 10.3, mas2: 11.3 },
    { longitud: 75.5, menos2: 8.2, menos1: 8.8, mediana: 9.6, mas1: 10.4, mas2: 11.4 },
    { longitud: 76.0, menos2: 8.3, menos1: 8.9, mediana: 9.7, mas1: 10.6, mas2: 11.5 },
    { longitud: 76.5, menos2: 8.3, menos1: 9.0, mediana: 9.8, mas1: 10.7, mas2: 11.6 },
    { longitud: 77.0, menos2: 8.4, menos1: 9.1, mediana: 9.9, mas1: 10.8, mas2: 11.7 },
    { longitud: 77.5, menos2: 8.5, menos1: 9.2, mediana: 10.0, mas1: 10.9, mas2: 11.9 },
    { longitud: 78.0, menos2: 8.6, menos1: 9.3, mediana: 10.1, mas1: 11.0, mas2: 12.0 },
    { longitud: 78.5, menos2: 8.7, menos1: 9.4, mediana: 10.2, mas1: 11.1, mas2: 12.1 },
    { longitud: 79.0, menos2: 8.7, menos1: 9.5, mediana: 10.3, mas1: 11.2, mas2: 12.2 },
    { longitud: 79.5, menos2: 8.8, menos1: 9.5, mediana: 10.4, mas1: 11.3, mas2: 12.3 },

    { longitud: 80.0, menos2: 8.9, menos1: 9.6, mediana: 10.4, mas1: 11.4, mas2: 12.4 },
    { longitud: 80.5, menos2: 9.0, menos1: 9.7, mediana: 10.5, mas1: 11.5, mas2: 12.5 },
    { longitud: 81.0, menos2: 9.1, menos1: 9.8, mediana: 10.6, mas1: 11.6, mas2: 12.6 },
    { longitud: 81.5, menos2: 9.1, menos1: 9.9, mediana: 10.7, mas1: 11.7, mas2: 12.7 },
    { longitud: 82.0, menos2: 9.2, menos1: 10.0, mediana: 10.8, mas1: 11.8, mas2: 12.8 },
    { longitud: 82.5, menos2: 9.3, menos1: 10.1, mediana: 10.9, mas1: 11.9, mas2: 13.0 },
    { longitud: 83.0, menos2: 9.4, menos1: 10.2, mediana: 11.0, mas1: 12.0, mas2: 13.1 },
    { longitud: 83.5, menos2: 9.5, menos1: 10.3, mediana: 11.2, mas1: 12.1, mas2: 13.2 },
    { longitud: 84.0, menos2: 9.6, menos1: 10.4, mediana: 11.3, mas1: 12.2, mas2: 13.3 },
    { longitud: 84.5, menos2: 9.7, menos1: 10.5, mediana: 11.4, mas1: 12.4, mas2: 13.5 },

    { longitud: 85.0, menos2: 9.8, menos1: 10.6, mediana: 11.5, mas1: 12.5, mas2: 13.6 },
    { longitud: 85.5, menos2: 9.9, menos1: 10.7, mediana: 11.6, mas1: 12.6, mas2: 13.7 },
    { longitud: 86.0, menos2: 10.0, menos1: 10.8, mediana: 11.7, mas1: 12.8, mas2: 13.9 },
    { longitud: 86.5, menos2: 10.1, menos1: 11.0, mediana: 11.9, mas1: 12.9, mas2: 14.0 },
    { longitud: 87.0, menos2: 10.2, menos1: 11.1, mediana: 12.0, mas1: 13.0, mas2: 14.2 },
    { longitud: 87.5, menos2: 10.4, menos1: 11.2, mediana: 12.1, mas1: 13.2, mas2: 14.3 },
    { longitud: 88.0, menos2: 10.5, menos1: 11.3, mediana: 12.2, mas1: 13.3, mas2: 14.5 },
    { longitud: 88.5, menos2: 10.6, menos1: 11.4, mediana: 12.4, mas1: 13.4, mas2: 14.6 },
    { longitud: 89.0, menos2: 10.7, menos1: 11.5, mediana: 12.5, mas1: 13.5, mas2: 14.7 },
    { longitud: 89.5, menos2: 10.8, menos1: 11.6, mediana: 12.6, mas1: 13.7, mas2: 14.9 },

    { longitud: 90.0, menos2: 10.9, menos1: 11.8, mediana: 12.7, mas1: 13.8, mas2: 15.0 },
    { longitud: 90.5, menos2: 11.0, menos1: 11.9, mediana: 12.8, mas1: 13.9, mas2: 15.1 },
    { longitud: 91.0, menos2: 11.1, menos1: 12.0, mediana: 13.0, mas1: 14.1, mas2: 15.3 },
    { longitud: 91.5, menos2: 11.2, menos1: 12.1, mediana: 13.1, mas1: 14.2, mas2: 15.4 },
    { longitud: 92.0, menos2: 11.3, menos1: 12.2, mediana: 13.2, mas1: 14.3, mas2: 15.6 },
    { longitud: 92.5, menos2: 11.4, menos1: 12.3, mediana: 13.3, mas1: 14.4, mas2: 15.7 },
    { longitud: 93.0, menos2: 11.5, menos1: 12.4, mediana: 13.4, mas1: 14.6, mas2: 15.8 },
    { longitud: 93.5, menos2: 11.6, menos1: 12.5, mediana: 13.5, mas1: 14.7, mas2: 16.0 },
    { longitud: 94.0, menos2: 11.7, menos1: 12.6, mediana: 13.7, mas1: 14.8, mas2: 16.1 },
    { longitud: 94.5, menos2: 11.8, menos1: 12.7, mediana: 13.8, mas1: 14.9, mas2: 16.3 },

    { longitud: 95.0, menos2: 11.9, menos1: 12.8, mediana: 13.9, mas1: 15.1, mas2: 16.4 },
    { longitud: 95.5, menos2: 12.0, menos1: 12.9, mediana: 14.0, mas1: 15.2, mas2: 16.5 },
    { longitud: 96.0, menos2: 12.1, menos1: 13.1, mediana: 14.1, mas1: 15.3, mas2: 16.7 },
    { longitud: 96.5, menos2: 12.2, menos1: 13.2, mediana: 14.3, mas1: 15.5, mas2: 16.8 },
    { longitud: 97.0, menos2: 12.3, menos1: 13.3, mediana: 14.4, mas1: 15.6, mas2: 17.0 },
    { longitud: 97.5, menos2: 12.4, menos1: 13.4, mediana: 14.5, mas1: 15.7, mas2: 17.1 },
    { longitud: 98.0, menos2: 12.5, menos1: 13.5, mediana: 14.6, mas1: 15.9, mas2: 17.3 },
    { longitud: 98.5, menos2: 12.6, menos1: 13.6, mediana: 14.8, mas1: 16.0, mas2: 17.5 },
    { longitud: 99.0, menos2: 12.7, menos1: 13.7, mediana: 14.9, mas1: 16.2, mas2: 17.6 },
    { longitud: 99.5, menos2: 12.8, menos1: 13.9, mediana: 15.0, mas1: 16.3, mas2: 17.8 },

    { longitud: 100.0, menos2: 12.9, menos1: 14.0, mediana: 15.2, mas1: 16.5, mas2: 18.0 },
    { longitud: 100.5, menos2: 13.0, menos1: 14.1, mediana: 15.3, mas1: 16.6, mas2: 18.1 },
    { longitud: 101.0, menos2: 13.2, menos1: 14.2, mediana: 15.4, mas1: 16.8, mas2: 18.3 },
    { longitud: 101.5, menos2: 13.3, menos1: 14.4, mediana: 15.6, mas1: 16.9, mas2: 18.5 },
    { longitud: 102.0, menos2: 13.4, menos1: 14.5, mediana: 15.7, mas1: 17.1, mas2: 18.7 },
    { longitud: 102.5, menos2: 13.5, menos1: 14.6, mediana: 15.9, mas1: 17.3, mas2: 18.8 },
    { longitud: 103.0, menos2: 13.6, menos1: 14.8, mediana: 16.0, mas1: 17.4, mas2: 19.0 },
    { longitud: 103.5, menos2: 13.7, menos1: 14.9, mediana: 16.2, mas1: 17.6, mas2: 19.2 },
    { longitud: 104.0, menos2: 13.9, menos1: 15.0, mediana: 16.3, mas1: 17.8, mas2: 19.4 },
    { longitud: 104.5, menos2: 14.0, menos1: 15.2, mediana: 16.5, mas1: 17.9, mas2: 19.6 },

    { longitud: 105.0, menos2: 14.1, menos1: 15.3, mediana: 16.6, mas1: 18.1, mas2: 19.8 },
    { longitud: 105.5, menos2: 14.2, menos1: 15.4, mediana: 16.8, mas1: 18.3, mas2: 20.0 },
    { longitud: 106.0, menos2: 14.4, menos1: 15.6, mediana: 16.9, mas1: 18.5, mas2: 20.2 },
    { longitud: 106.5, menos2: 14.5, menos1: 15.7, mediana: 17.1, mas1: 18.6, mas2: 20.4 },
    { longitud: 107.0, menos2: 14.6, menos1: 15.9, mediana: 17.3, mas1: 18.8, mas2: 20.6 },
    { longitud: 107.5, menos2: 14.7, menos1: 16.0, mediana: 17.4, mas1: 19.0, mas2: 20.8 },
    { longitud: 108.0, menos2: 14.9, menos1: 16.2, mediana: 17.6, mas1: 19.2, mas2: 21.0 },
    { longitud: 108.5, menos2: 15.0, menos1: 16.3, mediana: 17.8, mas1: 19.4, mas2: 21.2 },
    { longitud: 109.0, menos2: 15.1, menos1: 16.5, mediana: 17.9, mas1: 19.6, mas2: 21.4 },
    { longitud: 109.5, menos2: 15.3, menos1: 16.6, mediana: 18.1, mas1: 19.8, mas2: 21.7 },
    { longitud: 110.0, menos2: 15.4, menos1: 16.8, mediana: 18.3, mas1: 20.0, mas2: 21.9 }

];

// =========================
// P/T NIÑAS 0 A 2 AÑOS
// Peso para longitud
// Longitud en cm / peso en kg
// =========================

const tablaPT_Ninas = [

    { longitud: 45.0, menos2: 2.1, menos1: 2.3, mediana: 2.5, mas1: 2.7, mas2: 3.0 },
    { longitud: 45.5, menos2: 2.1, menos1: 2.3, mediana: 2.5, mas1: 2.8, mas2: 3.1 },
    { longitud: 46.0, menos2: 2.2, menos1: 2.4, mediana: 2.6, mas1: 2.9, mas2: 3.2 },
    { longitud: 46.5, menos2: 2.3, menos1: 2.5, mediana: 2.7, mas1: 3.0, mas2: 3.3 },
    { longitud: 47.0, menos2: 2.4, menos1: 2.6, mediana: 2.8, mas1: 3.1, mas2: 3.4 },
    { longitud: 47.5, menos2: 2.4, menos1: 2.6, mediana: 2.9, mas1: 3.2, mas2: 3.5 },
    { longitud: 48.0, menos2: 2.5, menos1: 2.7, mediana: 3.0, mas1: 3.3, mas2: 3.6 },
    { longitud: 48.5, menos2: 2.6, menos1: 2.8, mediana: 3.1, mas1: 3.4, mas2: 3.7 },
    { longitud: 49.0, menos2: 2.6, menos1: 2.9, mediana: 3.2, mas1: 3.5, mas2: 3.8 },
    { longitud: 49.5, menos2: 2.7, menos1: 3.0, mediana: 3.3, mas1: 3.6, mas2: 3.9 },

    { longitud: 50.0, menos2: 2.8, menos1: 3.1, mediana: 3.4, mas1: 3.7, mas2: 4.0 },
    { longitud: 50.5, menos2: 2.9, menos1: 3.2, mediana: 3.5, mas1: 3.8, mas2: 4.2 },
    { longitud: 51.0, menos2: 3.0, menos1: 3.3, mediana: 3.6, mas1: 3.9, mas2: 4.3 },
    { longitud: 51.5, menos2: 3.1, menos1: 3.4, mediana: 3.7, mas1: 4.0, mas2: 4.4 },
    { longitud: 52.0, menos2: 3.2, menos1: 3.5, mediana: 3.8, mas1: 4.2, mas2: 4.6 },
    { longitud: 52.5, menos2: 3.3, menos1: 3.6, mediana: 3.9, mas1: 4.3, mas2: 4.7 },
    { longitud: 53.0, menos2: 3.4, menos1: 3.7, mediana: 4.0, mas1: 4.4, mas2: 4.9 },
    { longitud: 53.5, menos2: 3.5, menos1: 3.8, mediana: 4.2, mas1: 4.6, mas2: 5.0 },
    { longitud: 54.0, menos2: 3.6, menos1: 3.9, mediana: 4.3, mas1: 4.7, mas2: 5.2 },
    { longitud: 54.5, menos2: 3.7, menos1: 4.0, mediana: 4.4, mas1: 4.8, mas2: 5.3 },

    { longitud: 55.0, menos2: 3.8, menos1: 4.2, mediana: 4.5, mas1: 5.0, mas2: 5.5 },
    { longitud: 55.5, menos2: 3.9, menos1: 4.3, mediana: 4.7, mas1: 5.1, mas2: 5.7 },
    { longitud: 56.0, menos2: 4.0, menos1: 4.4, mediana: 4.8, mas1: 5.3, mas2: 5.8 },
    { longitud: 56.5, menos2: 4.1, menos1: 4.5, mediana: 5.0, mas1: 5.4, mas2: 6.0 },
    { longitud: 57.0, menos2: 4.3, menos1: 4.6, mediana: 5.1, mas1: 5.6, mas2: 6.1 },
    { longitud: 57.5, menos2: 4.4, menos1: 4.8, mediana: 5.2, mas1: 5.7, mas2: 6.3 },
    { longitud: 58.0, menos2: 4.5, menos1: 4.9, mediana: 5.4, mas1: 5.9, mas2: 6.5 },
    { longitud: 58.5, menos2: 4.6, menos1: 5.0, mediana: 5.5, mas1: 6.0, mas2: 6.6 },
    { longitud: 59.0, menos2: 4.7, menos1: 5.1, mediana: 5.6, mas1: 6.2, mas2: 6.8 },
    { longitud: 59.5, menos2: 4.8, menos1: 5.3, mediana: 5.7, mas1: 6.3, mas2: 6.9 },

    { longitud: 60.0, menos2: 4.9, menos1: 5.4, mediana: 5.9, mas1: 6.4, mas2: 7.1 },
    { longitud: 60.5, menos2: 5.0, menos1: 5.5, mediana: 6.0, mas1: 6.6, mas2: 7.3 },
    { longitud: 61.0, menos2: 5.1, menos1: 5.6, mediana: 6.1, mas1: 6.7, mas2: 7.4 },
    { longitud: 61.5, menos2: 5.2, menos1: 5.7, mediana: 6.3, mas1: 6.9, mas2: 7.6 },
    { longitud: 62.0, menos2: 5.3, menos1: 5.8, mediana: 6.4, mas1: 7.0, mas2: 7.7 },
    { longitud: 62.5, menos2: 5.4, menos1: 5.9, mediana: 6.5, mas1: 7.1, mas2: 7.8 },
    { longitud: 63.0, menos2: 5.5, menos1: 6.0, mediana: 6.6, mas1: 7.3, mas2: 8.0 },
    { longitud: 63.5, menos2: 5.6, menos1: 6.2, mediana: 6.7, mas1: 7.4, mas2: 8.1 },
    { longitud: 64.0, menos2: 5.7, menos1: 6.3, mediana: 6.9, mas1: 7.5, mas2: 8.3 },
    { longitud: 64.5, menos2: 5.8, menos1: 6.4, mediana: 7.0, mas1: 7.6, mas2: 8.4 },

    { longitud: 65.0, menos2: 5.9, menos1: 6.5, mediana: 7.1, mas1: 7.8, mas2: 8.6 },
    { longitud: 65.5, menos2: 6.0, menos1: 6.6, mediana: 7.2, mas1: 7.9, mas2: 8.7 },
    { longitud: 66.0, menos2: 6.1, menos1: 6.7, mediana: 7.3, mas1: 8.0, mas2: 8.8 },
    { longitud: 66.5, menos2: 6.2, menos1: 6.8, mediana: 7.4, mas1: 8.1, mas2: 9.0 },
    { longitud: 67.0, menos2: 6.3, menos1: 6.9, mediana: 7.5, mas1: 8.3, mas2: 9.1 },
    { longitud: 67.5, menos2: 6.4, menos1: 7.0, mediana: 7.6, mas1: 8.4, mas2: 9.2 },
    { longitud: 68.0, menos2: 6.5, menos1: 7.1, mediana: 7.7, mas1: 8.5, mas2: 9.4 },
    { longitud: 68.5, menos2: 6.6, menos1: 7.2, mediana: 7.9, mas1: 8.6, mas2: 9.5 },
    { longitud: 69.0, menos2: 6.7, menos1: 7.3, mediana: 8.0, mas1: 8.7, mas2: 9.6 },
    { longitud: 69.5, menos2: 6.8, menos1: 7.4, mediana: 8.1, mas1: 8.8, mas2: 9.7 },

    { longitud: 70.0, menos2: 6.9, menos1: 7.5, mediana: 8.2, mas1: 9.0, mas2: 9.9 },
    { longitud: 70.5, menos2: 6.9, menos1: 7.6, mediana: 8.3, mas1: 9.1, mas2: 10.0 },
    { longitud: 71.0, menos2: 7.0, menos1: 7.7, mediana: 8.4, mas1: 9.2, mas2: 10.1 },
    { longitud: 71.5, menos2: 7.1, menos1: 7.7, mediana: 8.5, mas1: 9.3, mas2: 10.2 },
    { longitud: 72.0, menos2: 7.2, menos1: 7.8, mediana: 8.6, mas1: 9.4, mas2: 10.3 },
    { longitud: 72.5, menos2: 7.3, menos1: 7.9, mediana: 8.7, mas1: 9.5, mas2: 10.5 },
    { longitud: 73.0, menos2: 7.4, menos1: 8.0, mediana: 8.8, mas1: 9.6, mas2: 10.6 },
    { longitud: 73.5, menos2: 7.4, menos1: 8.1, mediana: 8.9, mas1: 9.7, mas2: 10.7 },
    { longitud: 74.0, menos2: 7.5, menos1: 8.2, mediana: 9.0, mas1: 9.8, mas2: 10.8 },
    { longitud: 74.5, menos2: 7.6, menos1: 8.3, mediana: 9.1, mas1: 9.9, mas2: 10.9 },

    { longitud: 75.0, menos2: 7.7, menos1: 8.4, mediana: 9.1, mas1: 10.0, mas2: 11.0 },
    { longitud: 75.5, menos2: 7.8, menos1: 8.5, mediana: 9.2, mas1: 10.1, mas2: 11.1 },
    { longitud: 76.0, menos2: 7.8, menos1: 8.5, mediana: 9.3, mas1: 10.2, mas2: 11.2 },
    { longitud: 76.5, menos2: 7.9, menos1: 8.6, mediana: 9.4, mas1: 10.3, mas2: 11.4 },
    { longitud: 77.0, menos2: 8.0, menos1: 8.7, mediana: 9.5, mas1: 10.4, mas2: 11.5 },
    { longitud: 77.5, menos2: 8.1, menos1: 8.8, mediana: 9.6, mas1: 10.5, mas2: 11.6 },
    { longitud: 78.0, menos2: 8.2, menos1: 8.9, mediana: 9.7, mas1: 10.6, mas2: 11.7 },
    { longitud: 78.5, menos2: 8.2, menos1: 9.0, mediana: 9.8, mas1: 10.7, mas2: 11.8 },
    { longitud: 79.0, menos2: 8.3, menos1: 9.1, mediana: 9.9, mas1: 10.8, mas2: 11.9 },
    { longitud: 79.5, menos2: 8.4, menos1: 9.1, mediana: 10.0, mas1: 10.9, mas2: 12.0 },

    { longitud: 80.0, menos2: 8.5, menos1: 9.2, mediana: 10.1, mas1: 11.0, mas2: 12.1 },
    { longitud: 80.5, menos2: 8.6, menos1: 9.3, mediana: 10.2, mas1: 11.2, mas2: 12.3 },
    { longitud: 81.0, menos2: 8.7, menos1: 9.4, mediana: 10.3, mas1: 11.3, mas2: 12.4 },
    { longitud: 81.5, menos2: 8.8, menos1: 9.5, mediana: 10.4, mas1: 11.4, mas2: 12.5 },
    { longitud: 82.0, menos2: 8.8, menos1: 9.6, mediana: 10.5, mas1: 11.5, mas2: 12.6 },
    { longitud: 82.5, menos2: 8.9, menos1: 9.7, mediana: 10.6, mas1: 11.6, mas2: 12.8 },
    { longitud: 83.0, menos2: 9.0, menos1: 9.8, mediana: 10.7, mas1: 11.8, mas2: 12.9 },
    { longitud: 83.5, menos2: 9.1, menos1: 9.9, mediana: 10.9, mas1: 11.9, mas2: 13.1 },
    { longitud: 84.0, menos2: 9.2, menos1: 10.1, mediana: 11.0, mas1: 12.0, mas2: 13.2 },
    { longitud: 84.5, menos2: 9.3, menos1: 10.2, mediana: 11.1, mas1: 12.1, mas2: 13.3 },

    { longitud: 85.0, menos2: 9.4, menos1: 10.3, mediana: 11.2, mas1: 12.3, mas2: 13.5 },
    { longitud: 85.5, menos2: 9.5, menos1: 10.4, mediana: 11.3, mas1: 12.4, mas2: 13.6 },
    { longitud: 86.0, menos2: 9.7, menos1: 10.5, mediana: 11.5, mas1: 12.6, mas2: 13.8 },
    { longitud: 86.5, menos2: 9.8, menos1: 10.6, mediana: 11.6, mas1: 12.7, mas2: 13.9 },
    { longitud: 87.0, menos2: 9.9, menos1: 10.7, mediana: 11.7, mas1: 12.8, mas2: 14.1 },
    { longitud: 87.5, menos2: 10.0, menos1: 10.9, mediana: 11.8, mas1: 13.0, mas2: 14.2 },
    { longitud: 88.0, menos2: 10.1, menos1: 11.0, mediana: 12.0, mas1: 13.1, mas2: 14.4 },
    { longitud: 88.5, menos2: 10.2, menos1: 11.1, mediana: 12.1, mas1: 13.2, mas2: 14.5 },
    { longitud: 89.0, menos2: 10.3, menos1: 11.2, mediana: 12.2, mas1: 13.4, mas2: 14.7 },
    { longitud: 89.5, menos2: 10.4, menos1: 11.3, mediana: 12.3, mas1: 13.5, mas2: 14.8 },

    { longitud: 90.0, menos2: 10.5, menos1: 11.4, mediana: 12.5, mas1: 13.7, mas2: 15.0 },
    { longitud: 90.5, menos2: 10.6, menos1: 11.5, mediana: 12.6, mas1: 13.8, mas2: 15.1 },
    { longitud: 91.0, menos2: 10.7, menos1: 11.7, mediana: 12.7, mas1: 13.9, mas2: 15.3 },
    { longitud: 91.5, menos2: 10.8, menos1: 11.8, mediana: 12.8, mas1: 14.1, mas2: 15.5 },
    { longitud: 92.0, menos2: 10.9, menos1: 11.9, mediana: 13.0, mas1: 14.2, mas2: 15.6 },
    { longitud: 92.5, menos2: 11.0, menos1: 12.0, mediana: 13.1, mas1: 14.3, mas2: 15.8 },
    { longitud: 93.0, menos2: 11.1, menos1: 12.1, mediana: 13.2, mas1: 14.5, mas2: 15.9 },
    { longitud: 93.5, menos2: 11.2, menos1: 12.2, mediana: 13.3, mas1: 14.6, mas2: 16.1 },
    { longitud: 94.0, menos2: 11.3, menos1: 12.3, mediana: 13.5, mas1: 14.7, mas2: 16.2 },
    { longitud: 94.5, menos2: 11.4, menos1: 12.4, mediana: 13.6, mas1: 14.9, mas2: 16.4 },

    { longitud: 95.0, menos2: 11.5, menos1: 12.6, mediana: 13.7, mas1: 15.0, mas2: 16.5 },
    { longitud: 95.5, menos2: 11.6, menos1: 12.7, mediana: 13.8, mas1: 15.2, mas2: 16.7 },
    { longitud: 96.0, menos2: 11.7, menos1: 12.8, mediana: 14.0, mas1: 15.3, mas2: 16.8 },
    { longitud: 96.5, menos2: 11.8, menos1: 12.9, mediana: 14.1, mas1: 15.4, mas2: 17.0 },
    { longitud: 97.0, menos2: 12.0, menos1: 13.0, mediana: 14.2, mas1: 15.6, mas2: 17.1 },
    { longitud: 97.5, menos2: 12.1, menos1: 13.1, mediana: 14.4, mas1: 15.7, mas2: 17.3 },
    { longitud: 98.0, menos2: 12.2, menos1: 13.3, mediana: 14.5, mas1: 15.9, mas2: 17.5 },
    { longitud: 98.5, menos2: 12.3, menos1: 13.4, mediana: 14.6, mas1: 16.0, mas2: 17.6 },
    { longitud: 99.0, menos2: 12.4, menos1: 13.5, mediana: 14.8, mas1: 16.2, mas2: 17.8 },
    { longitud: 99.5, menos2: 12.5, menos1: 13.6, mediana: 14.9, mas1: 16.3, mas2: 18.0 },

    { longitud: 100.0, menos2: 12.6, menos1: 13.7, mediana: 15.0, mas1: 16.5, mas2: 18.1 },
    { longitud: 100.5, menos2: 12.7, menos1: 13.9, mediana: 15.2, mas1: 16.6, mas2: 18.3 },
    { longitud: 101.0, menos2: 12.8, menos1: 14.0, mediana: 15.3, mas1: 16.8, mas2: 18.5 },
    { longitud: 101.5, menos2: 13.0, menos1: 14.1, mediana: 15.5, mas1: 17.0, mas2: 18.7 },
    { longitud: 102.0, menos2: 13.1, menos1: 14.3, mediana: 15.6, mas1: 17.1, mas2: 18.9 },
    { longitud: 102.5, menos2: 13.2, menos1: 14.4, mediana: 15.8, mas1: 17.3, mas2: 19.0 },
    { longitud: 103.0, menos2: 13.3, menos1: 14.5, mediana: 15.9, mas1: 17.5, mas2: 19.2 },
    { longitud: 103.5, menos2: 13.5, menos1: 14.7, mediana: 16.1, mas1: 17.6, mas2: 19.4 },
    { longitud: 104.0, menos2: 13.6, menos1: 14.8, mediana: 16.2, mas1: 17.8, mas2: 19.6 },
    { longitud: 104.5, menos2: 13.7, menos1: 15.0, mediana: 16.4, mas1: 18.0, mas2: 19.8 },

    { longitud: 105.0, menos2: 13.8, menos1: 15.1, mediana: 16.5, mas1: 18.2, mas2: 20.0 },
    { longitud: 105.5, menos2: 14.0, menos1: 15.3, mediana: 16.7, mas1: 18.4, mas2: 20.2 },
    { longitud: 106.0, menos2: 14.1, menos1: 15.4, mediana: 16.9, mas1: 18.5, mas2: 20.5 },
    { longitud: 106.5, menos2: 14.3, menos1: 15.6, mediana: 17.1, mas1: 18.7, mas2: 20.7 },
    { longitud: 107.0, menos2: 14.4, menos1: 15.7, mediana: 17.2, mas1: 18.9, mas2: 20.9 },
    { longitud: 107.5, menos2: 14.5, menos1: 15.9, mediana: 17.4, mas1: 19.1, mas2: 21.1 },
    { longitud: 108.0, menos2: 14.7, menos1: 16.0, mediana: 17.6, mas1: 19.3, mas2: 21.3 },
    { longitud: 108.5, menos2: 14.8, menos1: 16.2, mediana: 17.8, mas1: 19.5, mas2: 21.6 },
    { longitud: 109.0, menos2: 15.0, menos1: 16.4, mediana: 18.0, mas1: 19.7, mas2: 21.8 },
    { longitud: 109.5, menos2: 15.1, menos1: 16.5, mediana: 18.1, mas1: 20.0, mas2: 22.0 },
    { longitud: 110.0, menos2: 15.3, menos1: 16.7, mediana: 18.3, mas1: 20.2, mas2: 22.3 }

];

// =========================
// P/E NIÑOS 2 A 5 AÑOS
// Peso para la edad
// Valores en kg
// =========================

const tablaPE_Ninos_2a5 = [

    { meses: 24, menos2: 9.7, menos1: 10.8, mediana: 12.2, mas1: 13.6, mas2: 15.3 },
    { meses: 25, menos2: 9.8, menos1: 11.0, mediana: 12.4, mas1: 13.9, mas2: 15.5 },
    { meses: 26, menos2: 10.0, menos1: 11.2, mediana: 12.5, mas1: 14.1, mas2: 15.8 },
    { meses: 27, menos2: 10.1, menos1: 11.3, mediana: 12.7, mas1: 14.3, mas2: 16.1 },
    { meses: 28, menos2: 10.2, menos1: 11.5, mediana: 12.9, mas1: 14.5, mas2: 16.3 },
    { meses: 29, menos2: 10.4, menos1: 11.7, mediana: 13.1, mas1: 14.8, mas2: 16.6 },
    { meses: 30, menos2: 10.5, menos1: 11.8, mediana: 13.3, mas1: 15.0, mas2: 16.9 },
    { meses: 31, menos2: 10.7, menos1: 12.0, mediana: 13.5, mas1: 15.2, mas2: 17.1 },
    { meses: 32, menos2: 10.8, menos1: 12.1, mediana: 13.7, mas1: 15.4, mas2: 17.4 },
    { meses: 33, menos2: 10.9, menos1: 12.3, mediana: 13.8, mas1: 15.6, mas2: 17.6 },
    { meses: 34, menos2: 11.0, menos1: 12.4, mediana: 14.0, mas1: 15.8, mas2: 17.8 },
    { meses: 35, menos2: 11.2, menos1: 12.6, mediana: 14.2, mas1: 16.0, mas2: 18.1 },

    { meses: 36, menos2: 11.3, menos1: 12.7, mediana: 14.3, mas1: 16.2, mas2: 18.3 },
    { meses: 37, menos2: 11.4, menos1: 12.9, mediana: 14.5, mas1: 16.4, mas2: 18.6 },
    { meses: 38, menos2: 11.5, menos1: 13.0, mediana: 14.7, mas1: 16.6, mas2: 18.8 },
    { meses: 39, menos2: 11.6, menos1: 13.1, mediana: 14.8, mas1: 16.8, mas2: 19.0 },
    { meses: 40, menos2: 11.8, menos1: 13.3, mediana: 15.0, mas1: 17.0, mas2: 19.3 },
    { meses: 41, menos2: 11.9, menos1: 13.4, mediana: 15.2, mas1: 17.2, mas2: 19.5 },
    { meses: 42, menos2: 12.0, menos1: 13.6, mediana: 15.3, mas1: 17.4, mas2: 19.7 },
    { meses: 43, menos2: 12.1, menos1: 13.7, mediana: 15.5, mas1: 17.6, mas2: 20.0 },
    { meses: 44, menos2: 12.2, menos1: 13.8, mediana: 15.7, mas1: 17.8, mas2: 20.2 },
    { meses: 45, menos2: 12.4, menos1: 14.0, mediana: 15.8, mas1: 18.0, mas2: 20.5 },
    { meses: 46, menos2: 12.5, menos1: 14.1, mediana: 16.0, mas1: 18.2, mas2: 20.7 },
    { meses: 47, menos2: 12.6, menos1: 14.3, mediana: 16.2, mas1: 18.4, mas2: 20.9 },

    { meses: 48, menos2: 12.7, menos1: 14.4, mediana: 16.3, mas1: 18.6, mas2: 21.2 },
    { meses: 49, menos2: 12.8, menos1: 14.5, mediana: 16.5, mas1: 18.8, mas2: 21.4 },
    { meses: 50, menos2: 12.9, menos1: 14.7, mediana: 16.7, mas1: 19.0, mas2: 21.7 },
    { meses: 51, menos2: 13.1, menos1: 14.8, mediana: 16.8, mas1: 19.2, mas2: 21.9 },
    { meses: 52, menos2: 13.2, menos1: 15.0, mediana: 17.0, mas1: 19.4, mas2: 22.2 },
    { meses: 53, menos2: 13.3, menos1: 15.1, mediana: 17.2, mas1: 19.6, mas2: 22.4 },
    { meses: 54, menos2: 13.4, menos1: 15.2, mediana: 17.3, mas1: 19.8, mas2: 22.7 },
    { meses: 55, menos2: 13.5, menos1: 15.4, mediana: 17.5, mas1: 20.0, mas2: 22.9 },
    { meses: 56, menos2: 13.6, menos1: 15.5, mediana: 17.7, mas1: 20.2, mas2: 23.2 },
    { meses: 57, menos2: 13.7, menos1: 15.6, mediana: 17.8, mas1: 20.4, mas2: 23.4 },
    { meses: 58, menos2: 13.8, menos1: 15.8, mediana: 18.0, mas1: 20.6, mas2: 23.7 },
    { meses: 59, menos2: 14.0, menos1: 15.9, mediana: 18.2, mas1: 20.8, mas2: 23.9 },
    { meses: 60, menos2: 14.1, menos1: 16.0, mediana: 18.3, mas1: 21.0, mas2: 24.2 }

];

// =========================
// P/E NIÑAS 2 A 5 AÑOS
// Peso para la edad
// Valores en kg
// =========================

const tablaPE_Ninas_2a5 = [

    { meses: 24, menos2: 9.0, menos1: 10.2, mediana: 11.5, mas1: 13.0, mas2: 14.8 },
    { meses: 25, menos2: 9.2, menos1: 10.3, mediana: 11.7, mas1: 13.3, mas2: 15.1 },
    { meses: 26, menos2: 9.4, menos1: 10.5, mediana: 11.9, mas1: 13.5, mas2: 15.4 },
    { meses: 27, menos2: 9.5, menos1: 10.7, mediana: 12.1, mas1: 13.7, mas2: 15.7 },
    { meses: 28, menos2: 9.7, menos1: 10.9, mediana: 12.3, mas1: 14.0, mas2: 16.0 },
    { meses: 29, menos2: 9.8, menos1: 11.1, mediana: 12.5, mas1: 14.2, mas2: 16.2 },
    { meses: 30, menos2: 10.0, menos1: 11.2, mediana: 12.7, mas1: 14.4, mas2: 16.5 },
    { meses: 31, menos2: 10.1, menos1: 11.4, mediana: 12.9, mas1: 14.7, mas2: 16.8 },
    { meses: 32, menos2: 10.3, menos1: 11.6, mediana: 13.1, mas1: 14.9, mas2: 17.1 },
    { meses: 33, menos2: 10.4, menos1: 11.7, mediana: 13.3, mas1: 15.1, mas2: 17.3 },
    { meses: 34, menos2: 10.5, menos1: 11.9, mediana: 13.5, mas1: 15.4, mas2: 17.6 },
    { meses: 35, menos2: 10.7, menos1: 12.0, mediana: 13.7, mas1: 15.6, mas2: 17.9 },

    { meses: 36, menos2: 10.8, menos1: 12.2, mediana: 13.9, mas1: 15.8, mas2: 18.1 },
    { meses: 37, menos2: 10.9, menos1: 12.4, mediana: 14.0, mas1: 16.0, mas2: 18.4 },
    { meses: 38, menos2: 11.1, menos1: 12.5, mediana: 14.2, mas1: 16.3, mas2: 18.7 },
    { meses: 39, menos2: 11.2, menos1: 12.7, mediana: 14.4, mas1: 16.5, mas2: 19.0 },
    { meses: 40, menos2: 11.3, menos1: 12.8, mediana: 14.6, mas1: 16.7, mas2: 19.2 },
    { meses: 41, menos2: 11.5, menos1: 13.0, mediana: 14.8, mas1: 16.9, mas2: 19.5 },
    { meses: 42, menos2: 11.6, menos1: 13.1, mediana: 15.0, mas1: 17.2, mas2: 19.8 },
    { meses: 43, menos2: 11.7, menos1: 13.3, mediana: 15.2, mas1: 17.4, mas2: 20.1 },
    { meses: 44, menos2: 11.8, menos1: 13.4, mediana: 15.3, mas1: 17.6, mas2: 20.4 },
    { meses: 45, menos2: 12.0, menos1: 13.6, mediana: 15.5, mas1: 17.8, mas2: 20.7 },
    { meses: 46, menos2: 12.1, menos1: 13.7, mediana: 15.7, mas1: 18.1, mas2: 20.9 },
    { meses: 47, menos2: 12.2, menos1: 13.9, mediana: 15.9, mas1: 18.3, mas2: 21.2 },

    { meses: 48, menos2: 12.3, menos1: 14.0, mediana: 16.1, mas1: 18.5, mas2: 21.5 },
    { meses: 49, menos2: 12.4, menos1: 14.2, mediana: 16.3, mas1: 18.8, mas2: 21.8 },
    { meses: 50, menos2: 12.6, menos1: 14.3, mediana: 16.4, mas1: 19.0, mas2: 22.1 },
    { meses: 51, menos2: 12.7, menos1: 14.5, mediana: 16.6, mas1: 19.2, mas2: 22.4 },
    { meses: 52, menos2: 12.8, menos1: 14.6, mediana: 16.8, mas1: 19.4, mas2: 22.6 },
    { meses: 53, menos2: 12.9, menos1: 14.8, mediana: 17.0, mas1: 19.7, mas2: 22.9 },
    { meses: 54, menos2: 13.0, menos1: 14.9, mediana: 17.2, mas1: 19.9, mas2: 23.2 },
    { meses: 55, menos2: 13.2, menos1: 15.1, mediana: 17.3, mas1: 20.1, mas2: 23.5 },
    { meses: 56, menos2: 13.3, menos1: 15.2, mediana: 17.5, mas1: 20.3, mas2: 23.8 },
    { meses: 57, menos2: 13.4, menos1: 15.3, mediana: 17.7, mas1: 20.6, mas2: 24.1 },
    { meses: 58, menos2: 13.5, menos1: 15.5, mediana: 17.9, mas1: 20.8, mas2: 24.4 },
    { meses: 59, menos2: 13.6, menos1: 15.6, mediana: 18.0, mas1: 21.0, mas2: 24.6 },
    { meses: 60, menos2: 13.7, menos1: 15.8, mediana: 18.2, mas1: 21.2, mas2: 24.9 }

];

// =========================
// T/E NIÑOS 2 A 5 AÑOS
// Talla para la edad
// Talla en cm
// =========================

const tablaTE_Ninos_2a5 = [

    { meses: 24, menos2: 81.0, menos1: 84.1, mediana: 87.1, mas1: 90.2, mas2: 93.2 },
    { meses: 25, menos2: 81.7, menos1: 84.9, mediana: 88.0, mas1: 91.1, mas2: 94.2 },
    { meses: 26, menos2: 82.5, menos1: 85.6, mediana: 88.8, mas1: 92.0, mas2: 95.2 },
    { meses: 27, menos2: 83.1, menos1: 86.4, mediana: 89.6, mas1: 92.9, mas2: 96.1 },
    { meses: 28, menos2: 83.8, menos1: 87.1, mediana: 90.4, mas1: 93.7, mas2: 97.0 },
    { meses: 29, menos2: 84.5, menos1: 87.8, mediana: 91.2, mas1: 94.5, mas2: 97.9 },
    { meses: 30, menos2: 85.1, menos1: 88.5, mediana: 91.9, mas1: 95.3, mas2: 98.7 },
    { meses: 31, menos2: 85.7, menos1: 89.2, mediana: 92.7, mas1: 96.1, mas2: 99.6 },
    { meses: 32, menos2: 86.4, menos1: 89.9, mediana: 93.4, mas1: 96.9, mas2: 100.4 },
    { meses: 33, menos2: 86.9, menos1: 90.5, mediana: 94.1, mas1: 97.6, mas2: 101.2 },
    { meses: 34, menos2: 87.5, menos1: 91.1, mediana: 94.8, mas1: 98.4, mas2: 102.0 },
    { meses: 35, menos2: 88.1, menos1: 91.8, mediana: 95.4, mas1: 99.1, mas2: 102.7 },

    { meses: 36, menos2: 88.7, menos1: 92.4, mediana: 96.1, mas1: 99.8, mas2: 103.5 },
    { meses: 37, menos2: 89.2, menos1: 93.0, mediana: 96.7, mas1: 100.5, mas2: 104.2 },
    { meses: 38, menos2: 89.8, menos1: 93.6, mediana: 97.4, mas1: 101.2, mas2: 105.0 },
    { meses: 39, menos2: 90.3, menos1: 94.2, mediana: 98.0, mas1: 101.8, mas2: 105.7 },
    { meses: 40, menos2: 90.9, menos1: 94.7, mediana: 98.6, mas1: 102.5, mas2: 106.4 },
    { meses: 41, menos2: 91.4, menos1: 95.3, mediana: 99.2, mas1: 103.2, mas2: 107.1 },
    { meses: 42, menos2: 91.9, menos1: 95.9, mediana: 99.9, mas1: 103.8, mas2: 107.8 },
    { meses: 43, menos2: 92.4, menos1: 96.4, mediana: 100.4, mas1: 104.5, mas2: 108.5 },
    { meses: 44, menos2: 93.0, menos1: 97.0, mediana: 101.0, mas1: 105.1, mas2: 109.1 },
    { meses: 45, menos2: 93.5, menos1: 97.5, mediana: 101.6, mas1: 105.7, mas2: 109.8 },
    { meses: 46, menos2: 94.0, menos1: 98.1, mediana: 102.2, mas1: 106.3, mas2: 110.4 },
    { meses: 47, menos2: 94.4, menos1: 98.6, mediana: 102.8, mas1: 106.9, mas2: 111.1 },

    { meses: 48, menos2: 94.9, menos1: 99.1, mediana: 103.3, mas1: 107.5, mas2: 111.7 },
    { meses: 49, menos2: 95.4, menos1: 99.7, mediana: 103.9, mas1: 108.1, mas2: 112.4 },
    { meses: 50, menos2: 95.9, menos1: 100.2, mediana: 104.4, mas1: 108.7, mas2: 113.0 },
    { meses: 51, menos2: 96.4, menos1: 100.7, mediana: 105.0, mas1: 109.3, mas2: 113.6 },
    { meses: 52, menos2: 96.9, menos1: 101.2, mediana: 105.6, mas1: 109.9, mas2: 114.2 },
    { meses: 53, menos2: 97.4, menos1: 101.7, mediana: 106.1, mas1: 110.5, mas2: 114.9 },
    { meses: 54, menos2: 97.8, menos1: 102.3, mediana: 106.7, mas1: 111.1, mas2: 115.5 },
    { meses: 55, menos2: 98.3, menos1: 102.8, mediana: 107.2, mas1: 111.7, mas2: 116.1 },
    { meses: 56, menos2: 98.8, menos1: 103.3, mediana: 107.8, mas1: 112.3, mas2: 116.7 },
    { meses: 57, menos2: 99.3, menos1: 103.8, mediana: 108.3, mas1: 112.8, mas2: 117.4 },
    { meses: 58, menos2: 99.7, menos1: 104.3, mediana: 108.9, mas1: 113.4, mas2: 118.0 },
    { meses: 59, menos2: 100.2, menos1: 104.8, mediana: 109.4, mas1: 114.0, mas2: 118.6 },
    { meses: 60, menos2: 100.7, menos1: 105.3, mediana: 110.0, mas1: 114.6, mas2: 119.2 }

];

// =========================
// T/E NIÑAS 2 A 5 AÑOS
// Talla para la edad
// Talla en cm
// =========================

const tablaTE_Ninas_2a5 = [

    { meses: 24, menos2: 79.3, menos1: 82.5, mediana: 85.7, mas1: 88.9, mas2: 92.2 },
    { meses: 25, menos2: 80.0, menos1: 83.3, mediana: 86.6, mas1: 89.9, mas2: 93.1 },
    { meses: 26, menos2: 80.8, menos1: 84.1, mediana: 87.4, mas1: 90.8, mas2: 94.1 },
    { meses: 27, menos2: 81.5, menos1: 84.9, mediana: 88.3, mas1: 91.7, mas2: 95.0 },
    { meses: 28, menos2: 82.2, menos1: 85.7, mediana: 89.1, mas1: 92.5, mas2: 96.0 },
    { meses: 29, menos2: 82.9, menos1: 86.4, mediana: 89.9, mas1: 93.4, mas2: 96.9 },
    { meses: 30, menos2: 83.6, menos1: 87.1, mediana: 90.7, mas1: 94.2, mas2: 97.7 },
    { meses: 31, menos2: 84.3, menos1: 87.9, mediana: 91.4, mas1: 95.0, mas2: 98.6 },
    { meses: 32, menos2: 84.9, menos1: 88.6, mediana: 92.2, mas1: 95.8, mas2: 99.4 },
    { meses: 33, menos2: 85.6, menos1: 89.3, mediana: 92.9, mas1: 96.6, mas2: 100.3 },
    { meses: 34, menos2: 86.2, menos1: 89.9, mediana: 93.6, mas1: 97.4, mas2: 101.1 },
    { meses: 35, menos2: 86.8, menos1: 90.6, mediana: 94.4, mas1: 98.1, mas2: 101.9 },

    { meses: 36, menos2: 87.4, menos1: 91.2, mediana: 95.1, mas1: 98.9, mas2: 102.7 },
    { meses: 37, menos2: 88.0, menos1: 91.9, mediana: 95.7, mas1: 99.6, mas2: 103.4 },
    { meses: 38, menos2: 88.6, menos1: 92.5, mediana: 96.4, mas1: 100.3, mas2: 104.2 },
    { meses: 39, menos2: 89.2, menos1: 93.1, mediana: 97.1, mas1: 101.0, mas2: 105.0 },
    { meses: 40, menos2: 89.8, menos1: 93.8, mediana: 97.7, mas1: 101.7, mas2: 105.7 },
    { meses: 41, menos2: 90.4, menos1: 94.4, mediana: 98.4, mas1: 102.4, mas2: 106.4 },
    { meses: 42, menos2: 90.9, menos1: 95.0, mediana: 99.0, mas1: 103.1, mas2: 107.2 },
    { meses: 43, menos2: 91.5, menos1: 95.6, mediana: 99.7, mas1: 103.8, mas2: 107.9 },
    { meses: 44, menos2: 92.0, menos1: 96.2, mediana: 100.3, mas1: 104.5, mas2: 108.6 },
    { meses: 45, menos2: 92.5, menos1: 96.7, mediana: 100.9, mas1: 105.1, mas2: 109.3 },
    { meses: 46, menos2: 93.1, menos1: 97.3, mediana: 101.5, mas1: 105.8, mas2: 110.0 },
    { meses: 47, menos2: 93.6, menos1: 97.9, mediana: 102.1, mas1: 106.4, mas2: 110.7 },

    { meses: 48, menos2: 94.1, menos1: 98.4, mediana: 102.7, mas1: 107.0, mas2: 111.3 },
    { meses: 49, menos2: 94.6, menos1: 99.0, mediana: 103.3, mas1: 107.7, mas2: 112.0 },
    { meses: 50, menos2: 95.1, menos1: 99.5, mediana: 103.9, mas1: 108.3, mas2: 112.7 },
    { meses: 51, menos2: 95.6, menos1: 100.1, mediana: 104.5, mas1: 108.9, mas2: 113.3 },
    { meses: 52, menos2: 96.1, menos1: 100.6, mediana: 105.0, mas1: 109.5, mas2: 114.0 },
    { meses: 53, menos2: 96.6, menos1: 101.1, mediana: 105.6, mas1: 110.1, mas2: 114.6 },
    { meses: 54, menos2: 97.1, menos1: 101.6, mediana: 106.2, mas1: 110.7, mas2: 115.2 },
    { meses: 55, menos2: 97.6, menos1: 102.2, mediana: 106.7, mas1: 111.3, mas2: 115.9 },
    { meses: 56, menos2: 98.1, menos1: 102.7, mediana: 107.3, mas1: 111.9, mas2: 116.5 },
    { meses: 57, menos2: 98.5, menos1: 103.2, mediana: 107.8, mas1: 112.5, mas2: 117.1 },
    { meses: 58, menos2: 99.0, menos1: 103.7, mediana: 108.4, mas1: 113.0, mas2: 117.7 },
    { meses: 59, menos2: 99.5, menos1: 104.2, mediana: 108.9, mas1: 113.6, mas2: 118.3 },
    { meses: 60, menos2: 99.9, menos1: 104.7, mediana: 109.4, mas1: 114.2, mas2: 118.9 }

];

// =========================
// P/T NIÑOS 2 A 5 AÑOS
// Peso para talla
// Talla en cm / peso en kg
// =========================

const tablaPT_Ninos_2a5 = [

    { talla: 65.0, menos2: 6.3, menos1: 6.9, mediana: 7.4, mas1: 8.1, mas2: 8.8 },
    { talla: 65.5, menos2: 6.4, menos1: 7.0, mediana: 7.6, mas1: 8.2, mas2: 8.9 },
    { talla: 66.0, menos2: 6.5, menos1: 7.1, mediana: 7.7, mas1: 8.3, mas2: 9.1 },
    { talla: 66.5, menos2: 6.6, menos1: 7.2, mediana: 7.8, mas1: 8.5, mas2: 9.2 },
    { talla: 67.0, menos2: 6.7, menos1: 7.3, mediana: 7.9, mas1: 8.6, mas2: 9.4 },
    { talla: 67.5, menos2: 6.8, menos1: 7.4, mediana: 8.0, mas1: 8.7, mas2: 9.5 },
    { talla: 68.0, menos2: 6.9, menos1: 7.5, mediana: 8.1, mas1: 8.8, mas2: 9.6 },
    { talla: 68.5, menos2: 7.0, menos1: 7.6, mediana: 8.2, mas1: 9.0, mas2: 9.8 },
    { talla: 69.0, menos2: 7.1, menos1: 7.7, mediana: 8.4, mas1: 9.1, mas2: 9.9 },
    { talla: 69.5, menos2: 7.2, menos1: 7.8, mediana: 8.5, mas1: 9.2, mas2: 10.0 },

    { talla: 70.0, menos2: 7.3, menos1: 7.9, mediana: 8.6, mas1: 9.3, mas2: 10.2 },
    { talla: 70.5, menos2: 7.4, menos1: 8.0, mediana: 8.7, mas1: 9.5, mas2: 10.3 },
    { talla: 71.0, menos2: 7.5, menos1: 8.1, mediana: 8.8, mas1: 9.6, mas2: 10.4 },
    { talla: 71.5, menos2: 7.6, menos1: 8.2, mediana: 8.9, mas1: 9.7, mas2: 10.6 },
    { talla: 72.0, menos2: 7.7, menos1: 8.3, mediana: 9.0, mas1: 9.8, mas2: 10.7 },
    { talla: 72.5, menos2: 7.8, menos1: 8.4, mediana: 9.1, mas1: 9.9, mas2: 10.8 },
    { talla: 73.0, menos2: 7.9, menos1: 8.5, mediana: 9.2, mas1: 10.0, mas2: 11.0 },
    { talla: 73.5, menos2: 7.9, menos1: 8.6, mediana: 9.3, mas1: 10.2, mas2: 11.1 },
    { talla: 74.0, menos2: 8.0, menos1: 8.7, mediana: 9.4, mas1: 10.3, mas2: 11.2 },
    { talla: 74.5, menos2: 8.1, menos1: 8.8, mediana: 9.5, mas1: 10.4, mas2: 11.3 },

    { talla: 75.0, menos2: 8.2, menos1: 8.9, mediana: 9.6, mas1: 10.5, mas2: 11.4 },
    { talla: 75.5, menos2: 8.3, menos1: 9.0, mediana: 9.7, mas1: 10.6, mas2: 11.6 },
    { talla: 76.0, menos2: 8.4, menos1: 9.1, mediana: 9.8, mas1: 10.7, mas2: 11.7 },
    { talla: 76.5, menos2: 8.5, menos1: 9.2, mediana: 9.9, mas1: 10.8, mas2: 11.8 },
    { talla: 77.0, menos2: 8.5, menos1: 9.2, mediana: 10.0, mas1: 10.9, mas2: 11.9 },
    { talla: 77.5, menos2: 8.6, menos1: 9.3, mediana: 10.1, mas1: 11.0, mas2: 12.0 },
    { talla: 78.0, menos2: 8.7, menos1: 9.4, mediana: 10.2, mas1: 11.1, mas2: 12.1 },
    { talla: 78.5, menos2: 8.8, menos1: 9.5, mediana: 10.3, mas1: 11.2, mas2: 12.2 },
    { talla: 79.0, menos2: 8.8, menos1: 9.6, mediana: 10.4, mas1: 11.3, mas2: 12.3 },
    { talla: 79.5, menos2: 8.9, menos1: 9.7, mediana: 10.5, mas1: 11.4, mas2: 12.4 },

    { talla: 80.0, menos2: 9.0, menos1: 9.7, mediana: 10.6, mas1: 11.5, mas2: 12.6 },
    { talla: 80.5, menos2: 9.1, menos1: 9.8, mediana: 10.7, mas1: 11.6, mas2: 12.7 },
    { talla: 81.0, menos2: 9.2, menos1: 9.9, mediana: 10.8, mas1: 11.7, mas2: 12.8 },
    { talla: 81.5, menos2: 9.3, menos1: 10.0, mediana: 10.9, mas1: 11.8, mas2: 12.9 },
    { talla: 82.0, menos2: 9.3, menos1: 10.1, mediana: 11.0, mas1: 11.9, mas2: 13.0 },
    { talla: 82.5, menos2: 9.4, menos1: 10.2, mediana: 11.1, mas1: 12.1, mas2: 13.1 },
    { talla: 83.0, menos2: 9.5, menos1: 10.3, mediana: 11.2, mas1: 12.2, mas2: 13.3 },
    { talla: 83.5, menos2: 9.6, menos1: 10.4, mediana: 11.3, mas1: 12.3, mas2: 13.4 },
    { talla: 84.0, menos2: 9.7, menos1: 10.5, mediana: 11.4, mas1: 12.4, mas2: 13.5 },
    { talla: 84.5, menos2: 9.9, menos1: 10.7, mediana: 11.5, mas1: 12.5, mas2: 13.7 },

    { talla: 85.0, menos2: 10.0, menos1: 10.8, mediana: 11.7, mas1: 12.7, mas2: 13.8 },
    { talla: 85.5, menos2: 10.1, menos1: 10.9, mediana: 11.8, mas1: 12.8, mas2: 13.9 },
    { talla: 86.0, menos2: 10.2, menos1: 11.0, mediana: 11.9, mas1: 12.9, mas2: 14.1 },
    { talla: 86.5, menos2: 10.3, menos1: 11.1, mediana: 12.0, mas1: 13.1, mas2: 14.2 },
    { talla: 87.0, menos2: 10.4, menos1: 11.2, mediana: 12.2, mas1: 13.2, mas2: 14.4 },
    { talla: 87.5, menos2: 10.5, menos1: 11.3, mediana: 12.3, mas1: 13.3, mas2: 14.5 },
    { talla: 88.0, menos2: 10.6, menos1: 11.5, mediana: 12.4, mas1: 13.5, mas2: 14.7 },
    { talla: 88.5, menos2: 10.7, menos1: 11.6, mediana: 12.5, mas1: 13.6, mas2: 14.8 },
    { talla: 89.0, menos2: 10.8, menos1: 11.7, mediana: 12.6, mas1: 13.7, mas2: 14.9 },
    { talla: 89.5, menos2: 10.9, menos1: 11.8, mediana: 12.8, mas1: 13.9, mas2: 15.1 },

    { talla: 90.0, menos2: 11.0, menos1: 11.9, mediana: 12.9, mas1: 14.0, mas2: 15.2 },
    { talla: 90.5, menos2: 11.1, menos1: 12.0, mediana: 13.0, mas1: 14.1, mas2: 15.3 },
    { talla: 91.0, menos2: 11.2, menos1: 12.1, mediana: 13.1, mas1: 14.2, mas2: 15.5 },
    { talla: 91.5, menos2: 11.3, menos1: 12.2, mediana: 13.2, mas1: 14.4, mas2: 15.6 },
    { talla: 92.0, menos2: 11.4, menos1: 12.3, mediana: 13.4, mas1: 14.5, mas2: 15.8 },
    { talla: 92.5, menos2: 11.5, menos1: 12.4, mediana: 13.5, mas1: 14.6, mas2: 15.9 },
    { talla: 93.0, menos2: 11.6, menos1: 12.6, mediana: 13.6, mas1: 14.7, mas2: 16.0 },
    { talla: 93.5, menos2: 11.7, menos1: 12.7, mediana: 13.7, mas1: 14.9, mas2: 16.2 },
    { talla: 94.0, menos2: 11.8, menos1: 12.8, mediana: 13.8, mas1: 15.0, mas2: 16.3 },
    { talla: 94.5, menos2: 11.9, menos1: 12.9, mediana: 13.9, mas1: 15.1, mas2: 16.5 },

    { talla: 95.0, menos2: 12.0, menos1: 13.0, mediana: 14.1, mas1: 15.3, mas2: 16.6 },
    { talla: 95.5, menos2: 12.1, menos1: 13.1, mediana: 14.2, mas1: 15.4, mas2: 16.7 },
    { talla: 96.0, menos2: 12.2, menos1: 13.2, mediana: 14.3, mas1: 15.5, mas2: 16.9 },
    { talla: 96.5, menos2: 12.3, menos1: 13.3, mediana: 14.4, mas1: 15.7, mas2: 17.0 },
    { talla: 97.0, menos2: 12.4, menos1: 13.4, mediana: 14.6, mas1: 15.8, mas2: 17.2 },
    { talla: 97.5, menos2: 12.5, menos1: 13.6, mediana: 14.7, mas1: 15.9, mas2: 17.4 },
    { talla: 98.0, menos2: 12.6, menos1: 13.7, mediana: 14.8, mas1: 16.1, mas2: 17.5 },
    { talla: 98.5, menos2: 12.8, menos1: 13.8, mediana: 14.9, mas1: 16.2, mas2: 17.7 },
    { talla: 99.0, menos2: 12.9, menos1: 13.9, mediana: 15.1, mas1: 16.4, mas2: 17.9 },
    { talla: 99.5, menos2: 13.0, menos1: 14.0, mediana: 15.2, mas1: 16.5, mas2: 18.0 },

    { talla: 100.0, menos2: 13.1, menos1: 14.2, mediana: 15.4, mas1: 16.7, mas2: 18.2 },
    { talla: 100.5, menos2: 13.2, menos1: 14.3, mediana: 15.5, mas1: 16.9, mas2: 18.4 },
    { talla: 101.0, menos2: 13.3, menos1: 14.4, mediana: 15.6, mas1: 17.0, mas2: 18.5 },
    { talla: 101.5, menos2: 13.4, menos1: 14.5, mediana: 15.8, mas1: 17.2, mas2: 18.7 },
    { talla: 102.0, menos2: 13.6, menos1: 14.7, mediana: 15.9, mas1: 17.3, mas2: 18.9 },
    { talla: 102.5, menos2: 13.7, menos1: 14.8, mediana: 16.1, mas1: 17.5, mas2: 19.1 },
    { talla: 103.0, menos2: 13.8, menos1: 14.9, mediana: 16.2, mas1: 17.7, mas2: 19.3 },
    { talla: 103.5, menos2: 13.9, menos1: 15.1, mediana: 16.4, mas1: 17.8, mas2: 19.5 },
    { talla: 104.0, menos2: 14.0, menos1: 15.2, mediana: 16.5, mas1: 18.0, mas2: 19.7 },
    { talla: 104.5, menos2: 14.2, menos1: 15.4, mediana: 16.7, mas1: 18.2, mas2: 19.9 },

    { talla: 105.0, menos2: 14.3, menos1: 15.5, mediana: 16.8, mas1: 18.4, mas2: 20.1 },
    { talla: 105.5, menos2: 14.4, menos1: 15.6, mediana: 17.0, mas1: 18.5, mas2: 20.3 },
    { talla: 106.0, menos2: 14.5, menos1: 15.8, mediana: 17.2, mas1: 18.7, mas2: 20.5 },
    { talla: 106.5, menos2: 14.7, menos1: 15.9, mediana: 17.3, mas1: 18.9, mas2: 20.7 },
    { talla: 107.0, menos2: 14.8, menos1: 16.1, mediana: 17.5, mas1: 19.1, mas2: 20.9 },
    { talla: 107.5, menos2: 14.9, menos1: 16.2, mediana: 17.7, mas1: 19.3, mas2: 21.1 },
    { talla: 108.0, menos2: 15.1, menos1: 16.4, mediana: 17.8, mas1: 19.5, mas2: 21.3 },
    { talla: 108.5, menos2: 15.2, menos1: 16.5, mediana: 18.0, mas1: 19.7, mas2: 21.5 },
    { talla: 109.0, menos2: 15.3, menos1: 16.7, mediana: 18.2, mas1: 19.8, mas2: 21.8 },
    { talla: 109.5, menos2: 15.5, menos1: 16.8, mediana: 18.3, mas1: 20.0, mas2: 22.0 },

    { talla: 110.0, menos2: 15.6, menos1: 17.0, mediana: 18.5, mas1: 20.2, mas2: 22.2 },
    { talla: 110.5, menos2: 15.8, menos1: 17.1, mediana: 18.7, mas1: 20.4, mas2: 22.4 },
    { talla: 111.0, menos2: 15.9, menos1: 17.3, mediana: 18.9, mas1: 20.7, mas2: 22.7 },
    { talla: 111.5, menos2: 16.0, menos1: 17.5, mediana: 19.1, mas1: 20.9, mas2: 22.9 },
    { talla: 112.0, menos2: 16.2, menos1: 17.6, mediana: 19.2, mas1: 21.1, mas2: 23.1 },
    { talla: 112.5, menos2: 16.3, menos1: 17.8, mediana: 19.4, mas1: 21.3, mas2: 23.4 },
    { talla: 113.0, menos2: 16.5, menos1: 18.0, mediana: 19.6, mas1: 21.5, mas2: 23.6 },
    { talla: 113.5, menos2: 16.6, menos1: 18.1, mediana: 19.8, mas1: 21.7, mas2: 23.9 },
    { talla: 114.0, menos2: 16.8, menos1: 18.3, mediana: 20.0, mas1: 21.9, mas2: 24.1 },
    { talla: 114.5, menos2: 16.9, menos1: 18.5, mediana: 20.2, mas1: 22.1, mas2: 24.4 },

    { talla: 115.0, menos2: 17.1, menos1: 18.6, mediana: 20.4, mas1: 22.4, mas2: 24.6 },
    { talla: 115.5, menos2: 17.2, menos1: 18.8, mediana: 20.6, mas1: 22.6, mas2: 24.9 },
    { talla: 116.0, menos2: 17.4, menos1: 19.0, mediana: 20.8, mas1: 22.8, mas2: 25.1 },
    { talla: 116.5, menos2: 17.5, menos1: 19.2, mediana: 21.0, mas1: 23.0, mas2: 25.4 },
    { talla: 117.0, menos2: 17.7, menos1: 19.3, mediana: 21.2, mas1: 23.3, mas2: 25.6 },
    { talla: 117.5, menos2: 17.9, menos1: 19.5, mediana: 21.4, mas1: 23.5, mas2: 25.9 },
    { talla: 118.0, menos2: 18.0, menos1: 19.7, mediana: 21.6, mas1: 23.7, mas2: 26.1 },
    { talla: 118.5, menos2: 18.2, menos1: 19.9, mediana: 21.8, mas1: 23.9, mas2: 26.4 },
    { talla: 119.0, menos2: 18.3, menos1: 20.0, mediana: 22.0, mas1: 24.1, mas2: 26.6 },
    { talla: 119.5, menos2: 18.5, menos1: 20.2, mediana: 22.2, mas1: 24.4, mas2: 26.9 },
    { talla: 120.0, menos2: 18.6, menos1: 20.4, mediana: 22.4, mas1: 24.6, mas2: 27.2 }

];

// =========================
// P/T NIÑAS 2 A 5 AÑOS
// Peso para talla
// Talla en cm / peso en kg
// =========================

const tablaPT_Ninas_2a5 = [

    { talla: 65.0, menos2: 6.1, menos1: 6.6, mediana: 7.2, mas1: 7.9, mas2: 8.7 },
    { talla: 65.5, menos2: 6.2, menos1: 6.7, mediana: 7.4, mas1: 8.1, mas2: 8.9 },
    { talla: 66.0, menos2: 6.3, menos1: 6.8, mediana: 7.5, mas1: 8.2, mas2: 9.0 },
    { talla: 66.5, menos2: 6.4, menos1: 6.9, mediana: 7.6, mas1: 8.3, mas2: 9.1 },
    { talla: 67.0, menos2: 6.4, menos1: 7.0, mediana: 7.7, mas1: 8.4, mas2: 9.3 },
    { talla: 67.5, menos2: 6.5, menos1: 7.1, mediana: 7.8, mas1: 8.5, mas2: 9.4 },
    { talla: 68.0, menos2: 6.6, menos1: 7.2, mediana: 7.9, mas1: 8.7, mas2: 9.5 },
    { talla: 68.5, menos2: 6.7, menos1: 7.3, mediana: 8.0, mas1: 8.8, mas2: 9.7 },
    { talla: 69.0, menos2: 6.8, menos1: 7.4, mediana: 8.1, mas1: 8.9, mas2: 9.8 },
    { talla: 69.5, menos2: 6.9, menos1: 7.5, mediana: 8.2, mas1: 9.0, mas2: 9.9 },

    { talla: 70.0, menos2: 7.0, menos1: 7.6, mediana: 8.3, mas1: 9.1, mas2: 10.0 },
    { talla: 70.5, menos2: 7.1, menos1: 7.7, mediana: 8.4, mas1: 9.2, mas2: 10.1 },
    { talla: 71.0, menos2: 7.1, menos1: 7.8, mediana: 8.5, mas1: 9.3, mas2: 10.3 },
    { talla: 71.5, menos2: 7.2, menos1: 7.9, mediana: 8.6, mas1: 9.4, mas2: 10.4 },
    { talla: 72.0, menos2: 7.3, menos1: 8.0, mediana: 8.7, mas1: 9.5, mas2: 10.5 },
    { talla: 72.5, menos2: 7.4, menos1: 8.1, mediana: 8.8, mas1: 9.7, mas2: 10.6 },
    { talla: 73.0, menos2: 7.5, menos1: 8.1, mediana: 8.9, mas1: 9.8, mas2: 10.7 },
    { talla: 73.5, menos2: 7.6, menos1: 8.2, mediana: 9.0, mas1: 9.9, mas2: 10.8 },
    { talla: 74.0, menos2: 7.6, menos1: 8.3, mediana: 9.1, mas1: 10.0, mas2: 11.0 },
    { talla: 74.5, menos2: 7.7, menos1: 8.4, mediana: 9.2, mas1: 10.1, mas2: 11.1 },

    { talla: 75.0, menos2: 7.8, menos1: 8.5, mediana: 9.3, mas1: 10.2, mas2: 11.2 },
    { talla: 75.5, menos2: 7.9, menos1: 8.6, mediana: 9.4, mas1: 10.3, mas2: 11.3 },
    { talla: 76.0, menos2: 8.0, menos1: 8.7, mediana: 9.5, mas1: 10.4, mas2: 11.4 },
    { talla: 76.5, menos2: 8.0, menos1: 8.7, mediana: 9.6, mas1: 10.5, mas2: 11.5 },
    { talla: 77.0, menos2: 8.1, menos1: 8.8, mediana: 9.6, mas1: 10.6, mas2: 11.6 },
    { talla: 77.5, menos2: 8.2, menos1: 8.9, mediana: 9.7, mas1: 10.7, mas2: 11.7 },
    { talla: 78.0, menos2: 8.3, menos1: 9.0, mediana: 9.8, mas1: 10.8, mas2: 11.8 },
    { talla: 78.5, menos2: 8.4, menos1: 9.1, mediana: 9.9, mas1: 10.9, mas2: 12.0 },
    { talla: 79.0, menos2: 8.4, menos1: 9.2, mediana: 10.0, mas1: 11.0, mas2: 12.1 },
    { talla: 79.5, menos2: 8.5, menos1: 9.3, mediana: 10.1, mas1: 11.1, mas2: 12.2 },

    { talla: 80.0, menos2: 8.6, menos1: 9.4, mediana: 10.2, mas1: 11.2, mas2: 12.3 },
    { talla: 80.5, menos2: 8.7, menos1: 9.5, mediana: 10.3, mas1: 11.3, mas2: 12.4 },
    { talla: 81.0, menos2: 8.8, menos1: 9.6, mediana: 10.4, mas1: 11.4, mas2: 12.6 },
    { talla: 81.5, menos2: 8.9, menos1: 9.7, mediana: 10.6, mas1: 11.6, mas2: 12.7 },
    { talla: 82.0, menos2: 9.0, menos1: 9.8, mediana: 10.7, mas1: 11.7, mas2: 12.8 },
    { talla: 82.5, menos2: 9.1, menos1: 9.9, mediana: 10.8, mas1: 11.8, mas2: 13.0 },
    { talla: 83.0, menos2: 9.2, menos1: 10.0, mediana: 10.9, mas1: 11.9, mas2: 13.1 },
    { talla: 83.5, menos2: 9.3, menos1: 10.1, mediana: 11.0, mas1: 12.1, mas2: 13.3 },
    { talla: 84.0, menos2: 9.4, menos1: 10.2, mediana: 11.1, mas1: 12.2, mas2: 13.4 },
    { talla: 84.5, menos2: 9.5, menos1: 10.3, mediana: 11.3, mas1: 12.3, mas2: 13.5 },

    { talla: 85.0, menos2: 9.6, menos1: 10.4, mediana: 11.4, mas1: 12.5, mas2: 13.7 },
    { talla: 85.5, menos2: 9.7, menos1: 10.6, mediana: 11.5, mas1: 12.6, mas2: 13.8 },
    { talla: 86.0, menos2: 9.8, menos1: 10.7, mediana: 11.6, mas1: 12.7, mas2: 14.0 },
    { talla: 86.5, menos2: 9.9, menos1: 10.8, mediana: 11.8, mas1: 12.9, mas2: 14.2 },
    { talla: 87.0, menos2: 10.0, menos1: 10.9, mediana: 11.9, mas1: 13.0, mas2: 14.3 },
    { talla: 87.5, menos2: 10.1, menos1: 11.0, mediana: 12.0, mas1: 13.2, mas2: 14.5 },
    { talla: 88.0, menos2: 10.2, menos1: 11.1, mediana: 12.1, mas1: 13.3, mas2: 14.6 },
    { talla: 88.5, menos2: 10.3, menos1: 11.2, mediana: 12.3, mas1: 13.4, mas2: 14.8 },
    { talla: 89.0, menos2: 10.4, menos1: 11.4, mediana: 12.4, mas1: 13.6, mas2: 14.9 },
    { talla: 89.5, menos2: 10.5, menos1: 11.5, mediana: 12.5, mas1: 13.7, mas2: 15.1 },

    { talla: 90.0, menos2: 10.6, menos1: 11.6, mediana: 12.6, mas1: 13.8, mas2: 15.2 },
    { talla: 90.5, menos2: 10.7, menos1: 11.7, mediana: 12.8, mas1: 14.0, mas2: 15.4 },
    { talla: 91.0, menos2: 10.9, menos1: 11.8, mediana: 12.9, mas1: 14.1, mas2: 15.5 },
    { talla: 91.5, menos2: 11.0, menos1: 11.9, mediana: 13.0, mas1: 14.3, mas2: 15.7 },
    { talla: 92.0, menos2: 11.1, menos1: 12.0, mediana: 13.1, mas1: 14.4, mas2: 15.8 },
    { talla: 92.5, menos2: 11.2, menos1: 12.1, mediana: 13.3, mas1: 14.5, mas2: 16.0 },
    { talla: 93.0, menos2: 11.3, menos1: 12.3, mediana: 13.4, mas1: 14.7, mas2: 16.1 },
    { talla: 93.5, menos2: 11.4, menos1: 12.4, mediana: 13.5, mas1: 14.8, mas2: 16.3 },
    { talla: 94.0, menos2: 11.5, menos1: 12.5, mediana: 13.6, mas1: 14.9, mas2: 16.4 },
    { talla: 94.5, menos2: 11.6, menos1: 12.6, mediana: 13.8, mas1: 15.1, mas2: 16.6 },

    { talla: 95.0, menos2: 11.7, menos1: 12.7, mediana: 13.9, mas1: 15.2, mas2: 16.7 },
    { talla: 95.5, menos2: 11.8, menos1: 12.8, mediana: 14.0, mas1: 15.4, mas2: 16.9 },
    { talla: 96.0, menos2: 11.9, menos1: 12.9, mediana: 14.1, mas1: 15.5, mas2: 17.0 },
    { talla: 96.5, menos2: 12.0, menos1: 13.1, mediana: 14.3, mas1: 15.6, mas2: 17.2 },
    { talla: 97.0, menos2: 12.1, menos1: 13.2, mediana: 14.4, mas1: 15.8, mas2: 17.4 },
    { talla: 97.5, menos2: 12.2, menos1: 13.3, mediana: 14.5, mas1: 15.9, mas2: 17.5 },
    { talla: 98.0, menos2: 12.3, menos1: 13.4, mediana: 14.7, mas1: 16.1, mas2: 17.7 },
    { talla: 98.5, menos2: 12.4, menos1: 13.5, mediana: 14.8, mas1: 16.2, mas2: 17.9 },
    { talla: 99.0, menos2: 12.5, menos1: 13.7, mediana: 14.9, mas1: 16.4, mas2: 18.0 },
    { talla: 99.5, menos2: 12.7, menos1: 13.8, mediana: 15.1, mas1: 16.5, mas2: 18.2 },

    { talla: 100.0, menos2: 12.8, menos1: 13.9, mediana: 15.2, mas1: 16.7, mas2: 18.4 },
    { talla: 100.5, menos2: 12.9, menos1: 14.1, mediana: 15.4, mas1: 16.9, mas2: 18.6 },
    { talla: 101.0, menos2: 13.0, menos1: 14.2, mediana: 15.5, mas1: 17.0, mas2: 18.7 },
    { talla: 101.5, menos2: 13.1, menos1: 14.3, mediana: 15.7, mas1: 17.2, mas2: 18.9 },
    { talla: 102.0, menos2: 13.3, menos1: 14.5, mediana: 15.8, mas1: 17.4, mas2: 19.1 },
    { talla: 102.5, menos2: 13.4, menos1: 14.6, mediana: 16.0, mas1: 17.5, mas2: 19.3 },
    { talla: 103.0, menos2: 13.5, menos1: 14.7, mediana: 16.1, mas1: 17.7, mas2: 19.5 },
    { talla: 103.5, menos2: 13.6, menos1: 14.9, mediana: 16.3, mas1: 17.9, mas2: 19.7 },
    { talla: 104.0, menos2: 13.8, menos1: 15.0, mediana: 16.4, mas1: 18.1, mas2: 19.9 },
    { talla: 104.5, menos2: 13.9, menos1: 15.2, mediana: 16.6, mas1: 18.2, mas2: 20.1 },

    { talla: 105.0, menos2: 14.0, menos1: 15.3, mediana: 16.8, mas1: 18.4, mas2: 20.3 },
    { talla: 105.5, menos2: 14.2, menos1: 15.5, mediana: 16.9, mas1: 18.6, mas2: 20.5 },
    { talla: 106.0, menos2: 14.3, menos1: 15.6, mediana: 17.1, mas1: 18.8, mas2: 20.8 },
    { talla: 106.5, menos2: 14.5, menos1: 15.8, mediana: 17.3, mas1: 19.0, mas2: 21.0 },
    { talla: 107.0, menos2: 14.6, menos1: 15.9, mediana: 17.5, mas1: 19.2, mas2: 21.2 },
    { talla: 107.5, menos2: 14.7, menos1: 16.1, mediana: 17.7, mas1: 19.4, mas2: 21.4 },
    { talla: 108.0, menos2: 14.9, menos1: 16.3, mediana: 17.8, mas1: 19.6, mas2: 21.7 },
    { talla: 108.5, menos2: 15.0, menos1: 16.4, mediana: 18.0, mas1: 19.8, mas2: 21.9 },
    { talla: 109.0, menos2: 15.2, menos1: 16.6, mediana: 18.2, mas1: 20.0, mas2: 22.1 },
    { talla: 109.5, menos2: 15.4, menos1: 16.8, mediana: 18.4, mas1: 20.3, mas2: 22.4 },

    { talla: 110.0, menos2: 15.5, menos1: 17.0, mediana: 18.6, mas1: 20.5, mas2: 22.6 },
    { talla: 110.5, menos2: 15.7, menos1: 17.1, mediana: 18.8, mas1: 20.7, mas2: 22.9 },
    { talla: 111.0, menos2: 15.8, menos1: 17.3, mediana: 19.0, mas1: 20.9, mas2: 23.1 },
    { talla: 111.5, menos2: 16.0, menos1: 17.5, mediana: 19.2, mas1: 21.2, mas2: 23.4 },
    { talla: 112.0, menos2: 16.2, menos1: 17.7, mediana: 19.4, mas1: 21.4, mas2: 23.6 },
    { talla: 112.5, menos2: 16.3, menos1: 17.9, mediana: 19.6, mas1: 21.6, mas2: 23.9 },
    { talla: 113.0, menos2: 16.5, menos1: 18.0, mediana: 19.8, mas1: 21.8, mas2: 24.2 },
    { talla: 113.5, menos2: 16.7, menos1: 18.2, mediana: 20.0, mas1: 22.1, mas2: 24.4 },
    { talla: 114.0, menos2: 16.8, menos1: 18.4, mediana: 20.2, mas1: 22.3, mas2: 24.7 },
    { talla: 114.5, menos2: 17.0, menos1: 18.6, mediana: 20.5, mas1: 22.6, mas2: 25.0 },

    { talla: 115.0, menos2: 17.2, menos1: 18.8, mediana: 20.7, mas1: 22.8, mas2: 25.2 },
    { talla: 115.5, menos2: 17.3, menos1: 19.0, mediana: 20.9, mas1: 23.0, mas2: 25.5 },
    { talla: 116.0, menos2: 17.5, menos1: 19.2, mediana: 21.1, mas1: 23.3, mas2: 25.8 },
    { talla: 116.5, menos2: 17.7, menos1: 19.4, mediana: 21.3, mas1: 23.5, mas2: 26.1 },
    { talla: 117.0, menos2: 17.8, menos1: 19.6, mediana: 21.5, mas1: 23.8, mas2: 26.3 },
    { talla: 117.5, menos2: 18.0, menos1: 19.8, mediana: 21.7, mas1: 24.0, mas2: 26.6 },
    { talla: 118.0, menos2: 18.2, menos1: 19.9, mediana: 22.0, mas1: 24.2, mas2: 26.9 },
    { talla: 118.5, menos2: 18.4, menos1: 20.1, mediana: 22.2, mas1: 24.5, mas2: 27.2 },
    { talla: 119.0, menos2: 18.5, menos1: 20.3, mediana: 22.4, mas1: 24.7, mas2: 27.4 },
    { talla: 119.5, menos2: 18.7, menos1: 20.5, mediana: 22.6, mas1: 25.0, mas2: 27.7 },
    { talla: 120.0, menos2: 18.9, menos1: 20.7, mediana: 22.8, mas1: 25.2, mas2: 28.0 }

];

// =========================
// P/E NIÑOS 5 A 10 AÑOS
// Peso para la edad
// Referencia OMS 2007
// Peso en kg
// =========================

const tablaPE_Ninos_5a10 = [

    { meses: 61,  menos2: 14.4, menos1: 16.3, mediana: 18.5, mas1: 21.1, mas2: 24.2 },
    { meses: 62,  menos2: 14.5, menos1: 16.4, mediana: 18.7, mas1: 21.3, mas2: 24.4 },
    { meses: 63,  menos2: 14.6, menos1: 16.6, mediana: 18.9, mas1: 21.5, mas2: 24.7 },
    { meses: 64,  menos2: 14.8, menos1: 16.7, mediana: 19.0, mas1: 21.7, mas2: 24.9 },
    { meses: 65,  menos2: 14.9, menos1: 16.9, mediana: 19.2, mas1: 22.0, mas2: 25.2 },
    { meses: 66,  menos2: 15.0, menos1: 17.0, mediana: 19.4, mas1: 22.2, mas2: 25.5 },
    { meses: 67,  menos2: 15.2, menos1: 17.2, mediana: 19.6, mas1: 22.4, mas2: 25.7 },
    { meses: 68,  menos2: 15.3, menos1: 17.4, mediana: 19.8, mas1: 22.6, mas2: 26.0 },
    { meses: 69,  menos2: 15.4, menos1: 17.5, mediana: 19.9, mas1: 22.8, mas2: 26.3 },
    { meses: 70,  menos2: 15.6, menos1: 17.7, mediana: 20.1, mas1: 23.1, mas2: 26.6 },
    { meses: 71,  menos2: 15.7, menos1: 17.8, mediana: 20.3, mas1: 23.3, mas2: 26.8 },

    { meses: 72,  menos2: 15.9, menos1: 18.0, mediana: 20.5, mas1: 23.5, mas2: 27.1 },
    { meses: 73,  menos2: 16.0, menos1: 18.2, mediana: 20.7, mas1: 23.7, mas2: 27.4 },
    { meses: 74,  menos2: 16.2, menos1: 18.3, mediana: 20.9, mas1: 24.0, mas2: 27.7 },
    { meses: 75,  menos2: 16.3, menos1: 18.5, mediana: 21.1, mas1: 24.2, mas2: 28.0 },
    { meses: 76,  menos2: 16.5, menos1: 18.7, mediana: 21.3, mas1: 24.4, mas2: 28.3 },
    { meses: 77,  menos2: 16.6, menos1: 18.8, mediana: 21.5, mas1: 24.7, mas2: 28.6 },
    { meses: 78,  menos2: 16.8, menos1: 19.0, mediana: 21.7, mas1: 24.9, mas2: 28.9 },
    { meses: 79,  menos2: 16.9, menos1: 19.2, mediana: 21.9, mas1: 25.2, mas2: 29.2 },
    { meses: 80,  menos2: 17.1, menos1: 19.3, mediana: 22.1, mas1: 25.4, mas2: 29.5 },
    { meses: 81,  menos2: 17.2, menos1: 19.5, mediana: 22.3, mas1: 25.6, mas2: 29.8 },
    { meses: 82,  menos2: 17.4, menos1: 19.7, mediana: 22.5, mas1: 25.9, mas2: 30.1 },
    { meses: 83,  menos2: 17.5, menos1: 19.9, mediana: 22.7, mas1: 26.1, mas2: 30.4 },

    { meses: 84,  menos2: 17.7, menos1: 20.0, mediana: 22.9, mas1: 26.4, mas2: 30.7 },
    { meses: 85,  menos2: 17.8, menos1: 20.2, mediana: 23.1, mas1: 26.6, mas2: 31.0 },
    { meses: 86,  menos2: 18.0, menos1: 20.4, mediana: 23.3, mas1: 26.9, mas2: 31.3 },
    { meses: 87,  menos2: 18.1, menos1: 20.6, mediana: 23.5, mas1: 27.1, mas2: 31.7 },
    { meses: 88,  menos2: 18.3, menos1: 20.7, mediana: 23.7, mas1: 27.4, mas2: 32.0 },
    { meses: 89,  menos2: 18.4, menos1: 20.9, mediana: 23.9, mas1: 27.7, mas2: 32.3 },
    { meses: 90,  menos2: 18.6, menos1: 21.1, mediana: 24.1, mas1: 27.9, mas2: 32.6 },
    { meses: 91,  menos2: 18.7, menos1: 21.3, mediana: 24.3, mas1: 28.2, mas2: 33.0 },
    { meses: 92,  menos2: 18.9, menos1: 21.4, mediana: 24.6, mas1: 28.4, mas2: 33.3 },
    { meses: 93,  menos2: 19.0, menos1: 21.6, mediana: 24.8, mas1: 28.7, mas2: 33.7 },
    { meses: 94,  menos2: 19.2, menos1: 21.8, mediana: 25.0, mas1: 29.0, mas2: 34.0 },
    { meses: 95,  menos2: 19.3, menos1: 22.0, mediana: 25.2, mas1: 29.2, mas2: 34.4 },

    { meses: 96,  menos2: 19.5, menos1: 22.1, mediana: 25.4, mas1: 29.5, mas2: 34.7 },
    { meses: 97,  menos2: 19.6, menos1: 22.3, mediana: 25.6, mas1: 29.8, mas2: 35.1 },
    { meses: 98,  menos2: 19.8, menos1: 22.5, mediana: 25.9, mas1: 30.1, mas2: 35.5 },
    { meses: 99,  menos2: 19.9, menos1: 22.7, mediana: 26.1, mas1: 30.3, mas2: 35.8 },
    { meses: 100, menos2: 20.1, menos1: 22.9, mediana: 26.3, mas1: 30.6, mas2: 36.2 },
    { meses: 101, menos2: 20.2, menos1: 23.0, mediana: 26.5, mas1: 30.9, mas2: 36.6 },
    { meses: 102, menos2: 20.4, menos1: 23.2, mediana: 26.7, mas1: 31.2, mas2: 37.0 },
    { meses: 103, menos2: 20.5, menos1: 23.4, mediana: 27.0, mas1: 31.5, mas2: 37.4 },
    { meses: 104, menos2: 20.7, menos1: 23.6, mediana: 27.2, mas1: 31.8, mas2: 37.8 },
    { meses: 105, menos2: 20.8, menos1: 23.8, mediana: 27.4, mas1: 32.1, mas2: 38.2 },
    { meses: 106, menos2: 21.0, menos1: 23.9, mediana: 27.6, mas1: 32.4, mas2: 38.6 },
    { meses: 107, menos2: 21.1, menos1: 24.1, mediana: 27.9, mas1: 32.7, mas2: 39.0 },

    { meses: 108, menos2: 21.3, menos1: 24.3, mediana: 28.1, mas1: 33.0, mas2: 39.4 },
    { meses: 109, menos2: 21.4, menos1: 24.5, mediana: 28.3, mas1: 33.3, mas2: 39.9 },
    { meses: 110, menos2: 21.6, menos1: 24.7, mediana: 28.6, mas1: 33.6, mas2: 40.3 },
    { meses: 111, menos2: 21.7, menos1: 24.9, mediana: 28.8, mas1: 33.9, mas2: 40.7 },
    { meses: 112, menos2: 21.9, menos1: 25.1, mediana: 29.1, mas1: 34.3, mas2: 41.2 },
    { meses: 113, menos2: 22.1, menos1: 25.3, mediana: 29.3, mas1: 34.6, mas2: 41.7 },
    { meses: 114, menos2: 22.2, menos1: 25.5, mediana: 29.6, mas1: 34.9, mas2: 42.1 },
    { meses: 115, menos2: 22.4, menos1: 25.7, mediana: 29.8, mas1: 35.3, mas2: 42.6 },
    { meses: 116, menos2: 22.5, menos1: 25.9, mediana: 30.1, mas1: 35.6, mas2: 43.1 },
    { meses: 117, menos2: 22.7, menos1: 26.1, mediana: 30.4, mas1: 36.0, mas2: 43.5 },
    { meses: 118, menos2: 22.9, menos1: 26.3, mediana: 30.6, mas1: 36.3, mas2: 44.0 },
    { meses: 119, menos2: 23.0, menos1: 26.5, mediana: 30.9, mas1: 36.7, mas2: 44.5 },
    { meses: 120, menos2: 23.2, menos1: 26.7, mediana: 31.2, mas1: 37.0, mas2: 45.0 }

];

// =========================
// P/E NIÑAS 5 A 10 AÑOS
// Peso para la edad
// Referencia OMS 2007
// Peso en kg
// =========================

const tablaPE_Ninas_5a10 = [

    { meses: 61,  menos2: 14.0, menos1: 15.9, mediana: 18.3, mas1: 21.2, mas2: 24.8 },
    { meses: 62,  menos2: 14.1, menos1: 16.0, mediana: 18.4, mas1: 21.4, mas2: 25.1 },
    { meses: 63,  menos2: 14.2, menos1: 16.2, mediana: 18.6, mas1: 21.6, mas2: 25.4 },
    { meses: 64,  menos2: 14.3, menos1: 16.3, mediana: 18.8, mas1: 21.8, mas2: 25.6 },
    { meses: 65,  menos2: 14.4, menos1: 16.5, mediana: 19.0, mas1: 22.0, mas2: 25.9 },
    { meses: 66,  menos2: 14.6, menos1: 16.6, mediana: 19.1, mas1: 22.2, mas2: 26.2 },
    { meses: 67,  menos2: 14.7, menos1: 16.8, mediana: 19.3, mas1: 22.5, mas2: 26.5 },
    { meses: 68,  menos2: 14.8, menos1: 16.9, mediana: 19.5, mas1: 22.7, mas2: 26.7 },
    { meses: 69,  menos2: 14.9, menos1: 17.0, mediana: 19.6, mas1: 22.9, mas2: 27.0 },
    { meses: 70,  menos2: 15.0, menos1: 17.2, mediana: 19.8, mas1: 23.1, mas2: 27.3 },
    { meses: 71,  menos2: 15.2, menos1: 17.3, mediana: 20.0, mas1: 23.3, mas2: 27.6 },

    { meses: 72,  menos2: 15.3, menos1: 17.5, mediana: 20.2, mas1: 23.5, mas2: 27.8 },
    { meses: 73,  menos2: 15.4, menos1: 17.6, mediana: 20.3, mas1: 23.8, mas2: 28.1 },
    { meses: 74,  menos2: 15.5, menos1: 17.8, mediana: 20.5, mas1: 24.0, mas2: 28.4 },
    { meses: 75,  menos2: 15.6, menos1: 17.9, mediana: 20.7, mas1: 24.2, mas2: 28.7 },
    { meses: 76,  menos2: 15.8, menos1: 18.0, mediana: 20.9, mas1: 24.4, mas2: 29.0 },
    { meses: 77,  menos2: 15.9, menos1: 18.2, mediana: 21.0, mas1: 24.6, mas2: 29.3 },
    { meses: 78,  menos2: 16.0, menos1: 18.3, mediana: 21.2, mas1: 24.9, mas2: 29.6 },
    { meses: 79,  menos2: 16.1, menos1: 18.5, mediana: 21.4, mas1: 25.1, mas2: 29.9 },
    { meses: 80,  menos2: 16.3, menos1: 18.6, mediana: 21.6, mas1: 25.3, mas2: 30.2 },
    { meses: 81,  menos2: 16.4, menos1: 18.8, mediana: 21.8, mas1: 25.6, mas2: 30.5 },
    { meses: 82,  menos2: 16.5, menos1: 18.9, mediana: 22.0, mas1: 25.8, mas2: 30.8 },
    { meses: 83,  menos2: 16.6, menos1: 19.1, mediana: 22.2, mas1: 26.1, mas2: 31.1 },

    { meses: 84,  menos2: 16.8, menos1: 19.3, mediana: 22.4, mas1: 26.3, mas2: 31.4 },
    { meses: 85,  menos2: 16.9, menos1: 19.4, mediana: 22.6, mas1: 26.6, mas2: 31.8 },
    { meses: 86,  menos2: 17.1, menos1: 19.6, mediana: 22.8, mas1: 26.8, mas2: 32.1 },
    { meses: 87,  menos2: 17.2, menos1: 19.8, mediana: 23.0, mas1: 27.1, mas2: 32.5 },
    { meses: 88,  menos2: 17.3, menos1: 19.9, mediana: 23.2, mas1: 27.4, mas2: 32.8 },
    { meses: 89,  menos2: 17.5, menos1: 20.1, mediana: 23.4, mas1: 27.6, mas2: 33.1 },
    { meses: 90,  menos2: 17.6, menos1: 20.3, mediana: 23.6, mas1: 27.9, mas2: 33.5 },
    { meses: 91,  menos2: 17.8, menos1: 20.5, mediana: 23.9, mas1: 28.2, mas2: 33.9 },
    { meses: 92,  menos2: 17.9, menos1: 20.7, mediana: 24.1, mas1: 28.5, mas2: 34.2 },
    { meses: 93,  menos2: 18.1, menos1: 20.9, mediana: 24.3, mas1: 28.8, mas2: 34.6 },
    { meses: 94,  menos2: 18.3, menos1: 21.0, mediana: 24.5, mas1: 29.1, mas2: 35.0 },
    { meses: 95,  menos2: 18.4, menos1: 21.2, mediana: 24.8, mas1: 29.4, mas2: 35.4 },

    { meses: 96,  menos2: 18.6, menos1: 21.4, mediana: 25.0, mas1: 29.7, mas2: 35.8 },
    { meses: 97,  menos2: 18.8, menos1: 21.6, mediana: 25.3, mas1: 30.0, mas2: 36.2 },
    { meses: 98,  menos2: 18.9, menos1: 21.8, mediana: 25.5, mas1: 30.3, mas2: 36.6 },
    { meses: 99,  menos2: 19.1, menos1: 22.0, mediana: 25.8, mas1: 30.6, mas2: 37.0 },
    { meses: 100, menos2: 19.3, menos1: 22.3, mediana: 26.0, mas1: 30.9, mas2: 37.4 },
    { meses: 101, menos2: 19.5, menos1: 22.5, mediana: 26.3, mas1: 31.2, mas2: 37.8 },
    { meses: 102, menos2: 19.6, menos1: 22.7, mediana: 26.6, mas1: 31.6, mas2: 38.3 },
    { meses: 103, menos2: 19.8, menos1: 22.9, mediana: 26.8, mas1: 31.9, mas2: 38.7 },
    { meses: 104, menos2: 20.0, menos1: 23.1, mediana: 27.1, mas1: 32.2, mas2: 39.1 },
    { meses: 105, menos2: 20.2, menos1: 23.3, mediana: 27.4, mas1: 32.6, mas2: 39.6 },
    { meses: 106, menos2: 20.4, menos1: 23.6, mediana: 27.6, mas1: 32.9, mas2: 40.0 },
    { meses: 107, menos2: 20.6, menos1: 23.8, mediana: 27.9, mas1: 33.3, mas2: 40.5 },

    { meses: 108, menos2: 20.8, menos1: 24.0, mediana: 28.2, mas1: 33.6, mas2: 41.0 },
    { meses: 109, menos2: 21.0, menos1: 24.3, mediana: 28.5, mas1: 34.0, mas2: 41.4 },
    { meses: 110, menos2: 21.2, menos1: 24.5, mediana: 28.8, mas1: 34.4, mas2: 41.9 },
    { meses: 111, menos2: 21.4, menos1: 24.7, mediana: 29.1, mas1: 34.7, mas2: 42.4 },
    { meses: 112, menos2: 21.6, menos1: 25.0, mediana: 29.4, mas1: 35.1, mas2: 42.9 },
    { meses: 113, menos2: 21.8, menos1: 25.2, mediana: 29.7, mas1: 35.5, mas2: 43.3 },
    { meses: 114, menos2: 22.0, menos1: 25.5, mediana: 30.0, mas1: 35.9, mas2: 43.8 },
    { meses: 115, menos2: 22.2, menos1: 25.7, mediana: 30.3, mas1: 36.2, mas2: 44.3 },
    { meses: 116, menos2: 22.4, menos1: 26.0, mediana: 30.6, mas1: 36.6, mas2: 44.8 },
    { meses: 117, menos2: 22.6, menos1: 26.2, mediana: 30.9, mas1: 37.0, mas2: 45.3 },
    { meses: 118, menos2: 22.8, menos1: 26.5, mediana: 31.2, mas1: 37.4, mas2: 45.8 },
    { meses: 119, menos2: 23.0, menos1: 26.8, mediana: 31.5, mas1: 37.8, mas2: 46.4 },
    { meses: 120, menos2: 23.3, menos1: 27.0, mediana: 31.9, mas1: 38.2, mas2: 46.9 }

];

// =========================
// T/E NIÑOS 5 A 19 AÑOS
// Talla para la edad
// Referencia OMS 2007
// Talla en cm
// =========================

const tablaTE_Ninos_5a19 = [

    { meses: 61, menos2: 101.1, menos1: 105.7, mediana: 110.3, mas1: 114.9, mas2: 119.4 },
    { meses: 62, menos2: 101.6, menos1: 106.2, mediana: 110.8, mas1: 115.4, mas2: 120.0 },
    { meses: 63, menos2: 102.0, menos1: 106.7, mediana: 111.3, mas1: 116.0, mas2: 120.6 },
    { meses: 64, menos2: 102.5, menos1: 107.2, mediana: 111.9, mas1: 116.5, mas2: 121.2 },
    { meses: 65, menos2: 103.0, menos1: 107.7, mediana: 112.4, mas1: 117.1, mas2: 121.8 },
    { meses: 66, menos2: 103.4, menos1: 108.2, mediana: 112.9, mas1: 117.7, mas2: 122.4 },
    { meses: 67, menos2: 103.9, menos1: 108.7, mediana: 113.4, mas1: 118.2, mas2: 123.0 },
    { meses: 68, menos2: 104.3, menos1: 109.1, mediana: 113.9, mas1: 118.7, mas2: 123.6 },
    { meses: 69, menos2: 104.8, menos1: 109.6, mediana: 114.5, mas1: 119.3, mas2: 124.1 },
    { meses: 70, menos2: 105.2, menos1: 110.1, mediana: 115.0, mas1: 119.8, mas2: 124.7 },
    { meses: 71, menos2: 105.7, menos1: 110.6, mediana: 115.5, mas1: 120.4, mas2: 125.2 },

    { meses: 72, menos2: 106.1, menos1: 111.0, mediana: 116.0, mas1: 120.9, mas2: 125.8 },
    { meses: 73, menos2: 106.5, menos1: 111.5, mediana: 116.4, mas1: 121.4, mas2: 126.4 },
    { meses: 74, menos2: 107.0, menos1: 111.9, mediana: 116.9, mas1: 121.9, mas2: 126.9 },
    { meses: 75, menos2: 107.4, menos1: 112.4, mediana: 117.4, mas1: 122.4, mas2: 127.5 },
    { meses: 76, menos2: 107.8, menos1: 112.9, mediana: 117.9, mas1: 123.0, mas2: 128.0 },
    { meses: 77, menos2: 108.2, menos1: 113.3, mediana: 118.4, mas1: 123.5, mas2: 128.5 },
    { meses: 78, menos2: 108.7, menos1: 113.8, mediana: 118.9, mas1: 124.0, mas2: 129.1 },
    { meses: 79, menos2: 109.1, menos1: 114.2, mediana: 119.4, mas1: 124.5, mas2: 129.6 },
    { meses: 80, menos2: 109.5, menos1: 114.7, mediana: 119.8, mas1: 125.0, mas2: 130.2 },
    { meses: 81, menos2: 109.9, menos1: 115.1, mediana: 120.3, mas1: 125.5, mas2: 130.7 },
    { meses: 82, menos2: 110.3, menos1: 115.6, mediana: 120.8, mas1: 126.0, mas2: 131.2 },
    { meses: 83, menos2: 110.8, menos1: 116.0, mediana: 121.3, mas1: 126.5, mas2: 131.8 },

    { meses: 84, menos2: 111.2, menos1: 116.4, mediana: 121.7, mas1: 127.0, mas2: 132.3 },
    { meses: 85, menos2: 111.6, menos1: 116.9, mediana: 122.2, mas1: 127.5, mas2: 132.8 },
    { meses: 86, menos2: 112.0, menos1: 117.3, mediana: 122.7, mas1: 128.0, mas2: 133.4 },
    { meses: 87, menos2: 112.4, menos1: 117.8, mediana: 123.1, mas1: 128.5, mas2: 133.9 },
    { meses: 88, menos2: 112.8, menos1: 118.2, mediana: 123.6, mas1: 129.0, mas2: 134.4 },
    { meses: 89, menos2: 113.2, menos1: 118.6, mediana: 124.1, mas1: 129.5, mas2: 134.9 },
    { meses: 90, menos2: 113.6, menos1: 119.1, mediana: 124.5, mas1: 130.0, mas2: 135.5 },
    { meses: 91, menos2: 114.0, menos1: 119.5, mediana: 125.0, mas1: 130.5, mas2: 136.0 },
    { meses: 92, menos2: 114.4, menos1: 119.9, mediana: 125.5, mas1: 131.0, mas2: 136.5 },
    { meses: 93, menos2: 114.8, menos1: 120.4, mediana: 125.9, mas1: 131.5, mas2: 137.0 },
    { meses: 94, menos2: 115.2, menos1: 120.8, mediana: 126.4, mas1: 132.0, mas2: 137.5 },
    { meses: 95, menos2: 115.6, menos1: 121.2, mediana: 126.8, mas1: 132.4, mas2: 138.1 },

    { meses: 96, menos2: 116.0, menos1: 121.6, mediana: 127.3, mas1: 132.9, mas2: 138.6 },
    { meses: 97, menos2: 116.4, menos1: 122.0, mediana: 127.7, mas1: 133.4, mas2: 139.1 },
    { meses: 98, menos2: 116.7, menos1: 122.5, mediana: 128.2, mas1: 133.9, mas2: 139.6 },
    { meses: 99, menos2: 117.1, menos1: 122.9, mediana: 128.6, mas1: 134.3, mas2: 140.1 },
    { meses: 100, menos2: 117.5, menos1: 123.3, mediana: 129.0, mas1: 134.8, mas2: 140.6 },
    { meses: 101, menos2: 117.9, menos1: 123.7, mediana: 129.5, mas1: 135.3, mas2: 141.1 },
    { meses: 102, menos2: 118.3, menos1: 124.1, mediana: 129.9, mas1: 135.8, mas2: 141.6 },
    { meses: 103, menos2: 118.7, menos1: 124.5, mediana: 130.4, mas1: 136.2, mas2: 142.1 },
    { meses: 104, menos2: 119.0, menos1: 124.9, mediana: 130.8, mas1: 136.7, mas2: 142.6 },
    { meses: 105, menos2: 119.4, menos1: 125.3, mediana: 131.3, mas1: 137.2, mas2: 143.1 },
    { meses: 106, menos2: 119.8, menos1: 125.7, mediana: 131.7, mas1: 137.6, mas2: 143.6 },
    { meses: 107, menos2: 120.2, menos1: 126.1, mediana: 132.1, mas1: 138.1, mas2: 144.1 },

    { meses: 108, menos2: 120.5, menos1: 126.6, mediana: 132.6, mas1: 138.6, mas2: 144.6 },
    { meses: 109, menos2: 120.9, menos1: 127.0, mediana: 133.0, mas1: 139.0, mas2: 145.1 },
    { meses: 110, menos2: 121.3, menos1: 127.4, mediana: 133.4, mas1: 139.5, mas2: 145.6 },
    { meses: 111, menos2: 121.7, menos1: 127.8, mediana: 133.9, mas1: 140.0, mas2: 146.1 },
    { meses: 112, menos2: 122.0, menos1: 128.2, mediana: 134.3, mas1: 140.4, mas2: 146.6 },
    { meses: 113, menos2: 122.4, menos1: 128.6, mediana: 134.7, mas1: 140.9, mas2: 147.1 },
    { meses: 114, menos2: 122.8, menos1: 129.0, mediana: 135.2, mas1: 141.4, mas2: 147.6 },
    { meses: 115, menos2: 123.2, menos1: 129.4, mediana: 135.6, mas1: 141.8, mas2: 148.1 },
    { meses: 116, menos2: 123.5, menos1: 129.8, mediana: 136.1, mas1: 142.3, mas2: 148.6 },
    { meses: 117, menos2: 123.9, menos1: 130.2, mediana: 136.5, mas1: 142.8, mas2: 149.1 },
    { meses: 118, menos2: 124.3, menos1: 130.6, mediana: 136.9, mas1: 143.2, mas2: 149.5 },
    { meses: 119, menos2: 124.7, menos1: 131.0, mediana: 137.3, mas1: 143.7, mas2: 150.0 },

    { meses: 120, menos2: 125.0, menos1: 131.4, mediana: 137.8, mas1: 144.2, mas2: 150.5 },
    { meses: 121, menos2: 125.4, menos1: 131.8, mediana: 138.2, mas1: 144.6, mas2: 151.0 },
    { meses: 122, menos2: 125.8, menos1: 132.2, mediana: 138.6, mas1: 145.1, mas2: 151.5 },
    { meses: 123, menos2: 126.2, menos1: 132.6, mediana: 139.1, mas1: 145.5, mas2: 152.0 },
    { meses: 124, menos2: 126.5, menos1: 133.0, mediana: 139.5, mas1: 146.0, mas2: 152.5 },
    { meses: 125, menos2: 126.9, menos1: 133.4, mediana: 140.0, mas1: 146.5, mas2: 153.0 },
    { meses: 126, menos2: 127.3, menos1: 133.8, mediana: 140.4, mas1: 146.9, mas2: 153.5 },
    { meses: 127, menos2: 127.7, menos1: 134.3, mediana: 140.8, mas1: 147.4, mas2: 154.0 },
    { meses: 128, menos2: 128.1, menos1: 134.7, mediana: 141.3, mas1: 147.9, mas2: 154.5 },
    { meses: 129, menos2: 128.5, menos1: 135.1, mediana: 141.7, mas1: 148.4, mas2: 155.0 },
    { meses: 130, menos2: 128.8, menos1: 135.5, mediana: 142.2, mas1: 148.9, mas2: 155.5 },
    { meses: 131, menos2: 129.2, menos1: 135.9, mediana: 142.7, mas1: 149.4, mas2: 156.1 },

    { meses: 132, menos2: 129.7, menos1: 136.4, mediana: 143.1, mas1: 149.8, mas2: 156.6 },
    { meses: 133, menos2: 130.1, menos1: 136.8, mediana: 143.6, mas1: 150.3, mas2: 157.1 },
    { meses: 134, menos2: 130.5, menos1: 137.3, mediana: 144.1, mas1: 150.8, mas2: 157.6 },
    { meses: 135, menos2: 130.9, menos1: 137.7, mediana: 144.5, mas1: 151.3, mas2: 158.2 },
    { meses: 136, menos2: 131.3, menos1: 138.2, mediana: 145.0, mas1: 151.9, mas2: 158.7 },
    { meses: 137, menos2: 131.7, menos1: 138.6, mediana: 145.5, mas1: 152.4, mas2: 159.3 },
    { meses: 138, menos2: 132.2, menos1: 139.1, mediana: 146.0, mas1: 152.9, mas2: 159.8 },
    { meses: 139, menos2: 132.6, menos1: 139.6, mediana: 146.5, mas1: 153.4, mas2: 160.4 },
    { meses: 140, menos2: 133.1, menos1: 140.0, mediana: 147.0, mas1: 154.0, mas2: 160.9 },
    { meses: 141, menos2: 133.5, menos1: 140.5, mediana: 147.5, mas1: 154.5, mas2: 161.5 },
    { meses: 142, menos2: 134.0, menos1: 141.0, mediana: 148.0, mas1: 155.0, mas2: 162.1 },
    { meses: 143, menos2: 134.4, menos1: 141.5, mediana: 148.5, mas1: 155.6, mas2: 162.7 },

    { meses: 144, menos2: 134.9, menos1: 142.0, mediana: 149.1, mas1: 156.2, mas2: 163.3 },
    { meses: 145, menos2: 135.4, menos1: 142.5, mediana: 149.6, mas1: 156.7, mas2: 163.9 },
    { meses: 146, menos2: 135.9, menos1: 143.0, mediana: 150.2, mas1: 157.3, mas2: 164.5 },
    { meses: 147, menos2: 136.4, menos1: 143.6, mediana: 150.7, mas1: 157.9, mas2: 165.1 },
    { meses: 148, menos2: 136.9, menos1: 144.1, mediana: 151.3, mas1: 158.5, mas2: 165.7 },
    { meses: 149, menos2: 137.4, menos1: 144.6, mediana: 151.9, mas1: 159.1, mas2: 166.3 },
    { meses: 150, menos2: 137.9, menos1: 145.2, mediana: 152.4, mas1: 159.7, mas2: 167.0 },
    { meses: 151, menos2: 138.5, menos1: 145.7, mediana: 153.0, mas1: 160.3, mas2: 167.6 },
    { meses: 152, menos2: 139.0, menos1: 146.3, mediana: 153.6, mas1: 160.9, mas2: 168.3 },
    { meses: 153, menos2: 139.5, menos1: 146.9, mediana: 154.2, mas1: 161.6, mas2: 168.9 },
    { meses: 154, menos2: 140.1, menos1: 147.5, mediana: 154.8, mas1: 162.2, mas2: 169.6 },
    { meses: 155, menos2: 140.6, menos1: 148.0, mediana: 155.4, mas1: 162.8, mas2: 170.2 },

    { meses: 156, menos2: 141.2, menos1: 148.6, mediana: 156.0, mas1: 163.5, mas2: 170.9 },
    { meses: 157, menos2: 141.7, menos1: 149.2, mediana: 156.7, mas1: 164.1, mas2: 171.6 },
    { meses: 158, menos2: 142.3, menos1: 149.8, mediana: 157.3, mas1: 164.7, mas2: 172.2 },
    { meses: 159, menos2: 142.9, menos1: 150.4, mediana: 157.9, mas1: 165.4, mas2: 172.9 },
    { meses: 160, menos2: 143.4, menos1: 151.0, mediana: 158.5, mas1: 166.0, mas2: 173.5 },
    { meses: 161, menos2: 144.0, menos1: 151.5, mediana: 159.1, mas1: 166.6, mas2: 174.2 },
    { meses: 162, menos2: 144.5, menos1: 152.1, mediana: 159.7, mas1: 167.3, mas2: 174.8 },
    { meses: 163, menos2: 145.1, menos1: 152.7, mediana: 160.3, mas1: 167.9, mas2: 175.5 },
    { meses: 164, menos2: 145.7, menos1: 153.3, mediana: 160.9, mas1: 168.5, mas2: 176.1 },
    { meses: 165, menos2: 146.2, menos1: 153.8, mediana: 161.5, mas1: 169.1, mas2: 176.7 },
    { meses: 166, menos2: 146.7, menos1: 154.4, mediana: 162.1, mas1: 169.7, mas2: 177.4 },
    { meses: 167, menos2: 147.3, menos1: 154.9, mediana: 162.6, mas1: 170.3, mas2: 178.0 },

    { meses: 168, menos2: 147.8, menos1: 155.5, mediana: 163.2, mas1: 170.9, mas2: 178.6 },
    { meses: 169, menos2: 148.3, menos1: 156.0, mediana: 163.7, mas1: 171.4, mas2: 179.1 },
    { meses: 170, menos2: 148.8, menos1: 156.5, mediana: 164.3, mas1: 172.0, mas2: 179.7 },
    { meses: 171, menos2: 149.3, menos1: 157.1, mediana: 164.8, mas1: 172.5, mas2: 180.3 },
    { meses: 172, menos2: 149.8, menos1: 157.6, mediana: 165.3, mas1: 173.1, mas2: 180.8 },
    { meses: 173, menos2: 150.3, menos1: 158.1, mediana: 165.8, mas1: 173.6, mas2: 181.3 },
    { meses: 174, menos2: 150.8, menos1: 158.5, mediana: 166.3, mas1: 174.1, mas2: 181.8 },
    { meses: 175, menos2: 151.2, menos1: 159.0, mediana: 166.8, mas1: 174.6, mas2: 182.3 },
    { meses: 176, menos2: 151.7, menos1: 159.5, mediana: 167.2, mas1: 175.0, mas2: 182.8 },
    { meses: 177, menos2: 152.1, menos1: 159.9, mediana: 167.7, mas1: 175.5, mas2: 183.3 },
    { meses: 178, menos2: 152.5, menos1: 160.3, mediana: 168.1, mas1: 175.9, mas2: 183.7 },
    { meses: 179, menos2: 152.9, menos1: 160.7, mediana: 168.5, mas1: 176.3, mas2: 184.1 },

    { meses: 180, menos2: 153.4, menos1: 161.2, mediana: 169.0, mas1: 176.8, mas2: 184.6 },
    { meses: 181, menos2: 153.7, menos1: 161.5, mediana: 169.4, mas1: 177.2, mas2: 185.0 },
    { meses: 182, menos2: 154.1, menos1: 161.9, mediana: 169.7, mas1: 177.5, mas2: 185.4 },
    { meses: 183, menos2: 154.5, menos1: 162.3, mediana: 170.1, mas1: 177.9, mas2: 185.7 },
    { meses: 184, menos2: 154.9, menos1: 162.7, mediana: 170.5, mas1: 178.3, mas2: 186.1 },
    { meses: 185, menos2: 155.2, menos1: 163.0, mediana: 170.8, mas1: 178.6, mas2: 186.4 },
    { meses: 186, menos2: 155.5, menos1: 163.3, mediana: 171.1, mas1: 178.9, mas2: 186.8 },
    { meses: 187, menos2: 155.9, menos1: 163.7, mediana: 171.5, mas1: 179.3, mas2: 187.1 },
    { meses: 188, menos2: 156.2, menos1: 164.0, mediana: 171.8, mas1: 179.6, mas2: 187.4 },
    { meses: 189, menos2: 156.5, menos1: 164.3, mediana: 172.1, mas1: 179.9, mas2: 187.7 },
    { meses: 190, menos2: 156.8, menos1: 164.6, mediana: 172.4, mas1: 180.1, mas2: 187.9 },
    { meses: 191, menos2: 157.1, menos1: 164.9, mediana: 172.6, mas1: 180.4, mas2: 188.2 },

    { meses: 192, menos2: 157.4, menos1: 165.1, mediana: 172.9, mas1: 180.7, mas2: 188.4 },
    { meses: 193, menos2: 157.6, menos1: 165.4, mediana: 173.1, mas1: 180.9, mas2: 188.7 },
    { meses: 194, menos2: 157.9, menos1: 165.6, mediana: 173.4, mas1: 181.1, mas2: 188.9 },
    { meses: 195, menos2: 158.1, menos1: 165.9, mediana: 173.6, mas1: 181.4, mas2: 189.1 },
    { meses: 196, menos2: 158.4, menos1: 166.1, mediana: 173.8, mas1: 181.6, mas2: 189.3 },
    { meses: 197, menos2: 158.6, menos1: 166.3, mediana: 174.0, mas1: 181.8, mas2: 189.5 },
    { meses: 198, menos2: 158.8, menos1: 166.5, mediana: 174.2, mas1: 181.9, mas2: 189.7 },
    { meses: 199, menos2: 159.0, menos1: 166.7, mediana: 174.4, mas1: 182.1, mas2: 189.8 },
    { meses: 200, menos2: 159.2, menos1: 166.9, mediana: 174.6, mas1: 182.3, mas2: 190.0 },
    { meses: 201, menos2: 159.4, menos1: 167.1, mediana: 174.7, mas1: 182.4, mas2: 190.1 },
    { meses: 202, menos2: 159.6, menos1: 167.2, mediana: 174.9, mas1: 182.6, mas2: 190.2 },
    { meses: 203, menos2: 159.7, menos1: 167.4, mediana: 175.0, mas1: 182.7, mas2: 190.3 },

    { meses: 204, menos2: 159.9, menos1: 167.5, mediana: 175.2, mas1: 182.8, mas2: 190.4 },
    { meses: 205, menos2: 160.0, menos1: 167.7, mediana: 175.3, mas1: 182.9, mas2: 190.5 },
    { meses: 206, menos2: 160.2, menos1: 167.8, mediana: 175.4, mas1: 183.0, mas2: 190.6 },
    { meses: 207, menos2: 160.3, menos1: 167.9, mediana: 175.5, mas1: 183.1, mas2: 190.7 },
    { meses: 208, menos2: 160.4, menos1: 168.0, mediana: 175.6, mas1: 183.2, mas2: 190.8 },
    { meses: 209, menos2: 160.5, menos1: 168.1, mediana: 175.7, mas1: 183.3, mas2: 190.8 },
    { meses: 210, menos2: 160.6, menos1: 168.2, mediana: 175.8, mas1: 183.3, mas2: 190.9 },
    { meses: 211, menos2: 160.8, menos1: 168.3, mediana: 175.8, mas1: 183.4, mas2: 190.9 },
    { meses: 212, menos2: 160.9, menos1: 168.4, mediana: 175.9, mas1: 183.4, mas2: 191.0 },
    { meses: 213, menos2: 160.9, menos1: 168.5, mediana: 176.0, mas1: 183.5, mas2: 191.0 },
    { meses: 214, menos2: 161.0, menos1: 168.5, mediana: 176.0, mas1: 183.5, mas2: 191.0 },
    { meses: 215, menos2: 161.1, menos1: 168.6, mediana: 176.1, mas1: 183.6, mas2: 191.1 },

    { meses: 216, menos2: 161.2, menos1: 168.7, mediana: 176.1, mas1: 183.6, mas2: 191.1 },
    { meses: 217, menos2: 161.3, menos1: 168.7, mediana: 176.2, mas1: 183.6, mas2: 191.1 },
    { meses: 218, menos2: 161.4, menos1: 168.8, mediana: 176.2, mas1: 183.7, mas2: 191.1 },
    { meses: 219, menos2: 161.4, menos1: 168.9, mediana: 176.3, mas1: 183.7, mas2: 191.1 },
    { meses: 220, menos2: 161.5, menos1: 168.9, mediana: 176.3, mas1: 183.7, mas2: 191.1 },
    { meses: 221, menos2: 161.6, menos1: 169.0, mediana: 176.4, mas1: 183.8, mas2: 191.1 },
    { meses: 222, menos2: 161.6, menos1: 169.0, mediana: 176.4, mas1: 183.8, mas2: 191.1 },
    { meses: 223, menos2: 161.7, menos1: 169.0, mediana: 176.4, mas1: 183.8, mas2: 191.2 },
    { meses: 224, menos2: 161.7, menos1: 169.1, mediana: 176.4, mas1: 183.8, mas2: 191.2 },
    { meses: 225, menos2: 161.8, menos1: 169.1, mediana: 176.5, mas1: 183.8, mas2: 191.2 },
    { meses: 226, menos2: 161.8, menos1: 169.2, mediana: 176.5, mas1: 183.8, mas2: 191.1 },
    { meses: 227, menos2: 161.9, menos1: 169.2, mediana: 176.5, mas1: 183.8, mas2: 191.1 },
    { meses: 228, menos2: 161.9, menos1: 169.2, mediana: 176.5, mas1: 183.8, mas2: 191.1 }

];

// =========================
// T/E NIÑAS 5 A 19 AÑOS
// Talla para la edad
// Referencia OMS 2007
// Talla en cm
// =========================

const tablaTE_Ninas_5a19 = [

    { meses: 61, menos2: 100.1, menos1: 104.8, mediana: 109.6, mas1: 114.4, mas2: 119.1 },
    { meses: 62, menos2: 100.5, menos1: 105.3, mediana: 110.1, mas1: 114.9, mas2: 119.7 },
    { meses: 63, menos2: 101.0, menos1: 105.8, mediana: 110.6, mas1: 115.5, mas2: 120.3 },
    { meses: 64, menos2: 101.4, menos1: 106.3, mediana: 111.2, mas1: 116.0, mas2: 120.9 },
    { meses: 65, menos2: 101.9, menos1: 106.8, mediana: 111.7, mas1: 116.6, mas2: 121.5 },
    { meses: 66, menos2: 102.3, menos1: 107.2, mediana: 112.2, mas1: 117.1, mas2: 122.0 },
    { meses: 67, menos2: 102.7, menos1: 107.7, mediana: 112.7, mas1: 117.6, mas2: 122.6 },
    { meses: 68, menos2: 103.2, menos1: 108.2, mediana: 113.2, mas1: 118.2, mas2: 123.2 },
    { meses: 69, menos2: 103.6, menos1: 108.6, mediana: 113.7, mas1: 118.7, mas2: 123.7 },
    { meses: 70, menos2: 104.0, menos1: 109.1, mediana: 114.2, mas1: 119.2, mas2: 124.3 },
    { meses: 71, menos2: 104.5, menos1: 109.6, mediana: 114.6, mas1: 119.7, mas2: 124.8 },

    { meses: 72, menos2: 104.9, menos1: 110.0, mediana: 115.1, mas1: 120.2, mas2: 125.4 },
    { meses: 73, menos2: 105.3, menos1: 110.5, mediana: 115.6, mas1: 120.8, mas2: 125.9 },
    { meses: 74, menos2: 105.7, menos1: 110.9, mediana: 116.1, mas1: 121.3, mas2: 126.4 },
    { meses: 75, menos2: 106.1, menos1: 111.3, mediana: 116.6, mas1: 121.8, mas2: 127.0 },
    { meses: 76, menos2: 106.6, menos1: 111.8, mediana: 117.0, mas1: 122.3, mas2: 127.5 },
    { meses: 77, menos2: 107.0, menos1: 112.2, mediana: 117.5, mas1: 122.8, mas2: 128.0 },
    { meses: 78, menos2: 107.4, menos1: 112.7, mediana: 118.0, mas1: 123.3, mas2: 128.6 },
    { meses: 79, menos2: 107.8, menos1: 113.1, mediana: 118.4, mas1: 123.8, mas2: 129.1 },
    { meses: 80, menos2: 108.2, menos1: 113.6, mediana: 118.9, mas1: 124.3, mas2: 129.6 },
    { meses: 81, menos2: 108.6, menos1: 114.0, mediana: 119.4, mas1: 124.8, mas2: 130.2 },
    { meses: 82, menos2: 109.0, menos1: 114.5, mediana: 119.9, mas1: 125.3, mas2: 130.7 },
    { meses: 83, menos2: 109.5, menos1: 114.9, mediana: 120.3, mas1: 125.8, mas2: 131.2 },

    { meses: 84, menos2: 109.9, menos1: 115.3, mediana: 120.8, mas1: 126.3, mas2: 131.7 },
    { meses: 85, menos2: 110.3, menos1: 115.8, mediana: 121.3, mas1: 126.8, mas2: 132.3 },
    { meses: 86, menos2: 110.7, menos1: 116.2, mediana: 121.8, mas1: 127.3, mas2: 132.8 },
    { meses: 87, menos2: 111.1, menos1: 116.7, mediana: 122.2, mas1: 127.8, mas2: 133.3 },
    { meses: 88, menos2: 111.6, menos1: 117.1, mediana: 122.7, mas1: 128.3, mas2: 133.9 },
    { meses: 89, menos2: 112.0, menos1: 117.6, mediana: 123.2, mas1: 128.8, mas2: 134.4 },
    { meses: 90, menos2: 112.4, menos1: 118.0, mediana: 123.7, mas1: 129.3, mas2: 134.9 },
    { meses: 91, menos2: 112.8, menos1: 118.5, mediana: 124.1, mas1: 129.8, mas2: 135.5 },
    { meses: 92, menos2: 113.2, menos1: 118.9, mediana: 124.6, mas1: 130.3, mas2: 136.0 },
    { meses: 93, menos2: 113.7, menos1: 119.4, mediana: 125.1, mas1: 130.8, mas2: 136.5 },
    { meses: 94, menos2: 114.1, menos1: 119.8, mediana: 125.6, mas1: 131.3, mas2: 137.1 },
    { meses: 95, menos2: 114.5, menos1: 120.3, mediana: 126.1, mas1: 131.8, mas2: 137.6 },

    { meses: 96, menos2: 115.0, menos1: 120.8, mediana: 126.6, mas1: 132.4, mas2: 138.2 },
    { meses: 97, menos2: 115.4, menos1: 121.2, mediana: 127.0, mas1: 132.9, mas2: 138.7 },
    { meses: 98, menos2: 115.8, menos1: 121.7, mediana: 127.5, mas1: 133.4, mas2: 139.2 },
    { meses: 99, menos2: 116.3, menos1: 122.1, mediana: 128.0, mas1: 133.9, mas2: 139.8 },
    { meses: 100, menos2: 116.7, menos1: 122.6, mediana: 128.5, mas1: 134.4, mas2: 140.3 },
    { meses: 101, menos2: 117.1, menos1: 123.1, mediana: 129.0, mas1: 134.9, mas2: 140.9 },
    { meses: 102, menos2: 117.6, menos1: 123.5, mediana: 129.5, mas1: 135.5, mas2: 141.4 },
    { meses: 103, menos2: 118.0, menos1: 124.0, mediana: 130.0, mas1: 136.0, mas2: 142.0 },
    { meses: 104, menos2: 118.5, menos1: 124.5, mediana: 130.5, mas1: 136.5, mas2: 142.5 },
    { meses: 105, menos2: 118.9, menos1: 125.0, mediana: 131.0, mas1: 137.0, mas2: 143.1 },
    { meses: 106, menos2: 119.4, menos1: 125.4, mediana: 131.5, mas1: 137.5, mas2: 143.6 },
    { meses: 107, menos2: 119.8, menos1: 125.9, mediana: 132.0, mas1: 138.1, mas2: 144.2 },

    { meses: 108, menos2: 120.3, menos1: 126.4, mediana: 132.5, mas1: 138.6, mas2: 144.7 },
    { meses: 109, menos2: 120.7, menos1: 126.9, mediana: 133.0, mas1: 139.1, mas2: 145.3 },
    { meses: 110, menos2: 121.2, menos1: 127.3, mediana: 133.5, mas1: 139.7, mas2: 145.8 },
    { meses: 111, menos2: 121.6, menos1: 127.8, mediana: 134.0, mas1: 140.2, mas2: 146.4 },
    { meses: 112, menos2: 122.1, menos1: 128.3, mediana: 134.5, mas1: 140.7, mas2: 146.9 },
    { meses: 113, menos2: 122.6, menos1: 128.8, mediana: 135.0, mas1: 141.3, mas2: 147.5 },
    { meses: 114, menos2: 123.0, menos1: 129.3, mediana: 135.5, mas1: 141.8, mas2: 148.1 },
    { meses: 115, menos2: 123.5, menos1: 129.8, mediana: 136.1, mas1: 142.3, mas2: 148.6 },
    { meses: 116, menos2: 124.0, menos1: 130.3, mediana: 136.6, mas1: 142.9, mas2: 149.2 },
    { meses: 117, menos2: 124.4, menos1: 130.8, mediana: 137.1, mas1: 143.4, mas2: 149.7 },
    { meses: 118, menos2: 124.9, menos1: 131.2, mediana: 137.6, mas1: 144.0, mas2: 150.3 },
    { meses: 119, menos2: 125.4, menos1: 131.7, mediana: 138.1, mas1: 144.5, mas2: 150.9 },

    { meses: 120, menos2: 125.8, menos1: 132.2, mediana: 138.6, mas1: 145.0, mas2: 151.4 },
    { meses: 121, menos2: 126.3, menos1: 132.7, mediana: 139.2, mas1: 145.6, mas2: 152.0 },
    { meses: 122, menos2: 126.8, menos1: 133.2, mediana: 139.7, mas1: 146.1, mas2: 152.6 },
    { meses: 123, menos2: 127.3, menos1: 133.7, mediana: 140.2, mas1: 146.7, mas2: 153.1 },
    { meses: 124, menos2: 127.8, menos1: 134.2, mediana: 140.7, mas1: 147.2, mas2: 153.7 },
    { meses: 125, menos2: 128.2, menos1: 134.8, mediana: 141.3, mas1: 147.8, mas2: 154.3 },
    { meses: 126, menos2: 128.7, menos1: 135.3, mediana: 141.8, mas1: 148.3, mas2: 154.8 },
    { meses: 127, menos2: 129.2, menos1: 135.8, mediana: 142.3, mas1: 148.9, mas2: 155.4 },
    { meses: 128, menos2: 129.7, menos1: 136.3, mediana: 142.9, mas1: 149.4, mas2: 156.0 },
    { meses: 129, menos2: 130.2, menos1: 136.8, mediana: 143.4, mas1: 150.0, mas2: 156.6 },
    { meses: 130, menos2: 130.7, menos1: 137.3, mediana: 143.9, mas1: 150.5, mas2: 157.1 },
    { meses: 131, menos2: 131.2, menos1: 137.8, mediana: 144.5, mas1: 151.1, mas2: 157.7 },

    { meses: 132, menos2: 131.7, menos1: 138.3, mediana: 145.0, mas1: 151.6, mas2: 158.3 },
    { meses: 133, menos2: 132.2, menos1: 138.9, mediana: 145.5, mas1: 152.2, mas2: 158.9 },
    { meses: 134, menos2: 132.7, menos1: 139.4, mediana: 146.1, mas1: 152.7, mas2: 159.4 },
    { meses: 135, menos2: 133.2, menos1: 139.9, mediana: 146.6, mas1: 153.3, mas2: 160.0 },
    { meses: 136, menos2: 133.7, menos1: 140.4, mediana: 147.1, mas1: 153.8, mas2: 160.6 },
    { meses: 137, menos2: 134.2, menos1: 140.9, mediana: 147.7, mas1: 154.4, mas2: 161.1 },
    { meses: 138, menos2: 134.7, menos1: 141.4, mediana: 148.2, mas1: 154.9, mas2: 161.7 },
    { meses: 139, menos2: 135.2, menos1: 141.9, mediana: 148.7, mas1: 155.5, mas2: 162.2 },
    { meses: 140, menos2: 135.7, menos1: 142.4, mediana: 149.2, mas1: 156.0, mas2: 162.8 },
    { meses: 141, menos2: 136.1, menos1: 142.9, mediana: 149.7, mas1: 156.5, mas2: 163.3 },
    { meses: 142, menos2: 136.6, menos1: 143.4, mediana: 150.2, mas1: 157.1, mas2: 163.9 },
    { meses: 143, menos2: 137.1, menos1: 143.9, mediana: 150.7, mas1: 157.6, mas2: 164.4 },

    { meses: 144, menos2: 137.6, menos1: 144.4, mediana: 151.2, mas1: 158.1, mas2: 164.9 },
    { meses: 145, menos2: 138.0, menos1: 144.9, mediana: 151.7, mas1: 158.6, mas2: 165.4 },
    { meses: 146, menos2: 138.5, menos1: 145.3, mediana: 152.2, mas1: 159.1, mas2: 165.9 },
    { meses: 147, menos2: 138.9, menos1: 145.8, mediana: 152.7, mas1: 159.5, mas2: 166.4 },
    { meses: 148, menos2: 139.3, menos1: 146.2, mediana: 153.1, mas1: 160.0, mas2: 166.9 },
    { meses: 149, menos2: 139.8, menos1: 146.7, mediana: 153.6, mas1: 160.5, mas2: 167.4 },
    { meses: 150, menos2: 140.2, menos1: 147.1, mediana: 154.0, mas1: 160.9, mas2: 167.8 },
    { meses: 151, menos2: 140.6, menos1: 147.5, mediana: 154.4, mas1: 161.3, mas2: 168.3 },
    { meses: 152, menos2: 141.0, menos1: 147.9, mediana: 154.8, mas1: 161.8, mas2: 168.7 },
    { meses: 153, menos2: 141.4, menos1: 148.3, mediana: 155.2, mas1: 162.2, mas2: 169.1 },
    { meses: 154, menos2: 141.8, menos1: 148.7, mediana: 155.6, mas1: 162.6, mas2: 169.5 },
    { meses: 155, menos2: 142.1, menos1: 149.1, mediana: 156.0, mas1: 162.9, mas2: 169.9 },

    { meses: 156, menos2: 142.5, menos1: 149.4, mediana: 156.4, mas1: 163.3, mas2: 170.3 },
    { meses: 157, menos2: 142.8, menos1: 149.8, mediana: 156.7, mas1: 163.7, mas2: 170.6 },
    { meses: 158, menos2: 143.2, menos1: 150.1, mediana: 157.1, mas1: 164.0, mas2: 171.0 },
    { meses: 159, menos2: 143.5, menos1: 150.4, mediana: 157.4, mas1: 164.3, mas2: 171.3 },
    { meses: 160, menos2: 143.8, menos1: 150.8, mediana: 157.7, mas1: 164.7, mas2: 171.6 },
    { meses: 161, menos2: 144.1, menos1: 151.1, mediana: 158.0, mas1: 165.0, mas2: 171.9 },
    { meses: 162, menos2: 144.4, menos1: 151.3, mediana: 158.3, mas1: 165.3, mas2: 172.2 },
    { meses: 163, menos2: 144.7, menos1: 151.6, mediana: 158.6, mas1: 165.5, mas2: 172.5 },
    { meses: 164, menos2: 144.9, menos1: 151.9, mediana: 158.8, mas1: 165.8, mas2: 172.7 },
    { meses: 165, menos2: 145.2, menos1: 152.1, mediana: 159.1, mas1: 166.0, mas2: 173.0 },
    { meses: 166, menos2: 145.4, menos1: 152.4, mediana: 159.3, mas1: 166.3, mas2: 173.2 },
    { meses: 167, menos2: 145.7, menos1: 152.6, mediana: 159.6, mas1: 166.5, mas2: 173.5 },

    { meses: 168, menos2: 145.9, menos1: 152.8, mediana: 159.8, mas1: 166.7, mas2: 173.7 },
    { meses: 169, menos2: 146.1, menos1: 153.1, mediana: 160.0, mas1: 166.9, mas2: 173.9 },
    { meses: 170, menos2: 146.3, menos1: 153.3, mediana: 160.2, mas1: 167.1, mas2: 174.1 },
    { meses: 171, menos2: 146.5, menos1: 153.5, mediana: 160.4, mas1: 167.3, mas2: 174.2 },
    { meses: 172, menos2: 146.7, menos1: 153.6, mediana: 160.6, mas1: 167.5, mas2: 174.4 },
    { meses: 173, menos2: 146.9, menos1: 153.8, mediana: 160.7, mas1: 167.7, mas2: 174.6 },
    { meses: 174, menos2: 147.1, menos1: 154.0, mediana: 160.9, mas1: 167.8, mas2: 174.7 },
    { meses: 175, menos2: 147.2, menos1: 154.1, mediana: 161.0, mas1: 168.0, mas2: 174.9 },
    { meses: 176, menos2: 147.4, menos1: 154.3, mediana: 161.2, mas1: 168.1, mas2: 175.0 },
    { meses: 177, menos2: 147.5, menos1: 154.4, mediana: 161.3, mas1: 168.2, mas2: 175.1 },
    { meses: 178, menos2: 147.7, menos1: 154.5, mediana: 161.4, mas1: 168.3, mas2: 175.2 },
    { meses: 179, menos2: 147.8, menos1: 154.7, mediana: 161.6, mas1: 168.4, mas2: 175.3 },

    { meses: 180, menos2: 147.9, menos1: 154.8, mediana: 161.7, mas1: 168.5, mas2: 175.4 },
    { meses: 181, menos2: 148.0, menos1: 154.9, mediana: 161.8, mas1: 168.6, mas2: 175.5 },
    { meses: 182, menos2: 148.1, menos1: 155.0, mediana: 161.9, mas1: 168.7, mas2: 175.6 },
    { meses: 183, menos2: 148.2, menos1: 155.1, mediana: 162.0, mas1: 168.8, mas2: 175.7 },
    { meses: 184, menos2: 148.3, menos1: 155.2, mediana: 162.0, mas1: 168.9, mas2: 175.7 },
    { meses: 185, menos2: 148.4, menos1: 155.3, mediana: 162.1, mas1: 169.0, mas2: 175.8 },
    { meses: 186, menos2: 148.5, menos1: 155.4, mediana: 162.2, mas1: 169.0, mas2: 175.9 },
    { meses: 187, menos2: 148.6, menos1: 155.4, mediana: 162.3, mas1: 169.1, mas2: 175.9 },
    { meses: 188, menos2: 148.7, menos1: 155.5, mediana: 162.3, mas1: 169.1, mas2: 176.0 },
    { meses: 189, menos2: 148.7, menos1: 155.6, mediana: 162.4, mas1: 169.2, mas2: 176.0 },
    { meses: 190, menos2: 148.8, menos1: 155.6, mediana: 162.4, mas1: 169.2, mas2: 176.0 },
    { meses: 191, menos2: 148.9, menos1: 155.7, mediana: 162.5, mas1: 169.3, mas2: 176.1 },

    { meses: 192, menos2: 148.9, menos1: 155.7, mediana: 162.5, mas1: 169.3, mas2: 176.1 },
    { meses: 193, menos2: 149.0, menos1: 155.8, mediana: 162.6, mas1: 169.3, mas2: 176.1 },
    { meses: 194, menos2: 149.1, menos1: 155.8, mediana: 162.6, mas1: 169.4, mas2: 176.1 },
    { meses: 195, menos2: 149.1, menos1: 155.9, mediana: 162.6, mas1: 169.4, mas2: 176.2 },
    { meses: 196, menos2: 149.2, menos1: 155.9, mediana: 162.7, mas1: 169.4, mas2: 176.2 },
    { meses: 197, menos2: 149.2, menos1: 155.9, mediana: 162.7, mas1: 169.4, mas2: 176.2 },
    { meses: 198, menos2: 149.2, menos1: 156.0, mediana: 162.7, mas1: 169.5, mas2: 176.2 },
    { meses: 199, menos2: 149.3, menos1: 156.0, mediana: 162.7, mas1: 169.5, mas2: 176.2 },
    { meses: 200, menos2: 149.3, menos1: 156.0, mediana: 162.8, mas1: 169.5, mas2: 176.2 },
    { meses: 201, menos2: 149.4, menos1: 156.1, mediana: 162.8, mas1: 169.5, mas2: 176.2 },
    { meses: 202, menos2: 149.4, menos1: 156.1, mediana: 162.8, mas1: 169.5, mas2: 176.2 },
    { meses: 203, menos2: 149.4, menos1: 156.1, mediana: 162.8, mas1: 169.5, mas2: 176.2 },

    { meses: 204, menos2: 149.5, menos1: 156.2, mediana: 162.9, mas1: 169.5, mas2: 176.2 },
    { meses: 205, menos2: 149.5, menos1: 156.2, mediana: 162.9, mas1: 169.6, mas2: 176.2 },
    { meses: 206, menos2: 149.5, menos1: 156.2, mediana: 162.9, mas1: 169.6, mas2: 176.2 },
    { meses: 207, menos2: 149.6, menos1: 156.2, mediana: 162.9, mas1: 169.6, mas2: 176.3 },
    { meses: 208, menos2: 149.6, menos1: 156.3, mediana: 162.9, mas1: 169.6, mas2: 176.3 },
    { meses: 209, menos2: 149.6, menos1: 156.3, mediana: 162.9, mas1: 169.6, mas2: 176.3 },
    { meses: 210, menos2: 149.7, menos1: 156.3, mediana: 163.0, mas1: 169.6, mas2: 176.3 },
    { meses: 211, menos2: 149.7, menos1: 156.3, mediana: 163.0, mas1: 169.6, mas2: 176.3 },
    { meses: 212, menos2: 149.7, menos1: 156.4, mediana: 163.0, mas1: 169.6, mas2: 176.3 },
    { meses: 213, menos2: 149.8, menos1: 156.4, mediana: 163.0, mas1: 169.6, mas2: 176.3 },
    { meses: 214, menos2: 149.8, menos1: 156.4, mediana: 163.0, mas1: 169.7, mas2: 176.3 },
    { meses: 215, menos2: 149.8, menos1: 156.4, mediana: 163.0, mas1: 169.7, mas2: 176.3 },

    { meses: 216, menos2: 149.8, menos1: 156.5, mediana: 163.1, mas1: 169.7, mas2: 176.3 },
    { meses: 217, menos2: 149.9, menos1: 156.5, mediana: 163.1, mas1: 169.7, mas2: 176.3 },
    { meses: 218, menos2: 149.9, menos1: 156.5, mediana: 163.1, mas1: 169.7, mas2: 176.3 },
    { meses: 219, menos2: 149.9, menos1: 156.5, mediana: 163.1, mas1: 169.7, mas2: 176.3 },
    { meses: 220, menos2: 149.9, menos1: 156.5, mediana: 163.1, mas1: 169.7, mas2: 176.3 },
    { meses: 221, menos2: 150.0, menos1: 156.5, mediana: 163.1, mas1: 169.7, mas2: 176.3 },
    { meses: 222, menos2: 150.0, menos1: 156.6, mediana: 163.1, mas1: 169.7, mas2: 176.3 },
    { meses: 223, menos2: 150.0, menos1: 156.6, mediana: 163.1, mas1: 169.7, mas2: 176.3 },
    { meses: 224, menos2: 150.0, menos1: 156.6, mediana: 163.1, mas1: 169.7, mas2: 176.3 },
    { meses: 225, menos2: 150.0, menos1: 156.6, mediana: 163.1, mas1: 169.7, mas2: 176.3 },
    { meses: 226, menos2: 150.0, menos1: 156.6, mediana: 163.2, mas1: 169.7, mas2: 176.3 },
    { meses: 227, menos2: 150.1, menos1: 156.6, mediana: 163.2, mas1: 169.7, mas2: 176.2 },
    { meses: 228, menos2: 150.1, menos1: 156.6, mediana: 163.2, mas1: 169.7, mas2: 176.2 }

];

// =========================
// IMC/E NIÑOS 5 A 19 AÑOS
// Índice de masa corporal para la edad
// Referencia OMS 2007
// IMC en kg/m²
// Incluye +3 DE, NO -3 DE
// =========================

const tablaIMCE_Ninos_5a19 = [

    { meses: 61,  menos2: 13.0, menos1: 14.1, mediana: 15.3, mas1: 16.6, mas2: 18.3, mas3: 20.2 },
    { meses: 62,  menos2: 13.0, menos1: 14.1, mediana: 15.3, mas1: 16.6, mas2: 18.3, mas3: 20.2 },
    { meses: 63,  menos2: 13.0, menos1: 14.1, mediana: 15.3, mas1: 16.7, mas2: 18.3, mas3: 20.2 },
    { meses: 64,  menos2: 13.0, menos1: 14.1, mediana: 15.3, mas1: 16.7, mas2: 18.3, mas3: 20.3 },
    { meses: 65,  menos2: 13.0, menos1: 14.1, mediana: 15.3, mas1: 16.7, mas2: 18.3, mas3: 20.3 },
    { meses: 66,  menos2: 13.0, menos1: 14.1, mediana: 15.3, mas1: 16.7, mas2: 18.4, mas3: 20.4 },
    { meses: 67,  menos2: 13.0, menos1: 14.1, mediana: 15.3, mas1: 16.7, mas2: 18.4, mas3: 20.4 },
    { meses: 68,  menos2: 13.0, menos1: 14.1, mediana: 15.3, mas1: 16.7, mas2: 18.4, mas3: 20.5 },
    { meses: 69,  menos2: 13.0, menos1: 14.1, mediana: 15.3, mas1: 16.7, mas2: 18.4, mas3: 20.5 },
    { meses: 70,  menos2: 13.0, menos1: 14.1, mediana: 15.3, mas1: 16.7, mas2: 18.5, mas3: 20.6 },
    { meses: 71,  menos2: 13.0, menos1: 14.1, mediana: 15.3, mas1: 16.7, mas2: 18.5, mas3: 20.6 },

    { meses: 72,  menos2: 13.0, menos1: 14.1, mediana: 15.3, mas1: 16.8, mas2: 18.5, mas3: 20.7 },
    { meses: 73,  menos2: 13.0, menos1: 14.1, mediana: 15.3, mas1: 16.8, mas2: 18.6, mas3: 20.8 },
    { meses: 74,  menos2: 13.1, menos1: 14.1, mediana: 15.3, mas1: 16.8, mas2: 18.6, mas3: 20.8 },
    { meses: 75,  menos2: 13.1, menos1: 14.1, mediana: 15.3, mas1: 16.8, mas2: 18.6, mas3: 20.9 },
    { meses: 76,  menos2: 13.1, menos1: 14.1, mediana: 15.4, mas1: 16.8, mas2: 18.7, mas3: 21.0 },
    { meses: 77,  menos2: 13.1, menos1: 14.1, mediana: 15.4, mas1: 16.9, mas2: 18.7, mas3: 21.0 },
    { meses: 78,  menos2: 13.1, menos1: 14.1, mediana: 15.4, mas1: 16.9, mas2: 18.7, mas3: 21.1 },
    { meses: 79,  menos2: 13.1, menos1: 14.1, mediana: 15.4, mas1: 16.9, mas2: 18.8, mas3: 21.2 },
    { meses: 80,  menos2: 13.1, menos1: 14.2, mediana: 15.4, mas1: 16.9, mas2: 18.8, mas3: 21.3 },
    { meses: 81,  menos2: 13.1, menos1: 14.2, mediana: 15.4, mas1: 17.0, mas2: 18.9, mas3: 21.3 },
    { meses: 82,  menos2: 13.1, menos1: 14.2, mediana: 15.4, mas1: 17.0, mas2: 18.9, mas3: 21.4 },
    { meses: 83,  menos2: 13.1, menos1: 14.2, mediana: 15.5, mas1: 17.0, mas2: 19.0, mas3: 21.5 },

    { meses: 84,  menos2: 13.1, menos1: 14.2, mediana: 15.5, mas1: 17.0, mas2: 19.0, mas3: 21.6 },
    { meses: 85,  menos2: 13.2, menos1: 14.2, mediana: 15.5, mas1: 17.1, mas2: 19.1, mas3: 21.7 },
    { meses: 86,  menos2: 13.2, menos1: 14.2, mediana: 15.5, mas1: 17.1, mas2: 19.1, mas3: 21.8 },
    { meses: 87,  menos2: 13.2, menos1: 14.3, mediana: 15.5, mas1: 17.1, mas2: 19.2, mas3: 21.9 },
    { meses: 88,  menos2: 13.2, menos1: 14.3, mediana: 15.6, mas1: 17.2, mas2: 19.2, mas3: 22.0 },
    { meses: 89,  menos2: 13.2, menos1: 14.3, mediana: 15.6, mas1: 17.2, mas2: 19.3, mas3: 22.0 },
    { meses: 90,  menos2: 13.2, menos1: 14.3, mediana: 15.6, mas1: 17.2, mas2: 19.3, mas3: 22.1 },
    { meses: 91,  menos2: 13.2, menos1: 14.3, mediana: 15.6, mas1: 17.3, mas2: 19.4, mas3: 22.2 },
    { meses: 92,  menos2: 13.2, menos1: 14.3, mediana: 15.6, mas1: 17.3, mas2: 19.4, mas3: 22.4 },
    { meses: 93,  menos2: 13.3, menos1: 14.3, mediana: 15.7, mas1: 17.3, mas2: 19.5, mas3: 22.5 },
    { meses: 94,  menos2: 13.3, menos1: 14.4, mediana: 15.7, mas1: 17.4, mas2: 19.6, mas3: 22.6 },
    { meses: 95,  menos2: 13.3, menos1: 14.4, mediana: 15.7, mas1: 17.4, mas2: 19.6, mas3: 22.7 },

    { meses: 96,  menos2: 13.3, menos1: 14.4, mediana: 15.7, mas1: 17.4, mas2: 19.7, mas3: 22.8 },
    { meses: 97,  menos2: 13.3, menos1: 14.4, mediana: 15.8, mas1: 17.5, mas2: 19.7, mas3: 22.9 },
    { meses: 98,  menos2: 13.3, menos1: 14.4, mediana: 15.8, mas1: 17.5, mas2: 19.8, mas3: 23.0 },
    { meses: 99,  menos2: 13.3, menos1: 14.4, mediana: 15.8, mas1: 17.5, mas2: 19.9, mas3: 23.1 },
    { meses: 100, menos2: 13.4, menos1: 14.5, mediana: 15.8, mas1: 17.6, mas2: 19.9, mas3: 23.3 },
    { meses: 101, menos2: 13.4, menos1: 14.5, mediana: 15.9, mas1: 17.6, mas2: 20.0, mas3: 23.4 },
    { meses: 102, menos2: 13.4, menos1: 14.5, mediana: 15.9, mas1: 17.7, mas2: 20.1, mas3: 23.5 },
    { meses: 103, menos2: 13.4, menos1: 14.5, mediana: 15.9, mas1: 17.7, mas2: 20.1, mas3: 23.6 },
    { meses: 104, menos2: 13.4, menos1: 14.5, mediana: 15.9, mas1: 17.7, mas2: 20.2, mas3: 23.8 },
    { meses: 105, menos2: 13.4, menos1: 14.6, mediana: 16.0, mas1: 17.8, mas2: 20.3, mas3: 23.9 },
    { meses: 106, menos2: 13.5, menos1: 14.6, mediana: 16.0, mas1: 17.8, mas2: 20.3, mas3: 24.0 },
    { meses: 107, menos2: 13.5, menos1: 14.6, mediana: 16.0, mas1: 17.9, mas2: 20.4, mas3: 24.2 },

    { meses: 108, menos2: 13.5, menos1: 14.6, mediana: 16.0, mas1: 17.9, mas2: 20.5, mas3: 24.3 },
    { meses: 109, menos2: 13.5, menos1: 14.6, mediana: 16.1, mas1: 18.0, mas2: 20.5, mas3: 24.4 },
    { meses: 110, menos2: 13.5, menos1: 14.7, mediana: 16.1, mas1: 18.0, mas2: 20.6, mas3: 24.6 },
    { meses: 111, menos2: 13.5, menos1: 14.7, mediana: 16.1, mas1: 18.0, mas2: 20.7, mas3: 24.7 },
    { meses: 112, menos2: 13.6, menos1: 14.7, mediana: 16.2, mas1: 18.1, mas2: 20.8, mas3: 24.9 },
    { meses: 113, menos2: 13.6, menos1: 14.7, mediana: 16.2, mas1: 18.1, mas2: 20.8, mas3: 25.0 },
    { meses: 114, menos2: 13.6, menos1: 14.8, mediana: 16.2, mas1: 18.2, mas2: 20.9, mas3: 25.1 },
    { meses: 115, menos2: 13.6, menos1: 14.8, mediana: 16.3, mas1: 18.2, mas2: 21.0, mas3: 25.3 },
    { meses: 116, menos2: 13.6, menos1: 14.8, mediana: 16.3, mas1: 18.3, mas2: 21.1, mas3: 25.5 },
    { meses: 117, menos2: 13.7, menos1: 14.8, mediana: 16.3, mas1: 18.3, mas2: 21.2, mas3: 25.6 },
    { meses: 118, menos2: 13.7, menos1: 14.9, mediana: 16.4, mas1: 18.4, mas2: 21.2, mas3: 25.8 },
    { meses: 119, menos2: 13.7, menos1: 14.9, mediana: 16.4, mas1: 18.4, mas2: 21.3, mas3: 25.9 },

    { meses: 120, menos2: 13.7, menos1: 14.9, mediana: 16.4, mas1: 18.5, mas2: 21.4, mas3: 26.1 },
    { meses: 121, menos2: 13.8, menos1: 15.0, mediana: 16.5, mas1: 18.5, mas2: 21.5, mas3: 26.2 },
    { meses: 122, menos2: 13.8, menos1: 15.0, mediana: 16.5, mas1: 18.6, mas2: 21.6, mas3: 26.4 },
    { meses: 123, menos2: 13.8, menos1: 15.0, mediana: 16.6, mas1: 18.6, mas2: 21.7, mas3: 26.6 },
    { meses: 124, menos2: 13.8, menos1: 15.0, mediana: 16.6, mas1: 18.7, mas2: 21.7, mas3: 26.7 },
    { meses: 125, menos2: 13.9, menos1: 15.1, mediana: 16.6, mas1: 18.8, mas2: 21.8, mas3: 26.9 },
    { meses: 126, menos2: 13.9, menos1: 15.1, mediana: 16.7, mas1: 18.8, mas2: 21.9, mas3: 27.0 },
    { meses: 127, menos2: 13.9, menos1: 15.1, mediana: 16.7, mas1: 18.9, mas2: 22.0, mas3: 27.2 },
    { meses: 128, menos2: 13.9, menos1: 15.2, mediana: 16.8, mas1: 18.9, mas2: 22.1, mas3: 27.4 },
    { meses: 129, menos2: 14.0, menos1: 15.2, mediana: 16.8, mas1: 19.0, mas2: 22.2, mas3: 27.5 },
    { meses: 130, menos2: 14.0, menos1: 15.2, mediana: 16.9, mas1: 19.0, mas2: 22.3, mas3: 27.7 },
    { meses: 131, menos2: 14.0, menos1: 15.3, mediana: 16.9, mas1: 19.1, mas2: 22.4, mas3: 27.9 },

    { meses: 132, menos2: 14.1, menos1: 15.3, mediana: 16.9, mas1: 19.2, mas2: 22.5, mas3: 28.0 },
    { meses: 133, menos2: 14.1, menos1: 15.3, mediana: 17.0, mas1: 19.2, mas2: 22.5, mas3: 28.2 },
    { meses: 134, menos2: 14.1, menos1: 15.4, mediana: 17.0, mas1: 19.3, mas2: 22.6, mas3: 28.4 },
    { meses: 135, menos2: 14.1, menos1: 15.4, mediana: 17.1, mas1: 19.3, mas2: 22.7, mas3: 28.5 },
    { meses: 136, menos2: 14.2, menos1: 15.5, mediana: 17.1, mas1: 19.4, mas2: 22.8, mas3: 28.7 },
    { meses: 137, menos2: 14.2, menos1: 15.5, mediana: 17.2, mas1: 19.5, mas2: 22.9, mas3: 28.8 },
    { meses: 138, menos2: 14.2, menos1: 15.5, mediana: 17.2, mas1: 19.5, mas2: 23.0, mas3: 29.0 },
    { meses: 139, menos2: 14.3, menos1: 15.6, mediana: 17.3, mas1: 19.6, mas2: 23.1, mas3: 29.2 },
    { meses: 140, menos2: 14.3, menos1: 15.6, mediana: 17.3, mas1: 19.7, mas2: 23.2, mas3: 29.3 },
    { meses: 141, menos2: 14.3, menos1: 15.7, mediana: 17.4, mas1: 19.7, mas2: 23.3, mas3: 29.5 },
    { meses: 142, menos2: 14.4, menos1: 15.7, mediana: 17.4, mas1: 19.8, mas2: 23.4, mas3: 29.6 },
    { meses: 143, menos2: 14.4, menos1: 15.7, mediana: 17.5, mas1: 19.9, mas2: 23.5, mas3: 29.8 },

    { meses: 144, menos2: 14.5, menos1: 15.8, mediana: 17.5, mas1: 19.9, mas2: 23.6, mas3: 30.0 },
    { meses: 145, menos2: 14.5, menos1: 15.8, mediana: 17.6, mas1: 20.0, mas2: 23.7, mas3: 30.1 },
    { meses: 146, menos2: 14.5, menos1: 15.9, mediana: 17.6, mas1: 20.1, mas2: 23.8, mas3: 30.3 },
    { meses: 147, menos2: 14.6, menos1: 15.9, mediana: 17.7, mas1: 20.2, mas2: 23.9, mas3: 30.4 },
    { meses: 148, menos2: 14.6, menos1: 16.0, mediana: 17.8, mas1: 20.2, mas2: 24.0, mas3: 30.6 },
    { meses: 149, menos2: 14.6, menos1: 16.0, mediana: 17.8, mas1: 20.3, mas2: 24.1, mas3: 30.7 },
    { meses: 150, menos2: 14.7, menos1: 16.1, mediana: 17.9, mas1: 20.4, mas2: 24.2, mas3: 30.9 },
    { meses: 151, menos2: 14.7, menos1: 16.1, mediana: 17.9, mas1: 20.4, mas2: 24.3, mas3: 31.0 },
    { meses: 152, menos2: 14.8, menos1: 16.2, mediana: 18.0, mas1: 20.5, mas2: 24.4, mas3: 31.1 },
    { meses: 153, menos2: 14.8, menos1: 16.2, mediana: 18.0, mas1: 20.6, mas2: 24.5, mas3: 31.3 },
    { meses: 154, menos2: 14.8, menos1: 16.3, mediana: 18.1, mas1: 20.7, mas2: 24.6, mas3: 31.4 },
    { meses: 155, menos2: 14.9, menos1: 16.3, mediana: 18.2, mas1: 20.8, mas2: 24.7, mas3: 31.6 },

    { meses: 156, menos2: 14.9, menos1: 16.4, mediana: 18.2, mas1: 20.8, mas2: 24.8, mas3: 31.7 },
    { meses: 157, menos2: 15.0, menos1: 16.4, mediana: 18.3, mas1: 20.9, mas2: 24.9, mas3: 31.8 },
    { meses: 158, menos2: 15.0, menos1: 16.5, mediana: 18.4, mas1: 21.0, mas2: 25.0, mas3: 31.9 },
    { meses: 159, menos2: 15.1, menos1: 16.5, mediana: 18.4, mas1: 21.1, mas2: 25.1, mas3: 32.1 },
    { meses: 160, menos2: 15.1, menos1: 16.6, mediana: 18.5, mas1: 21.1, mas2: 25.2, mas3: 32.2 },
    { meses: 161, menos2: 15.2, menos1: 16.6, mediana: 18.6, mas1: 21.2, mas2: 25.2, mas3: 32.3 },
    { meses: 162, menos2: 15.2, menos1: 16.7, mediana: 18.6, mas1: 21.3, mas2: 25.3, mas3: 32.4 },
    { meses: 163, menos2: 15.2, menos1: 16.7, mediana: 18.7, mas1: 21.4, mas2: 25.4, mas3: 32.6 },
    { meses: 164, menos2: 15.3, menos1: 16.8, mediana: 18.7, mas1: 21.5, mas2: 25.5, mas3: 32.7 },
    { meses: 165, menos2: 15.3, menos1: 16.8, mediana: 18.8, mas1: 21.5, mas2: 25.6, mas3: 32.8 },
    { meses: 166, menos2: 15.4, menos1: 16.9, mediana: 18.9, mas1: 21.6, mas2: 25.7, mas3: 32.9 },
    { meses: 167, menos2: 15.4, menos1: 17.0, mediana: 18.9, mas1: 21.7, mas2: 25.8, mas3: 33.0 },

    { meses: 168, menos2: 15.5, menos1: 17.0, mediana: 19.0, mas1: 21.8, mas2: 25.9, mas3: 33.1 },
    { meses: 169, menos2: 15.5, menos1: 17.1, mediana: 19.1, mas1: 21.8, mas2: 26.0, mas3: 33.2 },
    { meses: 170, menos2: 15.6, menos1: 17.1, mediana: 19.1, mas1: 21.9, mas2: 26.1, mas3: 33.3 },
    { meses: 171, menos2: 15.6, menos1: 17.2, mediana: 19.2, mas1: 22.0, mas2: 26.2, mas3: 33.4 },
    { meses: 172, menos2: 15.7, menos1: 17.2, mediana: 19.3, mas1: 22.1, mas2: 26.3, mas3: 33.5 },
    { meses: 173, menos2: 15.7, menos1: 17.3, mediana: 19.3, mas1: 22.2, mas2: 26.4, mas3: 33.5 },
    { meses: 174, menos2: 15.7, menos1: 17.3, mediana: 19.4, mas1: 22.2, mas2: 26.5, mas3: 33.6 },
    { meses: 175, menos2: 15.8, menos1: 17.4, mediana: 19.5, mas1: 22.3, mas2: 26.5, mas3: 33.7 },
    { meses: 176, menos2: 15.8, menos1: 17.4, mediana: 19.5, mas1: 22.4, mas2: 26.6, mas3: 33.8 },
    { meses: 177, menos2: 15.9, menos1: 17.5, mediana: 19.6, mas1: 22.5, mas2: 26.7, mas3: 33.9 },
    { meses: 178, menos2: 15.9, menos1: 17.5, mediana: 19.6, mas1: 22.5, mas2: 26.8, mas3: 33.9 },
    { meses: 179, menos2: 16.0, menos1: 17.6, mediana: 19.7, mas1: 22.6, mas2: 26.9, mas3: 34.0 },

    { meses: 180, menos2: 16.0, menos1: 17.6, mediana: 19.8, mas1: 22.7, mas2: 27.0, mas3: 34.1 },
    { meses: 181, menos2: 16.1, menos1: 17.7, mediana: 19.8, mas1: 22.8, mas2: 27.1, mas3: 34.1 },
    { meses: 182, menos2: 16.1, menos1: 17.8, mediana: 19.9, mas1: 22.8, mas2: 27.1, mas3: 34.2 },
    { meses: 183, menos2: 16.1, menos1: 17.8, mediana: 20.0, mas1: 22.9, mas2: 27.2, mas3: 34.3 },
    { meses: 184, menos2: 16.2, menos1: 17.9, mediana: 20.0, mas1: 23.0, mas2: 27.3, mas3: 34.3 },
    { meses: 185, menos2: 16.2, menos1: 17.9, mediana: 20.1, mas1: 23.0, mas2: 27.4, mas3: 34.4 },
    { meses: 186, menos2: 16.3, menos1: 18.0, mediana: 20.1, mas1: 23.1, mas2: 27.4, mas3: 34.5 },
    { meses: 187, menos2: 16.3, menos1: 18.0, mediana: 20.2, mas1: 23.2, mas2: 27.5, mas3: 34.5 },
    { meses: 188, menos2: 16.3, menos1: 18.1, mediana: 20.3, mas1: 23.3, mas2: 27.6, mas3: 34.6 },
    { meses: 189, menos2: 16.4, menos1: 18.1, mediana: 20.3, mas1: 23.3, mas2: 27.7, mas3: 34.6 },
    { meses: 190, menos2: 16.4, menos1: 18.2, mediana: 20.4, mas1: 23.4, mas2: 27.7, mas3: 34.7 },
    { meses: 191, menos2: 16.5, menos1: 18.2, mediana: 20.4, mas1: 23.5, mas2: 27.8, mas3: 34.7 },

    { meses: 192, menos2: 16.5, menos1: 18.2, mediana: 20.5, mas1: 23.5, mas2: 27.9, mas3: 34.8 },
    { meses: 193, menos2: 16.5, menos1: 18.3, mediana: 20.6, mas1: 23.6, mas2: 27.9, mas3: 34.8 },
    { meses: 194, menos2: 16.6, menos1: 18.3, mediana: 20.6, mas1: 23.7, mas2: 28.0, mas3: 34.8 },
    { meses: 195, menos2: 16.6, menos1: 18.4, mediana: 20.7, mas1: 23.7, mas2: 28.1, mas3: 34.9 },
    { meses: 196, menos2: 16.7, menos1: 18.4, mediana: 20.7, mas1: 23.8, mas2: 28.1, mas3: 34.9 },
    { meses: 197, menos2: 16.7, menos1: 18.5, mediana: 20.8, mas1: 23.8, mas2: 28.2, mas3: 35.0 },
    { meses: 198, menos2: 16.7, menos1: 18.5, mediana: 20.8, mas1: 23.9, mas2: 28.3, mas3: 35.0 },
    { meses: 199, menos2: 16.8, menos1: 18.6, mediana: 20.9, mas1: 24.0, mas2: 28.3, mas3: 35.0 },
    { meses: 200, menos2: 16.8, menos1: 18.6, mediana: 20.9, mas1: 24.0, mas2: 28.4, mas3: 35.1 },
    { meses: 201, menos2: 16.8, menos1: 18.7, mediana: 21.0, mas1: 24.1, mas2: 28.5, mas3: 35.1 },
    { meses: 202, menos2: 16.9, menos1: 18.7, mediana: 21.0, mas1: 24.2, mas2: 28.5, mas3: 35.1 },
    { meses: 203, menos2: 16.9, menos1: 18.7, mediana: 21.1, mas1: 24.2, mas2: 28.6, mas3: 35.2 },

    { meses: 204, menos2: 16.9, menos1: 18.8, mediana: 21.1, mas1: 24.3, mas2: 28.6, mas3: 35.2 },
    { meses: 205, menos2: 17.0, menos1: 18.8, mediana: 21.2, mas1: 24.3, mas2: 28.7, mas3: 35.2 },
    { meses: 206, menos2: 17.0, menos1: 18.9, mediana: 21.2, mas1: 24.4, mas2: 28.7, mas3: 35.2 },
    { meses: 207, menos2: 17.0, menos1: 18.9, mediana: 21.3, mas1: 24.4, mas2: 28.8, mas3: 35.3 },
    { meses: 208, menos2: 17.1, menos1: 18.9, mediana: 21.3, mas1: 24.5, mas2: 28.9, mas3: 35.3 },
    { meses: 209, menos2: 17.1, menos1: 19.0, mediana: 21.4, mas1: 24.5, mas2: 28.9, mas3: 35.3 },
    { meses: 210, menos2: 17.1, menos1: 19.0, mediana: 21.4, mas1: 24.6, mas2: 29.0, mas3: 35.3 },
    { meses: 211, menos2: 17.1, menos1: 19.1, mediana: 21.5, mas1: 24.7, mas2: 29.0, mas3: 35.4 },
    { meses: 212, menos2: 17.2, menos1: 19.1, mediana: 21.5, mas1: 24.7, mas2: 29.1, mas3: 35.4 },
    { meses: 213, menos2: 17.2, menos1: 19.1, mediana: 21.6, mas1: 24.8, mas2: 29.1, mas3: 35.4 },
    { meses: 214, menos2: 17.2, menos1: 19.2, mediana: 21.6, mas1: 24.8, mas2: 29.2, mas3: 35.4 },
    { meses: 215, menos2: 17.3, menos1: 19.2, mediana: 21.7, mas1: 24.9, mas2: 29.2, mas3: 35.4 },

    { meses: 216, menos2: 17.3, menos1: 19.2, mediana: 21.7, mas1: 24.9, mas2: 29.2, mas3: 35.4 },
    { meses: 217, menos2: 17.3, menos1: 19.3, mediana: 21.8, mas1: 25.0, mas2: 29.3, mas3: 35.4 },
    { meses: 218, menos2: 17.3, menos1: 19.3, mediana: 21.8, mas1: 25.0, mas2: 29.3, mas3: 35.5 },
    { meses: 219, menos2: 17.4, menos1: 19.3, mediana: 21.8, mas1: 25.1, mas2: 29.4, mas3: 35.5 },
    { meses: 220, menos2: 17.4, menos1: 19.4, mediana: 21.9, mas1: 25.1, mas2: 29.4, mas3: 35.5 },
    { meses: 221, menos2: 17.4, menos1: 19.4, mediana: 21.9, mas1: 25.1, mas2: 29.5, mas3: 35.5 },
    { meses: 222, menos2: 17.4, menos1: 19.4, mediana: 22.0, mas1: 25.2, mas2: 29.5, mas3: 35.5 },
    { meses: 223, menos2: 17.5, menos1: 19.5, mediana: 22.0, mas1: 25.2, mas2: 29.5, mas3: 35.5 },
    { meses: 224, menos2: 17.5, menos1: 19.5, mediana: 22.0, mas1: 25.3, mas2: 29.6, mas3: 35.5 },
    { meses: 225, menos2: 17.5, menos1: 19.5, mediana: 22.1, mas1: 25.3, mas2: 29.6, mas3: 35.5 },
    { meses: 226, menos2: 17.5, menos1: 19.6, mediana: 22.1, mas1: 25.4, mas2: 29.6, mas3: 35.5 },
    { meses: 227, menos2: 17.5, menos1: 19.6, mediana: 22.2, mas1: 25.4, mas2: 29.7, mas3: 35.5 },
    { meses: 228, menos2: 17.6, menos1: 19.6, mediana: 22.2, mas1: 25.4, mas2: 29.7, mas3: 35.5 }

];

// =========================
// IMC/E NIÑAS 5 A 19 AÑOS
// Índice de masa corporal para la edad
// Referencia OMS 2007
// IMC en kg/m²
// Incluye +3 DE, NO -3 DE
// =========================

const tablaIMCE_Ninas_5a19 = [

    { meses: 61,  menos2: 12.7, menos1: 13.9, mediana: 15.2, mas1: 16.9, mas2: 18.9, mas3: 21.3 },
    { meses: 62,  menos2: 12.7, menos1: 13.9, mediana: 15.2, mas1: 16.9, mas2: 18.9, mas3: 21.4 },
    { meses: 63,  menos2: 12.7, menos1: 13.9, mediana: 15.2, mas1: 16.9, mas2: 18.9, mas3: 21.5 },
    { meses: 64,  menos2: 12.7, menos1: 13.9, mediana: 15.2, mas1: 16.9, mas2: 18.9, mas3: 21.5 },
    { meses: 65,  menos2: 12.7, menos1: 13.9, mediana: 15.2, mas1: 16.9, mas2: 19.0, mas3: 21.6 },
    { meses: 66,  menos2: 12.7, menos1: 13.9, mediana: 15.2, mas1: 16.9, mas2: 19.0, mas3: 21.7 },
    { meses: 67,  menos2: 12.7, menos1: 13.9, mediana: 15.2, mas1: 16.9, mas2: 19.0, mas3: 21.7 },
    { meses: 68,  menos2: 12.7, menos1: 13.9, mediana: 15.3, mas1: 17.0, mas2: 19.1, mas3: 21.8 },
    { meses: 69,  menos2: 12.7, menos1: 13.9, mediana: 15.3, mas1: 17.0, mas2: 19.1, mas3: 21.9 },
    { meses: 70,  menos2: 12.7, menos1: 13.9, mediana: 15.3, mas1: 17.0, mas2: 19.1, mas3: 22.0 },
    { meses: 71,  menos2: 12.7, menos1: 13.9, mediana: 15.3, mas1: 17.0, mas2: 19.2, mas3: 22.1 },

    { meses: 72,  menos2: 12.7, menos1: 13.9, mediana: 15.3, mas1: 17.0, mas2: 19.2, mas3: 22.1 },
    { meses: 73,  menos2: 12.7, menos1: 13.9, mediana: 15.3, mas1: 17.0, mas2: 19.3, mas3: 22.2 },
    { meses: 74,  menos2: 12.7, menos1: 13.9, mediana: 15.3, mas1: 17.0, mas2: 19.3, mas3: 22.3 },
    { meses: 75,  menos2: 12.7, menos1: 13.9, mediana: 15.3, mas1: 17.1, mas2: 19.3, mas3: 22.4 },
    { meses: 76,  menos2: 12.7, menos1: 13.9, mediana: 15.3, mas1: 17.1, mas2: 19.4, mas3: 22.5 },
    { meses: 77,  menos2: 12.7, menos1: 13.9, mediana: 15.3, mas1: 17.1, mas2: 19.4, mas3: 22.6 },
    { meses: 78,  menos2: 12.7, menos1: 13.9, mediana: 15.3, mas1: 17.1, mas2: 19.5, mas3: 22.7 },
    { meses: 79,  menos2: 12.7, menos1: 13.9, mediana: 15.3, mas1: 17.2, mas2: 19.5, mas3: 22.8 },
    { meses: 80,  menos2: 12.7, menos1: 13.9, mediana: 15.3, mas1: 17.2, mas2: 19.6, mas3: 22.9 },
    { meses: 81,  menos2: 12.7, menos1: 13.9, mediana: 15.4, mas1: 17.2, mas2: 19.6, mas3: 23.0 },
    { meses: 82,  menos2: 12.7, menos1: 13.9, mediana: 15.4, mas1: 17.2, mas2: 19.7, mas3: 23.1 },
    { meses: 83,  menos2: 12.7, menos1: 13.9, mediana: 15.4, mas1: 17.3, mas2: 19.7, mas3: 23.2 },

    { meses: 84,  menos2: 12.7, menos1: 13.9, mediana: 15.4, mas1: 17.3, mas2: 19.8, mas3: 23.3 },
    { meses: 85,  menos2: 12.7, menos1: 13.9, mediana: 15.4, mas1: 17.3, mas2: 19.8, mas3: 23.4 },
    { meses: 86,  menos2: 12.8, menos1: 14.0, mediana: 15.4, mas1: 17.4, mas2: 19.9, mas3: 23.5 },
    { meses: 87,  menos2: 12.8, menos1: 14.0, mediana: 15.5, mas1: 17.4, mas2: 20.0, mas3: 23.6 },
    { meses: 88,  menos2: 12.8, menos1: 14.0, mediana: 15.5, mas1: 17.4, mas2: 20.0, mas3: 23.7 },
    { meses: 89,  menos2: 12.8, menos1: 14.0, mediana: 15.5, mas1: 17.5, mas2: 20.1, mas3: 23.9 },
    { meses: 90,  menos2: 12.8, menos1: 14.0, mediana: 15.5, mas1: 17.5, mas2: 20.1, mas3: 24.0 },
    { meses: 91,  menos2: 12.8, menos1: 14.0, mediana: 15.5, mas1: 17.5, mas2: 20.2, mas3: 24.1 },
    { meses: 92,  menos2: 12.8, menos1: 14.0, mediana: 15.6, mas1: 17.6, mas2: 20.3, mas3: 24.2 },
    { meses: 93,  menos2: 12.8, menos1: 14.1, mediana: 15.6, mas1: 17.6, mas2: 20.3, mas3: 24.4 },
    { meses: 94,  menos2: 12.9, menos1: 14.1, mediana: 15.6, mas1: 17.6, mas2: 20.4, mas3: 24.5 },
    { meses: 95,  menos2: 12.9, menos1: 14.1, mediana: 15.7, mas1: 17.7, mas2: 20.5, mas3: 24.6 },

    { meses: 96,  menos2: 12.9, menos1: 14.1, mediana: 15.7, mas1: 17.7, mas2: 20.6, mas3: 24.8 },
    { meses: 97,  menos2: 12.9, menos1: 14.1, mediana: 15.7, mas1: 17.8, mas2: 20.6, mas3: 24.9 },
    { meses: 98,  menos2: 12.9, menos1: 14.2, mediana: 15.7, mas1: 17.8, mas2: 20.7, mas3: 25.1 },
    { meses: 99,  menos2: 12.9, menos1: 14.2, mediana: 15.8, mas1: 17.9, mas2: 20.8, mas3: 25.2 },
    { meses: 100, menos2: 13.0, menos1: 14.2, mediana: 15.8, mas1: 17.9, mas2: 20.9, mas3: 25.3 },
    { meses: 101, menos2: 13.0, menos1: 14.2, mediana: 15.8, mas1: 18.0, mas2: 20.9, mas3: 25.5 },
    { meses: 102, menos2: 13.0, menos1: 14.3, mediana: 15.9, mas1: 18.0, mas2: 21.0, mas3: 25.6 },
    { meses: 103, menos2: 13.0, menos1: 14.3, mediana: 15.9, mas1: 18.1, mas2: 21.1, mas3: 25.8 },
    { meses: 104, menos2: 13.0, menos1: 14.3, mediana: 15.9, mas1: 18.1, mas2: 21.2, mas3: 25.9 },
    { meses: 105, menos2: 13.1, menos1: 14.3, mediana: 16.0, mas1: 18.2, mas2: 21.3, mas3: 26.1 },
    { meses: 106, menos2: 13.1, menos1: 14.4, mediana: 16.0, mas1: 18.2, mas2: 21.3, mas3: 26.2 },
    { meses: 107, menos2: 13.1, menos1: 14.4, mediana: 16.1, mas1: 18.3, mas2: 21.4, mas3: 26.4 },

    { meses: 108, menos2: 13.1, menos1: 14.4, mediana: 16.1, mas1: 18.3, mas2: 21.5, mas3: 26.5 },
    { meses: 109, menos2: 13.2, menos1: 14.5, mediana: 16.1, mas1: 18.4, mas2: 21.6, mas3: 26.7 },
    { meses: 110, menos2: 13.2, menos1: 14.5, mediana: 16.2, mas1: 18.4, mas2: 21.7, mas3: 26.8 },
    { meses: 111, menos2: 13.2, menos1: 14.5, mediana: 16.2, mas1: 18.5, mas2: 21.8, mas3: 27.0 },
    { meses: 112, menos2: 13.2, menos1: 14.6, mediana: 16.3, mas1: 18.6, mas2: 21.9, mas3: 27.2 },
    { meses: 113, menos2: 13.3, menos1: 14.6, mediana: 16.3, mas1: 18.6, mas2: 21.9, mas3: 27.3 },
    { meses: 114, menos2: 13.3, menos1: 14.6, mediana: 16.3, mas1: 18.7, mas2: 22.0, mas3: 27.5 },
    { meses: 115, menos2: 13.3, menos1: 14.7, mediana: 16.4, mas1: 18.7, mas2: 22.1, mas3: 27.6 },
    { meses: 116, menos2: 13.4, menos1: 14.7, mediana: 16.4, mas1: 18.8, mas2: 22.2, mas3: 27.8 },
    { meses: 117, menos2: 13.4, menos1: 14.7, mediana: 16.5, mas1: 18.8, mas2: 22.3, mas3: 27.9 },
    { meses: 118, menos2: 13.4, menos1: 14.8, mediana: 16.5, mas1: 18.9, mas2: 22.4, mas3: 28.1 },
    { meses: 119, menos2: 13.4, menos1: 14.8, mediana: 16.6, mas1: 19.0, mas2: 22.5, mas3: 28.2 },

    { meses: 120, menos2: 13.5, menos1: 14.8, mediana: 16.6, mas1: 19.0, mas2: 22.6, mas3: 28.4 },
    { meses: 121, menos2: 13.5, menos1: 14.9, mediana: 16.7, mas1: 19.1, mas2: 22.7, mas3: 28.5 },
    { meses: 122, menos2: 13.5, menos1: 14.9, mediana: 16.7, mas1: 19.2, mas2: 22.8, mas3: 28.7 },
    { meses: 123, menos2: 13.6, menos1: 15.0, mediana: 16.8, mas1: 19.2, mas2: 22.8, mas3: 28.8 },
    { meses: 124, menos2: 13.6, menos1: 15.0, mediana: 16.8, mas1: 19.3, mas2: 22.9, mas3: 29.0 },
    { meses: 125, menos2: 13.6, menos1: 15.0, mediana: 16.9, mas1: 19.4, mas2: 23.0, mas3: 29.1 },
    { meses: 126, menos2: 13.7, menos1: 15.1, mediana: 16.9, mas1: 19.4, mas2: 23.1, mas3: 29.3 },
    { meses: 127, menos2: 13.7, menos1: 15.1, mediana: 17.0, mas1: 19.5, mas2: 23.2, mas3: 29.4 },
    { meses: 128, menos2: 13.7, menos1: 15.2, mediana: 17.0, mas1: 19.6, mas2: 23.3, mas3: 29.6 },
    { meses: 129, menos2: 13.8, menos1: 15.2, mediana: 17.1, mas1: 19.6, mas2: 23.4, mas3: 29.7 },
    { meses: 130, menos2: 13.8, menos1: 15.3, mediana: 17.1, mas1: 19.7, mas2: 23.5, mas3: 29.9 },
    { meses: 131, menos2: 13.8, menos1: 15.3, mediana: 17.2, mas1: 19.8, mas2: 23.6, mas3: 30.0 },

    { meses: 132, menos2: 13.9, menos1: 15.3, mediana: 17.2, mas1: 19.9, mas2: 23.7, mas3: 30.2 },
    { meses: 133, menos2: 13.9, menos1: 15.4, mediana: 17.3, mas1: 19.9, mas2: 23.8, mas3: 30.3 },
    { meses: 134, menos2: 14.0, menos1: 15.4, mediana: 17.4, mas1: 20.0, mas2: 23.9, mas3: 30.5 },
    { meses: 135, menos2: 14.0, menos1: 15.5, mediana: 17.4, mas1: 20.1, mas2: 24.0, mas3: 30.6 },
    { meses: 136, menos2: 14.0, menos1: 15.5, mediana: 17.5, mas1: 20.2, mas2: 24.1, mas3: 30.8 },
    { meses: 137, menos2: 14.1, menos1: 15.6, mediana: 17.5, mas1: 20.2, mas2: 24.2, mas3: 30.9 },
    { meses: 138, menos2: 14.1, menos1: 15.6, mediana: 17.6, mas1: 20.3, mas2: 24.3, mas3: 31.1 },
    { meses: 139, menos2: 14.2, menos1: 15.7, mediana: 17.7, mas1: 20.4, mas2: 24.4, mas3: 31.2 },
    { meses: 140, menos2: 14.2, menos1: 15.7, mediana: 17.7, mas1: 20.5, mas2: 24.5, mas3: 31.4 },
    { meses: 141, menos2: 14.3, menos1: 15.8, mediana: 17.8, mas1: 20.6, mas2: 24.7, mas3: 31.5 },
    { meses: 142, menos2: 14.3, menos1: 15.8, mediana: 17.9, mas1: 20.6, mas2: 24.8, mas3: 31.6 },
    { meses: 143, menos2: 14.3, menos1: 15.9, mediana: 17.9, mas1: 20.7, mas2: 24.9, mas3: 31.8 },

    { meses: 144, menos2: 14.4, menos1: 16.0, mediana: 18.0, mas1: 20.8, mas2: 25.0, mas3: 31.9 },
    { meses: 145, menos2: 14.4, menos1: 16.0, mediana: 18.1, mas1: 20.9, mas2: 25.1, mas3: 32.0 },
    { meses: 146, menos2: 14.5, menos1: 16.1, mediana: 18.1, mas1: 21.0, mas2: 25.2, mas3: 32.2 },
    { meses: 147, menos2: 14.5, menos1: 16.1, mediana: 18.2, mas1: 21.1, mas2: 25.3, mas3: 32.3 },
    { meses: 148, menos2: 14.6, menos1: 16.2, mediana: 18.3, mas1: 21.1, mas2: 25.4, mas3: 32.4 },
    { meses: 149, menos2: 14.6, menos1: 16.2, mediana: 18.3, mas1: 21.2, mas2: 25.5, mas3: 32.6 },
    { meses: 150, menos2: 14.7, menos1: 16.3, mediana: 18.4, mas1: 21.3, mas2: 25.6, mas3: 32.7 },
    { meses: 151, menos2: 14.7, menos1: 16.3, mediana: 18.5, mas1: 21.4, mas2: 25.7, mas3: 32.8 },
    { meses: 152, menos2: 14.8, menos1: 16.4, mediana: 18.5, mas1: 21.5, mas2: 25.8, mas3: 33.0 },
    { meses: 153, menos2: 14.8, menos1: 16.4, mediana: 18.6, mas1: 21.6, mas2: 25.9, mas3: 33.1 },
    { meses: 154, menos2: 14.8, menos1: 16.5, mediana: 18.7, mas1: 21.6, mas2: 26.0, mas3: 33.2 },
    { meses: 155, menos2: 14.9, menos1: 16.6, mediana: 18.7, mas1: 21.7, mas2: 26.1, mas3: 33.3 },

    { meses: 156, menos2: 14.9, menos1: 16.6, mediana: 18.8, mas1: 21.8, mas2: 26.2, mas3: 33.4 },
    { meses: 157, menos2: 15.0, menos1: 16.7, mediana: 18.9, mas1: 21.9, mas2: 26.3, mas3: 33.6 },
    { meses: 158, menos2: 15.0, menos1: 16.7, mediana: 18.9, mas1: 22.0, mas2: 26.4, mas3: 33.7 },
    { meses: 159, menos2: 15.1, menos1: 16.8, mediana: 19.0, mas1: 22.0, mas2: 26.5, mas3: 33.8 },
    { meses: 160, menos2: 15.1, menos1: 16.8, mediana: 19.1, mas1: 22.1, mas2: 26.6, mas3: 33.9 },
    { meses: 161, menos2: 15.2, menos1: 16.9, mediana: 19.1, mas1: 22.2, mas2: 26.7, mas3: 34.0 },
    { meses: 162, menos2: 15.2, menos1: 16.9, mediana: 19.2, mas1: 22.3, mas2: 26.8, mas3: 34.1 },
    { meses: 163, menos2: 15.2, menos1: 17.0, mediana: 19.3, mas1: 22.4, mas2: 26.9, mas3: 34.2 },
    { meses: 164, menos2: 15.3, menos1: 17.0, mediana: 19.3, mas1: 22.4, mas2: 27.0, mas3: 34.3 },
    { meses: 165, menos2: 15.3, menos1: 17.1, mediana: 19.4, mas1: 22.5, mas2: 27.1, mas3: 34.4 },
    { meses: 166, menos2: 15.4, menos1: 17.1, mediana: 19.4, mas1: 22.6, mas2: 27.1, mas3: 34.5 },
    { meses: 167, menos2: 15.4, menos1: 17.2, mediana: 19.5, mas1: 22.7, mas2: 27.2, mas3: 34.6 },

    { meses: 168, menos2: 15.4, menos1: 17.2, mediana: 19.6, mas1: 22.7, mas2: 27.3, mas3: 34.7 },
    { meses: 169, menos2: 15.5, menos1: 17.3, mediana: 19.6, mas1: 22.8, mas2: 27.4, mas3: 34.7 },
    { meses: 170, menos2: 15.5, menos1: 17.3, mediana: 19.7, mas1: 22.9, mas2: 27.5, mas3: 34.8 },
    { meses: 171, menos2: 15.6, menos1: 17.4, mediana: 19.7, mas1: 22.9, mas2: 27.6, mas3: 34.9 },
    { meses: 172, menos2: 15.6, menos1: 17.4, mediana: 19.8, mas1: 23.0, mas2: 27.7, mas3: 35.0 },
    { meses: 173, menos2: 15.6, menos1: 17.5, mediana: 19.9, mas1: 23.1, mas2: 27.7, mas3: 35.1 },
    { meses: 174, menos2: 15.7, menos1: 17.5, mediana: 19.9, mas1: 23.1, mas2: 27.8, mas3: 35.1 },
    { meses: 175, menos2: 15.7, menos1: 17.6, mediana: 20.0, mas1: 23.2, mas2: 27.9, mas3: 35.2 },
    { meses: 176, menos2: 15.7, menos1: 17.6, mediana: 20.0, mas1: 23.3, mas2: 28.0, mas3: 35.3 },
    { meses: 177, menos2: 15.8, menos1: 17.6, mediana: 20.1, mas1: 23.3, mas2: 28.0, mas3: 35.4 },
    { meses: 178, menos2: 15.8, menos1: 17.7, mediana: 20.1, mas1: 23.4, mas2: 28.1, mas3: 35.4 },
    { meses: 179, menos2: 15.8, menos1: 17.7, mediana: 20.2, mas1: 23.5, mas2: 28.2, mas3: 35.5 },

    { meses: 180, menos2: 15.9, menos1: 17.8, mediana: 20.2, mas1: 23.5, mas2: 28.2, mas3: 35.5 },
    { meses: 181, menos2: 15.9, menos1: 17.8, mediana: 20.3, mas1: 23.6, mas2: 28.3, mas3: 35.6 },
    { meses: 182, menos2: 15.9, menos1: 17.8, mediana: 20.3, mas1: 23.6, mas2: 28.4, mas3: 35.7 },
    { meses: 183, menos2: 16.0, menos1: 17.9, mediana: 20.4, mas1: 23.7, mas2: 28.4, mas3: 35.7 },
    { meses: 184, menos2: 16.0, menos1: 17.9, mediana: 20.4, mas1: 23.7, mas2: 28.5, mas3: 35.8 },
    { meses: 185, menos2: 16.0, menos1: 17.9, mediana: 20.4, mas1: 23.8, mas2: 28.5, mas3: 35.8 },
    { meses: 186, menos2: 16.0, menos1: 18.0, mediana: 20.5, mas1: 23.8, mas2: 28.6, mas3: 35.8 },
    { meses: 187, menos2: 16.1, menos1: 18.0, mediana: 20.5, mas1: 23.9, mas2: 28.6, mas3: 35.9 },
    { meses: 188, menos2: 16.1, menos1: 18.0, mediana: 20.6, mas1: 23.9, mas2: 28.7, mas3: 35.9 },
    { meses: 189, menos2: 16.1, menos1: 18.1, mediana: 20.6, mas1: 24.0, mas2: 28.7, mas3: 36.0 },
    { meses: 190, menos2: 16.1, menos1: 18.1, mediana: 20.6, mas1: 24.0, mas2: 28.8, mas3: 36.0 },
    { meses: 191, menos2: 16.2, menos1: 18.1, mediana: 20.7, mas1: 24.1, mas2: 28.8, mas3: 36.0 },

    { meses: 192, menos2: 16.2, menos1: 18.2, mediana: 20.7, mas1: 24.1, mas2: 28.9, mas3: 36.1 },
    { meses: 193, menos2: 16.2, menos1: 18.2, mediana: 20.7, mas1: 24.1, mas2: 28.9, mas3: 36.1 },
    { meses: 194, menos2: 16.2, menos1: 18.2, mediana: 20.8, mas1: 24.2, mas2: 29.0, mas3: 36.1 },
    { meses: 195, menos2: 16.2, menos1: 18.2, mediana: 20.8, mas1: 24.2, mas2: 29.0, mas3: 36.1 },
    { meses: 196, menos2: 16.2, menos1: 18.3, mediana: 20.8, mas1: 24.3, mas2: 29.0, mas3: 36.2 },
    { meses: 197, menos2: 16.3, menos1: 18.3, mediana: 20.9, mas1: 24.3, mas2: 29.1, mas3: 36.2 },
    { meses: 198, menos2: 16.3, menos1: 18.3, mediana: 20.9, mas1: 24.3, mas2: 29.1, mas3: 36.2 },
    { meses: 199, menos2: 16.3, menos1: 18.3, mediana: 20.9, mas1: 24.4, mas2: 29.1, mas3: 36.2 },
    { meses: 200, menos2: 16.3, menos1: 18.3, mediana: 20.9, mas1: 24.4, mas2: 29.2, mas3: 36.2 },
    { meses: 201, menos2: 16.3, menos1: 18.4, mediana: 21.0, mas1: 24.4, mas2: 29.2, mas3: 36.3 },
    { meses: 202, menos2: 16.3, menos1: 18.4, mediana: 21.0, mas1: 24.4, mas2: 29.2, mas3: 36.3 },
    { meses: 203, menos2: 16.3, menos1: 18.4, mediana: 21.0, mas1: 24.5, mas2: 29.3, mas3: 36.3 },

    { meses: 204, menos2: 16.4, menos1: 18.4, mediana: 21.0, mas1: 24.5, mas2: 29.3, mas3: 36.3 },
    { meses: 205, menos2: 16.4, menos1: 18.4, mediana: 21.1, mas1: 24.5, mas2: 29.3, mas3: 36.3 },
    { meses: 206, menos2: 16.4, menos1: 18.4, mediana: 21.1, mas1: 24.6, mas2: 29.3, mas3: 36.3 },
    { meses: 207, menos2: 16.4, menos1: 18.5, mediana: 21.1, mas1: 24.6, mas2: 29.4, mas3: 36.3 },
    { meses: 208, menos2: 16.4, menos1: 18.5, mediana: 21.1, mas1: 24.6, mas2: 29.4, mas3: 36.3 },
    { meses: 209, menos2: 16.4, menos1: 18.5, mediana: 21.1, mas1: 24.6, mas2: 29.4, mas3: 36.3 },
    { meses: 210, menos2: 16.4, menos1: 18.5, mediana: 21.2, mas1: 24.6, mas2: 29.4, mas3: 36.3 },
    { meses: 211, menos2: 16.4, menos1: 18.5, mediana: 21.2, mas1: 24.7, mas2: 29.4, mas3: 36.3 },
    { meses: 212, menos2: 16.4, menos1: 18.5, mediana: 21.2, mas1: 24.7, mas2: 29.5, mas3: 36.3 },
    { meses: 213, menos2: 16.4, menos1: 18.5, mediana: 21.2, mas1: 24.7, mas2: 29.5, mas3: 36.3 },
    { meses: 214, menos2: 16.4, menos1: 18.5, mediana: 21.2, mas1: 24.7, mas2: 29.5, mas3: 36.3 },
    { meses: 215, menos2: 16.4, menos1: 18.6, mediana: 21.2, mas1: 24.8, mas2: 29.5, mas3: 36.3 },

    { meses: 216, menos2: 16.4, menos1: 18.6, mediana: 21.3, mas1: 24.8, mas2: 29.5, mas3: 36.3 },
    { meses: 217, menos2: 16.5, menos1: 18.6, mediana: 21.3, mas1: 24.8, mas2: 29.5, mas3: 36.3 },
    { meses: 218, menos2: 16.5, menos1: 18.6, mediana: 21.3, mas1: 24.8, mas2: 29.6, mas3: 36.3 },
    { meses: 219, menos2: 16.5, menos1: 18.6, mediana: 21.3, mas1: 24.8, mas2: 29.6, mas3: 36.3 },
    { meses: 220, menos2: 16.5, menos1: 18.6, mediana: 21.3, mas1: 24.8, mas2: 29.6, mas3: 36.3 },
    { meses: 221, menos2: 16.5, menos1: 18.6, mediana: 21.3, mas1: 24.9, mas2: 29.6, mas3: 36.2 },
    { meses: 222, menos2: 16.5, menos1: 18.6, mediana: 21.3, mas1: 24.9, mas2: 29.6, mas3: 36.2 },
    { meses: 223, menos2: 16.5, menos1: 18.6, mediana: 21.4, mas1: 24.9, mas2: 29.6, mas3: 36.2 },
    { meses: 224, menos2: 16.5, menos1: 18.6, mediana: 21.4, mas1: 24.9, mas2: 29.6, mas3: 36.2 },
    { meses: 225, menos2: 16.5, menos1: 18.7, mediana: 21.4, mas1: 24.9, mas2: 29.6, mas3: 36.2 },
    { meses: 226, menos2: 16.5, menos1: 18.7, mediana: 21.4, mas1: 24.9, mas2: 29.6, mas3: 36.2 },
    { meses: 227, menos2: 16.5, menos1: 18.7, mediana: 21.4, mas1: 25.0, mas2: 29.7, mas3: 36.2 },
    { meses: 228, menos2: 16.5, menos1: 18.7, mediana: 21.4, mas1: 25.0, mas2: 29.7, mas3: 36.2 }

];

// =========================
// PCe/E NIÑOS 0 A 3 AÑOS
// Perímetro cefálico para la edad
// Referencia utilizada por MINSAL / patrón OMS
// Perímetro cefálico en cm
// =========================

const tablaPCeE_Ninos_0a3 = [
    { meses: 0,  menos2: 31.9, menos1: 33.2, mediana: 34.5, mas1: 35.7, mas2: 37.0 },
    { meses: 1,  menos2: 34.9, menos1: 36.1, mediana: 37.3, mas1: 38.4, mas2: 39.6 },
    { meses: 2,  menos2: 36.8, menos1: 38.0, mediana: 39.1, mas1: 40.3, mas2: 41.5 },
    { meses: 3,  menos2: 38.1, menos1: 39.3, mediana: 40.5, mas1: 41.7, mas2: 42.9 },
    { meses: 4,  menos2: 39.2, menos1: 40.4, mediana: 41.6, mas1: 42.8, mas2: 44.0 },
    { meses: 5,  menos2: 40.1, menos1: 41.4, mediana: 42.6, mas1: 43.8, mas2: 45.0 },
    { meses: 6,  menos2: 40.9, menos1: 42.1, mediana: 43.3, mas1: 44.6, mas2: 45.8 },
    { meses: 7,  menos2: 41.5, menos1: 42.7, mediana: 44.0, mas1: 45.2, mas2: 46.4 },
    { meses: 8,  menos2: 42.0, menos1: 43.3, mediana: 44.5, mas1: 45.8, mas2: 47.0 },
    { meses: 9,  menos2: 42.5, menos1: 43.7, mediana: 45.0, mas1: 46.3, mas2: 47.5 },
    { meses: 10, menos2: 42.9, menos1: 44.1, mediana: 45.4, mas1: 46.7, mas2: 47.9 },
    { meses: 11, menos2: 43.2, menos1: 44.5, mediana: 45.8, mas1: 47.0, mas2: 48.3 },

    { meses: 12, menos2: 43.5, menos1: 44.8, mediana: 46.1, mas1: 47.4, mas2: 48.6 },
    { meses: 13, menos2: 43.8, menos1: 45.0, mediana: 46.3, mas1: 47.6, mas2: 48.9 },
    { meses: 14, menos2: 44.0, menos1: 45.3, mediana: 46.6, mas1: 47.9, mas2: 49.2 },
    { meses: 15, menos2: 44.2, menos1: 45.5, mediana: 46.8, mas1: 48.1, mas2: 49.4 },
    { meses: 16, menos2: 44.4, menos1: 45.7, mediana: 47.0, mas1: 48.3, mas2: 49.6 },
    { meses: 17, menos2: 44.6, menos1: 45.9, mediana: 47.2, mas1: 48.5, mas2: 49.8 },
    { meses: 18, menos2: 44.7, menos1: 46.0, mediana: 47.4, mas1: 48.7, mas2: 50.0 },
    { meses: 19, menos2: 44.9, menos1: 46.2, mediana: 47.5, mas1: 48.9, mas2: 50.2 },
    { meses: 20, menos2: 45.0, menos1: 46.4, mediana: 47.7, mas1: 49.0, mas2: 50.4 },
    { meses: 21, menos2: 45.2, menos1: 46.5, mediana: 47.8, mas1: 49.2, mas2: 50.5 },
    { meses: 22, menos2: 45.3, menos1: 46.6, mediana: 48.0, mas1: 49.3, mas2: 50.7 },
    { meses: 23, menos2: 45.4, menos1: 46.8, mediana: 48.1, mas1: 49.5, mas2: 50.8 },

    { meses: 24, menos2: 45.5, menos1: 46.9, mediana: 48.3, mas1: 49.6, mas2: 51.0 },
    { meses: 25, menos2: 45.6, menos1: 47.0, mediana: 48.4, mas1: 49.7, mas2: 51.1 },
    { meses: 26, menos2: 45.8, menos1: 47.1, mediana: 48.5, mas1: 49.9, mas2: 51.2 },
    { meses: 27, menos2: 45.9, menos1: 47.2, mediana: 48.6, mas1: 50.0, mas2: 51.4 },
    { meses: 28, menos2: 46.0, menos1: 47.3, mediana: 48.7, mas1: 50.1, mas2: 51.5 },
    { meses: 29, menos2: 46.1, menos1: 47.4, mediana: 48.8, mas1: 50.2, mas2: 51.6 },
    { meses: 30, menos2: 46.1, menos1: 47.5, mediana: 48.9, mas1: 50.3, mas2: 51.7 },
    { meses: 31, menos2: 46.2, menos1: 47.6, mediana: 49.0, mas1: 50.4, mas2: 51.8 },
    { meses: 32, menos2: 46.3, menos1: 47.7, mediana: 49.1, mas1: 50.5, mas2: 51.9 },
    { meses: 33, menos2: 46.4, menos1: 47.8, mediana: 49.2, mas1: 50.6, mas2: 52.0 },
    { meses: 34, menos2: 46.5, menos1: 47.9, mediana: 49.3, mas1: 50.7, mas2: 52.1 },
    { meses: 35, menos2: 46.6, menos1: 48.0, mediana: 49.4, mas1: 50.8, mas2: 52.2 },
    { meses: 36, menos2: 46.6, menos1: 48.0, mediana: 49.5, mas1: 50.9, mas2: 52.3 }
];

// =========================
// PCe/E NIÑAS 0 A 3 AÑOS
// Perímetro cefálico para la edad
// Referencia MINSAL / patrón OMS
// Perímetro cefálico en cm
// =========================

const tablaPCeE_Ninas_0a3 = [
    { meses: 0,  menos2: 31.5, menos1: 32.7, mediana: 33.9, mas1: 35.1, mas2: 36.2 },
    { meses: 1,  menos2: 34.2, menos1: 35.4, mediana: 36.5, mas1: 37.7, mas2: 38.9 },
    { meses: 2,  menos2: 35.8, menos1: 37.0, mediana: 38.3, mas1: 39.5, mas2: 40.7 },
    { meses: 3,  menos2: 37.1, menos1: 38.3, mediana: 39.5, mas1: 40.8, mas2: 42.0 },
    { meses: 4,  menos2: 38.1, menos1: 39.3, mediana: 40.6, mas1: 41.8, mas2: 43.1 },
    { meses: 5,  menos2: 38.9, menos1: 40.2, mediana: 41.5, mas1: 42.7, mas2: 44.0 },
    { meses: 6,  menos2: 39.6, menos1: 40.9, mediana: 42.2, mas1: 43.5, mas2: 44.8 },
    { meses: 7,  menos2: 40.2, menos1: 41.5, mediana: 42.8, mas1: 44.1, mas2: 45.5 },
    { meses: 8,  menos2: 40.7, menos1: 42.0, mediana: 43.4, mas1: 44.7, mas2: 46.0 },
    { meses: 9,  menos2: 41.2, menos1: 42.5, mediana: 43.8, mas1: 45.2, mas2: 46.5 },
    { meses: 10, menos2: 41.5, menos1: 42.9, mediana: 44.2, mas1: 45.6, mas2: 46.9 },
    { meses: 11, menos2: 41.9, menos1: 43.2, mediana: 44.6, mas1: 45.9, mas2: 47.3 },

    { meses: 12, menos2: 42.2, menos1: 43.5, mediana: 44.9, mas1: 46.3, mas2: 47.6 },
    { meses: 13, menos2: 42.4, menos1: 43.8, mediana: 45.2, mas1: 46.5, mas2: 47.9 },
    { meses: 14, menos2: 42.7, menos1: 44.1, mediana: 45.4, mas1: 46.8, mas2: 48.2 },
    { meses: 15, menos2: 42.9, menos1: 44.3, mediana: 45.7, mas1: 47.0, mas2: 48.4 },
    { meses: 16, menos2: 43.1, menos1: 44.5, mediana: 45.9, mas1: 47.2, mas2: 48.6 },
    { meses: 17, menos2: 43.3, menos1: 44.7, mediana: 46.1, mas1: 47.4, mas2: 48.8 },
    { meses: 18, menos2: 43.5, menos1: 44.9, mediana: 46.2, mas1: 47.6, mas2: 49.0 },
    { meses: 19, menos2: 43.6, menos1: 45.0, mediana: 46.4, mas1: 47.8, mas2: 49.2 },
    { meses: 20, menos2: 43.8, menos1: 45.2, mediana: 46.6, mas1: 48.0, mas2: 49.4 },
    { meses: 21, menos2: 44.0, menos1: 45.3, mediana: 46.7, mas1: 48.1, mas2: 49.5 },
    { meses: 22, menos2: 44.1, menos1: 45.5, mediana: 46.9, mas1: 48.3, mas2: 49.7 },
    { meses: 23, menos2: 44.3, menos1: 45.6, mediana: 47.0, mas1: 48.4, mas2: 49.8 },

    { meses: 24, menos2: 44.4, menos1: 45.8, mediana: 47.2, mas1: 48.6, mas2: 50.0 },
    { meses: 25, menos2: 44.5, menos1: 45.9, mediana: 47.3, mas1: 48.7, mas2: 50.1 },
    { meses: 26, menos2: 44.7, menos1: 46.1, mediana: 47.5, mas1: 48.9, mas2: 50.3 },
    { meses: 27, menos2: 44.8, menos1: 46.2, mediana: 47.6, mas1: 49.0, mas2: 50.4 },
    { meses: 28, menos2: 44.9, menos1: 46.3, mediana: 47.7, mas1: 49.1, mas2: 50.5 },
    { meses: 29, menos2: 45.0, menos1: 46.4, mediana: 47.8, mas1: 49.2, mas2: 50.6 },
    { meses: 30, menos2: 45.1, menos1: 46.5, mediana: 47.9, mas1: 49.3, mas2: 50.7 },
    { meses: 31, menos2: 45.2, menos1: 46.6, mediana: 48.0, mas1: 49.4, mas2: 50.9 },
    { meses: 32, menos2: 45.3, menos1: 46.7, mediana: 48.1, mas1: 49.6, mas2: 51.0 },
    { meses: 33, menos2: 45.4, menos1: 46.8, mediana: 48.2, mas1: 49.7, mas2: 51.1 },
    { meses: 34, menos2: 45.5, menos1: 46.9, mediana: 48.3, mas1: 49.7, mas2: 51.2 },
    { meses: 35, menos2: 45.6, menos1: 47.0, mediana: 48.4, mas1: 49.8, mas2: 51.2 },
    { meses: 36, menos2: 45.7, menos1: 47.1, mediana: 48.5, mas1: 49.9, mas2: 51.3 }
];

// ==========================================
// PC/E NIÑAS Y ADOLESCENTES
// Perímetro de cintura para la edad
// MINSAL 2018
// Valores en centímetros
// Percentiles: P10, P25, P50, P75 y P90
// ==========================================

const tablaPCE_Ninas_5a19 = [
    { edad: 5,  p10: 48.5, p25: 50.1, p50: 53.0, p75: 56.7, p90: 61.4 },
    { edad: 6,  p10: 50.1, p25: 51.8, p50: 55.0, p75: 59.1, p90: 64.1 },
    { edad: 7,  p10: 51.6, p25: 53.5, p50: 56.9, p75: 61.5, p90: 67.5 },
    { edad: 8,  p10: 53.2, p25: 55.2, p50: 58.9, p75: 63.9, p90: 70.5 },
    { edad: 9,  p10: 54.8, p25: 56.9, p50: 60.8, p75: 66.3, p90: 73.6 },
    { edad: 10, p10: 56.3, p25: 58.6, p50: 62.8, p75: 68.7, p90: 76.6 },
    { edad: 11, p10: 57.9, p25: 60.3, p50: 64.8, p75: 71.1, p90: 79.7 },
    { edad: 12, p10: 59.5, p25: 62.0, p50: 66.7, p75: 73.5, p90: 82.7 },
    { edad: 13, p10: 61.0, p25: 63.7, p50: 68.7, p75: 75.9, p90: 85.9 },
    { edad: 14, p10: 62.6, p25: 65.4, p50: 70.6, p75: 78.3, p90: 88.8 },
    { edad: 15, p10: 64.2, p25: 67.1, p50: 72.6, p75: 80.7, p90: 91.9 },
    { edad: 16, p10: 65.7, p25: 68.8, p50: 74.6, p75: 83.1, p90: 94.9 },
    { edad: 17, p10: 67.3, p25: 70.5, p50: 76.5, p75: 85.5, p90: 98.0 },
    { edad: 18, p10: 68.9, p25: 72.2, p50: 78.5, p75: 87.9, p90: 101.0 }
];

// ==========================================
// PC/E NIÑOS Y ADOLESCENTES
// Perímetro de cintura para la edad
// MINSAL 2018
// Valores en centímetros
// Percentiles: P10, P25, P50, P75 y P90
// ==========================================

const tablaPCE_Ninos_5a19 = [
    { edad: 5,  p10: 48.4, p25: 50.6, p50: 53.2, p75: 56.4, p90: 61.0 },
    { edad: 6,  p10: 50.1, p25: 52.4, p50: 55.2, p75: 59.0, p90: 64.4 },
    { edad: 7,  p10: 51.8, p25: 54.3, p50: 57.2, p75: 61.5, p90: 67.8 },
    { edad: 8,  p10: 53.5, p25: 56.1, p50: 59.3, p75: 64.1, p90: 71.2 },
    { edad: 9,  p10: 55.3, p25: 58.0, p50: 61.3, p75: 66.6, p90: 74.6 },
    { edad: 10, p10: 57.0, p25: 59.8, p50: 63.3, p75: 69.2, p90: 78.0 },
    { edad: 11, p10: 58.7, p25: 61.7, p50: 65.4, p75: 71.7, p90: 81.4 },
    { edad: 12, p10: 60.5, p25: 63.5, p50: 67.4, p75: 74.3, p90: 84.4 },
    { edad: 13, p10: 62.2, p25: 65.4, p50: 69.5, p75: 76.8, p90: 88.2 },
    { edad: 14, p10: 63.9, p25: 67.2, p50: 71.5, p75: 79.4, p90: 91.6 },
    { edad: 15, p10: 65.6, p25: 69.1, p50: 73.5, p75: 81.9, p90: 95.0 },
    { edad: 16, p10: 67.4, p25: 70.9, p50: 75.6, p75: 84.5, p90: 98.4 },
    { edad: 17, p10: 69.1, p25: 72.8, p50: 77.6, p75: 87.0, p90: 101.8 },
    { edad: 18, p10: 70.8, p25: 74.6, p50: 79.6, p75: 89.6, p90: 105.2 }
];

// =========================
// CLASIFICACIÓN POR DE
// =========================
// Interpreta el valor según las franjas de las curvas MINSAL.
//
// <= -2 DE        → -2 DE
// > -2 a <= -1 DE → -1 DE
// > -1 a < +1 DE  →  0 DE
// >= +1 a < +2 DE → +1 DE
// >= +2 DE        → +2 DE
//
// Si coincide exactamente con una línea,
// conserva esa desviación estándar.

function obtenerDE(valor, referencia) {

    valor = Number(valor);

    if (valor <= referencia.menos2) {
        return "-2 DE";
    }

    if (valor <= referencia.menos1) {
        return "-1 DE";
    }

    if (valor < referencia.mas1) {
        return "0 DE";
    }

    if (valor < referencia.mas2) {
        return "+1 DE";
    }

    return "+2 DE";
}

// =========================
// CLASIFICACIÓN DE IMC/E
// =========================
// IMC/E utiliza +3 DE para obesidad severa.

function obtenerDE_IMC(valor, referencia) {

    valor = Number(valor);

    if (valor <= referencia.menos2) {
        return "-2 DE";
    }

    if (valor <= referencia.menos1) {
        return "-1 DE";
    }

    if (valor < referencia.mas1) {
        return "0 DE";
    }

    if (valor < referencia.mas2) {
        return "+1 DE";
    }

    if (valor < referencia.mas3) {
        return "+2 DE";
    }

    return "+3 DE";
}

// =========================
// BUSCAR REFERENCIA POR EDAD
// =========================
// Busca la fila correspondiente a la edad en meses.

function buscarPorMes(tabla, edadMeses) {

    return tabla.find(fila => fila.meses === edadMeses);

}

// =========================
// BUSCAR REFERENCIA P/T
// =========================
// Busca la fila de peso para talla/longitud.
// Las tablas están construidas cada 0,5 cm.

function buscarPorTalla(tabla, talla) {

    const tallaRedondeada =
        Math.round(Number(talla) * 2) / 2;

    return tabla.find(fila =>
        fila.longitud === tallaRedondeada ||
        fila.talla === tallaRedondeada
    );

}

// =========================
// CALIFICACIÓN NUTRICIONAL
// =========================

function calificarNutricion(de) {

    if (de === "-2 DE") {
        return "Desnutrición";
    }

    if (de === "-1 DE") {
        return "Riesgo de desnutrir";
    }

    if (de === "0 DE") {
        return "Eutrófico";
    }

    if (de === "+1 DE") {
        return "Sobrepeso";
    }

    if (de === "+2 DE") {
        return "Obesidad";
    }

    if (de === "+3 DE") {
        return "Obesidad severa";
    }

    return "Sin clasificación";
}

function obtenerClaseNutricional(clasificacion) {

    if (
        clasificacion === "Desnutrición" ||
        clasificacion === "Riesgo de desnutrir" ||
        clasificacion === "Bajo peso"
    ) {
        return "estado-azul";
    }

    if (clasificacion === "Eutrófico") {
        return "estado-verde";
    }

    if (
        clasificacion === "Sobrepeso" ||
        clasificacion === "Riesgo de obesidad abdominal"
    ) {
        return "estado-naranjo";
    }

    if (
        clasificacion === "Obesidad" ||
        clasificacion === "Obesidad severa" ||
        clasificacion === "Obesidad abdominal"
    ) {
        return "estado-rojo";
    }

    return "";
}

function mostrarEstadoNutricional(estado) {

    const resultado =
        document.getElementById("resultado");

    resultado.textContent = estado;

    resultado.className =
        obtenerClaseNutricional(estado);
}


// =========================
// CALIFICACIÓN ESTATURAL
// =========================

function calificarTalla(de) {

    if (de === "-2 DE") {
        return "Talla baja";
    }

    if (de === "-1 DE") {
        return "Talla normal baja";
    }

    if (de === "0 DE") {
        return "Normal";
    }

    if (de === "+1 DE") {
        return "Talla normal alta";
    }

    if (de === "+2 DE") {
        return "Talla alta";
    }

    return "Sin clasificación";
}

function seleccionarTipo(tipo) {

    tipoEvaluacion = tipo;

    // =========================
    // BOTONES
    // =========================

    const btnAdulto = document.getElementById("btnAdulto");
    const btnAdultoMayor = document.getElementById("btnAdultoMayor");
    const btnPediatrico = document.getElementById("btnPediatrico");

    btnAdulto.classList.remove("activo");
    btnAdultoMayor.classList.remove("activo");
    btnPediatrico.classList.remove("activo");


    // =========================
    // CAMPOS
    // =========================

    const camposAdulto = document.getElementById("camposAdulto");
    const camposPediatricos = document.getElementById("camposPediatricos");

    camposAdulto.style.display = "none";
    camposPediatricos.style.display = "none";


    // =========================
    // SELECCIÓN
    // =========================

    if (tipo === "adulto") {

        btnAdulto.classList.add("activo");

        camposAdulto.style.display = "block";

        document.getElementById("botonCalcular").textContent =
            "Calcular IMC";

    }

    else if (tipo === "adultoMayor") {

        btnAdultoMayor.classList.add("activo");

        camposAdulto.style.display = "block";

        document.getElementById("botonCalcular").textContent =
            "Calcular IMC";

    }

    else if (tipo === "pediatrico") {

        btnPediatrico.classList.add("activo");

        camposPediatricos.style.display = "block";

        document.getElementById("botonCalcular").textContent =
            "Evaluar estado nutricional";

    }


    // =========================
    // LIMPIAR RESULTADO
    // =========================

    document.getElementById("resultado").textContent = "--";
    document.getElementById("resultado").className = "";

    document.getElementById("categoria").textContent =
        "Ingresa tus datos";

    document.getElementById("categoria").className = "";

}



// =========================
// FUNCIÓN PRINCIPAL
// =========================

function calcularIMC() {

    // =========================
    // PEDIÁTRICO
    // =========================

    if (tipoEvaluacion === "pediatrico") {

        calcularPediatrico();

        return;
    }


    // =========================
    // ADULTO / ADULTO MAYOR
    // =========================

    let peso = document.getElementById("peso");
    let altura = document.getElementById("altura");


    if (peso.value === "" || altura.value === "") {

        alert("Por favor, ingresa tu peso y altura.");

        return;
    }


    if (peso.value <= 0 || altura.value <= 0) {

        alert("El peso y la altura deben ser mayores que 0.");

        return;
    }


    let imc = peso.value / (altura.value * altura.value);

    let categoria = "";
    let claseCategoria = "";


    // =========================
    // ADULTO
    // =========================

    if (tipoEvaluacion === "adulto") {

        if (imc < 18.5) {

            categoria = "Bajo peso";
            claseCategoria = "bajo-peso";

        }

        else if (imc < 25) {

            categoria = "Normal";
            claseCategoria = "normal";

        }

        else if (imc < 30) {

            categoria = "Sobrepeso";
            claseCategoria = "sobrepeso";

        }

        else if (imc < 35) {

            categoria = "Obesidad grado I";
            claseCategoria = "obesidad";

        }

        else if (imc < 40) {

            categoria = "Obesidad grado II";
            claseCategoria = "obesidad";

        }

        else {

            categoria = "Obesidad grado III";
            claseCategoria = "obesidad";

        }

    }


    // =========================
    // ADULTO MAYOR
    // Parámetros MINSAL Chile
    // =========================

    else {

        if (imc < 23) {

            categoria = "Enflaquecido/a";
            claseCategoria = "bajo-peso";

        }

        else if (imc < 28) {

            categoria = "Normal";
            claseCategoria = "normal";

        }

        else if (imc < 32) {

            categoria = "Sobrepeso";
            claseCategoria = "sobrepeso";

        }

        else {

            categoria = "Obeso/a";
            claseCategoria = "obesidad";

        }

    }


    document.getElementById("resultado").textContent =
        imc.toFixed(2);

    document.getElementById("categoria").textContent =
        categoria;

    document.getElementById("categoria").className =
        claseCategoria;


    console.log("IMC:", imc);
    console.log("Tipo de evaluación:", tipoEvaluacion);

}

function evaluarCintura(valor, referencia) {

    valor = Number(valor);

    let percentil = "";
    let clasificacion = "";

    // Percentil / intervalo
    if (valor < referencia.p10) {
        percentil = "< P10";
    } else if (valor === referencia.p10) {
        percentil = "P10";
    } else if (valor < referencia.p25) {
        percentil = "Entre P10 y P25";
    } else if (valor === referencia.p25) {
        percentil = "P25";
    } else if (valor < referencia.p50) {
        percentil = "Entre P25 y P50";
    } else if (valor === referencia.p50) {
        percentil = "P50";
    } else if (valor < referencia.p75) {
        percentil = "Entre P50 y P75";
    } else if (valor === referencia.p75) {
        percentil = "P75";
    } else if (valor < referencia.p90) {
        percentil = "Entre P75 y P90";
    } else if (valor === referencia.p90) {
        percentil = "P90";
    } else {
        percentil = "> P90";
    }

    // Clasificación
    if (valor < referencia.p75) {
        clasificacion = "Normal";
    } else if (valor < referencia.p90) {
        clasificacion = "Riesgo de obesidad abdominal";
    } else {
        clasificacion = "Obesidad abdominal";
    }

    return {
        percentil,
        clasificacion
    };
}

// =========================
// CINTURA DESDE LOS 19 AÑOS
// =========================

function evaluarCinturaAdulto(valor, sexo) {

    valor = Number(valor);

    if (sexo === "nina") {

        if (valor < 80) {
            return "Normal";
        }

        if (valor < 88) {
            return "Riesgo de obesidad abdominal";
        }

        return "Obesidad abdominal";
    }

    if (sexo === "nino") {

        if (valor < 90) {
            return "Normal";
        }

        if (valor < 102) {
            return "Riesgo de obesidad abdominal";
        }

        return "Obesidad abdominal";
    }

    return "Sin clasificación";
}

function calcularPediatrico() {

    const sexo = document.getElementById("sexo").value;

    const anios = document.getElementById("anios").value;

    const meses = document.getElementById("meses").value;

    const peso = document.getElementById("pesoPediatrico").value;

    const talla = document.getElementById("talla").value;


    // =========================
    // VALIDACIÓN
    // =========================

    if (
        sexo === "" ||
        anios === "" ||
        meses === "" ||
        peso === "" ||
        talla === ""
    ) {

        alert("Por favor, completa todos los datos pediátricos.");

        return;
    }


    if (peso <= 0 || talla <= 0) {

        alert("El peso y la talla deben ser mayores que 0.");

        return;
    }


    // =========================
    // EDAD
    // =========================

    const edadTotalMeses =
        (Number(anios) * 12) + Number(meses);


    // =========================
    // IMC
    // =========================

    const tallaMetros =
        Number(talla) / 100;

    const imc =
       Number(
        (
            Number(peso) /
            (tallaMetros * tallaMetros)
        ).toFixed(2)
    );


    // Mostrar IMC en el campo correspondiente

    document.getElementById("imcPediatrico").value =
        imc.toFixed(2);


// =========================
// EVALUACIÓN 0 A 23 MESES
// =========================

if (edadTotalMeses <= 23) {

    const perimetroCraneal =
        document.getElementById("perimetroCraneal").value;

    // Elegir tablas según sexo
    const tablaPE =
        sexo === "nino" ? tablaPE_Ninos : tablaPE_Ninas;

    const tablaTE =
        sexo === "nino" ? tablaTE_Ninos : tablaTE_Ninas;

    const tablaPT =
        sexo === "nino" ? tablaPT_Ninos : tablaPT_Ninas;

    const tablaPC =
        sexo === "nino"
            ? tablaPCeE_Ninos_0a3
            : tablaPCeE_Ninas_0a3;


    // Buscar referencias
    const refPE =
        buscarPorMes(tablaPE, edadTotalMeses);

    const refTE =
        buscarPorMes(tablaTE, edadTotalMeses);

    const refPT =
        buscarPorTalla(tablaPT, talla);

    const refPC =
        buscarPorMes(tablaPC, edadTotalMeses);


    // Verificar que las referencias existan
    if (!refPE || !refTE || !refPT) {

        alert(
            "No se encontró una referencia válida para los datos ingresados."
        );

        return;
    }


    // Obtener DE
    const dePE =
        obtenerDE(peso, refPE);

    const deTE =
        obtenerDE(talla, refTE);

    const dePT =
        obtenerDE(peso, refPT);


    // =========================
    // INDICADOR PRINCIPAL
    // =========================

    let indicadorPrincipal = "";
    let dePrincipal = "";


    // Menores de 1 año
    if (edadTotalMeses < 12) {

        // P/E es el indicador principal,
        // excepto cuando P/T está en +1 DE o más.

        if (
            dePT === "+1 DE" ||
            dePT === "+2 DE"
        ) {

            indicadorPrincipal = "P/T";
            dePrincipal = dePT;

        } else {

            indicadorPrincipal = "P/E";
            dePrincipal = dePE;
        }

    }

    // Desde 12 hasta 23 meses
    else {

        indicadorPrincipal = "P/T";
        dePrincipal = dePT;
    }


// =========================
// CALIFICACIÓN NUTRICIONAL
// =========================

let estadoNutricional = "";

if (edadTotalMeses < 12) {

    // En menores de 1 año:
    // P/E define desnutrición, riesgo y eutrofia.
    // P/T define sobrepeso y obesidad.

    if (dePT === "+2 DE") {

        estadoNutricional = "Obesidad";

    } else if (dePT === "+1 DE") {

        estadoNutricional = "Sobrepeso";

    } else if (dePE === "-2 DE") {

        estadoNutricional = "Desnutrición";

    } else if (dePE === "-1 DE") {

        estadoNutricional = "Riesgo de desnutrir";

    } else {

        estadoNutricional = "Eutrófico";
    }

} else {

    // Desde los 12 meses, P/T es el indicador principal.
    estadoNutricional =
        calificarNutricion(dePrincipal);
}


    // Calificación de talla
    const estadoTalla =
        calificarTalla(deTE);


    // =========================
    // PERÍMETRO CRANEAL
    // =========================

    let resultadoPC = "No ingresado";

    if (
        perimetroCraneal !== "" &&
        refPC
    ) {

        resultadoPC =
            obtenerDE(perimetroCraneal, refPC);
    }


    // =========================
    // MOSTRAR RESULTADOS
    // =========================

    mostrarEstadoNutricional(estadoNutricional);

   document.getElementById("categoria").innerHTML =
    `
    <div class="detalle-resultado">

        <div class="fila-resultado">
            <span>Indicador principal</span>
            <strong>${indicadorPrincipal}</strong>
        </div>

        <div class="fila-resultado">
            <span>Clasificación DE</span>
            <strong>${dePrincipal}</strong>
        </div>

        <div class="fila-resultado">
            <span>P/E</span>
            <span>${dePE}</span>
        </div>

        <div class="fila-resultado">
            <span>P/T</span>
            <span>${dePT}</span>
        </div>

        <div class="fila-resultado">
            <span>T/E</span>
            <span>${deTE} — ${estadoTalla}</span>
        </div>

        <div class="fila-resultado">
            <span>PCe/E</span>
            <span>${resultadoPC}</span>
        </div>

    </div>
    `;

}


// =========================
// EVALUACIÓN 24 A 60 MESES
// =========================

else if (edadTotalMeses <= 60) {

    const perimetroCraneal =
        document.getElementById("perimetroCraneal").value;

    const cintura =
    document.getElementById("cintura").value;


    // =========================
    // ELEGIR TABLAS SEGÚN SEXO
    // =========================

    const tablaPE =
        sexo === "nino"
            ? tablaPE_Ninos_2a5
            : tablaPE_Ninas_2a5;

    const tablaTE =
        sexo === "nino"
            ? tablaTE_Ninos_2a5
            : tablaTE_Ninas_2a5;

    const tablaPT =
        sexo === "nino"
            ? tablaPT_Ninos_2a5
            : tablaPT_Ninas_2a5;

    const tablaPC =
        sexo === "nino"
            ? tablaPCeE_Ninos_0a3
            : tablaPCeE_Ninas_0a3;


    // =========================
    // BUSCAR REFERENCIAS
    // =========================

    const refPE =
        buscarPorMes(tablaPE, edadTotalMeses);

    const refTE =
        buscarPorMes(tablaTE, edadTotalMeses);

    const refPT =
        buscarPorTalla(tablaPT, talla);


    // PCe/E solo existe hasta los 36 meses
    let refPC = null;

    if (edadTotalMeses <= 36) {

        refPC =
            buscarPorMes(tablaPC, edadTotalMeses);

    }


    // =========================
    // VALIDAR REFERENCIAS
    // =========================

    if (!refPE || !refTE || !refPT) {

        alert(
            "No se encontró una referencia válida para los datos ingresados."
        );

        return;
    }


    // =========================
    // CALCULAR DE
    // =========================

    const dePE =
        obtenerDE(peso, refPE);

    const deTE =
        obtenerDE(talla, refTE);

    const dePT =
        obtenerDE(peso, refPT);


    // =========================
    // INDICADOR PRINCIPAL
    // =========================

    const indicadorPrincipal = "P/T";

    const dePrincipal = dePT;


    // =========================
    // ESTADO NUTRICIONAL
    // =========================

    const estadoNutricional =
        calificarNutricion(dePrincipal);


    // =========================
    // CALIFICACIÓN ESTATURAL
    // =========================

    const estadoTalla =
        calificarTalla(deTE);


    // =========================
    // PERÍMETRO CRANEAL
    // =========================

    let resultadoPC = "No corresponde por edad";


    if (edadTotalMeses <= 36) {

        if (
            perimetroCraneal !== "" &&
            refPC
        ) {

            resultadoPC =
                obtenerDE(perimetroCraneal, refPC);

        } else {

            resultadoPC = "No ingresado";

        }

    }

// =========================
// PERÍMETRO DE CINTURA
// =========================

let resultadoCintura = "No corresponde por edad";

// La evaluación de cintura comienza a los 5 años
if (edadTotalMeses === 60) {

    const tablaCintura =
        sexo === "nino"
            ? tablaPCE_Ninos_5a19
            : tablaPCE_Ninas_5a19;

    const refCintura =
        tablaCintura.find(fila => fila.edad === 5);

    if (
        cintura !== "" &&
        refCintura
    ) {

        const evaluacionCintura =
            evaluarCintura(cintura, refCintura);

        resultadoCintura =
            `${evaluacionCintura.percentil} — ${evaluacionCintura.clasificacion}`;

    } else {

        resultadoCintura = "No ingresado";
    }

}

    // =========================
    // MOSTRAR RESULTADOS
    // =========================

    mostrarEstadoNutricional(estadoNutricional);

    document.getElementById("categoria").innerHTML =
    `
    <div class="detalle-resultado">

        <div class="fila-resultado">
            <span>Indicador principal</span>
            <strong>${indicadorPrincipal}</strong>
        </div>

        <div class="fila-resultado">
            <span>Clasificación DE</span>
            <strong>${dePrincipal}</strong>
        </div>

        <div class="fila-resultado">
            <span>P/E</span>
            <span>${dePE}</span>
        </div>

        <div class="fila-resultado">
            <span>P/T</span>
            <span>${dePT}</span>
        </div>

        <div class="fila-resultado">
            <span>T/E</span>
            <span>${deTE} — ${estadoTalla}</span>
        </div>

        <div class="fila-resultado">
            <span>PCe/E</span>
            <span>${resultadoPC}</span>
        </div>

        <div class="fila-resultado">
            <span>PC/E cintura</span>
            <span>${resultadoCintura}</span>
        </div>

    </div>
    `;

}


// =========================
// EVALUACIÓN 61 A 228 MESES
// 5 años 1 mes a 19 años
// =========================

else if (edadTotalMeses <= 228) {

    const cintura =
        document.getElementById("cintura").value;


    // =========================
    // ELEGIR TABLAS SEGÚN SEXO
    // =========================

    const tablaIMCE =
        sexo === "nino"
            ? tablaIMCE_Ninos_5a19
            : tablaIMCE_Ninas_5a19;

    const tablaTE =
        sexo === "nino"
            ? tablaTE_Ninos_5a19
            : tablaTE_Ninas_5a19;

    const tablaPE =
        sexo === "nino"
            ? tablaPE_Ninos_5a10
            : tablaPE_Ninas_5a10;


    // =========================
    // BUSCAR REFERENCIAS
    // =========================

    const refIMCE =
        buscarPorMes(tablaIMCE, edadTotalMeses);

    const refTE =
        buscarPorMes(tablaTE, edadTotalMeses);

    let refPE = null;

    if (edadTotalMeses <= 120) {

        refPE =
            buscarPorMes(tablaPE, edadTotalMeses);
    }


    // =========================
    // VALIDAR REFERENCIAS
    // =========================

    if (!refIMCE || !refTE) {

        alert(
            "No se encontró una referencia válida para la edad ingresada."
        );

        return;
    }


    // =========================
    // CALCULAR DE
    // =========================

    const deIMCE =
        obtenerDE_IMC(imc, refIMCE);

    const deTE =
        obtenerDE(talla, refTE);

    let dePE = "No corresponde por edad";

    if (refPE) {

        dePE =
            obtenerDE(peso, refPE);
    }


    // =========================
    // ESTADO NUTRICIONAL
    // =========================

    const indicadorPrincipal = "IMC/E";

    const estadoNutricional =
        calificarNutricion(deIMCE);

    const estadoTalla =
        calificarTalla(deTE);


    // =========================
    // PERÍMETRO DE CINTURA
    // =========================

    let resultadoCintura = "No ingresado";

    const edadAnios =
        Math.floor(edadTotalMeses / 12);

    if (cintura !== "") {

        if (edadAnios >= 5 && edadAnios <= 18) {

            const tablaCintura =
                sexo === "nino"
                    ? tablaPCE_Ninos_5a19
                    : tablaPCE_Ninas_5a19;

            const refCintura =
                tablaCintura.find(
                    fila => fila.edad === edadAnios
                );

            if (refCintura) {

                const evaluacionCintura =
                    evaluarCintura(
                        cintura,
                        refCintura
                    );

                resultadoCintura =
                    `${evaluacionCintura.percentil} — ${evaluacionCintura.clasificacion}`;
            }

        } else if (edadAnios === 19) {

            resultadoCintura =
                evaluarCinturaAdulto(
                    cintura,
                    sexo
                );
        }
    }


    // =========================
    // MOSTRAR RESULTADOS
    // =========================

    mostrarEstadoNutricional(estadoNutricional);

    document.getElementById("categoria").innerHTML =
    `
    <div class="detalle-resultado">

        <div class="fila-resultado">
            <span>Indicador principal</span>
            <strong>${indicadorPrincipal}</strong>
        </div>

        <div class="fila-resultado">
            <span>IMC/E</span>
            <strong>${deIMCE}</strong>
        </div>

        <div class="fila-resultado">
            <span>IMC</span>
            <span>${imc.toFixed(2)} kg/m²</span>
        </div>

        <div class="fila-resultado">
            <span>P/E</span>
            <span>${dePE}</span>
        </div>

        <div class="fila-resultado">
            <span>T/E</span>
            <span>${deTE} — ${estadoTalla}</span>
        </div>

        <div class="fila-resultado">
            <span>PC/E cintura</span>
            <span>${resultadoCintura}</span>
        </div>

    </div>
    `;
}


// =========================
// FUERA DEL RANGO PEDIÁTRICO
// =========================

else {

    document.getElementById("resultado").textContent =
        "Fuera de rango";

    document.getElementById("categoria").textContent =
        "La evaluación pediátrica está disponible hasta los 19 años.";
}


    console.log("Sexo:", sexo);

    console.log("Edad:", edadTotalMeses, "meses");

    console.log("Peso:", peso, "kg");

    console.log("Talla / longitud:", talla, "cm");

    console.log("IMC pediátrico:", imc);

    console.log("Perímetro de cintura:",
        document.getElementById("cintura").value);

    console.log("Perímetro craneal:",
        document.getElementById("perimetroCraneal").value);

}



// =========================
// SERVICE WORKER
// =========================

if ("serviceWorker" in navigator) {

    navigator.serviceWorker.register("service-worker.js")

        .then(() => {

            console.log(
                "Service Worker registrado correctamente."
            );

        })

        .catch((error) => {

            console.log(
                "Error al registrar Service Worker:",
                error
            );

        });

}