"use strict"
			const input = ['abc', 1, null, 2, false, 3, 'xyz', 0, true];
			function separateTypes() {
								const output = {};
								input.forEach(function(value, index) {
											let types = typeof value;
											if (output[types] === undefined) {
											output[types] = [value];
											} else {
											output[types].push(value);
											}
											console.log(value + ' - ' + types);
									});
					console.log(output);
					// return output; 
				}
			separateTypes(input);