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
instruccion
	:	declaracionvar
	|	main
;

declaracionvar
	: tipodato IDENTIFICADOR PTCOMA
;

main
	: RVOID RMAIN  PARIZQ PARDER LLAVEIZQ LLAVEDER
;
/*
instruccion
	:	declaracionvar
	|	asignacionvar
	|	metodos
	|	funciones
	|	main
;*/
expresion
	: MENOS expresion %prec UMENOS	{ $$ = $2 *-1; }
	| expresion MAS expresion		{ $$ = $1 + $3; }
	| expresion MENOS expresion		{ $$ = $1 - $3; }
	| expresion POR expresion		{ $$ = $1 * $3; }
	| expresion DIVIDIDO expresion	{ $$ = $1 / $3; }
	| ENTERO						{ $$ = Number($1); }
	| DECIMAL						{ $$ = Number($1); }
	| PARIZQ expresion PARDER		{ $$ = $2; }
;