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
var errorLexico = "<table> <tr> <th>Tipo error</th> <th>Linea </th> <th>Columna </th> <th>Descripcion </th> </tr> ";

%}

/* Asociación de operadores y precedencia */

%left 'MAS' 'MENOS'
%left 'POR' 'DIVIDIDO'
%left UMENOS

%start ini

%% /* Definición de la gramática */

ini
	: instrucciones EOF { 
		fs.writeFileSync('./codigopy.txt', $1);
		console.log($1)
		return $1;
		}
;
instrucciones
	: instrucciones instruccion  {$$ = $1 +$2;}
	| instruccion  {$$ = $1;}
	| error { console.error('Este es un error sintáctico: ' + yytext + ', en la linea: ' + this._$.first_line + ', en la columna: ' + this._$.first_column); }
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
	:	main  {$$= $1;  }
	| 	metodo {$$= $1;  }
	| adentro {$$ = $1;} 
;
adentros
	: adentros adentro {$$ = $1 + $2 ;} 
	|adentro {$$ = [$1];}
	| error { console.error('Este es un error sintáctico: ' + yytext + ', en la linea: ' + this._$.first_line + ', en la columna: ' + this._$.first_column); }
;
adentro
	: declaracionvar {$$= $1;  }
	|RCONSOLE PUNTO RWRITE PARIZQ expresion PARDER PTCOMA { $$ = "print("+ $5+ ")\n";  }
	|RIF PARIZQ expresionlogica PARDER LLAVEIZQ finif {$$= "if " + $3 +":\n" + $6 + "\n" ;  }
	|RELSE LLAVEIZQ finif  {$$= "else: \n" +  $3 + "\n"; }
	|RELSE RIF PARIZQ expresionlogica PARDER LLAVEIZQ finif {$$= "elif " + $4 + ":\n" + $7 + "\n" ;  }
	
	|RFOR PARIZQ variablefor  IGUAL expresion PTCOMA expresionlogica PTCOMA expresion subirfor PARDER LLAVEIZQ  poscontinue  {$$= "for " + $3 + "in range (" + $5 + ",): \n" + $13 ;  } 
					
	|RWHILE PARIZQ expresionlogica PARDER LLAVEIZQ  poscontinue {$$= "while " + $3 + ":" + $6 + "\n";  }
	|RDO LLAVEIZQ  poscontinue  {$$= "while" + $3 + "\n" ;  }
	|RWHILE PARIZQ expresionlogica PARDER PTCOMA {$$= "while(" + $3 + "): \n" ;  }
	
	|RSWITCH PARIZQ expresion PARDER LLAVEIZQ casos LLAVEDER  {$$= "def switch(" + $3 + "): " + $6; + "\n" }
				
	|RCONTINUE PTCOMA {$$= "continue \n";  }
	|RBREAK PTCOMA {$$= "break \n";  }
	|llamarmetodo {$$= $1;  }
	
;

llamarmetodo
	: IDENTIFICADOR PARIZQ PARDER PTCOMA {$$= $1 + "()\n";  }
	| IDENTIFICADOR PARIZQ listapar PARDER  PTCOMA {$$= $1 + "(" + $3 + ")\n";  } 
;
listapar
	: listapar COMA par  {$$= $1 + ", " + $3;  }
	|par {$$= $1;  }
;

par 
	: IDENTIFICADOR {$$= $1;  }
;



casos
	:casos casoevaluar {$$= $1+$2;  } 
	|casoevaluar {$$= $1;  }
;

casoevaluar
	:RCASE expresion DOSPUNTOS adentros RBREAK PTCOMA {$$= "case" + ":" + $4 + "\n";  } 
	| RDEFAULT DOSPUNTOS adentros 
;

variablefor
	: tipodato expresion {$$= $2;  }  
	|expresion {$$= $1 ;  } 
;

subirfor
	: MAS MAS 
	| MENOS MENOS 
;

finif
	: LLAVEDER{$$= "\n";  }
	| adentros LLAVEDER {$$= $1 + "\n";  } 
;

poscontinue
	: LLAVEDER  {$$= "\n";  }
	| adentros LLAVEDER {$$= $1 + "\n";  }

;

declaracionvar
	: tipodato listavariables asingacionuna {$$= $1+ $2+ $3;  }
	|listavariables asingacionuna  {$$= $1 + $2  ;  }
;

asingacionuna 
	: PTCOMA {$$= "\n";  }
	| IGUAL expresion PTCOMA {$$= " = " + $2 +"\n" ;  }
	| IGUAL llamarmetodo {$$= "= " + $2; + "\n"  }
;

listavariables 
	: listavariables COMA variablesls  {$$= $1 +","  + $2;  }
	| variablesls {$$= $1;  }
;

variablesls 
	: expresion {$$= $1;  }
;

main
	: RVOID RMAIN  PARIZQ PARDER LLAVEIZQ adentros LLAVEDER {$$= "def main (): \n " + $6 +"\n"  ;  }
;

tipodato
	: RSTRING { $$ = "var";}
	| RINT  { $$ = "var";}
	| RDOUBLE  { $$ = "var";}
	| RCHAR  { $$ = "var";}
;

metodo
	: tipometodo  PARIZQ parametrosdentro  LLAVEIZQ adentros posreturn { $$ = $1+ "(" + $3 + ":\n" + $5 + $6 ;} 
;

posreturn
	: LLAVEDER {$$= "\n";  }
	| RRETURN PTCOMA LLAVEDER {$$= "return\n" ;  }
	| RRETURN expresion PTCOMA LLAVEDER {$$= "return\n"+ $2 + "\n";  }
;

tipometodo
	: tipodato expresion { $$ = " def " + $2;}
	| RVOID expresion { $$ = " def " + $1 ;}
;

parametrosdentro
	: PARDER { $$ = ")";}
	| listaparametros PARDER { $$ = $1 + ")";}
;

listaparametros
	: listaparametros COMA parametros { $$ = $1 +"," + $3;}
	| parametros { $$ = $1;}
;

parametros
	: tipodato expresion { $$ = "var" + $1;}
;

expresionlogica
	:expresionrelacional ANDY expresionrelacional { $$ = $1 + " and "+ $3; }
	|expresionrelacional ORO expresionrelacional { $$ = $1 + " or "+ $3; }
	|ADMIRACION expresionrelacional  { $$ =  " not "+ $2; }
	|expresionrelacional { $$ = $1;}
;

expresionrelacional
	:expresion  MAYOR expresion { $$ = $1 + " >"+ $3; }
	|expresion MENOR expresion  { $$ = $1+ " <"+ $3; }
	|expresion MAYOR IGUAL expresion  { $$ = $1+ " >="+ $3; }
	|expresion MENOR IGUAL expresion { $$ = $1 +" <="+ $3; }
	|expresion IGUALES expresion  { $$ = $1 +"=="+ $3; }
	|expresion DISTINTO expresion  { $$ = $1+ "!=" +$3; }
	|expresion { $$ = $1; }
;
expresion
	/*: MENOS expresion %prec UMENOS  {  $$ = { 
					type: 'SUMA',
					valor:[
						$1, $2 , $3
					]
					};	}    //	{ $$ = $2 *-1; }
	|*/: expresion MAS expresion { $$ = $1 + "+" + $3; }	
	| expresion MENOS expresion { $$ = $1 + "-"+ $3; }
	| expresion POR expresion		{ $$ = $1 + "*"+ $3; }
	| expresion DIVIDIDO expresion{ $$ = $1 + "/" +$3; }
	| ENTERO			{ $$ = $1; }		
	| DECIMAL			{ $$ = $1; }	
	| PARIZQ expresion PARDER { $$ = "(" + $2 + ")"; }
	|CADENA 				{ $$ = $1; }
	|IDENTIFICADOR  		{ $$ = $1; }
	|RTRUE					{ $$ = $1; }
	|RFALSE 				{ $$ = $1; }
	|CONTENIDOHTML 			{ $$ = $1; }
;
