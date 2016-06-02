define(function () {
    'use strict';

    function getMsnTypes(energyTypes) {
        console.log('getMsnTypes called');
        var currentMsn = {
            msn: null,
            description: ''
        };
        var msnTypes = [];

        function insertNewCurrentMsn(energyType) {
            currentMsn = Object.create(currentMsn);
            currentMsn.msn = energyType.MSN;
            currentMsn.description = energyType.Description;
            msnTypes.push(currentMsn);
        }

        insertNewCurrentMsn(energyTypes[0]);

        function isUnique(msn) {
            var result = true;
            for (var i = 0; i < msnTypes.length; i++) {
                if (msn === msnTypes[i].msn) {
                    console.log('msn vs c.msn', msn, currentMsn.msn);
                    result = false;
                    break;
                }
            }
            return result;
        }

        energyTypes.forEach(function (energyType, index) {
            // console.log('energyType index and index length', index, msnTypes.length);
            energyType.Year = energyType.YYYYMM.substr(0, 4);
            energyType.Month = energyType.YYYYMM.substr(4);
            if (energyType.MSN !== currentMsn.msn) {
                if (isUnique(energyType.MSN)) {
                    //console.log('isUnique');
                    insertNewCurrentMsn(energyType);
                }
            }
        });
        return msnTypes;
    }

    return getMsnTypes;
});