# contador-o-matic
Reloj con cuenta atrás. Pruébalo en https://borilio.github.io/contador

1. Establecer la fecha límite mediante las variables limiteDia, limiteMes, etc.
2. En limiteMax se establece el número máximo de días que saldrá en el cronómetro, una vez pasado 0 se reiniciará.
3. Si se establece limiteReal=true, no se tendrá en cuenta limiteMax y se mostrarán los días restantes, sea cual sea. Si se 
   desea tener en cuenta el limiteMax, su valor deberá ser limiteReal = false.
4. El estilo del cronómetro está aplicado con bootstrap, por lo que debes añadir bootstrap 4.0 (como mínimo) a la página.
5. Al editar el script, sólo modificar los valores (números o true y false), no borrar signos de puntuación (; " , etc)  
6. Si en el crono, en lugar de números aparece "NaN", es que la fecha se ha establecido mal (ej: dia=34, mes=13, etc)
7. Se puede mostrar o no (limiteMensaje=true o false) un mensaje dinámico que avisa con colores contextuales (verde) de si quedan pocos días
   o de si la oferta ha expirado.
8. Con limitePocosDias se puede establecer los días a lo cual empieza a mostrar el aviso de pocos días (si es menor o igual que este número, se muestra)
   Ten en cuenta que deberá ser menor que limiteMax (número máximo de días que saldrá en el cronómetro). No se tienen en cuenta las horas.
9. Los mensajes se pueden personalizar fácilmente en la zona de configuración, para cambiar en un futuro o para traducirlo en otros idiomas.
