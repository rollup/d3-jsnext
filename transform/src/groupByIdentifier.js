var shared = require( './shared.json' );

var groupByIdentifier = {}, groupName, add;

add = function ( identifier ) {
	groupByIdentifier[ identifier ] = shared[ groupName ];
}

for ( groupName in shared ) {
	if ( shared.hasOwnProperty( groupName ) ) {
		shared[ groupName ].properties.forEach( add );
		shared[ groupName ].name = groupName;
	}
}

module.exports = groupByIdentifier;
