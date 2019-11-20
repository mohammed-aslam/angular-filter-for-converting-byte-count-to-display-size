angular.module("ng-util", []).filter("byteCountToDisplaySize", function () {
        return function (bytes, si) {
            var unit = si ? 1000 : 1024;
            if (bytes < unit) {
                return bytes + " B";
            }
            var exp = (Math.log(bytes) / Math.log(unit)) | 0;
            var pre = (si ? "kMGTPE" : "KMGTPE").charAt(exp-1) + (si ? "" : "i");
            return (Math.round((bytes / Math.pow(unit, exp)) * 10) / 10) + pre + "B";
        }
    });
