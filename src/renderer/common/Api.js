 import JSONP from 'jsonp';

 function serializeQuery(params) {
     params['_'] = Date.now();
     return '?' + Object.keys(params).map(key => {
         const val = params[key];
         if (val !== undefined) {
             return encodeURIComponent(key) + '=' + encodeURIComponent(val)
         } else {
             return '';
         }
     }).join('&');
 }

 function jsonp(url, params) {
     return new Promise((resolve, reject) => {
         JSONP(url, params, (err, data) => {
             if (err) {
                 console.error(`jsonp -- ${url}：${err} \n`);
                 resolve(null);
             } else {
                 resolve(data);
             }
         });
     });
 }