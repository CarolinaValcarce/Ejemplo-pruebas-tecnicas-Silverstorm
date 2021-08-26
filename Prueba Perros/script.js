/*Tenemos cuatro perros: un galgo, un dogo, un alano y un podenco. 
Éste último come más que el galgo; el alano come más que el galgo y menos que el dogo, pero éste come más que el podenco.
 ¿Cuál de los cuatro será más barato de mantener?.
 Escribe el resultado por consola*/

var dogs={ Dogo:0, Alano:0, Podenco:0, Galgo:0, 
	rtdo:function(){
		if((dogs.Podenco>dogs.Galgo)&&(dogs.Dogo>dogs.Alano)&&(dogs.Alano>dogs.Galgo)&&(dogs.Alano>dogs.Podenco)){
			return true;
		} return false;
	},
	intervalo:setInterval(function(){
		dogs.Dogo=Math.ceil(Math.random()*4);
		dogs.Alano=Math.ceil(Math.random()*4);
		dogs.Galgo=Math.ceil(Math.random()*4);
		dogs.Podenco=Math.ceil(Math.random()*4);

		if (dogs.rtdo()){
			clearInterval(dogs.intervalo);
			console.log("El dogo come: ", dogs.Dogo);
			console.log("El galgo come: ", dogs.Galgo);
			console.log("El alano come: ", dogs.Alano);
			console.log("El podenco come: ", dogs.Podenco);
		}
	},10)
}
