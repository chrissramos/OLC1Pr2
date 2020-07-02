/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var gramatica = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,4],$V1=[1,10],$V2=[1,21],$V3=[1,12],$V4=[1,13],$V5=[1,14],$V6=[1,15],$V7=[1,18],$V8=[1,19],$V9=[1,20],$Va=[1,22],$Vb=[1,23],$Vc=[5,19,21,24,25,26,27,28,51,55,56,57,58],$Vd=[1,30],$Ve=[1,31],$Vf=[1,29],$Vg=[21,51,55,56,57,58],$Vh=[15,16,17],$Vi=[2,15],$Vj=[1,36],$Vk=[1,35],$Vl=[1,37],$Vm=[1,38],$Vn=[15,16,17,21,22,42,43,45,46,47,48,49,50,51,52,53,54],$Vo=[5,19,21,24,25,26,27,28,36,37,38,40,51,55,56,57,58],$Vp=[17,22],$Vq=[15,16,17,21,22,42,43,45,46,47,48,49,50,51,52],$Vr=[1,64],$Vs=[1,68],$Vt=[1,69],$Vu=[1,71],$Vv=[1,72],$Vw=[21,24,25,26,27,28,36,37,38,40,51,55,56,57,58],$Vx=[1,82],$Vy=[22,42,43];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"ini":3,"instrucciones":4,"EOF":5,"instruccion":6,"declaracionvar":7,"main":8,"metodo":9,"asignacionvar":10,"expresion":11,"tipodato":12,"listavariables":13,"asingacionuna":14,"PTCOMA":15,"IGUAL":16,"COMA":17,"variablesls":18,"RVOID":19,"RMAIN":20,"PARIZQ":21,"PARDER":22,"LLAVEIZQ":23,"LLAVEDER":24,"RSTRING":25,"RINT":26,"RDOUBLE":27,"RCHAR":28,"tipometodo":29,"parametrosdentro":30,"cuerpometodo":31,"sentenciass":32,"listaparametros":33,"parametros":34,"sentenciascontrol":35,"sentenciasrepeticion":36,"sentenciaimprimir":37,"RIF":38,"expresionlogica":39,"RELSE":40,"expresionrelacional":41,"ANDY":42,"ORO":43,"ADMIRACION":44,"MAYOR":45,"MENOR":46,"MAYORIGUAL":47,"MENORIGUAL":48,"IGUALES":49,"DISTINTO":50,"MENOS":51,"MAS":52,"POR":53,"DIVIDIDO":54,"ENTERO":55,"DECIMAL":56,"CADENA":57,"IDENTIFICADOR":58,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",15:"PTCOMA",16:"IGUAL",17:"COMA",19:"RVOID",20:"RMAIN",21:"PARIZQ",22:"PARDER",23:"LLAVEIZQ",24:"LLAVEDER",25:"RSTRING",26:"RINT",27:"RDOUBLE",28:"RCHAR",36:"sentenciasrepeticion",37:"sentenciaimprimir",38:"RIF",40:"RELSE",42:"ANDY",43:"ORO",44:"ADMIRACION",45:"MAYOR",46:"MENOR",47:"MAYORIGUAL",48:"MENORIGUAL",49:"IGUALES",50:"DISTINTO",51:"MENOS",52:"MAS",53:"POR",54:"DIVIDIDO",55:"ENTERO",56:"DECIMAL",57:"CADENA",58:"IDENTIFICADOR"},
productions_: [0,[3,2],[4,2],[4,1],[4,1],[6,1],[6,1],[6,1],[10,1],[7,3],[7,2],[14,1],[14,3],[13,3],[13,1],[18,1],[8,6],[12,1],[12,1],[12,1],[12,1],[9,5],[31,1],[31,2],[31,2],[29,2],[29,2],[30,1],[30,2],[33,3],[33,1],[34,2],[32,1],[32,1],[32,1],[35,7],[35,4],[35,8],[39,3],[39,3],[39,2],[39,1],[41,3],[41,3],[41,3],[41,3],[41,3],[41,3],[11,2],[11,3],[11,3],[11,3],[11,3],[11,1],[11,1],[11,3],[11,1],[11,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
console.log('analisis exitoso ');
break;
case 4:
 console.error('Este es un error sintáctico: ' + yytext + ', en la linea: ' + this._$.first_line + ', en la columna: ' + this._$.first_column); 
break;
}
},
table: [{2:$V0,3:1,4:2,6:3,7:5,8:6,9:7,11:17,12:8,13:9,18:16,19:$V1,21:$V2,25:$V3,26:$V4,27:$V5,28:$V6,29:11,51:$V7,55:$V8,56:$V9,57:$Va,58:$Vb},{1:[3]},{5:[1,24],6:25,7:5,8:6,9:7,11:17,12:8,13:9,18:16,19:$V1,21:$V2,25:$V3,26:$V4,27:$V5,28:$V6,29:11,51:$V7,55:$V8,56:$V9,57:$Va,58:$Vb},o($Vc,[2,3]),o($Vc,[2,4]),o($Vc,[2,5]),o($Vc,[2,6]),o($Vc,[2,7]),{11:27,13:26,18:16,21:$V2,51:$V7,55:$V8,56:$V9,57:$Va,58:$Vb},{14:28,15:$Vd,16:$Ve,17:$Vf},{11:33,20:[1,32],21:$V2,51:$V7,55:$V8,56:$V9,57:$Va,58:$Vb},{21:[1,34]},o($Vg,[2,17]),o($Vg,[2,18]),o($Vg,[2,19]),o($Vg,[2,20]),o($Vh,[2,14]),o($Vh,$Vi,{51:$Vj,52:$Vk,53:$Vl,54:$Vm}),{11:39,21:$V2,51:$V7,55:$V8,56:$V9,57:$Va,58:$Vb},o($Vn,[2,53]),o($Vn,[2,54]),{11:40,21:$V2,51:$V7,55:$V8,56:$V9,57:$Va,58:$Vb},o($Vn,[2,56]),o($Vn,[2,57]),{1:[2,1]},o($Vc,[2,2]),{14:41,15:$Vd,16:$Ve,17:$Vf},o($Vh,$Vi,{21:[2,25],51:$Vj,52:$Vk,53:$Vl,54:$Vm}),o($Vo,[2,10]),{11:17,18:42,21:$V2,51:$V7,55:$V8,56:$V9,57:$Va,58:$Vb},o($Vo,[2,11]),{10:43,11:44,21:$V2,51:$V7,55:$V8,56:$V9,57:$Va,58:$Vb},{21:[1,45]},{21:[2,26],51:$Vj,52:$Vk,53:$Vl,54:$Vm},{12:50,22:[1,47],25:$V3,26:$V4,27:$V5,28:$V6,30:46,33:48,34:49},{11:51,21:$V2,51:$V7,55:$V8,56:$V9,57:$Va,58:$Vb},{11:52,21:$V2,51:$V7,55:$V8,56:$V9,57:$Va,58:$Vb},{11:53,21:$V2,51:$V7,55:$V8,56:$V9,57:$Va,58:$Vb},{11:54,21:$V2,51:$V7,55:$V8,56:$V9,57:$Va,58:$Vb},o($Vn,[2,48]),{22:[1,55],51:$Vj,52:$Vk,53:$Vl,54:$Vm},o($Vo,[2,9]),o($Vh,[2,13]),{15:[1,56]},{15:[2,8],51:$Vj,52:$Vk,53:$Vl,54:$Vm},{22:[1,57]},{23:[1,58]},{23:[2,27]},{17:[1,60],22:[1,59]},o($Vp,[2,30]),{11:61,21:$V2,51:$V7,55:$V8,56:$V9,57:$Va,58:$Vb},o($Vq,[2,49],{53:$Vl,54:$Vm}),o($Vq,[2,50],{53:$Vl,54:$Vm}),o($Vn,[2,51]),o($Vn,[2,52]),o($Vn,[2,55]),o($Vo,[2,12]),{23:[1,62]},{7:66,11:17,12:70,13:9,18:16,21:$V2,24:$Vr,25:$V3,26:$V4,27:$V5,28:$V6,31:63,32:65,35:67,36:$Vs,37:$Vt,38:$Vu,40:$Vv,51:$V7,55:$V8,56:$V9,57:$Va,58:$Vb},{23:[2,28]},{12:50,25:$V3,26:$V4,27:$V5,28:$V6,34:73},o($Vp,[2,31],{51:$Vj,52:$Vk,53:$Vl,54:$Vm}),{24:[1,74]},o($Vc,[2,21]),o($Vc,[2,22]),{7:66,11:17,12:70,13:9,18:16,21:$V2,24:$Vr,25:$V3,26:$V4,27:$V5,28:$V6,31:75,32:65,35:67,36:$Vs,37:$Vt,38:$Vu,40:$Vv,51:$V7,55:$V8,56:$V9,57:$Va,58:$Vb},{7:66,11:17,12:70,13:9,18:16,21:$V2,24:$Vr,25:$V3,26:$V4,27:$V5,28:$V6,31:76,32:65,35:67,36:$Vs,37:$Vt,38:$Vu,40:$Vv,51:$V7,55:$V8,56:$V9,57:$Va,58:$Vb},o($Vw,[2,32]),o($Vw,[2,33]),o($Vw,[2,34]),{11:17,13:26,18:16,21:$V2,51:$V7,55:$V8,56:$V9,57:$Va,58:$Vb},{21:[1,77]},{23:[1,78],38:[1,79]},o($Vp,[2,29]),o($Vc,[2,16]),o($Vc,[2,23]),o($Vc,[2,24]),{11:83,21:$V2,39:80,41:81,44:$Vx,51:$V7,55:$V8,56:$V9,57:$Va,58:$Vb},{2:$V0,4:84,6:3,7:5,8:6,9:7,11:17,12:8,13:9,18:16,19:$V1,21:$V2,25:$V3,26:$V4,27:$V5,28:$V6,29:11,51:$V7,55:$V8,56:$V9,57:$Va,58:$Vb},{21:[1,85]},{22:[1,86]},{22:[2,41],42:[1,87],43:[1,88]},{11:83,21:$V2,41:89,51:$V7,55:$V8,56:$V9,57:$Va,58:$Vb},{45:[1,90],46:[1,91],47:[1,92],48:[1,93],49:[1,94],50:[1,95],51:$Vj,52:$Vk,53:$Vl,54:$Vm},{6:25,7:5,8:6,9:7,11:17,12:8,13:9,18:16,19:$V1,21:$V2,24:[1,96],25:$V3,26:$V4,27:$V5,28:$V6,29:11,51:$V7,55:$V8,56:$V9,57:$Va,58:$Vb},{11:83,21:$V2,39:97,41:81,44:$Vx,51:$V7,55:$V8,56:$V9,57:$Va,58:$Vb},{23:[1,98]},{11:83,21:$V2,41:99,51:$V7,55:$V8,56:$V9,57:$Va,58:$Vb},{11:83,21:$V2,41:100,51:$V7,55:$V8,56:$V9,57:$Va,58:$Vb},{22:[2,40]},{11:101,21:$V2,51:$V7,55:$V8,56:$V9,57:$Va,58:$Vb},{11:102,21:$V2,51:$V7,55:$V8,56:$V9,57:$Va,58:$Vb},{11:103,21:$V2,51:$V7,55:$V8,56:$V9,57:$Va,58:$Vb},{11:104,21:$V2,51:$V7,55:$V8,56:$V9,57:$Va,58:$Vb},{11:105,21:$V2,51:$V7,55:$V8,56:$V9,57:$Va,58:$Vb},{11:106,21:$V2,51:$V7,55:$V8,56:$V9,57:$Va,58:$Vb},o($Vw,[2,36]),{22:[1,107]},{2:$V0,4:108,6:3,7:5,8:6,9:7,11:17,12:8,13:9,18:16,19:$V1,21:$V2,25:$V3,26:$V4,27:$V5,28:$V6,29:11,51:$V7,55:$V8,56:$V9,57:$Va,58:$Vb},{22:[2,38]},{22:[2,39]},o($Vy,[2,42],{51:$Vj,52:$Vk,53:$Vl,54:$Vm}),o($Vy,[2,43],{51:$Vj,52:$Vk,53:$Vl,54:$Vm}),o($Vy,[2,44],{51:$Vj,52:$Vk,53:$Vl,54:$Vm}),o($Vy,[2,45],{51:$Vj,52:$Vk,53:$Vl,54:$Vm}),o($Vy,[2,46],{51:$Vj,52:$Vk,53:$Vl,54:$Vm}),o($Vy,[2,47],{51:$Vj,52:$Vk,53:$Vl,54:$Vm}),{23:[1,109]},{6:25,7:5,8:6,9:7,11:17,12:8,13:9,18:16,19:$V1,21:$V2,24:[1,110],25:$V3,26:$V4,27:$V5,28:$V6,29:11,51:$V7,55:$V8,56:$V9,57:$Va,58:$Vb},{2:$V0,4:111,6:3,7:5,8:6,9:7,11:17,12:8,13:9,18:16,19:$V1,21:$V2,25:$V3,26:$V4,27:$V5,28:$V6,29:11,51:$V7,55:$V8,56:$V9,57:$Va,58:$Vb},o($Vw,[2,35]),{6:25,7:5,8:6,9:7,11:17,12:8,13:9,18:16,19:$V1,21:$V2,24:[1,112],25:$V3,26:$V4,27:$V5,28:$V6,29:11,51:$V7,55:$V8,56:$V9,57:$Va,58:$Vb},o($Vw,[2,37])],
defaultActions: {24:[2,1],47:[2,27],59:[2,28],89:[2,40],99:[2,38],100:[2,39]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse (input) {
    var self = this,
        stack = [0],
        tstack = [], // token stack
        vstack = [null], // semantic value stack
        lstack = [], // location stack
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;

    var args = lstack.slice.call(arguments, 1);

    //this.reductionCount = this.shiftCount = 0;

    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    // copy state
    for (var k in this.yy) {
      if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
        sharedState.yy[k] = this.yy[k];
      }
    }

    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);

    var ranges = lexer.options && lexer.options.ranges;

    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }

    function popStack (n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }

_token_stack:
    var lex = function () {
        var token;
        token = lexer.lex() || EOF;
        // if token isn't its numeric value, convert
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }

    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        // retreive state number from top of stack
        state = stack[stack.length - 1];

        // use default actions if available
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            // read action for current state and first input
            action = table[state] && table[state][symbol];
        }

_handle_error:
        // handle parse error
        if (typeof action === 'undefined' || !action.length || !action[0]) {
            var error_rule_depth;
            var errStr = '';

            // Return the rule stack depth where the nearest error rule can be found.
            // Return FALSE when no error recovery rule was found.
            function locateNearestErrorRecoveryRule(state) {
                var stack_probe = stack.length - 1;
                var depth = 0;

                // try to recover from error
                for(;;) {
                    // check for error recovery rule in this state
                    if ((TERROR.toString()) in table[state]) {
                        return depth;
                    }
                    if (state === 0 || stack_probe < 2) {
                        return false; // No suitable error recovery rule available.
                    }
                    stack_probe -= 2; // popStack(1): [symbol, action]
                    state = stack[stack_probe];
                    ++depth;
                }
            }

            if (!recovering) {
                // first see if there's any chance at hitting an error recovery rule:
                error_rule_depth = locateNearestErrorRecoveryRule(state);

                // Report error
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push("'"+this.terminals_[p]+"'");
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line '+(yylineno+1)+":\n"+lexer.showPosition()+"\nExpecting "+expected.join(', ') + ", got '" + (this.terminals_[symbol] || symbol)+ "'";
                } else {
                    errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
                                  (symbol == EOF ? "end of input" :
                                              ("'"+(this.terminals_[symbol] || symbol)+"'"));
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected,
                    recoverable: (error_rule_depth !== false)
                });
            } else if (preErrorSymbol !== EOF) {
                error_rule_depth = locateNearestErrorRecoveryRule(state);
            }

            // just recovered from another error
            if (recovering == 3) {
                if (symbol === EOF || preErrorSymbol === EOF) {
                    throw new Error(errStr || 'Parsing halted while starting to recover from another error.');
                }

                // discard current lookahead and grab another
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                symbol = lex();
            }

            // try to recover from error
            if (error_rule_depth === false) {
                throw new Error(errStr || 'Parsing halted. No suitable error recovery rule available.');
            }
            popStack(error_rule_depth);

            preErrorSymbol = (symbol == TERROR ? null : symbol); // save the lookahead token
            symbol = TERROR;         // insert generic error symbol as new lookahead
            state = stack[stack.length-1];
            action = table[state] && table[state][TERROR];
            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        }

        // this shouldn't happen, unless resolve defaults are off
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
        }

        switch (action[0]) {
            case 1: // shift
                //this.shiftCount++;

                stack.push(symbol);
                vstack.push(lexer.yytext);
                lstack.push(lexer.yylloc);
                stack.push(action[1]); // push state
                symbol = null;
                if (!preErrorSymbol) { // normal execution/no error
                    yyleng = lexer.yyleng;
                    yytext = lexer.yytext;
                    yylineno = lexer.yylineno;
                    yyloc = lexer.yylloc;
                    if (recovering > 0) {
                        recovering--;
                    }
                } else {
                    // error just occurred, resume old lookahead f/ before error
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                }
                break;

            case 2:
                // reduce
                //this.reductionCount++;

                len = this.productions_[action[1]][1];

                // perform semantic action
                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
                // default location, uses first token for firsts, last for lasts
                yyval._$ = {
                    first_line: lstack[lstack.length-(len||1)].first_line,
                    last_line: lstack[lstack.length-1].last_line,
                    first_column: lstack[lstack.length-(len||1)].first_column,
                    last_column: lstack[lstack.length-1].last_column
                };
                if (ranges) {
                  yyval._$.range = [lstack[lstack.length-(len||1)].range[0], lstack[lstack.length-1].range[1]];
                }
                r = this.performAction.apply(yyval, [yytext, yyleng, yylineno, sharedState.yy, action[1], vstack, lstack].concat(args));

                if (typeof r !== 'undefined') {
                    return r;
                }

                // pop off stack
                if (len) {
                    stack = stack.slice(0,-1*len*2);
                    vstack = vstack.slice(0, -1*len);
                    lstack = lstack.slice(0, -1*len);
                }

                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                // goto new state = table[STATE][NONTERMINAL]
                newState = table[stack[stack.length-2]][stack[stack.length-1]];
                stack.push(newState);
                break;

            case 3:
                // accept
                return true;
        }

    }

    return true;
}};
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:return 26;
break;
case 1:return 27;
break;
case 2:return 28;
break;
case 3:return 'RBOOL';
break;
case 4:return 25;
break;
case 5:return 19;
break;
case 6:return 'RCONSOLE';
break;
case 7:return 'RWRITE';
break;
case 8:return 38;
break;
case 9:return 40;
break;
case 10:return 'RSWITCH';
break;
case 11:return 'RCASE';
break;
case 12:return 'RDEFAULT';
break;
case 13:return 'RFOR';
break;
case 14:return 'RWHILE';
break;
case 15:return 'RDO';
break;
case 16:return 'RRETURN';
break;
case 17:return 'RBREAK';
break;
case 18:return 'RCONTINUE';
break;
case 19:return 20;
break;
case 20:return 15;
break;
case 21:return "COMA";
break;
case 22:return 'PUNTO';
break;
case 23:return 'DOSPUNTOS';
break;
case 24:return 21;
break;
case 25:return 22;
break;
case 26:return 23;
break;
case 27:return 24;
break;
case 28:return 'CORIZQ';
break;
case 29:return 'CORDER';
break;
case 30:return 52;
break;
case 31:return 51;
break;
case 32:return 53;
break;
case 33:return 54;
break;
case 34:return 'INCREMENTO';
break;
case 35:return 'DECREMENTO'
break;
case 36:return 42;
break;
case 37:return 43;
break;
case 38:return 45;
break;
case 39:return 46;
break;
case 40:return 47;
break;
case 41:return 48;
break;
case 42:return 49;
break;
case 43:return 50;
break;
case 44:return 44;
break;
case 45:return 16;
break;
case 46:
break;
case 47:
break;
case 48:return 56;
break;
case 49:return 55;
break;
case 50:return 58; 
break;
case 51: yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2); return 57; 
break;
case 52:return 5;
break;
case 53: console.error('Este es un error léxico: ' + yy_.yytext + ', en la linea: ' + yy_.yylloc.first_line + ', en la columna: ' + yy_.yylloc.first_column); 
break;
}
},
rules: [/^(?:int\b)/i,/^(?:double\b)/i,/^(?:char\b)/i,/^(?:bool\b)/i,/^(?:string\b)/i,/^(?:void\b)/i,/^(?:console\b)/i,/^(?:write\b)/i,/^(?:if\b)/i,/^(?:else\b)/i,/^(?:switch\b)/i,/^(?:case\b)/i,/^(?:default\b)/i,/^(?:for\b)/i,/^(?:while\b)/i,/^(?:do\b)/i,/^(?:return\b)/i,/^(?:break\b)/i,/^(?:continue\b)/i,/^(?:main\b)/i,/^(?:;)/i,/^(?:,)/i,/^(?:\.)/i,/^(?::)/i,/^(?:\()/i,/^(?:\))/i,/^(?:\{)/i,/^(?:\})/i,/^(?:\[)/i,/^(?:\])/i,/^(?:\+)/i,/^(?:-)/i,/^(?:\*)/i,/^(?:\/)/i,/^(?:\+\+)/i,/^(?:--)/i,/^(?:&&)/i,/^(?:\|\|)/i,/^(?:>)/i,/^(?:<)/i,/^(?:>=)/i,/^(?:<=)/i,/^(?:==)/i,/^(?:!=)/i,/^(?:!)/i,/^(?:=)/i,/^(?:[ \r\t]+)/i,/^(?:\n)/i,/^(?:[0-9]+(\.[0-9]+)?\b)/i,/^(?:[0-9]+\b)/i,/^(?:([a-zA-Z_])[a-zA-Z0-9_]*\b)/i,/^(?:"[^\"]*")/i,/^(?:$)/i,/^(?:.)/i],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = gramatica;
exports.Parser = gramatica.Parser;
exports.parse = function () { return gramatica.parse.apply(gramatica, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}