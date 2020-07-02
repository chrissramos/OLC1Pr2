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
//(\"[^"]*\")\b 							return 'CADENA';
\"[^\"]*\"								{ yytext = yytext.substr(1,yyleng-2); return 'CADENA'; } 
//  "/""/".*\b  							return 'COMENTSIMPLE';
//  [/][*][^*]*[*]+([^/*][^*]*[*]+)*[/]\b 	return 'COMENTMULTI';



<<EOF>>				return 'EOF';

.					{ console.error('Este es un error léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column); }
/lex



/* Asociación de operadores y precedencia */

%left 'MAS' 'MENOS'
%left 'POR' 'DIVIDIDO'
%left UMENOS

%start ini

%% /* Definición de la gramática */

ini
	: instrucciones EOF {console.log('analisis exitoso ');}
;
instrucciones
	: instrucciones instruccion
	| instruccion
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
	:	main
	| 	metodo
	| declaracionvar
;
adentros
	: adentros adentro 
	|adentro
	| error { console.error('Este es un error sintáctico: ' + yytext + ', en la linea: ' + this._$.first_line + ', en la columna: ' + this._$.first_column); }
;
adentro
	: declaracionvar
	|RCONSOLE PUNTO RWRITE PARIZQ expresion PARDER PTCOMA 
	|RIF PARIZQ expresionlogica PARDER LLAVEIZQ adentros LLAVEDER
	|RELSE LLAVEIZQ adentros LLAVEDER
	|RELSE RIF PARIZQ expresionlogica PARDER LLAVEIZQ adentros LLAVEDER
	|RSWITCH PARIZQ expresion PARDER LLAVEIZQ casos LLAVEDER 
	|RFOR PARIZQ tipodato expresion  IGUAL expresion PTCOMA expresionlogica PTCOMA expresion MAS MAS PARDER LLAVEIZQ adentros poscontinue
	|RWHILE PARIZQ expresionlogica PARDER LLAVEIZQ adentros poscontinue
	|RDO LLAVEIZQ adentros poscontinue
;
poscontinue
	: LLAVEDER
	| RCONTINUE PTCOMA LLAVEDER
	| RCONTINUE expresion PTCOMA LLAVEDER
;
declaracionvar
	: tipodato listavariables asingacionuna 
	|listavariables asingacionuna
;

asingacionuna 
	: PTCOMA
	| IGUAL expresion PTCOMA 
;
listavariables 
	: listavariables COMA variablesls
	| variablesls
;
variablesls 
	: expresion
;
main
	: RVOID RMAIN  PARIZQ PARDER LLAVEIZQ adentros LLAVEDER
;

tipodato
	: RSTRING
	| RINT
	| RDOUBLE
	| RCHAR
;
metodo
	: tipometodo  PARIZQ parametrosdentro  LLAVEIZQ adentros posreturn  
;
posreturn
	: LLAVEDER
	| RRETURN PTCOMA LLAVEDER
	| RRETURN expresion PTCOMA LLAVEDER
;
tipometodo
	: tipodato expresion
	| RVOID expresion
;
parametrosdentro
	: PARDER
	| listaparametros PARDER
;
listaparametros
	: listaparametros COMA parametros
	| parametros
;
parametros
	: tipodato expresion
;

casos
	:casos casoevaluar
	|casoevaluar
;

casoevaluar
	:RCASE expresion DOSPUNTOS adentros RBREAK PTCOMA
	| RDEFAULT DOSPUNTOS adentros
;

expresionlogica
	:expresionrelacional ANDY expresionrelacional
	|expresionrelacional ORO expresionrelacional
	|ADMIRACION expresionrelacional
	|expresionrelacional
;

expresionrelacional
	:expresion  MAYOR expresion
	|expresion MENOR expresion
	|expresion MAYORIGUAL expresion
	|expresion MENORIGUAL expresion
	|expresion IGUALES expresion
	|expresion DISTINTO expresion
;
expresion
	: MENOS expresion %prec UMENOS //	{ $$ = $2 *-1; }
	| expresion MAS expresion		//{ $$ = $1 + $3; }
	| expresion MENOS expresion		//{ $$ = $1 - $3; }
	| expresion POR expresion		//{ $$ = $1 * $3; }
	| expresion DIVIDIDO expresion	//{ $$ = $1 / $3; }
	| ENTERO						//{ $$ = Number($1); }
	| DECIMAL						//{ $$ = Number($1); }
	| PARIZQ expresion PARDER		//{ $$ = $2; }
	|CADENA
	|IDENTIFICADOR
;