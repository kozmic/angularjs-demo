// From http://www.youtube.com/watch?v=A6wq16Ow5Ec
angular.module('DirectivesApp', [])
    .directive('markdown', function () {
        var converter = new Showdown.converter();
        return {
            restrict: 'E',
            link: function (scope, element, attrs) {
                var htmlText = converter.makeHtml(element.text());
                element.html(htmlText);
            }
        }
    })
    .directive('picture', function () {

        return {
            restrict: 'E',
            replace: false,
            link: function (scope, element, attrs) {
                scope.$root.hasDataSupport = false;

                if (scope.$root.hasDataSupport) {
                    element.attr("src", "img/" + scope.image.src);
                } else {
                    element.attr("src","data:" + scope.image.mimeType + ";base64," + scope.image.data);
                }
            },
            template: '<img />',
            replace: true
        }
    })
;

var ImageCtrl = function($scope) {
    $scope.image = {
        mimeType: 'image/png',
        src: 'myImage.png',
        data: 'iVBORw0KGgoAAAANSUhEUgAAAMgAAAA8CAYAAAAjW/WRAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABO1JREFUeNrsnPFx2jAUxkUu/5dsQK8DlEwQM0HIBLEnaJgAmAAyAd4AmAA2iDtAL94gZAIqJc93nCPZWJKRrHzfnS+9UDvPsn7Sp+cnesfjkUEQJFcPgEAQAIEgAAJBAASCAAgEARAIAiAQBEAgCIBAEACBIAiAQBAAgaDuAvLrpmfyhw/82PNjy4/Nv7fjwVJMM/7jkR8DS7c54rHtLbXNnF9rZnh/Q/5jx4++5ONbfv2s5nxxblT69Z6fNzKMq09xDSUfT/j1l64Aueoo2KJBx/xY8eOVN/CT6QPixwv/59QiHF6J39+gAo6kDo6WpYIjdQlHlwEpw7LgHWBlcI0nxQMKBQ7RRmsFHEveCVOHsa0UbZ/xuBLXbXcVUD+IeWOPNc/9E7iVVnVCYU8nDuEQA1Ms+SgX9tSHhrt29Yf5g+kZNOyY7FD5oS/EQ9ewHn1F53kIYPZYkB39MkILa+UwrjE9L9n68sHWuvJbziC88TY0wuSljwbU4ZtI9f+fA4AjJvvoVSekZIHKErteD4VhsejhPjfo8N9KNZ1QZNdyD9dDExr8GACxowwoKG3jztMReqcYxJxnrEIEBLNFsxEaGatvBsgjkPiitaIT7h1nrGZMnrE6ME8yVsEAQi/2xGgUtWi7+l0bDGrapK2MXFSXGKFkwVQFhy8ZK5lclppEmpbqN/tMW6p8bKIRy1HRqUQSwGQxm+sshivKcPYU06EE8l1FmxSdMLPwzHYKAMU9ziVtFVFsUcV6KGUeq6u1WEzREW41O+QLa+dNulb9FI/nzeIMplUPpohrzeTvVC7WNrBY+nBMDFKXc8/ux1aqM7EFB2lr6TppF+AIBZANzRzaUzXl3pOWwNXRxHAtVbwItGpf6Hqm15z7mrHyzWLtDE4Xnecv+8zM5BZjEh4+pnWODYszMfH+VI5x19D+bWmEPrT47MSa4r5hXB9rOlcvKDsHCAQBEAgCIG5EOf9ByXfPm1oaqlla2LZHFi1fYbPOsXyF9dy0bLH6J3ENzjglP4kLFutCnUe2TbNxzp/8tGw9NLKcAWp6f2ItpLsJrMjqpS3EVbVt99xF+qwr/azr1bzlkvcPaDRK3n2DPzKAo2iHFUHWxqBkksCYGu7+BCANIUkknWPacetra4fjymCXpUwxs5Pdi6k2CxbrQiPua3k9wuG56arFqqgyWJKXz08GA2F5fjC3pSYbiiujGE4hqkoHe19qcs3CkHhApzvnRDHj0KedaRa0VFTjbqjzzinZEEtmVGE7Ry21R1azNXlGe88XihmO+QxJKKUm7wofHpLe6+wmvaFOFW2xowW2bdVmy2gjVFJhA2MAAl1qXeYCknPiSmsgiQBIe7rTGdlq1A8UkhVlo3yDZO0K3qABUWwSOljw2/eBziRDmklcQuLdDBcUIOI9h/CtlFWJVQvXcxeZit/Hpl9p6gkkmYeQJF2B5NphJ28rv/xRctLgYR14LDmTp0gX9MVrunL6Nr6Igcm/+7aAxMmWVwGJyGAxddbt1oeylBAX6Tobp+YsUJ1UHKhmkoXD2KpmkrWrGS5UQHIasVOLvthUgw5AErss/fB1rRQKIBk1rtg999PEztCDkn3xQOcB6TokLtsN+0EgCIBAEACBIAACQQAEggAIBAEQCAIgEARAIAiAQBAEQCAIgEAQAIEgAAJBrvRfgAEAlG6JzKlIyN4AAAAASUVORK5CYII%3D'
    };

}