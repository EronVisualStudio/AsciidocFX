/* Generated by Opal 0.6.3 */
(function ($opal) {
    var $a, self = $opal.top, $scope = $opal, nil = $opal.nil, $breaker = $opal.breaker, $slice = $opal.slice, $klass = $opal.klass;

    if ($scope.RUBY_ENGINE['$==']("opal")) {
    }
    ;
    self.$include((($a = $opal.Object._scope.Asciidoctor) == null ? $opal.cm('Asciidoctor') : $a));
    return (function ($base, $super) {
        function $ImageSizeInfoTreeprocessor() {
        };
        var self = $ImageSizeInfoTreeprocessor = $klass($base, $super, 'ImageSizeInfoTreeprocessor', $ImageSizeInfoTreeprocessor);

        var def = self._proto, $scope = self._scope;

        return (def.$process = function (document) {
                var self = this;

                if (!document.$attr('omit-image-size')['$nil?']())
                    return document;

                try {
                    var imageNodes = document.$find_by(Opal.hash2(['context'], {"context": "image"}));

                    imageNodes.forEach(function (node) {

                        var declaredWidth = node.$attributes()['$[]']('width') == false;
                        var declaredHeight = node.$attributes()['$[]']('height') == false;

                        if (declaredWidth && declaredHeight) {
                            var info = afx.getImageInfo(node.$attr('target'), {}) || {
                                    width: declaredWidth,
                                    height: declaredHeight
                                };
                            node.$attributes()['$[]=']("width", info.width);
                            node.$attributes()['$[]=']("height", info.height);
                        }

                    });
                } catch (e) {
                    console.log(e);
                }

                return document;
            }, nil) && 'process'
    })(self, ($scope.Extensions)._scope.Treeprocessor);
})(Opal);
/* Generated by Opal 0.6.3 */
(function ($opal) {
    var $a, $b, TMP_1, self = $opal.top, $scope = $opal, nil = $opal.nil, $breaker = $opal.breaker, $slice = $opal.slice;

    if ($scope.RUBY_ENGINE['$==']("opal")) {
    }
    ;
    return ($a = ($b = $scope.Extensions).$register, $a._p = (TMP_1 = function () {
        var self = TMP_1._s || this;

        return self.$treeprocessor($scope.ImageSizeInfoTreeprocessor)
    }, TMP_1._s = self, TMP_1), $a).call($b);
})(Opal);
