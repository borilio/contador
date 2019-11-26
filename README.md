# contador-o-matic
Reloj con cuenta atrás. 

1. Establecer la fecha límite mediante las variables limiteDia, limiteMes, etc.
2. En limiteMax se establece el número máximo de días que saldrá en el cronómetro, una vez pasado 0, volverá al limiteMax.
3. Si se establece limiteReal=true, no se tendrá en cuenta limiteMax y se mostrarán los días restantes, sea cual sea. Si se 
   desea tener en cuenta el limiteMax, su valor deberá ser limiteReal = false
4. El estilo del cronómetro está aplicado con bootstrap, por lo que debes añadir bootstrap 4.0 (como mínimo) a la página.
   