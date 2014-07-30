var Scope = function ( parent ) {
	this.used = [];
	this.defined = [];
	this.parent = parent;
};

Scope.prototype = {
	// THIS METHOD NOT CURRENTLY USED...
	defines: function ( varName ) {
		if ( ~this.defined.indexOf( varName ) ) {
			return true;
		}

		if ( this.parent ) {
			return this.parent.defines( varName );
		}
	}
};

module.exports = Scope;
