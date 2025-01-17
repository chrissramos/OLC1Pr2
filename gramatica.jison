/**
 * Ejemplo mi primer proyecto con Jison utilizando Nodejs en Ubuntu
 */

/* Definición Léxica */
%lex

%options case-insensitive

%%

/*RESERVADAS*/
"int"			return 'RINT';
"double"		return 'RDOUBLE';
"char"			return 'RCHAR';
"bool"			return 'RBOOL';
"string"		return 'RSTRING';
"void"			return 'RVOID';
"console"		return 'RCONSOLE';
"write"			return 'RWRITE';
"if"			return 'RIF';
"else"			return 'RELSE';
"switch"		return 'RSWITCH';
"case"			return 'RCASE';
"default"		return 'RDEFAULT';
"for"			return 'RFOR';
"while"			return 'RWHILE';
"do"			return 'RDO';
"return"		return 'RRETURN';
"break"			return 'RBREAK';
"continue"		return 'RCONTINUE';
"main"			return 'RMAIN';
"true"			return 'RTRUE';
"false"			return 'RFALSE';



/*signos x*/
";"					return 'PTCOMA';
","					return "COMA";
"."					return 'PUNTO';
":"					return 'DOSPUNTOS';
/*agrupacion*/
"("					return 'PARIZQ';
")"					return 'PARDER';
"{"					return 'LLAVEIZQ';
"}"					return 'LLAVEDER';
"["					return 'CORIZQ';
"]"					return 'CORDER';
/*aritmeticos*/
"+"					return 'MAS';
"-"					return 'MENOS';
"*"					return 'POR';
"/"					return 'DIVIDIDO';
"++"				return 'INCREMENTO';
"--"				return 'DECREMENTO'
/*logicos*/
"&&"					return 'ANDY';
"||"					return 'ORO';

/*relacionales*/
">"				return 'MAYOR';
"<"				return 'MENOR';
">="			return 'MAYORIGUAL';
"<="			return 'MENORIGUAL';
"=="			return 'IGUALES';
"!="			return 'DISTINTO';
"!"				return 'ADMIRACION';
/*asignacion */
"="				return 'IGUAL';

/* Espacios en blanco */
[ \r\t]+			{}
\n					{}

/*ER's*/
[0-9]+("."[0-9]+)?\b  					return 'DECIMAL';
[0-9]+\b								return 'ENTERO';
([a-zA-Z_])[a-zA-Z0-9_]*\b 				return 'IDENTIFICADOR'; 
(\'[^']*\')							{ yytext = yytext.substr(1,yyleng-2); return 'CONTENIDOHTML'; } 
//(\"[^"]*\")\b 							return 'CADENA';
\"[^\"]*\"								{ yytext = yytext.substr(1,yyleng-2); return 'CADENA'; } 
("//".*\r\n)|("//".*\n)|("//.*\r")				  //Comentario Simple
"/*""/"*([^*/]|[^*]"/"|"*"[^/])*"*"*"*/" 			//Comentario Multi			


<<EOF>>				return 'EOF';

.					{ 
						errorLexico += " <tr> <th> Lexico </th> <th> " +  yylloc.first_line + "</th> <th> " +  yylloc.first_column + "</th> <th>" + "El caracter: " + yytext + " No es parte del lenguaje </th> </tr>" ; 
						console.log(errorLexico);
						//console.error('Este es un error léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column); 
						}
/lex

%{
var fs = require('fs');
var contHtml = "";	
var errorLexico = " <!DOCTYPE html>  <html> <head>  <meta charset=\"utf-8\" /> <title>Reporte Errores</title> <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css\" ";
errorLexico+=    " </head> <body> <div class=\"container\"> <h1>Reporte de Errores</h1>  <br> <table class=\"table table-bordered\"> <tr> <th>Tipo error</th> <th>Linea </th> <th>Columna </th> <th>Descripcion </th> </tr> ";
%}

/* Asociación de operadores y precedencia */

%left 'MAS' 'MENOS'
%left 'POR' 'DIVIDIDO'
%left UMENOS

%start ini

%% /* Definición de la gramática */

ini
	: instrucciones EOF { 
		console.log('Termino analisis ');
		contHtml += "";
		//console.log(contHtml);
		fs.writeFileSync('./tableHtml.txt', contHtml);
		errorLexico += "</table> </body> </html>";
		console.log(errorLexico)
		fs.writeFileSync('./errores.txt', errorLexico);
		fs.writeFileSync('./errores.html', errorLexico);
		
		return $1;
		}
;
instrucciones
	: instrucciones instruccion  {  $$ = { 
					tipo: 'instrucciones',
					valor: [$1,$2]
				  };	}
	| instruccion {  $$ = { 
					tipo: 'instrucciones',
					valor: $1 
				  };	}
	| error { 
			errorLexico += " <tr> <th> Sintactico </th> <th> " +   this._$.first_line + "</th> <th> " +  this._$.first_colum+ "</th> <th>" + " NO Debio venir " + yytext + " No es parte del lenguaje </th> </tr>" ; 
		console.error('Este es un error sintáctico: ' + yytext + ', en la linea: ' + this._$.first_line + ', en la columna: ' + this._$.first_column); }
;
/*
instruccion
	: REVALUAR CORIZQ expresion CORDER PTCOMA {
		console.log('El valor de la expresión es: ' + $3);
	}
;
*/
// sh compilar.sh
// node parser
instruccion
	:	main  {  $$ = { 
					tipo: 'instruccion',
					valor: $1
					};	}
	| 	metodo {  $$ = { 
					tipo: 'instruccion',
					valor: $1
					};	}
	| adentro  {  $$ = { 
					tipo: 'instruccion',
					valor: $1
					};	}
;
adentros
	: adentros adentro  {  $$ = { 
					tipo: 'ADENTROS',
					valor: [$1, $2]
					};	}
	|adentro {  $$ = { 
					tipo: 'ADENTROS',
					valor: $1
					};	}
	| error { console.error('Este es un error sintáctico: ' + yytext + ', en la linea: ' + this._$.first_line + ', en la columna: ' + this._$.first_column); }
;
adentro
	: declaracionvar {  $$ = { 
					tipo: 'ADENTRO',
					valor: $1
					};	}
	|RCONSOLE PUNTO RWRITE PARIZQ expresion PARDER PTCOMA {  $$ = { 
					tipo: 'ADENTRO',
					valor: [$1, $2, $3, $4, $5, $6, $7]
					};	}
	|RIF PARIZQ expresionlogica PARDER LLAVEIZQ finif {  $$ = { 
					tipo: 'ADENTRO',
					valor: [$1, $2, $3, $4, $5, $6]
					};	}
	|RELSE LLAVEIZQ finif {  $$ = { 
					tipo: 'ADENTRO',
					valor: [$1, $2, $3]
					};	}
	|RELSE RIF PARIZQ expresionlogica PARDER LLAVEIZQ finif {  $$ = { 
					tipo: 'ADENTRO',
					valor: [$1, $2, $3, $4, $5, $6, $7]
					};	}
	
	|RFOR PARIZQ variablefor  IGUAL expresion PTCOMA expresionlogica PTCOMA expresion subirfor PARDER LLAVEIZQ  poscontinue {  $$ = { 
					tipo: 'ADENTRO',
					valor: [$1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13]
					};	}
	|RWHILE PARIZQ expresionlogica PARDER LLAVEIZQ  poscontinue{  $$ = { 
					tipo: 'ADENTRO',
					valor: [$1, $2, $3, $4, $5, $6]
					};	}
	|RDO LLAVEIZQ  poscontinue {  $$ = { 
					tipo: 'ADENTRO',
					valor: [$1, $2, $3]
					};	}
	|RWHILE PARIZQ expresionlogica PARDER PTCOMA {  $$ = { 
					tipo: 'ADENTRO',
					valor: [$1, $2, $3, $4, $5]
					};	}
	
	|RSWITCH PARIZQ expresion PARDER LLAVEIZQ casos LLAVEDER 
				{  $$ = { 
					tipo: 'ADENTRO',
					valor: [$1, $2, $3, $4, $5, $6, $7]
					};	}
	|RCONTINUE PTCOMA {  $$ = { 
					tipo: 'ADENTRO',
					valor: [$1, $2]
					};	}
	|RBREAK PTCOMA{  $$ = { 
					tipo: 'ADENTRO',
					valor: [$1, $2]
					};	}
	|llamarmetodo 
	{  $$ = { 
					tipo: 'ADENTRO',
					valor: $1
					};	}
;

llamarmetodo
	: IDENTIFICADOR PARIZQ PARDER PTCOMA {  $$ = { 
					tipo: 'LLAMARMETODO',
					valor: [$1, $2, $3, $4]
					};	}
	| IDENTIFICADOR PARIZQ listapar PARDER  PTCOMA {  $$ = { 
					tipo: 'LLAMARMETODO',
					valor: [$1, $2, $3, $4, $5]
					};	}
;
listapar
	: listapar COMA par {  $$ = { 
					tipo: 'LISTAPAR',
					valor: [$1, $2, $3]
					};	}
	|par {  $$ = { 
					tipo: 'LISTAPAR',
					valor: $1
					};	}
;

par 
	: IDENTIFICADOR {  $$ = { 
					tipo: 'PAR',
					valor: $1
					};	}
;


CUERPOIMP
	:expresion {  $$ = { 
					tipo: 'CUERPO_IMP',
					valor: $1
					};	}
	|CONTENIDOHTML {
					contHtml+= $1
					  $$ = { 
					tipo: 'CUERPO_IMP',
					valor: $1
					};
					
						}
	
;
casos
	:casos casoevaluar {  $$ = { 
					tipo: 'CASOS',
					valor: [$1, $2]
					};	}
	|casoevaluar {  $$ = { 
					tipo: 'CASOS',
					valor: $1
					};	}
;

casoevaluar
	:RCASE expresion DOSPUNTOS adentros RBREAK PTCOMA{  $$ = { 
					tipo: 'CASO_EVALUAR',
					valor: [$1, $2, $3, $4, $5, $6]
					};	}
	| RDEFAULT DOSPUNTOS adentros  {  $$ = { 
					tipo: 'CASO_EVALUAR',
					valor: [$1, $2, $3]
					};	}
;

posbreak
	: 
;

variablefor
	: tipodato expresion {  $$ = { 
					tipo: 'VARIABLE_FOR',
					valor: [$1, $2]
					};	}
	|expresion {  $$ = { 
					tipo: 'VARIABLE_FOR',
					valor: $1
					};	}
;

subirfor
	: MAS MAS {  $$ = { 
					tipo: 'SUBIR_FOR',
					valor: [$1, $2]
					};	}
	| MENOS MENOS {  $$ = { 
					tipo: 'SUBIR_FOR',
					valor: [$1, $2]
					};	}
;

finif
	: LLAVEDER{  $$ = { 
					tipo: 'FIN_IF',
					valor: $1
					};	}
	| adentros LLAVEDER {  $$ = { 
					tipo: 'FIN_IF',
					valor: [$1, $2]
					};	}
;

poscontinue
	: LLAVEDER {  $$ = { 
					tipo: 'POS_CONTINUE',
					valor: $1
					};	}
	| adentros LLAVEDER {  $$ = { 
					tipo: 'POS_CONTINUE',
					valor: [$1, $2]
					};	}
	/*| adentros RCONTINUE PTCOMA LLAVEDER{  $$ = { 
					tipo: 'POS_CONTINUE',
					valor: [$1, $2, $3, $4]
					};	}*/
;

declaracionvar
	: tipodato listavariables asingacionuna {  $$ = { 
					tipo: 'DECLARACION_VAR',
					valor: [$1, $2, $3]
					};	}
	|listavariables asingacionuna {  $$ = { 
					tipo: 'DECLARACION_VAR',
					valor: [$1, $2]
					};	}
;

asingacionuna 
	: PTCOMA {  $$ = { 
					tipo: 'ASIGNACION_UNA',
					valor: $1
					};	}
	| IGUAL expresion PTCOMA {  $$ = { 
					tipo: 'ASINGACION_UNA',
					valor: [$1, $2, $3]
					};	}
	| IGUAL llamarmetodo {  $$ = { 
					tipo: 'ASINGACION_UNA',
					valor: [$1, $2]
					};	}
;

listavariables 
	: listavariables COMA variablesls {  $$ = { 
					tipo: 'LISTA_VARIABLES',
					valor: [$1, $2, $3]
					};	}
	| variablesls {  $$ = { 
					tipo: 'LISTA_VARIABLES',
					valor: $1
					};	}
;

variablesls 
	: expresion{  $$ = { 
					tipo: 'VARIABLE',
					valor: $1
					};	}
;

main
	: RVOID RMAIN  PARIZQ PARDER LLAVEIZQ adentros LLAVEDER {  $$ = { 
					tipo: 'MAIN',
					valor: [ $1, $2, $3, $4, $5, $6, $7 ]
					};	}
;

tipodato
	: RSTRING {  $$ = { 
					tipo: 'TIPO_DATO',
					valor: $1
					};	}
	| RINT {  $$ = { 
					tipo: 'TIPO_DATO',
					valor: $1
					};	}
	| RDOUBLE {  $$ = { 
					tipo: 'TIPO_DATO',
					valor: $1
					};	}
	| RCHAR {  $$ = { 
					tipo: 'TIPO_DATO',
					valor: $1
					};	}
;

metodo
	: tipometodo  PARIZQ parametrosdentro  LLAVEIZQ adentros posreturn  {  $$ = { 
					tipo: 'METODO',
					valor:[
						$1, $2, $3, $4, $5, $6
					]
					};	}
;

posreturn
	: LLAVEDER {  $$ = { 
					tipo: 'POS_RETURN',
					valor:	$1
					
					};	}
	| RRETURN PTCOMA LLAVEDER {  $$ = { 
					tipo: 'POS_RETURN',
					valor:[
						$1, $2
					]
					};	}
	| RRETURN expresion PTCOMA LLAVEDER {  $$ = { 
					tipo: 'POS_RETURN',
					valor:[
						$1, $2, $3
					]
					};	}
;

tipometodo
	: tipodato expresion {  $$ = { 
					tipo: 'TIPO_METODO',
					valor:[
						$1, $2
					]
					};	}
	| RVOID expresion {  $$ = { 
					tipo: 'TIPO_METODO',
					valor:[
						$1, $2
					]
					};	}
;

parametrosdentro
	: PARDER {  $$ = { 
					tipo: 'PARAMETROS_DENTRO',
					valor:	$1
					};	}
	| listaparametros PARDER {  $$ = { 
					tipo: 'PARAMETROS_DENTRO',
					valor:[
						$1, $2
					]
					};	}
;

listaparametros
	: listaparametros COMA parametros {  $$ = { 
					tipo: 'LISTA_PARAMETROS',
					valor:[
						$1, $2 , $3
					]
					};	}
	| parametros{  $$ = { 
					tipo: 'LISTA_PARAMETROS',
					valor: $1
					
					};	}
;

parametros
	: tipodato expresion  {  $$ = { 
					tipo: 'PARAMETROS',
					valor:[
						$1, $2
					]
					};	}
;

expresionlogica
	:expresionrelacional ANDY expresionrelacional{  $$ = { 
					tipo: 'EXP_LOGICA',
					valor:[
						$1, $2, $3
					]
					};	}
	|expresionrelacional ORO expresionrelacional {  $$ = { 
					tipo: 'EXP_LOGICA',
					valor:[
						$1, $2, $3
					]
					};	}
	|ADMIRACION expresionrelacional {  $$ = { 
					tipo: 'EXP_LOGICA',
					valor:[
						$1, $2
					]
					};	}
	|expresionrelacional {  $$ = { 
					tipo: 'EXP_REL',
					valor:$1
					};	}
	
	
;

expresionrelacional
	:expresion  MAYOR expresion {  $$ = { 
					tipo: 'EXP_REL',
					valor:[
						$1, $2, $3
					]
					};	}
	|expresion MENOR expresion {  $$ = { 
					tipo: 'EXP_REL',
					valor:[
						$1, $2, $3
					]
					};	}
	|expresion MAYOR IGUAL expresion {  $$ = { 
					tipo: 'EXP_REL',
					valor:[
						$1, $2, $3
					]
					};	}
	|expresion MENOR IGUAL expresion {  $$ = { 
					tipo: 'EXP_REL',
					valor:[
						$1, $2, $3
					]
					};	}
	|expresion IGUALES expresion {  $$ = { 
					tipo: 'EXP_REL',
					valor:[
						$1, $2, $3
					]
					};	}
	|expresion DISTINTO expresion {  $$ = { 
					tipo: 'EXP_REL',
					valor:[
						$1, $2, $3
					]
					};	}
	|expresion
;
expresion
	/*: MENOS expresion %prec UMENOS  {  $$ = { 
					type: 'SUMA',
					valor:[
						$1, $2 , $3
					]
					};	}    //	{ $$ = $2 *-1; }
	|*/: expresion MAS expresion	{  $$ = { 
					tipo: 'EXPRESION',
					valor:[
						$1, $2, $3
					]
					};	}	
	| expresion MENOS expresion	{  $$ = { 
					tipo: 'EXPRESION',
					valor:[
						$1, $2, $3
					]
					};	}	
	| expresion POR expresion	{  $$ = { 
					tipo: 'EXPRESION',
					valor:[
						$1, $2, $3
					]
					};	}	
	| expresion DIVIDIDO expresion	{  $$ = { 
					tipo: 'EXPRESION',
					valor:[
						$1, $2, $3
					]
					};	}
	| ENTERO			{  $$ = { 
					tipo: 'ENTERO',
					valor: $1
					};	}			
	| DECIMAL			{  $$ = { 
					tipo: 'DECIMAL',
					valor: $1
					};	}			
	| PARIZQ expresion PARDER	{  $$ = { 
					tipo: 'AGRUPACION',
					valor:[
						$1, $2, $3
					]
					};	}
	
	|CADENA {  $$ = { 
					tipo: 'CADENA',
					valor: $1
					};	}
	|IDENTIFICADOR {  $$ = { 
					tipo: 'IDENTIFICADOR',
					valor: $1
					};	}
	|RTRUE {  $$ = { 
					tipo: 'BOOL',
					valor: $1
					};	}
	|RFALSE {  $$ = { 
					tipo: 'BOOL',
					valor: $1
					};	}
	|CONTENIDOHTML {
					contHtml+= $1
					  $$ = { 
					tipo: 'EXPRESION',
					valor: $1
					};
					
						}
;
