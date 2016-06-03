# ngMask

### Best Angular JS mask alternative!

##### Angular mask without dependencies (NO JQUERY). Pure javascript and only ~6kb! It gives you power to create your mask with optional fields in accordance with your business.
=======

[![GitHub version](https://badge.fury.io/gh/candreoliveira%2FngMask.svg)](http://badge.fury.io/gh/candreoliveira%2FngMask) [![Bower version](https://badge.fury.io/bo/angular-mask.svg)](http://badge.fury.io/bo/angular-mask) [![Build Status](https://travis-ci.org/candreoliveira/ngMask.svg)](https://travis-ci.org/candreoliveira/ngMask) [![Code Climate](https://codeclimate.com/github/candreoliveira/ngMask/badges/gpa.svg)](https://codeclimate.com/github/candreoliveira/ngMask) [![Test Coverage](https://codeclimate.com/github/candreoliveira/ngMask/badges/coverage.svg)](https://codeclimate.com/github/candreoliveira/ngMask) [![NPM Dependencies](https://david-dm.org/candreoliveira/ngMask.png)](https://david-dm.org/candreoliveira)

[![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/master/chrome/chrome_64x64.png)](https://docs.angularjs.org/misc/faq/#what-browsers-does-angular-work-with-) [![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/master/firefox/firefox_64x64.png)](https://docs.angularjs.org/misc/faq/#what-browsers-does-angular-work-with-) [![IE8+](https://raw.githubusercontent.com/alrra/browser-logos/master/internet-explorer/internet-explorer_64x64.png)](https://docs.angularjs.org/guide/ie) [![Opera](https://raw.githubusercontent.com/alrra/browser-logos/master/opera/opera_64x64.png)](https://docs.angularjs.org/misc/faq/#what-browsers-does-angular-work-with-) [![Safari](https://raw.githubusercontent.com/alrra/browser-logos/master/safari/safari_64x64.png)](https://docs.angularjs.org/misc/faq/#what-browsers-does-angular-work-with-)
======

### TL;DR

[Check live examples here.](http://candreoliveira.github.io/#/ngMask)

### Install

**With Bower**
* Install the dependency:

   ```javascript
   bower install angular-mask --save
   ```
* Add ngMask.min.js to your code:

   ```html
   <script src='bower_components/ngMask/dist/ngMask.min.js'></script>
   ```
* Include module dependency:

   ```javascript
   angular.module('yourApp', ['ngMask']);
   ```

**Without Bower:**
* Download the ngMask.min.js file from dist folder:

   ```shell
   wget https://raw.githubusercontent.com/candreoliveira/ngMask/master/dist/ngMask.min.js
   ```
* Add ngMask.min.js to your code:

   ```html
   <script src='ngMask.min.js'></script>
   ```
* Include module dependency:

   ```javascript
   angular.module('yourApp', ['ngMask']);
   ```

======

### How To Use

1. **Add ngMask plugin after your AngularJS.**

   ```html
   <script src="angular.min.js"></script>
   <script src='ngMask.min.js'></script>
   ```
2. **Add ngMask module dependency to your app.**

   ```javascript
   angular.module('yourApp', ['ngMask']);
   ```
3. **Use the avaiable patterns to create your mask. Set the mask attribute.**

   ```html
   <input type='text' ng-model='maskModel' mask='39/19/9999' />
   ```
   - "/" isn't a pattern. It's considered a divisor. Every divisor is automatically written by ngMask. [Check all available patterns here.](https://github.com/candreoliveira/ngMask/#available-patterns)

4. **Adjust your mask options.**

   ```html
   <input type='text' ng-model='maskModel' ng-value='0/3/9' mask='3/9?' mask-repeat='2' mask-restrict='accept' mask-clean='true' mask-validate='false' mask-limit='false' />
   ```
   - Generated mask '3/9?3/9?'. [Check all available options here.](https://github.com/candreoliveira/ngMask/#options)

======

### Available Patterns

You can make your mask using some patterns available. If you use a pattern not specified below to construct your mask, It'll be considered a divisor. A dividor is a character used to group semantic elements, for example: "/" in dates to separate days, months and years, "-" in SSN to separate area, group and serial numbers or "." in IPv4 to create 4 groups of 8 bits.

**Common Patterns**
   - * =====> /./
      - Any single character
   - **w** =====> /\w/
      - Any word character (letter, number, underscore)
   - **W** =====> /\W/
      - Any non-word character
   - **d** =====> /\d/
      - Any digit
   - **D** =====> /\D/
      - Any non-digit
   - **s** =====> /\s/
      - Any whitespace character
   - **S** =====> /\S/
      - Any non-whitespace character
   - **b** =====> /\b/
      - Any word boundary

**Number Patterns**
   - **9** =====> /[0-9]/
      - Valid numbers: 0,1,2,3,4,5,6,7,8,9
   - **8** =====> /[0-8]/
      - Valid numbers: 0,1,2,3,4,5,6,7,8
   - **7** =====> /[0-7]/
      - Valid numbers: 0,1,2,3,4,5,6,7
   - **6** =====> /[0-6]/
      - Valid numbers: 0,1,2,3,4,5,6
   - **5** =====> /[0-5]/
      - Valid numbers: 0,1,2,3,4,5
   - **4** =====> /[0-4]/
      - Valid numbers: 0,1,2,3,4
   - **3** =====> /[0-3]/
      - Valid numbers: 0,1,2,3
   - **2** =====> /[0-2]/
      - Valid numbers: 0,1,2
   - **1** =====> /[0-1]/
      - Valid numbers: 0,1
   - **0** =====> /[0]/
      - Valid numbers: 0

**Especial Patterns**
   - **?** =====> /?/
      - Optional character. It makes the previous pattern optional.
   - **A** =====> /[A-Z]/
      - Any uppercase alphabet letter without accents
   - **a** =====> /[a-z]/
      - Any lowercase alphabet letter without accents
   - **Z** =====> /[A-ZÇÀÁÂÃÈÉÊẼÌÍÎĨÒÓÔÕÙÚÛŨ]/
      - Any uppercase alphabet letter with accents
   - **z** =====> /[a-zçáàãâéèêẽíìĩîóòôõúùũüû]/
      - Any lowercase alphabet letter with accents
   - **@** =====> /[a-zA-Z]/
      - Any alphabet letter without accents
   - **\#** =====> /[a-zA-ZçáàãâéèêẽíìĩîóòôõúùũüûÇÀÁÂÃÈÉÊẼÌÍÎĨÒÓÔÕÙÚÛŨ]/
      - Any alphabet letter with accents
   - **%** =====> /[0-9a-zA-zçáàãâéèêẽíìĩîóòôõúùũüûÇÀÁÂÃÈÉÊẼÌÍÎĨÒÓÔÕÙÚÛŨ]/
      - Any digit and alphabet letter with accents

======

### Options

   - **NgModel (required)**: model object
      - Attribute 'ng-model'
      - The model of input.
   - **Mask (required)**: mask definition
      - Attribute 'mask'
      - The mask for input.
   - **NgValue**: initial mask value (default: undefined)
      - Attribute 'ng-value'
      - The initial value of input.
   - **Restrict**: 'select', 'reject' or 'accept' (default: select)
      - Attribute 'mask-restrict' or 'restrict'
      - The way how ngMask will interact with user input.
         - **Select** restriction: The input will show the char inputted even on error cases. If it has errors, the wrong char will be selected.
         - **Reject** restriction: The input will show the char inputted on successful cases. If it has errors, the wrong char will be rejected.
         - **Accept** restriction: The input will always show the char inputted. No matter it's right or wrong.
   - **Repeat**: number - repeat mask n times (default: undefined)
      - Attribute 'mask-repeat' or 'repeat'
      - Repeats the mask attribute the defined times.
   - **Clean**: 'true' or 'false' (default: false)
      - Attribute 'mask-clean' or 'clean'
      - Cleans model value. Removes divisors from model value.
   - **Validate**: 'true' or 'false' (default: true)
      - Attribute 'mask-validate' or 'validate'
      - Applies validation. Uses form controller setValidity method.
   - **Limit**: 'true' or 'false' (default: true)
      - Attribute 'mask-limit' or 'limit'
      - Limits the max length inputted according with mask.

======

### Examples
[How to ngMask](http://candreoliveira.github.io/#/ngMask)

======

### License

[![Open Source](http://opensource.org/trademarks/opensource/OSI-Approved-License-100x137.png)](http://opensource.org)

The MIT License (MIT)

Copyright (c) 2014 [@candreoliveira](https://github.com/candreoliveira)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
