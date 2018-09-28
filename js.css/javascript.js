var Obj_carpetas = [{
	nombre_carpeta: 'nombre_carpeta',
	index_actual: 0,
	array_imagenes: ['0.png', '1.png', '2.png' ],
	array_textos: ['Se implementan las <a class="clickable" onclick="llevar_a(2)">tareas 3 y 4</a> por el módulo de transferencia de archivos, donde los módulos de ambos sistemas intercambian archivos y órdenes', 'Es necesario que estos archivos y órdenes se transmitan fiablemente, pero este requerimiento es utilizado también por otras aplicaciones, por lo que es lógico que sea un módulo aparte dedicado al servicio de comunicaciones que se encargue de los detalles en el envío de datos y órdenes (<a class="clickable" onclick="llevar_a(2)">tarea 2</a>)', 'Las tareas anteriores son independientes del tipo de red que interconecta los sistemas, por lo que resulta lógico implementar un módulo adicional que se encargue de gestionar el acceso a esta red (<a class="clickable" onclick="llevar_a(2)">tarea 1</a>), de forma que si la naturaleza de la red cambia, solo este módulo se verá afectado.'],
	delay_ms: 1000
},{
	nombre_carpeta: 'nombre_carpeta2',
	index_actual: 0,
	array_imagenes: ['servicio1.PNG', 'servicio2.PNG', 'servicio3.PNG', 'servicio4.PNG' ],
	array_textos: ['','<b>Especificación del protocolo</b>: dos entidades de la misma capa en sistemas diferentes cooperan a través de un <a class="clickable" onclick="llevar_a(7)">protocolo</a>. Este <a class="clickable" onclick="llevar_a(7)">protocolo</a> debe ser definido con precisión, ya que los sistemas son diferentes. Entre estas especificaciones está el formato del <a class="clickable" onclick="llevar_a(7)">PDU</a>, la semántica y la sintaxis.', '<b>Definición del servicio</b>: Adicionalmente a los <a class="clickable" onclick="llevar_a(7)">protocolos</a> definidos en cada capa, se necesitan normalizaciones para los servicios que cada capa ofrece a la capa inmediatamente superior. Esta definición es una descripción funcional donde se definen estos servicios, pero no son especifica cómo se proveen. Uso interno de la capa.', '<b>Direccionamiento</b>: Cada capa provee de servicios a la entidad de la capa inmediatamente superior. Estas entidades se identifican mediante un <a class="clickable" onclick="llevar_a(7)">SAP</a>. De esta manera, un <a class="clickable" onclick="llevar_a(7)">SAP</a> del servicio de red identifica a la entidad de una capa de transporte que esté usando este servicio.'],
	delay_ms: 1000
},{
	nombre_carpeta: 'nombre_carpeta3',
	index_actual: 0,
	array_imagenes: ['arqui1.PNG', 'arqui2.PNG', 'arqui3.PNG', 'arqui4.PNG', 'arqui5.PNG', 'arqui6.PNG', 'arqui7.PNG', 'arqui8.PNG' ],
	array_textos: ['Desde el computador A se pretende transferir un archivo registro a registro al computador B.', 'Cada registro se pasa al módulo de la <b>capa de transporte</b>. Esta capa puede fraccionar el bloque en unidades más pequeñas para hacerlas más manejables. Este traspaso a la capa de transporte es una llamada a procedimiento donde los argumentos son la <b>dirección y el <a class="clickable" onclick="llevar_a(7)">SAP</a> del destino</b>, junto con el <b>registro del archivo</b>.', 'La capa de transporte añade una cabecera que contendrá información de control de acuerdo al <a class="clickable" onclick="llevar_a(7)">protocolo</a> usado en esta capa. Esta información será el <b><a class="clickable" onclick="llevar_a(7)">SAP</a> destino</b>, el <b>número de secuencia</b> (si es que fraccionó el bloque original) y un <b>código de detección de error</b> (para verificar fiabilidad). El registro junto a esta información forma la <b><a class="clickable" onclick="llevar_a(7)">PDU</a> de transporte</b>.', 'La <a class="clickable" onclick="llevar_a(7)">PDU</a> de transporte se pasa a la capa inferior mediante una llamada a otro procedimiento. Los argumentos son la <b>dirección del computador B</b> y la <b><a class="clickable" onclick="llevar_a(7)">PDU</a> de transporte</b>.', 'El <a class="clickable" onclick="llevar_a(7)">protocolo</a> de acceso a la red debe pasar los datos a la red solicitando una transmisión y para esto se requiere el uso de información de control. En este caso el <a class="clickable" onclick="llevar_a(7)">protocolo</a> añade a la <a class="clickable" onclick="llevar_a(7)">PDU</a> de transporte una cabecera que contiene la <b>dirección del computador B</b> y una <b>solicitud de recursos</b>, formando la <b><a class="clickable" onclick="llevar_a(7)">PDU</a> de acceso a la red</b>. La <a class="clickable" onclick="llevar_a(7)">PDU</a> de transporte corresponde al campo de datos de la <a class="clickable" onclick="llevar_a(7)">PDU</a> de acceso a la red, por lo tanto la cabecera de transporte no es visible para este nivel, es decir, al nivel de acceso a la red no le concierne el contenido de la <a class="clickable" onclick="llevar_a(7)">PDU</a> de transporte.', 'La red acepta la <a class="clickable" onclick="llevar_a(7)">PDU</a> de red del computador A y la transmite a B. El módulo de acceso a la red realiza el servicio correspondiente a su <a class="clickable" onclick="llevar_a(7)">protocolo</a> recibiendo la <a class="clickable" onclick="llevar_a(7)">PDU</a> y eliminando la cabecera.', 'El módulo de acceso a la red pasa la restante <a class="clickable" onclick="llevar_a(7)">PDU</a> de transporte al módulo de la capa de transporte.', 'El <a class="clickable" onclick="llevar_a(7)">protocolo</a> de transporte realiza el servicio solicitado examinando la cabecera de la <a class="clickable" onclick="llevar_a(7)">PDU</a> de transporte y en función del contenido que tenga el campo del <a class="clickable" onclick="llevar_a(7)">SAP</a>, entrega el restante registro correspondiente a la aplicación pertinente que en este caso sería el módulo de transferencia de archivos del computador B.'],
	delay_ms: 1000
},{
	nombre_carpeta: 'nombre_carpeta4',
	index_actual: 0,
	array_imagenes: ['entorno1.PNG', 'entorno2.PNG', 'entorno3.PNG', 'entorno4.PNG' ],
	array_textos: ['En un entorno OSI cada sistema debe contener las 7 capas. Si la aplicación A quiere transmitir un mensaje a la aplicación B, invoca a la capa de aplicación (capa 7).', 'Esta capa establece una relación paritaria con la capa 7 del otro computador, usando el protocolo de la capa.', 'Este protocolo necesita los servicios de la capa 6, de forma que las dos entidades de la capa 6 usan también un protocolo en común.', 'Y así sucesivamente hasta la capa física, que es donde realmente se transmiten bits a través del medio. Es importante destacar que entre las capas por encima de la física no existe comunicación directa, ya que cada entidad pasa los datos hacia su capa inferior contigua para que los envíe a la entidad par. Este proceso se lleva a cabo a través del <b>encapsulamiento</b> de las PDU.'],
	delay_ms: 1000
},{
	nombre_carpeta: 'nombre_carpeta5',
	index_actual: 0,
	array_imagenes: ['red1.PNG', 'red2.PNG', 'red3.PNG', 'red4.PNG', 'red5.PNG' ],
	array_textos: ['Las tres capas inferiores están relacionadas con la conexión y la comunicación con la red.', 'Los paquetes creados por el sistema final pasan a través de uno o más nodos de la red que actúan como retransmisores entre los dos sistemas finales.', 'Los nodos intermedios implementan las capas 1 a 3 de la arquitectura. En este caso hay un único nodo intermedio entre los dos sistemas finales.', 'La capa 3 (de red) en el nodo intermedio realiza las funciones de conmutación y encaminamiento. En este nodo hay dos capas del enlace de datos y dos capas físicas, correspondiente a los enlaces con los dos sistemas finales. Cada capa del enlace de datos (y física) opera independientemente para proporcionar el servicio a la capa de red sobre su respectivo enlace.', 'Las cuatro capas superiores son protocolos «extremo-a-extremo» entre los sistemas finales.'],
	delay_ms: 1000
},{
	nombre_carpeta: 'nombre_carpeta6',
	index_actual: 0,
	array_imagenes: ['tcpip1.PNG', 'tcpip2.PNG', 'tcpip3.PNG', 'tcpip4.PNG', 'tcpip5.PNG' ],
	array_textos: ['En un entorno TCP/IP pueden haber múltiples aplicaciones y para diferenciarlas se ocupa la dirección denominada puerto.', 'Estas aplicaciones están haciendo uso simultáneo del protocolo TCP donde para cada una de ellas TCP establece una conexión lógica con la entidad TCP de la otra máquina. TCP se implementa solamente en los sistemas finales, donde supervisa los bloques de datos para asegurar que todos se entregan de forma fiable a la aplicación apropiada.', 'Para realizar este proceso, TCP crea <b>segmentos</b> (PDU de transporte) a través del proceso de encapsulamiento y los lleva a través de las conexiones lógicas que creó. La cabecera de este segmento tiene datos como el puerto destino, número de secuencia y suma de comprobación.', 'Estos segmentos, ahora llamados <b>datagramas</b> (PDU de IP), se llevan independientemente a través de IP, que se implementa en todos los sistemas finales y routers, y actúa como un porteador que transporta datagramas de un computador hasta otro a través de uno o más routers haciendo uso de una dirección de internet única en la red ubicada en la cabecera del datagrama.', 'Independiente de esto es el tipo de red que se tenga, la cual puede hacer uso de alguna tecnología como <a class="clickable" onclick="llevar_a(9)">Ethernet</a> o <a class="clickable" onclick="llevar_a(9)">FDDI</a>. A través del protocolo de acceso a la red, se permite al computador enviar los datos, ahora llamados <b>paquetes o tramas</b>, a través de la subred a un primer router (y único router intermedio en este caso). En el router se recibe el paquete a través de la red 1 (<a class="clickable" onclick="llevar_a(9)">Ethernet</a>) y el módulo IP del mismo lo posiciona—según la dirección destino de la cabecera IP—en la red 2 (<a class="clickable" onclick="llevar_a(9)">FDDI</a>), la cual lleva el paquete hacia el computador destino. El módulo de acceso a la red del router agrega una cabecera para realizar esto. En el computador destino se realiza entonces el proceso inverso completo de encapsulamiento.'],
	delay_ms: 1000
},{
	nombre_carpeta: 'nombre_carpeta7',
	index_actual: 0,
	array_imagenes: ['primitiva1.PNG', 'primitiva2.PNG', 'primitiva3.PNG', 'primitiva4.PNG', 'primitiva5.PNG', 'primitiva6.PNG' ],
	array_textos: ['En una transferencia de datos desde una entidad (N) a su entidad par (N) en otro sistema se verifican los siguientes hechos: La entidad origen (N) invoca a su entidad (N-1) con una primitiva de <b>solicitud</b>. Se asocian los parámetros correspondientes, como los datos y la dirección destino.', 'La entidad origen (N-1) prepara una <a class="clickable" onclick="llevar_a(7)">PDU</a> (N-1) para enviársela a su entidad par (N-1).', 'La entidad destino (N-1) entrega los datos al destino (N) a través de la primitiva de <b>indicación</b>, incluyendo los parámetros correspondientes.', 'En el caso de requerirse una confirmación (servicio confirmado), la entidad destino (N) emite una primitiva de <b>respuesta</b> a su entidad (N-1).', 'La entidad (N-1) convierte la confirmación en una <a class="clickable" onclick="llevar_a(7)">PDU</a> (N-1).', 'Se entrega esta confirmación a la entidad origen (N) a través de una primitiva de <b>confirmación</b>.'],
	delay_ms: 1000
},{
	nombre_carpeta: 'nombre_carpeta8',
	index_actual: 0,
	array_imagenes: ['aplica1.PNG', 'aplica2.PNG', 'aplica3.PNG'],
	array_textos: ['La mayoría de las aplicaciones requieren un protocolo de transporte fiable y orientado a la conexión, por lo que utilizan TCP.', 'Otras aplicaciones de propósito específico, como <a class="clickable" onclick="llevar_a(9)">SNMP</a>, no necesitan los servicios de TCP y utilizan el protocolo no orientado a conexión UDP.', 'Sin embargo, la arquitectura TCP/IP no exige que se haga uso de todas las capas, por lo que es posible desarrollar aplicaciones que invoquen directamente los servicios de cualquier capa, como por ejemplo aplicaciones que utilicen el protocolo IP directamente, como <a class="clickable" onclick="llevar_a(9)">ICMP</a>, <a class="clickable" onclick="llevar_a(9)">IGMP</a>, <a class="clickable" onclick="llevar_a(9)">OSPF</a> y <a class="clickable" onclick="llevar_a(9)">RSVP</a>. También es posible desarrollar aplicaciones que no necesiten interconexión de redes, ni TCP e invoquen directamente a la capa de acceso a la red.'],
	delay_ms: 1000

}];

$(function(){

   $(".principio").click(function(){
   	$("#1").click();

   });

});

function llevar_a(donde){
$("#"+donde).click();
}

function CalcularAltura(){

	var zonaContenido = document.getElementById("zonaContenido");

	var alturaDoc = window.innerHeight;
	var altura = alturaDoc - 210;
	var minimo = 350;
	if (altura < minimo)
		altura = minimo;

	zonaContenido.style.height = altura+"px";

}

function pantallaAnterior (){

  var pantallaActiva = document.getElementsByClassName("tab-pane fade in active");

  var pantallaInactiva = document.getElementsByClassName("tab-pane fade");

  for (var i = pantallaInactiva.length - 1; i >= 0; i--) {

      if (pantallaInactiva[i].id==pantallaActiva[0].id) {
        
        var indicador = i + 1;
      }
      
  }
  

  var activarPestaña = indicador - 1;

 activarPantallaClick(activarPestaña);
}

function pantallaSiguiente (){

  var pantallaActiva = document.getElementsByClassName("tab-pane fade in active");

  var pantallaInactiva = document.getElementsByClassName("tab-pane fade");

  for (var i = pantallaInactiva.length - 1; i >= 0; i--) {

      if (pantallaInactiva[i].id==pantallaActiva[0].id) {
        
        var indicador = i + 1;
      }
      
  }
  

  var activarPestaña = indicador + 1;

 activarPantallaClick(activarPestaña);
}

function activarPantallaClick (indicador){

  document.getElementById(indicador).click();

}

function imagen_familia(nombre_carpeta, textos, num_accion){

	for(set_img in Obj_carpetas){
		if(Obj_carpetas[set_img].nombre_carpeta == nombre_carpeta){
			
			if(num_accion == 1){
				
				if(Obj_carpetas[set_img].index_actual != (Obj_carpetas[set_img].array_imagenes.length)-1){
					Obj_carpetas[set_img].index_actual++;
					$('#'+nombre_carpeta).attr('src', "img/"+Obj_carpetas[set_img].nombre_carpeta+"/"+Obj_carpetas[set_img].array_imagenes[Obj_carpetas[set_img].index_actual].toString());
					$('#'+textos).html(Obj_carpetas[set_img].array_textos[Obj_carpetas[set_img].index_actual]);
					$('#'+nombre_carpeta+"_btn_ant").attr('class', "clickable pull-right");
				}

				if(Obj_carpetas[set_img].index_actual == (Obj_carpetas[set_img].array_imagenes.length)-1){
					$('#'+nombre_carpeta+"_btn_sig").attr('src', "img/otras_img/rdisabled.png");
					$('#'+nombre_carpeta+"_btn_sig").attr('class', "pull-left");
				}
			}
			if(num_accion == 0){
				if(Obj_carpetas[set_img].index_actual != 0){
					Obj_carpetas[set_img].index_actual--;
					$('#'+nombre_carpeta).attr('src', "img/"+Obj_carpetas[set_img].nombre_carpeta+"/"+Obj_carpetas[set_img].array_imagenes[Obj_carpetas[set_img].index_actual].toString());
					$('#'+textos).html(Obj_carpetas[set_img].array_textos[Obj_carpetas[set_img].index_actual]);
				}

				if(Obj_carpetas[set_img].index_actual == 0){
					$('#'+nombre_carpeta+"_btn_ant").attr('src', "img/otras_img/ldisabled.png");
					$('#'+nombre_carpeta+"_btn_ant").attr('class', "pull-right");
				}
			}

			if(Obj_carpetas[set_img].index_actual != (Obj_carpetas[set_img].array_imagenes.length)-1){
					$('#'+nombre_carpeta+"_btn_sig").attr('src', "img/otras_img/right.png");
					$('#'+nombre_carpeta+"_btn_sig").attr('class', "clickable pull-left");
				}
			if(Obj_carpetas[set_img].index_actual != 0){
					$('#'+nombre_carpeta+"_btn_ant").attr('src', "img/otras_img/left.png");
					$('#'+nombre_carpeta+"_btn_ant").attr('class', "clickable pull-right");
				}

		}
	}	
}

function play_familia(nombre_carpeta){

	for(set_img in Obj_carpetas){
		if(Obj_carpetas[set_img].nombre_carpeta == nombre_carpeta){
			Obj_carpetas[set_img].index_actual = 0;
			$('#'+nombre_carpeta).attr('src', Obj_carpetas[set_img].nombre_carpeta+"/"+Obj_carpetas[set_img].array_imagenes[Obj_carpetas[set_img].index_actual].toString());

			for(var i = 0 ; i < Obj_carpetas[set_img].array_imagenes.length; i++){
				setTimeout(function(){
				    imagen_familia(nombre_carpeta, 1);
				}, Obj_carpetas[set_img].delay_ms*(i+1));
			}
		}
	}


}

function generarPregunta (numeroPregunta,pregunta,alternativas,respuestaCorrecta){

  idPregunta = "pregunta_" + numeroPregunta;
  var formulario = document.getElementById(idPregunta);
  var textoPregunta = "texto_"+idPregunta;

  document.getElementById(textoPregunta).innerHTML = pregunta;


  for (var i = 0; i < alternativas.length; i++) {

    valorAlternativa = idPregunta + "_alternativa_" + (i+1);
    textoAlternativa = "texto_" + valorAlternativa;
    document.getElementById(valorAlternativa).value = alternativas[i];
    document.getElementById(valorAlternativa).textArea = alternativas[i];
    document.getElementById(textoAlternativa).innerHTML = alternativas[i];
  }

  respuesta = "respuesta_" + numeroPregunta;
  document.getElementById(respuesta).innerHTML = "Respuesta correcta: " + respuestaCorrecta;

}

function revisarRespuesta(respuestaCorrecta) {

  var formulario = document.getElementById("pregunta1");

  var respuesta = "";
  for (var i = 0; i < formulario.length; i++) {

    if (formulario[i].checked) {
      respuesta = formulario[i].value;
      break; // dance.
    }
  }

  var parrafo = document.getElementById("respuesta");

  if (respuesta == respuestaCorrecta) {
    parrafo.innerHTML="Correcto";
    parrafo.style.color = "GREEN";
  }
  else{
    parrafo.innerHTML="Incorrecto";
    parrafo.style.color = "RED";
  }


}



function corregirTodo(preguntasTotales) {

  var contadorCorrectas = 0;
  for (var i = 1; i <= preguntasTotales; i++) {
    respuesta = "respuesta_" + i;
    var respuestaCorrecta = document.getElementById(respuesta).innerHTML;
    var corrección = corregirRespuesta(i,respuestaCorrecta);
    if (corrección) {
      contadorCorrectas = contadorCorrectas + 1;
    }
  }
  nota = 1 + ((contadorCorrectas/preguntasTotales) * 6);
  

  alert("Respuestas correctas: " + contadorCorrectas + " de " + preguntasTotales +"\nLa calificación de la evaluación es: " + nota.toFixed(1));
}



function corregirRespuesta(numeroPregunta,respuestaCorrecta) {

  idFormulario = "pregunta_" + numeroPregunta;
  var formulario = document.getElementById(idFormulario);

  var respuesta = "";
  for (var i = 0; i < formulario.length; i++) {

    if (formulario[i].checked) {
      respuesta = "Respuesta correcta: " + formulario[i].value;
      break; // dance.
    }
  }
  idResultado = "resultado_" + numeroPregunta;
  var resultado = document.getElementById(idResultado);


  if (respuesta == respuestaCorrecta) {
    resultado.innerHTML="Correcto";
    resultado.style.color = "GREEN";
    document.getElementById("respuesta_"+numeroPregunta).className="oculto";
    return true;
  }
  else{
    resultado.innerHTML="Incorrecto";
    resultado.style.color = "RED";
    document.getElementById("respuesta_"+numeroPregunta).className="noOculto";
    return false;
  }


}


function correccionValida (preguntasTotales) {


  var contadorValidador = 0;
  for (var i = 1; i <= preguntasTotales; i++) {
    
    var validado = validarPregunta(i);
    console.log("la pregunta " + i + " es "+ validado);
    if (validado) {
      contadorValidador = contadorValidador + 1;
      console.log("entre aqui");
    }
  }


  if (contadorValidador==preguntasTotales) {

    console.log("no sé por que entre aquí");

    corregirTodo(preguntasTotales);
    document.getElementById("CorregirTodo").className = "oculto";

  }

  else {

    alert("Por favor completa la evaluación antes de corregir.");

  }


}


function validarPregunta (numeroPregunta) {

  idFormulario = "pregunta_" + numeroPregunta;
  var formulario = document.getElementById(idFormulario);

  for (var i = 0; i < formulario.length; i++) {

    if (formulario[i].checked) {
      return true;
    }
  }

  return false;

}