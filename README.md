# abbreviation
Abbreviation libary is used to abbreviate long numbers  to string 1000 => 1k

## install  libary 
### using npm 
```sh
 npm i @jalato/abbreviate
 ```

### using yarn 
```sh 
yarn add @jalato/abbreviate
```
## examples of abbreviate libary

```js
import abbreviate from "@jalato/abbreviate";
// 1.23M 
abbreviate(1234567,false,2)

```
### importing
```js 
import abbreviate from "@jalato/abbreviate";
```
### arguments 

```js 
// takes 3 arguments abbreviate(number,maxPlace,forPlace,forceLetter)
/*
  { 
     number:Number,
     maxPlace:number | Boolean,
     forcePlace:number | Boolean,
     forceLetter:number | Boolean
  }
*/
abbreviate(number,Boolean,Boolean,Boolean)
