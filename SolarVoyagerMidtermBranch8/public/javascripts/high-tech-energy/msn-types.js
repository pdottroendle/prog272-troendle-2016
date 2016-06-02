/**
 * Created by bcuser on 6/1/16.
 */
var elfApp = angular.module('elfApp');

elfApp.factory('msnTypes', function() {
    'use strict';

    var currentMsn = {
        msn: null,
        description: ''
    };
    var msnTypes = [];
    var count = 0;

    function insertMsnType(energyType) {
        currentMsn = Object.create(currentMsn);
        currentMsn.msn = energyType.MSN;
        currentMsn.description = energyType.Description;
        msnTypes.push(currentMsn);
    }

    function isUniqueMsn(description) {
        console.log('isUniqueMsn called:', count, currentMsn.msn);
        var result = true;
        for (var i = 0; i < msnTypes.length; i++) {
            if (description === msnTypes[i].description) {
                result = false;
                break;
            }
        }
        return result;
    }

    function iterateEnergyTypes(energyTypes) {
        energyTypes.forEach(function(energyType, index) {
            count = count + 1;
            energyType.Year = energyType.YYYYMM.substr(0, 4);
            energyType.Month = energyType.YYYYMM.substr(4);
            if (energyType.Description !== currentMsn.description) {
                if (isUniqueMsn(energyType.Description)) {
                    insertMsnType(energyType);
                }
            }
        });
    }

    function getMsnTypes(energyTypes) {
        console.log('getMsnTypes called');
        if (msnTypes.length === 0) {
            iterateEnergyTypes(energyTypes);
        }
        return msnTypes;
    }

    return getMsnTypes;
});
