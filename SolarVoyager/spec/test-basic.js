/**
 * Created by charlie on 10/7/15.
 */

define(['home'], function(home) {
    'use strict';
    describe('Elvenware Simple Plain Suite', function() {
        'use strict';

        it('expects true to be true', function() {
            expect(true).toBe(true);
        });

        it('expects home.color to be red', function() {
            expect(home.color).toBe('red');
        });

    });
});
